/* ------------------------------------------------------------------
   All personal content lives here. Edit this file to update the site.
   ------------------------------------------------------------------ */

const PROFILE = {
  name: "Abdur Rouf",
  roles: ["Full-Stack Web Developer", "MERN Stack Developer", "ML & Embedded Systems Researcher"],
  email: "abdur230rouf@gmail.com",
  phone: "+880 1982-212046",
  phoneRaw: "+8801982212046",
  whatsapp: "8801982212046",
  location: "Mirpur-10, Dhaka-1216, Bangladesh",
  resume: "assets/resume/Abdur-Rouf-Resume.pdf",
  // Leave a link empty ("") to hide its button.
  socials: {
    github: "https://github.com/AbdurRouf230",
    leetcode: "https://leetcode.com/u/Abdur_Rouf/",
    hackerrank: "https://www.hackerrank.com/profile/abdur230rouf",
    linkedin: "https://www.linkedin.com/in/abdur-rouf-111834227/",
    facebook: "https://www.facebook.com/abdur.rouf.203958",
    twitter: ""
  }
};

/* Web projects. `live: null` shows a "deploying soon" note on the details page. */
const PROJECTS = [
  {
    id: "rescueline-bd",
    name: "RescueLine BD",
    tagline: "Emergency service directory for Bangladesh",
    image: "assets/projects/emergency.jpg",
    tags: ["HTML5", "Tailwind CSS", "JavaScript"],
    live: "https://abdurrouf230.github.io/Assignment5/",
    github: "https://github.com/AbdurRouf230/Assignment5",
    description:
      "RescueLine BD puts Bangladesh's national emergency hotlines (999, fire service, health line 104, electricity 16216, women & child helpline 109, railway and more) on a single responsive page. Each service card lets the visitor copy the number to the clipboard or place a call, and every call is logged in a live call-history panel with a timestamp. A small coin and heart counter in the navbar gamifies the interactions, and the interface can switch between English and Bangla.",
    features: [
      "Service cards with one-click Copy and Call actions",
      "Live call history with time stamps and a Clear button",
      "Coin, heart and copy counters updated through DOM manipulation",
      "English / Bangla language toggle",
      "Fully responsive 3-column → 1-column grid built with Tailwind CSS"
    ],
    challenges: [
      "Keeping several counters (coins, hearts, copies) and the history panel in sync without a framework, using plain DOM events.",
      "Using the Clipboard API reliably and giving clear feedback when copying fails on older browsers.",
      "Laying out the card grid and the sticky history panel so they stay readable on small phones."
    ],
    future: [
      "Detect the visitor's location and surface the nearest hospital, police station and fire station.",
      "Make it an installable PWA so the numbers work offline.",
      "Add more regional helplines and a search box."
    ]
  },
  {
    id: "g3-architects",
    name: "G3 Architects",
    tagline: "Landing page for an architecture studio",
    image: "assets/projects/g3.jpg",
    tags: ["HTML5", "CSS3", "Flexbox", "Responsive"],
    live: "https://abdurrouf230.github.io/G3_Architects_Website/",
    github: "https://github.com/AbdurRouf230/G3_Architects_Website",
    description:
      "A pixel-careful landing page for a fictional architecture firm, converted from a Figma design using only semantic HTML and hand-written CSS. It includes a hero banner with team photography, a features grid, a statistics band, a team section and a footer, all fully responsive.",
    features: [
      "Semantic, accessible HTML structure",
      "Feature cards, statistics band and team section",
      "Hand-written CSS with Flexbox and Grid, no framework",
      "Responsive from 320 px phones to wide desktops"
    ],
    challenges: [
      "Matching the Figma spacing and typography exactly without a CSS framework.",
      "Making large hero images look sharp but still load quickly.",
      "Re-flowing the multi-column layouts cleanly at tablet widths."
    ],
    future: [
      "Add a filterable project gallery with a lightbox.",
      "Add a working contact form backed by a small Node/Express API.",
      "Introduce subtle scroll animations."
    ]
  },
  {
    id: "faugei-flowers",
    name: "Faugei Flower Shop",
    tagline: "E-commerce storefront for fresh flowers",
    image: "assets/projects/flower.jpg",
    tags: ["HTML5", "CSS3", "Responsive"],
    live: "https://abdurrouf230.github.io/Assignment2/",
    github: "https://github.com/AbdurRouf230/Assignment2",
    description:
      "Faugei is a storefront landing page for a flower shop: a bold \"Always Fresh Flowers\" hero, a product grid of plants and bouquets with prices, a deals section, a shop-location banner and a social footer. It was my second hand-coded website and focuses on clean typography and consistent spacing.",
    features: [
      "Hero section with a featured bouquet",
      "Product cards with name, price and call-to-action",
      "Deals of the month section",
      "Cart indicator in the navbar and social links in the footer"
    ],
    challenges: [
      "Building a reusable card style that stays consistent across many products.",
      "Pairing a serif display font with a sans-serif body font while keeping text readable.",
      "Getting image-heavy sections to stay responsive without distortion."
    ],
    future: [
      "Turn it into a React app with a working cart and checkout.",
      "Load products from a MongoDB-backed API.",
      "Add product search and category filters."
    ]
  },
  {
    id: "voltix",
    name: "Voltix Tech Store",
    tagline: "Next.js e-commerce app with Firebase auth",
    image: "assets/projects/voltix.jpg",
    tags: ["Next.js", "TypeScript", "Firebase", "Tailwind CSS"],
    live: null,
    github: "https://github.com/AbdurRouf230/voltix-store-main",
    description:
      "Voltix is a modern gadget store built with the Next.js App Router and Firebase Authentication. Anyone can browse the catalogue, search, filter by category, price and rating, and open a detailed product page. Signed-in users get protected pages to add new products and manage (view / delete) existing ones.",
    features: [
      "7-section landing page with sticky responsive navbar and testimonials",
      "Product list with search, category / price / rating filters and URL-synced state",
      "Dynamic product details route with specs table and related products",
      "Email/password and Google sign-in with Firebase; protected Add & Manage pages",
      "Add Product form with live preview, inline validation and toasts",
      "Skeleton loaders, custom 404 page and keyboard-accessible menus"
    ],
    challenges: [
      "Protecting routes on a statically exported Next.js site, where there is no server to check the session.",
      "Keeping filters in the URL so filtered views can be shared and survive a refresh.",
      "Syncing added / deleted products across every page instantly with localStorage."
    ],
    future: [
      "Move product data to MongoDB with an Express or Next.js API.",
      "Add a cart, checkout and order history.",
      "Role-based admin dashboard with sales charts."
    ]
  },
  {
    id: "hero-io",
    name: "Hero IO App Store",
    tagline: "React app marketplace with install tracking",
    image: "assets/projects/heroio.jpg",
    tags: ["React", "React Router", "Recharts", "Tailwind CSS"],
    live: null,
    github: "https://github.com/AbdurRouf230/Assignment-8-ph",
    description:
      "Hero IO is a single-page app store built with React and React Router. It lists productivity apps with ratings, downloads and reviews; visitors can search apps, open a detail page with a ratings bar chart, and install or uninstall apps. Installed apps persist across visits.",
    features: [
      "Home page with hero, stats and trending apps",
      "All-apps page with live search and a 'no apps found' state",
      "App details page with a Recharts ratings bar chart",
      "Install / uninstall with localStorage persistence and toast messages",
      "Installation page with sorting by size / downloads",
      "Custom 404 page and route loaders"
    ],
    challenges: [
      "Sharing installed-app state between pages without a global store.",
      "Loading JSON data with React Router loaders and handling missing ids gracefully.",
      "Shaping review data into the format Recharts expects."
    ],
    future: [
      "Add user accounts so installs follow the user across devices.",
      "Let users post reviews and ratings.",
      "Add category filters and pagination."
    ]
  },
  {
    id: "flood-shield",
    name: "Flood Shield",
    tagline: "MERN + ML flood response platform",
    image: "assets/projects/floodshield.svg",
    tags: ["React", "Node.js", "Express", "MongoDB", "Flask", "XGBoost"],
    live: null,
    github: "https://github.com/AbdurRouf230/Flood-Shield-Main",
    description:
      "Flood Shield is a flood monitoring and rescue-coordination platform for Bangladesh, built as my CSE309 course project. Citizens, volunteers, NGOs and government users share one login and see role-based pages: a national dashboard of rainfall, river and risk data, a flood map, incident reports, SOS alerts with a rescue queue, donations, shelters, transport and relief logistics. A Python service predicts flood probability with XGBoost, runs image segmentation and YOLOv8 object detection, and answers questions through a RAG chatbot.",
    features: [
      "Role-based access for Citizen, Volunteer, NGO and Government users",
      "District dashboard and Leaflet flood map",
      "SOS alerts with location, urgency and photo, plus a rescue panel",
      "Relief logistics, shelters, campaigns and transport modules",
      "Flask ML service: XGBoost flood risk, YOLOv8 detection, RAG chatbot over PDF reports"
    ],
    challenges: [
      "Designing role checks that match on both the React routes and the Express APIs.",
      "Connecting three services (React, Express, Flask) and keeping the app usable when MongoDB is down.",
      "Turning messy rainfall and river data into features a model can use."
    ],
    future: [
      "Deploy all three services and add real-time updates with WebSockets.",
      "Push SMS alerts for people without smartphones.",
      "Train the flood model on more historical seasons."
    ]
  }
];

