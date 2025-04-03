import Link from 'next/link';
import { CalendarCheck } from 'lucide-react';

export function Footer() {
  return (
    <footer className='border-t bg-muted/40'>
      <div className='container py-12 md:py-16'>
        <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8'>
          <div className='col-span-2 lg:col-span-2'>
            <div className='flex items-center gap-2 font-bold text-xl mb-4'>
              <CalendarCheck className='h-6 w-6 text-primary' />
              <span>AppointmentSync</span>
            </div>
            <p className='text-muted-foreground mb-4 max-w-xs'>
              Automate your appointment scheduling and client notifications with
              our powerful platform.
            </p>
            <div className='flex gap-4'>
              <a
                href='#'
                className='text-muted-foreground hover:text-foreground'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='20'
                  height='20'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path d='M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z'></path>
                </svg>
              </a>
              <a
                href='#'
                className='text-muted-foreground hover:text-foreground'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='20'
                  height='20'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path d='M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z'></path>
                </svg>
              </a>
              <a
                href='#'
                className='text-muted-foreground hover:text-foreground'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='20'
                  height='20'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <rect x='2' y='2' width='20' height='20' rx='5' ry='5'></rect>
                  <path d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z'></path>
                  <line x1='17.5' y1='6.5' x2='17.51' y2='6.5'></line>
                </svg>
              </a>
              <a
                href='#'
                className='text-muted-foreground hover:text-foreground'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='20'
                  height='20'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z'></path>
                  <rect x='2' y='9' width='4' height='12'></rect>
                  <circle cx='4' cy='4' r='2'></circle>
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h3 className='font-semibold mb-4'>Product</h3>
            <ul className='space-y-2'>
              <li>
                <Link
                  href='#features'
                  className='text-muted-foreground hover:text-foreground'
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href='#pricing'
                  className='text-muted-foreground hover:text-foreground'
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className='text-muted-foreground hover:text-foreground'
                >
                  Integrations
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className='text-muted-foreground hover:text-foreground'
                >
                  Changelog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className='font-semibold mb-4'>Resources</h3>
            <ul className='space-y-2'>
              <li>
                <Link
                  href='#'
                  className='text-muted-foreground hover:text-foreground'
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className='text-muted-foreground hover:text-foreground'
                >
                  API Reference
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className='text-muted-foreground hover:text-foreground'
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className='text-muted-foreground hover:text-foreground'
                >
                  Support
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className='font-semibold mb-4'>Company</h3>
            <ul className='space-y-2'>
              <li>
                <Link
                  href='#'
                  className='text-muted-foreground hover:text-foreground'
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className='text-muted-foreground hover:text-foreground'
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className='text-muted-foreground hover:text-foreground'
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className='text-muted-foreground hover:text-foreground'
                >
                  Privacy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className='border-t mt-12 pt-8 text-center text-sm text-muted-foreground'>
          <p>
            © {new Date().getFullYear()} AppointmentSync. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
