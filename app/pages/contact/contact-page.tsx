import { HeroContact } from "./hero-contact"
import { ContactInfo } from "./contact-info"
import { CtaContact } from "./cta-contact"

export function ContactPage() {
  return (
    <main className="min-h-screen">
      <HeroContact />
      {/* <ContactForm /> */}
      <ContactInfo />
      <CtaContact />
    </main>
  )
}