import { Card, CardContent, CardHeader } from '@/components/ui/card';

export function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        'AppointmentSync has reduced our no-show rate by 35%. The WhatsApp notifications are a game-changer for our dental practice.',
      author: 'Dr. Sarah Johnson',
      role: 'Dental Care Plus',
    },
    {
      quote:
        'The seamless integration with our Outlook calendars has saved our staff hours of manual work each week. Highly recommended!',
      author: 'Mark Williams',
      role: 'MediClinic Director',
    },
    {
      quote:
        "Our patients love getting reminders via WhatsApp. It's more personal than email and more reliable than SMS.",
      author: 'Jennifer Lee',
      role: 'HealthFirst Administrator',
    },
  ];

  return (
    <section className='container py-24 space-y-16'>
      <div className='text-center space-y-4'>
        <h2 className='text-3xl md:text-4xl font-bold'>What Our Clients Say</h2>
        <p className='text-xl text-muted-foreground max-w-[800px] mx-auto'>
          Trusted by healthcare providers and businesses worldwide
        </p>
      </div>

      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {testimonials.map((testimonial, index) => (
          <Card key={index} className='border-none shadow-md'>
            <CardHeader>
              <div className='flex gap-1 mb-4'>
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    xmlns='http://www.w3.org/2000/svg'
                    width='20'
                    height='20'
                    viewBox='0 0 24 24'
                    fill='#FFD700'
                    stroke='#FFD700'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  >
                    <polygon points='12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2' />
                  </svg>
                ))}
              </div>
            </CardHeader>
            <CardContent className='space-y-4'>
              <p className='italic'>&ldquo;{testimonial.quote}&rdquo;</p>
              <div>
                <p className='font-semibold'>{testimonial.author}</p>
                <p className='text-sm text-muted-foreground'>
                  {testimonial.role}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
