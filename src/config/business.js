/**
 * Centralized Business Configuration for Garage Doors Service Team Queens
 * 
 * IMPORTANT:
 * Real US contact details, hours, and credentials are unverified until confirmed by the owner.
 * Update these fields when verified details are received.
 */

export const businessConfig = {
  name: "Garage Doors Service Team Queens",
  shortName: "Service Team Queens",
  legalName: "Garage Doors Service Team Queens",
  industry: "Garage Door Services",
  city: "Queens",
  state: "NY",
  stateFullName: "New York",
  country: "USA",
  serviceAreaDescription: "Queens, New York & Surrounding Neighborhoods",
  
  // Verification flags: Set to true only when confirmed by the business owner
  verification: {
    isPhoneVerified: false,
    isEmailVerified: false,
    isAddressVerified: false,
    isHoursVerified: false,
    isWhatsAppVerified: false,
    isLogoVerified: false,
  },

  // Contact details placeholders
  contact: {
    // To publish a verified US phone number, set verification.isPhoneVerified = true and enter digits
    phone: "", // e.g. "(718) 555-0199"
    phoneFormatted: "", // e.g. "(718) 555-0199"
    phoneRaw: "", // e.g. "+17185550199"
    
    // To publish a verified business email, set verification.isEmailVerified = true and enter email
    email: "", // e.g. "service@garagedoorsserviceteamqueens.com"
    
    // Physical address or Queens district
    address: "", // e.g. "Queens, NY 11375"
    
    // Regular business hours
    hours: "", // e.g. "Monday – Saturday: 8:00 AM – 6:00 PM"
    
    // WhatsApp number for click-to-chat (format: country code + digits without + or spaces)
    whatsAppNumber: "", // e.g. "17185550199"
    whatsAppPrefillMessage: "Hello, I need help with my garage door. Can you please provide more information about your services?",
    
    // Business logo file URL (leave empty to use high-resolution typographical SVG badge)
    logoUrl: "",
  },

  // Claims & Trust policy:
  // We do NOT claim 24/7, emergency, same-day, free estimates, or warranty years without verification.
  claims: {
    hasEmergencyService: false,
    has247Availability: false,
    hasSameDayService: false,
    hasFreeEstimates: false,
    hasSpecificWarrantyYears: null,
  },

  // Proposed service offerings (editable by administrator)
  services: [
    {
      id: "garage-door-repair",
      title: "Garage Door Repair",
      slug: "garage-door-repair",
      shortDesc: "Assistance with garage door problems, unusual noises, damaged components, and doors that are not operating properly.",
      fullDesc: "Whether your garage door is sticking, vibrating, making grinding sounds, off track, or refusing to close, our team is equipped to evaluate the issue. We inspect mechanical components, track alignment, rollers, and cables to provide reliable repair solutions.",
      image: "/images/services/repair.webp",
      features: [
        "Track alignment & roller inspection",
        "Cable & hardware evaluation",
        "Sensor alignment & safety testing",
        "Mechanical noise diagnosis",
        "Off-track door assessment"
      ],
      icon: "Wrench"
    },
    {
      id: "spring-service",
      title: "Garage Door Spring Service",
      slug: "garage-door-spring-service",
      shortDesc: "Service enquiries for garage door spring problems and related door operation issues.",
      fullDesc: "Garage door springs carry heavy counterbalancing tension. If your spring is snapped, stretched, or showing signs of wear, attempting DIY repair can be hazardous. We provide professional spring assessment, tension adjustments, and replacement services.",
      image: "/images/services/springs.webp",
      features: [
        "Torsion spring inspection",
        "Extension spring evaluation",
        "High-cycle replacement options",
        "Door counterbalance balancing",
        "Safe tension adjustment"
      ],
      icon: "Cpu"
    },
    {
      id: "garage-door-installation",
      title: "Garage Door Installation",
      slug: "garage-door-installation",
      shortDesc: "Explore garage door installation options for your property in Queens.",
      fullDesc: "Upgrade your home's curb appeal, energy efficiency, and security with a new garage door. We guide you through modern carriage-house, contemporary steel, insulated, and traditional designs suited for Queens homes.",
      image: "/images/services/installation.webp",
      features: [
        "Residential door replacements",
        "Insulated steel & modern designs",
        "Architectural carriage styles",
        "Weather sealing & perimeter trim",
        "Disposal of old garage door"
      ],
      icon: "Home"
    },
    {
      id: "opener-service",
      title: "Garage Door Opener Service",
      slug: "garage-door-opener-service",
      shortDesc: "Help with garage door opener issues and requests for opener installation or replacement.",
      fullDesc: "Having trouble with your motorized opener, remotes, keypad, or smart opener connectivity? We diagnose belt-drive, chain-drive, and wall-mount openers, helping restore convenient access to your garage.",
      image: "/images/services/opener.webp",
      features: [
        "Belt, chain, and direct-drive openers",
        "Remote & wall console programming",
        "Safety reverse sensor calibration",
        "Smart Wi-Fi connectivity options",
        "Motor gear & limit switch repair"
      ],
      icon: "Zap"
    },
    {
      id: "garage-door-maintenance",
      title: "Garage Door Maintenance",
      slug: "garage-door-maintenance",
      shortDesc: "Inspection and maintenance enquiries to help keep garage doors operating properly.",
      fullDesc: "Periodic lubrication, hardware tightening, balance checks, and safety reversal tests help prevent premature wear and unexpected breakdowns across changing New York seasons.",
      image: "/images/services/maintenance.webp",
      features: [
        "Multi-point safety inspection",
        "Heavy-duty lubricant application",
        "Nut, bolt & hinge tightening",
        "Balance and tension checks",
        "Weatherstrip condition inspection"
      ],
      icon: "ShieldCheck"
    }
  ],

  // Queens Neighborhoods served
  neighborhoods: [
    "Astoria", "Long Island City", "Flushing", "Bayside", "Forest Hills",
    "Jamaica", "Sunnyside", "Woodside", "Ridgewood", "Howard Beach",
    "Kew Gardens", "Whitestone", "Middle Village", "Elmhurst", "Jackson Heights",
    "Corona", "Bellerose", "Floral Park", "Ozone Park", "Fresh Meadows"
  ],

  // Standard FAQ entries
  faqs: [
    {
      question: "What garage door services do you provide?",
      answer: "We provide garage door services in Queens. Contact our team and describe what you need help with so we can discuss the available service options."
    },
    {
      question: "How can I request garage door repair?",
      answer: "You can call us, send a WhatsApp message, or submit the service request form on our website."
    },
    {
      question: "Can I book an appointment online?",
      answer: "Use our online booking page to submit an appointment request. The team can confirm availability."
    },
    {
      question: "Do you provide garage door installation?",
      answer: "Contact our team to confirm the installation services available for your project."
    },
    {
      question: "What should I do if my garage door stops working?",
      answer: "Avoid forcing the door to operate. Contact a qualified service professional and explain the issue."
    },
    {
      question: "Do you serve all areas of Queens?",
      answer: "Contact the company with your ZIP code to confirm service availability."
    },
    {
      question: "How can I get a quote?",
      answer: "Submit your contact details and a description of your garage door issue. The team can follow up to discuss your request."
    }
  ]
};
