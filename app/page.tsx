"use client";

import { useState } from "react";

const photos = [
  "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=85",
  "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&q=85",
  "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=600&q=85",
];

const reviews = [
  ["“The best wedding favour we never planned.”", "Sophie & Max", "London, UK"],
  ["“Every photo felt like a tiny surprise.”", "Lena R.", "Austin, TX"],
  ["“It made our friends feel like the photographers.”", "Jordan & Alex", "Sydney, AU"],
  ["“A time capsule of the whole weekend.”", "Maya P.", "Brooklyn, NY"],
  ["“Zero apps. Maximum memories.”", "Chris T.", "Toronto, CA"],
];

const faqs = [
  ["Do guests need to download an app?", "Nope. Guests scan your event QR code and Flic opens instantly in their browser. No app, no account, no friction."],
  ["When do photos reveal?", "You choose. Reveal photos instantly, at midnight, or up to 72 hours after your event ends."],
  ["Can I order prints?", "Yes. Turn your favourites into a custom-designed 6×9” softcover photobook. We do all the layout work."],
  ["How many photos per person?", "Each guest gets a pocketful of film: 15 shots by default, with the option to choose 10, 20, or unlimited."],
];

function Arrow() {
  return <span className="arrow">↗</span>;
}

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [getAppOpen, setGetAppOpen] = useState(false);
  const [useCasesOpen, setUseCasesOpen] = useState(false);

  const useCases = {
    personal: [
      ["♥", "Weddings"],
      ["✦", "Birthdays"],
      ["✧", "Baby Showers"],
      ["✈", "Vacations"],
    ],
    business: [
      ["▣", "Company Events"],
      ["▤", "Conferences"],
      ["♫", "Concerts"],
      ["✦", "Bars and Clubs"],
      ["⛷", "Ski Resorts"],
      ["▣", "School Events"],
      ["✚", "Church"],
      ["◉", "Sports"],
    ],
  };

  return (
    <main>
      <nav className="top-nav" aria-label="Main navigation">
        <a href="#top" className="brand" aria-label="Flic home">flic<span>®</span></a>

        <div className="nav-actions">
          <a href="#pricing" className="nav-link">Pricing</a>
          <a href="#faq" className="nav-link">Support</a>

          <button
            type="button"
            className={`nav-toggle ${useCasesOpen ? "active" : ""}`}
            onClick={() => {
              setUseCasesOpen((open) => !open);
              setGetAppOpen(false);
            }}
            aria-expanded={useCasesOpen}
          >
            Use <span>{useCasesOpen ? "⌃" : "⌄"}</span>
          </button>

          <button
            type="button"
            className={`nav-toggle ${getAppOpen ? "active" : ""}`}
            onClick={() => {
              setGetAppOpen((open) => !open);
              setUseCasesOpen(false);
            }}
            aria-expanded={getAppOpen}
          >
            Get the app <span>{getAppOpen ? "⌃" : "⌄"}</span>
          </button>
        </div>

        {getAppOpen && (
          <div className="app-dropdown" role="menu" aria-label="App download options">
            <div className="app-section">
              <h3>For personal</h3>
              <div className="app-option-row"><span className="option-icon apple"></span><span>Download the iOS App</span></div>
              <div className="app-option-row"><span className="option-icon android">◭</span><span>Download the Android App</span></div>
              <div className="app-option-row"><span className="option-icon clip">▣</span><span>Try the App Clip</span></div>
            </div>

            <div className="app-section business">
              <h3>For business</h3>
              <div className="app-option-row"><span className="option-icon web">▢</span><span>Create Using Web App</span></div>
            </div>
          </div>
        )}

        {useCasesOpen && (
          <div className="use-dropdown" role="menu" aria-label="Use cases menu">
            <div className="use-section">
              <h3>For personal</h3>
              <div className="use-grid">
                {useCases.personal.map(([icon, label]) => (
                  <a href="#start" key={label} className="use-item">
                    <span>{icon}</span>
                    {label}
                  </a>
                ))}
              </div>
            </div>

            <div className="use-divider" />

            <div className="use-section">
              <h3>For business</h3>
              <div className="use-grid business-grid">
                {useCases.business.map(([icon, label]) => (
                  <a href="#start" key={label} className="use-item">
                    <span>{icon}</span>
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>

      <section className="hero" id="top">
        <div className="hero-left">
          <div className="eyebrow"><i /> The disposable camera for now</div>
          <h1>Capture<br /><em>everyone&apos;s</em><br />perspective.</h1>
          <p className="hero-copy">A QR-code disposable camera for the moments you didn&apos;t see. No app download. Just a little film magic for weddings, parties, and everything in between.</p>
          <div className="hero-actions"><a className="button dark" href="#start">Create your event <Arrow /></a><a className="text-link" href="#how">See how it works <span>↓</span></a></div>
          <div className="trust"><div className="stars">★★★★★</div><strong>4.9</strong><span>from 28,433 happy snappers</span></div>
        </div>
        <div className="hero-art">
          <div className="sun-disc" />
          <div className="photo-stack">
            <div className="phone">
              <div className="speaker" />
              <div className="phone-screen">
                <div className="status">9:41 <span>••• ◉</span></div>
                <div className="app-title">Chloe &amp; Tyler <small>✦</small></div>
                <div className="gallery-image" />
                <div className="dots">•••</div>
                <button className="take-button">Take photos <b>↗</b></button>
                <div className="film-count"><span>▣</span> 12 of 15 photos left</div>
              </div>
            </div>
            <div className="polaroid polaroid-one"><div className="polaroid-img img-two" /><small>the girls ♡</small></div>
            <div className="polaroid polaroid-two"><div className="polaroid-img img-three" /><small>06 . 14 . 25</small></div>
          </div>
          <div className="qr-card"><div className="qr-pattern">▦</div><div><strong>SCAN TO JOIN</strong><span>Chloe &amp; Tyler<br />June 14, 2025</span></div></div>
          <div className="scribble">made for<br /><em>the in-between</em></div>
        </div>
      </section>

      <div className="marquee"><div>WEDDINGS <b>✳</b> BIRTHDAYS <b>✳</b> WEEKENDS <b>✳</b> NIGHTS OUT <b>✳</b> WEDDINGS <b>✳</b> BIRTHDAYS <b>✳</b> WEEKENDS <b>✳</b> NIGHTS OUT <b>✳</b></div></div>

      <section className="section how" id="how">
        <div className="section-head"><div><div className="eyebrow"><i /> How it works</div><h2>Three steps to<br /><em>the good stuff.</em></h2></div><p>Like a disposable camera, but everyone has one. Flic turns your guests into a room full of happy little documentarians.</p></div>
        <div className="steps">
          {[["01", "Create your event", "Pick your style, set the photo limit, and make it yours in under two minutes.", "✦"], ["02", "Share the QR", "Put it on tables, invitations, or your forehead. Guests scan once and they’re in.", "⌁"], ["03", "Photos revealed", "Choose your reveal moment. Then watch everyone relive the night together.", "◒"]].map(([num, title, text, icon]) => <article className="step" key={num}><div className="step-top"><span>{num}</span><b>{icon}</b></div><h3>{title}</h3><p>{text}</p><a href="#start">Learn more <Arrow /></a></article>)}
        </div>
      </section>

      <section className="feature-band">
        <div className="feature-copy"><div className="eyebrow light"><i /> All the magic, none of the admin</div><h2>It feels like film.<br /><em>It works like magic.</em></h2><p>Flic keeps the charm of a disposable camera and leaves the blurry logistics in the past.</p><a className="button cream" href="#start">Make some memories <Arrow /></a></div>
        <div className="feature-list">{[["No app download", "Scan, snap, done. Flic works right in the browser."], ["Just enough photos", "A little limit makes every shot feel like it matters."], ["Your reveal, your way", "Instantly, tomorrow, or whenever you’re ready."], ["Your story, printed", "We turn the whole beautiful mess into a book."]].map(([t, d], i) => <div className="feature-row" key={t}><span>0{i + 1}</span><div><h3>{t}</h3><p>{d}</p></div><Arrow /></div>)}</div>
      </section>

      <section className="section book-section" id="book">
        <div className="book-visual"><div className="book-cover"><div className="halftone" /><div className="book-small">THE FLIC<br />ARCHIVE</div><h3>Chloe<br /><em>&amp;</em> Tyler</h3><div className="book-date">14 — 06 — 25</div></div><div className="book-pages" /></div>
        <div className="book-copy"><div className="eyebrow"><i /> The afterparty</div><h2>Make it<br /><em>last forever.</em></h2><p>When the confetti settles, turn everyone&apos;s favourite moments into a custom softcover photobook. We&apos;ll do all the work — you just choose your cover.</p><div className="book-meta"><span>6 × 9”</span><span>40–120 pages</span><span>Softcover</span></div><a className="button dark" href="#start">Explore photobooks <Arrow /></a></div>
      </section>

      <section className="section pricing" id="pricing"><div className="center-head"><div className="eyebrow"><i /> Simple, like film</div><h2>Pick your <em>roll.</em></h2><p>Everything you need to capture the night. Nothing you don&apos;t.</p></div><div className="price-grid">{[["ONE NIGHT", "$39", "One event, one unforgettable night.", ["Up to 50 guests", "15 photos per guest", "Custom event page"]], ["THE WEEKENDER", "$69", "For when one day is never enough.", ["Up to 150 guests", "15 photos per guest", "Custom event page", "Timed reveal"]], ["NO LIMITS", "$129", "For the big, beautiful celebrations.", ["Unlimited guests", "20 photos per guest", "Custom event page", "Photobook discount"]]].map(([title, price, desc, items], i) => <article className={`price-card ${i === 1 ? "popular" : ""}`} key={String(title)}>{i === 1 && <div className="popular-tag">MOST POPULAR</div>}<span className="ticket-title">{title}</span><strong>{price}</strong><small>per event</small><p>{desc}</p><ul>{(items as string[]).map(x => <li key={String(x)}>✓ {x}</li>)}</ul><a href="#start" className="price-link">Get started <Arrow /></a></article>)}</div></section>

      <section className="reviews"><div className="center-head"><div className="eyebrow light"><i /> From the guestbook</div><h2>Good times,<br /><em>in their words.</em></h2></div><div className="review-grid">{reviews.map(([quote, name, place], i) => <article className={`review review-${i}`} key={name}><div className="review-stars">★★★★★</div><p>{quote}</p><small>{name} · {place}</small></article>)}</div></section>

      <section className="section faq" id="faq"><div className="section-head"><div><div className="eyebrow"><i /> Questions, answered</div><h2>Curious?<br /><em>Good.</em></h2></div><p>Still wondering how the magic works? We&apos;ve got you.</p></div><div className="faq-list">{faqs.map(([question, answer], i) => <button className={`faq-item ${openFaq === i ? "open" : ""}`} key={question} onClick={() => setOpenFaq(openFaq === i ? null : i)}><span>0{i + 1}</span><strong>{question}</strong><b>{openFaq === i ? "−" : "+"}</b>{openFaq === i && <p>{answer}</p>}</button>)}</div></section>

      <section className="start" id="start"><div className="start-inner"><div className="eyebrow light"><i /> Ready when you are</div><h2>Let&apos;s make<br /><em>something worth keeping.</em></h2><p>Start your event in two minutes. No credit card, no app download, no big production.</p><a className="button cream" href="#top">Create your event <Arrow /></a></div><div className="start-sticker">YOUR<br /><em>BEST</em><br />IDEA YET ✳</div></section>
      <footer><a className="logo" href="#top">flic<span>®</span></a><span>Made for the moments between the moments.</span><span>© 2025 Flic</span></footer>
    </main>
  );
}
