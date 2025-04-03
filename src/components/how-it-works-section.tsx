import {
  ShieldCheck,
  CalendarCheck,
  MessageSquareText,
  BarChart3,
} from 'lucide-react';

export function HowItWorksSection() {
  const steps = [
    {
      step: '1',
      title: 'Connect',
      description: 'Authenticate with your Microsoft account via OAuth 2.0',
      icon: <ShieldCheck className='h-6 w-6 text-primary' />,
    },
    {
      step: '2',
      title: 'Sync',
      description:
        'System automatically fetches appointments from Outlook Calendar',
      icon: <CalendarCheck className='h-6 w-6 text-primary' />,
    },
    {
      step: '3',
      title: 'Notify',
      description: 'Clients receive WhatsApp messages with appointment details',
      icon: <MessageSquareText className='h-6 w-6 text-primary' />,
    },
    {
      step: '4',
      title: 'Track',
      description:
        'Monitor responses and manage appointments from the dashboard',
      icon: <BarChart3 className='h-6 w-6 text-primary' />,
    },
  ];

  return (
    <section id='how-it-works' className='bg-muted/30 py-24'>
      <div className='container space-y-16'>
        <div className='text-center space-y-4'>
          <h2 className='text-3xl md:text-4xl font-bold'>How It Works</h2>
          <p className='text-xl text-muted-foreground max-w-[800px] mx-auto'>
            A simple, automated workflow that saves you time and improves client
            communication
          </p>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {steps.map((item) => (
            <div key={item.step} className='relative'>
              <div className='bg-background rounded-lg p-6 h-full border shadow-sm'>
                <div className='absolute -top-5 left-6 bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center font-bold'>
                  {item.step}
                </div>
                <div className='pt-6 space-y-4'>
                  <div className='flex items-center gap-2'>
                    {item.icon}
                    <h3 className='font-bold text-xl'>{item.title}</h3>
                  </div>
                  <p className='text-muted-foreground'>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
