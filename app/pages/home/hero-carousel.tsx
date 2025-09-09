import { Button } from "~/components/ui/button";
import { Card, CardContent } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const HERO_DATA = {
  title: "Votre succès entrepreneurial commence ici",
  subtitle: "Création & Développement d'Entreprise",
  description:
    "Experts en création d'etablissement, de SARL, SA et autres structures juridiques. Notre accompagnement va au-delà de la création : gestion, développement et optimisation de votre entreprise pour une croissance durable.",
  features: [
    "Création SARL/SA en 72h",
    "Support post-création",
    "Expertise juridique & fiscale",
  ],
  cta: "Lancer mon entreprise",
  image: "/74362.jpg",
};

export function HeroCarousel() {
  return (
    <Card className="min-h-[90vh] border-0 rounded-none bg-gradient-to-br from-background via-muted to-muted/50 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(var(--primary),0.15)_0%,transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(var(--secondary),0.15)_0%,transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(var(--accent),0.15)_0%,transparent_60%)]" />
      </div>
      <CardContent className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 relative">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Left Content */}
          <div className="flex flex-col space-y-6 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Badge
                variant="secondary"
                className="text-xs font-medium bg-primary/10 text-primary px-4 py-1.5 backdrop-blur-sm"
              >
                {HERO_DATA.subtitle}
              </Badge>
            </motion.div>

            <motion.h1
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {HERO_DATA.title}
            </motion.h1>

            <motion.p
              className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {HERO_DATA.description}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 w-full sm:w-auto text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {HERO_DATA.cta}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              <div className="flex gap-3 flex-wrap justify-center lg:justify-start">
                {HERO_DATA.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                  >
                    <Badge
                      variant="outline"
                      className="bg-background/90 border-primary/20 text-primary text-xs px-3 py-1"
                    >
                      {feature}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Image */}
          <motion.div
            className="relative h-[300px] sm:h-[400px] lg:h-[500px] w-full"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-muted/50 to-background/30 rounded-2xl backdrop-blur-sm" />
            <Card className="relative bg-background/40 border-2 border-primary/10 overflow-hidden h-full rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-primary/5 to-secondary/10" />
              <CardContent className="p-0 h-full">
                <div className="relative h-full w-full overflow-hidden rounded-xl">
                  <img
                    src={HERO_DATA.image}
                    alt="Hero illustration"
                    className="w-full h-full object-cover transform hover:scale-105 transition-all duration-700 ease-out"
                    loading="eager"
                  />
                  <div className="absolute inset-0 border-4 border-background/10 rounded-xl" />
                </div>
              </CardContent>
            </Card>
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-secondary/10 blur-3xl -z-10" />
          </motion.div>
        </motion.div>
      </CardContent>
    </Card>
  );
}
