// Case studies. Every statement is taken from the resume or the previous portfolio.
// Add a new project by appending an object here; routes and cards update automatically.

export const categories = ['All', 'Backend', 'Real-time', 'Integrations', 'Performance', 'Full-stack'];

export const projects = [
  {
    slug: 'maati',
    title: 'Maati',
    tagline: 'One catalog behind a storefront, a staff CRM and a cash till for grocery dark stores.',
    summary:
      'Grocery system for the Noida and Delhi dark stores: a customer storefront, a staff CRM and an in-store POS sharing one catalog.',
    categories: ['Full-stack'],
    featured: true,
    context: 'Personal project',
    role: 'Design and full-stack development',
    cover: '/projects/maati-cover.svg',
    headline: { value: '3 apps', label: 'one shared catalog' },
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Redux', 'JWT'],
    problem:
      'Dark stores need the same products, prices and stock to show up correctly in three places: the customer storefront, the staff back office and the till. Each store has its own coupons and its own team.',
    built: [
      'A customer storefront where shoppers pick a store, search the catalog, apply a store-scoped coupon and check out cash on delivery.',
      'A staff CRM for catalog, stock, orders and till settings. The owner sees both Noida and Delhi, while a store manager is limited to one store.',
      'A browser point-of-sale bound to one store: unlock with a till PIN, sign on as a cashier, sell at the in-store price, take cash, then reprint or void the same day.',
      'JWT authentication and store-scoped permissions across all three apps.',
    ],
    results: [
      { value: '3', label: 'connected apps on one catalog' },
      { value: '2', label: 'stores with separate coupons and staff scopes' },
    ],
    flows: [
      {
        title: 'How the pieces fit',
        steps: [
          { label: 'Storefront', sub: 'customers' },
          { label: 'Staff CRM', sub: 'owner + managers' },
          { label: 'POS till', sub: 'cashiers' },
          { label: 'Node + Express API', sub: 'JWT, store scoping' },
          { label: 'MongoDB', sub: 'shared catalog' },
        ],
      },
    ],
    showcases: [
      {
        title: 'Storefront',
        summary: 'Cash-on-delivery shop with store-scoped coupons.',
        image: '/projects/maati-ecom.svg',
        github: 'https://github.com/RAJHIMANSHUPATEL/Maati-ecom',
        portal: 'https://maati-shop.vercel.app',
        logins: [
          { who: 'Customer, Noida', fields: [['Email', 'customer@maati.test'], ['Password', 'Customer@123']] },
          { who: 'Customer, Delhi', fields: [['Email', 'priya@maati.test'], ['Password', 'Customer@123']] },
          { who: 'Customer, Ghaziabad', fields: [['Email', 'arjun@maati.test'], ['Password', 'Customer@123']] },
        ],
        notes: [
          'Guest checkout works without an account.',
          'Noida coupons: FARM10 (10%), FLAT50 (₹50). Delhi coupons: WELCOME20 (20%), DELHI50 (₹50).',
        ],
      },
      {
        title: 'Staff CRM',
        summary: 'Catalog, stock, orders and till settings.',
        image: '/projects/maati-crm.svg',
        github: 'https://github.com/RAJHIMANSHUPATEL/Maati-crm',
        portal: 'https://maati-crm.vercel.app',
        logins: [
          { who: 'Owner, both stores', fields: [['Email', 'admin@maati.test'], ['Password', 'Admin@123']] },
          { who: 'Manager, Noida only', fields: [['Email', 'ops@maati.test'], ['Password', 'Admin@123']] },
        ],
      },
      {
        title: 'POS till',
        summary: 'Cash till for one store, with same-day void and receipt reprint.',
        image: '/projects/maati-pos.svg',
        github: 'https://github.com/RAJHIMANSHUPATEL/Maati-pos',
        portal: null,
        logins: [
          {
            who: 'Noida till',
            fields: [['Till', 'NOIDA T1'], ['PIN', '1234'], ['Cashier', '1001'], ['Cashier PIN', '1111']],
          },
          {
            who: 'Delhi till',
            fields: [['Till', 'DELHI T1'], ['PIN', '1234'], ['Cashier', '1002'], ['Cashier PIN', '1111']],
          },
          { who: 'Manager', fields: [['Code', '2001'], ['PIN', '1111']] },
        ],
        notes: [
          'Scan demo: 8901234000011 (Noida Palak).',
          'The till portal is not live yet. These accounts are for when it is.',
        ],
      },
    ],
  },

  {
    slug: 'delivery-logistics',
    title: 'Delivery logistics platform',
    tagline: 'Five-plus courier partners behind one internal API, with automatic cheapest-courier routing.',
    summary:
      'A logistics system that normalises different courier APIs into one, routes each shipment to the cheapest viable courier and keeps customers updated on WhatsApp.',
    categories: ['Backend', 'Integrations'],
    featured: true,
    context: 'Krishworks Technologies',
    role: 'Backend development',
    headline: { value: '5+', label: 'couriers, one API' },
    stack: ['REST APIs', 'Webhooks', 'Meta WhatsApp Business API', 'Delhivery', 'DTDC'],
    problem:
      'Every courier partner exposes a different API contract. Booking, cancelling and tracking a shipment meant handling each partner separately, and the operations team followed up on shipment status by hand.',
    built: [
      'A single internal API over 5+ courier partners (Delhivery, DTDC and others) that normalises their divergent contracts for booking, cancellation and webhook-based shipment tracking.',
      'A serviceability and dynamic tariff engine that resolves pincode coverage, turnaround time (TAT) and per-partner rate cards at request time, then routes each shipment to the cheapest viable courier automatically.',
      'A Meta WhatsApp Business API integration that pushes real-time shipment status and delivery updates to customers and consumes delivery-receipt webhooks to track message state.',
    ],
    results: [
      { value: '5+', label: 'courier partners on one API' },
      { value: 'Auto', label: 'cheapest-courier routing per shipment' },
      { value: 'Removed', label: 'manual status follow-ups by the operations team' },
    ],
    flows: [
      {
        title: 'Shipment flow',
        steps: [
          { label: 'Order', sub: 'booking request' },
          { label: 'Internal API', sub: 'one contract' },
          { label: 'Serviceability + tariff', sub: 'pincode, TAT, rate cards' },
          { label: 'Cheapest courier', sub: 'Delhivery, DTDC, +more' },
          { label: 'Webhooks', sub: 'tracking events' },
          { label: 'WhatsApp update', sub: 'delivery receipts' },
        ],
      },
    ],
  },

  {
    slug: 'performance',
    title: 'Redis performance work',
    tagline: 'Fewer database reads and a lighter game server, using caching and coordination.',
    summary:
      'Two optimisations at Krishworks: an 80% cut in Firebase reads and a 35% drop in game-server CPU, while supporting 200 concurrent sessions on a 2 GB server.',
    categories: ['Performance', 'Real-time', 'Backend'],
    featured: true,
    context: 'Krishworks Technologies',
    role: 'Backend and performance engineering',
    headline: { value: '−80%', label: 'Firebase reads' },
    stack: ['Redis', 'Firebase', 'PostgreSQL'],
    problem:
      'A Firebase-backed product was paying for a large number of reads, and a multiplayer game server was spending too much CPU coordinating concurrent sessions.',
    built: [
      'A Redis caching layer in front of Firebase, together with a rework of the data-access patterns.',
      'Redis-based coordination for the game server to manage concurrent multiplayer sessions, backed by PostgreSQL.',
    ],
    results: [
      { value: '80%', label: 'fewer Firebase read operations' },
      { value: '35%', label: 'lower game-server CPU usage' },
      { value: '200', label: 'concurrent sessions (6 players each)' },
      { value: '2 GB', label: 'single server handling that load' },
    ],
    flows: [
      {
        title: 'Read caching',
        steps: [
          { label: 'App', sub: 'read request' },
          { label: 'Redis cache', sub: 'served first' },
          { label: 'Firebase', sub: 'only on a miss' },
        ],
      },
      {
        title: 'Session coordination',
        steps: [
          { label: 'Players', sub: '6 per session' },
          { label: 'Game server', sub: '200 sessions' },
          { label: 'Redis', sub: 'coordination' },
          { label: 'PostgreSQL', sub: 'persistence' },
        ],
      },
    ],
  },

  {
    slug: 'ballistic-tracking',
    title: 'Real-time ballistic tracking',
    tagline: 'Low-latency ingestion, event streaming and hit detection for the Indian Army.',
    summary:
      'Architecture and backend for a real-time ballistic tracking system covering target assignment, event streaming, hit detection and persistence.',
    categories: ['Real-time', 'Backend'],
    featured: false,
    context: 'Krishworks Technologies',
    role: 'Architecture and backend development',
    headline: { value: 'Real-time', label: 'hit detection' },
    stack: ['Go', 'Gin', 'PostgreSQL', 'Flyway', 'MQTT'],
    problem:
      'The system had to ingest events with low latency, detect and count hits reliably, and persist everything safely.',
    built: [
      'The system architecture, defining target assignment, event streaming and persistence layers.',
      'Low-latency event ingestion over MQTT into a Go and Gin backend.',
      'Hit detection and counting, with reliable persistence in PostgreSQL and schema changes managed by Flyway migrations.',
    ],
    results: [
      { value: 'Low', label: 'latency from event to detection' },
      { value: 'Reliable', label: 'persistence with versioned migrations' },
    ],
    flows: [
      {
        title: 'Event pipeline',
        steps: [
          { label: 'Target assignment', sub: 'who is shooting what' },
          { label: 'MQTT', sub: 'event streaming' },
          { label: 'Go + Gin', sub: 'ingestion' },
          { label: 'Hit detection', sub: 'and counting' },
          { label: 'PostgreSQL', sub: 'Flyway migrations' },
        ],
      },
    ],
  },

  {
    slug: 'slato-crm',
    title: 'Slato CRM',
    tagline: 'The back office for a student teaching and examination portal.',
    summary:
      'A CRM with role-based access and Razorpay payments for managing students and classes, running exams, and publishing results and certificates.',
    categories: ['Backend', 'Full-stack', 'Integrations'],
    featured: false,
    context: 'Krishworks Technologies',
    role: 'CRM development',
    headline: { value: 'RBAC', label: 'roles, exams, payments' },
    stack: ['Role-based access control', 'Razorpay'],
    problem:
      'An examination portal needs one place to manage students and classes, author and conduct exams, take payments and publish outcomes, with the right people seeing the right things.',
    built: [
      'A CRM to manage students and classes.',
      'Exam authoring and conduct, followed by publishing of results and certificates.',
      'Role-based access control so each type of user only sees what they should.',
      'Razorpay payment integration.',
    ],
    results: [
      { value: 'End to end', label: 'from enrolment to published certificate' },
      { value: 'RBAC', label: 'permissions for every user type' },
    ],
    flows: [
      {
        title: 'Portal workflow',
        steps: [
          { label: 'Students + classes', sub: 'managed in CRM' },
          { label: 'Exams', sub: 'authored and conducted' },
          { label: 'Razorpay', sub: 'payments' },
          { label: 'Results', sub: 'published' },
          { label: 'Certificates', sub: 'issued' },
        ],
      },
    ],
  },

  {
    slug: 'travel-booking',
    title: 'Travel booking platform',
    tagline: 'Flights and hotels on the TBO API, with live fares and hosted PayU checkout.',
    summary:
      'A national and international flight and hotel booking platform with real-time fare pricing, plus a CRM for the travel packages it sells.',
    categories: ['Integrations', 'Full-stack'],
    featured: false,
    context: 'Kode Klan Pvt. Ltd.',
    role: 'Full-stack development',
    headline: { value: 'Live', label: 'fares to checkout' },
    stack: ['Travel Boutique (TBO) API', 'PayU', 'React', 'Node.js'],
    problem:
      'Travellers needed to search, price and book flights and hotels, with fares that stay accurate through to payment, and the business needed a way to create and manage its own packages.',
    built: [
      'A national and international flight and hotel booking platform on the Travel Boutique (TBO) API.',
      'Real-time fare pricing and a PayU hosted checkout.',
      'A CRM to create, price and manage the travel packages sold through the platform.',
    ],
    results: [
      { value: 'Real-time', label: 'fare pricing' },
      { value: 'Hosted', label: 'PayU checkout' },
    ],
    flows: [
      {
        title: 'Booking flow',
        steps: [
          { label: 'Search', sub: 'flights + hotels' },
          { label: 'TBO API', sub: 'inventory' },
          { label: 'Real-time pricing', sub: 'live fares' },
          { label: 'PayU checkout', sub: 'hosted payment' },
          { label: 'Booking', sub: 'confirmed' },
        ],
      },
    ],
  },
];

export const getProject = (slug) => projects.find((p) => p.slug === slug);
export const featuredProjects = projects.filter((p) => p.featured);
