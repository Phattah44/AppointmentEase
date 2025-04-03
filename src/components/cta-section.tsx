import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function CtaSection() {
  return (
    <section className='container py-24'>
      <div className='rounded-lg bg-primary/10 p-8 md:p-12 lg:p-16 relative overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-50'></div>
        <div className='relative z-10 max-w-3xl space-y-8'>
          <h2 className='text-3xl md:text-4xl font-bold'>
            Ready to transform your appointment management?
          </h2>
          <p className='text-xl'>
            Join thousands of healthcare providers and businesses who have
            streamlined their scheduling process with AppointmentSync.
          </p>
          <div className='flex flex-col sm:flex-row gap-4'>
            <Button size='lg' className='gap-2'>
              Get Started Today
              <ArrowRight className='h-4 w-4' />
            </Button>
            <Button size='lg' variant='outline'>
              Schedule a Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
