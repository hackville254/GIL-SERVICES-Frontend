import { Link } from "react-router"
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

// Variables pour le footer
const COMPANY_INFO = {
  name: "GIL SERVICES",
  tagline: "Services de Gestion, Conseil & Assistance",
  description: "Spécialisée dans la Comptabilité et Gestion d'Entreprise, motivée par la perfection.",
  address: "Deido Grand Moulin, Douala Cameroun",
  email: "contact@gil-services.com",
  phone: "+237 657 842 066",
}

const FOOTER_LINKS = {
  services: [
    { title: "Conseil", href: "/nos-services#conseil" },
    { title: "Accompagnement opérationnel", href: "/nos-services#accompagnement-operationnel" },
    { title: "Assistance opérationnelle", href: "/nos-services#assistance-operationnelle" },
    { title: "Formations", href: "/nos-services#formations" },
  ],
  company: [
    { title: "À Propos", href: "/a-propos" },
    { title: "Contact", href: "/contact" },
    { title: "Actualités", href: "/actualites" },
    { title: "Carrière", href: "/carriere" },
  ],
  legal: [
    { title: "Mentions Légales", href: "/legal" },
    { title: "Politique de Confidentialité", href: "/privacy" },
    { title: "Conditions Générales", href: "/terms" },
  ],
}

const SOCIAL_LINKS = [
  { name: "Facebook", icon: Facebook, url: "https://facebook.com/gilentreprise" },
  { name: "Twitter", icon: Twitter, url: "https://twitter.com/gilentreprise" },
  { name: "Instagram", icon: Instagram, url: "https://instagram.com/gilentreprise" },
  { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com/company/gilentreprise" },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background text-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo et informations entreprise */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              {/* Logo avec fallback */}
              <div className="relative">
                <img
                  src="/logo.png"
                  alt={`${COMPANY_INFO.name} Logo`}
                  className="h-10 w-10 object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = "flex";
                  }}
                />
                <div className="w-10 h-10 bg-primary rounded-lg items-center justify-center hidden">
                  <span className="text-primary-foreground font-bold text-sm">GS</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold">{COMPANY_INFO.name}</h3>
                <p className="text-xs text-muted-foreground">{COMPANY_INFO.tagline}</p>
              </div>
            </div>
            
            <p className="text-sm text-muted-foreground leading-relaxed">
              {COMPANY_INFO.description}
            </p>
            
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>{COMPANY_INFO.address}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-primary transition-colors">
                  {COMPANY_INFO.email}
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-primary transition-colors">
                  {COMPANY_INFO.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Right side menu groups */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Nos Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {FOOTER_LINKS.services.map((link) => (
                <li key={link.title}>
                  <Link 
                    to={link.href} 
                    className="hover:text-primary transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Entreprise</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.title}>
                  <Link 
                    to={link.href} 
                    className="hover:text-primary transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Légal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {FOOTER_LINKS.legal.map((link) => (
                <li key={link.title}>
                  <Link 
                    to={link.href} 
                    className="hover:text-primary transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
            
            {/* Réseaux sociaux */}
            <div className="pt-4">
              <h4 className="text-sm font-semibold mb-3">Suivez-nous</h4>
              <div className="flex space-x-4">
                {SOCIAL_LINKS.map((social) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label={social.name}
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Barre du bas */}
        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} {COMPANY_INFO.name}. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}