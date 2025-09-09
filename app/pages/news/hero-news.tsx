import { Badge } from "~/components/ui/badge"
import { Card, CardContent } from "~/components/ui/card"
import { motion, useInView } from "framer-motion"
import { Newspaper, Calendar, TrendingUp, Users } from "lucide-react"
import { useEffect, useRef, useState } from "react"

// Variables pour stocker les données du hero actualités
const HERO_NEWS_DATA = {
  title: "Actualités GIL SERVICES",
  subtitle: "Restez Informés",
  description: "Découvrez les dernières nouvelles, innovations et réussites de GIL SERVICES. Suivez notre évolution et les tendances du secteur pour rester à la pointe de l'actualité business.",
  stats: [
    {
      icon: Newspaper,
      number: 150,
      suffix: "+",
      label: "Articles publiés"
    },
    {
      icon: Calendar,
      number: 24,
      suffix: "/7",
      label: "Actualités fraîches"
    },
    {
      icon: TrendingUp,
      number: 85,
      suffix: "%",
      label: "Croissance annuelle"
    },
    {
      icon: Users,
      number: 5000,
      suffix: "+",
      label: "Lecteurs mensuels"
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

export function HeroNews() {
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
      
      <CardContent className="relative z-10 h-full flex items-center justify-center p-8">
        <div className="container mx-auto">
          <div className="text-center space-y-8">
            {/* Badge et titre */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">
                {HERO_NEWS_DATA.subtitle}
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary via-primary/80 to-secondary bg-clip-text text-transparent">
                {HERO_NEWS_DATA.title}
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            >
              {HERO_NEWS_DATA.description}
            </motion.p>

            {/* Statistiques */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-12"
            >
              {HERO_NEWS_DATA.stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-6 text-center hover:bg-card/70 transition-all duration-300"
                  >
                    <Icon className="h-8 w-8 mx-auto mb-3 text-primary" />
                    <div className="text-2xl md:text-3xl font-bold text-foreground mb-1">
                      <CountUpAnimation target={stat.number} suffix={stat.suffix} />
                    </div>
                    <div className="text-sm text-muted-foreground font-medium">
                      {stat.label}
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}