import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export function PricingSection() {
  const plans = [
    {
      name: 'Starter',
      price: '$49',
      description: 'Perfect for small practices',
      features: [
        'Up to 100 appointments/month',
        'WhatsApp notifications',
        'Outlook Calendar integration',
        'Basic reporting',
        'Email support',
      ],
      popular: false,
      buttonText: 'Get Started',
    },
    {
      name: 'Professional',
      price: '$99',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 500 appointments/month',
        'WhatsApp notifications',
        'Outlook Calendar integration',
        'Advanced analytics',
        'Priority support',
        'Custom message templates',
      ],
      popular: true,
      buttonText: 'Get Started',
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large organizations',
      features: [
        'Unlimited appointments',
        'WhatsApp notifications',
        'Outlook Calendar integration',
        'Advanced analytics & reporting',
        '24/7 dedicated support',
        'Custom integrations',
        'Multi-location support',
      ],
      popular: false,
      buttonText: 'Contact Sales',
    },
  ];

  return (
    <section id='pricing' className='bg-muted/30 py-24'>
      <div className='container space-y-16'>
        <div className='text-center space-y-4'>
          <h2 className='text-3xl md:text-4xl font-bold'>
            Simple, Transparent Pricing
          </h2>
          <p className='text-xl text-muted-foreground max-w-[800px] mx-auto'>
            Choose the plan that works best for your business
          </p>
        </div>

        <div className='grid md:grid-cols-3 gap-8 max-w-5xl mx-auto'>
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative ${
                plan.popular ? 'border-primary shadow-lg' : ''
              }`}
            >
              {plan.popular && (
                <div className='absolute -top-4 left-0 right-0 mx-auto w-fit px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium'>
                  Most Popular
                </div>
              )}
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <div className='flex items-baseline gap-1'>
                  <span className='text-3xl font-bold'>{plan.price}</span>
                  {plan.price !== 'Custom' && (
                    <span className='text-muted-foreground'>/month</span>
                  )}
                </div>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className='space-y-6'>
                <ul className='space-y-2'>
                  {plan.features.map((feature) => (
                    <li key={feature} className='flex items-start gap-2'>
                      <Check className='h-4 w-4 text-primary mt-1' />
                      <span className='text-sm'>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className='w-full'
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  {plan.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className='bg-background border rounded-lg p-6 max-w-3xl mx-auto text-center space-y-4'>
          <h3 className='text-xl font-semibold'>
            Not sure which plan is right for you?
          </h3>
          <p className='text-muted-foreground'>
            Try AppointmentSync free for 14 days. No credit card required.
          </p>
          <Button size='lg'>Start Your Free Trial</Button>
        </div>
      </div>
    </section>
  );
}
