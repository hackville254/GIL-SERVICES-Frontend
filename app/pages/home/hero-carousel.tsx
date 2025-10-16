import { Button } from "~/components/ui/button";
import { Check, ArrowRight, Users, FileText, Building } from "lucide-react";
import { motion } from "framer-motion";

const HERO_DATA = {
  title: "Votre entreprise démarre ici",
  subtitle: "Création & Développement rapide",
  description:
    "Accompagnement complet pour lancer et gérer votre entreprise de toutes tailles.",
  features: [
    { icon: <Building className="h-5 w-5" />, label: "SARL" }, // Société à Responsabilité Limitée
    { icon: <Building className="h-5 w-5" />, label: "SA" }, // Société Anonyme
    { icon: <Building className="h-5 w-5" />, label: "SNC" }, // Société en Nom Collectif
    { icon: <Building className="h-5 w-5" />, label: "SCS" }, // Société en Commandite Simple
    { icon: <Building className="h-5 w-5" />, label: "SAS" }, // Société par Actions Simplifiée
    {
      icon: <Building className="h-5 w-5" />,
      label: "Entreprise Individuelle",
    },
    { icon: <Building className="h-5 w-5" />, label: "Coopérative" },
    { icon: <Building className="h-5 w-5" />, label: "Association" },
    {
      icon: <Building className="h-5 w-5" />,
      label: "Groupement d’Intérêt Economique (GIE)",
    },
    { icon: <Building className="h-5 w-5" />, label: "Succursale étrangère" },
  ],
  cta: "Commencer maintenant",
  image: "/74362.jpg",
  startingPrice: "À partir de 100 000 FCFA",
};

export function HeroCarousel() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-background to-accent/5 min-h-[90vh] relative overflow-hidden mt-8">
        {/* Background Circles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-accent/10 blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-primary/10 blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 py-8 sm:py-12 md:py-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col space-y-4 sm:space-y-6"
            >
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight mt-10 md:mt-0">
                {HERO_DATA.title}
              </h1>
              <p className="text-muted-foreground text-sm sm:text-base md:text-lg">
                {HERO_DATA.description}
              </p>

              {/* Features */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6 mt-4">
                {HERO_DATA.features.map((f, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center text-center p-3 bg-white/10 dark:bg-gray-800/20 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <div className="p-3 bg-accent/20 rounded-full text-accent mb-2">
                      {f.icon}
                    </div>
                    <span className="text-xs sm:text-sm font-semibold">
                      {f.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Starting Price & CTA */}
              <div className="mt-4 text-lg sm:text-xl font-semibold text-accent">
                {HERO_DATA.startingPrice}
              </div>

              <Button className="bg-primary hover:bg-primary/90 text-white px-6 sm:px-8 py-3 sm:py-4 h-auto text-base sm:text-lg font-medium rounded-md w-full sm:w-auto shadow-sm transition-all duration-300">
                {HERO_DATA.cta} <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="relative mt-6 lg:mt-0"
            >
              <div className="relative rounded-lg overflow-hidden shadow-lg border border-accent/20">
                <img
                  src={HERO_DATA.image}
                  alt="Créez votre entreprise"
                  className="w-full h-48 sm:h-64 md:h-72 object-cover"
                />
                <div className="grid grid-cols-3 gap-4 p-4">
                  <div className="bg-primary/10 rounded-md h-16 flex flex-col items-center justify-center text-xs text-primary">
                    <Building className="h-5 w-5 mb-1" />
                    SARL
                  </div>
                  <div className="bg-secondary/10 rounded-md h-16 flex flex-col items-center justify-center text-xs text-secondary">
                    <FileText className="h-5 w-5 mb-1" />
                    Documents
                  </div>
                  <div className="bg-accent/10 rounded-md h-16 flex flex-col items-center justify-center text-xs text-accent">
                    <Users className="h-5 w-5 mb-1" />
                    Conseil
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
