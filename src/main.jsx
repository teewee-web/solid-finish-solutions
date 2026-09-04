import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  Check,
  Home,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  PaintRoller,
  Phone,
  ShieldCheck,
  Sparkles,
  Wrench,
  X,
} from "lucide-react";
import "./styles.css";

const phoneDisplay = "07739 960753";
const phoneHref = "tel:+447739960753";
const emailHref = "mailto:solidfinishsolutions@gmail.com";
const whatsappHref =
  "https://wa.me/447739960753?text=Hi%20Solid%20Finish%20Solutions%2C%20I%27d%20like%20a%20free%20quote.";

const navItems = [
  ["Services", "/#services"],
  ["Enfield", "/painter-decorator-enfield/"],
  ["Commercial", "/commercial-painters-london/"],
  ["Projects", "/#projects"],
  ["Why us", "/#why-us"],
  ["Contact", "/#contact"],
];

const heroMetrics = [
  ["£5m", "public liability insurance"],
  ["Written", "professional quotations"],
  ["London", "homes, offices and managed property"],
];

const projects = [
  {
    title: "Two-tone bedroom redecoration",
    text: "Soft neutral walls paired with deep green fitted cabinetry, shelving, panelling, skirting and door details for a coordinated, durable finish.",
    galleryMedia: [
      {
        src: "/assets/project-green-bedroom-cabinetry-privacy.webp",
        alt: "Deep green fitted bedroom cabinetry and panelled bench after decoration",
      },
      {
        src: "/assets/project-green-bedroom-shelving-privacy.webp",
        alt: "Decorated bedroom shelving and green panelled storage with neutral walls",
      },
      {
        src: "/assets/project-green-bedroom-room.webp",
        alt: "Finished bedroom with neutral walls, green woodwork and white radiator",
      },
    ],
  },
  {
    title: "Exterior repaint",
    text: "Front elevation refreshed with crisp render, red brickwork and black base.",
    beforeMedia: {
      type: "video",
      src: "/assets/project-before-exterior.mov",
    },
    afterMedia: {
      type: "image",
      src: "/assets/project-after-exterior.webp",
      alt: "Finished exterior repaint by Solid Finish Solutions",
    },
  },
  {
    title: "Interior feature wall",
    text: "Freshly decorated living space with protected furniture and clean edges.",
    imageMedia: {
      src: "/assets/project-interior-4107.webp",
      alt: "Interior feature wall painting project by Solid Finish Solutions",
    },
  },
  {
    title: "Side elevation repaint",
    text: "Weathered exterior cleaned and refinished in a brighter, sharper white.",
    beforeMedia: {
      type: "image",
      src: "/assets/project-before-side-render.webp",
      alt: "Before exterior side elevation repaint",
    },
    afterMedia: {
      type: "image",
      src: "/assets/project-after-side-render.webp",
      alt: "After exterior side elevation repaint",
    },
  },
  {
    title: "Interior wall repair",
    text: "Damaged wall repaired, smoothed and finished to blend cleanly with the room.",
    beforeMedia: {
      type: "image",
      src: "/assets/project-before-interior-repair.webp",
      alt: "Before interior wall repair",
    },
    afterMedia: {
      type: "image",
      src: "/assets/project-after-interior-repair.webp",
      alt: "After interior wall repair",
    },
  },
];

const commercialCaseStudies = [
  {
    title: "Exterior elevation repaint",
    location: "London — client location withheld",
    scope: "Preparation and repainting of a weathered front elevation, including rendered areas, contrasting brickwork and the lower plinth.",
    products: "A substrate-appropriate exterior preparation, primer and weather-resistant masonry finish system; exact product records available with the project file.",
    outcome: "A cleaner, sharper frontage with consistent coverage and durable external protection.",
    imageMedia: projects[1].afterMedia,
  },
  {
    title: "Interior feature-wall decoration",
    location: "London — client location withheld",
    scope: "Protection of the occupied room, surface preparation, cutting-in and decoration of the principal feature wall.",
    products: "Interior preparation materials and a durable wall-finish system selected for the existing surface; brand details were not recorded for publication.",
    outcome: "A refreshed living space with clean edges and the room returned tidy and ready to use.",
    imageMedia: projects[2].imageMedia,
  },
  {
    title: "Side elevation restoration",
    location: "London — client location withheld",
    scope: "Cleaning and preparation of a tired external side elevation followed by a complete repaint in a brighter white finish.",
    products: "Exterior repair and masonry-coating system selected for the elevation and exposure conditions; exact brand details remain in the job specification.",
    outcome: "A visibly brighter, more uniform elevation with renewed weather protection.",
    beforeMedia: projects[3].beforeMedia,
    afterMedia: projects[3].afterMedia,
  },
  {
    title: "Interior wall repair and redecoration",
    location: "London — client location withheld",
    scope: "Removal of loose material, repair and smoothing of the damaged wall, local preparation and decoration to blend with the surrounding room.",
    products: "Repair compound, preparation coat and compatible interior topcoat selected to suit the existing wall finish.",
    outcome: "The damaged area was stabilised and visually integrated, leaving a clean, usable room.",
    beforeMedia: projects[4].beforeMedia,
    afterMedia: projects[4].afterMedia,
  },
];

const services = [
  {
    icon: PaintRoller,
    title: "Interior painting",
    text: "Walls, ceilings, woodwork and feature walls prepared properly and finished cleanly.",
  },
  {
    icon: Home,
    title: "Exterior painting",
    text: "Masonry, render, doors, windows and metalwork using durable exterior systems.",
  },
  {
    icon: Wrench,
    title: "Plastering & repairs",
    text: "Skimming, crack repairs, water damage fixes and surface prep before decorating.",
  },
  {
    icon: Building2,
    title: "Property maintenance",
    text: "Reliable repairs, touch-ups and ongoing upkeep for landlords and property managers.",
  },
  {
    icon: Sparkles,
    title: "Wallpapering",
    text: "Feature walls, full rooms, murals, removal and pattern-matched installation.",
  },
  {
    icon: ShieldCheck,
    title: "Commercial make-good",
    text: "Office, retail and managed property decorating with tidy, low-disruption working.",
  },
];

const audiences = [
  {
    title: "Homeowners",
    text: "Careful refreshes and refurbishments with proper protection for your home.",
  },
  {
    title: "Landlords & agents",
    text: "Fast turnarounds between tenants, clear updates and one dependable contact.",
  },
  {
    title: "Commercial clients",
    text: "Offices, retail and shared areas handled cleanly, including out-of-hours work.",
  },
];

const reasons = [
  "Clean preparation and protected work areas",
  "£5m public liability insurance",
  "Professional written quotations and agreed scopes",
  "Reliable timings and clear communication",
  "High-quality finishes with proper attention to detail",
  "Trusted across London and surrounding areas",
];

const steps = [
  ["1", "Message or call", "Send photos or book a visit for a fast first estimate."],
  ["2", "Clear quote", "You get honest pricing, timings and the right finish options."],
  ["3", "Protected work", "Floors, furniture and surfaces are covered before work begins."],
  ["4", "Final check", "The finish is checked, cleaned and handed over properly."],
];

