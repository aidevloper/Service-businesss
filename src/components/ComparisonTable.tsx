import React from 'react';
import { Check, X } from 'lucide-react';

export default function ComparisonTable() {
  const features = [
    {
      feature: 'Cost',
      smartTracker: '₹499 One-Time (Lifetime Access)',
      typicalCRM: '₹1000–₹5000/month Forever',
      icon: '💸'
    },
    {
      feature: 'Setup Time',
      smartTracker: 'Ready in 5 Minutes',
      typicalCRM: 'Takes Hours to Configure',
      icon: '⚡'
    },
    {
      feature: 'Ease of Use',
      smartTracker: 'Beginner-Friendly, No Learning Curve',
      typicalCRM: 'Complex UI, Training Required',
      icon: '🧠'
    },
    {
      feature: 'Login Required?',
      smartTracker: 'No Login – Just a Google Sheet',
      typicalCRM: 'Requires Multiple Logins',
      icon: '🔐'
    },
    {
      feature: 'Mobile Access',
      smartTracker: 'Fully Mobile-Friendly',
      typicalCRM: 'Often Broken or Cluttered on Mobile',
      icon: '📱'
    },
    {
      feature: 'Customizable?',
      smartTracker: '100% Editable Google Sheet',
      typicalCRM: 'Locked Behind Expensive Upgrades',
      icon: '🔄'
    },
    {
      feature: 'Speed',
      smartTracker: 'Blazing Fast & Lightweight',
      typicalCRM: 'Slow, Lags, and Overwhelming',
      icon: '🚀'
    },
    {
      feature: 'Ownership',
      smartTracker: 'Fully Yours – Forever',
      typicalCRM: 'SaaS Controlled – Lose Access if Unpaid',
      icon: '🧾'
    }
  ];

  return (
    <section id="comparison" className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Why Choose This Smart Business Tracker Over Expensive CRMs?
            </span>
          </h2>
        </div>

        <div className="overflow-x-auto">
          <div className="min-w-full inline-block align-middle">
            <div className="overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead>
                  <tr className="bg-gray-50 dark:bg-gray-800">
                    <th scope="col" className="px-6 py-4 text-left text-base font-bold text-gray-900 dark:text-white">
                      🔍 Feature
                    </th>
                    <th scope="col" className="px-6 py-4 text-left text-base font-bold text-green-600 dark:text-green-400">
                      ✅ Smart Tracker (You Get)
                    </th>
                    <th scope="col" className="px-6 py-4 text-left text-base font-bold text-red-600 dark:text-red-400">
                      ❌ Typical CRM Tools
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {features.map((item, index) => (
                    <tr key={index} className="bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap text-base font-semibold text-gray-900 dark:text-white">
                        <div className="flex items-center">
                          <span className="mr-2">{item.icon}</span>
                          {item.feature}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-base font-semibold text-gray-800 dark:text-gray-200">
                        <div className="flex items-center">
                          <Check className="w-5 h-5 text-green-500 mr-2" />
                          {item.smartTracker}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-base font-semibold text-gray-800 dark:text-gray-200">
                        <div className="flex items-center">
                          <X className="w-5 h-5 text-red-500 mr-2" />
                          {item.typicalCRM}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 