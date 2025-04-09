
// Adapted from the ui/use-toast.ts file for JSX compatibility
import { useState, useEffect } from "react";

const TOAST_LIMIT = 5;
const TOAST_REMOVE_DELAY = 1000000;

let count = 0;

function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER;
  return count.toString();
}

const toastTimeouts = new Map();

export const useToast = () => {
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    return () => {
      toastTimeouts.forEach((timeout) => {
        clearTimeout(timeout);
      });
      toastTimeouts.clear();
    };
  }, []);

  function toast({ ...props }) {
    const id = genId();

    setToasts((prevToasts) => {
      const newToasts = [
        { id, ...props },
        ...prevToasts.slice(0, TOAST_LIMIT - 1),
      ];

      return newToasts;
    });

    return {
      id,
      dismiss: () => dismiss(id),
      update: (props) => update(id, props),
    };
  }

  function dismiss(toastId) {
    if (toastTimeouts.has(toastId)) {
      clearTimeout(toastTimeouts.get(toastId));
      toastTimeouts.delete(toastId);
    }

    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== toastId));
  }

  function update(toastId, props) {
    setToasts((prevToasts) =>
      prevToasts.map((toast) =>
        toast.id === toastId ? { ...toast, ...props } : toast
      )
    );
  }

  return {
    toasts,
    toast,
    dismiss,
    update,
  };
};

export function toast(props) {
  // This is a dummy implementation for the standalone toast function
  console.log("Toast triggered:", props);
  return {
    id: genId(),
    dismiss: () => {},
    update: () => {},
  };
}
