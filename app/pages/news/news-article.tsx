import { useParams, Link } from "react-router"
import { Card, CardContent, CardHeader } from "~/components/ui/card"
import { Badge } from "~/components/ui/badge"
import { Button } from "~/components/ui/button"
import { Calendar, Clock, ArrowLeft, Share2, User, Facebook, Twitter, Linkedin, MessageCircle } from "lucide-react"
import { motion } from "framer-motion"
import { Separator } from "~/components/ui/separator"
import { Tooltip } from "~/components/ui/tooltip"

// Données de démonstration pour l'article
const ARTICLE_DATA = {
  "nouveau-service-conseil-strategique": {
    id: 1,
    title: "Lancement de notre nouveau service de conseil stratégique",
    excerpt: "GIL SERVICES élargit son offre avec un service de conseil stratégique personnalisé pour accompagner les entreprises dans leur transformation.",
    content: `
      <p>Nous sommes fiers d'annoncer le lancement de notre nouveau service de conseil stratégique, une offre innovante qui vient enrichir notre gamme de services déjà reconnue sur le marché.</p>
      
      <h3>Une approche personnalisée</h3>
      <p>Notre équipe d'experts développe des stratégies sur mesure, adaptées aux défis spécifiques de chaque entreprise. Nous analysons en profondeur votre environnement concurrentiel, vos ressources internes et vos objectifs de croissance.</p>
      
      <h3>Méthodologie éprouvée</h3>
      <p>Notre approche se base sur une méthodologie éprouvée qui combine :</p>
      <ul>
        <li>Audit stratégique complet</li>
        <li>Analyse concurrentielle approfondie</li>
        <li>Définition d'objectifs SMART</li>
        <li>Plan d'action détaillé</li>
        <li>Suivi et ajustements réguliers</li>
      </ul>
      
      <h3>Résultats attendus</h3>
      <p>Nos clients peuvent s'attendre à une amélioration significative de leur performance opérationnelle, une meilleure position concurrentielle et une croissance durable de leur activité.</p>
    `,
    date: "2024-01-15",
    category: "Services",
    readTime: "5 min",
    image: "/74362.jpg",
    author: "Équipe GIL SERVICES",
    slug: "nouveau-service-conseil-strategique"
  }
  // Ajouter d'autres articles ici...
}

export function NewsArticle() {
  const { slug } = useParams()
  const article = ARTICLE_DATA[slug as keyof typeof ARTICLE_DATA]

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Article non trouvé</h1>
          <Link to="/actualites">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Retour aux actualités
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
  }

  const handleShare = (platform: string) => {
    const url = window.location.href
    const text = `Découvrez cet article intéressant : ${article.title}`
    
    const shareUrls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`,
      linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(article.title)}`,
      whatsapp: `https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`
    }

    window.open(shareUrls[platform as keyof typeof shareUrls], '_blank')
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Hero de l'article */}
      <section className="py-20 bg-gradient-to-br from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            {/* Navigation */}
            <div className="mb-8">
              <Link to="/actualites">
                <Button variant="ghost" className="p-0 h-auto">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Retour aux actualités
                </Button>
              </Link>
            </div>

            {/* Métadonnées */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <Badge variant="secondary">{article.category}</Badge>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {formatDate(article.date)}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {article.readTime}
                </div>
                <div className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  {article.author}
                </div>
              </div>
            </div>

            {/* Titre */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              {article.title}
            </h1>

            {/* Excerpt */}
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              {article.excerpt}
            </p>

            {/* Actions */}
            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center gap-2">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => handleShare('facebook')}
                >
                  <Facebook className="h-4 w-4 mr-2" />
                  Facebook
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => handleShare('twitter')}
                >
                  <Twitter className="h-4 w-4 mr-2" />
                  Twitter
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => handleShare('linkedin')}
                >
                  <Linkedin className="h-4 w-4 mr-2" />
                  LinkedIn
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => handleShare('whatsapp')}
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  WhatsApp
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contenu de l'article */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Contenu principal */}
              <div className="lg:col-span-3">
                <Card>
                  <CardContent className="p-8">
                    {/* Image principale */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6 }}
                      className="mb-8"
                    >
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-64 md:h-80 object-cover rounded-lg"
                      />
                    </motion.div>

                    {/* Contenu */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="prose prose-lg max-w-none"
                      dangerouslySetInnerHTML={{ __html: article.content }}
                    />
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 space-y-6">
                  {/* Informations sur l'article */}
                  <Card className="shadow-lg border-2">
                    <CardHeader className="bg-muted/50">
                      <h3 className="text-lg font-semibold">Informations</h3>
                    </CardHeader>
                    <CardContent className="space-y-4 p-6">
                      <div>
                        <div className="text-sm font-medium text-muted-foreground mb-1">Catégorie</div>
                        <Badge variant="secondary" className="text-sm">{article.category}</Badge>
                      </div>
                      <Separator />
                      <div>
                        <div className="text-sm font-medium text-muted-foreground mb-1">Date de publication</div>
                        <div className="text-sm font-medium">{formatDate(article.date)}</div>
                      </div>
                      <Separator />
                      <div>
                        <div className="text-sm font-medium text-muted-foreground mb-1">Temps de lecture</div>
                        <div className="text-sm font-medium">{article.readTime}</div>
                      </div>
                      <Separator />
                      <div>
                        <div className="text-sm font-medium text-muted-foreground mb-1">Auteur</div>
                        <div className="text-sm font-medium">{article.author}</div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Actions */}
                  <Card className="shadow-lg border-2">
                    <CardHeader className="bg-muted/50">
                      <h3 className="text-lg font-semibold">Partager l'article</h3>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="grid grid-cols-2 gap-4">
                        <Tooltip content="Partager sur Facebook">
                          <Button 
                            variant="outline" 
                            className="w-full"
                            onClick={() => handleShare('facebook')}
                          >
                            <Facebook className="h-5 w-5" />
                          </Button>
                        </Tooltip>
                        <Tooltip content="Partager sur Twitter">
                          <Button 
                            variant="outline" 
                            className="w-full"
                            onClick={() => handleShare('twitter')}
                          >
                            <Twitter className="h-5 w-5" />
                          </Button>
                        </Tooltip>
                        <Tooltip content="Partager sur LinkedIn">
                          <Button 
                            variant="outline" 
                            className="w-full"
                            onClick={() => handleShare('linkedin')}
                          >
                            <Linkedin className="h-5 w-5" />
                          </Button>
                        </Tooltip>
                        <Tooltip content="Partager sur WhatsApp">
                          <Button 
                            variant="outline" 
                            className="w-full"
                            onClick={() => handleShare('whatsapp')}
                          >
                            <MessageCircle className="h-5 w-5" />
                          </Button>
                        </Tooltip>
                      </div>
                      
                      <Separator className="my-6" />
                      
                      <Link to="/contact" className="block">
                        <Button className="w-full bg-primary hover:bg-primary/90">
                          Nous contacter
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}