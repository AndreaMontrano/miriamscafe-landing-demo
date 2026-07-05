import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Coffee,
  Instagram,
  MapPin,
  Phone,
  MessageCircle,
  Star,
  Leaf,
  Croissant,
  Wine,
  ArrowRight,
  Navigation,
  Clock,
  ChevronDown,
  HelpCircle,
} from "lucide-react";
import { menu as menuData } from "@/data/menu";


import heroImg from "@/assets/hero-brunch.jpg";
import matchaImg from "@/assets/gallery-strawberry-matcha.jpg";
import cappuccinoImg from "@/assets/gallery-cappuccino.jpg";
import croissantImg from "@/assets/gallery-croissant.jpg";
import brunchImg from "@/assets/gallery-brunch.jpg";
import coldbrewImg from "@/assets/gallery-coldbrew.jpg";
import interiorImg from "@/assets/gallery-interior.jpg";

export const Route = createFileRoute("/")({
  component: Landing,
});

const WHATSAPP = "https://wa.me/393927407021?text=Ciao%20Miriam's%20Caf%C3%A8!%20Vorrei%20info%20o%20prenotare%20un%20tavolo.";
const MAPS = "https://www.google.com/maps/search/?api=1&query=Miriam%27s+Caf%C3%A8+Piazza+Cavallero+11%2Fa+Rivoli";
const INSTAGRAM = "https://www.instagram.com/miriamscaferivoli/";
const PHONE = "tel:+393927407021";

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <TopBar />
      <Hero />
      <ConceptSection />
      <MenuSection />
      <BrunchSection />
      <ReviewsSection />
      <GallerySection />
      <LocationSection />
      <FinalCTA />
      <Footer />
      <StickyWhatsapp />
    </div>
  );
}

/* ---------------- Top Bar ---------------- */
function TopBar() {
  return (
    <div className="hidden md:block bg-coffee text-cream">
      <div className="container-page flex items-center justify-between py-2 text-xs">
        <div className="flex items-center gap-5 opacity-90">
          <span className="flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5" /> Piazza Cavallero 11/a, Rivoli (TO)
          </span>
          <a href={PHONE} className="flex items-center gap-1.5 hover:text-strawberry-soft transition-colors">
            <Phone className="h-3.5 w-3.5" /> +39 3927407021
          </a>
        </div>
        <div className="flex items-center gap-4">
          <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-strawberry-soft transition-colors">
            <Instagram className="h-3.5 w-3.5" /> Instagram
          </a>
          <a href={MAPS} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 rounded-full bg-cream/15 px-3 py-1 hover:bg-cream/25 transition-colors">
            <Navigation className="h-3.5 w-3.5" /> Indicazioni
          </a>
        </div>
      </div>
    </div>
  );
}

