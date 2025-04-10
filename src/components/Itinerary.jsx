
import { useState } from 'react';
import { ChevronDown, ChevronUp, Clock, MapPin, Info } from 'lucide-react';

const DayItem = ({ day, title, activities, isOpen, toggleOpen }) => {
  return (
    <div className="border rounded-md mb-4 overflow-hidden">
      <div 
        className="flex items-center justify-between p-4 bg-white cursor-pointer"
        onClick={toggleOpen}
      >
        <div className="flex items-center">
          <div className="flex-shrink-0 bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">
            {day}
          </div>
          <h3 className="font-semibold">{title}</h3>
        </div>
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </div>
      
      {isOpen && (
        <div className="p-4 bg-gray-50">
          <div className="pl-11">
            {activities.map((activity, index) => (
              <div key={index} className="relative pb-6">
                {index < activities.length - 1 && (
                  <div className="absolute top-0 left-[-18px] h-full w-0.5 bg-primary"></div>
                )}
                <div className="absolute top-1 left-[-22px] w-3 h-3 rounded-full bg-primary"></div>
                <div className="mb-2">
                  <p className="font-medium">{activity.title}</p>
                </div>
                {activity.details && (
                  <div className="text-sm text-gray-600 mb-2">
                    {activity.details}
                  </div>
                )}
                {activity.subItems && (
                  <ul className="list-disc pl-5 text-sm text-gray-600 mb-2">
                    {activity.subItems.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
                {activity.note && (
                  <div className="bg-yellow-50 p-2 rounded text-sm text-gray-700 mb-2">
                    <div className="flex items-start">
                      <Info size={16} className="text-yellow-500 mr-1 mt-0.5 flex-shrink-0" />
                      <p>{activity.note}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {day === "1" && (
            <div className="mt-4 border-t pt-4">
              <p className="text-sm text-gray-700 mb-1"><span className="font-semibold">Please note:</span> The Tour Manager will meet you at the hotel</p>
              <p className="text-sm text-gray-700 mb-1"><span className="font-semibold">Standard check-in time:</span> 3:00 pm</p>
              <p className="text-sm text-gray-700"><span className="font-semibold">Meals included:</span> Packed Indian dinner delivered to the hotel</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const Itinerary = () => {
  const [openDay, setOpenDay] = useState(1);

  const itineraryData = [
    {
      day: "1",
      title: "Arrival in Paris",
      activities: [
        {
          title: "Arrival at Paris Charles de Gaulle Airport",
        },
        {
          title: "Transfer to your hotel for check-in (in your own)",
        },
        {
          title: "Free time to relax and explore nearby attractions at your own pace",
        },
        {
          title: "Overnight in Paris",
        }
      ]
    },
    {
      day: "2",
      title: "Optional Disneyland Tour",
      activities: [
        {
          title: "Breakfast at the hotel",
        },
        {
          title: "Optional visit to Disneyland Paris (for those who choose the tour)",
          subItems: [
            "Explore Disneyland Park or Walt Disney Studios Park (at your choice)",
            "Enjoy a day of magical experiences and thrilling rides"
          ]
        },
        {
          title: "For those not visiting Disneyland:",
          details: "Free time to explore Paris independently"
        },
        {
          title: "Dinner at an Indian restaurant",
        },
        {
          title: "Overnight in Paris",
        }
      ]
    },
    {
      day: "3",
      title: "Paris Guided City Tour – Eiffel Tower Visit & River Seine Cruise",
      activities: [
        {
          title: "Breakfast at the hotel",
        },
        {
          title: "Full-day exploration of Paris:",
          subItems: [
            "Place de la Concorde",
            "Notre Dame de Paris",
            "Louvre Museum (exterior)",
            "Arc de Triomphe",
            "Champs-Elysées",
            "Montmartre district",
            "Concorde Square"
          ]
        },
        {
          title: "Visit to the 2nd level of the Eiffel Tower for panoramic views",
        },
        {
          title: "Seine River cruise",
        },
        {
          title: "Dinner at an Indian restaurant",
        },
        {
          title: "Overnight in Paris",
        }
      ]
    },
    {
      day: "4",
      title: "Brussels (Belgium) – Amsterdam (Netherland)",
      activities: [
        {
          title: "Breakfast and check out from the hotel",
        },
        {
          title: "Drive to Amsterdam via Brussels",
        },
        {
          title: "Enjoy a guided sightseeing tour in Brussels of:",
          subItems: [
            "Grand Place and its famous guild houses",
            "City Museum",
            "Manneken Pis",
            "Atomium",
            "Royal Palace of Brussels",
            "Palace of Justice",
            "Royal Museum of Fine Arts"
          ]
        },
        {
          title: "Photo stop at the Atomium",
        },
        {
          title: "Proceed to Amsterdam",
        },
        {
          title: "Enjoy a canal cruise in a glass-topped boat, offering stunning views of the city's colorful buildings, luxe homs and bustling canals",
        },
        {
          title: "Dinner at an Indian restaurant",
        },
        {
          title: "Transfer to your hotel for check-in in Amsterdam",
        },
        {
          title: "Overnight in Amsterdam",
        }
      ]
    }
  ];

  const toggleDay = (day) => {
    setOpenDay(openDay === day ? null : day);
  };

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Itinerary</h2>
          <button className="flex items-center text-primary hover:text-primary-dark">
            <span>Load More</span>
            <ChevronDown size={16} className="ml-1" />
          </button>
        </div>
        
        {itineraryData.map((item) => (
          <DayItem
            key={item.day}
            day={item.day}
            title={item.title}
            activities={item.activities}
            isOpen={parseInt(item.day) === openDay}
            toggleOpen={() => toggleDay(parseInt(item.day))}
          />
        ))}
      </div>
    </div>
  );
};

export default Itinerary;
