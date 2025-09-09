import { Badge } from "~/components/ui/badge"
import { Card, CardContent } from "~/components/ui/card"
import { motion, useInView } from "framer-motion"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { useEffect, useRef, useState } from "react"

// Variables pour stocker les données du hero contact
const HERO_CONTACT_DATA = {
  title: "Contactez-nous",
  subtitle: "Parlons de votre projet",
  description: "Notre équipe d'experts est à votre écoute pour comprendre vos besoins et vous accompagner dans la réalisation de vos projets. Contactez-nous dès aujourd'hui pour une consultation gratuite.",
  stats: [
    {
      icon: Phone,
      number: 24,
      suffix: "h/7",
      label: "Support disponible"
    },
    {
      icon: Mail,
      number: 2,
      suffix: "h",
      label: "Temps de réponse"
    },
    {
      icon: MapPin,
      number: 10,
      suffix: "+",
      label: "Années d'expérience"
    },
    {
      icon: Clock,
      number: 98,
      suffix: "%",
      label: "Satisfaction client"
    }
  ]
}

const CountUpAnimation = ({ target, suffix = "", duration = 2000 }) => {
  const [count, setCount] = useState(0)
  const elementRef = useRef(null)
  const isInView = useInView(elementRef, { once: true, margin: "-100px" })

  useEffect(() => {
    if (isInView) {
      let start = 0
      const increment = target / (duration / 16)
      const timer = setInterval(() => {
        start += increment
        if (start >= target) {
          setCount(target)
          clearInterval(timer)
        } else {
          setCount(Math.floor(start))
        }
      }, 16)
      return () => clearInterval(timer)
    }
  }, [isInView, target, duration])

  return (
    <span ref={elementRef}>
      {count}{suffix}
    </span>
  )
}

export function HeroContact() {
  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <Card className="min-h-[90vh] border-0 rounded-none bg-gradient-to-br from-background via-muted/20 to-muted/40 relative overflow-hidden">
      {/* Background gradients - Parfaitement symétriques */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        <div className="absolute inset-0 bg-gradient-to-tl from-accent/3 via-transparent to-primary/3" />
        
        {/* Dégradés radiaux symétriques */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(var(--primary),0.06)_0%,transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(var(--secondary),0.06)_0%,transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_75%,rgba(var(--accent),0.06)_0%,transparent_40%)]" />
        
        {/* Overlay subtil pour uniformiser */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/5 to-transparent" />
      </div>
      
      <CardContent className="container mx-auto px-6 sm:px-8 lg:px-12 py-20 relative flex flex-col justify-center min-h-[90vh]">
        {/* Header Section - Centré parfaitement */}
        <motion.div 
          className="text-center mb-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="flex justify-center mb-8"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Badge
              variant="secondary"
              className="text-sm font-medium bg-primary/10 text-primary px-6 py-2 backdrop-blur-sm border border-primary/20"
            >
              {HERO_CONTACT_DATA.subtitle}
            </Badge>
          </motion.div>
          
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight tracking-tight mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {HERO_CONTACT_DATA.title}
          </motion.h1>
          
          <motion.p
            className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {HERO_CONTACT_DATA.description}
          </motion.p>
        </motion.div>
        
        {/* Stats Grid - Parfaitement symétrique */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {HERO_CONTACT_DATA.stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                <Card className="p-6 text-center bg-background/60 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-300 hover:scale-105 hover:shadow-xl group">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2">
                    <CountUpAnimation target={stat.number} suffix={stat.suffix} />
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}