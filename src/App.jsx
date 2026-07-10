import { useState, useEffect, useRef } from "react";
import {
  Leaf,
  UtensilsCrossed,
  Droplets,
  Wifi,
  Waves,
  Coffee,
  Wind,
  Sun,
  Home,
  Users,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  Star,
  Check,
  ShieldCheck,
  Navigation,
  Quote,
  Menu,
  X,
  Minus,
  Plus,
  Search,
} from "lucide-react";

export default function GinhawaLandingPage() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [guestCount, setGuestCount] = useState(2);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  const heroRef = useRef(null);
  const experienceRef = useRef(null);
  const accommodationsRef = useRef(null);
  const bookingRef = useRef(null);
  const reviewsRef = useRef(null);
  const locationRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToRef = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { label: "Experience", ref: experienceRef },
    { label: "Accommodations", ref: accommodationsRef },
    { label: "Booking", ref: bookingRef },
    { label: "Reviews", ref: reviewsRef },
    { label: "Location", ref: locationRef },
  ];

  const experiencePoints = [
    {
      icon: Leaf,
      title: "Privacy, Wrapped in Green",
      body: "Each villa stands apart, screened by palms and bamboo, spaced for real quiet. The only sounds you'll hear are birdsong and wind moving through the rice stalks.",
    },
    {
      icon: UtensilsCrossed,
      title: "From Our Soil to Your Table",
      body: "Our on-site farm and local partner growers supply the vegetables, eggs, and herbs behind every meal. Honest Filipino and international dishes, served unhurried.",
    },
    {
      icon: Droplets,
      title: "Room to Do Absolutely Nothing",
      body: "Float in our 100% chlorine-free pool at sunset. Book a hilot-inspired massage in our open-air pavilion. Or just sit with your coffee and watch the fog lift over the fields.",
    },
  ];

  const villas = [
    {
      name: "Sinag Glass Cabins",
      tagline: "Sleep under an open sky",
      description:
        "Floor-to-ceiling glass walls frame uninterrupted views of farmland and stars. Built for couples or solo travelers craving real quiet, with a private outdoor soaking tub just steps from the bed.",
      capacity: "2 Guests",
      amenities: [
        { icon: Wifi, label: "Free Wi-Fi" },
        { icon: Droplets, label: "Private Outdoor Tub" },
        { icon: Coffee, label: "Breakfast Included" },
        { icon: Wind, label: "Air Conditioning" },
      ],
      price: "9,500",
      icon: Sun,
      swatch: "from-amber-100 to-orange-200",
    },
    {
      name: "Amihan Pool Villas",
      tagline: "Your own pool, your own pace",
      description:
        "Named for the cool breeze that drifts through in the mornings, each Amihan villa has a private plunge pool, an outdoor lounge deck, and an indoor-outdoor bathroom built for slow starts.",
      capacity: "4 Guests",
      amenities: [
        { icon: Wifi, label: "Free Wi-Fi" },
        { icon: Waves, label: "Private Dipping Pool" },
        { icon: Coffee, label: "Breakfast Included" },
        { icon: Droplets, label: "Outdoor Rain Shower" },
      ],
      price: "15,800",
      icon: Wind,
      swatch: "from-emerald-100 to-teal-200",
    },
    {
      name: "Tahanan Family Farmhouses",
      tagline: "Where the whole family exhales",
      description:
        "Spacious, two-story farmhouses with a shared living area and wraparound porch, steps from the farm's open lawns and kid-friendly activities.",
      capacity: "8 Guests · 3 Bedrooms",
      amenities: [
        { icon: Wifi, label: "Free Wi-Fi" },
        { icon: UtensilsCrossed, label: "Shared Kitchen Access" },
        { icon: Coffee, label: "Breakfast Included" },
        { icon: Leaf, label: "Farm Activity Access" },
      ],
      price: "24,000",
      icon: Home,
      swatch: "from-stone-200 to-orange-100",
    },
  ];

  const steps = [
    {
      num: "1",
      icon: Leaf,
      title: "Select Your Sanctuary",
      body: "Browse our villas and farmhouses, compare views and amenities, and pick the space that matches how you want to unwind.",
    },
    {
      num: "2",
      icon: Coffee,
      title: "Customize Your Stay",
      body: "Add a private candlelit dinner, a couple's spa session, or a guided farm tour, small touches that make the stay entirely yours.",
    },
    {
      num: "3",
      icon: ShieldCheck,
      title: "Secure Instant Confirmation",
      body: "Pay safely through our encrypted booking system and get instant confirmation, no waiting, no back-and-forth, just a reservation in your inbox.",
    },
  ];

  const testimonials = [
    {
      quote:
        "We didn't realize how tired we were until we sat by that infinity pool and just stopped. Everything felt effortless, the room, the food, the silence. Ginhawa isn't just a name, it's exactly what happened to us.",
      name: "Miguel & Pia R.",
      place: "Bonifacio Global City",
    },
    {
      quote:
        "Our kids ran barefoot through the farm all weekend, and we didn't hear \u2018I\u2019m bored\u2019 once. The farmhouse was spotless and spacious, and the staff treated us like family.",
      name: "The Santos Family",
      place: "Quezon City",
    },
    {
      quote:
        "I came alone needing to reset after a brutal quarter at work. The glass cabin, the silence, the hilot massage, I left more rested than I'd felt in years.",
      name: "Andrea M.",
      place: "Makati",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-stone-50 text-stone-800 overflow-x-hidden">
      {/* NAV */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-stone-50/95 backdrop-blur-sm shadow-sm py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <button
            onClick={() => scrollToRef(heroRef)}
            className={`font-display text-xl font-semibold flex items-center gap-2 ${
              scrolled ? "text-green-900" : "text-white"
            }`}
          >
            <Leaf size={20} className={scrolled ? "text-orange-600" : "text-amber-300"} />
            Ginhawa Farms
          </button>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToRef(link.ref)}
                className={`text-sm font-medium transition-colors ${
                  scrolled ? "text-stone-600 hover:text-orange-600" : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => scrollToRef(heroRef)}
              className="hidden md:inline-flex items-center gap-1.5 bg-orange-600 hover:bg-orange-700 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2"
            >
              Book Now
            </button>
            <button
              onClick={() => setMobileMenuOpen((v) => !v)}
              className={`md:hidden ${scrolled ? "text-stone-800" : "text-white"}`}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-stone-50 border-t border-stone-200 mt-3">
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollToRef(link.ref)}
                  className="text-left text-stone-700 font-medium"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => scrollToRef(heroRef)}
                className="bg-orange-600 text-white font-semibold px-5 py-2.5 rounded-full"
              >
                Book Now
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-end overflow-hidden bg-gradient-to-b from-green-950 via-green-900 to-orange-900"
      >
        <div className="absolute top-24 right-8 md:right-28 w-56 h-56 sm:w-72 sm:h-72 bg-amber-300 rounded-full blur-3xl ginhawa-breathe" />

        <svg className="absolute bottom-16 left-0 w-full" viewBox="0 0 1440 320" preserveAspectRatio="none" fill="none">
          <path
            d="M0,140 L0,110 L240,110 L240,90 L480,90 L480,70 L720,70 L720,90 L960,90 L960,110 L1200,110 L1200,130 L1440,130 L1440,320 L0,320 Z"
            fill="#5a8a6b"
            opacity="0.35"
          />
          <path
            d="M0,190 L0,160 L200,160 L200,180 L400,180 L400,150 L600,150 L600,170 L800,170 L800,140 L1000,140 L1000,160 L1200,160 L1200,185 L1440,185 L1440,320 L0,320 Z"
            fill="#2f5b3f"
            opacity="0.55"
          />
          <path
            d="M0,240 L0,210 L180,210 L180,230 L360,230 L360,200 L540,200 L540,225 L720,225 L720,195 L900,195 L900,220 L1080,220 L1080,245 L1260,245 L1260,220 L1440,220 L1440,320 L0,320 Z"
            fill="#14361f"
            opacity="0.9"
          />
        </svg>

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/10" />

        <svg className="absolute bottom-0 left-0 w-full text-stone-50" viewBox="0 0 1440 40" preserveAspectRatio="none">
          <path
            d="M0,0 L0,16 L120,16 L120,28 L240,28 L240,10 L360,10 L360,24 L480,24 L480,14 L600,14 L600,30 L720,30 L720,12 L840,12 L840,26 L960,26 L960,8 L1080,8 L1080,22 L1200,22 L1200,32 L1320,32 L1320,18 L1440,18 L1440,40 L0,40 Z"
            fill="currentColor"
          />
        </svg>

        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-24 sm:pb-28 w-full">
          <p className="text-amber-300 tracking-widest text-xs sm:text-sm font-semibold uppercase mb-4">
            A Farm Sanctuary, Two Hours From Manila
          </p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white leading-tight max-w-3xl mb-6">
            Where the City Exhales
          </h1>
          <p className="text-stone-100/90 text-base sm:text-lg max-w-xl mb-8 leading-relaxed">
            Tucked into rolling rice terraces just two hours from Manila, Ginhawa Farms Resort is a private
            collection of nature villas built for real rest. Come tired from the noise, leave lighter, slower, and
            genuinely at ease.
          </p>
          <button
            onClick={() => scrollToRef(accommodationsRef)}
            className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-semibold px-8 py-4 rounded-full mb-10 transition-colors shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 focus-visible:ring-offset-green-950"
          >
            Check Availability <ArrowRight size={18} />
          </button>

          <div className="bg-white rounded-2xl shadow-2xl p-5 sm:p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-3">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-stone-500 uppercase tracking-wide">Check-In</label>
              <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="border border-stone-200 rounded-lg px-3 py-2.5 text-stone-700 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-stone-500 uppercase tracking-wide">Check-Out</label>
              <input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="border border-stone-200 rounded-lg px-3 py-2.5 text-stone-700 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-stone-500 uppercase tracking-wide">Guests</label>
              <div className="flex items-center justify-between border border-stone-200 rounded-lg px-3 py-2.5">
                <button
                  onClick={() => setGuestCount((g) => Math.max(1, g - 1))}
                  className="text-stone-500 hover:text-orange-600"
                  aria-label="Decrease guests"
                >
                  <Minus size={16} />
                </button>
                <span className="text-sm font-medium text-stone-700 flex items-center gap-1.5">
                  <Users size={14} /> {guestCount}
                </span>
                <button
                  onClick={() => setGuestCount((g) => Math.min(12, g + 1))}
                  className="text-stone-500 hover:text-orange-600"
                  aria-label="Increase guests"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>
            <button
              onClick={() => scrollToRef(accommodationsRef)}
              className="flex items-center justify-center gap-2 bg-green-900 hover:bg-green-950 text-white font-semibold rounded-lg px-4 py-3 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400"
            >
              <Search size={16} /> Search Availability
            </button>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2 mt-4 text-stone-200/90 text-xs sm:text-sm">
            <span className="flex items-center gap-1.5">
              <Check size={14} className="text-amber-300" /> No hidden fees
            </span>
            <span className="flex items-center gap-1.5">
              <Check size={14} className="text-amber-300" /> Instant confirmation
            </span>
            <span className="flex items-center gap-1.5">
              <Check size={14} className="text-amber-300" /> Best-rate guarantee
            </span>
          </div>
        </div>
      </section>

      {/* VALUE PROP */}
      <section ref={experienceRef} className="py-20 sm:py-28 bg-stone-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-orange-600 font-semibold text-sm uppercase tracking-widest mb-3">
              The Ginhawa Experience
            </p>
            <h2 className="font-display text-3xl sm:text-4xl text-green-900">This Is What Ginhawa Feels Like</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {experiencePoints.map((item) => (
              <div key={item.title} className="text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-orange-50 flex items-center justify-center mb-6">
                  <item.icon className="text-orange-600" size={26} />
                </div>
                <h3 className="font-display text-xl text-green-900 mb-3">{item.title}</h3>
                <p className="text-stone-600 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACCOMMODATIONS */}
      <section ref={accommodationsRef} className="py-20 sm:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-orange-600 font-semibold text-sm uppercase tracking-widest mb-3">
              Our Accommodations
            </p>
            <h2 className="font-display text-3xl sm:text-4xl text-green-900">Choose Your Kind of Quiet</h2>
          </div>

          <div className="space-y-20">
            {villas.map((villa, i) => (
              <div
                key={villa.name}
                className={`flex flex-col ${
                  i % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
                } gap-10 lg:gap-16 items-center`}
              >
                <div
                  className={`w-full lg:w-1/2 aspect-video rounded-2xl bg-gradient-to-br ${villa.swatch} flex items-center justify-center relative overflow-hidden shadow-md`}
                >
                  <villa.icon className="text-green-950/25" size={72} strokeWidth={1.25} />
                  <span className="absolute bottom-4 left-4 text-xs font-medium text-stone-700/80 bg-white/60 backdrop-blur-sm px-3 py-1 rounded-full">
                    Photo placeholder, {villa.name}
                  </span>
                </div>

                <div className="w-full lg:w-1/2">
                  <p className="text-amber-800 font-semibold italic mb-2">{villa.tagline}</p>
                  <h3 className="font-display text-2xl sm:text-3xl text-green-900 mb-4">{villa.name}</h3>
                  <p className="text-stone-600 leading-relaxed mb-6">{villa.description}</p>
                  <div className="flex items-center gap-2 text-sm text-stone-500 mb-5">
                    <Users size={16} />
                    Max Capacity: <span className="font-medium text-stone-700">{villa.capacity}</span>
                  </div>
                  <div className="flex flex-wrap gap-x-5 gap-y-3 mb-7">
                    {villa.amenities.map((a) => (
                      <span key={a.label} className="flex items-center gap-1.5 text-sm text-stone-600">
                        <a.icon size={16} className="text-green-700" /> {a.label}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div>
                      <span className="text-stone-400 text-sm block">From</span>
                      <p className="font-display text-2xl text-green-900">
                        ₱{villa.price}
                        <span className="text-sm ml-1">/night</span>
                      </p>
                    </div>
                    <button
                      onClick={() => scrollToRef(bookingRef)}
                      className="inline-flex items-center gap-2 border-2 border-green-900 hover:bg-green-900 hover:text-white text-green-900 font-semibold px-6 py-3 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2"
                    >
                      View Details & Book <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKING FLOW */}
      <section ref={bookingRef} className="py-20 sm:py-28 bg-stone-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-display text-3xl sm:text-4xl text-green-900 mb-3">Simple, Stress-Free Booking</h2>
            <p className="text-stone-600">Three easy steps between you and your next deep breath.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div key={step.num} className="bg-white rounded-2xl p-8 text-center shadow-sm">
                <div className="w-12 h-12 rounded-full bg-green-900 text-white font-display text-lg flex items-center justify-center mx-auto mb-5">
                  {step.num}
                </div>
                <step.icon className="text-orange-600 mx-auto mb-4" size={24} />
                <h3 className="font-display text-lg text-green-900 mb-3">{step.title}</h3>
                <p className="text-stone-600 text-sm leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-14">
            <button
              onClick={() => scrollToRef(heroRef)}
              className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-semibold px-8 py-4 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2"
            >
              Start Your Booking <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section ref={reviewsRef} className="py-20 sm:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-orange-600 font-semibold text-sm uppercase tracking-widest mb-3">Social Proof</p>
            <h2 className="font-display text-3xl sm:text-4xl text-green-900">Guests Who've Found Their Ginhawa</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-stone-50 rounded-2xl p-8 shadow-sm flex flex-col">
                <div className="flex items-center justify-between mb-5">
                  <div className="flex gap-0.5">
                    {[0, 1, 2, 3, 4].map((idx) => (
                      <Star key={idx} size={15} className="text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="text-stone-300" size={26} />
                </div>
                <p className="text-stone-600 italic leading-relaxed mb-6 flex-1">“{t.quote}”</p>
                <p className="font-semibold text-green-900">{t.name}</p>
                <p className="text-stone-500 text-sm">{t.place}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section ref={locationRef} className="py-20 sm:py-28 bg-stone-100">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-orange-600 font-semibold text-sm uppercase tracking-widest mb-3">Location</p>
            <h2 className="font-display text-3xl sm:text-4xl text-green-900 mb-5">Closer Than You Think</h2>
            <p className="text-stone-600 leading-relaxed mb-8">
              Ginhawa Farms Resort sits along Bukal 2 Road in Pila, Laguna, one of the region's oldest heritage
              towns, roughly 90 minutes to two hours from Metro Manila depending on traffic. Follow the road past
              rice fields and centuries-old houses, and watch the skyline fade behind you.
            </p>
            <div className="flex flex-col gap-3 mb-8 text-stone-600 text-sm">
              <span className="flex items-center gap-2">
                <Navigation size={16} className="text-green-700" /> About 90 minutes to 2 hours from Metro Manila
              </span>
              <span className="flex items-center gap-2">
                <Check size={16} className="text-green-700" /> Free on-site parking
              </span>
              <span className="flex items-center gap-2">
                <Check size={16} className="text-green-700" /> Shuttle transfers available on request
              </span>
            </div>
            <a
              href="https://www.google.com/maps/dir//Ginhawa+Farm+and+Resort,+Bukal+2+Road,+Pila,+Laguna/@14.5719296,121.0482688,14z/data=!4m8!4m7!1m0!1m5!1m1!1s0x33bd5927b85214d9:0x7e81d4d694b0da85!2m2!1d121.3722616!2d14.2036678"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-green-900 text-green-900 hover:bg-green-900 hover:text-white font-semibold px-6 py-3 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2"
            >
              Get Directions <MapPin size={16} />
            </a>
          </div>
          <div className="aspect-square rounded-2xl overflow-hidden shadow-xl bg-stone-200">
            <iframe
              title="Ginhawa Farms Resort location map"
              src="https://www.google.com/maps?q=Ginhawa+Farm+and+Resort,+Bukal+2+Road,+Pila,+Laguna&z=15&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* FOOTER + FINAL CTA */}
      <footer className="bg-green-950 text-stone-300">
        <div className="max-w-4xl mx-auto px-6 py-20 text-center border-b border-white/10">
          <h2 className="font-display text-3xl sm:text-4xl text-white mb-5">Your Deep Breath Is Waiting</h2>
          <p className="text-stone-300 max-w-xl mx-auto mb-8 leading-relaxed">
            Life in the city doesn't pause. For a weekend, yours can. Reserve your villa at Ginhawa Farms Resort and
            give yourself permission to just breathe.
          </p>
          <button
            onClick={() => scrollToRef(heroRef)}
            className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-semibold px-8 py-4 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 focus-visible:ring-offset-2 focus-visible:ring-offset-green-950"
          >
            Book Your Stay Now <ArrowRight size={18} />
          </button>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 font-display text-lg text-white mb-3">
              <Leaf className="text-amber-300" size={19} /> Ginhawa Farms
            </div>
            <p className="text-sm text-stone-400 leading-relaxed">
              A farm sanctuary two hours from Manila, built for real rest.
            </p>
          </div>
          <div>
            <p className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">Explore</p>
            <div className="flex flex-col gap-2.5 text-sm">
              <button
                onClick={() => scrollToRef(accommodationsRef)}
                className="text-left text-stone-400 hover:text-white transition-colors"
              >
                Accommodations
              </button>
              <button
                onClick={() => scrollToRef(experienceRef)}
                className="text-left text-stone-400 hover:text-white transition-colors"
              >
                Experiences
              </button>
              <button
                onClick={() => scrollToRef(reviewsRef)}
                className="text-left text-stone-400 hover:text-white transition-colors"
              >
                Reviews
              </button>
              <button
                onClick={() => scrollToRef(heroRef)}
                className="text-left text-stone-400 hover:text-white transition-colors"
              >
                Book Now
              </button>
            </div>
          </div>
          <div>
            <p className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">Contact</p>
            <div className="flex flex-col gap-2.5 text-sm text-stone-400">
              <span className="flex items-center gap-2">
                <Mail size={14} /> stay@ginhawafarms.ph
              </span>
              <span className="flex items-center gap-2">
                <Phone size={14} /> +63 917 000 0000
              </span>
              <span className="flex items-center gap-2">
                <MapPin size={14} /> Bukal 2 Road, Pila, Laguna, PH
              </span>
            </div>
          </div>
          <div>
            <p className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">Follow</p>
            <div className="flex gap-3">
              <span className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer text-xs font-bold tracking-tight">
                IG
              </span>
              <span className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer text-xs font-bold tracking-tight">
                FB
              </span>
              <span className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer text-xs font-bold tracking-tight">
                TT
              </span>
            </div>
            <p className="text-stone-500 text-xs mt-4">@ginhawafarmsresort</p>
          </div>
        </div>

        <div className="border-t border-white/10 py-6 px-6">
          <p className="max-w-7xl mx-auto text-xs text-stone-500 text-center leading-relaxed">
            Free cancellation up to 7 days before check-in, full refund, no questions asked, because peace of mind
            should start before you even arrive.
          </p>
        </div>
      </footer>
    </div>
  );
}