/* ---------------- Hero ---------------- */
function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-strawberry-soft/60 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute top-40 -right-20 h-80 w-80 rounded-full bg-matcha-soft/60 blur-3xl" aria-hidden />

      <nav className="container-page flex items-center justify-between py-5">
        <a href="#" className="flex items-center gap-2">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-coffee text-cream">
            <Coffee className="h-5 w-5" />
          </span>
          <span className="font-display text-xl font-semibold tracking-tight">Miriam's Cafè</span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm text-coffee-soft">
          <a href="#concept" className="hover:text-coffee transition-colors">Concept</a>
          <a href="#menu" className="hover:text-coffee transition-colors">Menù</a>
          <a href="#brunch" className="hover:text-coffee transition-colors">Brunch</a>
          <a href="#gallery" className="hover:text-coffee transition-colors">Gallery</a>
          <a href="#dove" className="hover:text-coffee transition-colors">Dove siamo</a>
        </div>
        <a href={WHATSAPP} target="_blank" rel="noreferrer" className="hidden sm:inline-flex btn-accent !py-2.5 !px-4 !text-sm">
          <MessageCircle className="h-4 w-4" /> WhatsApp
        </a>
      </nav>

      <div className="container-page grid lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-16 items-center pt-6 pb-16 lg:pb-24">
        <div className="fade-up">
          <span className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-strawberry" /> Specialty Coffee Lab · Rivoli
          </span>
          <h1 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-coffee">
            Specialty coffee, brunch e{" "}
            <span className="relative inline-block">
              <span className="italic text-strawberry">coccole in tazza</span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none" preserveAspectRatio="none" aria-hidden>
                <path d="M2 8 Q 50 2, 100 6 T 198 5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="text-strawberry/60" fill="none"/>
              </svg>
            </span>{" "}
            a Rivoli.
          </h1>
          <p className="mt-6 text-lg text-coffee-soft max-w-xl leading-relaxed">
            Da <strong className="text-coffee font-semibold">Miriam's Cafè</strong> ogni pausa diventa un piccolo rito: caffè speciali, brunch colorati, matcha latte, colazioni golose e aperitivi nel cuore di Rivoli.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn-accent">
              <MessageCircle className="h-4 w-4" /> Prenota su WhatsApp
            </a>
            <a href="#menu" className="btn-ghost">
              Scopri il menù <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="mt-8 flex items-center gap-2 text-sm text-coffee-soft">
            <MapPin className="h-4 w-4 text-strawberry" />
            Piazza Cavallero 11/a — Rivoli (TO)
          </div>
        </div>

        <div className="relative">
          <div className="relative rounded-[2.5rem] overflow-hidden shadow-[0_40px_80px_-30px_rgba(74,45,20,0.35)] border border-coffee/10">
            <img
              src={heroImg}
              alt="Tavolo brunch da Miriam's Cafè con cappuccino, matcha latte, croissant e pancake"
              width={1600}
              height={1200}
              className="w-full h-[420px] sm:h-[520px] object-cover"
            />
          </div>
          {/* Floating badges */}
          <div className="absolute -left-4 sm:-left-8 top-8 soft-card !p-3 !rounded-2xl float-slow flex items-center gap-2 max-w-[190px]">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-matcha-soft">
              <Leaf className="h-4 w-4 text-matcha" />
            </span>
            <div>
              <div className="text-[11px] uppercase tracking-wider text-coffee-soft">Novità</div>
              <div className="text-sm font-semibold">Strawberry Matcha</div>
            </div>
          </div>
          <div className="absolute -right-3 sm:-right-6 bottom-8 soft-card !p-3 !rounded-2xl float-slow [animation-delay:2s] flex items-center gap-2">
            <div className="flex -space-x-1">
              {[0,1,2,3,4].map(i => (
                <Star key={i} className="h-4 w-4 fill-gold text-gold" />
              ))}
            </div>
            <div className="text-sm font-semibold">Coffee lover ✓</div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Concept ---------------- */