const authoritySignals = [
  {
    title: "Commercial-ready insurance",
    text: "£5m public liability insurance for residential and commercial painting and decorating projects.",
  },
  {
    title: "Professional written quotations",
    text: "Clear scopes, preparation notes and pricing before work begins, useful for landlords, managers and business approvals.",
  },
  {
    title: "Occupied-premises working",
    text: "Protection, tidy working and phased access planning for offices, communal areas, rental properties and homes in use.",
  },
];

function Logo({ inverse = false }) {
  return (
    <a href="#top" className="flex min-w-0 items-center gap-3">
      <span className="grid h-14 w-14 shrink-0 overflow-hidden rounded-xl bg-charcoal shadow-card ring-1 ring-charcoal/10 sm:h-16 sm:w-16">
        <img
          src="/assets/solid-finish-logo.webp"
          alt="Solid Finish Solutions logo"
          className="h-full w-full object-cover"
        />
      </span>
      <span className="hidden min-w-0 min-[430px]:block">
        <span className={`block text-lg font-black leading-tight sm:text-2xl ${inverse ? "text-white" : "text-charcoal"}`}>
          Solid Finish Solutions
        </span>
        <span className={`block text-xs font-bold sm:text-sm ${inverse ? "text-white/55" : "text-charcoal/55"}`}>
          Property maintenance & management
        </span>
      </span>
    </a>
  );
}

function ButtonLink({ href, children, variant = "primary" }) {
  const styles =
    variant === "primary"
      ? "bg-charcoal text-white hover:bg-black"
      : "border border-charcoal/15 bg-white text-charcoal hover:border-charcoal hover:bg-cream";

  return (
    <a
      href={href}
      className={`${styles} inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-black transition`}
    >
      {children}
    </a>
  );
}

