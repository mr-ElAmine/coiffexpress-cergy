import { Megaphone } from "lucide-react";

export function Hiring() {
  return (
    <section id="recrutement" className="py-16 bg-secondary/5 border-y border-secondary/20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="inline-flex items-center justify-center w-14 h-14 bg-secondary text-secondary-content mb-6">
          <Megaphone className="w-6 h-6" />
        </div>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral mb-4">
          Nous recrutons
        </h2>
        <p className="text-neutral/60 text-lg max-w-xl mx-auto mb-8 leading-relaxed">
          Coiff&apos;express Cergy recherche des coiffeurs et barbiers motiv&eacute;s.
          Rejoignez notre &eacute;quipe et partagez votre passion du m&eacute;tier.
        </p>
        <a
          href="tel:+33651374442"
          className="inline-flex items-center justify-center gap-2 bg-secondary text-secondary-content px-8 py-4 text-base font-bold uppercase tracking-wider hover:bg-secondary/90 transition-all"
        >
          Contactez-nous
        </a>
      </div>
    </section>
  );
}
