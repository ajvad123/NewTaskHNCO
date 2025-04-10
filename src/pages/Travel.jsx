import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import TravelDetails from '../components/TravelDetails'
import Itinerary from '../components/Itinerary'
import Disclaimer from '../components/Disclaimer'
import FAQ from '../components/FAQ'
import Newsletter from '../components/CustomerReviewForm'
import Reviews from '../components/Reviews'
import CustomerReviewForm from '../components/CustomerReviewForm'



function Travel() {
  return (

    <div className="min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-grow">
        <div className="bg-white">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" 
              alt="European City View" 
              className="w-full h-48 md:h-72 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center">
              <div className="container mx-auto px-4">
                <h1 className="text-3xl md:text-4xl font-bold text-white">European Extravaganza</h1>
              </div>
            </div>
          </div>

          <TravelDetails />
          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <Itinerary />
                <Reviews />
                <Disclaimer />
                <FAQ />
              </div>
              
              <div className="lg:col-span-1">
                <div className="bg-white shadow-md rounded-lg p-6 sticky top-4">
                  <CustomerReviewForm />
                </div>
              </div>
            </div>
          </div>

          
          
        </div>
      </main>
    
    
    <Footer />
  </div>
  )
}

export default Travel