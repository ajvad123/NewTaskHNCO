
import { AlertTriangle } from 'lucide-react';

const Disclaimer = () => {
  return (
    <div className="bg-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto border border-gray-200 rounded-lg p-6">
        <div className="flex items-start">
          <AlertTriangle className="text-yellow-500 mr-4 mt-1 flex-shrink-0" size={24} />
          <div>
            <h3 className="text-xl font-bold mb-2">Disclaimer</h3>
            <p className="text-gray-700 mb-4">
              Visas are issued solely at the discretion of the respective Governments and we cannot guarantee their approval. Please note that we are not affiliated with any government agency. You have the option to apply for visas directly through the official Government websites or by visiting the relevant Embassy or Consulate. Applying through these official channels does not incur any service fees from us.
            </p>
            <div className="bg-gray-50 p-4 rounded-md">
              <p className="text-sm font-medium">Subscribe to our newsletter for exclusive travel deals, insider tips, and inspiring destinations—delivered straight to your inbox!</p>
              <button className="mt-2 flex items-center text-primary hover:text-primary-dark">
                <span>Subscribe</span>
                <svg className="ml-1" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="12" fill="#0071BC"/>
                  <path d="M10 16L14 12L10 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;
