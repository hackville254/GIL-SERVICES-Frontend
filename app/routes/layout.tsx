import { PreNavbar } from "~/components/layout/pre-navbar"
import { Navbar } from "~/components/layout/navbar"
import { Footer } from "~/components/layout/footer"
import { Outlet } from "react-router"
import { WhatsAppButton } from "~/components/layout/WhatsappBtn";

export default function Layout() {
  console.log("layout");
  
  return (
    <div className="min-h-screen flex flex-col">
      <PreNavbar />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <WhatsAppButton />
      <Footer />
    </div>
  )
}