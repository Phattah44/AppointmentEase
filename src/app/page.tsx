'use client';

import { Header } from '@/components/navbar';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/components/hero-section';
import { LogosSection } from '@/components/logos-section';
import { FeaturesSection } from '@/components/features-section';
import { HowItWorksSection } from '@/components/how-it-works-section';
import { TestimonialsSection } from '@/components/testimonial-section';
import { PricingSection } from '@/components/pricing-section';
import { CtaSection } from '@/components/cta-section';
import { useTheme } from 'next-themes';

export default function Home() {
  const { theme, setTheme } = useTheme();
  return (
    <div className='flex flex-col'>
      <Header />
      {/* <button
        onClick={() => {
          setTheme(theme === 'dark' ? 'light' : 'dark');
        }}
        className='top-4 right-4 p-2 bg-gray-200 rounded md:bg-red-500'
      >
        Buttonnn
      </button> */}
      <main className='flex-1'>
        <HeroSection />
        <LogosSection />
        <FeaturesSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <PricingSection />
        <CtaSection />
      </main>

      <Footer />
    </div>
  );
}
