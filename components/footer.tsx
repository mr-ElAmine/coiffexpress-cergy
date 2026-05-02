import { Phone, MapPin, Navigation } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-neutral text-neutral-content">
      <div className="max-w-6xl mx-auto px-4 py-14">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-bold text-secondary mb-4">
              Coiff&apos;express
            </h3>
            <p className="text-neutral-content/40 text-sm leading-relaxed">
              Express coiffure &amp; barbier — 24 ans d&apos;exp&eacute;rience
              &agrave; votre service. La qualit&eacute; et l&apos;hygi&egrave;ne
              sont nos atouts.
            </p>
            <div className="mt-4 w-12 h-0.5 bg-secondary" />
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-bold text-xs uppercase tracking-[0.2em] text-neutral-content/50 mb-5">
              Navigation
            </h3>
            <nav className="space-y-3">
              {[
                { label: "Accueil", href: "#accueil" },
                { label: "Services", href: "#services" },
                { label: "À propos", href: "#apropos" },
                { label: "Galerie", href: "#galerie" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-neutral-content/50 hover:text-secondary transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-xs uppercase tracking-[0.2em] text-neutral-content/50 mb-5">
              Contact
            </h3>
            <div className="space-y-4 text-sm">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-secondary" />
                <a
                  href="tel:+33651374442"
                  className="text-neutral-content/50 hover:text-secondary transition-colors"
                >
                  06 51 37 44 42
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                <span className="text-neutral-content/50">
                  35 rue du Chemin de Fer
                  <br />
                  95800 Cergy-Saint-Christophe
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Itinéraire button */}
        <div className="mt-10 flex justify-center">
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=49.0386,2.0758"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-secondary text-secondary-content px-8 py-4 text-base font-bold uppercase tracking-wider hover:bg-secondary/90 transition-all"
          >
            <Navigation className="w-5 h-5" />
            Itin&eacute;raire
          </a>
        </div>

        <div className="mt-10 pt-6 border-t border-neutral-content/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-content/25 uppercase tracking-wider">
          <p>&copy; {new Date().getFullYear()} Coiff&apos;express Cergy</p>
          <p>Barbier &amp; Coiffure &bull; Cergy-Saint-Christophe</p>
        </div>
      </div>
    </footer>
  );
}
