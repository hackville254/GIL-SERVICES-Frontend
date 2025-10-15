import { Button } from "~/components/ui/button";
import { Card, CardContent } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { ArrowRight, X, Clock, Check, ExternalLink, Building, FileText, Users } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

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
  promo: {
    text: "Offre spéciale : Créez votre entreprise à partir de 50 000 FCFA seulement !",
    endDate: new Date(Date.now() + 24 * 60 * 60 * 1000), // 24h à partir de maintenant
    ctaText: "EN SAVOIR PLUS",
    discount: "-30%",
    originalPrice: "70 000 FCFA",
    currentPrice: "50 000",
    period: " FCFA",
    guarantee: "Satisfaction garantie ou remboursé",
    features: ["Accompagnement complet inclus"]
  }
};

export function HeroCarousel() {
  // État pour le compteur de temps restant
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // État pour la bannière promo (visible ou non)
  const [showPromo, setShowPromo] = useState(true);

  // Vérifier si la bannière a déjà été fermée
  useEffect(() => {
    const promoHidden = localStorage.getItem("promoHidden");
    if (promoHidden === "true") {
      setShowPromo(false);
    }
  }, []);

  // Mettre à jour le compteur
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const distance = HERO_DATA.promo.endDate.getTime() - now.getTime();
      
      if (distance < 0) {
        clearInterval(interval);
        return;
      }
      
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
      setTimeRemaining({ days, hours, minutes, seconds });
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);

  // Fermer la bannière et sauvegarder la préférence
  const closePromo = () => {
    setShowPromo(false);
    localStorage.setItem("promoHidden", "true");
  };

  return (
    <div className="relative">
      {/* Bannière promotionnelle */}
      <AnimatePresence>
        {showPromo && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative bg-gradient-to-r from-primary to-secondary text-primary-foreground overflow-hidden"
          >
            <div className="container mx-auto px-4 py-2 flex flex-col sm:flex-row items-center justify-between gap-2">
              <div className="flex items-center space-x-2 w-full sm:w-auto">
                <div className="flex items-center space-x-1 bg-white/20 rounded px-2 py-1">
                  <span className="text-xs sm:text-sm font-bold">{timeRemaining.days}j</span>
                  <span className="text-xs sm:text-sm font-bold">{timeRemaining.hours}h</span>
                  <span className="text-xs sm:text-sm font-bold">{timeRemaining.minutes}m</span>
                  <span className="text-xs sm:text-sm font-bold">{timeRemaining.seconds}s</span>
                </div>
                <span className="text-xs sm:text-sm md:text-base font-medium line-clamp-1 sm:line-clamp-none">
                  {HERO_DATA.promo.text}
                </span>
              </div>
              <div className="flex items-center space-x-2 w-full sm:w-auto justify-end">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-primary-foreground hover:bg-white/20 px-3 py-1 h-auto text-xs sm:text-sm"
                >
                  {HERO_DATA.promo.ctaText}
                  <ExternalLink className="ml-1 h-3 w-3" />
                </Button>
                <button 
                  onClick={closePromo}
                  className="text-primary-foreground hover:bg-white/20 rounded-full p-1"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero principal */}
      <div className="bg-gradient-to-br from-background to-accent/5 min-h-[90vh] relative overflow-hidden mt-3 md:mt-0">
        {/* Éléments décoratifs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-accent/10 blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-primary/10 blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 py-8 sm:py-12 md:py-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Contenu gauche */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col space-y-6"
            >
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                {HERO_DATA.title}
              </h1>
              
              <div className="flex flex-col space-y-4">
                <div className="flex items-center text-foreground">
                  <Check className="h-5 w-5 text-accent mr-2 flex-shrink-0" />
                  <span className="font-medium">
                    <span className="text-accent font-semibold">Création d'entreprise</span> à partir de 50 000 FCFA
                  </span>
                </div>
                
                <div className="flex items-center text-foreground">
                  <Check className="h-5 w-5 text-accent mr-2 flex-shrink-0" />
                  <span className="font-medium">
                    Accompagnement <span className="text-primary font-semibold">juridique et fiscal</span> complet
                  </span>
                </div>
                
                <div className="flex items-center text-foreground">
                  <Check className="h-5 w-5 text-accent mr-2 flex-shrink-0" />
                  <span className="font-medium">
                    <span className="text-secondary font-semibold">Suivi personnalisé</span> pendant 6 mois
                  </span>
                </div>
              </div>
              
              <div className="flex flex-wrap items-end gap-3 mt-4">
                <div className="text-muted-foreground line-through text-lg">{HERO_DATA.promo.originalPrice}</div>
                <div className="flex items-baseline">
                  <span className="text-3xl sm:text-4xl font-bold text-foreground">{HERO_DATA.promo.currentPrice}</span>
                  <span className="text-lg text-muted-foreground">{HERO_DATA.promo.period}</span>
                </div>
                <div className="bg-accent/20 text-accent px-2 py-1 rounded-md text-sm font-semibold">
                  {HERO_DATA.promo.discount}
                </div>
              </div>
              
              <div className="pt-4">
                <Button 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 h-auto text-base sm:text-lg font-medium rounded-md w-full sm:w-auto shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {HERO_DATA.cta}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                
                <div className="flex items-center mt-4 text-muted-foreground">
                  <Check className="h-4 w-4 text-accent mr-2" />
                  <span className="text-sm">{HERO_DATA.promo.guarantee}</span>
                </div>
              </div>
            </motion.div>
            
            {/* Image droite */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="relative mt-8 lg:mt-0"
            >
              <div className="relative rounded-lg overflow-hidden shadow-2xl border-2 border-accent/20">
                <div className="absolute top-0 right-0 left-0 h-8 bg-secondary flex items-center px-2 space-x-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-accent"></div>
                  <div className="mx-auto bg-white/10 rounded text-xs text-white/80 px-2 py-0.5 text-center">
                    Votre Entreprise au Cameroun
                  </div>
                </div>
                
                <div className="pt-8 bg-card">
                  <div className="relative">
                    <img 
                      src={HERO_DATA.image} 
                      alt="Créez votre entreprise" 
                      className="w-full h-48 sm:h-64 md:h-72 object-cover"
                    />
                    
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-card/80 backdrop-blur-sm p-4 rounded-lg shadow-lg text-center">
                        <div className="text-xl sm:text-2xl font-bold text-primary mb-2">Créez votre Entreprise</div>
                        <div className="flex justify-center">
                          <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                            <ArrowRight className="h-4 w-4 text-accent" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 p-4">
                    <div className="bg-primary/10 rounded-md h-16 flex flex-col items-center justify-center text-xs text-primary">
                      <Building className="h-5 w-5 sm:h-6 sm:w-6 mb-1" />
                      <span>SARL</span>
                    </div>
                    <div className="bg-secondary/10 rounded-md h-16 flex flex-col items-center justify-center text-xs text-secondary">
                      <FileText className="h-5 w-5 sm:h-6 sm:w-6 mb-1" />
                      <span>Documents</span>
                    </div>
                    <div className="bg-accent/10 rounded-md h-16 flex flex-col items-center justify-center text-xs text-accent">
                      <Users className="h-5 w-5 sm:h-6 sm:w-6 mb-1" />
                      <span>Conseil</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 sm:-bottom-10 right-4 sm:right-10">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="bg-card rounded-lg shadow-lg p-2 sm:p-3 border border-accent/30"
                >
                  <div className="flex items-center space-x-2">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-accent flex items-center justify-center">
                      <Check className="h-3 w-3 sm:h-4 sm:w-4 text-accent-foreground" />
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-card-foreground">{HERO_DATA.promo.features[0]}</span>
                  </div>
                </motion.div>
              </div>
              
              {/* Badge drapeau camerounais */}
              <div className="absolute -top-2 -right-2 z-10">
                <div className="flex flex-col items-center">
                  <div className="flex space-x-0.5">
                    <div className="w-2 sm:w-3 h-6 sm:h-8 bg-[#007a5e]"></div>
                    <div className="w-2 sm:w-3 h-6 sm:h-8 bg-[#ce1126]"></div>
                    <div className="w-2 sm:w-3 h-6 sm:h-8 bg-[#fcd116]"></div>
                  </div>
                  <div className="bg-card text-card-foreground text-xs font-bold px-1 py-0.5 rounded-sm shadow-md">
                    Cameroun
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
