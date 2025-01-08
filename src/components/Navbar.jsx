'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-[#1e2837] text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="Logo"
                width={120}
                height={40}
                className="h-8 w-auto"
                priority
                style={{
                  objectFit: 'contain',
                  filter: 'brightness(0) invert(1)'
                }}
              />
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/"
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                pathname === '/'
                  ? 'text-white'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Vəziyyətlər
            </Link>
            <Link
              href="/test"
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                pathname.startsWith('/test')
                  ? 'text-white'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Qiymətləndirmə
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-[#2a374a] focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/"
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  pathname === '/'
                    ? 'text-white bg-[#2a374a]'
                    : 'text-gray-300 hover:text-white hover:bg-[#2a374a]'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Vəziyyətlər
              </Link>
              <Link
                href="/test"
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  pathname.startsWith('/test')
                    ? 'text-white bg-[#2a374a]'
                    : 'text-gray-300 hover:text-white hover:bg-[#2a374a]'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Qiymətləndirmə
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
} 