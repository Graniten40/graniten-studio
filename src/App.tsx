import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";

const contactEmail = "contact@granitenstudio.com";

const pricingContent = {
  sv: {
    eyebrow: "Prislista",
    title: "Tydliga priser för professionella hemsidor",
    subtitle:
      "Här är några startpaket för företag som vill ha en modern, snabb och professionell hemsida. Alla priser är från-priser och anges exklusive moms.",
    packages: [
      {
        name: "Simple Website",
        price: "från 4 900 kr",
        vat: "exkl. moms",
        description:
          "För dig som behöver en enkel men professionell hemsida för att synas online.",
        features: [
          "Modern startsida",
          "Responsiv design för mobil och dator",
          "Kontaktinformation",
          "Grundläggande SEO",
          "Publicering på webben",
        ],
        cta: "Kontakta mig",
      },
      {
        name: "Business Website",
        price: "från 11 900 kr",
        vat: "exkl. moms",
        badge: "Mest valt",
        description:
          "För företag som behöver en mer komplett hemsida med flera sidor och tydligare struktur.",
        features: [
          "4–6 sidor",
          "Responsiv och professionell design",
          "Kontaktformulär",
          "Grundläggande SEO",
          "Projekt- eller tjänstesidor",
          "Publicering och teknisk hjälp",
        ],
        cta: "Kontakta mig",
      },
      {
        name: "Custom Solution",
        price: "Offert",
        vat: "",
        description:
          "För dig som behöver en skräddarsydd lösning med mer avancerad funktionalitet.",
        features: [
          "Specialanpassad design",
          "Databas eller backend",
          "API-integrationer",
          "Bokningssystem, dashboard eller e-handel",
          "Lösning efter behov",
        ],
        cta: "Begär offert",
      },
    ],
    maintenance: {
      name: "Maintenance",
      price: "från 499 kr/mån",
      vat: "exkl. moms",
      description:
        "Löpande underhåll för dig som vill att hemsidan ska hållas uppdaterad, fungerande och trygg över tid.",
      features: [
        "Mindre text- och bildändringar",
        "Kontroll av länkar och formulär",
        "Enklare tekniska justeringar",
        "Rådgivning vid mindre ändringar",
        "Större ändringar offereras separat",
      ],
    },
    note:
      "Priserna är från-priser. Slutligt pris beror på omfattning, design, funktioner och tekniska behov.",
  },

  en: {
    eyebrow: "Pricing",
    title: "Clear pricing for professional websites",
    subtitle:
      "Here are a few starting packages for businesses that need a modern, fast and professional website. All prices are starting prices and exclude VAT.",
    packages: [
      {
        name: "Simple Website",
        price: "from SEK 4,900",
        vat: "excl. VAT",
        description:
          "For businesses that need a simple but professional website to establish an online presence.",
        features: [
          "Modern landing page",
          "Responsive design for mobile and desktop",
          "Contact information",
          "Basic SEO",
          "Website publishing",
        ],
        cta: "Contact me",
      },
      {
        name: "Business Website",
        price: "from SEK 11,900",
        vat: "excl. VAT",
        badge: "Best value",
        description:
          "For businesses that need a more complete website with multiple pages and a clear structure.",
        features: [
          "4–6 pages",
          "Responsive and professional design",
          "Contact form",
          "Basic SEO",
          "Project or service pages",
          "Publishing and technical setup",
        ],
        cta: "Contact me",
      },
      {
        name: "Custom Solution",
        price: "Quote",
        vat: "",
        description:
          "For businesses that need a custom-built solution with more advanced functionality.",
        features: [
          "Custom design",
          "Database or backend",
          "API integrations",
          "Booking system, dashboard or e-commerce",
          "Solution based on your needs",
        ],
        cta: "Request quote",
      },
    ],
    maintenance: {
      name: "Maintenance",
      price: "from SEK 499/month",
      vat: "excl. VAT",
      description:
        "Ongoing maintenance for businesses that want their website to stay updated, functional and reliable over time.",
      features: [
        "Minor text and image updates",
        "Link and form checks",
        "Basic technical adjustments",
        "Advice for smaller updates",
        "Larger changes are quoted separately",
      ],
    },
    note:
      "All prices are starting prices. Final pricing depends on scope, design, functionality and technical requirements.",
  },
};

