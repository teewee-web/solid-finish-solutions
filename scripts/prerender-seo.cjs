const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const dist = path.join(root, "dist");

const shellLinks = `
  <nav aria-label="Primary">
    <a href="/">Home</a>
    <a href="/commercial-painters-london/">Commercial painters London</a>
    <a href="/#service-area">London coverage</a>
    <a href="/#projects">Recent projects</a>
    <a href="/#contact">Contact</a>
  </nav>
`;

const pages = [
  {
    file: "index.html",
    body: `
      <main id="top">
        <header>
          <p>Solid Finish Solutions</p>
          ${shellLinks}
        </header>
        <section>
          <p>Serving London and surrounding areas</p>
          <p>£5m public liability insurance / Written quotations / London coverage</p>
          <h1>Professional painting and decorating for London homes and commercial property</h1>
          <p>Solid Finish Solutions provides residential and commercial painting, decorating and property maintenance across London and surrounding areas. We work with homeowners, landlords, property managers, offices and commercial premises.</p>
          <p><a href="tel:+447739960753">Call 07739 960753</a> <a href="https://wa.me/447739960753">Message on WhatsApp</a> <a href="/commercial-painters-london/">Commercial painting enquiries</a></p>
        </section>
        <section id="services">
          <h2>Painting, Decorating and Property Maintenance Services</h2>
          <p>Interior painting, exterior painting, repairs before decorating, wallpapering, property maintenance and commercial make-good work.</p>
        </section>
        <section id="projects">
          <h2>Recent Project Work</h2>
          <p>Real project photography shows exterior repainting, interior feature walls, side elevation restoration and wall repair work.</p>
        </section>
        <section id="why-us">
          <h2>Why Choose Solid Finish Solutions</h2>
          <p>Careful preparation, protected work areas, tidy working, £5m public liability insurance and professional written quotations.</p>
        </section>
        <section id="contact">
          <h2>Request a Free Quote</h2>
          <p>Email <a href="mailto:solidfinishsolutions@gmail.com">solidfinishsolutions@gmail.com</a> or call <a href="tel:+447739960753">07739 960753</a>.</p>
        </section>
      </main>
    `,
  },
  {
    file: "commercial-painters-london/index.html",
    body: `
      <main id="top">
        <header><p>Solid Finish Solutions</p>${shellLinks}</header>
        <section>
          <p>Commercial decorating contractors</p>
          <h1>Commercial Painters London</h1>
          <p>Professional office and commercial painting across London, planned around access, protection, programme and a clean handover. Solid Finish Solutions works with businesses, landlords and property managers on occupied and vacant properties, backed by £5m public liability insurance and clear written quotations.</p>
          <p><a href="tel:+447739960753">Call 07739 960753</a> <a href="https://wa.me/447739960753">Request a commercial quotation</a></p>
        </section>
        <section>
          <h2>Commercial Painting Services</h2>
          <p>Office painting, landlord make-good, managed property decorating, communal areas, retail premises, exterior commercial work and repairs before painting.</p>
        </section>
        <section>
          <h2>Occupied Premises and Managed Properties</h2>
          <p>Work can be phased to reduce disruption, with protection, access and communication agreed before decorating starts.</p>
        </section>
        <section id="commercial-quote">
          <h2>Request a Commercial Quote</h2>
          <p>Share the property type, location, areas to decorate, access requirements and preferred dates.</p>
        </section>
      </main>
    `,
  },
  {
    file: "painter-decorator-enfield/index.html",
    body: `
      <main id="top">
        <header><p>Solid Finish Solutions</p>${shellLinks}</header>
        <section>
          <p>Local painting and decorating</p>
          <h1>Painter &amp; Decorator Enfield</h1>
          <p>Professional painting and decorating for homes, rental properties and businesses across Enfield. Based locally in North London, Solid Finish Solutions delivers careful preparation, tidy working and a finish built to last.</p>
          <p><a href="tel:+447739960753">Call 07739 960753</a> <a href="https://wa.me/447739960753">Get a free quote</a></p>
        </section>
        <section>
          <h2>Painting and Decorating Services in Enfield</h2>
          <p>Interior painting, exterior decorating, rental property refreshes, repairs and preparation for Enfield homes, landlords and businesses.</p>
        </section>
      </main>
    `,
  },
  {
    file: "interior-painting-enfield/index.html",
    body: `
      <main id="top">
        <header><p>Solid Finish Solutions</p>${shellLinks}</header>
        <section>
          <p>Interior decorators in Enfield</p>
          <h1>Interior Painting Enfield</h1>
          <p>Professional interior painting and decorating for houses, flats and rental properties across Enfield. We prepare surfaces carefully, protect floors and furniture, and deliver crisp, durable finishes for walls, ceilings and woodwork.</p>
          <p><a href="tel:+447739960753">Call 07739 960753</a> <a href="https://wa.me/447739960753">Request a free quote</a></p>
        </section>
        <section>
          <h2>Careful Interior Decorating</h2>
          <p>Walls, ceilings, doors, woodwork, rental redecorations, repairs before painting and feature-wall details.</p>
        </section>
      </main>
    `,
  },
  {
    file: "exterior-painting-enfield/index.html",
    body: `
      <main id="top">
        <header><p>Solid Finish Solutions</p>${shellLinks}</header>
        <section>
          <p>Exterior decorators in Enfield</p>
          <h1>Exterior Painting Enfield</h1>
          <p>Exterior house painting and decorating across Enfield for masonry, render, doors, windows and exterior details. Solid Finish Solutions focuses on sound preparation and weather-resistant systems.</p>
          <p><a href="tel:+447739960753">Call 07739 960753</a> <a href="https://wa.me/447739960753">Request a free quote</a></p>
        </section>
        <section>
          <h2>Exterior Preparation and Durable Finishes</h2>
          <p>Masonry and render painting, doors and frames, exterior woodwork, local repairs, colour changes and managed property exterior work.</p>
        </section>
      </main>
    `,
  },
];

function minify(html) {
  return html.replace(/\s+/g, " ").trim();
}

for (const page of pages) {
  const htmlPath = path.join(dist, page.file);
  if (!fs.existsSync(htmlPath)) {
    throw new Error(`Missing built HTML file: ${page.file}`);
  }
  const html = fs.readFileSync(htmlPath, "utf8");
  if (!html.includes('<div id="root"></div>')) {
    throw new Error(`Cannot find React root placeholder in: ${page.file}`);
  }
  const injected = html.replace(
    '<div id="root"></div>',
    `<div id="root">${minify(page.body)}</div>`,
  );
  fs.writeFileSync(htmlPath, injected);
  console.log(`Prerendered SEO body: ${page.file}`);
}
