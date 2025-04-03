'use client';
import React, { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { MoonIcon, SunIcon } from 'lucide-react';

import AllProviders from '@/utils/providers';
import { cn } from '@/lib/utils';
// import { getInitials } from '@/utils/strings';

import {
  Avatar,
  Button,
  ChattterLogo,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  LinkButton,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Tooltip,
} from '../ui';
import { useBooleanStateControl } from '@/hooks';
import toast from 'react-hot-toast';
import AppHeader from './AppHeader';
import { Spinner } from '../icons';
import Image from 'next/image';

const Body = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState('light');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

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
    <AllProviders>
      <div
        className={cn(
          theme === 'dark' ? 'dark' : 'light',
          'flex flex-col items-center justify-between font-display overflow-hidden'
        )}
      >
        {isLoading ? (
          <div className='h-screen w-screen flex items-center justify-center'>
            <Spinner />
          </div>
        ) : (
          <>
            {/* <header className='sticky top-0 flex items-center justify-between w-full p-5 md:px-10 md:py-6'>
              <section className='flex items-center gap-14'>
                <ChattterLogo />
                <div className='hidden md:flex items-center gap-6'>
                  <Link href='https://jotmax.github.io/veloblock-documentation/collateralized-loan-position.html'>
                    <p>How it works</p>
                  </Link>
                  <Link href='https://jotmax.github.io/veloblock-documentation/motivation-vision.html'>
                    <p>Documentation</p>
                  </Link>
                </div>
              </section>
              <section className='flex items-center gap-4 ml-[40px]'>
                <div onClick={toggleTheme} className='cursor-pointer'>
                  {theme == 'dark' ? (
                    <SunIcon size={24} strokeWidth={1.5} />
                  ) : (
                    <MoonIcon size={24} strokeWidth={1.5} />
                  )}
                </div>

                <Popover>
                  <PopoverTrigger>
                    <Button className='bg'>Connect Wallet</Button>
                  </PopoverTrigger>
                  <PopoverContent>
                    <div className='flex flex-col p-4 gap-3'>
                      <h2 className='text-center'>Connect Wallet</h2>
                      <hr className='text-[#27272A] dark:text-[#27272A]' />
                      <Link href='#'>
                        <div className='flex justify-start items-center gap-4 bg-white dark:bg-[#1A1A1A] p-3 rounded-3xl'>
                          <Image
                            src='/metamask.png'
                            width={30}
                            height={30}
                            alt='metamask'
                          />
                          <h2>Metamask</h2>
                        </div>
                      </Link>
                      <Link href='#'>
                        <div className='flex justify-start items-center gap-4 bg-white dark:bg-[#1A1A1A] p-3 rounded-3xl'>
                          <Image
                            src='/coinbase.png'
                            width={30}
                            height={30}
                            alt='Coinbase Wallet'
                          />
                          <h2>Coinbase Wallet</h2>
                        </div>
                      </Link>
                      <Link href='#'>
                        <div className='flex justify-start items-center gap-4 bg-white dark:bg-[#1A1A1A] p-3 rounded-3xl'>
                          <Image
                            src='/coinmarket.png'
                            width={30}
                            height={30}
                            alt='Coin Market Cap'
                          />
                          <h2>Market Cap</h2>
                        </div>
                      </Link>
                      <Link href='#'>
                        <div className='flex justify-start items-center gap-4 bg-white dark:bg-[#1A1A1A] p-3 rounded-3xl'>
                          <Image
                            src='/trustwallet.png'
                            width={30}
                            height={30}
                            alt='Trust Wallet'
                          />
                          <h2>Trust Wallet</h2>
                        </div>
                      </Link>
                      <Link href='#'>
                        <div className='flex justify-start items-center gap-4 bg-white dark:bg-[#1A1A1A] p-3 rounded-3xl'>
                          <Image
                            src='/others.png'
                            width={30}
                            height={30}
                            alt='Other Wallet'
                          />
                          <h2>Other Wallets</h2>
                        </div>
                      </Link>
                    </div>
                  </PopoverContent>
                </Popover>
              </section>
            </header> */}
            {children}
          </>
        )}
      </div>
    </AllProviders>
  );
};

export default Body;
