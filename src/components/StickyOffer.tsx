import React, { useState } from 'react';

interface StickyOfferProps {
  isVisible: boolean;
  setIsVisible: (visible: boolean) => void;
}

export default function StickyOffer({ isVisible, setIsVisible }: StickyOfferProps) {
  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 h-20 bg-gradient-to-r from-purple-600 to-blue-500 text-white p-4 flex justify-between items-center shadow-lg z-50 md:hidden">
      <div className="flex-1">
        <p className="font-bold text-lg">🔥 Limited Time Offer!</p>
        <p>Get 50% off on all plans. Don't miss out!</p>
      </div>
      <button
        onClick={() => setIsVisible(false)}
        className="bg-white text-purple-600 px-4 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors"
      >
        Close
      </button>
    </div>
  );
} 