import { ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export function HeroSection() {
  return (
    <section className='container py-24 md:py-32 space-y-8'>
      <div className='grid gap-10 lg:grid-cols-2 lg:gap-16 items-center'>
        <div className='space-y-6'>
          <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight'>
            Automate Your Appointments,{' '}
            <span className='text-primary'>Simplify Your Day</span>
          </h1>
          <p className='text-xl text-muted-foreground max-w-[600px]'>
            Seamlessly connect Outlook Calendar with WhatsApp to automate
            appointment, scheduling and client notifications.
          </p>
          <div className='flex flex-col sm:flex-row gap-4'>
            <Button size='lg' className='gap-2'>
              Start Free Trial
              <ArrowRight className='h-4 w-4' />
            </Button>
            <Button size='lg' variant='outline'>
              Book a Demo
            </Button>
          </div>
          <div className='flex items-center gap-2 text-sm text-muted-foreground'>
            <Check className='h-4 w-4 text-primary' />
            <span>No credit card required</span>
          </div>
        </div>
        <div className='relative'>
          <div className='relative rounded-lg overflow-hidden border shadow-xl'>
            <Image
              src='/schedule.webp'
              alt='AppointmentSync Dashboard'
              width={700}
              height={800}
              className=''
            ></Image>
          </div>
          <div className='absolute -bottom-6 -left-6 bg-primary/10 rounded-full w-32 h-32 blur-3xl'></div>
          <div className='absolute -top-6 -right-6 bg-primary/10 rounded-full w-32 h-32 blur-3xl'></div>
        </div>
      </div>
    </section>
  );
}
