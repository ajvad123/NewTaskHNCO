
import { Calendar, MapPin, Users, Info, Star, ChevronDown, Plane, Hotel, Utensils, DollarSign, Clock, Check } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';

const TravelDetailsHeader = () => {

    const navigate=useNavigate()

    const handleNavigate=()=>{
        navigate('/holiday')
    }
    
  return (
    <div id='boffer' className="bg-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb navigation */}
        <div className="flex items-center gap-2 text-sm mb-4">
          <a href="/" className="text-gray-600 hover:text-primary">Home</a>
          <span className="text-gray-400">/</span>
          <a href="/holiday" className="text-gray-600 hover:text-primary">Holiday</a>
          <span className="text-gray-400">/</span>
          <span className="text-gray-800 font-medium">European Extravaganza</span>
        </div>
        
        <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6">
          {/* Left column with details */}
          <div className="lg:w-2/3">
            {/* Special offer tag and title */}
            <div className="flex items-start mb-3">
              <div className="relative">
                <div className="bg-blue-800 text-white px-4 py-1 font-semibold uppercase text-xs tracking-wider skew-x-[-15deg] transform">
                  SPECIAL
                </div>
                <div className="bg-yellow-400 text-blue-900 px-4 py-1 font-semibold uppercase text-xs tracking-wider skew-x-[-15deg] transform -mt-1 ml-6">
                  OFFER
                </div>
              </div>
            </div>
            
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
              European Elegance: A Journey Through Paris, Amsterdam, Frankfurt & Zurich
            </h1>
            
            <div className="flex items-center mb-4">
              <span className="text-gray-700 mr-2">Western Europe</span>
              <div className="flex items-center mr-2">
                <Star size={14} fill="#FFCC00" color="#FFCC00" />
                <Star size={14} fill="#FFCC00" color="#FFCC00" />
                <Star size={14} fill="#FFCC00" color="#FFCC00" />
                <Star size={14} fill="#FFCC00" color="#FFCC00" />
                <Star size={14} fill="#FFCC00" color="#FFCC00" />
              </div>
              <span className="text-gray-600 text-sm">4.9 (340+ Reviews)</span>
            </div>
            
            {/* Tour image */}
            <div className="rounded-lg overflow-hidden relative mb-4">
              <img 
                src="https://images.unsplash.com/photo-1431274172761-fca41d930114?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Paris Eiffel Tower" 
                className="w-full h-64 md:h-80 object-cover"
              />
              <div className="absolute bottom-3 left-3 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs">
                <span>Paris, France</span>
              </div>
            </div>
            
            {/* Tour highlights */}
            <div className="flex flex-wrap gap-3 mb-4">
              <div className="flex items-center border rounded-full px-3 py-1 text-sm">
                <MapPin size={14} className="mr-1" />
                <span>Visit 4 Countries</span>
              </div>
              <div className="flex items-center border rounded-full px-3 py-1 text-sm">
                <Calendar size={14} className="mr-1" />
                <span>10 Days & 9 Nights</span>
              </div>
              <div className="flex items-center border rounded-full px-3 py-1 text-sm">
                <Users size={14} className="mr-1" />
                <span>4 Locations</span>
              </div>
            </div>
          </div>
          
          {/* Right column with pricing */}
          <div className="lg:w-1/3 bg-gray-50 p-5 rounded-lg">
            <h2 className="text-lg font-bold mb-3">9 Nights in Europe: From Paris to Zurich</h2>
            
            <div className="bg-yellow-50 rounded-md p-3 mb-4 flex items-center">
              <Calendar size={16} className="text-yellow-500 mr-2 flex-shrink-0" />
              <span className="text-sm font-medium">Travel Dates: 29 Nov - 02 Dec 2025</span>
            </div>
            
            <div className="mb-4">
              <p className="text-gray-700 text-sm mb-2">Embark on a captivating 10-day journey through the heart of Europe, where timeless elegance meets modern charm. Begin in the romantic streets of Paris, the City of Light, where iconic landmarks like the Eiffel Tower and Louvre await.</p>
            </div>
            
            <div className="border-t pt-4">
              <div className="flex justify-between items-center mb-5">
                <div>
                  <span className="text-gray-500 text-sm block">Price</span>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-500 line-through">7,456 AED</span>
                    <span className="text-3xl font-bold text-blue-600">5356 AED</span>
                    <span className="text-xs text-gray-500">per person</span>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-3">
                <button onClick={handleNavigate} className="bg-blue-600 text-white py-2 px-6 rounded-md font-medium hover:bg-blue-700 transition w-1/2">
                  Book Now
                </button>
                <button className="bg-transparent border border-blue-600 text-blue-600 py-2 px-6 rounded-md font-medium hover:bg-blue-50 transition w-1/2">
                  Enquiry
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FlightDetails = () => {
  return (
    <div id='flight' className="bg-white py-8 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 mb-6">
          <Plane className="text-blue-600" size={24} />
          <h2 className="text-xl font-bold">Flight Details</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2">
                <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">Outbound</Badge>
                Paris to Amsterdam
              </CardTitle>
              <CardDescription>Fri, 29 Nov 2025 • Air France</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-start justify-between">
                <div className="text-center">
                  <p className="text-xl font-bold">08:25</p>
                  <p className="text-sm text-gray-500">CDG</p>
                </div>
                <div className="flex-1 px-4 flex flex-col items-center">
                  <div className="text-xs text-gray-500 mb-1 font-medium">1h 15m</div>
                  <div className="w-full flex items-center">
                    <div className="h-[2px] flex-1 bg-gray-300"></div>
                    <Plane size={16} className="mx-1 text-gray-400 transform rotate-90" />
                    <div className="h-[2px] flex-1 bg-gray-300"></div>
                  </div>
                  <div className="text-xs text-gray-500 mt-1">Direct</div>
                </div>
                <div className="text-center">
                  <p className="text-xl font-bold">09:40</p>
                  <p className="text-sm text-gray-500">AMS</p>
                </div>
              </div>

              <div className="flex items-center mt-4 text-sm text-gray-600">
                <Check size={14} className="text-green-500 mr-1" />
                <span>20kg checked baggage included</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2">
                <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">Return</Badge>
                Zurich to Paris
              </CardTitle>
              <CardDescription>Mon, 02 Dec 2025 • Swiss Air</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-start justify-between">
                <div className="text-center">
                  <p className="text-xl font-bold">17:40</p>
                  <p className="text-sm text-gray-500">ZRH</p>
                </div>
                <div className="flex-1 px-4 flex flex-col items-center">
                  <div className="text-xs text-gray-500 mb-1 font-medium">1h 30m</div>
                  <div className="w-full flex items-center">
                    <div className="h-[2px] flex-1 bg-gray-300"></div>
                    <Plane size={16} className="mx-1 text-gray-400 transform rotate-90" />
                    <div className="h-[2px] flex-1 bg-gray-300"></div>
                  </div>
                  <div className="text-xs text-gray-500 mt-1">Direct</div>
                </div>
                <div className="text-center">
                  <p className="text-xl font-bold">19:10</p>
                  <p className="text-sm text-gray-500">CDG</p>
                </div>
              </div>

              <div className="flex items-center mt-4 text-sm text-gray-600">
                <Check size={14} className="text-green-500 mr-1" />
                <span>20kg checked baggage included</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6 text-sm text-gray-600 bg-gray-50 p-4 rounded-lg">
          <p className="flex items-center"><Info size={14} className="mr-2 text-blue-500" /> All flights include in-flight meals and beverages. Connection flights between destinations are included in the package.</p>
        </div>
      </div>
    </div>
  );
};

const AccommodationDetails = () => {
  return (
    <div id='accomed' className="bg-white py-8 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 mb-6">
          <Hotel className="text-blue-600" size={24} />
          <h2 className="text-xl font-bold">Accommodation</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <div className="relative h-48 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Hotel in Paris"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 right-2">
                <Badge className="bg-white text-blue-600">Paris</Badge>
              </div>
            </div>
            <CardHeader>
              <CardTitle>Le Grand Hôtel Paris</CardTitle>
              <CardDescription className="flex items-center">
                <div className="flex mr-2">
                  <Star size={14} fill="#FFCC00" color="#FFCC00" />
                  <Star size={14} fill="#FFCC00" color="#FFCC00" />
                  <Star size={14} fill="#FFCC00" color="#FFCC00" />
                  <Star size={14} fill="#FFCC00" color="#FFCC00" />
                </div>
                <span>City Center • 3 Nights</span>
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <div className="flex items-start">
                <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <p>Deluxe room with Eiffel Tower view</p>
              </div>
              <div className="flex items-start">
                <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <p>Daily breakfast included</p>
              </div>
              <div className="flex items-start">
                <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <p>Free Wi-Fi and access to spa facilities</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <div className="relative h-48 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Hotel in Amsterdam" 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 right-2">
                <Badge className="bg-white text-blue-600">Amsterdam</Badge>
              </div>
            </div>
            <CardHeader>
              <CardTitle>Canal View Suites</CardTitle>
              <CardDescription className="flex items-center">
                <div className="flex mr-2">
                  <Star size={14} fill="#FFCC00" color="#FFCC00" />
                  <Star size={14} fill="#FFCC00" color="#FFCC00" />
                  <Star size={14} fill="#FFCC00" color="#FFCC00" />
                  <Star size={14} fill="#FFCC00" color="#FFCC00" />
                </div>
                <span>Canal District • 2 Nights</span>
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <div className="flex items-start">
                <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <p>Junior suite with canal views</p>
              </div>
              <div className="flex items-start">
                <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <p>Daily breakfast and evening reception</p>
              </div>
              <div className="flex items-start">
                <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <p>Complimentary bicycle rental</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <div className="relative h-48 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1560624052-449f5ddf0c31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Hotel in Frankfurt" 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 right-2">
                <Badge className="bg-white text-blue-600">Frankfurt</Badge>
              </div>
            </div>
            <CardHeader>
              <CardTitle>Riverside Hotel Frankfurt</CardTitle>
              <CardDescription className="flex items-center">
                <div className="flex mr-2">
                  <Star size={14} fill="#FFCC00" color="#FFCC00" />
                  <Star size={14} fill="#FFCC00" color="#FFCC00" />
                  <Star size={14} fill="#FFCC00" color="#FFCC00" />
                  <Star size={14} fill="#FFCC00" color="#FFCC00" />
                  <Star size={14} fill="#FFCC00" color="#FFCC00" />
                </div>
                <span>River District • 2 Nights</span>
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <div className="flex items-start">
                <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <p>Executive room with river view</p>
              </div>
              <div className="flex items-start">
                <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <p>Gourmet breakfast buffet</p>
              </div>
              <div className="flex items-start">
                <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <p>Access to executive lounge</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <div className="relative h-48 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Hotel in Zurich" 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 right-2">
                <Badge className="bg-white text-blue-600">Zurich</Badge>
              </div>
            </div>
            <CardHeader>
              <CardTitle>Alpine Luxury Zurich</CardTitle>
              <CardDescription className="flex items-center">
                <div className="flex mr-2">
                  <Star size={14} fill="#FFCC00" color="#FFCC00" />
                  <Star size={14} fill="#FFCC00" color="#FFCC00" />
                  <Star size={14} fill="#FFCC00" color="#FFCC00" />
                  <Star size={14} fill="#FFCC00" color="#FFCC00" />
                  <Star size={14} fill="#FFCC00" color="#FFCC00" />
                </div>
                <span>Lake District • 2 Nights</span>
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <div className="flex items-start">
                <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <p>Premium suite with lake view</p>
              </div>
              <div className="flex items-start">
                <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <p>Gourmet breakfast and dinner included</p>
              </div>
              <div className="flex items-start">
                <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <p>Complimentary spa treatment</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

const PricingDetails = () => {
  return (
    <div id='booking' className="bg-white py-8 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 mb-6">
          <DollarSign className="text-blue-600" size={24} />
          <h2 className="text-xl font-bold">Pricing Details</h2>
        </div>

        <div className="bg-blue-50 rounded-lg p-5 mb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
            <div>
              <h3 className="text-lg font-bold text-blue-800">Holiday Package</h3>
              <p className="text-sm text-blue-700">All-inclusive European Experience</p>
            </div>
            <div className="mt-2 md:mt-0">
              <div className="flex items-center gap-2">
                <span className="text-gray-500 line-through">7,456 AED</span>
                <span className="text-2xl font-bold text-blue-700">5,356 AED</span>
                <Badge className="bg-yellow-400 text-blue-900">Save 28%</Badge>
              </div>
              <p className="text-xs text-blue-700 text-right">per person based on double occupancy</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
            <div className="bg-white p-3 rounded-md flex items-start">
              <Plane size={18} className="text-blue-500 mr-2 mt-0.5" />
              <div>
                <h4 className="font-medium text-sm">Flights</h4>
                <p className="text-xs text-gray-600">Round-trip flights included</p>
              </div>
            </div>
            <div className="bg-white p-3 rounded-md flex items-start">
              <Hotel size={18} className="text-blue-500 mr-2 mt-0.5" />
              <div>
                <h4 className="font-medium text-sm">Hotels</h4>
                <p className="text-xs text-gray-600">9 nights across 4 cities</p>
              </div>
            </div>
            <div className="bg-white p-3 rounded-md flex items-start">
              <Utensils size={18} className="text-blue-500 mr-2 mt-0.5" />
              <div>
                <h4 className="font-medium text-sm">Meals</h4>
                <p className="text-xs text-gray-600">Daily breakfast + 5 dinners</p>
              </div>
            </div>
          </div>

          <Button className="w-full md:w-auto bg-blue-600 hover:bg-blue-700">Book This Package</Button>
        </div>

        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>What's Included</TableHead>
                <TableHead>Details</TableHead>
                <TableHead className="text-right">Value</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">International Flights</TableCell>
                <TableCell>Round-trip economy class flights</TableCell>
                <TableCell className="text-right">1,800 AED</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Hotel Accommodations</TableCell>
                <TableCell>9 nights in 4-5 star hotels</TableCell>
                <TableCell className="text-right">2,400 AED</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Meals</TableCell>
                <TableCell>Daily breakfast and 5 dinners</TableCell>
                <TableCell className="text-right">720 AED</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Guided Tours</TableCell>
                <TableCell>Professional local guides in each city</TableCell>
                <TableCell className="text-right">950 AED</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Transportation</TableCell>
                <TableCell>Luxury coach between cities and attractions</TableCell>
                <TableCell className="text-right">680 AED</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Entrance Fees</TableCell>
                <TableCell>All attraction tickets as per itinerary</TableCell>
                <TableCell className="text-right">450 AED</TableCell>
              </TableRow>
              <TableRow className="bg-gray-50">
                <TableCell className="font-bold">Total Value</TableCell>
                <TableCell></TableCell>
                <TableCell className="text-right font-bold">7,000 AED</TableCell>
              </TableRow>
              <TableRow className="bg-blue-50">
                <TableCell className="font-bold text-blue-700">Your Price</TableCell>
                <TableCell><Badge className="bg-yellow-400 text-blue-900">Limited Time Offer</Badge></TableCell>
                <TableCell className="text-right font-bold text-blue-700">5,356 AED</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <div className="mt-6 text-sm text-gray-700 bg-gray-50 p-4 rounded-lg">
          <h4 className="font-bold mb-2">Payment Options:</h4>
          <ul className="space-y-2">
            <li className="flex items-start">
              <Check size={16} className="text-green-500 mr-2 mt-0.5" />
              <span>Pay in full and receive an additional 5% discount</span>
            </li>
            <li className="flex items-start">
              <Check size={16} className="text-green-500 mr-2 mt-0.5" />
              <span>Pay a 30% deposit now and the remaining balance 45 days before departure</span>
            </li>
            <li className="flex items-start">
              <Check size={16} className="text-green-500 mr-2 mt-0.5" />
              <span>Interest-free monthly installments available (subject to approval)</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const TravelHighlights = () => {
  return (
    <div className="bg-white py-6 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold flex items-center">
            <span className="mr-2">Itinerary</span>
            <button className="bg-gray-100 rounded-full p-1">
              <Info size={14} />
            </button>
          </h2>
          <ChevronDown size={20} className="text-gray-500" />
        </div>
        
        <div className="bg-gray-50 rounded-lg p-4 mb-4">
          <div className="flex items-start">
            <div className="flex-shrink-0 bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">
              1
            </div>
            <div>
              <h3 className="font-semibold">Day 1</h3>
              <p className="text-gray-700 text-sm mt-1">Arrival in Paris</p>
              <p className="text-gray-500 text-xs mt-1">Arrival at Paris Charles de Gaulle Airport</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TravelDetails = () => {
  return (
    <div>
      <TravelDetailsHeader />
      <FlightDetails />
      <AccommodationDetails />
      <PricingDetails />
      <TravelHighlights />
    </div>
  );
};

export default TravelDetails;
