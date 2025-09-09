import { Badge } from "~/components/ui/badge"
import { Card, CardContent } from "~/components/ui/card"
import { motion, useInView } from "framer-motion"
import { Building2, Users, Target } from "lucide-react"
import { useEffect, useRef, useState } from "react"

// Variables pour stocker les données du hero à propos
const HERO_ABOUT_DATA = {
  title: "À Propos de GIL SERVICES",
  subtitle: "Notre Histoire",
  description: "Depuis notre création, GIL SERVICES s'engage à accompagner les entreprises dans leur développement et leur transformation. Notre expertise et notre passion nous permettent de créer des solutions innovantes adaptées à vos besoins spécifiques.",
  stats: [
    {
      icon: Building2,
      number: 500,
      suffix: "+",
      label: "Entreprises accompagnées"
    },
    {
      icon: Users,
      number: 15,
      suffix: "+",
      label: "Experts qualifiés"
    },
    {
      icon: Target,
      number: 98,
      suffix: "%",
      label: "Taux de satisfaction"
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

export function HeroAbout() {
  return (
    <Card className="min-h-[80vh] border-0 rounded-none bg-gradient-to-br from-background via-muted/20 to-muted/40 relative overflow-hidden">
      {/* Background gradients - Parfaitement symétriques */}
      <div className="absolute inset-0">
        {/* Dégradé principal léger */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        <div className="absolute inset-0 bg-gradient-to-tl from-accent/3 via-transparent to-primary/3" />
        
        {/* Dégradés radiaux symétriques */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(var(--primary),0.06)_0%,transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(var(--secondary),0.06)_0%,transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_75%,rgba(var(--accent),0.06)_0%,transparent_40%)]" />
        
        {/* Overlay subtil pour uniformiser */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/5 to-transparent" />
      </div>
      
      <CardContent className="container mx-auto px-6 sm:px-8 lg:px-12 py-20 relative">
        {/* Header Section - Centré parfaitement */}
        <motion.div 
          className="text-center mb-20 max-w-4xl mx-auto"
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
              {HERO_ABOUT_DATA.subtitle}
            </Badge>
          </motion.div>
          
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight tracking-tight mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            >
            {HERO_ABOUT_DATA.title}
          </motion.h1>
          
          <motion.p
            className="text-muted-foreground leading-relaxed max-w-3xl mx-auto text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {HERO_ABOUT_DATA.description}
          </motion.p>
        </motion.div>
        
        {/* Stats Grid - Parfaitement aligné et symétrique */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {HERO_ABOUT_DATA.stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.15, duration: 0.7 }}
                className="group flex"
              >
                <Card className="w-full bg-background/70 backdrop-blur-sm border-2 border-primary/10 hover:border-primary/25 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 overflow-hidden flex flex-col">
                  <CardContent className="pt-8 pb-8 px-6 text-center">
                    <Badge variant="secondary" className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 bg-primary/10 backdrop-blur-sm border border-primary/20 group-hover:bg-primary/15 transition-colors duration-300">
                      <IconComponent className="w-10 h-10 text-primary" />
                    </Badge>
                    <div className="text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                      <CountUpAnimation target={stat.number} suffix={stat.suffix} />
                    </div>
                    <div className="text-muted-foreground font-medium">
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