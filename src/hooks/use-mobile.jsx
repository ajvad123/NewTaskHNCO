import * as React from "react"

// Standard breakpoints for different device types
const BREAKPOINTS = {
  mobile: 768,      // Devices narrower than 768px are considered mobile
  tablet: 1024,     // Devices narrower than 1024px are considered tablet
  smallMobile: 480   // Very small mobile devices
}

// Improved mobile detection hook
export function useDeviceType() {
  const [deviceType, setDeviceType] = React.useState<{
    isMobile: boolean
    isTablet: boolean
    isSmallMobile: boolean
  }>(() => ({
    isMobile: false,
    isTablet: false,
    isSmallMobile: false
  }))

  React.useEffect(() => {
    // Handle cases where window is not available (SSR)
    if (typeof window === "undefined") return

    const checkDeviceType = () => {
      const width = window.innerWidth
      const isMobile = width < BREAKPOINTS.mobile
      const isTablet = width >= BREAKPOINTS.mobile && width < BREAKPOINTS.tablet
      const isSmallMobile = width < BREAKPOINTS.smallMobile

      setDeviceType({
        isMobile,
        isTablet,
        isSmallMobile
      })
    }

    // Initial check
    checkDeviceType()

    // Set up media query listeners for all breakpoints
    const mobileMediaQuery = window.matchMedia(`(max-width: ${BREAKPOINTS.mobile - 1}px)`)
    const tabletMediaQuery = window.matchMedia(`(min-width: ${BREAKPOINTS.mobile}px) and (max-width: ${BREAKPOINTS.tablet - 1}px)`)
    const smallMobileMediaQuery = window.matchMedia(`(max-width: ${BREAKPOINTS.smallMobile - 1}px)`)

    const handleChange = () => checkDeviceType()

    mobileMediaQuery.addEventListener("change", handleChange)
    tabletMediaQuery.addEventListener("change", handleChange)
    smallMobileMediaQuery.addEventListener("change", handleChange)

    return () => {
      mobileMediaQuery.removeEventListener("change", handleChange)
      tabletMediaQuery.removeEventListener("change", handleChange)
      smallMobileMediaQuery.removeEventListener("change", handleChange)
    }
  }, [])

  return deviceType
}

// Backward compatible version if you just need mobile detection
export function useIsMobile() {
  const { isMobile } = useDeviceType()
  return isMobile
}