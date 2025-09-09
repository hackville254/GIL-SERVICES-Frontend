import { useState, useEffect } from "react"
import { Link } from "react-router"
import { Menu, X } from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "~/components/ui/navigation-menu"

import { cn } from "~/lib/utils"

// Variables pour la navigation
const COMPANY_NAME = "GIL SERVICES"
const LOGO_URL = "/logo.png" // Remplacez par le chemin de votre logo

const SERVICES = [
  {
    title: "Conseil",
    href: "/nos-services#conseil",
    description: "Conseil stratégique et accompagnement personnalisé"
  },
  {
    title: "Accompagnement opérationnel",
    href: "/nos-services#accompagnement-operationnel",
    description: "Support opérationnel pour vos projets"
  },
  {
    title: "Assistance opérationnelle",
    href: "/nos-services#assistance-operationnelle",
    description: "Assistance technique et opérationnelle"
  },
  {
    title: "Formations",
    href: "/nos-services#formations",
    description: "Formations professionnelles adaptées à vos besoins"
  }
]

const SHOP_CATEGORIES = [
  {
    title: "Logiciels",
    href: "/boutique/logiciels",
    description: "Solutions logicielles sur mesure"
  },
  {
    title: "Formations",
    href: "/boutique/formations",
    description: "Formations en développement et IT"
  },
  {
    title: "Templates",
    href: "/boutique/templates",
    description: "Templates et thèmes prêts à l'emploi"
  }
]

const NEWS_SECTIONS = [
  {
    title: "Blog Technique",
    href: "/actualites/blog",
    description: "Articles sur les dernières technologies"
  },
  {
    title: "Actualités Entreprise",
    href: "/actualites/entreprise",
    description: "Nouvelles de notre entreprise"
  },
  {
    title: "Études de Cas",
    href: "/actualites/etudes-cas",
    description: "Retours d'expérience sur nos projets"
  }
]

const CAREER_SECTIONS = [
  {
    title: "Offres d'Emploi",
    href: "/carriere/offres",
    description: "Découvrez nos postes ouverts"
  },
  {
    title: "Stages",
    href: "/carriere/stages",
    description: "Opportunités de stages"
  },
  {
    title: "Culture d'Entreprise",
    href: "/carriere/culture",
    description: "Découvrez notre environnement de travail"
  }
]

function ListItem({
  className,
  title,
  children,
  href,
  ...props
}: {
  className?: string
  title: string
  children: React.ReactNode
  href: string
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
  )
}

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isVisible = scrollY > 50

  return (
    <header className={cn(
      "fixed z-50 w-full border-b transition-all duration-300 bg-background",
      isVisible 
        ? "translate-y-0" 
        : "-translate-y-full"
    )}>
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src={LOGO_URL} 
              alt={`${COMPANY_NAME} Logo`} 
              className="h-8 w-8 md:h-12 md:w-12"
              onError={(e) => {
                e.currentTarget.style.display = 'none'
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
                <NavigationMenuTrigger>Actualités</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {NEWS_SECTIONS.map((section) => (
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
        </div>
      </div>
    </header>
  )
}