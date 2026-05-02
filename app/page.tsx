import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { About } from "@/components/about";
import { Gallery } from "@/components/gallery";
import { Hiring } from "@/components/hiring";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HairSalon",
            name: "Coiff'express Cergy",
            description:
              "Express coiffure — 24 ans d'expérience à votre service, la qualité et l'hygiène sont nos atouts",
            address: {
              "@type": "PostalAddress",
              streetAddress: "35 rue du Chemin de Fer",
              addressLocality: "Cergy",
              addressRegion: "Île-de-France",
              postalCode: "95800",
              addressCountry: "FR",
            },
            telephone: "+33651374442",
            geo: {
              "@type": "GeoCoordinates",
              latitude: 49.0386,
              longitude: 2.0758,
            },
            url: "https://www.facebook.com/p/Coiffexpress-cergy-100093586268343/",
            priceRange: "€",
            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
              ],
              opens: "10:00",
              closes: "19:30",
            },
          }),
        }}
      />
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Gallery />
        <Hiring />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
