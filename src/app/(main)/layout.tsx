// 'use client';
// import React from 'react';
// import Image from 'next/image';
// import { Button } from '@/components/ui';
// import { ArrowRight } from 'lucide-react';
// import { usePathname } from 'next/navigation';
// import Link from 'next/link';
// import { cn } from '@/lib/utils';

// const MainLayout = ({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) => {
//   const pathName = usePathname();
//   const display = [
//     {
//       id: 1,
//       title: 'Dashboard',
//       link: '/dashboard',
//     },
//     {
//       id: 2,
//       title: 'Profile Settings',
//       link: '/profile-settings',
//     },
//   ];

//   return (
//     <div>
//       <div className='container relative z-10 mx-[50px] px-4 py-20'>
//         <div className='grid gap-12 lg:grid-cols-2'>
//           <div className='flex flex-col justify-center'>
//             <h1 className='mb-6 text-3xl font-semibold leading-tight text-black dark:text-white lg:text-5xl'>
//               Secure, Borderless Payments and Loans at Your Fingertips
//             </h1>
//             <p className='mb-8 text-lg text-gray-600 dark:text-gray-400'>
//               Send money globally, access loans instantly, and manage your
//               wallet seamlessly—all powered by blockchain.™
//             </p>
//           </div>
//           <div className='relative hidden lg:block'>
//             <Image
//               src='/hero.png'
//               alt='Hero'
//               layout='fill'
//               objectFit='contain'
//               className='relative'
//             />
//           </div>
//         </div>
//       </div>

//       <section className='border border-[#27272A] rounded-xl divide-y mx-[50px]'>
//         <header className='flex items-center '>
//           {display.map((display_item) => {
//             return (
//               <Link
//                 href={display_item.link}
//                 key={display_item.id}
//                 className={cn(
//                   'text-md text-white/50 py-4 px-6',
//                   pathName === display_item.link && 'text-white'
//                 )}
//               >
//                 {display_item.title}
//               </Link>
//             );
//           })}
//         </header>
//         <div className='p-4'>{children}</div>
//       </section>
//     </div>
//   );
// };

// export default MainLayout;
