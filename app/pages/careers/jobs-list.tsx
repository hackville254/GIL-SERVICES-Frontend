import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card"
import { Badge } from "~/components/ui/badge"
import { Button } from "~/components/ui/button"
import { motion } from "framer-motion"
import { MapPin, Clock, Briefcase, Mail } from "lucide-react"

// Variables pour stocker les offres d'emploi
const JOBS_DATA = [
  {
    id: 1,
    title: "Développeur Full Stack",
    department: "Développement",
    location: "Yaoundé, Cameroun",
    type: "CDI",
    experience: "3-5 ans",
    description: "Nous recherchons un développeur full stack passionné pour rejoindre notre équipe technique et participer au développement de solutions innovantes.",
    requirements: [
      "Maîtrise de React/Node.js",
      "Expérience avec les bases de données",
      "Connaissance des API REST",
      "Esprit d'équipe et autonomie"
    ],
    email: "recrutement@gilservices.com"
  },
  {
    id: 2,
    title: "Consultant en Stratégie",
    department: "Conseil",
    location: "Douala, Cameroun",
    type: "CDI", 
    experience: "2-4 ans",
    description: "Rejoignez notre équipe de consultants pour accompagner nos clients dans leurs projets de transformation et de développement stratégique.",
    requirements: [
      "Formation supérieure en management",
      "Expérience en conseil",
      "Excellentes capacités d'analyse",
      "Aisance relationnelle"
    ],
    email: "recrutement@gilservices.com"
  },
  {
    id: 3,
    title: "Chef de Projet Digital",
    department: "Digital",
    location: "Yaoundé/Douala, Cameroun",
    type: "CDI",
    experience: "4-6 ans", 
    description: "Pilotez des projets digitaux innovants et accompagnez nos clients dans leur transformation numérique avec une équipe d'experts.",
    requirements: [
      "Expérience en gestion de projet digital",
      "Maîtrise des méthodologies agiles", 
      "Leadership et communication",
      "Vision stratégique du digital"
    ],
    email: "recrutement@gilservices.com"
  }
]
const JobCard = ({ job, index }) => {
  const handleApply = () => {
    const subject = encodeURIComponent(`Candidature - ${job.title}`)
    const body = encodeURIComponent(`Bonjour,\n\nJe souhaite postuler pour le poste de ${job.title}.\n\nCordialement`)
    window.location.href = `mailto:${job.email}?subject=${subject}&body=${body}`
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="h-full hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary/20 hover:border-l-primary">
        <CardHeader>
          <div className="flex justify-between items-start mb-4">
            <div>
              <CardTitle className="text-xl font-bold text-primary mb-2">
                {job.title}
              </CardTitle>
              <Badge variant="secondary" className="mb-2">
                {job.department}
              </Badge>
            </div>
            <Badge variant="outline">
              {job.type}
            </Badge>
          </div>
          
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              {job.location}
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {job.experience}
            </div>
            <div className="flex items-center gap-1">
              <Briefcase className="w-4 h-4" />
              {job.type}
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            {job.description}
          </p>
          
          <div>
            <h4 className="font-semibold mb-2">Profil recherché :</h4>
            <ul className="space-y-1">
              {job.requirements.map((req, idx) => (
                <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  {req}
                </li>
              ))}
            </ul>
          </div>
          
          <Button 
            onClick={handleApply}
            className="w-full mt-6 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
          >
            <Mail className="w-4 h-4 mr-2" />
            Postuler par email
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export function JobsList() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">
            Opportunités
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Postes Disponibles
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez nos opportunités de carrière et rejoignez une équipe passionnée par l'excellence et l'innovation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {JOBS_DATA.map((job, index) => (
            <JobCard key={job.id} job={job} index={index} />
          ))}
        </div>

        {/* Section candidature spontanée */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
            <CardContent className="text-center py-12">
              <h3 className="text-2xl font-bold mb-4">
                Vous ne trouvez pas le poste idéal ?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Envoyez-nous votre candidature spontanée ! Nous sommes toujours à la recherche de talents exceptionnels pour enrichir notre équipe.
              </p>
              <Button 
                onClick={() => {
                  const subject = encodeURIComponent('Candidature Spontanée - GIL SERVICES')
                  const body = encodeURIComponent('Bonjour,\n\nJe souhaite vous faire parvenir ma candidature spontanée.\n\nCordialement')
                  window.location.href = `mailto:recrutement@gilservices.com?subject=${subject}&body=${body}`
                }}
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
              >
                <Mail className="w-4 h-4 mr-2" />
                Candidature spontanée
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}