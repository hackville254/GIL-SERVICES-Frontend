import { useState, useEffect } from "react";
import { Link } from "react-router";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "~/components/ui/navigation-menu";
import { Button } from "~/components/ui/button";
import { Card } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";

import { cn } from "~/lib/utils";

// Variables pour la navigation
const COMPANY_NAME = "GIL SERVICES";
const LOGO_URL = "/logo.png"; // Remplacez par le chemin de votre logo

const SERVICES = [
  {
    title: "Conseil",
    href: "/nos-services#conseil",
    description: "Conseil stratégique et accompagnement personnalisé",
  },
  {
    title: "Accompagnement opérationnel",
    href: "/nos-services#accompagnement-operationnel",
    description: "Support opérationnel pour vos projets",
  },
  {
    title: "Assistance opérationnelle",
    href: "/nos-services#assistance-operationnelle",
    description: "Assistance technique et opérationnelle",
  },
  {
    title: "Formations",
    href: "/nos-services#formations",
    description: "Formations professionnelles adaptées à vos besoins",
  },
];

const SHOP_CATEGORIES = [
  {
    title: "Logiciels",
    href: "/boutique/logiciels",
    description: "Solutions logicielles sur mesure",
  },
  {
    title: "Formations",
    href: "/boutique/formations",
    description: "Formations en développement et IT",
  },
  {
    title: "Templates",
    href: "/boutique/templates",
    description: "Templates et thèmes prêts à l'emploi",
  },
];

const CAREER_SECTIONS = [
  {
    title: "Offres d'Emploi",
    href: "/carriere/offres",
    description: "Découvrez nos postes ouverts",
  },
];

// Navigation items pour mobile
const NAVIGATION_ITEMS = [
  {
    title: "Accueil",
    href: "/",
    hasSubmenu: false,
  },
  {
    title: "À Propos",
    href: "/a-propos",
    hasSubmenu: false,
  },
  {
    title: "Nos Services",
    href: "/nos-services",
    hasSubmenu: true,
    submenu: SERVICES,
  },
  {
    title: "Boutique",
    href: "/boutique",
    hasSubmenu: true,
    submenu: SHOP_CATEGORIES,
  },
  {
    title: "Actualités",
    href: "/actualites",
    hasSubmenu: false,
  },
  {
    title: "Carrière",
    href: "/carriere",
    hasSubmenu: true,
    submenu: CAREER_SECTIONS,
  },
  {
    title: "Contact",
    href: "/contact",
    hasSubmenu: false,
  },
];

function ListItem({
  className,
  title,
  children,
  href,
  ...props
}: {
  className?: string;
  title: string;
  children: React.ReactNode;
  href: string;
}) {
  return (
    <li>
      <NavigationMenuLink>
        <Link
          to={href}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}

// Composant pour les items de menu mobile
function MobileMenuItem({ item, onClose }: { item: any; onClose: () => void }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    if (item.hasSubmenu) {
      setIsOpen(!isOpen);
    } else {
      onClose();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="border-b border-border/10 last:border-b-0"
    >
      <div
        className="flex items-center justify-between p-4 cursor-pointer hover:bg-accent/50 transition-colors"
        onClick={handleToggle}
      >
        <Link
          to={item.href}
          className="flex-1 text-lg font-medium text-foreground"
          onClick={(e) => {
            if (item.hasSubmenu) {
              e.preventDefault();
            } else {
              onClose();
            }
          }}
        >
          {item.title}
        </Link>
        {item.hasSubmenu && (
          <motion.div
            animate={{ rotate: isOpen ? 90 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronRight className="h-5 w-5 text-muted-foreground" />
          </motion.div>
        )}
      </div>
      
      <AnimatePresence>
        {isOpen && item.hasSubmenu && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden bg-muted/30"
          >
            {item.submenu.map((subItem: any, index: number) => (
              <motion.div
                key={subItem.title}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Link
                  to={subItem.href}
                  className="block p-4 pl-8 hover:bg-accent/50 transition-colors"
                  onClick={onClose}
                >
                  <div className="font-medium text-foreground mb-1">
                    {subItem.title}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {subItem.description}
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fermer le menu mobile quand on clique en dehors
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (mobileMenuOpen && !target.closest('.mobile-menu-container')) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [mobileMenuOpen]);

  // Empêcher le scroll du body quand le menu mobile est ouvert
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const isVisible = scrollY > 50;

  return (
    <>
      <header
        className={cn(
          "fixed z-50 w-full border-b transition-all duration-300 bg-background/95 backdrop-blur-md",
          isVisible ? "translate-y-0" : "-translate-y-full"
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 z-50">
              <img
                src={LOGO_URL}
                alt={`${COMPANY_NAME} Logo`}
                className="h-8 w-8 md:h-10 md:w-10"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
              <span className="font-bold text-lg md:text-xl">{COMPANY_NAME}</span>
            </Link>

            {/* Desktop Navigation */}
            <NavigationMenu className="hidden lg:flex">
              <NavigationMenuList>
                {/* Accueil */}
                <NavigationMenuItem>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    <Link to="/">Accueil</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                {/* À Propos */}
                <NavigationMenuItem>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    <Link to="/a-propos">À Propos</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                {/* Nos Services */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger>
                    <Link to="/nos-services">Nos Services</Link>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {SERVICES.map((service) => (
                        <ListItem
                          key={service.title}
                          title={service.title}
                          href={service.href}
                        >
                          {service.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Boutique */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Boutique</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {SHOP_CATEGORIES.map((category) => (
                        <ListItem
                          key={category.title}
                          title={category.title}
                          href={category.href}
                        >
                          {category.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Actualités */}
                <NavigationMenuItem>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    <Link to="/actualites">Actualités</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                {/* Carrière */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Carrière</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {CAREER_SECTIONS.map((section) => (
                        <ListItem
                          key={section.title}
                          title={section.title}
                          href={section.href}
                        >
                          {section.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Contact */}
                <NavigationMenuItem>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    <Link to="/contact">Contact</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden z-50 p-2 hover:bg-accent/50"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <motion.div
                animate={{ rotate: mobileMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </motion.div>
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            
            {/* Mobile Menu */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="mobile-menu-container fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-background/95 backdrop-blur-md border-l border-border z-50 lg:hidden"
            >
              <Card className="h-full border-0 rounded-none bg-transparent">
                {/* Header */}
                <div className="p-6 border-b border-border/20">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <img
                        src={LOGO_URL}
                        alt={`${COMPANY_NAME} Logo`}
                        className="h-8 w-8"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                        }}
                      />
                      <span className="font-bold text-lg">{COMPANY_NAME}</span>
                    </div>
                    <Badge variant="secondary" className="text-xs px-2 py-1">
                      Menu
                    </Badge>
                  </div>
                </div>

                {/* Navigation Items */}
                <div className="flex-1 overflow-y-auto">
                  <nav className="p-2">
                    {NAVIGATION_ITEMS.map((item, index) => (
                      <motion.div
                        key={item.title}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <MobileMenuItem 
                          item={item} 
                          onClose={() => setMobileMenuOpen(false)} 
                        />
                      </motion.div>
                    ))}
                  </nav>
                </div>

                {/* Footer */}
                <div className="p-6 border-t border-border/20">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-center"
                  >
                    <p className="text-sm text-muted-foreground mb-2">
                      Besoin d'aide ?
                    </p>
                    <Button 
                      size="sm" 
                      className="w-full"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <Link to="/contact" className="w-full">
                        Nous contacter
                      </Link>
                    </Button>
                  </motion.div>
                </div>
              </Card>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}