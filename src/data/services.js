// Services are derived from work already delivered (see projects.js and experience.js).

export const services = [
  {
    id: 'apis',
    icon: 'api',
    title: 'Backend & API development',
    summary: 'REST APIs and services that stay fast and predictable as traffic grows.',
    points: [
      'API design with authentication (JWT) and role-based access control',
      'Node.js, Express, NestJS and Go (Gin) services',
      'PostgreSQL, MongoDB and Redis data layers',
    ],
    proof: 'See: Delivery logistics platform, Slato CRM',
    slugs: ['delivery-logistics', 'slato-crm'],
  },
  {
    id: 'realtime',
    icon: 'realtime',
    title: 'Real-time systems',
    summary: 'Live data, events and updates without dropping messages or burning CPU.',
    points: [
      'WebSockets and Socket.io for live updates',
      'MQTT-based ingestion and event streaming',
      'Concurrency coordination with Redis',
    ],
    proof: 'See: Ballistic tracking system, Game server concurrency',
    slugs: ['ballistic-tracking', 'performance'],
  },
  {
    id: 'integrations',
    icon: 'plug',
    title: 'Payments & third-party integrations',
    summary: 'Clean internal APIs on top of messy external ones.',
    points: [
      'Payments: Razorpay, PayU and Stripe',
      'Courier, travel and messaging APIs, including webhook handling',
      'Meta WhatsApp Business API for customer notifications',
    ],
    proof: 'See: Delivery logistics platform, Travel booking platform',
    slugs: ['delivery-logistics', 'travel-booking'],
  },
  {
    id: 'performance',
    icon: 'speed',
    title: 'Performance & cost reduction',
    summary: 'Find the expensive reads and the hot paths, then fix them with data.',
    points: [
      'Caching strategy and data-access redesign',
      'Profiling and reducing CPU load under concurrency',
      'Lowering database reads and operating cost',
    ],
    proof: 'See: Redis performance work',
    slugs: ['performance'],
  },
  {
    id: 'fullstack',
    icon: 'layout',
    title: 'Full-stack web products',
    summary: 'A complete product from database to interface when you need one person to own it.',
    points: [
      'React, Redux, Next.js and Tailwind CSS front ends',
      'Dashboards, CRMs, point-of-sale and e-commerce systems',
      'React Native for mobile task and workflow apps',
    ],
    proof: 'See: Maati, Slato CRM',
    slugs: ['maati', 'slato-crm'],
  },
];

export const bestFor = [
  'Startups that need a backend built or stabilised quickly',
  'Teams with a slow or expensive system that needs profiling and fixing',
  'Products that depend on payments, couriers or other third-party APIs',
  'Businesses that need a custom CRM, POS or e-commerce system',
];