function ConceptSection() {
  const cards = [
    {
      icon: Coffee,
      title: "Specialty coffee",
      text: "Espresso, cappuccini, cold brew, ice latte e proposte stagionali per veri coffee lover.",
      color: "bg-coffee text-cream",
      accent: "bg-cream/15",
    },
    {
      icon: Croissant,
      title: "Brunch & colazioni",
      text: "Croissant, brioches, panini, omelette e piatti dolci/salati per iniziare bene la giornata.",
      color: "bg-strawberry-soft text-coffee",
      accent: "bg-strawberry/20",
    },
    {
      icon: Wine,
      title: "Matcha, latte speciali & aperitivi",
      text: "Strawberry matcha latte, bevande vegetali, cocktail e drink creativi per una pausa originale.",
      color: "bg-matcha-soft text-coffee",
      accent: "bg-matcha/25",
    },
  ];

  return (
    <section id="concept" className="py-20 sm:py-28">
      <div className="container-page">
        <div className="max-w-2xl">
          <span className="eyebrow">Il concept</span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl leading-tight text-coffee">
            Non è solo un caffè. <br className="hidden sm:block" />
            <span className="italic text-strawberry">È la tua pausa fatta bene.</span>
          </h2>
          <p className="mt-5 text-coffee-soft text-lg leading-relaxed">
            Miriam's Cafè è il posto in cui iniziare la giornata con un cappuccino fatto come si deve, fermarsi per un brunch colorato, provare uno specialty coffee o concedersi un aperitivo diverso dal solito. Un piccolo spazio a Rivoli pensato per chi ama le cose buone, belle e curate.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {cards.map((c) => (
            <div key={c.title} className={`rounded-[2rem] p-7 ${c.color} relative overflow-hidden group transition-transform hover:-translate-y-1`}>
              <div className={`absolute -right-8 -top-8 h-32 w-32 rounded-full ${c.accent} blur-2xl opacity-70`} aria-hidden />
              <span className={`relative grid h-12 w-12 place-items-center rounded-2xl ${c.accent}`}>
                <c.icon className="h-6 w-6" />
              </span>
              <h3 className="relative mt-5 font-display text-2xl font-semibold">{c.title}</h3>
              <p className="relative mt-3 text-sm/relaxed opacity-90">{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Menu grid ---------------- */
function MenuSection() {
  const [active, setActive] = useState(0);
  const category = menuData[active];

  return (
    <section id="menu" className="py-20 sm:py-28 bg-milk/70">
      <div className="container-page">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <span className="eyebrow">Il menù</span>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl text-coffee">
              Scegli la tua <span className="italic text-strawberry">coccola</span>.
            </h2>
          </div>
          <p className="text-coffee-soft max-w-md">
            Tocca una categoria per scoprire tutti gli item disponibili con descrizione e prezzo.
          </p>
        </div>

        {/* Category tabs */}
        <div className="mt-10 flex gap-2 overflow-x-auto pb-2 -mx-5 px-5 sm:mx-0 sm:px-0 sm:flex-wrap scrollbar-none">
          {menuData.map((c, i) => {
            const isActive = i === active;
            return (
              <button
                key={c.name}
                onClick={() => setActive(i)}
                className={`shrink-0 rounded-full px-4 py-2.5 text-sm font-semibold transition-all border ${
                  isActive
                    ? "bg-coffee text-cream border-coffee shadow-[0_10px_24px_-14px_rgba(74,45,20,0.6)]"
                    : "bg-milk text-coffee border-coffee/15 hover:border-coffee/40 hover:-translate-y-0.5"
                }`}
              >
                {c.name}
                <span
                  className={`ml-2 inline-flex items-center justify-center rounded-full text-[10px] font-bold px-1.5 min-w-5 h-5 ${
                    isActive ? "bg-cream/20 text-cream" : "bg-coffee/8 text-coffee-soft"
                  }`}
                >
                  {c.items.length}
                </span>
              </button>
            );
          })}
        </div>

        {/* Items list */}
        <div key={category.name} className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 fade-up">
          {category.items.map((it) => (
            <article
              key={it.name}
              className="soft-card group hover:-translate-y-1 transition-transform flex flex-col"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-display text-lg font-semibold text-coffee leading-snug">
                  {it.name}
                </h3>
                <span className="shrink-0 rounded-full bg-strawberry text-milk px-3 py-1 text-sm font-bold whitespace-nowrap">
                  € {it.price}
                </span>
              </div>
              {it.desc && (
                <p className="mt-3 text-sm text-coffee-soft leading-relaxed whitespace-pre-line">
                  {it.desc}
                </p>
              )}
              {it.tags.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {it.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] uppercase tracking-wider rounded-full px-2 py-1 font-semibold bg-matcha-soft text-coffee"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>

        <p className="mt-8 text-xs text-coffee-soft/80">
          Prezzi indicativi. Menù completo, disponibilità e allergeni aggiornati in locale.
        </p>
      </div>
    </section>
  );
}


/* ---------------- Brunch SEO ---------------- */
function BrunchSection() {
  const tags = ["Brunch", "Specialty Coffee", "Matcha", "Vegan options", "Aperitivo", "Rivoli"];
  return (
    <section id="brunch" className="py-20 sm:py-28">
      <div className="container-page grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative order-2 lg:order-1">
          <div className="rounded-[2.5rem] overflow-hidden border border-coffee/10 shadow-[0_30px_60px_-30px_rgba(74,45,20,0.35)]">
            <img src={brunchImg} alt="Brunch colorato a Rivoli con uova, avocado e pomodorini" width={900} height={900} loading="lazy" className="w-full h-[420px] object-cover" />
          </div>
          <div className="absolute -bottom-5 -right-3 sm:-right-8 soft-card !rounded-2xl !p-4 max-w-[220px]">
            <div className="flex items-center gap-2 text-xs text-coffee-soft">
              <Clock className="h-3.5 w-3.5" /> Weekend vibes
            </div>
            <div className="mt-1 font-display text-lg font-semibold text-coffee">Ogni giorno, non solo il sabato.</div>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <span className="eyebrow">Brunch a Rivoli</span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl text-coffee leading-tight">
            Il brunch a Rivoli che sa di <span className="italic text-strawberry">weekend</span>, anche in settimana.
          </h2>
          <p className="mt-5 text-lg text-coffee-soft leading-relaxed">
            Che tu stia cercando una colazione lenta, un pranzo leggero o un brunch da fotografare prima ancora di assaggiarlo, Miriam's Cafè ti aspetta con proposte dolci e salate, bevande speciali e un'atmosfera allegra e rilassata.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {tags.map((t) => (
              <span key={t} className="chip">#{t}</span>
            ))}
          </div>
          <div className="mt-8">
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn-primary">
              Vieni a provarlo <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Reviews ---------------- */
function ReviewsSection() {
  const reviews = [
    { text: "Cappuccino fantastico e croissant buonissimo.", name: "Giulia" },
    { text: "Il mio bar preferito a Rivoli.", name: "Marco" },
    { text: "Perfetto sia per la colazione che per l'aperitivo.", name: "Sara" },
    { text: "Personale gentile, atmosfera accogliente e servizio veloce.", name: "Luca" },
  ];

  return (
    <section className="py-20 sm:py-28 bg-coffee text-cream relative overflow-hidden">
      <div className="pointer-events-none absolute -top-20 -right-20 h-80 w-80 rounded-full bg-strawberry/25 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-matcha/20 blur-3xl" aria-hidden />
      <div className="container-page relative">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-cream/15 text-cream px-3 py-1 text-xs font-semibold uppercase tracking-wider">
            <Star className="h-3.5 w-3.5 fill-gold text-gold" /> Social proof
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl">
            Chi passa da Miriam's, <span className="italic text-strawberry-soft">torna volentieri.</span>
          </h2>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {reviews.map((r) => (
            <blockquote key={r.name} className="rounded-3xl bg-cream/10 backdrop-blur-sm p-6 border border-cream/15 hover:bg-cream/15 transition-colors">
              <div className="flex gap-0.5">
                {[0,1,2,3,4].map(i => <Star key={i} className="h-4 w-4 fill-gold text-gold" />)}
              </div>
              <p className="mt-4 text-cream font-display text-lg leading-snug">"{r.text}"</p>
              <footer className="mt-4 text-xs text-cream/70 uppercase tracking-wider">— {r.name}</footer>
            </blockquote>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-cream/75">
          Valutazioni positive su <strong className="text-cream">Google</strong>, <strong className="text-cream">Facebook</strong> e <strong className="text-cream">Tripadvisor</strong>.
        </p>
      </div>
    </section>
  );
}

/* ---------------- Gallery ---------------- */
function GallerySection() {
  const shots = [
    { src: matchaImg, alt: "Strawberry matcha latte" },
    { src: cappuccinoImg, alt: "Cappuccino con latte art" },
    { src: croissantImg, alt: "Croissant e brioches" },
    { src: brunchImg, alt: "Tavolo brunch" },
    { src: coldbrewImg, alt: "Ice latte e cold brew" },
    { src: interiorImg, alt: "Interno del locale" },
  ];
  return (
    <section id="gallery" className="py-20 sm:py-28">
      <div className="container-page">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div className="max-w-xl">
            <span className="eyebrow"><Instagram className="h-3.5 w-3.5" /> Instagram vibes</span>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl text-coffee leading-tight">
              Colori, tazze e <span className="italic text-strawberry">momenti da condividere</span>.
            </h2>
            <p className="mt-4 text-coffee-soft">
              Da Miriam's anche l'occhio vuole la sua parte: tazze colorate, drink speciali, brunch curati e dettagli pensati per rendere ogni pausa più bella.
            </p>
          </div>
          <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="btn-primary self-start">
            <Instagram className="h-4 w-4" /> Seguici su Instagram
          </a>
        </div>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {shots.map((s, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-3xl border border-coffee/10 group ${
                i === 0 ? "col-span-2 md:col-span-1 md:row-span-2 aspect-square md:aspect-auto" : "aspect-square"
              }`}
            >
              <img
                src={s.src}
                alt={s.alt}
                loading="lazy"
                width={900}
                height={900}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-coffee/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Location ---------------- */
function LocationSection() {
  return (
    <section id="dove" className="py-20 sm:py-28 bg-beige/60">
      <div className="container-page grid lg:grid-cols-2 gap-10 items-stretch">
        <div className="soft-card !p-8 sm:!p-10 flex flex-col">
          <span className="eyebrow"><MapPin className="h-3.5 w-3.5" /> Dove siamo</span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl text-coffee leading-tight">
            Ti aspettiamo in <span className="italic text-strawberry">Piazza Cavallero</span>.
          </h2>
          <p className="mt-5 text-coffee-soft text-lg leading-relaxed">
            Siamo a Rivoli, in Piazza Cavallero 11/a: il posto giusto per una colazione prima della giornata, una pausa caffè, un brunch con amici o un aperitivo diverso dal solito.
          </p>

          <div className="mt-8 space-y-3">
            <div className="flex items-start gap-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-strawberry-soft text-strawberry">
                <MapPin className="h-5 w-5" />
              </span>
              <div>
                <div className="text-xs uppercase tracking-wider text-coffee-soft">Indirizzo</div>
                <div className="font-semibold text-coffee">Piazza Cavallero 11/a, 10098 Rivoli TO</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-matcha-soft text-matcha">
                <Phone className="h-5 w-5" />
              </span>
              <div>
                <div className="text-xs uppercase tracking-wider text-coffee-soft">Telefono</div>
                <a href={PHONE} className="font-semibold text-coffee hover:text-strawberry transition-colors">+39 3927407021</a>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href={MAPS} target="_blank" rel="noreferrer" className="btn-primary">
              <Navigation className="h-4 w-4" /> Apri su Google Maps
            </a>
            <a href={PHONE} className="btn-ghost">
              <Phone className="h-4 w-4" /> Chiama ora
            </a>
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn-accent">
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </div>
        </div>

        {/* Map embed */}
        <div className="relative rounded-[2rem] overflow-hidden border border-coffee/10 min-h-[380px] shadow-[0_30px_60px_-30px_rgba(74,45,20,0.35)]">
          <iframe
            title="Mappa Miriam's Cafè Rivoli"
            src="https://www.google.com/maps?q=Piazza+Cavallero+11,+10098+Rivoli+TO&output=embed"
            className="absolute inset-0 h-full w-full grayscale-[15%]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}

/* ---------------- Final CTA ---------------- */
function FinalCTA() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-strawberry text-milk p-10 sm:p-16 text-center">
          <div className="pointer-events-none absolute -top-16 -left-10 h-64 w-64 rounded-full bg-gold/40 blur-3xl" aria-hidden />
          <div className="pointer-events-none absolute -bottom-16 -right-10 h-64 w-64 rounded-full bg-coffee/40 blur-3xl" aria-hidden />
          <span className="relative inline-flex items-center gap-2 rounded-full bg-milk/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider">
            <Coffee className="h-3.5 w-3.5" /> A dopo da Miriam's
          </span>
          <h2 className="relative mt-5 font-display text-4xl sm:text-5xl lg:text-6xl leading-tight max-w-3xl mx-auto">
            Hai già scelto la tua <em className="italic">prossima pausa?</em>
          </h2>
          <p className="relative mt-5 text-milk/90 text-lg max-w-2xl mx-auto">
            Che sia un cappuccino, un brunch o uno strawberry matcha latte, Miriam's Cafè ti aspetta a Rivoli con qualcosa di buono da farti scoprire.
          </p>
          <div className="relative mt-8 flex flex-wrap justify-center gap-3">
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-milk text-coffee px-6 py-3 font-semibold shadow-lg hover:-translate-y-0.5 transition-transform">
              <MessageCircle className="h-4 w-4" /> Scrivici su WhatsApp
            </a>
            <a href={MAPS} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-milk/50 text-milk px-6 py-3 font-semibold hover:bg-milk/10 transition-colors">
              <Navigation className="h-4 w-4" /> Apri la mappa
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Footer ---------------- */
function Footer() {
  return (
    <footer className="bg-coffee text-cream/80 pt-14 pb-24 md:pb-14">
      <div className="container-page grid md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-cream/15">
              <Coffee className="h-5 w-5 text-cream" />
            </span>
            <span className="font-display text-xl font-semibold text-cream">Miriam's Cafè</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed">
            Specialty Coffee Lab & Brunch nel cuore di Rivoli. Coccole in tazza, ogni giorno.
          </p>
        </div>
        <div className="text-sm space-y-2">
          <div className="text-cream font-semibold uppercase tracking-wider text-xs">Contatti</div>
          <div className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Piazza Cavallero 11/a, Rivoli (TO)</div>
          <a href={PHONE} className="flex items-center gap-2 hover:text-strawberry-soft transition-colors"><Phone className="h-4 w-4" /> +39 3927407021</a>
          <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-strawberry-soft transition-colors"><Instagram className="h-4 w-4" /> @miriamscaferivoli</a>
        </div>
        <div className="text-sm">
          <div className="text-cream font-semibold uppercase tracking-wider text-xs">Vieni a trovarci</div>
          <p className="mt-2">Colazione · Brunch · Specialty coffee · Aperitivo</p>
          <p className="mt-4 text-xs text-cream/50">© {new Date().getFullYear()} Miriam's Cafè — Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  );
}

/* ---------------- Sticky WhatsApp (mobile) ---------------- */
function StickyWhatsapp() {
  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noreferrer"
      className="md:hidden fixed bottom-4 left-4 right-4 z-50 inline-flex items-center justify-center gap-2 rounded-full bg-strawberry text-milk px-5 py-3.5 font-semibold shadow-[0_20px_40px_-15px_rgba(200,60,90,0.6)] active:scale-95 transition-transform"
      aria-label="Scrivici su WhatsApp"
    >
      <MessageCircle className="h-5 w-5" /> Scrivici su WhatsApp
    </a>
  );
}
