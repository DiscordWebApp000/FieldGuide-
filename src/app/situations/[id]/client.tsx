'use client';

import Link from 'next/link';

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

function getCategoryId(category: string): string {
  const categoryIds: Record<string, string> = {
    'Stansiya': 'stansiya',
    'Transformator': 'transformator',
    'Mühafizə': 'muhafize',
    'Kabel': 'kabel',
    'Elektrik Panosu': 'elektrik-panosu',
    'Ətraf Mühit': 'etraf-muhit'
  };
  return categoryIds[category] || category.toLowerCase().replace(/\s+/g, '-');
}

function getCategoryTitle(category: string): string {
  const titles: Record<string, string> = {
    'Stansiya': 'Stansiya Nasazlıqları',
    'Transformator': 'Transformator Nasazlıqları',
    'Mühafizə': 'Mühafizə Sistemi Nasazlıqları',
    'Kabel': 'Kabel Nasazlıqları',
    'Elektrik Panosu': 'Elektrik Panosu Nasazlıqları',
    'Ətraf Mühit': 'Ətraf Mühit Nasazlıqları'
  };
  return titles[category] || category;
}

export function PageHeader({ situation }: { situation: SituationType }) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
      <div className="flex items-center gap-2 text-sm mb-4 text-gray-500">
        <Link href="/" className="hover:text-blue-600">Ana Səhifə</Link>
        <span>/</span>
        <Link href={`/category/${getCategoryId(situation.category)}`} className="hover:text-blue-600">
          {getCategoryTitle(situation.category)}
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