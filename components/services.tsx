import { Scissors, Sparkles, Flame, Wind } from "lucide-react";

const services = [
  {
    icon: Scissors,
    title: "Coupe homme",
    description: "Coupe tendance ou classique. Un style adapté à votre personnalité.",
    price: "à partir de 10€",
  },
  {
    icon: Sparkles,
    title: "Shampoing + Coupe",
    description:
      "Shampoing professionnel suivi d'une coupe soignée. Notre formule express.",
    price: "12€",
    highlight: true,
  },
  {
    icon: Flame,
    title: "Barbe & Rasage",
    description:
      "Taille de barbe, rasage traditionnel à l'ancienne. Un résultat net et précis.",
    price: "à partir de 8€",
  },
  {
    icon: Wind,
    title: "Coiffure femme",
    description:
      "Brushing, mise en plis et coloration. Service complet pour toute la famille.",
    price: "Sur devis",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-base-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-secondary font-bold text-xs uppercase tracking-[0.2em] mb-3">
            Nos prestations
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-neutral">
            Services &amp; Tarifs
          </h2>
          <div className="mt-4 w-16 h-0.5 bg-secondary mx-auto" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className={`relative p-6 border transition-all duration-200 hover:-translate-y-1 ${
                service.highlight
                  ? "border-secondary bg-secondary/5 shadow-md"
                  : "border-base-300 bg-base-100 hover:border-neutral/30"
              }`}
            >
              {service.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary text-secondary-content text-[10px] font-bold uppercase tracking-wider px-3 py-1">
                  Populaire
                </span>
              )}
              <div
                className={`w-12 h-12 flex items-center justify-center mb-5 ${
                  service.highlight
                    ? "bg-secondary text-secondary-content"
                    : "bg-neutral text-neutral-content"
                }`}
              >
                <service.icon className="w-5 h-5" />
              </div>
              <h3 className="font-display text-xl font-bold text-neutral mb-2">
                {service.title}
              </h3>
              <p className="text-neutral/50 text-sm leading-relaxed mb-5">
                {service.description}
              </p>
              <p className="font-bold text-secondary text-lg">{service.price}</p>
            </div>
          ))}
        </div>

        <p className="text-center mt-10 text-neutral/40 text-xs uppercase tracking-wider">
          Tarifs indicatifs &bull; Consultez-nous pour un devis personnalis&eacute;
        </p>
      </div>
    </section>
  );
}
