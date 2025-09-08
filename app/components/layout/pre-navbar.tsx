
import { useState, useEffect } from "react"
import { Mail, Phone, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import { cn } from "~/lib/utils"

// Variables pour les informations de contact
const CONTACT_INFO = {
  email: "contact@gil-services.com",
  phone: "+237 657 842 066",
}

const SOCIAL_LINKS = [
  { name: "Facebook", icon: Facebook, url: "https://facebook.com/gilentreprise" },
  { name: "Twitter", icon: Twitter, url: "https://twitter.com/gilentreprise" },
  { name: "Instagram", icon: Instagram, url: "https://instagram.com/gilentreprise" },
  { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com/company/gilentreprise" },
]

export function PreNavbar() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Visible après 50px, disparaît après 300px
  const isVisible = scrollY > 50 && scrollY <= 300

  return (
    <div className={cn(
      "fixed top-0 z-40 w-full bg-gray-900 text-white py-2 px-4 transition-all duration-300 hidden md:block",
      isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
    )}>
      <div className="container mx-auto flex justify-between items-center text-sm">
        {/* Contact Info */}
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <Mail className="h-4 w-4" />
            <span>{CONTACT_INFO.email}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Phone className="h-4 w-4" />
            <span>{CONTACT_INFO.phone}</span>
          </div>
        </div>
        
        {/* Social Links */}
        <div className="flex items-center space-x-4">
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
                <Icon className="h-4 w-4" />
              </a>
            )
          })}
        </div>
      </div>
    </div>
  )
}