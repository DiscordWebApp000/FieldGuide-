'use client';

import Link from 'next/link';
import { useState } from 'react';

function getCategoryTitle(categoryId) {
  const titles = {
    'stansiya': 'Stansiya Nasazlıqları',
    'transformator': 'Transformator Nasazlıqları',
    'muhafize': 'Mühafizə Sistemi Nasazlıqları',
    'kabel': 'Kabel Nasazlıqları',
    'elektrik-panosu': 'Elektrik Panosu Nasazlıqları',
    'etraf-muhit': 'Ətraf Mühit Nasazlıqları'
  };
  return titles[categoryId] || categoryId;
}

export function CategoryHeader({ categoryId, situationsCount }) {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-sm rounded-xl p-6 mb-8">
      <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 mb-4">
        <Link 
          href="/"
          className="flex items-center hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          Ana Sayfa
        </Link>
        <span className="text-gray-400 dark:text-gray-600">/</span>
        <span className="font-medium text-gray-800 dark:text-gray-200">{getCategoryTitle(categoryId)}</span>
      </div>

      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
            {getCategoryTitle(categoryId)}
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Bu kateqoriyada nasazlıq növləri və həlli üsulları
          </p>
        </div>
        <div className="hidden md:block">
          <span className="inline-flex items-center px-4 py-2 rounded-lg bg-blue-50 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-sm font-medium">
            {situationsCount} Durum
          </span>
        </div>
      </div>
    </div>
  );
}

export function SearchBox({ defaultValue = '' }) {
  const [value, setValue] = useState(defaultValue);

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = new URL(window.location.href);
    url.searchParams.set('q', value);
    window.history.pushState({}, '', url.toString());
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="relative max-w-2xl mx-auto">
        <input
          type="text"
          placeholder="Bu kateqoriyada axtarış edin..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 transition-colors"
        />
        <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      </div>
    </form>
  );
}

export function SituationCard({ situation }) {
  return (
    <Link
      href={`/situations/${situation.id}`}
      className="group bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
    >
      <div className="p-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-xl bg-blue-50 dark:bg-blue-900 group-hover:bg-blue-100 dark:group-hover:bg-blue-800 transition-colors">
            <span className="text-2xl">{situation.icon}</span>
          </div>
          <div className="flex-grow min-w-0">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-2 truncate">
              {situation.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-2">
              {situation.shortDescription}
            </p>
          </div>
          <div className="hidden md:flex items-center text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
} 