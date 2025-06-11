import React, { useState, useEffect } from 'react';

const UrgencyBanner: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const endOfWeek = new Date();
      endOfWeek.setHours(23, 59, 59, 999);
      endOfWeek.setDate(now.getDate() + (7 - now.getDay())); // Set to next Sunday

      const difference = endOfWeek.getTime() - now.getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-red-600 to-orange-500 text-white py-2 px-2 sm:py-3 sm:px-4 shadow-lg text-xs sm:text-base">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 text-center sm:text-left">
        <div className="flex-1 truncate text-ellipsis overflow-hidden whitespace-nowrap">
          <span className="font-bold">🎉 Limited-Time Launch Offer</span>
          <span className="mx-1">|</span>
          <span>Get the All-in-One Tracker for just ₹499 instead of ₹599</span>
        </div>
        <div className="flex items-center gap-1 sm:gap-2 mt-1 sm:mt-0">
          <span className="text-xs sm:text-sm">⏳ Offer ends in:</span>
          <div className="flex gap-0.5 sm:gap-1">
            <span className="bg-white/20 px-1.5 py-0.5 rounded">{timeLeft.days}d</span>
            <span className="bg-white/20 px-1.5 py-0.5 rounded">{timeLeft.hours}h</span>
            <span className="bg-white/20 px-1.5 py-0.5 rounded">{timeLeft.minutes}m</span>
            <span className="bg-white/20 px-1.5 py-0.5 rounded">{timeLeft.seconds}s</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UrgencyBanner; 
