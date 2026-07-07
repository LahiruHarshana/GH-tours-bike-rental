"use client";

import { useEffect } from "react";

const siteMarkup = String.raw`<div class="loader" id="loader"><div class="loader-inner"><div class="loader-logo"></div><div class="loader-word">Lanka Loop</div></div></div>
  <div class="cursor"></div><div class="cursor-dot"></div>
  <header class="nav-wrap"><nav class="nav"><a href="#top" class="brand" aria-label="Lanka Loop home"><span class="brand-mark">LL</span><span>Lanka Loop</span></a><div class="nav-links"><a href="#services">Services</a><a href="#book">Book now</a><a href="#safaris">Safaris</a><a href="#bikes">Bike rental</a><a href="#destinations">Destinations</a></div><div class="nav-actions"><a href="#book" class="btn btn-dark magnetic">Plan my trip <span>↗</span></a><button class="btn btn-outline menu-btn" aria-label="Open menu">☰</button></div></nav></header>
  <div class="page-progress" aria-hidden="true"><span id="pageProgressBar"></span></div>
  <div class="mobile-menu-backdrop" id="mobileMenuBackdrop"></div>
  <aside class="mobile-menu" id="mobileMenu" aria-hidden="true" aria-label="Mobile navigation">
    <div class="mobile-menu-head">
      <a href="#top" class="brand"><span class="brand-mark">LL</span><span>Lanka Loop</span></a>
      <button class="mobile-menu-close" id="mobileMenuClose" aria-label="Close menu">✕</button>
    </div>
    <nav class="mobile-menu-links">
      <a href="#services">Services <span>01</span></a>
      <a href="#book">Book now <span>02</span></a>
      <a href="#safaris">Safaris <span>03</span></a>
      <a href="#bikes">Bike rental <span>04</span></a>
      <a href="#destinations">Destinations <span>05</span></a>
    </nav>
    <div class="mobile-menu-footer">
      <a href="#book" class="btn btn-dark">Plan my Sri Lanka trip →</a>
      <div class="mobile-contact">
        <a href="tel:+94770000000">Call us</a>
        <a href="https://wa.me/94770000000" target="_blank" rel="noopener">WhatsApp</a>
      </div>
    </div>
  </aside>
  <a class="floating-whatsapp" href="https://wa.me/94770000000" target="_blank" rel="noopener" aria-label="Chat on WhatsApp"><i>✆</i><span>WhatsApp</span></a>

  <main id="top">
    <section class="hero cinematic-hero" id="home" aria-label="Sri Lanka cinematic introduction">
      <div class="cinematic-sticky">
        <div class="cinematic-stage">
          <article class="cinematic-panel cinematic-panel-one is-active">
            <img src="https://images.unsplash.com/photo-1566566628537-aafdd9ad1c00?auto=format&fit=crop&w=2000&q=90" alt="Train travelling through the green Sri Lankan hill country">
          </article>
          <article class="cinematic-panel cinematic-panel-two">
            <img src="https://images.unsplash.com/photo-1711797750174-c3750dd9d7c9?auto=format&fit=crop&w=2000&q=90" alt="Aerial view of Sigiriya rock fortress in Sri Lanka">
          </article>
          <article class="cinematic-panel cinematic-panel-three">
            <img src="https://images.unsplash.com/photo-1566650576880-6740b03eaad1?auto=format&fit=crop&w=2000&q=90" alt="Elephants during a Sri Lankan wildlife safari">
          </article>
          <div class="cinematic-shade"></div>
        </div>

        <div class="cinematic-side-note">Sri Lanka · 05.9485° N · 80.5353° E</div>

        <div class="cinematic-copy cinematic-copy-one is-visible">
          <span class="cinematic-kicker">Journeys beyond the ordinary</span>
          <h1>WILD<br><em>CEYLON</em></h1>
          <p>Private roads through tea country, coastlines, ancient cities and the island's untamed heart.</p>
          <a href="#services" class="cinematic-link">Explore the island <span>↗</span></a>
        </div>

        <div class="cinematic-copy cinematic-copy-two">
          <span class="cinematic-kicker">The cultural triangle</span>
          <h2>ANCIENT<br><em>WONDERS</em></h2>
          <p>Climb above the forest, cross centuries of history, and travel at a pace shaped around you.</p>
          <a href="#book" class="cinematic-link service-trigger" data-tab="tour">Design a private tour <span>↗</span></a>
        </div>

        <div class="cinematic-copy cinematic-copy-three">
          <span class="cinematic-kicker">Wildlife in motion</span>
          <h2>INTO THE<br><em>WILD</em></h2>
          <p>Arrange your private jeep, hotel pickup, airport transfer and onward route in one seamless request.</p>
          <a href="#book" class="cinematic-link service-trigger" data-tab="safari">Book a safari <span>↗</span></a>
        </div>

        <div class="cinematic-gallery-caption">
          <span>Three worlds</span>
          <strong>One island journey</strong>
        </div>

        <div class="cinematic-roman" aria-hidden="true">
          <button class="roman-item active" data-scene="0"><span>I</span><i></i></button>
          <button class="roman-item" data-scene="1"><span>II</span><i></i></button>
          <button class="roman-item" data-scene="2"><span>III</span><i></i></button>
        </div>

        <div class="cinematic-controls" aria-hidden="true">
          <span>+</span><span>−</span><span>⌁</span>
        </div>

        <div class="cinematic-scroll">
          <span>Scroll to journey</span>
          <i></i>
        </div>

        <a href="#book" class="cinematic-book magnetic">Plan your trip <span>↗</span></a>
      </div>
    </section>
    <div class="marquee" aria-hidden="true"><div class="marquee-track"><span class="marquee-item">Airport Taxi ✦</span><span class="marquee-item">Private Safari ✦</span><span class="marquee-item">Bike Rental ✦</span><span class="marquee-item">Custom Tours ✦</span><span class="marquee-item">Airport Taxi ✦</span><span class="marquee-item">Private Safari ✦</span><span class="marquee-item">Bike Rental ✦</span><span class="marquee-item">Custom Tours ✦</span></div></div>
    <section class="section" id="services"><div class="container"><div class="service-intro"><div><span class="eyebrow reveal">Everything you need to move</span><h2 class="section-title reveal">One island.<br>Four ways to explore.</h2></div><p class="section-copy reveal">Choose one service or combine them into one seamless itinerary. Every request is handled as a private booking with a clear plan before you arrive.</p></div><div class="service-grid">
      <article class="service-card tilt-card"><div class="service-image" style="background-image:url('https://images.unsplash.com/photo-1744287690146-86165c87b2e3?auto=format&fit=crop&w=1500&q=88')"></div><div class="service-top"><span class="service-index">01</span><span class="service-badge">Door-to-door</span></div><div class="service-content"><h3>Airport Taxi</h3><p>Private pickups from Bandaranaike International Airport to Colombo, Galle, Ella, Kandy, Sigiriya and beyond.</p><a href="#book" class="service-link service-trigger" data-tab="taxi">Book airport taxi <span>↗</span></a></div></article>
      <article class="service-card tilt-card"><div class="service-image" style="background-image:url('https://images.unsplash.com/photo-1566650576880-6740b03eaad1?auto=format&fit=crop&w=1500&q=88')"></div><div class="service-top"><span class="service-index">02</span><span class="service-badge">Private jeep</span></div><div class="service-content"><h3>Safaris</h3><p>Morning and afternoon wildlife drives with hotel pickup and private jeep arrangements.</p><a href="#book" class="service-link service-trigger" data-tab="safari">Choose a safari <span>↗</span></a></div></article>
      <article class="service-card tilt-card"><div class="service-image" style="background-image:url('https://images.unsplash.com/photo-1744298350175-d872e681a691?auto=format&fit=crop&w=1500&q=88')"></div><div class="service-top"><span class="service-index">03</span><span class="service-badge">Daily / weekly</span></div><div class="service-content"><h3>Bike Rental</h3><p>Scooters and motorcycles for coastal towns, local trips, and longer independent adventures.</p><a href="#book" class="service-link service-trigger" data-tab="bike">Rent a bike <span>↗</span></a></div></article>
      <article class="service-card tilt-card"><div class="service-image" style="background-image:url('https://images.unsplash.com/photo-1711797750174-c3750dd9d7c9?auto=format&fit=crop&w=1500&q=88')"></div><div class="service-top"><span class="service-index">04</span><span class="service-badge">Made for you</span></div><div class="service-content"><h3>Private Tours</h3><p>Build a multi-day route around beaches, wildlife, tea country, heritage sites, food, and slow travel.</p><a href="#book" class="service-link service-trigger" data-tab="tour">Design my tour <span>↗</span></a></div></article>
    </div></div></section>
    <section class="experience"><div class="experience-sticky"><div class="experience-bg-word">CEYLON</div><div class="experience-copy"><span class="eyebrow">Scroll the island</span><h2>Your trip,<br>in motion.</h2><p>Move from airport arrival to coast, wildlife, and hill country without switching between different booking companies.</p></div><article class="scene-card scene-1"><img src="https://images.unsplash.com/photo-1743636747452-1af8c5f2458f?auto=format&fit=crop&w=1200&q=86" alt="Bandaranaike International Airport"><div class="scene-meta"><small>01 — Arrive</small><h3>Airport pickup</h3></div></article><article class="scene-card scene-2"><img src="https://images.unsplash.com/photo-1776331044134-dfd0394c180d?auto=format&fit=crop&w=1200&q=86" alt="Tuk tuk on a Sri Lankan street"><div class="scene-meta"><small>02 — Move</small><h3>Coastal freedom</h3></div></article><article class="scene-card scene-3"><img src="https://images.unsplash.com/photo-1566650576880-6740b03eaad1?auto=format&fit=crop&w=1200&q=86" alt="Sri Lanka elephant safari"><div class="scene-meta"><small>03 — Discover</small><h3>Wild encounters</h3></div></article><article class="scene-card scene-4"><img src="https://images.unsplash.com/photo-1711797750174-c3750dd9d7c9?auto=format&fit=crop&w=1200&q=86" alt="Sigiriya rock fortress"><div class="scene-meta"><small>04 — Remember</small><h3>Ancient stories</h3></div></article><div class="experience-progress"><span id="experienceProgress"></span></div><div class="experience-step" id="experienceStep">01 / 04</div></div></section>
    <section class="section booking-section" id="book"><div class="container"><div class="booking-layout"><div class="booking-copy-side"><span class="eyebrow reveal">One simple booking hub</span><h2 class="section-title reveal">Tell us how you want to travel.</h2><p class="reveal">Select a service, add your dates and route, and send one request. The form creates a ready-to-send WhatsApp summary.</p><div class="booking-points reveal"><div class="booking-point"><span>✓</span> No online payment required for the request</div><div class="booking-point"><span>✓</span> Suitable for airport arrivals and hotel pickups</div><div class="booking-point"><span>✓</span> Combine multiple services in one itinerary</div></div></div><div class="booking-card reveal"><div class="booking-tabs"><button class="booking-tab active" data-tab="taxi"><span class="tab-icon">✈</span>Taxi</button><button class="booking-tab" data-tab="safari"><span class="tab-icon">🐘</span>Safari</button><button class="booking-tab" data-tab="bike"><span class="tab-icon">🛵</span>Bike</button><button class="booking-tab" data-tab="tour"><span class="tab-icon">◉</span>Tour</button></div><form id="mainBookingForm">
      <div class="booking-panel active" id="taxiPanel"><div class="form-title"><h3>Airport taxi</h3><span>Private transfer request</span></div><div class="form-grid"><div class="field full"><label>Pickup</label><div class="input"><span>⌖</span><input name="taxiPickup" placeholder="Bandaranaike Airport / hotel" required></div></div><div class="field full"><label>Destination</label><div class="input"><span>◎</span><input name="taxiDestination" placeholder="Galle, Ella, Kandy, Sigiriya..." required></div></div><div class="field"><label>Date</label><div class="input"><input type="date" name="taxiDate" required></div></div><div class="field"><label>Time / flight arrival</label><div class="input"><input name="taxiTime" placeholder="10:30 PM / UL 503"></div></div><div class="field"><label>Passengers</label><div class="input"><select name="taxiPassengers"><option>1 passenger</option><option>2 passengers</option><option>3 passengers</option><option>4 passengers</option><option>5+ passengers</option></select></div></div><div class="field"><label>Vehicle</label><div class="input"><select name="taxiVehicle"><option>Comfort car</option><option>Premium SUV</option><option>Family van</option><option>Minibus</option></select></div></div></div></div>
      <div class="booking-panel" id="safariPanel"><div class="form-title"><h3>Private safari</h3><span>Jeep and pickup request</span></div><div class="form-grid"><div class="field full"><label>National park</label><div class="input"><select name="safariPark"><option>Yala National Park</option><option>Udawalawe National Park</option><option>Minneriya / Kaudulla</option><option>Wilpattu National Park</option><option>Help me choose</option></select></div></div><div class="field"><label>Date</label><div class="input"><input type="date" name="safariDate"></div></div><div class="field"><label>Session</label><div class="input"><select name="safariSession"><option>Morning safari</option><option>Afternoon safari</option><option>Full-day safari</option></select></div></div><div class="field"><label>Guests</label><div class="input"><select name="safariGuests"><option>1 guest</option><option>2 guests</option><option>3–4 guests</option><option>5–6 guests</option></select></div></div><div class="field"><label>Pickup hotel / town</label><div class="input"><input name="safariPickup" placeholder="Tissamaharama / Ella..."></div></div><div class="field full"><label>Notes</label><div class="input"><textarea name="safariNotes" placeholder="Children, luggage, preferred animals, transfer needed..."></textarea></div></div></div></div>
      <div class="booking-panel" id="bikePanel"><div class="form-title"><h3>Bike rental</h3><span>Daily or weekly hire request</span></div><div class="form-grid"><div class="field"><label>Pickup town</label><div class="input"><input name="bikeTown" placeholder="Mirissa / Weligama / Galle"></div></div><div class="field"><label>Bike type</label><div class="input"><select name="bikeType"><option>Automatic scooter</option><option>125cc motorcycle</option><option>Trail / adventure bike</option></select></div></div><div class="field"><label>Start date</label><div class="input"><input type="date" name="bikeStart"></div></div><div class="field"><label>End date</label><div class="input"><input type="date" name="bikeEnd"></div></div><div class="field"><label>Number of bikes</label><div class="input"><select name="bikeCount"><option>1 bike</option><option>2 bikes</option><option>3 bikes</option><option>4+ bikes</option></select></div></div><div class="field"><label>Helmet sizes / notes</label><div class="input"><input name="bikeNotes" placeholder="Two helmets, delivery request..."></div></div></div></div>
      <div class="booking-panel" id="tourPanel"><div class="form-title"><h3>Private island tour</h3><span>Tailor-made itinerary request</span></div><div class="form-grid"><div class="field"><label>Start date</label><div class="input"><input type="date" name="tourDate"></div></div><div class="field"><label>Duration</label><div class="input"><select name="tourDuration"><option>2–3 days</option><option>4–6 days</option><option>7–10 days</option><option>11+ days</option></select></div></div><div class="field"><label>Guests</label><div class="input"><select name="tourGuests"><option>1 guest</option><option>2 guests</option><option>3–4 guests</option><option>5+ guests</option></select></div></div><div class="field"><label>Start location</label><div class="input"><input name="tourStart" placeholder="Airport / Colombo / Galle"></div></div><div class="field full"><label>Places and interests</label><div class="input"><textarea name="tourInterests" placeholder="Beaches, wildlife, Sigiriya, tea country, food, surfing..."></textarea></div></div></div></div>
      <button class="btn btn-dark book-submit magnetic" type="submit">Create my booking request →</button><p class="form-note">Demo form: update the WhatsApp number in the HTML before publishing.</p></form></div></div></div></section>
    <section class="section" id="safaris"><div class="container"><span class="eyebrow reveal">Wild Sri Lanka</span><h2 class="section-title reveal">Safari days,<br>made beautifully simple.</h2><p class="section-copy reveal">Choose a park and session, then add hotel pickup or a longer transfer. The booking can include the jeep, route planning, and your onward journey.</p><div class="safari-layout"><article class="safari-feature reveal"><img src="https://images.unsplash.com/photo-1566650576880-6740b03eaad1?auto=format&fit=crop&w=1500&q=88" alt="Elephants beside a safari jeep in Sri Lanka"><div class="safari-content"><span class="eyebrow" style="color:#D8CFBC">Signature wildlife day</span><h3>Yala by private jeep</h3><p>Arrange an early start, hotel pickup, private jeep, and onward transfer in one request.</p><a href="#book" class="btn btn-light service-trigger" data-tab="safari">Book this safari</a></div></article><div class="safari-list"><article class="safari-row reveal"><img src="https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=650&q=84" alt="Elephant in the wild"><div><h4>Udawalawe</h4><p>A popular choice for open landscapes and elephant-focused wildlife drives.</p><div class="safari-tags"><span>Morning</span><span>Afternoon</span><span>Hotel pickup</span></div></div><a class="round-link service-trigger" data-tab="safari" href="#book">↗</a></article><article class="safari-row reveal"><img src="https://images.unsplash.com/photo-1553521306-1c28b40ed0a9?auto=format&fit=crop&w=650&q=84" alt="Wild elephants"><div><h4>Minneriya</h4><p>Build a Cultural Triangle route with Sigiriya and an elephant safari on the same trip.</p><div class="safari-tags"><span>Sigiriya route</span><span>Private jeep</span></div></div><a class="round-link service-trigger" data-tab="safari" href="#book">↗</a></article><article class="safari-row reveal"><img src="https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=650&q=84" alt="Leopard in nature"><div><h4>Wilpattu</h4><p>A quieter, forested safari option that can be paired with Anuradhapura.</p><div class="safari-tags"><span>Full day</span><span>North route</span></div></div><a class="round-link service-trigger" data-tab="safari" href="#book">↗</a></article></div></div></div></section>
    <section class="section" id="bikes"><div class="container"><span class="eyebrow reveal">Freedom on two wheels</span><h2 class="section-title reveal">Rent a bike.<br>Follow your own rhythm.</h2><div class="bike-shell reveal"><div class="bike-photo"><img src="https://images.unsplash.com/photo-1744298350175-d872e681a691?auto=format&fit=crop&w=1500&q=88" alt="Scooter parked in tropical Mirissa, Sri Lanka"></div><div class="bike-content"><span class="eyebrow">Daily and weekly rentals</span><h3>Coastline freedom.</h3><p>Request a scooter or motorcycle for Mirissa, Weligama, Galle, and nearby areas. Add delivery, extra helmets, and the number of rental days.</p><div class="bike-options"><div class="bike-option"><div class="bike-option-icon">🛵</div><div><b>Automatic scooter</b><small>Easy local rides</small></div><strong>Popular</strong></div><div class="bike-option"><div class="bike-option-icon">🏍</div><div><b>125cc motorcycle</b><small>Longer coastal trips</small></div><strong>Flexible</strong></div><div class="bike-option"><div class="bike-option-icon">⛰</div><div><b>Adventure bike</b><small>Request availability</small></div><strong>On request</strong></div></div><div class="bike-notes"><span>Helmet request</span><span>Hotel delivery</span><span>Daily / weekly</span></div><a href="#book" class="btn btn-dark magnetic service-trigger" data-tab="bike" style="margin-top:28px;align-self:flex-start">Request a bike</a></div></div></div></section>
    <section class="section destinations" id="destinations"><div class="container destination-head"><div><span class="eyebrow reveal">Build your route</span><h2 class="section-title reveal">Places worth<br>slowing down for.</h2></div><p class="section-copy reveal">Use these as starting points for a private tour, airport transfer, safari route, or multi-day island loop.</p></div><div class="destination-track" id="destinationTrack"><article class="destination-card"><img src="https://images.unsplash.com/photo-1711797750174-c3750dd9d7c9?auto=format&fit=crop&w=1000&q=87" alt="Sigiriya rock fortress"><div class="destination-meta"><span>Cultural Triangle</span><h3>Sigiriya</h3><p>Ancient rock fortress, village roads, and nearby elephant safaris.</p></div></article><article class="destination-card"><img src="https://images.unsplash.com/photo-1566566628537-aafdd9ad1c00?auto=format&fit=crop&w=1000&q=87" alt="Sri Lanka hill country train"><div class="destination-meta"><span>Hill Country</span><h3>Ella</h3><p>Tea landscapes, train journeys, waterfalls, and scenic mountain roads.</p></div></article><article class="destination-card"><img src="https://images.unsplash.com/photo-1743614887896-c0cef1e559db?auto=format&fit=crop&w=1000&q=87" alt="Galle Fort landscape"><div class="destination-meta"><span>South Coast</span><h3>Galle</h3><p>Fort walls, ocean sunsets, cafés, heritage streets, and coastal drives.</p></div></article><article class="destination-card"><img src="https://images.unsplash.com/photo-1744943776581-9e325159379b?auto=format&fit=crop&w=1000&q=87" alt="Sunset over the Indian Ocean"><div class="destination-meta"><span>Indian Ocean</span><h3>Mirissa</h3><p>Beach days, local bike rides, surf towns, and warm coastal evenings.</p></div></article><article class="destination-card"><img src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1000&q=87" alt="Tea country landscape"><div class="destination-meta"><span>Tea Country</span><h3>Nuwara Eliya</h3><p>Cool air, estate roads, gardens, and classic hill-country scenery.</p></div></article></div></section>
    <section class="section" id="why"><div class="container"><div class="why-layout"><div class="why-image reveal"><img src="https://images.unsplash.com/photo-1776331044134-dfd0394c180d?auto=format&fit=crop&w=1300&q=88" alt="Tuk tuk driving in Mirissa, Sri Lanka"><div class="why-image-badge"><div><strong>One local travel contact</strong><span>Before arrival and while you travel</span></div><span>↗</span></div></div><div><span class="eyebrow reveal">Designed for visitors</span><h2 class="section-title reveal">Less arranging.<br>More experiencing.</h2><p class="section-copy reveal">The site is designed around the questions international travellers ask most: who will meet me, what vehicle will arrive, where does the safari start, and how can I combine everything?</p><div class="why-list"><article class="why-item reveal"><div class="why-icon">✈</div><div><h3>Arrival made calmer</h3><p>Add your flight or arrival time to the airport taxi request and share your full destination before landing.</p></div></article><article class="why-item reveal"><div class="why-icon">◉</div><div><h3>One connected itinerary</h3><p>Combine transfers, safari days, bike hire, and private touring instead of arranging every part separately.</p></div></article><article class="why-item reveal"><div class="why-icon">💬</div><div><h3>Clear WhatsApp request</h3><p>The booking form formats your dates, locations, group size, and service choice into one readable message.</p></div></article><article class="why-item reveal"><div class="why-icon">♧</div><div><h3>Travel at your pace</h3><p>Choose private arrangements and tailor the route around children, luggage, surfboards, photography, or slow travel.</p></div></article></div></div></div></div></section>
    <section class="section reviews"><div class="container"><span class="eyebrow reveal">Traveller experience</span><h2 class="section-title reveal">The kind of trip<br>that feels effortless.</h2><div class="review-grid"><article class="review-main reveal"><div class="stars">★★★★★</div><p class="review-quote">“We landed late, travelled south the same night, booked our safari, and arranged a scooter through one conversation.”</p><div class="review-person"><img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80" alt="Traveller portrait"><div><strong>Sample traveller review</strong><span>Airport taxi + safari + bike rental</span></div></div></article><div class="review-side"><article class="review-stat reveal"><span>Four services</span><strong>01</strong><p>One booking experience for transport, wildlife, rentals, and tours.</p></article><article class="review-stat light reveal"><span>Made for</span><strong>YOU</strong><p>Routes and service requests that adapt to the traveller.</p></article></div></div></div></section>
    <section class="section"><div class="container faq-layout"><div><span class="eyebrow reveal">Helpful before you book</span><h2 class="section-title reveal">Questions,<br>answered clearly.</h2><p class="section-copy reveal">These are sample FAQ sections. Update the answers with your exact operating policies before publishing.</p></div><div class="faq-list reveal"><div class="faq-item open"><button class="faq-question">Can I combine an airport taxi and a tour?<span class="faq-plus">+</span></button><div class="faq-answer">Yes. Use the private tour form and mention your airport arrival details, or send separate requests and combine them during confirmation.</div></div><div class="faq-item"><button class="faq-question">Can the safari include hotel pickup?<span class="faq-plus">+</span></button><div class="faq-answer">The form includes a pickup town or hotel field so the transport requirement can be included in the quote.</div></div><div class="faq-item"><button class="faq-question">What details are needed for a bike rental?<span class="faq-plus">+</span></button><div class="faq-answer">Add the pickup town, dates, bike type, number of bikes, helmet request, and any delivery notes. Confirm licensing, deposit, insurance, and eligibility requirements with the operator before riding.</div></div><div class="faq-item"><button class="faq-question">Is this an instant confirmed booking?<span class="faq-plus">+</span></button><div class="faq-answer">No. The demo creates a booking request. Availability, final price, inclusions, and confirmation should be provided by the operator.</div></div><div class="faq-item"><button class="faq-question">Can I request a custom multi-day route?<span class="faq-plus">+</span></button><div class="faq-answer">Yes. Add your travel dates, group size, start location, preferred regions, and interests in the private tour form.</div></div></div></div></section>
    <section class="final-cta"><div class="container"><div class="cta-card reveal"><img src="https://images.unsplash.com/photo-1711797750174-c3750dd9d7c9?auto=format&fit=crop&w=1800&q=90" alt="Aerial view of Sigiriya, Sri Lanka"><div class="cta-content"><span class="eyebrow">Your Sri Lanka journey starts here</span><h2>Move through the island beautifully.</h2><div class="cta-actions"><a href="#book" class="btn btn-light magnetic">Start my booking</a><a href="https://wa.me/94770000000" target="_blank" rel="noopener" class="btn btn-dark magnetic">Chat on WhatsApp</a></div></div></div></div></section>
  </main>
  <footer><div class="container"><div class="footer-grid"><div class="footer-brand"><a href="#top" class="brand"><span class="brand-mark">LL</span><span>Lanka Loop</span></a><p>Airport taxis, private safaris, bike rentals, and tailor-made tours across Sri Lanka.</p></div><div class="footer-col"><h4>Book</h4><a href="#book">Airport taxi</a><a href="#book">Safari</a><a href="#book">Bike rental</a><a href="#book">Private tour</a></div><div class="footer-col"><h4>Discover</h4><a href="#destinations">Sigiriya</a><a href="#destinations">Ella</a><a href="#destinations">Galle</a><a href="#destinations">Mirissa</a></div><div class="footer-col"><h4>Contact</h4><a href="tel:+94770000000">+94 77 000 0000</a><a href="mailto:hello@lankaloop.lk">hello@lankaloop.lk</a><a href="#">Sri Lanka</a></div></div><div class="footer-bottom"><span>© 2026 Lanka Loop. Demo website—replace contact details, policies, and operating information before launch.</span><span>Photography loaded from public Unsplash image URLs. Review and retain appropriate source credits for production use.</span></div></div></footer>
  <div class="modal" id="bookingModal" aria-hidden="true"><div class="modal-card"><div class="modal-head"><h3>Your request is ready</h3><button class="modal-close" aria-label="Close">✕</button></div><div class="summary" id="bookingSummary"></div><a class="btn whatsapp" id="whatsappLink" href="#" target="_blank" rel="noopener">Continue on WhatsApp</a></div></div>`;

declare global {
  interface Window {
    __LANKA_LOOP_INITIALIZED__?: boolean;
  }
}

function loadScript(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>(`script[src="${src}"]`);
    if (existing) {
      if (existing.dataset.loaded === "true") resolve();
      else existing.addEventListener("load", () => resolve(), { once: true });
      return;
    }

    const script = document.createElement("script");
    script.src = src;
    script.async = false;
    script.addEventListener(
      "load",
      () => {
        script.dataset.loaded = "true";
        resolve();
      },
      { once: true },
    );
    script.addEventListener("error", () => reject(new Error(`Failed to load ${src}`)), { once: true });
    document.body.appendChild(script);
  });
}

export default function LankaLoopSite() {
  useEffect(() => {
    let cancelled = false;

    async function boot() {
      try {
        await loadScript("https://cdn.jsdelivr.net/npm/@studio-freight/lenis@1.0.42/dist/lenis.min.js");
        await loadScript("https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js");
        await loadScript("https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js");
        if (!cancelled) await loadScript("/site.js");
      } catch (error) {
        console.error("Lanka Loop animation setup failed:", error);
        document.getElementById("loader")?.classList.add("hidden");
      }
    }

    boot();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div
      className="min-h-screen"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: siteMarkup }}
    />
  );
}
