import React from 'react';

const StickyCTA: React.FC = () => (
  <div className="sticky-cta md:hidden">
    <div className="flex items-center justify-between px-3 py-2 w-full">
      <span className="font-semibold text-gray-900 text-sm truncate max-w-[60vw] overflow-hidden whitespace-nowrap">Start Using Tracker – Only ₹499</span>
      <a
        href="#pricing"
        className="ml-2 bg-gradient-to-r from-purple-600 to-blue-500 text-white px-4 py-2 rounded-full font-semibold shadow-md hover:scale-105 transition-transform text-sm"
      >
        Buy Now
      </a>
    </div>
    <style>{`
      @media screen and (max-width: 768px) {
        .sticky-cta {
          position: fixed;
          bottom: 0;
          left: 0;
          width: 100%;
          background: #fff;
          z-index: 999;
          box-shadow: 0 -2px 16px rgba(0,0,0,0.07);
        }
      }
    `}</style>
  </div>
);

export default StickyCTA; 
