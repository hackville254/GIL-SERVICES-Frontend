import { Badge } from "~/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card"
import { motion } from "framer-motion"
import { Linkedin, Mail } from "lucide-react"
import { Button } from "~/components/ui/button"

// Variables pour stocker les données de l'équipe
const TEAM_DATA = {
  title: "Notre Équipe",
  subtitle: "Experts Passionnés",
  description: "Une équipe d'experts passionnés et qualifiés, dédiée à votre réussite.",
  members: [
    {
      id: 1,
      name: "Gilbert KAMGA",
      position: "Directeur Général",
      image: "/api/placeholder/300/300",
      bio: "Expert en stratégie d'entreprise avec plus de 15 ans d'expérience dans l'accompagnement des PME.",
      linkedin: "#",
      email: "gilbert@gilservices.com"
    },
    {
      id: 2,
      name: "Marie NGUYEN",
      position: "Directrice Opérationnelle",
      image: "/api/placeholder/300/300",
      bio: "Spécialiste en transformation digitale et optimisation des processus métier.",
      linkedin: "#",
      email: "marie@gilservices.com"
    },
    {
      id: 3,
      name: "Paul MBARGA",
      position: "Consultant Senior",
      image: "/api/placeholder/300/300",
      bio: "Expert en création d'entreprise et accompagnement juridique des startups.",
      linkedin: "#",
      email: "paul@gilservices.com"
    }
  ]
}

export function TeamSection() {
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
              {TEAM_DATA.subtitle}
            </Badge>
          </motion.div>
          
          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight tracking-tight mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {TEAM_DATA.title}
          </motion.h2>
          
          <motion.p
            className="text-muted-foreground leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {TEAM_DATA.description}
          </motion.p>
        </motion.div>
        
        {/* Team Grid - Parfaitement aligné et symétrique */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto">
          {TEAM_DATA.members.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.15, duration: 0.7 }}
              className="group flex"
            >
              <Card className="w-full bg-background/70 backdrop-blur-sm border-2 border-primary/10 hover:border-primary/25 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 overflow-hidden flex flex-col">
                {/* Image Section - Hauteur fixe pour symétrie */}
                <div className="relative overflow-hidden h-64">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/8 to-secondary/8 z-10" />
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                </div>
                
                {/* Content Section */}
                <CardHeader className="pb-4 px-6 pt-6 text-center">
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 mb-2">
                    {member.name}
                  </CardTitle>
                  <Badge variant="secondary" className="bg-primary/10 text-primary mx-auto">
                    {member.position}
                  </Badge>
                </CardHeader>
                
                <CardContent className="pt-0 pb-6 px-6 text-center flex-1">
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {member.bio}
                  </p>
                  
                  <div className="flex justify-center gap-3">
                    <Button variant="outline" size="sm" className="group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      <Linkedin className="w-4 h-4 mr-2" />
                      LinkedIn
                    </Button>
                    <Button variant="outline" size="sm" className="group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      <Mail className="w-4 h-4 mr-2" />
                      Contact
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}