const processContent = {
  sv: {
    eyebrow: "Process",
    title: "Så går det till från idé till färdig hemsida",
    subtitle:
      "En tydlig och enkel arbetsprocess gör att du vet vad som händer i varje steg, från första kontakt till publicerad hemsida.",
    steps: [
      {
        number: "01",
        title: "Första kontakt",
        text: "Vi går igenom dina behov, mål och vilken typ av hemsida eller digital lösning du vill ha.",
      },
      {
        number: "02",
        title: "Planering",
        text: "Jag tar fram en tydlig struktur för projektet med sidor, innehåll, funktioner och designriktning.",
      },
      {
        number: "03",
        title: "Design och utveckling",
        text: "Hemsidan byggs med modern, responsiv design som fungerar på dator, surfplatta och mobil.",
      },
      {
        number: "04",
        title: "Genomgång och justeringar",
        text: "Du får granska hemsidan och komma med önskemål om ändringar innan allt färdigställs.",
      },
      {
        number: "05",
        title: "Publicering och support",
        text: "Hemsidan publiceras och kan sedan underhållas, uppdateras och förbättras över tid vid behov.",
      },
    ],
  },

  en: {
    eyebrow: "Process",
    title: "From idea to finished website",
    subtitle:
      "A clear and simple process helps you understand what happens at every stage, from first contact to published website.",
    steps: [
      {
        number: "01",
        title: "First contact",
        text: "We go through your needs, goals and what kind of website or digital solution you want.",
      },
      {
        number: "02",
        title: "Planning",
        text: "I create a clear project structure with pages, content, features and design direction.",
      },
      {
        number: "03",
        title: "Design and development",
        text: "The website is built with a modern, responsive design that works on desktop, tablet and mobile.",
      },
      {
        number: "04",
        title: "Review and adjustments",
        text: "You get to review the website and request changes before everything is finalized.",
      },
      {
        number: "05",
        title: "Launch and support",
        text: "The website is published and can then be maintained, updated and improved over time if needed.",
      },
    ],
  },
};

const ctaContent = {
  sv: {
    eyebrow: "Redo att komma igång?",
    title: "Låt oss bygga en hemsida som gör ditt företag tydligare online.",
    text:
      "Oavsett om du behöver en enkel företagssida, en mer komplett hemsida eller en skräddarsydd digital lösning kan Graniten Studio hjälpa dig från idé till färdig publicering.",
    primaryButton: "Kontakta mig",
    secondaryButton: "Se priser",
  },

  en: {
    eyebrow: "Ready to get started?",
    title: "Let’s build a website that makes your business clearer online.",
    text:
      "Whether you need a simple business website, a more complete website or a custom digital solution, Graniten Studio can help you from idea to launch.",
    primaryButton: "Contact me",
    secondaryButton: "View pricing",
  },
};

