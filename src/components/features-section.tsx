import {
  CalendarCheck,
  MessageSquareText,
  ShieldCheck,
  BarChart3,
  Zap,
  Check,
} from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export function FeaturesSection() {
  const features = [
    {
      icon: <CalendarCheck className='h-6 w-6 text-primary' />,
      title: 'Automated Calendar Sync',
      description:
        'Automatically fetch and manage appointments from Outlook Calendar',
      benefits: [
        'Daily schedule retrieval',
        'Google Cloud Functions integration',
        'Custom filtering options',
      ],
    },
    {
      icon: <MessageSquareText className='h-6 w-6 text-primary' />,
      title: 'WhatsApp Notifications',
      description: 'Send interactive appointment reminders via WhatsApp',
      benefits: [
        'Interactive Confirm/Cancel buttons',
        'Automated response handling',
        'Customizable message templates',
      ],
    },
    {
      icon: <ShieldCheck className='h-6 w-6 text-primary' />,
      title: 'Secure Authentication',
      description: 'Multi-tenant OAuth 2.0 authentication system',
      benefits: [
        'Microsoft account integration',
        'Secure token management',
        'No manual API credentials needed',
      ],
    },
    {
      icon: <Zap className='h-6 w-6 text-primary' />,
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud-based system built for reliability',
      benefits: [
        'Google Cloud Run deployment',
        'Secure credential storage',
        'Automatic scaling based on demand',
      ],
    },
    {
      icon: <BarChart3 className='h-6 w-6 text-primary' />,
      title: 'Admin Dashboard',
      description: 'Comprehensive dashboard for appointment management',
      benefits: [
        'Real-time appointment tracking',
        'Response analytics and reporting',
        'Customizable notification settings',
      ],
    },
  ];

  return (
    <section id='features' className='container py-24 space-y-16'>
      <div className='text-center space-y-4'>
        <h2 className='text-3xl md:text-4xl font-bold'>Powerful Features</h2>
        <p className='text-xl text-muted-foreground max-w-[800px] mx-auto'>
          Everything you need to streamline your appointment management process
        </p>
      </div>

      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {features.map((feature, index) => (
          <Card key={index}>
            <CardHeader>
              <div className='bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4'>
                {feature.icon}
              </div>
              <CardTitle>{feature.title}</CardTitle>
              <CardDescription>{feature.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className='space-y-2 text-sm'>
                {feature.benefits.map((benefit, i) => (
                  <li key={i} className='flex items-start gap-2'>
                    <Check className='h-4 w-4 text-primary mt-1' />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
