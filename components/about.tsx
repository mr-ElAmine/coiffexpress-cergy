import { Award, ShieldCheck, Flame, Users } from "lucide-react";

const strengths = [
  {
    icon: Award,
    title: "24 ans d'expérience",
    text: "Plus de deux décennies de maîtrise au service de votre style.",
  },
  {
    icon: ShieldCheck,
    title: "Qualité & Hygiène",
    text: "Matériel stérilisé, normes d'hygiène strictes.",
  },
  {
    icon: Flame,
    title: "Spécialiste barbe",
    text: "Rasage traditionnel, taille et entretien de barbe.",
  },
  {
    icon: Users,
    title: "Toute la famille",
    text: "Homme, femme, enfant — bienvenue à tous.",
  },
];

export function About() {
  return (
    <section id="apropos" className="py-24 bg-base-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <p className="text-secondary font-bold text-xs uppercase tracking-[0.2em] mb-3">
              Qui sommes-nous
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-neutral mb-8 leading-tight">
              Votre barbier &amp; coiffeur &agrave; Cergy
            </h2>
            <p className="text-neutral/60 leading-relaxed text-base mb-5">
              Install&eacute; au coeur de Cergy-Saint-Christophe,
              Coiff&apos;express vous accueille dans un salon professionnel
              et chaleureux. Avec <strong className="text-neutral">24 ans
              d&apos;exp&eacute;rience</strong>, nous ma&icirc;trisons
              l&apos;art de la coupe homme, du rasage traditionnel et de
              l&apos;entretien de barbe.
            </p>
            <p className="text-neutral/60 leading-relaxed text-base">
              La <strong className="text-neutral">qualit&eacute; et
              l&apos;hygi&egrave;ne</strong> sont nos priorit&eacute;s.
              Mat&eacute;riel st&eacute;rilis&eacute;, produits
              professionnels, et des prix accessibles &mdash; shampoing +
              coupe d&egrave;s <strong className="text-secondary">12€</strong>.
            </p>
          </div>

          {/* Right — cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {strengths.map((s) => (
              <div
                key={s.title}
                className="bg-base-100 p-6 border border-base-300 hover:border-secondary/40 transition-colors"
              >
                <s.icon className="w-7 h-7 text-secondary mb-4" />
                <h3 className="font-bold text-neutral text-sm mb-1">
                  {s.title}
                </h3>
                <p className="text-neutral/45 text-sm leading-relaxed">
                  {s.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
