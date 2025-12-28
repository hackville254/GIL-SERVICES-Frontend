import { useParams, Link } from "react-router"
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card"
import { Badge } from "~/components/ui/badge"
import { Button } from "~/components/ui/button"
import { Calendar, Clock, ArrowLeft, Share2, User, Facebook, Twitter, Linkedin, MessageCircle, ChevronRight, Mail, Search, Tag } from "lucide-react"
import { motion } from "framer-motion"
import { Separator } from "~/components/ui/separator"
import { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent } from "~/components/ui/tooltip"

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

// Articles récents simulés
const RECENT_ARTICLES = [
  { title: "Comprendre la transformation digitale", date: "2024-01-10", slug: "#" },
  { title: "Les enjeux de la cybersécurité en 2024", date: "2024-01-05", slug: "#" },
  { title: "Optimiser votre infrastructure IT", date: "2023-12-28", slug: "#" },
]

export function NewsArticle() {
  const { slug } = useParams()
  const article = ARTICLE_DATA[slug as keyof typeof ARTICLE_DATA]

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4 text-slate-900">Article non trouvé</h1>
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
    <main className="min-h-screen bg-slate-50">
      {/* Header Section */}
      <header className="bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 pt-24 pb-12">
          {/* Breadcrumb */}
          <nav className="flex items-center text-sm text-muted-foreground mb-8 overflow-x-auto whitespace-nowrap">
            <Link to="/" className="hover:text-primary transition-colors">Accueil</Link>
            <ChevronRight className="h-4 w-4 mx-2 flex-shrink-0" />
            <Link to="/actualites" className="hover:text-primary transition-colors">Actualités</Link>
            <ChevronRight className="h-4 w-4 mx-2 flex-shrink-0" />
            <span className="font-medium text-foreground truncate">{article.title}</span>
          </nav>

          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 px-4 py-1.5 text-sm rounded-full" variant="secondary">
              {article.category}
            </Badge>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight tracking-tight">
              {article.title}
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              {article.excerpt}
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm md:text-base text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center border border-slate-200">
                  <User className="h-5 w-5 text-slate-500" />
                </div>
                <div className="text-left">
                  <p className="text-foreground font-semibold leading-none">{article.author}</p>
                  <p className="text-xs text-muted-foreground">Rédacteur</p>
                </div>
              </div>
              <Separator orientation="vertical" className="h-8 hidden md:block" />
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                {formatDate(article.date)}
              </div>
              <Separator orientation="vertical" className="h-8 hidden md:block" />
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                {article.readTime} de lecture
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Article Content */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="rounded-2xl overflow-hidden shadow-lg mb-10 bg-white ring-1 ring-slate-900/5">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-[300px] md:h-[500px] object-cover"
                />
              </div>

              <div className="bg-white rounded-2xl shadow-sm p-6 md:p-12 border border-slate-100">
                <div 
                  className="prose prose-lg prose-slate max-w-none 
                    prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-slate-900
                    prose-p:text-slate-600 prose-p:leading-relaxed
                    prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                    prose-img:rounded-xl prose-img:shadow-md
                    prose-li:text-slate-600
                    first-letter:text-5xl first-letter:font-bold first-letter:text-primary first-letter:float-left first-letter:mr-3"
                  dangerouslySetInnerHTML={{ __html: article.content }} 
                />
                
                <Separator className="my-12" />

                {/* Bottom Share Section */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-slate-50 p-6 rounded-xl border border-slate-100">
                  <div>
                    <h4 className="font-semibold text-lg text-slate-900 mb-1">Cet article vous a plu ?</h4>
                    <p className="text-sm text-slate-500">Partagez-le avec votre réseau</p>
                  </div>
                  <div className="flex gap-2">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button variant="outline" size="icon" className="rounded-full hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200" onClick={() => handleShare('facebook')}>
                            <Facebook className="h-4 w-4" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>Facebook</TooltipContent>
                      </Tooltip>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button variant="outline" size="icon" className="rounded-full hover:bg-sky-50 hover:text-sky-500 hover:border-sky-200" onClick={() => handleShare('twitter')}>
                            <Twitter className="h-4 w-4" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>Twitter</TooltipContent>
                      </Tooltip>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button variant="outline" size="icon" className="rounded-full hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200" onClick={() => handleShare('linkedin')}>
                            <Linkedin className="h-4 w-4" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>LinkedIn</TooltipContent>
                      </Tooltip>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button variant="outline" size="icon" className="rounded-full hover:bg-green-50 hover:text-green-600 hover:border-green-200" onClick={() => handleShare('whatsapp')}>
                            <MessageCircle className="h-4 w-4" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>WhatsApp</TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-8">
            {/* Search Widget */}
            <div className="relative group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
              <input 
                type="text" 
                placeholder="Rechercher un article..." 
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-sm"
              />
            </div>

            {/* Table of Contents (Static for demo) */}
            <Card className="border-none shadow-md overflow-hidden bg-white">
              <CardHeader className="bg-slate-50 border-b border-slate-100 py-4">
                <CardTitle className="flex items-center gap-2 text-base font-semibold text-slate-900">
                  <Tag className="h-4 w-4 text-primary" />
                  Dans cet article
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <ul className="divide-y divide-slate-50">
                  <li className="p-4 hover:bg-slate-50 transition-colors cursor-pointer flex items-center justify-between group">
                    <span className="text-sm font-medium text-slate-600 group-hover:text-primary transition-colors">Une approche personnalisée</span>
                    <ChevronRight className="h-4 w-4 text-slate-300 group-hover:text-primary transition-colors" />
                  </li>
                  <li className="p-4 hover:bg-slate-50 transition-colors cursor-pointer flex items-center justify-between group">
                    <span className="text-sm font-medium text-slate-600 group-hover:text-primary transition-colors">Méthodologie éprouvée</span>
                    <ChevronRight className="h-4 w-4 text-slate-300 group-hover:text-primary transition-colors" />
                  </li>
                  <li className="p-4 hover:bg-slate-50 transition-colors cursor-pointer flex items-center justify-between group">
                    <span className="text-sm font-medium text-slate-600 group-hover:text-primary transition-colors">Résultats attendus</span>
                    <ChevronRight className="h-4 w-4 text-slate-300 group-hover:text-primary transition-colors" />
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Recent Articles */}
            <Card className="border-none shadow-md bg-white">
              <CardHeader className="py-4 border-b border-slate-100">
                <CardTitle className="text-base font-semibold">Articles récents</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y divide-slate-50">
                  {RECENT_ARTICLES.map((item, i) => (
                    <Link key={i} to={item.slug} className="group block p-4 hover:bg-slate-50 transition-colors">
                      <h4 className="font-medium text-sm text-slate-900 group-hover:text-primary transition-colors mb-2 line-clamp-2">
                        {item.title}
                      </h4>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3 mr-1" />
                        {formatDate(item.date)}
                      </div>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Newsletter Widget */}
            <Card className="bg-slate-900 text-white border-none shadow-xl overflow-hidden relative">
              <div className="absolute top-0 right-0 p-8 opacity-5 transform rotate-12 scale-150">
                <Mail className="h-32 w-32" />
              </div>
              <CardHeader>
                <CardTitle className="text-white relative z-10">Newsletter</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-slate-300 text-sm mb-6">
                  Recevez nos dernières actualités et conseils stratégiques directement dans votre boîte mail.
                </p>
                <div className="space-y-3">
                  <input 
                    type="email" 
                    placeholder="Votre adresse email" 
                    className="w-full px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder:text-slate-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm"
                  />
                  <Button className="w-full bg-primary hover:bg-primary/90 font-medium">
                    S'abonner gratuitement
                  </Button>
                  <p className="text-xs text-slate-500 text-center">
                    Pas de spam, désinscription à tout moment.
                  </p>
                </div>
              </CardContent>
            </Card>
          </aside>
        </div>
      </div>
    </main>
  )
}