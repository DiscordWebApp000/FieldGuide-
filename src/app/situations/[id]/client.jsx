'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';

export function CheckList() {
  const [checkedItems, setCheckedItems] = useState({});
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const checklistItems = [
    "Enerji kəsmə əməliyyatı yerinə yetirildi",
    "Təhlükəsizlik avadanlıqları yoxlanıldı",
    "Lazımi icazələr alındı",
    "Təmir addımları tamamlandı",
    "Son yoxlamalar aparıldı"
  ];

  if (!isClient) {
    return (
      <div className="space-y-2">
        {checklistItems.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <div className="w-4 h-4 border border-gray-300 dark:border-gray-600 rounded" />
            <span className="text-gray-700 dark:text-gray-300">{item}</span>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {checklistItems.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          <input
            type="checkbox"
            className="w-4 h-4 text-blue-600 dark:text-blue-400 bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 rounded focus:ring-blue-500 dark:focus:ring-blue-400"
            checked={checkedItems[index] || false}
            onChange={(e) => setCheckedItems(prev => ({
              ...prev,
              [index]: e.target.checked
            }))}
          />
          <span className="text-gray-700 dark:text-gray-300">{item}</span>
        </div>
      ))}
    </div>
  );
}

export function PageHeader({ situation }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 mb-6">
      <div className="flex items-center gap-2 text-sm mb-4 text-gray-500 dark:text-gray-400">
        <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">Ana Səhifə</Link>
        <span>/</span>
        <Link href={`/category/${situation.category.toLowerCase()}`} className="hover:text-blue-600 dark:hover:text-blue-400">
          {situation.category}
        </Link>
      </div>

      <div className="flex items-center gap-4">
        <span className="text-4xl">{situation.icon}</span>
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{situation.title}</h1>
          <p className="text-gray-600 dark:text-gray-300 mt-1">{situation.shortDescription}</p>
        </div>
      </div>
    </div>
  );
}

export function Section({ title, children, type = "default" }) {
  const bgColor = {
    default: "bg-white dark:bg-gray-800",
    warning: "bg-red-50 dark:bg-red-900/20",
    steps: "bg-blue-50 dark:bg-blue-900/20"
  }[type];

  return (
    <div className={`${bgColor} rounded-lg shadow-sm p-6`}>
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{title}</h2>
      {children}
    </div>
  );
} 