function SectionHeader({ kicker, title, text, center = false, inverse = false }) {
  return (
    <div className={`mb-8 max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      <p className="mb-3 text-sm font-black text-gold">{kicker}</p>
      <h2 className={`text-3xl font-black leading-tight sm:text-5xl ${inverse ? "text-white" : "text-charcoal"}`}>
        {title}
      </h2>
      {text && (
        <p className={`mt-4 text-base leading-7 sm:text-lg ${inverse ? "text-white/68" : "text-muted"}`}>
          {text}
        </p>
      )}
    </div>
  );
}

function App() {
  useEffect(() => {
    const sendEvent = (eventName, parameters) => {
      if (typeof window.gtag === "function") {
        window.gtag("event", eventName, parameters);
      }
    };

    const trackContactClick = (event) => {
      const link = event.target.closest("a");
      if (!link) return;

      const href = link.getAttribute("href") || "";
      let contactMethod = "";
      if (href.startsWith("tel:")) contactMethod = "phone";
      if (href.startsWith("mailto:")) contactMethod = "email";
      if (href.includes("wa.me/")) contactMethod = "whatsapp";

      if (contactMethod) {
        sendEvent("generate_lead", {
          method: contactMethod,
          page_path: window.location.pathname,
        });
      }
    };

    const trackFormSubmit = (event) => {
      if (event.target.matches('form[name="quote"]')) {
        sendEvent("generate_lead", {
          method: "quote_form",
          page_path: window.location.pathname,
        });
      }
    };

    document.addEventListener("click", trackContactClick);
    document.addEventListener("submit", trackFormSubmit);
    return () => {
      document.removeEventListener("click", trackContactClick);
      document.removeEventListener("submit", trackFormSubmit);
    };
  }, []);

  if (window.location.pathname.replace(/\/+$/, "") === "/interior-painting-enfield") {
    return <EnfieldServicePage type="interior" />;
  }

  if (window.location.pathname.replace(/\/+$/, "") === "/exterior-painting-enfield") {
    return <EnfieldServicePage type="exterior" />;
  }

  if (window.location.pathname.replace(/\/+$/, "") === "/painter-decorator-enfield") {
    return <EnfieldPaintersPage />;
  }

  if (window.location.pathname.replace(/\/+$/, "") === "/commercial-painters-london") {
    return <CommercialPaintersPage />;
  }

  return (
    <main id="top" className="ambient-canvas min-h-screen bg-cream pb-20 text-charcoal md:pb-0">
      <Header />
      <Hero />
      <TrustBand />
      <Introduction />
      <Projects />
      <Services />
      <ServiceArea />
      <Audiences />
      <WhyUs />
      <Process />
      <Reviews />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
      <MobileActionBar />
      <CookieConsent />
    </main>
  );
}

const enfieldServiceContent = {
  interior: {
    kicker: "Interior decorators in Enfield",
    title: "Interior Painting Enfield",
    intro: "Professional interior painting and decorating for houses, flats and rental properties across Enfield. We prepare every surface carefully, protect floors and furniture, and deliver crisp, durable finishes for walls, ceilings and woodwork.",
    image: "/assets/project-green-bedroom-room.webp",
    imageAlt: "Finished green and neutral bedroom after interior painting in Enfield",
    sectionTitle: "Careful interior decorating from preparation to final clean",
    sectionText: "A lasting interior finish depends on what happens before the topcoat. We inspect the existing surface, fill cracks and dents, sand where needed, seal repairs and select a paint system suited to the room. Work areas are protected before decorating begins and cleaned before handover.",
    services: [
      ["Walls and ceilings", "Smooth, even coverage for living rooms, bedrooms, hallways, kitchens and home offices."],
      ["Doors and woodwork", "Preparation and durable finishes for doors, frames, skirting, architraves and fitted joinery."],
      ["Rental redecorations", "Practical whole-property or room-by-room refreshes for landlords, agents and tenants."],
      ["Repairs before painting", "Cracks, damaged plaster, old fixings and local surface defects resolved before finishing."],
      ["Colour and finish advice", "Help choosing practical colours, sheen levels and products for light, traffic and cleaning needs."],
      ["Feature walls and details", "Accurate cutting-in, strong colour changes, panelling and coordinated decorative details."],
    ],
    evidenceTitle: "A real Enfield-area interior finish",
    evidenceText: "This genuine bedroom project combined soft neutral walls with deep green fitted cabinetry, shelving, panelling and woodwork. The result depends on consistent preparation, accurate edges and a coordinated finish across different surfaces.",
    faq: [
      ["Do you move furniture before painting?", "We agree what must be moved before work starts. Remaining furniture and floors are protected carefully, with access planned around the room and project scope."],
      ["How many coats will the room need?", "That depends on the existing colour, surface condition and selected product. The written quotation explains the preparation and coating approach for your project."],
      ["Can you repair walls before decorating?", "Yes. We handle common cracks, dents, failed filler and local plaster damage before painting. Larger defects are assessed during the quotation."],
      ["Do you supply paint and materials?", "Yes. We can recommend and supply suitable preparation materials, primers and finishes, or work with an agreed customer specification."],
    ],
  },
  exterior: {
    kicker: "Exterior decorators in Enfield",
    title: "Exterior Painting Enfield",
    intro: "Exterior house painting and decorating across Enfield for masonry, render, doors, windows and exterior details. Solid Finish Solutions focuses on sound preparation and weather-resistant systems that protect the property as well as improve its appearance.",
    image: "/assets/project-after-exterior.webp",
    imageAlt: "Completed exterior house painting project in Enfield",
    sectionTitle: "Exterior preparation designed for a durable finish",
    sectionText: "External surfaces face moisture, temperature changes and pollution, so preparation and product compatibility matter. We assess failing paint, cracks, porous areas, access and exposure before recommending a suitable repair, primer and coating system.",
    services: [
      ["Masonry and render", "Cleaning, preparation, repairs and suitable exterior coatings for rendered and masonry elevations."],
      ["Doors and frames", "Careful preparation and durable finishes for external doors, frames and entrance details."],
      ["Exterior woodwork", "Preparation and protective coating systems for appropriate timber windows, fascias and details."],
      ["Cracks and local repairs", "Loose material, minor cracks and damaged areas addressed before the decorative system is applied."],
      ["Colour changes", "Planned coverage and neat edges for refreshed elevations, contrasting plinths and architectural details."],
      ["Landlord and managed property work", "Clear scopes and tidy exterior refreshes for rental and maintained properties."],
    ],
    evidenceTitle: "Real exterior work, shown clearly",
    evidenceText: "Our project gallery includes genuine before-and-after exterior work: refreshed render, sharper contrasting details and renewed weather protection. We document the condition and agree the preparation before the finish is applied.",
    faq: [
      ["What time of year is best for exterior painting?", "Exterior decorating needs suitable weather and surface conditions. Timing is planned around the product specification, temperature, rain and the exposure of the elevation."],
      ["Do you repair cracks before painting?", "Yes, where the cracks and substrate are suitable for local repair. Significant movement, damp or structural defects may need specialist investigation first."],
      ["How long does exterior paint last?", "Service life depends on the substrate, exposure, preparation, product system and ongoing building condition. A clear specification is more reliable than a blanket lifespan promise."],
      ["Can you paint only the front of a house?", "Yes. We quote single elevations, selected exterior details and larger external redecorations depending on access and condition."],
    ],
  },
};

function EnfieldServicePage({ type }) {
  const content = enfieldServiceContent[type];
  const otherPage = type === "interior"
    ? ["/exterior-painting-enfield/", "Exterior painting in Enfield"]
    : ["/interior-painting-enfield/", "Interior painting in Enfield"];

  return (
    <main id="top" className="ambient-canvas min-h-screen bg-cream pb-20 text-charcoal md:pb-0">
      <Header />
      <section className="overflow-hidden bg-charcoal px-5 py-16 text-white sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-amber">{content.kicker}</p>
            <h1 className="mt-5 max-w-4xl text-5xl font-black leading-[0.95] sm:text-6xl lg:text-7xl">{content.title}</h1>
            <p className="mt-6 max-w-2xl text-lg font-semibold leading-8 text-white/72 sm:text-xl">{content.intro}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={whatsappHref}><MessageCircle size={18} />Request a Free Quote</ButtonLink>
              <a href={phoneHref} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-black text-white"><Phone size={18} />Call {phoneDisplay}</a>
            </div>
          </div>
          <img src={content.image} alt={content.imageAlt} className="h-[32rem] w-full rounded-[2rem] object-cover shadow-soft ring-1 ring-white/10" />
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeader kicker="What the service includes" title={content.sectionTitle} text={content.sectionText} />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {content.services.map(([title, text]) => <article key={title} className="rounded-3xl bg-white p-6 shadow-card"><PaintRoller className="text-gold" /><h2 className="mt-5 text-xl font-black">{title}</h2><p className="mt-3 text-sm font-semibold leading-6 text-muted">{text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <img src={content.image} alt={content.imageAlt} className="h-[28rem] w-full rounded-[2rem] object-cover shadow-card" loading="lazy" />
          <div>
            <SectionHeader kicker="Project evidence" title={content.evidenceTitle} text={content.evidenceText} />
            <div className="flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/#projects" variant="secondary">View recent projects</ButtonLink>
              <ButtonLink href="/painter-decorator-enfield/" variant="secondary">Enfield decorating overview</ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          <div>
            <SectionHeader kicker="Local service" title="Based in Enfield and serving nearby North London" text="We welcome suitable enquiries from Enfield Town, Ponders End, Bush Hill Park, Palmers Green, Southgate, Winchmore Hill, Edmonton and surrounding areas." />
            <a href={otherPage[0]} className="inline-flex items-center gap-2 text-sm font-black underline">{otherPage[1]} <ArrowRight size={16} /></a>
          </div>
          <div className="grid gap-3">
            {content.faq.map(([question, answer]) => <details key={question} className="rounded-2xl bg-white p-5 shadow-card"><summary className="cursor-pointer font-black">{question}</summary><p className="mt-3 text-sm font-semibold leading-6 text-muted">{answer}</p></details>)}
          </div>
        </div>
      </section>

      <section className="bg-charcoal px-5 py-16 text-white sm:px-8 lg:px-10">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-amber">Free quotation</p>
          <h2 className="mt-4 text-4xl font-black sm:text-5xl">Tell us about your Enfield property</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg font-semibold leading-8 text-white/68">Send your postcode, photographs and a short description for a useful first response.</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <ButtonLink href={whatsappHref}><MessageCircle size={18} />Send Photos on WhatsApp</ButtonLink>
            <a href={phoneHref} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-black text-white"><Phone size={18} />Call {phoneDisplay}</a>
          </div>
        </div>
      </section>
      <Footer />
      <FloatingWhatsApp />
      <MobileActionBar />
      <CookieConsent />
    </main>
  );
}

function EnfieldPaintersPage() {
  const localServices = [
    ["Interior painting", "Walls, ceilings, doors, skirting and woodwork prepared and finished cleanly."],
    ["Exterior decorating", "Weather-resistant finishes for masonry, render, doors and exterior woodwork."],
    ["Rental property refreshes", "Reliable redecoration between tenancies for Enfield landlords and agents."],
    ["Repairs and preparation", "Cracks, damaged plaster and tired surfaces repaired before decoration begins."],
  ];

  const localAreas = ["Enfield Town", "Ponders End", "Bush Hill Park", "Palmers Green", "Southgate", "Winchmore Hill", "Edmonton", "Enfield Highway"];

  return (
    <main id="top" className="ambient-canvas min-h-screen bg-cream pb-20 text-charcoal md:pb-0">
      <Header />
      <section className="overflow-hidden bg-charcoal px-5 py-16 text-white sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-amber">Local painting and decorating</p>
            <h1 className="mt-5 max-w-4xl text-5xl font-black leading-[0.95] sm:text-6xl lg:text-7xl">Painter &amp; Decorator Enfield</h1>
            <p className="mt-6 max-w-2xl text-lg font-semibold leading-8 text-white/72 sm:text-xl">
              Professional painting and decorating for homes, rental properties and businesses across Enfield. Based locally in North London, Solid Finish Solutions delivers careful preparation, tidy working and a finish built to last.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={whatsappHref}><MessageCircle size={18} />Get a Free Quote</ButtonLink>
              <a href={phoneHref} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-black text-white"><Phone size={18} />Call {phoneDisplay}</a>
            </div>
          </div>
          <img src="/assets/project-green-bedroom-room.webp" alt="Finished bedroom painting and decorating project near Enfield" className="h-[32rem] w-full rounded-[2rem] object-cover shadow-soft ring-1 ring-white/10" />
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeader kicker="Services in Enfield" title="A dependable local decorator for every stage of your project" text="From a single-room refresh to a full property redecoration, we protect the space, prepare surfaces properly and keep you updated from quote to handover." />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {localServices.map(([title, text]) => <article key={title} className="rounded-3xl bg-white p-6 shadow-card"><PaintRoller className="text-gold" /><h2 className="mt-5 text-xl font-black">{title}</h2><p className="mt-3 text-sm font-semibold leading-6 text-muted">{text}</p></article>)}
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <a href="/interior-painting-enfield/" className="rounded-3xl bg-charcoal p-6 text-white shadow-card"><p className="text-sm font-black text-amber">Detailed local service</p><h2 className="mt-3 text-2xl font-black">Interior painting in Enfield</h2><p className="mt-3 text-sm font-semibold leading-6 text-white/68">Preparation, walls, ceilings, woodwork and rental redecorations.</p></a>
            <a href="/exterior-painting-enfield/" className="rounded-3xl bg-charcoal p-6 text-white shadow-card"><p className="text-sm font-black text-amber">Detailed local service</p><h2 className="mt-3 text-2xl font-black">Exterior painting in Enfield</h2><p className="mt-3 text-sm font-semibold leading-6 text-white/68">Masonry, render, doors, repairs and weather-resistant finishes.</p></a>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
          <img src="/assets/project-after-exterior.webp" alt="Completed exterior house painting by Solid Finish Solutions" className="h-[30rem] w-full rounded-[2rem] object-cover shadow-card" loading="lazy" />
          <div>
            <SectionHeader kicker="Local coverage" title="Serving Enfield and nearby North London areas" text="Our Enfield base makes it easy to arrange a site visit, discuss the finish you want and provide a clear quotation for suitable local projects." />
            <div className="flex flex-wrap gap-3">
              {localAreas.map((area) => <span key={area} className="rounded-full bg-cream px-4 py-2 text-sm font-black">{area}</span>)}
            </div>
            <a href="/#projects" className="mt-7 inline-flex items-center gap-2 text-sm font-black underline">See recent painting projects <ArrowRight size={16} /></a>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          <SectionHeader kicker="Enfield decorator FAQ" title="Useful answers before you request a quote" />
          <div className="grid gap-3">
            {[
              ["Do you provide free painting quotes in Enfield?", "Yes. Send photographs on WhatsApp for a useful first response, or arrange a visit when the project needs a closer look."],
              ["Do you work with landlords and letting agents?", "Yes. We handle rental refreshes, end-of-tenancy redecoration, repairs and practical make-good work."],
              ["Can you supply the paint?", "Yes. We can recommend and supply an appropriate system, sheen and colour for the room, surface and level of use."],
              ["How soon can you start?", "Availability depends on the scope. Contact us with your location, photos and preferred dates for the quickest answer."],
            ].map(([q, a]) => <details key={q} className="rounded-2xl bg-white p-5 shadow-card"><summary className="cursor-pointer font-black">{q}</summary><p className="mt-3 text-sm font-semibold leading-6 text-muted">{a}</p></details>)}
          </div>
        </div>
      </section>

      <section className="bg-charcoal px-5 py-16 text-white sm:px-8 lg:px-10">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-amber">Free local quotation</p>
          <h2 className="mt-4 text-4xl font-black sm:text-5xl">Planning a decorating project in Enfield?</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg font-semibold leading-8 text-white/68">Send a few photos, your postcode and a short description for a fast first response.</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <ButtonLink href={whatsappHref}><MessageCircle size={18} />Send Photos on WhatsApp</ButtonLink>
            <a href={phoneHref} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-black text-white"><Phone size={18} />Call {phoneDisplay}</a>
          </div>
        </div>
      </section>
      <Footer />
      <FloatingWhatsApp />
      <MobileActionBar />
      <CookieConsent />
    </main>
  );
}

function CommercialPaintersPage() {
  return (
    <main id="top" className="ambient-canvas min-h-screen bg-cream pb-20 text-charcoal md:pb-0">
      <Header />
      <section className="overflow-hidden bg-charcoal px-5 py-16 text-white sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-amber">Commercial decorating contractors</p>
            <h1 className="mt-5 max-w-4xl text-5xl font-black leading-[0.95] sm:text-6xl lg:text-7xl">
              Commercial Painters London
            </h1>
            <p className="mt-6 max-w-2xl text-lg font-semibold leading-8 text-white/72 sm:text-xl">
              Professional office and commercial painting across London, planned around access, protection, programme and a clean handover. Solid Finish Solutions works with businesses, landlords and property managers on occupied and vacant properties, backed by £5m public liability insurance and clear written quotations.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="#commercial-quote">Request a Commercial Quote <ArrowRight size={18} /></ButtonLink>
              <a href={phoneHref} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-black text-white"><Phone size={18} />Call {phoneDisplay}</a>
            </div>
            <div className="mt-8 flex flex-wrap gap-3 text-sm font-black text-white/76">
              {['£5m public liability', 'London-wide coverage', 'Occupied or vacant sites', 'Clear written scope'].map((item) => <span key={item} className="rounded-full bg-white/8 px-4 py-2 ring-1 ring-white/10">{item}</span>)}
            </div>
          </div>
          <img src="/assets/project-interior-4107.webp" alt="Carefully protected interior painting project by Solid Finish Solutions" className="h-[32rem] w-full rounded-[2rem] object-cover shadow-soft ring-1 ring-white/10" />
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-5xl">
          <SectionHeader kicker="Commercial painting services" title="A practical decorating partner for London properties" text="Commercial decorating needs more than a good finish. We agree the scope in writing, protect the site, coordinate access, communicate progress and leave each area ready for use. Work can be phased to reduce disruption, with timing agreed around the building and its occupants." />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ['Office painting', 'Walls, ceilings, woodwork, meeting rooms, receptions and shared areas.'],
              ['Landlord make-good', 'End-of-lease redecoration and practical refreshes between occupiers.'],
              ['Managed properties', 'Planned decoration for communal areas, rentals and maintained portfolios.'],
              ['Retail and hospitality', 'Carefully programmed decoration for customer-facing environments.'],
              ['Exterior commercial work', 'Masonry, render, doors and external details prepared for lasting protection.'],
              ['Repairs before painting', 'Cracks, damaged surfaces and local plaster repairs resolved before finishing.'],
            ].map(([title, text]) => <article key={title} className="rounded-3xl bg-white p-6 shadow-card"><BriefcaseBusiness className="text-gold" /><h3 className="mt-5 text-xl font-black">{title}</h3><p className="mt-3 text-sm font-semibold leading-6 text-muted">{text}</p></article>)}
          </div>
        </div>
      </section>

      <section id="commercial-projects" className="bg-white px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeader kicker="Project evidence" title="Preparation and finish, shown clearly" text="These genuine London projects demonstrate the preparation, repairs, protection and finish standards relevant to commercial work. General locations and product brands are only published when confirmed in the project record." />
          <div className="grid gap-6 lg:grid-cols-2">
            {commercialCaseStudies.map((project) => <CommercialCaseStudy key={project.title} project={project} />)}
          </div>
          <p className="mt-6 rounded-2xl bg-cream p-5 text-sm font-semibold leading-6 text-muted">Have a comparable project? <a href="#commercial-quote" className="font-black text-charcoal underline">Request a commercial quotation</a> with photographs, access details and your preferred programme.</p>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeader kicker="Planning and delivery" title="Built around your building, programme and people" />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              ['01', 'Survey and scope', 'We review surfaces, access, repairs, occupied areas and finish requirements.'],
              ['02', 'Written quotation', 'You receive a clear scope, preparation approach, programme and price.'],
              ['03', 'Protected delivery', 'Work areas are protected and progress is coordinated with your contact.'],
              ['04', 'Snag and handover', 'We inspect the finish, resolve agreed snags, clean down and hand over.'],
            ].map(([n,title,text]) => <article key={title} className="rounded-3xl bg-charcoal p-6 text-white"><p className="text-3xl font-black text-amber">{n}</p><h3 className="mt-6 text-xl font-black">{title}</h3><p className="mt-3 text-sm font-semibold leading-6 text-white/68">{text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="bg-charcoal px-5 py-16 text-white sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          <SectionHeader kicker="Commercial FAQ" title="What clients usually need to know" inverse />
          <div className="grid gap-3">
            {[
              ['Can you work in occupied offices?', 'Yes. Phasing, protection and access are agreed before work begins so disruption can be managed.'],
              ['Do you cover all of London?', 'We are based in Enfield, North London, and accept suitable commercial enquiries across London and surrounding areas.'],
              ['Can you work outside normal hours?', 'Out-of-hours or phased working can be discussed where the site, programme and access arrangements allow it.'],
              ['Do you specify paint products?', 'Yes. Product and finish recommendations are matched to the substrate, use of the area, cleaning needs and required durability.'],
            ].map(([q,a]) => <details key={q} className="rounded-2xl bg-white/8 p-5 ring-1 ring-white/10"><summary className="cursor-pointer font-black">{q}</summary><p className="mt-3 text-sm font-semibold leading-6 text-white/68">{a}</p></details>)}
          </div>
        </div>
      </section>

      <section id="commercial-quote" className="px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-5xl rounded-[2rem] bg-white p-6 shadow-soft sm:p-10">
          <SectionHeader kicker="Request a quotation" title="Tell us about your commercial project" text="Share the property type, location, areas to decorate, access requirements and preferred dates. Photographs or a short video help us give you a useful first response." />
          <div className="flex flex-col gap-3 sm:flex-row"><ButtonLink href={whatsappHref}><MessageCircle size={18} />Send Project Details</ButtonLink><ButtonLink href={phoneHref} variant="secondary"><Phone size={18} />Call {phoneDisplay}</ButtonLink><ButtonLink href="/#projects" variant="secondary">View all projects</ButtonLink></div>
        </div>
      </section>
      <Footer />
      <FloatingWhatsApp />
      <MobileActionBar />
      <CookieConsent />
    </main>
  );
}

function CommercialCaseStudy({ project }) {
  return (
    <article className="overflow-hidden rounded-3xl bg-cream shadow-card">
      {project.beforeMedia ? (
        <div className="grid h-[22rem] grid-cols-2 gap-1 bg-charcoal p-1">
          <div className="relative overflow-hidden"><CaseStudyMedia media={project.beforeMedia} /><span className="absolute left-3 top-3 rounded-full bg-white px-3 py-2 text-xs font-black uppercase">Before</span></div>
          <div className="relative overflow-hidden"><CaseStudyMedia media={project.afterMedia} /><span className="absolute right-3 top-3 rounded-full bg-amber px-3 py-2 text-xs font-black uppercase">After</span></div>
        </div>
      ) : project.imageMedia ? (
        <div className="h-[22rem] bg-[#e8e4da]"><img src={project.imageMedia.src} alt={project.imageMedia.alt} className="h-full w-full object-contain" /></div>
      ) : (
        <div className="grid h-[22rem] place-items-center bg-[#e8e4da] px-6 text-center text-sm font-black text-muted">Project photography being prepared</div>
      )}
      <div className="p-6">
        <h3 className="text-2xl font-black">{project.title}</h3>
        <p className="mt-2 text-sm font-black text-gold">{project.location}</p>
        <dl className="mt-5 grid gap-4 text-sm leading-6"><div><dt className="font-black">Scope of work</dt><dd className="mt-1 font-semibold text-muted">{project.scope}</dd></div><div><dt className="font-black">Product system</dt><dd className="mt-1 font-semibold text-muted">{project.products}</dd></div><div><dt className="font-black">Customer outcome</dt><dd className="mt-1 font-semibold text-muted">{project.outcome}</dd></div></dl>
        <a href="/commercial-painters-london/#commercial-quote" className="mt-5 inline-flex items-center gap-2 text-sm font-black underline">Discuss a similar commercial project <ArrowRight size={16} /></a>
      </div>
    </article>
  );
}

function CaseStudyMedia({ media }) {
  if (media.type === "video") {
    return <video className="h-full w-full object-cover" muted playsInline preload="metadata"><source src={`${media.src}#t=0.1`} type="video/quicktime" /><track kind="captions" src="/captions-silent.vtt" srcLang="en" label="English" default /></video>;
  }
  return <img src={media.src} alt={media.alt || "Project before painting and decorating"} className="h-full w-full object-cover" loading="lazy" />;
}

function CookieConsent() {
  const [choice, setChoice] = useState(() => localStorage.getItem("sfs-analytics-consent"));

  useEffect(() => {
    if (choice === "accepted" && typeof window.enableAnalytics === "function") {
      window.enableAnalytics();
    }
  }, [choice]);

  const choose = (nextChoice) => {
    localStorage.setItem("sfs-analytics-consent", nextChoice);
    setChoice(nextChoice);
  };

  if (choice) return null;

  return (
    <aside
      className="fixed inset-x-4 bottom-20 z-50 mx-auto max-w-3xl rounded-3xl border border-charcoal/10 bg-white p-5 shadow-soft md:bottom-5"
      aria-label="Cookie preferences"
    >
      <p className="font-black">Help us improve this website</p>
      <p className="mt-2 text-sm font-semibold leading-6 text-muted">
        With your permission, Google Analytics measures visits and enquiry-button use. We do not load analytics until you accept. Read our{" "}
        <a href="/privacy/" className="font-black text-charcoal underline">privacy and cookie notice</a>.
      </p>
      <div className="mt-4 flex flex-col gap-2 sm:flex-row">
        <button type="button" onClick={() => choose("accepted")} className="rounded-full bg-charcoal px-5 py-3 text-sm font-black text-white">
          Accept analytics
        </button>
        <button type="button" onClick={() => choose("declined")} className="rounded-full border border-charcoal/15 px-5 py-3 text-sm font-black text-charcoal">
          Decline
        </button>
      </div>
    </aside>
  );
}

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-charcoal/10 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-4 sm:px-8 lg:px-10">
        <Logo />
        <nav className="hidden items-center gap-7 text-sm font-black text-charcoal/70 lg:flex">
          {navItems.map(([label, href]) => (
            <a key={label} href={href} className="hover:text-charcoal">
              {label}
            </a>
          ))}
          <a
            href={whatsappHref}
            className="rounded-full bg-amber px-5 py-3 text-charcoal shadow-card hover:bg-gold"
          >
            Get a free quote
          </a>
        </nav>
        <button
          type="button"
          className="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-full bg-charcoal px-4 text-sm font-black text-white shadow-card lg:hidden"
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMobileMenuOpen((open) => !open)}
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          <span>{mobileMenuOpen ? "Close" : "Menu"}</span>
        </button>
      </div>
      <nav
        id="mobile-navigation"
        className={`${mobileMenuOpen ? "grid" : "hidden"} border-t border-charcoal/10 bg-white px-5 pb-5 pt-3 shadow-soft lg:hidden`}
        aria-label="Mobile navigation"
      >
        <div className="mx-auto grid w-full max-w-7xl gap-1">
          <p className="px-4 pb-2 text-xs font-black uppercase tracking-[0.12em] text-charcoal/45">
            Services, projects & contact
          </p>
          {navItems.map(([label, href]) => (
            <a
              key={label}
              href={href}
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-2xl px-4 py-3 text-base font-black text-charcoal/75 transition hover:bg-cream hover:text-charcoal"
            >
              {label}
            </a>
          ))}
          <a
            href={whatsappHref}
            onClick={() => setMobileMenuOpen(false)}
            className="mt-2 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-amber px-5 py-3 text-sm font-black text-charcoal shadow-card"
          >
            <MessageCircle size={18} />
            Get a free quote
          </a>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="overflow-hidden px-5 pb-14 pt-8 sm:px-8 lg:px-10 lg:pb-20 lg:pt-14">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
        <div>
          <div className="mb-7 inline-flex rounded-[1.75rem] bg-charcoal p-2 shadow-soft ring-1 ring-charcoal/10">
            <img
              src="/assets/solid-finish-logo.webp"
              alt="Solid Finish Solutions full company logo"
              className="h-32 w-32 rounded-[1.2rem] object-cover sm:h-40 sm:w-40"
            />
          </div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-charcoal/10 bg-white px-4 py-2 text-sm font-extrabold shadow-card">
            <MapPin size={16} className="text-gold" />
            Serving London / Based in North London
          </div>
          <p className="mb-4 text-sm font-black uppercase tracking-[0.16em] text-gold">
            £5m insured / Written quotations / London coverage
          </p>
          <h1 className="max-w-4xl text-5xl font-black leading-[0.95] sm:text-6xl lg:text-7xl xl:text-8xl">
            Professional painting and decorating for London homes and commercial property
          </h1>
          <p className="mt-6 max-w-2xl text-lg font-semibold leading-8 text-muted sm:text-xl">
            Solid Finish Solutions provides high-quality residential and commercial painting and decorating across
            London and surrounding areas. We support homeowners, landlords, property managers and businesses with careful preparation,
            clean workmanship, tidy handovers and durable finishes for homes, offices and managed properties.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={whatsappHref}>
              <MessageCircle size={18} />
              Request a Quote
            </ButtonLink>
            <ButtonLink href="/commercial-painters-london/" variant="secondary">
              <BriefcaseBusiness size={18} />
              Commercial Projects
            </ButtonLink>
            <ButtonLink href={phoneHref} variant="secondary">
              <Phone size={18} />
              Call {phoneDisplay}
            </ButtonLink>
          </div>
          <div className="mt-8 rounded-3xl bg-white px-5 py-4 text-sm font-black shadow-card">
            Offices <span className="text-gold">•</span> Managed properties <span className="text-gold">•</span> Landlords <span className="text-gold">•</span> Higher-value homes
          </div>
        </div>

        <div className="relative">
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-amber/25 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] bg-charcoal p-3 shadow-soft">
            <div className="relative h-[30rem] overflow-hidden rounded-[1.45rem] bg-[#151917] sm:h-[36rem] lg:h-[40rem]">
              <img
                src="/assets/project-after-exterior.webp"
                alt="Completed exterior painting project by Solid Finish Solutions"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-charcoal via-charcoal/64 to-transparent p-5 pt-24 text-white">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-amber">
                  Recent exterior finish
                </p>
                <h2 className="mt-2 max-w-sm text-2xl font-black leading-tight">
                  Real project work, not stock imagery.
                </h2>
              </div>
            </div>
          </div>
          <div className="relative -mt-8 mx-4 grid gap-3 rounded-3xl bg-white p-4 shadow-soft sm:grid-cols-3">
            {heroMetrics.map(([value, label]) => (
              <div key={label} className="rounded-2xl bg-cream p-4 text-center">
                <p className="text-3xl font-black text-charcoal">{value}</p>
                <p className="mt-1 text-xs font-black uppercase tracking-wide text-muted">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Introduction() {
  return (
    <section className="px-5 py-16 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-5xl rounded-[2rem] bg-white p-6 shadow-card sm:p-10">
        <SectionHeader
          kicker="Solid Finish Solutions"
          title="Professional Painting and Decorating Across London"
          text="Solid Finish Solutions provides professional painting and decorating services for residential and commercial customers across London. From individual rooms and full-property redecorations to offices and managed buildings, every project receives careful preparation, tidy workmanship and close attention to detail. We work with homeowners, landlords, property managers and businesses to deliver attractive, durable finishes with clear communication throughout the project."
        />
      </div>
    </section>
  );
}

function TrustBand() {
  return (
    <section className="border-y border-charcoal/10 bg-charcoal px-5 py-5 text-white sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-3 text-center text-sm font-black">
        <span className="text-amber">£5m public liability insurance</span>
        <span>Homeowners</span>
        <span>Landlords & letting agents</span>
        <span>Offices & commercial</span>
        <span>Professional written quotations</span>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="bg-white px-5 py-16 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
          <SectionHeader
            kicker="Recent work"
            title="Real work, shown clearly"
            text="No generic gallery. Just live project media and a calm before/after comparison that lets the finish speak for itself."
          />
          <ButtonLink href={whatsappHref} variant="secondary">
            Start your project
            <ArrowRight size={18} />
          </ButtonLink>
        </div>
        <div className="grid items-start gap-5 sm:grid-cols-2">
          {projects.map((project, index) =>
            project.galleryMedia ? (
              <ProjectGalleryCard key={project.title} project={project} />
            ) : project.beforeMedia && project.afterMedia ? (
              <BeforeAfterSlider key={project.title} project={project} />
            ) : project.imageMedia ? (
              <ProjectImageCard key={project.title} project={project} />
            ) : null,
          )}
        </div>
        <div className="mt-5 grid gap-4 rounded-3xl bg-charcoal p-4 text-white shadow-soft lg:grid-cols-[1fr_auto] lg:items-center lg:p-5">
          <div className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl bg-white/8 p-4 ring-1 ring-white/10">
              <p className="text-2xl font-black text-amber">01</p>
              <p className="mt-1 text-sm font-bold text-white/72">Send photos or a short video</p>
            </div>
            <div className="rounded-2xl bg-white/8 p-4 ring-1 ring-white/10">
              <p className="text-2xl font-black text-amber">02</p>
              <p className="mt-1 text-sm font-bold text-white/72">Get a practical next step</p>
            </div>
            <div className="rounded-2xl bg-white/8 p-4 ring-1 ring-white/10">
              <p className="text-2xl font-black text-amber">03</p>
              <p className="mt-1 text-sm font-bold text-white/72">Book a visit if needed</p>
            </div>
          </div>
          <a
            href={whatsappHref}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-amber px-5 py-3 text-sm font-black text-charcoal"
          >
            Get a free quote
            <ArrowRight size={18} />
          </a>
        </div>
        <div className="mt-5 rounded-3xl border border-charcoal/10 bg-cream p-6">
          <h3 className="text-xl font-black">Planning an office or commercial redecoration?</h3>
          <p className="mt-2 max-w-3xl text-sm font-semibold leading-6 text-muted">See how we scope, protect and deliver painting projects for businesses, landlords and managed properties across London.</p>
          <a href="/commercial-painters-london/" className="mt-4 inline-flex items-center gap-2 text-sm font-black underline">Commercial painters London <ArrowRight size={16} /></a>
        </div>
      </div>
    </section>
  );
}

function ProjectGalleryCard({ project }) {
  return (
    <article className="overflow-hidden rounded-3xl bg-cream shadow-card sm:col-span-2 lg:grid lg:grid-cols-[1.45fr_1fr]">
      <div className="grid h-[20rem] grid-cols-[2fr_1fr] grid-rows-2 gap-px bg-[#e8e4da] sm:h-[24rem] lg:h-full lg:min-h-[25rem]">
        {project.galleryMedia.map((image, index) => (
          <img
            key={image.src}
            src={image.src}
            alt={image.alt}
            className={`h-full min-h-0 w-full bg-[#e8e4da] object-contain ${index === 0 ? "row-span-2" : ""}`}
            loading="lazy"
          />
        ))}
      </div>
      <div className="flex flex-col justify-center p-7 lg:p-9">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.14em] text-gold">Recent residential project</p>
          <h3 className="mt-3 text-3xl font-black leading-tight">{project.title}</h3>
          <p className="mt-4 max-w-xl text-sm font-semibold leading-6 text-muted">{project.text}</p>
        </div>
        <a href="/#services" className="mt-6 inline-flex items-center gap-2 self-start text-sm font-black underline">Interior painting services <ArrowRight size={16} /></a>
      </div>
    </article>
  );
}

function ProjectImageCard({ project }) {
  return (
    <article className="overflow-hidden rounded-3xl bg-cream shadow-card">
      <div className="relative h-[17rem] overflow-hidden bg-[#e8e4da] sm:h-[20rem] xl:h-[18rem]">
        <img
          src={project.imageMedia.src}
          alt={project.imageMedia.alt}
          className="h-full w-full object-contain"
          loading="lazy"
        />
        <div className="pointer-events-none absolute left-3 top-3 rounded-full bg-white px-4 py-2 text-xs font-black uppercase tracking-wide text-charcoal shadow-card ring-1 ring-charcoal/10">
          Interior finish
        </div>
      </div>
      <div className="grid gap-3 p-5 sm:grid-cols-[1fr_auto] sm:items-end">
        <div>
          <h3 className="text-xl font-black">{project.title}</h3>
          <p className="mt-2 text-sm font-semibold leading-6 text-muted">{project.text}</p>
        </div>
        <span className="rounded-full bg-white px-3 py-2 text-xs font-black uppercase tracking-wide text-muted">
          Real project
        </span>
      </div>
    </article>
  );
}

function BeforeAfterSlider({ project }) {
  return (
    <article className="overflow-hidden rounded-3xl bg-cream shadow-card">
      <div className="grid h-[18rem] grid-cols-2 gap-px bg-white sm:h-[20rem]">
        <div className="relative overflow-hidden bg-[#e8e4da]">
          <ProjectMedia media={project.beforeMedia} />
          <div className="absolute left-3 top-3 z-20 rounded-full bg-white/95 px-3 py-2 text-[0.68rem] font-black uppercase tracking-wide text-charcoal shadow-card ring-1 ring-charcoal/10">
            Before
          </div>
        </div>
        <div className="relative overflow-hidden bg-[#e8e4da]">
          <ProjectMedia media={project.afterMedia} />
          <div className="absolute right-3 top-3 z-20 rounded-full bg-charcoal/95 px-3 py-2 text-[0.68rem] font-black uppercase tracking-wide text-white shadow-card ring-1 ring-white/15">
            After
          </div>
        </div>
      </div>
      <div className="grid gap-3 p-5 sm:grid-cols-[1fr_auto] sm:items-end">
        <div>
          <h3 className="text-xl font-black">{project.title}</h3>
          <p className="mt-2 text-sm font-semibold leading-6 text-muted">{project.text}</p>
        </div>
        <span className="rounded-full bg-white px-3 py-2 text-xs font-black uppercase tracking-wide text-muted">
          Before / after
        </span>
      </div>
    </article>
  );
}

function ProjectMedia({ media }) {
  if (media.type === "video") {
    return (
      <video
        className="absolute inset-0 h-full w-full object-contain"
        muted
        playsInline
        preload="metadata"
      >
        <source src={`${media.src}#t=0.1`} type="video/mp4" />
        <source src={`${media.src}#t=0.1`} type="video/quicktime" />
        <track kind="captions" src="/captions-silent.vtt" srcLang="en" label="English" default />
      </video>
    );
  }

  return (
    <img
      src={media.src}
      alt={media.alt}
      className="absolute inset-0 h-full w-full object-contain"
      loading="lazy"
    />
  );
}

function Services() {
  return (
    <section id="services" className="px-5 py-16 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          kicker="What we do"
          title="Painting, decorating and maintenance under one roof"
          text="From a single room to a full property refresh, the work is planned around preparation, protection and a clean handover."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, text }) => (
            <article key={title} className="rounded-3xl border border-charcoal/10 bg-white p-5 shadow-card transition hover:-translate-y-1 hover:shadow-soft">
              <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-amber">
                <Icon size={21} />
              </div>
              <h3 className="text-xl font-black">{title}</h3>
              <p className="mt-3 text-sm font-semibold leading-6 text-muted">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceArea() {
  return (
    <section className="bg-charcoal px-5 py-16 text-white sm:px-8 lg:px-10">
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          kicker="Where we work"
          title="Painting and Decorating Services Across London"
          text="Based in Enfield, North London, Solid Finish Solutions carries out painting and decorating projects across London and surrounding areas. We welcome enquiries from homeowners, landlords, property managers, offices and commercial organisations throughout the capital."
          inverse
        />
      </div>
    </section>
  );
}

function Audiences() {
  return (
    <section className="bg-white px-5 py-16 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          kicker="Who we help"
          title="Commercial and Office Painting Across London"
          text="Professional painting and decorating for homes, rental properties, offices and managed commercial spaces, with one point of contact, clear communication and tidy working throughout."
        />
        <div className="grid gap-5 lg:grid-cols-3">
          {audiences.map((client) => (
            <article key={client.title} className="rounded-3xl bg-cream p-6 shadow-card">
              <h3 className="text-2xl font-black">{client.title}</h3>
              <p className="mt-4 font-semibold leading-7 text-muted">{client.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section id="why-us" className="px-5 py-16 sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <SectionHeader
          kicker="Why clients choose us"
          title="A better experience from quote to final clean"
          text="Good decorating is not just paint on walls. It is planning, protection, communication and a finish that lasts."
        />
        <div className="grid gap-3">
          {reasons.map((reason) => (
            <div key={reason} className="flex items-center gap-3 rounded-full bg-white p-3 pr-5 shadow-card">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-amber">
                <Check size={18} strokeWidth={3} />
              </span>
              <p className="text-sm font-black sm:text-base">{reason}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="bg-charcoal px-5 py-16 text-white sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          kicker="How it works"
          title="Simple, clear and properly managed"
          text="A straightforward process keeps the project moving and avoids surprises."
          center
          inverse
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {steps.map(([number, title, text]) => (
            <article key={title} className="rounded-3xl bg-white/8 p-6 ring-1 ring-white/10">
              <div className="mb-8 grid h-12 w-12 place-items-center rounded-full bg-amber text-lg font-black text-charcoal">
                {number}
              </div>
              <h3 className="text-xl font-black">{title}</h3>
              <p className="mt-3 text-sm font-semibold leading-6 text-white/68">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section className="bg-white px-5 py-16 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          kicker="Trust and delivery"
          title="Commercial standards without unnecessary noise"
          text="The important things are clear before work starts: insurance, scope, preparation, protection and who is responsible for communication."
        />
        <div className="grid gap-5 lg:grid-cols-3">
          {authoritySignals.map((signal) => (
            <article key={signal.title} className="rounded-3xl bg-cream p-6 shadow-card">
              <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-amber text-charcoal">
                <ShieldCheck size={22} />
              </div>
              <h3 className="text-2xl font-black leading-tight">{signal.title}</h3>
              <p className="mt-4 text-sm font-semibold leading-6 text-muted">{signal.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="px-5 py-16 sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-8 rounded-[2rem] bg-white p-5 shadow-card sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:p-10">
        <div>
          <SectionHeader
            kicker="Get started"
            title="Get a fast, free quote today"
            text="Tell us about your project and we will get straight back to you, often the same day on WhatsApp."
          />
          <div className="flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={whatsappHref}>
              <MessageCircle size={18} />
              Message on WhatsApp
            </ButtonLink>
            <ButtonLink href={phoneHref} variant="secondary">
              <Phone size={18} />
              Call {phoneDisplay}
            </ButtonLink>
          </div>
          <div className="mt-8 grid gap-4 text-sm font-black text-charcoal/75">
            <a href={phoneHref} className="flex items-center gap-3">
              <Phone size={18} className="text-gold" />
              Call or WhatsApp {phoneDisplay}
            </a>
            <a href={emailHref} className="flex items-center gap-3">
              <Mail size={18} className="text-gold" />
              Email solidfinishsolutions@gmail.com
            </a>
            <p className="flex items-center gap-3">
              <MapPin size={18} className="text-gold" />
              Based in Enfield, North London / Serving London and surrounding areas
            </p>
          </div>
        </div>

        <form
          name="quote"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          className="rounded-3xl border border-charcoal/10 bg-cream p-5 sm:p-7"
        >
          <input type="hidden" name="form-name" value="quote" />
          <p className="hidden">
            <label>
              Do not fill this out: <input name="bot-field" />
            </label>
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="label">Name</span>
              <input name="name" required className="field" />
            </label>
            <label className="block">
              <span className="label">Phone</span>
              <input name="phone" type="tel" required className="field" />
            </label>
            <label className="block sm:col-span-2">
              <span className="label">Email</span>
              <input name="email" type="email" className="field" />
            </label>
            <label className="block sm:col-span-2">
              <span className="label">Project details</span>
              <textarea name="message" rows="5" required className="field resize-none" />
            </label>
          </div>
          <button type="submit" className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-charcoal px-5 py-3 text-sm font-black text-white transition hover:bg-black sm:w-auto">
            Send enquiry
            <ArrowRight size={18} />
          </button>
          <p className="mt-4 text-xs font-semibold leading-5 text-muted">
            We use your details only to respond to your enquiry and manage any requested work. See our{" "}
            <a href="/privacy/" className="font-black text-charcoal underline">privacy notice</a>.
          </p>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-charcoal px-5 py-10 text-white sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <Logo inverse />
          <p className="mt-4 max-w-md text-sm font-semibold leading-6 text-white/62">
            Professional painting, decorating and property maintenance across London.
            Clean, reliable, on time, professional finish every time.
          </p>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-black text-amber">Services</h3>
          <div className="grid gap-2 text-sm font-semibold text-white/68">
            <a href="#services">Interior painting</a>
            <a href="#services">Exterior painting</a>
            <a href="#services">Plastering & repairs</a>
            <a href="#services">Property maintenance</a>
            <a href="#services">Commercial make-good</a>
            <a href="/commercial-painters-london/">Commercial painters London</a>
            <a href="/interior-painting-enfield/">Interior painting Enfield</a>
            <a href="/exterior-painting-enfield/">Exterior painting Enfield</a>
          </div>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-black text-amber">Get in touch</h3>
          <div className="grid gap-2 text-sm font-semibold text-white/68">
            <a href={phoneHref}>{phoneDisplay}</a>
            <a href={whatsappHref}>WhatsApp us</a>
            <a href={emailHref}>Email us</a>
            <a href="#projects">Recent projects</a>
            <a href="/privacy/">Privacy &amp; cookies</a>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-9 max-w-7xl border-t border-white/10 pt-6 text-xs font-semibold text-white/48">
        Copyright Solid Finish Solutions. All rights reserved. Painters, decorators & property maintenance / London
      </div>
    </footer>
  );
}

function FloatingWhatsApp() {
  return (
    <a
      href={whatsappHref}
      aria-label="Contact Solid Finish Solutions on WhatsApp"
      className="fixed bottom-5 right-5 z-50 hidden h-14 w-14 place-items-center rounded-full bg-[#25d366] text-white shadow-soft transition hover:scale-105 md:grid"
    >
      <MessageCircle size={25} strokeWidth={2.6} />
    </a>
  );
}

function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-charcoal/10 bg-white/95 p-3 shadow-soft backdrop-blur md:hidden">
      <div className="grid grid-cols-2 gap-3">
        <a
          href={phoneHref}
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-charcoal/15 bg-white text-sm font-black text-charcoal"
        >
          <Phone size={18} />
          Call
        </a>
        <a
          href={whatsappHref}
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-charcoal text-sm font-black text-white"
        >
          <MessageCircle size={18} />
          WhatsApp
        </a>
      </div>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
