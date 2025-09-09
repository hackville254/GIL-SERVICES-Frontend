import { useState } from "react"
import { Mail, Phone, Facebook, Twitter, Instagram, Linkedin, Plus, X, MessageSquare } from "lucide-react"
import { cn } from "~/lib/utils"

const CONTACT_INFO = {
  email: "contact@gil-services.com",
  phone: "+237 657 842 066",
  whatsapp: "+237 657 842 066"
}

const SOCIAL_LINKS = [
  { name: "Facebook", icon: Facebook, url: "https://facebook.com/gilentreprise" },
  { name: "Twitter", icon: Twitter, url: "https://twitter.com/gilentreprise" },
  { name: "Instagram", icon: Instagram, url: "https://instagram.com/gilentreprise" },
  { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com/company/gilentreprise" },
]

export function PreNavbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-4 right-4 z-40 flex flex-col items-end space-y-2">
      {/* Contact Panel */}
      <div className={cn(
        "flex flex-col space-y-2 transition-all duration-300",
        isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
      )}>
        {/* Contact Buttons */}
        <button
          onClick={() => window.location.href = `mailto:${CONTACT_INFO.email}`}
          className="bg-gray-900 text-white p-3 rounded-full hover:bg-gray-800 hover:scale-110 transition-all duration-300"
          aria-label="Send email"
        >
          <Mail className="h-5 w-5" />
        </button>
        <button
          onClick={() => window.location.href = `tel:${CONTACT_INFO.phone}`}
          className="bg-gray-900 text-white p-3 rounded-full hover:bg-gray-800 hover:scale-110 transition-all duration-300"
          aria-label="Call phone number"
        >
          <Phone className="h-5 w-5" />
        </button>
        <button
          onClick={() => window.open(`https://wa.me/${CONTACT_INFO.whatsapp.replace(/[^0-9]/g, '')}`, '_blank')}
          className="bg-green-600 text-white p-3 rounded-full hover:bg-green-700 hover:scale-110 transition-all duration-300"
          aria-label="Contact on WhatsApp"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 448 512" fill="currentColor">
            <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
          </svg>
        </button>
        
        {/* Social Buttons */}
        {SOCIAL_LINKS.map((social) => {
          const Icon = social.icon
          return (
            <button
              key={social.name}
              onClick={() => window.open(social.url, '_blank')}
              className="bg-gray-900 text-white p-3 rounded-full hover:bg-gray-800 hover:scale-110 transition-all duration-300"
              aria-label={`Visit ${social.name}`}
            >
              <Icon className="h-5 w-5" />
            </button>
          )
        })}
      </div>

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-600 hover:bg-blue-700 hover:scale-110 text-white rounded-full p-3 shadow-lg transition-all duration-300"
        aria-label="Toggle contact information"
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <Plus className="h-6 w-6" />
        )}
      </button>
    </div>
  )
}