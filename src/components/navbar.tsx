'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { CalendarCheck, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { MoonIcon, SunIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState('light');
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);
  const toggleTheme = () => {
    const updatedTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(updatedTheme);
    localStorage.setItem('theme', updatedTheme);
  };

  return (
    <header className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='container flex h-16 items-center justify-between'>
        <div className='flex items-center gap-2 font-bold text-xl'>
          <CalendarCheck className='h-6 w-6 text-primary' />
          <span>AppointmentSync</span>
        </div>

        {/* Desktop Navigation */}
        <nav className='hidden md:flex items-center gap-6'>
          <Link
            href='#features'
            className='text-sm font-medium hover:text-primary'
          >
            Features
          </Link>
          <Link
            href='#how-it-works'
            className='text-sm font-medium hover:text-primary'
          >
            How It Works
          </Link>
          <Link
            href='#pricing'
            className='text-sm font-medium hover:text-primary'
          >
            Pricing
          </Link>
        </nav>

        <div className='hidden md:flex items-center gap-4'>
          <div
            onClick={toggleTheme}
            className={cn(
              theme === 'dark' ? 'dark' : 'light',
              'flex flex-col items-center justify-between font-display overflow-hidden'
            )}
          >
            {theme == 'dark' ? (
              <SunIcon size={24} strokeWidth={1.5} />
            ) : (
              <MoonIcon size={24} strokeWidth={1.5} />
            )}
          </div>
          <Button variant='outline' size='sm'>
            Log In
          </Button>
          <Button size='sm'>Get Started</Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className='md:hidden'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label='Toggle menu'
        >
          {isMenuOpen ? (
            <X className='h-6 w-6' />
          ) : (
            <Menu className='h-6 w-6' />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className='md:hidden border-t'>
          <div className='container py-4 flex flex-col gap-4'>
            <nav className='flex flex-col gap-2'>
              <Link
                href='#features'
                className='text-sm font-medium p-2 hover:bg-muted rounded-md'
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </Link>
              <Link
                href='#how-it-works'
                className='text-sm font-medium p-2 hover:bg-muted rounded-md'
                onClick={() => setIsMenuOpen(false)}
              >
                How It Works
              </Link>
              <Link
                href='#pricing'
                className='text-sm font-medium p-2 hover:bg-muted rounded-md'
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>
            </nav>
            <div className='flex flex-col gap-2'>
              <Button variant='outline' className='w-full justify-start'>
                Log In
              </Button>
              <Button className='w-full justify-start'>Get Started</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
