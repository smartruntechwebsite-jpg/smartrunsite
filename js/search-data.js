// Static search index: each entry has a label (suggestion text), page URL, and page name
var SEARCH_INDEX = [
  // Home
  { text: "Home", page: "index.html", pageLabel: "Home" },
  { text: "Forging the Future", page: "index.html", pageLabel: "Home" },
  { text: "Our Services", page: "index.html", pageLabel: "Home" },
  { text: "Our Advantage", page: "index.html", pageLabel: "Home" },
  { text: "Fast Factory Insights", page: "index.html", pageLabel: "Home" },
  { text: "Actionable Strategy Plan", page: "index.html", pageLabel: "Home" },
  { text: "Rapid Site Assessment", page: "index.html", pageLabel: "Home" },
  { text: "Working Process", page: "index.html", pageLabel: "Home" },
  { text: "Smart Manufacturing", page: "index.html", pageLabel: "Home" },
  { text: "Standard Plans", page: "index.html", pageLabel: "Home" },

  // About Us
  { text: "About Us", page: "about-us.html", pageLabel: "About Us" },
  { text: "Why Choose Us", page: "about-us.html", pageLabel: "About Us" },
  { text: "Our Vision", page: "about-us.html", pageLabel: "About Us" },
  { text: "Our Solutions", page: "about-us.html", pageLabel: "About Us" },
  { text: "Working Process", page: "about-us.html", pageLabel: "About Us" },
  { text: "Preparation Of Materials", page: "about-us.html", pageLabel: "About Us" },
  { text: "Component Sourcing and Procurement", page: "about-us.html", pageLabel: "About Us" },
  { text: "Trusted By 450000 Individuals", page: "about-us.html", pageLabel: "About Us" },
  { text: "Industrial around the world", page: "about-us.html", pageLabel: "About Us" },

  // Services
  { text: "Services", page: "services.html", pageLabel: "Services" },
  { text: "Steel Working Excellence", page: "services.html", pageLabel: "Services" },
  { text: "Industrial Services", page: "services.html", pageLabel: "Services" },

  // Service Details
  { text: "Machine Analysis", page: "service-details.html", pageLabel: "Service Details" },
  { text: "Heavy Drilling Machine", page: "service-details.html", pageLabel: "Service Details" },
  { text: "Unique Solutions For Large Charging", page: "service-details.html", pageLabel: "Service Details" },
  { text: "Why Choose Our Industrial Work", page: "service-details.html", pageLabel: "Service Details" },
  { text: "Personalized Solutions", page: "service-details.html", pageLabel: "Service Details" },
  { text: "Comprehensive Logits", page: "service-details.html", pageLabel: "Service Details" },
  { text: "Plant Maintenance", page: "service-details.html", pageLabel: "Service Details" },
  { text: "Maintenance and Repairing", page: "service-details.html", pageLabel: "Service Details" },

  // Contact Us
  { text: "Contact Us", page: "contact-us.html", pageLabel: "Contact Us" },
  { text: "Get in touch", page: "contact-us.html", pageLabel: "Contact Us" },
  { text: "Mail us 24/7", page: "contact-us.html", pageLabel: "Contact Us" },
  { text: "Call Us 24/7", page: "contact-us.html", pageLabel: "Contact Us" },
  { text: "Our Location", page: "contact-us.html", pageLabel: "Contact Us" },

  // FAQ
  { text: "FAQ", page: "faq.html", pageLabel: "FAQ" },
  { text: "General Questions", page: "faq.html", pageLabel: "FAQ" },
  { text: "Frequently Asked Questions", page: "faq.html", pageLabel: "FAQ" },
  { text: "Industries we specialize in", page: "faq.html", pageLabel: "FAQ" },

  // Our Team
  { text: "Our Team", page: "our-team.html", pageLabel: "Our Team" },
  { text: "Team Members", page: "our-team.html", pageLabel: "Our Team" },
  { text: "Myles Evander", page: "our-team.html", pageLabel: "Our Team" },

  // Our History
  { text: "Our History", page: "our-history.html", pageLabel: "Our History" },
  { text: "Testing and Quality Control", page: "our-history.html", pageLabel: "Our History" },
  { text: "Final Assembly and Integration", page: "our-history.html", pageLabel: "Our History" },
  { text: "We Started Different Industries", page: "our-history.html", pageLabel: "Our History" },
  { text: "Expert Team Member", page: "our-history.html", pageLabel: "Our History" },

  // Blog
  { text: "Blog", page: "blog-classic.html", pageLabel: "Blog" },
  { text: "News", page: "blog-classic.html", pageLabel: "Blog" },
  { text: "Technology", page: "blog-classic.html", pageLabel: "Blog" },
  { text: "Recent Post", page: "blog-classic.html", pageLabel: "Blog" },
  { text: "Author of Blog", page: "blog-classic.html", pageLabel: "Blog" },

  // Portfolio
  { text: "Portfolio", page: "portfolio-grid-col-3.html", pageLabel: "Portfolio" },
  { text: "Image Gallery", page: "portfolio-grid-col-3.html", pageLabel: "Portfolio" },
  { text: "Events", page: "portfolio-grid-col-3.html", pageLabel: "Portfolio" },
];
