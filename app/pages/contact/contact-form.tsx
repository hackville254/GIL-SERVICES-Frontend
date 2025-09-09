// import { Button } from "~/components/ui/button"
// import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card"
// import { Input } from "~/components/ui/input"
// import { Label } from "~/components/ui/label"
// import { Textarea } from "~/components/ui/textarea"
// import { Badge } from "~/components/ui/badge"
// import { motion } from "framer-motion"
// import { Send, User, Mail, Phone, MessageSquare } from "lucide-react"
// import { useState } from "react"

// const CONTACT_FORM_DATA = {
//   title: "Envoyez-nous un message",
//   subtitle: "Formulaire de contact",
//   description: "Remplissez ce formulaire et nous vous répondrons dans les plus brefs délais. Tous les champs marqués d'un astérisque (*) sont obligatoires.",
//   fields: [
//     {
//       id: "name",
//       label: "Nom complet",
//       type: "text",
//       placeholder: "Votre nom complet",
//       icon: User,
//       required: true
//     },
//     {
//       id: "email",
//       label: "Adresse email",
//       type: "email",
//       placeholder: "votre.email@exemple.com",
//       icon: Mail,
//       required: true
//     },
//     {
//       id: "phone",
//       label: "Numéro de téléphone",
//       type: "tel",
//       placeholder: "+237 6XX XXX XXX",
//       icon: Phone,
//       required: false
//     },
//     {
//       id: "message",
//       label: "Message",
//       type: "textarea",
//       placeholder: "Décrivez votre projet ou votre demande...",
//       icon: MessageSquare,
//       required: true
//     }
//   ]
// }

// export function ContactForm() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: ""
//   })

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     // Logique de soumission du formulaire
//     console.log("Form submitted:", formData)
//   }

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.id]: e.target.value
//     })
//   }

//   return (
//     <Card id="contact-form" className="min-h-[80vh] border-0 rounded-none bg-gradient-to-br from-background via-muted/20 to-muted/40 relative overflow-hidden">
//       {/* Background gradients - Parfaitement symétriques */}
//       <div className="absolute inset-0">
//         <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
//         <div className="absolute inset-0 bg-gradient-to-tl from-accent/3 via-transparent to-primary/3" />
        
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(var(--primary),0.06)_0%,transparent_40%)]" />
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(var(--secondary),0.06)_0%,transparent_40%)]" />
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_75%,rgba(var(--accent),0.06)_0%,transparent_40%)]" />
        
//         <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/5 to-transparent" />
//       </div>
      
//       <CardContent className="container mx-auto px-6 sm:px-8 lg:px-12 py-20 relative">
//         {/* Header Section */}
//         <motion.div 
//           className="text-center mb-16 max-w-4xl mx-auto"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           <motion.div
//             className="flex justify-center mb-8"
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.1 }}
//           >
//             <Badge
//               variant="secondary"
//               className="text-sm font-medium bg-primary/10 text-primary px-6 py-2 backdrop-blur-sm border border-primary/20"
//             >
//               {CONTACT_FORM_DATA.subtitle}
//             </Badge>
//           </motion.div>
          
//           <motion.h2
//             className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight tracking-tight mb-8"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 }}
//           >
//             {CONTACT_FORM_DATA.title}
//           </motion.h2>
          
//           <motion.p
//             className="text-muted-foreground leading-relaxed max-w-3xl mx-auto"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.3 }}
//           >
//             {CONTACT_FORM_DATA.description}
//           </motion.p>
//         </motion.div>
        
//         {/* Form Section */}
//         <motion.div
//           className="max-w-2xl mx-auto"
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.4 }}
//         >
//           <Card className="p-8 bg-background/60 backdrop-blur-sm border border-border/50">
//             <form onSubmit={handleSubmit} className="space-y-6">
//               {CONTACT_FORM_DATA.fields.map((field, index) => {
//                 const IconComponent = field.icon
//                 return (
//                   <motion.div
//                     key={field.id}
//                     initial={{ opacity: 0, x: -20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ delay: 0.5 + index * 0.1 }}
//                   >
//                     <Label htmlFor={field.id} className="text-base font-medium flex items-center gap-2 mb-2">
//                       <IconComponent className="h-4 w-4 text-primary" />
//                       {field.label}
//                       {field.required && <span className="text-destructive">*</span>}
//                     </Label>
//                     {field.type === "textarea" ? (
//                       <Textarea
//                         id={field.id}
//                         placeholder={field.placeholder}
//                         value={formData[field.id as keyof typeof formData]}
//                         onChange={handleChange}
//                         required={field.required}
//                         rows={5}
//                         className="resize-none"
//                       />
//                     ) : (
//                       <Input
//                         id={field.id}
//                         type={field.type}
//                         placeholder={field.placeholder}
//                         value={formData[field.id as keyof typeof formData]}
//                         onChange={handleChange}
//                         required={field.required}
//                       />
//                     )}
//                   </motion.div>
//                 )
//               })}
              
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.9 }}
//               >
//                 <Button 
//                   type="submit" 
//                   size="lg" 
//                   className="w-full text-lg font-semibold py-4 shadow-xl hover:shadow-2xl transition-all duration-300"
//                 >
//                   <Send className="mr-2 h-5 w-5" />
//                   Envoyer le message
//                 </Button>
//               </motion.div>
//             </form>
//           </Card>
//         </motion.div>
//       </CardContent>
//     </Card>
//   )
// }