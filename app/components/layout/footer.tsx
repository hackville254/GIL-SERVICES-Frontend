import { Link } from "react-router"
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

// Variables pour le footer
const COMPANY_INFO = {
  name: "GIL SERVICES",
  address: "123 Rue de l'Innovation, 75001 Paris, France",
  email: "contact@gil-services.com",
  phone: "+237 657 842 066",
}

const FOOTER_LINKS = {
  services: [
    { title: "Développement Web", href: "/services/web-development" },
    { title: "Applications Mobile", href: "/services/mobile-apps" },
    { title: "Consulting IT", href: "/services/consulting" },
    { title: "Maintenance", href: "/services/maintenance" },
  ],
  company: [
    { title: "À Propos", href: "/a-propos" },
    { title: "Notre Équipe", href: "/equipe" },
    { title: "Carrière", href: "/carriere" },
    { title: "Contact", href: "/contact" },
  ],
  legal: [
    { title: "Mentions Légales", href: "/mentions-legales" },
    { title: "Politique de Confidentialité", href: "/confidentialite" },
    { title: "CGV", href: "/cgv" },
    { title: "CGU", href: "/cgu" },
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
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">{COMPANY_INFO.name}</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>{COMPANY_INFO.address}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-blue-400 transition-colors">
                  {COMPANY_INFO.email}
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-blue-400 transition-colors">
                  {COMPANY_INFO.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Nos Services</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              {FOOTER_LINKS.services.map((link) => (
                <li key={link.title}>
                  <Link 
                    to={link.href} 
                    className="hover:text-blue-400 transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Entreprise</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.title}>
                  <Link 
                    to={link.href} 
                    className="hover:text-blue-400 transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Social */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Légal</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              {FOOTER_LINKS.legal.map((link) => (
                <li key={link.title}>
                  <Link 
                    to={link.href} 
                    className="hover:text-blue-400 transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
            
            {/* Social Links */}
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
                      className="hover:text-blue-400 transition-colors"
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

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {currentYear} {COMPANY_INFO.name}. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}