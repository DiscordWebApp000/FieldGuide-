'use client';

import { situations } from '@/data/situations.json';
import Link from 'next/link';
import { useState } from 'react';

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

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  
  const categories = situations.reduce((acc, situation) => {
    if (!acc[situation.category]) {
      acc[situation.category] = {
        situations: [],
        title: getCategoryTitle(situation.category),
        icon: situation.icon,
        id: getCategoryId(situation.category)
      };
    }
    acc[situation.category].situations.push(situation);
    return acc;
  }, {} as Record<string, { situations: typeof situations; title: string; icon: string; id: string }>);

  const filteredCategories = Object.entries(categories).reduce((acc, [key, category]) => {
    const filteredSituations = category.situations.filter(situation =>
      situation.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      situation.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      situation.fullDescription.toLowerCase().includes(searchQuery.toLowerCase())
    );
    
    if (filteredSituations.length > 0) {
      acc[key] = {
        ...category,
        situations: filteredSituations
      };
    }
    return acc;
  }, {} as typeof categories);

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Elektrik Nasazlıq Növləri
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Elektrik paylama sistemlərində rast gəlinən nasazlıq növləri və həll yolları
          </p>
          
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Nasazlıq növü və ya açar söz daxil edin..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(filteredCategories).map(([categoryKey, category]) => (
            <Link
              href={`/category/${category.id}`}
              key={categoryKey}
              className="group block bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-50 group-hover:bg-blue-100 transition-colors">
                    <span className="text-3xl">{category.icon}</span>
                  </div>
                  <h2 className="text-xl font-semibold ml-4 text-gray-900 group-hover:text-blue-600 transition-colors">
                    {category.title}
                  </h2>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-gray-600">
                    {category.situations.length} vəziyyət var
                  </p>
                  <span className="text-blue-600 group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {Object.keys(filteredCategories).length === 0 && searchQuery && (
          <div className="text-center py-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Heç bir nəticə tapılmadı
            </h3>
            <p className="text-gray-600">
              Axtarışınıza uyğun nasazlıq vəziyyəti tapılmadı. Zəhmət olmasa başqa açar sözlər sınayın.
            </p>
          </div>
        )}
      </div>
    </main>
  );
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
