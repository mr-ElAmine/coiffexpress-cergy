"use client";

import { useState } from "react";
import { Phone, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Accueil", href: "#accueil" },
  { label: "Services", href: "#services" },
  { label: "À propos", href: "#apropos" },
  { label: "Galerie", href: "#galerie" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-neutral text-neutral-content">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#accueil" className="flex items-center gap-3 group">
          <span className="font-display text-xl font-bold tracking-wide text-secondary">
            COIFF&apos;EXPRESS
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium uppercase tracking-wider text-neutral-content/70 hover:text-secondary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Phone CTA */}
        <a
          href="tel:+33651374442"
          className="hidden lg:flex items-center gap-2 bg-secondary text-secondary-content px-5 py-2.5 rounded-none text-sm font-bold uppercase tracking-wider hover:bg-secondary/90 transition-colors"
        >
          <Phone className="w-4 h-4" />
          06 51 37 44 42
        </a>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-3 text-neutral-content"
          aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {mobileOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav className="lg:hidden bg-neutral border-t border-neutral-content/10 px-4 pb-6 pt-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-4 text-neutral-content/70 hover:text-secondary transition-colors text-sm uppercase tracking-wider border-b border-neutral-content/10 last:border-0"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+33651374442"
            className="mt-4 flex items-center justify-center gap-2 bg-secondary text-secondary-content px-6 py-4 text-sm font-bold uppercase tracking-wider"
          >
            <Phone className="w-4 h-4" />
            06 51 37 44 42
          </a>
        </nav>
      )}
    </header>
  );
}
