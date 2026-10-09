// Single source of truth for site-wide details.
// Edit here and every page updates.

export const site = {
  name: 'Himanshu Raj Patel',
  shortName: 'Himanshu',
  role: 'Backend & Full-Stack Engineer',
  location: 'Bangalore, India',
  // Set to false to hide the availability badge everywhere.
  available: true,
  availabilityLabel: 'Open to freelance projects',
  email: 'himanshurajpatel138@gmail.com',
  resumePath: '/resume.pdf',
  // Existing Formspree endpoint from the previous portfolio.
  formEndpoint: 'https://formspree.io/f/xanwkkdr',
  social: {
    github: 'https://github.com/RAJHIMANSHUPATEL',
    linkedin: 'https://www.linkedin.com/in/himanshu-raj-patel-2896a7207',
    twitter: 'https://x.com/HimanshuRajPat5',
  },
};

export const nav = [
  { to: '/work', label: 'Work' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About' },
];

// Numbers below are taken directly from the resume and previous portfolio.
export const proofPoints = [
  { value: '80%', label: 'fewer Firebase reads after adding a Redis cache layer', slug: 'performance' },
  { value: '35%', label: 'lower CPU on a multiplayer game server', slug: 'performance' },
  { value: '200', label: 'concurrent 6-player sessions on a single 2 GB server', slug: 'performance' },
  { value: '5+', label: 'courier partners behind one internal API', slug: 'delivery-logistics' },
];

export const processSteps = [
  {
    title: 'Discover',
    text: 'We agree on the problem, the users, the constraints and what "done" means before any code is written.',
  },
  {
    title: 'Design',
    text: 'I sketch the data model, API contracts and failure modes first, so the build has no surprises.',
  },
  {
    title: 'Build',
    text: 'Small, reviewable increments with working software you can try along the way.',
  },
  {
    title: 'Launch & support',
    text: 'Deployment, monitoring and a clean hand-off with the documentation your team needs.',
  },
];
