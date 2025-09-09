import { Button } from "~/components/ui/button"
import { Card, CardContent } from "~/components/ui/card"
import { Badge } from "~/components/ui/badge"
import { ArrowDown, Briefcase, Users, Target, Award, Clock } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useEffect, useRef, useState } from "react"

const HERO_DATA = {
  title: "Nos Services",
  subtitle: "Excellence & Innovation",
  description: "Chez GIL SERVICES, nous transformons vos défis en opportunités. Notre expertise et notre écoute attentive de vos besoins nous permettent de vous accompagner vers le succès. Découvrez nos services spécialisés pour faire grandir votre entreprise.",
  cta: "Découvrir nos services",
  stats: [
    {
      icon: Users,
      number: 200,
      suffix: "+",
      label: "Clients satisfaits"
    },
    {
      icon: Target,
      number: 95,
      suffix: "%",
      label: "Taux de réussite"
    },
    {
      icon: Award,
      number: 4,
      suffix: "",
      label: "Services spécialisés"
    },
    {
      icon: Clock,
      number: 10,
      suffix: "+",
      label: "Années d'expérience"
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

export function HeroServices() {
  const scrollToServices = () => {
    document.getElementById('services-list')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <Card className="min-h-[90vh] border-0 rounded-none bg-gradient-to-br from-background via-muted/20 to-muted/40 relative overflow-hidden">
      {/* Background gradients - Parfaitement symétriques */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        <div className="absolute inset-0 bg-gradient-to-tl from-accent/3 via-transparent to-primary/3" />
        
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(var(--primary),0.06)_0%,transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(var(--secondary),0.06)_0%,transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_75%,rgba(var(--accent),0.06)_0%,transparent_40%)]" />
        
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/5 to-transparent" />
      </div>
      
      <CardContent className="container mx-auto px-6 sm:px-8 lg:px-12 py-20 relative z-10 flex flex-col justify-center min-h-[90vh]">
        {/* Header Section - Centré parfaitement */}
        <motion.div 
          className="text-center mb-16 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="flex justify-center mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Badge
              variant="secondary"
              className="text-base font-medium bg-primary/10 text-primary px-8 py-3 backdrop-blur-sm border border-primary/20"
            >
              <Briefcase className="w-5 h-5 mr-2" />
              {HERO_DATA.subtitle}
            </Badge>
          </motion.div>
          
          <motion.h1
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-tight tracking-tight mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {HERO_DATA.title}
          </motion.h1>
          
          <motion.p
            className="text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {HERO_DATA.description}
          </motion.p>
          
       
        </motion.div>
        
        {/* Stats Grid - Parfaitement aligné et symétrique */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {HERO_DATA.stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.7 }}
                className="group flex"
              >
                <Card className="w-full bg-background/70 backdrop-blur-sm border-2 border-primary/10 hover:border-primary/25 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 overflow-hidden flex flex-col">
                  <CardContent className="pt-6 pb-6 px-4 text-center">
                    <Badge variant="secondary" className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-primary/10 backdrop-blur-sm border border-primary/20 group-hover:bg-primary/15 transition-colors duration-300">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </Badge>
                    <div className="text-3xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                      <CountUpAnimation target={stat.number} suffix={stat.suffix} />
                    </div>
                    <div className="text-muted-foreground font-medium text-sm">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}