const translations = {
  en: {
    navServices: "Services",
    navPricing: "Pricing",
    navProjects: "Projects",
    navAbout: "About",
    navContact: "Contact",

    eyebrow: "Web Development • Design • Digital Solutions",
    heroTitle: "Modern websites and digital tools for businesses.",
    heroText:
      "I build clean, responsive and practical web solutions using modern technologies like React, TypeScript, C#, .NET and SQL.",
    viewProjects: "View Projects",
    contactMe: "Contact Me",

    servicesLabel: "Services",
    servicesTitle: "What I can help with",
    servicesIntro:
    "I help businesses create modern websites and digital solutions that are clear, responsive and easy to use.",

    websitesTitle: "Websites",
    websitesText:
      "Modern, responsive websites for small businesses, local companies and personal brands.",

    frontendTitle: "Frontend Development",
    frontendText:
      "User interfaces built with React, TypeScript, Vite and clean CSS.",

    backendTitle: "Backend Development",
    backendText:
      "APIs, business logic and database-driven systems using C#, .NET and SQL.",

    seoTitle: "SEO Basics",
    seoText:
      "Technical SEO setup with metadata, sitemap, robots.txt, Google Search Console and performance improvements.",

    projectsLabel: "Projects",
    projectsTitle: "Selected work",
    projectsIntro:
    "A selection of websites and browser-based tools built with focus on performance, usability and clear structure.",
    visitWebsite: "Visit website",
    comingSoon: "Coming soon",

    lillavitasText:
      "A responsive website for a local flower shop with order inquiry, Google Maps integration and technical SEO setup.",

    murByggText:
      "A company website for a masonry and construction business, focused on trust, local visibility and clear service presentation.",

    freeToolsText:
      "A hub for free browser-based tools, built with performance, simplicity and SEO structure in mind.",

    qrToolsText:
      "A free QR code tool that supports URLs, text, email, phone numbers, WiFi, vCards, events and more.",

    barcodeText:
      "A browser-based barcode generator supporting common formats such as CODE128, CODE39, EAN13, EAN8 and UPC.",

    invoiceText:
      "A frontend invoice generator with invoice items, VAT calculation, currency selection, local storage and PDF export.",

    tradingText:
      "A trading calculator for profit and loss, leverage, fees, ROI, position size and account balance calculations.",

    inDevelopmentLabel: "In development",
    inDevelopmentTitle: "Systems and tools in development",
    inDevelopmentIntro:
      "A look at systems and tools currently being planned or developed by Graniten Studio.",

    barcodeSystemText:
      "A planned barcode system for Lilla Vitas Blommor, designed to support product handling, labeling and better structure in the business.",

    foundationSystemText:
      "A system in development that collects and structures information about funds and foundations, with a focus on making it easier to understand what can be applied for and how the support works.",

    aboutLabel: "About",
    aboutTitle: "Developer with practical business experience.",
    aboutText:
      "My background combines software development with many years of practical experience from industry and business. I focus on building solutions that are simple to use, easy to understand and useful in real business situations.",

    contactLabel: "Contact",
    contactTitle: "Need a website or digital solution?",
    contactText:
      "Tell me what you want to build and I’ll help you find a clear, practical solution that fits your business.",
    contactCardTitle: "You can contact me about",
    contactItems: [
      "Business websites",
      "Frontend development",
      "Backend systems",
      "Website updates and maintenance",
    ],
    contactEmailLabel: "Email",
    emailButton: "Email Graniten Studio",

    footerRights: "All rights reserved.",
    privacyPolicy: "Privacy Policy",
    termsOfUse: "Terms of Use",
    backToHome: "← Back to Graniten Studio",

    privacyTitle: "Privacy Policy",
    privacyIntro:
      "This privacy policy explains how Graniten Studio handles basic information when you visit this website or contact me by email.",
    personalInfoTitle: "Personal information",
    personalInfoText:
      "Graniten Studio does not collect personal information directly through this website. If you contact me by email, your email address and message will only be used to respond to your inquiry.",
    analyticsTitle: "Analytics",
    analyticsText:
      "This website may use basic analytics tools to understand website traffic, improve performance and see how visitors use the website. No sensitive personal information is intentionally collected.",
    externalLinksTitle: "External links",
    externalLinksText:
      "This website may contain links to external projects or third-party websites. Graniten Studio is not responsible for the privacy practices or content of those external websites.",
    privacyContactTitle: "Contact",
    privacyContactText:
      "If you have questions about this privacy policy, you can contact Graniten Studio by email.",

    termsTitle: "Terms of Use",
    termsIntro: "These terms describe how this website and its content may be used.",
    websiteContentTitle: "Website content",
    websiteContentText:
      "The content on this website is provided for general information about Graniten Studio, services and projects.",
    projectLinksTitle: "Project links",
    projectLinksText:
      "Project links are provided as examples of previous work and may lead to external websites. Availability and content on external websites may change over time.",
    useContentTitle: "Use of content",
    useContentText:
      "You may not copy, misuse or redistribute content from this website without permission.",
    noGuaranteesTitle: "No guarantees",
    noGuaranteesText:
      "Graniten Studio aims to keep the information on this website accurate, but does not guarantee that all content is always complete, current or error-free.",
  },

  sv: {
    navServices: "Tjänster",
    navPricing: "Priser",
    navProjects: "Projekt",
    navAbout: "Om mig",
    navContact: "Kontakt",

    eyebrow: "Webbutveckling • Design • Digitala lösningar",
    heroTitle: "Moderna hemsidor och digitala verktyg för företag.",
    heroText:
      "Jag bygger rena, responsiva och praktiska webblösningar med moderna tekniker som React, TypeScript, C#, .NET och SQL.",
    viewProjects: "Visa projekt",
    contactMe: "Kontakta mig",

    servicesLabel: "Tjänster",
    servicesTitle: "Det här kan jag hjälpa till med",
    servicesIntro:
    "Jag hjälper företag att skapa moderna hemsidor och digitala lösningar som är tydliga, responsiva och enkla att använda.",

    websitesTitle: "Hemsidor",
    websitesText:
      "Moderna, responsiva hemsidor för småföretag, lokala företag och personliga varumärken.",

    frontendTitle: "Frontend-utveckling",
    frontendText:
      "Användargränssnitt byggda med React, TypeScript, Vite och ren CSS.",

    backendTitle: "Backend-utveckling",
    backendText:
      "API:er, affärslogik och databasdrivna system med C#, .NET och SQL.",

    seoTitle: "Grundläggande SEO",
    seoText:
      "Teknisk SEO med metadata, sitemap, robots.txt, Google Search Console och prestandaförbättringar.",

    projectsLabel: "Projekt",
    projectsTitle: "Utvalda arbeten",
    projectsIntro:
    "Ett urval av hemsidor och webbaserade verktyg byggda med fokus på prestanda, användarvänlighet och tydlig struktur.",
    visitWebsite: "Besök hemsidan",
    comingSoon: "Kommer snart",

    lillavitasText:
      "En responsiv hemsida för en lokal blomsterbutik med orderförfrågan, Google Maps-integration och teknisk SEO.",

    murByggText:
      "En företagssida för ett mur- och byggföretag med fokus på förtroende, lokal synlighet och tydlig presentation av tjänster.",

    freeToolsText:
      "En samlingssida för gratis webbaserade verktyg, byggd med fokus på prestanda, enkelhet och SEO-struktur.",

    qrToolsText:
      "Ett gratis QR-kodverktyg som stöder länkar, text, e-post, telefonnummer, WiFi, vCards, events och mer.",

    barcodeText:
      "En webbaserad streckkodsgenerator som stöder vanliga format som CODE128, CODE39, EAN13, EAN8 och UPC.",

    invoiceText:
      "En fakturagenerator i frontend med fakturarader, momsberäkning, valutaval, localStorage och PDF-export.",

    tradingText:
      "En tradingkalkylator för vinst och förlust, hävstång, avgifter, ROI, positionsstorlek och kontobalans.",

    inDevelopmentLabel: "Under utveckling",
    inDevelopmentTitle: "System och verktyg under utveckling",
    inDevelopmentIntro:
      "En överblick över system och verktyg som planeras eller utvecklas av Graniten Studio.",

    barcodeSystemText:
      "Ett planerat streckkodssystem för Lilla Vitas Blommor som ska hjälpa till med produkthantering, märkning och bättre struktur i verksamheten.",

    foundationSystemText:
      "Ett system under utveckling som samlar och strukturerar information om fonder och stiftelser, med fokus på att göra det enklare att förstå vad man kan söka och hur stöden fungerar.",

    aboutLabel: "Om mig",
    aboutTitle: "Utvecklare med praktisk affärserfarenhet.",
    aboutText:
      "Min bakgrund kombinerar systemutveckling med många års praktisk erfarenhet från industri och företagande. Jag fokuserar på att bygga lösningar som är enkla att använda, lätta att förstå och användbara i verkliga företagssituationer.",

    contactLabel: "Kontakt",
    contactTitle: "Behöver du en hemsida eller digital lösning?",
    contactText:
      "Berätta vad du vill bygga, så hjälper jag dig att hitta en tydlig och praktisk lösning som passar ditt företag.",
    contactCardTitle: "Du kan kontakta mig om",
    contactItems: [
      "Företagssidor",
      "Frontendutveckling",
      "Backend-system",
      "Uppdatering och underhåll av hemsidor",
    ],
    contactEmailLabel: "E-post",
    emailButton: "Mejla Graniten Studio",

    footerRights: "Alla rättigheter förbehållna.",
    privacyPolicy: "Integritetspolicy",
    termsOfUse: "Användarvillkor",
    backToHome: "← Tillbaka till Graniten Studio",

    privacyTitle: "Integritetspolicy",
    privacyIntro:
      "Den här integritetspolicyn förklarar hur Graniten Studio hanterar grundläggande information när du besöker webbplatsen eller kontaktar mig via e-post.",
    personalInfoTitle: "Personuppgifter",
    personalInfoText:
      "Graniten Studio samlar inte in personuppgifter direkt via denna webbplats. Om du kontaktar mig via e-post används din e-postadress och ditt meddelande endast för att svara på din förfrågan.",
    analyticsTitle: "Analys",
    analyticsText:
      "Webbplatsen kan använda enklare analysverktyg för att förstå trafik, förbättra prestanda och se hur besökare använder webbplatsen. Ingen känslig personlig information samlas avsiktligt in.",
    externalLinksTitle: "Externa länkar",
    externalLinksText:
      "Webbplatsen kan innehålla länkar till externa projekt eller tredjepartswebbplatser. Graniten Studio ansvarar inte för deras integritetspolicyer eller innehåll.",
    privacyContactTitle: "Kontakt",
    privacyContactText:
      "Om du har frågor om denna integritetspolicy kan du kontakta Graniten Studio via e-post.",

    termsTitle: "Användarvillkor",
    termsIntro:
      "Dessa villkor beskriver hur webbplatsen och dess innehåll får användas.",
    websiteContentTitle: "Webbplatsens innehåll",
    websiteContentText:
      "Innehållet på denna webbplats tillhandahålls som allmän information om Graniten Studio, tjänster och projekt.",
    projectLinksTitle: "Projektlänkar",
    projectLinksText:
      "Projektlänkar visas som exempel på tidigare arbete och kan leda till externa webbplatser. Tillgänglighet och innehåll på externa webbplatser kan ändras över tid.",
    useContentTitle: "Användning av innehåll",
    useContentText:
      "Du får inte kopiera, missbruka eller återpublicera innehåll från denna webbplats utan tillstånd.",
    noGuaranteesTitle: "Inga garantier",
    noGuaranteesText:
      "Graniten Studio försöker hålla informationen på webbplatsen korrekt, men garanterar inte att allt innehåll alltid är komplett, aktuellt eller felfritt.",
  },
};

