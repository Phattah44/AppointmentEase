interface Company {
  name: string;
}

export function LogosSection() {
  const companies: Company[] = [
    { name: 'Dental Care Plus' },
    { name: 'MediClinic' },
    { name: 'HealthFirst' },
    { name: 'AppointPro' },
    { name: 'CareConnect' },
  ];

  return (
    <section className='border-y bg-muted/40'>
      <div className='container py-12'>
        <h2 className='text-center text-sm font-medium uppercase tracking-wider text-muted-foreground mb-8'>
          Trusted by healthcare providers and businesses worldwide
        </h2>
        <div className='flex flex-wrap justify-center gap-8 md:gap-12 lg:gap-16 items-center opacity-70'>
          {companies.map(({ name }) => (
            <div key={name} className='text-xl font-semibold tracking-tight'>
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
