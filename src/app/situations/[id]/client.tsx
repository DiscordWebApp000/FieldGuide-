'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';

type SituationType = {
  id: string;
  category: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  causes: string[];
  solutions: string[];
  subheadings: string[];
};

export function CheckList() {
  const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>({});
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
            <div className="w-4 h-4 border border-gray-300 rounded" />
            <span className="text-gray-700">{item}</span>
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
            className="w-4 h-4 text-blue-600"
            checked={checkedItems[index] || false}
            onChange={(e) => setCheckedItems(prev => ({
              ...prev,
              [index]: e.target.checked
            }))}
          />
          <span className="text-gray-700">{item}</span>
        </div>
      ))}
    </div>
  );
}

export function PageHeader({ situation }: { situation: SituationType }) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
      <div className="flex items-center gap-2 text-sm mb-4 text-gray-500">
        <Link href="/" className="hover:text-blue-600">Ana Səhifə</Link>
        <span>/</span>
        <Link href={`/category/${situation.category.toLowerCase()}`} className="hover:text-blue-600">
          {situation.category}
        </Link>
      </div>

      <div className="flex items-center gap-4">
        <span className="text-4xl">{situation.icon}</span>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">{situation.title}</h1>
          <p className="text-gray-600 mt-1">{situation.shortDescription}</p>
        </div>
      </div>
    </div>
  );
}

export function Section({ title, children, type = "default" }: { 
  title: string; 
  children: React.ReactNode;
  type?: "default" | "warning" | "steps" 
}) {
  const bgColor = {
    default: "bg-white",
    warning: "bg-red-50",
    steps: "bg-blue-50"
  }[type];

  return (
    <div className={`${bgColor} rounded-lg shadow-sm p-6`}>
      <h2 className="text-xl font-semibold text-gray-900 mb-4">{title}</h2>
      {children}
    </div>
  );
} 