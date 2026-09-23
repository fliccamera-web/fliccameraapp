"use client";

import { useMemo, useState } from "react";

function Arrow() {
  return <span className="arrow">↗</span>;
}

const pricingReviews = [
  ["“The best wedding favour we never planned.”", "Sophie & Max", "London, UK"],
  ["“Every photo felt like a tiny surprise.”", "Lena R.", "Austin, TX"],
  ["“Zero apps. Maximum memories.”", "Chris T.", "Toronto, CA"],
];

const footerGroups = [
  {
    title: "Product",
    items: ["Pricing", "Events", "Photobooks"],
  },
  {
    title: "Apps",
    items: ["Business Site", "iPhone App", "Android App", "Try the App Clip"],
  },
  {
    title: "Company",
    items: ["Careers", "Blog", "Engineering"],
  },
  {
    title: "Support & Legal",
    items: ["Email Us", "Privacy Policy", "Terms & Conditions"],
  },
];

const socialLinks = [
  {
    label: "Instagram",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3.5" y="3.5" width="17" height="17" rx="5" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="12" cy="12" r="4.2" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="17.1" cy="6.9" r="1.2" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M14.7 3.8c.9 1.4 2.1 2.3 3.8 2.6v2.8c-1.2-.1-2.4-.5-3.5-1.3v6.3a4.9 4.9 0 1 1-4.9-4.9c.3 0 .7 0 1 .1v2.9a2 2 0 1 0 1.2 1.9V3.8h2.4Z" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "X",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5 4.5 10.6 11l-5.7 8.5h2.9l4.4-6.3 4.3 6.3h4.9L13.4 12.8l5.9-8.3h-2.9l-4.1 5.8L8.9 4.5H5Z" fill="currentColor" />
      </svg>
    ),
  },
];

export default function PricingPage() {
  const [eventType, setEventType] = useState<"personal" | "business">("personal");
  const [guestCount, setGuestCount] = useState(10);

  const guestMarks = [10, 25, 50, 100, 175, 250, 251];
  const sliderPercent = useMemo(() => {
    const min = 10;
    const max = 251;
    return ((guestCount - min) / (max - min)) * 100;
  }, [guestCount]);

  const priceLabel = guestCount <= 10 ? "FREE" : eventType === "personal" ? "$39" : "$69";

  return (
    <main className="pricing-page">
      <div className="pricing-page-inner">
        <h2>PRICING CALCULATOR</h2>

        <div className="pricing-step">
          <h3>What type of event?</h3>

          <div className="event-selector" aria-label="Event type selector">
            <button
              type="button"
              className={`event-option ${eventType === "personal" ? "selected" : ""}`}
              onClick={() => setEventType("personal")}
              aria-pressed={eventType === "personal"}
            >
              <span className="type-copy">
                <strong>For Personal</strong>
                <small>Events with friends</small>
              </span>
              <span className="checkmark">✓</span>
            </button>

            <button
              type="button"
              className={`event-option ${eventType === "business" ? "selected" : ""}`}
              onClick={() => setEventType("business")}
              aria-pressed={eventType === "business"}
            >
              <span className="type-copy">
                <strong>For Business</strong>
                <small>Larger events &amp; custom branding options</small>
              </span>
              <span className="checkmark">✓</span>
            </button>
          </div>
        </div>

        <div className="pricing-step">
          <h3>How many guests?</h3>

          <div className="guest-slider-wrap" aria-label="Guest count slider">
            <input
              type="range"
              min={10}
              max={251}
              step={1}
              value={guestCount}
              onChange={(event) => setGuestCount(Number(event.target.value))}
              aria-label="Guest count"
              style={{
                background: `linear-gradient(to right, #7f6cff 0%, #7f6cff ${sliderPercent}%, rgba(255,255,255,0.18) ${sliderPercent}%, rgba(255,255,255,0.18) 100%)`,
              }}
            />

            <div className="guest-marks" aria-hidden="true">
              {guestMarks.map((mark) => (
                <span key={mark}>{mark === 251 ? "251+" : mark}</span>
              ))}
            </div>
          </div>

          <div className="pricing-footer">
            <span>{guestCount <= 10 ? "Up to 10 guests" : `Up to ${guestCount} guests`}</span>
            <strong>{priceLabel}</strong>
          </div>
        </div>

        <button type="button" className="pricing-cta">
          Create an Event <Arrow />
        </button>
      </div>

      <section className="pricing-reviews">
        <div className="center-head pricing-review-head">
          <div className="eyebrow light"><i /> From the guestbook</div>
          <h2>Good times,<br /><em>in their words.</em></h2>
        </div>

        <div className="review-grid pricing-review-grid">
          {pricingReviews.map(([quote, name, place], index) => (
            <article className={`review review-${index}`} key={name}>
              <div className="review-stars">★★★★★</div>
              <p>{quote}</p>
              <small>{name} · {place}</small>
            </article>
          ))}
        </div>
      </section>

      <footer className="pricing-footer-links">
        <div className="pricing-footer-brand" aria-label="Flic brand mark">
          <span className="pricing-logo-circle" />
        </div>

        <div className="pricing-footer-columns">
          {footerGroups.map((group) => (
            <div className="pricing-footer-column" key={group.title}>
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}><a href="#">{item}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pricing-socials" aria-label="Social links">
          {socialLinks.map((social) => (
            <a href="#" key={social.label} aria-label={social.label}>
              {social.icon}
            </a>
          ))}
        </div>
      </footer>
    </main>
  );
}