type Language = "en" | "sv";
type Translation = typeof translations.en;

type PageProps = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: Translation;
};

function LanguageSwitcher({
  language,
  setLanguage,
}: {
  language: Language;
  setLanguage: (language: Language) => void;
}) {
  return (
    <div className="language-switcher">
      <button
        type="button"
        className={language === "sv" ? "active" : ""}
        onClick={() => setLanguage("sv")}
      >
        SV
      </button>

      <button
        type="button"
        className={language === "en" ? "active" : ""}
        onClick={() => setLanguage("en")}
      >
        EN
      </button>
    </div>
  );
}

const whyChooseContent = {
  sv: {
    eyebrow: "Varför Graniten Studio?",
    title: "En trygg partner för din digitala närvaro",
    subtitle:
      "Graniten Studio kombinerar modern webbutveckling med praktisk affärsförståelse. Målet är att skapa hemsidor och digitala lösningar som är tydliga, snabba och användbara för riktiga företag.",
    items: [
      {
        number: "01",
        title: "Tydlig kommunikation",
        text: "Du får en enkel och rak process där du vet vad som görs, varför det görs och vad nästa steg är.",
      },
      {
        number: "02",
        title: "Modern teknik",
        text: "Hemsidor byggs med moderna tekniker som React, TypeScript, Vite, C#, .NET och SQL.",
      },
      {
        number: "03",
        title: "Fokus på företagets behov",
        text: "Lösningen anpassas efter ditt företag, dina kunder och vad hemsidan faktiskt ska hjälpa dig att uppnå.",
      },
      {
        number: "04",
        title: "Långsiktigt tänkande",
        text: "Hemsidan byggs så att den kan underhållas, förbättras och växa vidare över tid.",
      },
    ],
  },

  en: {
    eyebrow: "Why Graniten Studio?",
    title: "A reliable partner for your digital presence",
    subtitle:
      "Graniten Studio combines modern web development with practical business understanding. The goal is to create websites and digital solutions that are clear, fast and useful for real businesses.",
    items: [
      {
        number: "01",
        title: "Clear communication",
        text: "You get a simple and transparent process where you know what is being built, why it matters and what the next step is.",
      },
      {
        number: "02",
        title: "Modern technology",
        text: "Websites are built with modern technologies such as React, TypeScript, Vite, C#, .NET and SQL.",
      },
      {
        number: "03",
        title: "Business-focused solutions",
        text: "The solution is adapted to your business, your customers and what the website should actually help you achieve.",
      },
      {
        number: "04",
        title: "Long-term thinking",
        text: "The website is built so it can be maintained, improved and expanded over time.",
      },
    ],
  },
};