/* Research / ML work shown in the Experience and Research sections. */
const RESEARCH = [
  {
    title: "Real-Time Joint Classification and Heat-Source Localization on Native 8×8 Thermal Frames with a Lightweight Dual-Head CNN for Microcontroller Deployment",
    venue: "Scientific Reports (Springer Nature)",
    status: "Under review",
    role: "Corresponding author"
  },
  {
    title: "Mapping School Vulnerability to Brick Kiln Exposure in Bangladesh Using Remote Sensing and Geospatial Analysis",
    venue: "Remote Sensing Applications: Society and Environment (Elsevier)",
    status: "Under review",
    role: "Equal contribution"
  },
  {
    title: "A Novel Machine Learning-Based PM2.5 Exposure Estimation Framework for Educational Institutions in Bangladesh",
    venue: "IEEE/ACM BDCAT 2026, Florianópolis, Brazil",
    status: "Submitted",
    role: "First author"
  },
  {
    title: "An AI/ML-based Remote-Sensing Framework for Automatic Vulnerability Analysis of Educational Institutions Near Brick Kilns in Bangladesh",
    venue: "IEEE/ACM BDCAT 2026, Florianópolis, Brazil",
    status: "Submitted",
    role: "First author"
  },
  {
    title: "A Dual-Head Convolutional Network for Joint Human Presence, Posture and Bounding-Box Estimation from Ultra-Low-Resolution Thermal Images",
    venue: "SOCTA 2026 (11th Int. Conf. on Soft Computing)",
    status: "Submitted",
    role: "Co-author"
  },
  {
    title: "MAE-Pretrained Multi-Scale Lightweight CNN for Four-Class Brain Tumor MRI Classification",
    venue: "Intended for FICTA 2027",
    status: "In preparation",
    role: "First author"
  }
];
