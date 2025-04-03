import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

type Props = {
  className?: string;
};

const ChattterLogo: React.FC<Props> = ({ className }) => {
  return (
    <h2 className={cn('mx-[40px]', className)}>
      <Link href='/'>
        <Image src='/logo.png' alt='VeloBlock' width={120} height={40} />
      </Link>
    </h2>
  );
};

export default ChattterLogo;