function PricingSection({ language }: { language: Language }) {
  const content = pricingContent[language];

  return (
    <section id="pricing" className="section pricing-section">
      <p className="section-label">{content.eyebrow}</p>
      <h2>{content.title}</h2>
      <p className="pricing-intro">{content.subtitle}</p>

      <div className="pricing-grid">
        {content.packages.map((pkg) => (
          <article
            className={`pricing-card ${pkg.badge ? "featured-pricing-card" : ""}`}
            key={pkg.name}
            >
            {pkg.badge && <span className="pricing-badge">{pkg.badge}</span>}

            <h3>{pkg.name}</h3>

            <div className="pricing-price">
              <span>{pkg.price}</span>
              {pkg.vat && <small>{pkg.vat}</small>}
            </div>

            <p>{pkg.description}</p>

            <ul>
              {pkg.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>

            <a href="#contact" className="btn primary">
              {pkg.cta}
            </a>
          </article>
        ))}
      </div>

      <article className="maintenance-card">
        <div>
          <p className="section-label">{content.maintenance.name}</p>
          <h3>{content.maintenance.price}</h3>
          {content.maintenance.vat && <small>{content.maintenance.vat}</small>}
          <p>{content.maintenance.description}</p>
        </div>

        <ul>
          {content.maintenance.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </article>

      <p className="pricing-note">{content.note}</p>
    </section>
  );
}

function ProcessSection({ language }: { language: Language }) {
  const content = processContent[language];

  return (
    <section id="process" className="section process-section">
      <p className="section-label">{content.eyebrow}</p>
      <h2>{content.title}</h2>
      <p className="process-intro">{content.subtitle}</p>

      <div className="process-grid">
        {content.steps.map((step) => (
          <article className="process-card" key={step.number}>
            <span className="process-number">{step.number}</span>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function WhyChooseSection({ language }: { language: Language }) {
  const content = whyChooseContent[language];

  return (
    <section id="why-graniten" className="section why-section">
      <div className="why-header">
        <p className="section-label">{content.eyebrow}</p>
        <h2>{content.title}</h2>
        <p className="why-intro">{content.subtitle}</p>
      </div>

      <div className="why-grid">
        {content.items.map((item) => (
          <article className="why-card" key={item.number}>
            <span className="why-number">{item.number}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function CtaSection({ language }: { language: Language }) {
  const content = ctaContent[language];

  return (
    <section className="cta-section">
      <div className="cta-content">
        <p className="section-label">{content.eyebrow}</p>
        <h2>{content.title}</h2>
        <p>{content.text}</p>

        <div className="cta-buttons">
          <a href="#contact" className="btn primary">
            {content.primaryButton}
          </a>

          <a href="#pricing" className="btn secondary">
            {content.secondaryButton}
          </a>
        </div>
      </div>
    </section>
  );
}

function ProjectsSection({ t }: { t: Translation }) {
  const projects = [
    {
      title: "Lillavitas Blommor",
      type: "Website",
      stack: "React • Vite • Tailwind • EmailJS • SEO",
      text: t.lillavitasText,
      url: "https://lillavitasblommor.se/",
      featured: true,
    },
    {
      title: "Mur & Bygg i Skutskär",
      type: "Website",
      stack: "React • Vite • CSS • SEO • Cloudflare Pages",
      text: t.murByggText,
      url: "",
      featured: true,
    },
    {
      title: "Free Online Tools",
      type: "Tools",
      stack: "React • Vite • TypeScript • Cloudflare Pages",
      text: t.freeToolsText,
      url: "https://freeonlinetools-4a9.pages.dev/",
      featured: false,
    },
    {
      title: "QR Code Tools",
      type: "Tool",
      stack: "React • TypeScript • QR Generation • SEO",
      text: t.qrToolsText,
      url: "https://qr-code-tools.pages.dev/",
      featured: false,
    },
    {
      title: "Barcode Generator",
      type: "Tool",
      stack: "React • TypeScript • Barcode Formats • Validation",
      text: t.barcodeText,
      url: "https://barcode-generator-v2.pages.dev/",
      featured: false,
    },
    {
      title: "Invoice Generator",
      type: "Tool",
      stack: "React • TypeScript • jsPDF • LocalStorage",
      text: t.invoiceText,
      url: "https://invoice-generator-2bu.pages.dev/",
      featured: false,
    },
    {
      title: "Trading Profit Calculator",
      type: "Tool",
      stack: "React • TypeScript • Trading Logic • SEO",
      text: t.tradingText,
      url: "https://trading-profit-calculator.pages.dev/",
      featured: false,
    },
  ];

  const featuredProjects = projects.filter((project) => project.featured);
  const toolProjects = projects.filter((project) => !project.featured);

  const inDevelopmentProjects = [
  {
    title: "Barcode System for Lilla Vitas Blommor",
    type: t.inDevelopmentLabel,
    stack: "React • TypeScript • C# • SQL",
    text: t.barcodeSystemText,
  },
  {
    title: "Funds & Foundations System",
    type: t.inDevelopmentLabel,
    stack: "C# • SQL • Data collection • Web interface",
    text: t.foundationSystemText,
  },
];

  return (
    <section id="projects" className="section dark-section projects-section">
      <p className="section-label">{t.projectsLabel}</p>
      <h2>{t.projectsTitle}</h2>
      <p className="projects-intro">{t.projectsIntro}</p>

      <div className="featured-projects">
        {featuredProjects.map((project) => (
          <article className="featured-project-card" key={project.title}>
            <div className="project-topline">
              <span>{project.type}</span>
            </div>

            <h3>{project.title}</h3>
            <p>{project.text}</p>

            <div className="project-stack">{project.stack}</div>

            {project.url ? (
              <a
                className="project-link"
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.visitWebsite}
              </a>
            ) : (
              <span className="project-link coming-soon">{t.comingSoon}</span>
            )}
          </article>
        ))}
      </div>

            <div className="tool-projects-grid">
              {toolProjects.map((project) => (
                <article className="tool-project-card" key={project.title}>
                  <div className="project-topline">
                    <span>{project.type}</span>
                  </div>

                  <h3>{project.title}</h3>
                  <p>{project.text}</p>

                  <div className="project-stack">{project.stack}</div>

                  <a
                    className="project-link"
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t.visitWebsite}
                  </a>
                </article>
              ))}
            </div>

            <div className="in-development-section">
              <div className="in-development-header">
                <p className="section-label">{t.inDevelopmentLabel}</p>
                <h3>{t.inDevelopmentTitle}</h3>
                <p>{t.inDevelopmentIntro}</p>
              </div>

              <div className="in-development-grid">
                {inDevelopmentProjects.map((project) => (
                  <article className="in-development-card" key={project.title}>
                    <div className="project-topline">
                      <span>{project.type}</span>
                    </div>

                    <h3>{project.title}</h3>
                    <p>{project.text}</p>

                    <div className="project-stack">{project.stack}</div>
                  </article>
                ))}
              </div>
            </div>
          </section>
  );
}

function HomePage({ language, setLanguage, t }: PageProps) {
  return (
    <main className="page">
      <section className="hero">
        <nav className="navbar">
          <div className="logo">Graniten Studio</div>

          <div className="nav-links">
            <a href="#services">{t.navServices}</a>
            <a href="#pricing">{t.navPricing}</a>
            <a href="#projects">{t.navProjects}</a>
            <a href="#about">{t.navAbout}</a>
            <a href="#contact">{t.navContact}</a>
          </div>

          <LanguageSwitcher language={language} setLanguage={setLanguage} />
        </nav>

        <div className="hero-content">
          <p className="eyebrow">{t.eyebrow}</p>

          <h1>
            {language === "en" ? (
              <>
                Modern websites and digital tools
                <br />
                for businesses.
              </>
            ) : (
              t.heroTitle
            )}
          </h1>

          <p className="hero-text">{t.heroText}</p>

          <div className="hero-buttons">
            <a href="#projects" className="btn primary">
              {t.viewProjects}
            </a>
            <a href="#contact" className="btn secondary">
              {t.contactMe}
            </a>
          </div>
        </div>
      </section>

      <section id="services" className="section services-section">
        <p className="section-label">{t.servicesLabel}</p>
        <h2>{t.servicesTitle}</h2>
        <p className="services-intro">{t.servicesIntro}</p>

        <div className="services-grid">
          <article className="service-card">
            <div className="service-icon">🌐</div>
            <h3>{t.websitesTitle}</h3>
            <p>{t.websitesText}</p>
          </article>

          <article className="service-card">
            <div className="service-icon">⚛️</div>
            <h3>{t.frontendTitle}</h3>
            <p>{t.frontendText}</p>
          </article>

          <article className="service-card">
            <div className="service-icon">⚙️</div>
            <h3>{t.backendTitle}</h3>
            <p>{t.backendText}</p>
          </article>

          <article className="service-card">
            <div className="service-icon">📈</div>
            <h3>{t.seoTitle}</h3>
            <p>{t.seoText}</p>
          </article>
        </div>
      </section>

      <CtaSection language={language} />

      <PricingSection language={language} />

      <WhyChooseSection language={language} />

      <ProcessSection language={language} />

      <ProjectsSection t={t} />

      <section id="about" className="section about">
        <div>
          <p className="section-label">{t.aboutLabel}</p>
          <h2>{t.aboutTitle}</h2>
        </div>

        <p>{t.aboutText}</p>
      </section>

      <section id="contact" className="section contact contact-section">
        <div className="contact-grid">
          <div className="contact-main">
            <p className="section-label">{t.contactLabel}</p>
            <h2>{t.contactTitle}</h2>
            <p>{t.contactText}</p>

            <a className="btn primary" href={`mailto:${contactEmail}`}>
              {t.emailButton}
            </a>
          </div>

          <div className="contact-card">
            <p className="contact-card-label">{t.contactCardTitle}</p>

            <ul className="contact-list">
              {t.contactItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <div className="contact-email-box">
              <span>{t.contactEmailLabel}</span>
              <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>© 2026 Graniten Studio. {t.footerRights}</p>

        <div className="footer-links">
          <Link to="/privacy-policy">{t.privacyPolicy}</Link>
          <Link to="/terms-of-use">{t.termsOfUse}</Link>
        </div>
      </footer>
    </main>
  );
}

function PrivacyPolicy({ t }: { t: Translation }) {
  return (
    <main className="legal-page">
      <Link to="/" className="back-link">
        {t.backToHome}
      </Link>

      <section className="legal-content">
        <h1>{t.privacyTitle}</h1>

        <p className="legal-intro">{t.privacyIntro}</p>

        <div className="legal-block">
          <h2>{t.personalInfoTitle}</h2>
          <p>{t.personalInfoText}</p>
        </div>

        <div className="legal-block">
          <h2>{t.analyticsTitle}</h2>
          <p>{t.analyticsText}</p>
        </div>

        <div className="legal-block">
          <h2>{t.externalLinksTitle}</h2>
          <p>{t.externalLinksText}</p>
        </div>

        <div className="legal-block">
          <h2>{t.privacyContactTitle}</h2>
          <p>{t.privacyContactText}</p>
        </div>
      </section>
    </main>
  );
}

function TermsOfUse({ t }: { t: Translation }) {
  return (
    <main className="legal-page">
      <Link to="/" className="back-link">
        {t.backToHome}
      </Link>

      <section className="legal-content">
        <h1>{t.termsTitle}</h1>

        <p className="legal-intro">{t.termsIntro}</p>

        <div className="legal-block">
          <h2>{t.websiteContentTitle}</h2>
          <p>{t.websiteContentText}</p>
        </div>

        <div className="legal-block">
          <h2>{t.projectLinksTitle}</h2>
          <p>{t.projectLinksText}</p>
        </div>

        <div className="legal-block">
          <h2>{t.useContentTitle}</h2>
          <p>{t.useContentText}</p>
        </div>

        <div className="legal-block">
          <h2>{t.noGuaranteesTitle}</h2>
          <p>{t.noGuaranteesText}</p>
        </div>
      </section>
    </main>
  );
}

function App() {
  const [language, setLanguage] = useState<Language>("en");
  const t = translations[language];

  return (
    <Routes>
      <Route
        path="/"
        element={
          <HomePage language={language} setLanguage={setLanguage} t={t} />
        }
      />
      <Route path="/privacy-policy" element={<PrivacyPolicy t={t} />} />
      <Route path="/terms-of-use" element={<TermsOfUse t={t} />} />
    </Routes>
  );
}

export default App;