export const experience = [
  {
    company: 'Krishworks Technologies and Research Labs Pvt. Ltd.',
    role: 'System Software Engineer',
    period: 'Oct 2025 – Present',
    location: 'Bangalore, Karnataka',
    highlights: [
      'Cut Firebase read operations by 80% by introducing a Redis caching layer and reworking data access patterns, lowering database load and monthly operating cost.',
      'Optimized game server concurrency with Redis-based coordination, reducing CPU usage by 35% and sustaining 200 concurrent multiplayer sessions (6 players each) on a single 2 GB server backed by PostgreSQL.',
      'Built a delivery logistics management system integrating 5+ courier partners behind a single internal API, with webhook-based shipment tracking.',
      'Authored the architecture for a real-time ballistic tracking system for the Indian Army.',
      'Built the CRM powering Slato, a student teaching and examination portal, with role-based access control and Razorpay payments.',
    ],
  },
  {
    company: 'Kode Klan Pvt. Ltd.',
    role: 'Software Engineer',
    period: 'Dec 2024 – Oct 2025',
    location: 'Noida, Uttar Pradesh',
    highlights: [
      'Built a national and international flight and hotel booking platform on the Travel Boutique (TBO) API, with real-time fare pricing and PayU hosted checkout.',
      'Developed a CRM to create, price and manage the travel packages sold through the booking platform.',
      'Delivered a restaurant point-of-sale system and customer storefront on React.js, Node.js and MongoDB, with multi-store support, role-based access, real-time order tracking and thermal printer integration.',
    ],
  },
];

export const skillGroups = [
  { title: 'Languages', items: ['Java', 'JavaScript', 'TypeScript', 'Python', 'Go'] },
  {
    title: 'Backend',
    items: ['Node.js', 'Express.js', 'NestJS', 'Django', 'Go / Gin', 'REST APIs', 'Webhooks', 'JWT'],
  },
  {
    title: 'Data & real-time',
    items: ['PostgreSQL', 'MongoDB', 'Redis', 'Firebase', 'Prisma', 'SQLite', 'MQTT', 'Socket.io', 'WebSockets'],
  },
  {
    title: 'Integrations',
    items: ['Meta WhatsApp Business API', 'Razorpay', 'PayU', 'Stripe', 'Travel Boutique (TBO)'],
  },
  {
    title: 'Frontend',
    items: ['React', 'Next.js', 'Redux', 'React Native', 'Tailwind CSS', 'shadcn/ui', 'Material UI'],
  },
  { title: 'Tools', items: ['Linux', 'Git', 'Flyway'] },
];

export const education = [
  {
    school: 'JSS Academy of Technical Education',
    detail: 'Bachelor of Technology in Electronics and Communication Engineering',
    period: '2020 – 2024',
    note: 'CGPA 7.19 / 10',
  },
];
