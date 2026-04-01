import { Phone, MapPin, Clock } from "lucide-react";

export function Hero() {
  return (
    <section
      id="accueil"
      className="relative bg-neutral text-neutral-content overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `repeating-linear-gradient(45deg, #C8963E 0, #C8963E 1px, transparent 0, transparent 50%)`,
        backgroundSize: '20px 20px'
      }} />

      <div className="relative max-w-6xl mx-auto px-4 py-24 md:py-36">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 border border-secondary/40 text-secondary text-xs font-bold uppercase tracking-[0.2em] px-4 py-2 mb-8">
            <span className="w-2 h-2 bg-secondary rounded-full" />
            Barber &amp; Coiffure &bull; Cergy
          </div>

          <h1 className="font-display text-5xl md:text-7xl font-bold leading-[1.1]">
            Coiff&apos;express
            <span className="block text-secondary">Cergy</span>
          </h1>

          <p className="mt-8 text-lg md:text-xl text-neutral-content/60 leading-relaxed max-w-lg">
            Express coiffure &amp; barbier — 24 ans d&apos;exp&eacute;rience.
            Coupe homme, barbe, rasage. Qualit&eacute; et hygi&egrave;ne
            au meilleur prix.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="tel:+33651374442"
              className="inline-flex items-center justify-center gap-2 bg-secondary text-secondary-content px-8 py-4 text-base font-bold uppercase tracking-wider hover:bg-secondary/90 transition-all"
            >
              <Phone className="w-5 h-5" />
              Appeler
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 border-2 border-neutral-content/20 text-neutral-content px-8 py-4 text-base font-bold uppercase tracking-wider hover:border-secondary hover:text-secondary transition-all"
            >
              Nos tarifs
            </a>
          </div>

          {/* Info strip */}
          <div className="mt-14 flex flex-wrap gap-8 text-sm text-neutral-content/40">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-secondary" />
              <span>35 rue du Chemin de Fer, Cergy</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-secondary" />
              <span>Lun–Sam &bull; 9h–19h</span>
            </div>
          </div>
        </div>
      </div>

      {/* Gold accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-secondary" />
    </section>
  );
}
