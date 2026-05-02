"use client";

import dynamic from "next/dynamic";
import { Phone, MapPin, Clock, Facebook, Navigation } from "lucide-react";

const MapboxMap = dynamic(
  () => import("./mapbox-map").then((m) => ({ default: m.MapboxMap })),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full bg-base-200 animate-pulse flex items-center justify-center text-neutral/30 text-sm">
        Chargement de la carte…
      </div>
    ),
  }
);

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-base-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-secondary font-bold text-xs uppercase tracking-[0.2em] mb-3">
            Nous trouver
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-neutral">
            Contact &amp; Horaires
          </h2>
          <div className="mt-4 w-16 h-0.5 bg-secondary mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Info cards */}
          <div className="space-y-5">
            {/* Phone */}
            <div className="flex items-start gap-4 bg-base-100 p-6 border border-base-300 hover:border-secondary/40 transition-colors">
              <div className="w-12 h-12 flex items-center justify-center bg-neutral text-neutral-content shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-neutral text-sm uppercase tracking-wider mb-1">
                  T&eacute;l&eacute;phone
                </h3>
                <a
                  href="tel:+33651374442"
                  className="text-secondary font-bold text-xl hover:underline"
                >
                  06 51 37 44 42
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-4 bg-base-100 p-6 border border-base-300 hover:border-secondary/40 transition-colors">
              <div className="w-12 h-12 flex items-center justify-center bg-neutral text-neutral-content shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-neutral text-sm uppercase tracking-wider mb-1">
                  Adresse
                </h3>
                <p className="text-neutral/60 text-base">
                  35 rue du Chemin de Fer
                  <br />
                  95800 Cergy-Saint-Christophe
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-4 bg-base-100 p-6 border border-base-300 hover:border-secondary/40 transition-colors">
              <div className="w-12 h-12 flex items-center justify-center bg-neutral text-neutral-content shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-neutral text-sm uppercase tracking-wider mb-2">
                  Horaires
                </h3>
                <table className="text-sm">
                  <tbody>
                    <tr>
                      <td className="pr-6 py-1 text-neutral/50">Lundi – Dimanche</td>
                      <td className="font-bold text-neutral">10h – 19h30</td>
                    </tr>
                    <tr>
                      <td colSpan={2} className="pt-2 text-secondary font-bold text-xs uppercase tracking-wider">
                        Sans rendez-vous
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/p/Coiffexpress-cergy-100093586268343/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-base-100 p-6 border border-base-300 hover:border-[#1877F2]/40 hover:shadow-md transition-all group"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-[#1877F2] text-white shrink-0">
                <Facebook className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-neutral group-hover:text-[#1877F2] transition-colors">
                  Suivez-nous sur Facebook
                </h3>
                <p className="text-neutral/40 text-sm">
                  Photos, actualit&eacute;s et avis clients
                </p>
              </div>
            </a>

            {/* Itinéraire */}
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=49.0386,2.0758"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-secondary text-secondary-content p-6 hover:bg-secondary/90 transition-all group"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-neutral text-neutral-content shrink-0">
                <Navigation className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold group-hover:underline">
                  Itin&eacute;raire
                </h3>
                <p className="text-secondary-content/70 text-sm">
                  Ouvrir dans Google Maps
                </p>
              </div>
            </a>
          </div>

          {/* Map */}
          <div className="border border-base-300 h-[400px] md:min-h-[500px]">
            <MapboxMap />
          </div>
        </div>
      </div>
    </section>
  );
}
