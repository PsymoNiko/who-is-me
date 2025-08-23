"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["experience", "skills", "projects", "value", "testimonials", "education", "additional-info"]
      let current = ""

      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = sectionId
          }
        }
      })

      setActiveSection(current)
    }

    // Only add scroll listener if on the home page
    if (pathname === "/") {
      window.addEventListener("scroll", handleScroll)
    } else {
      // If not on home page, clear active section
      setActiveSection("")
    }

    return () => window.removeEventListener("scroll", handleScroll)
  }, [pathname])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMobileMenuOpen(false)
  }

  const navItems = [
    { id: "experience", label: "Experience", href: "/#experience" },
    { id: "skills", label: "Skills", href: "/#skills" },
    { id: "projects", label: "Projects", href: "/#projects" },
    { id: "value", label: "Value", href: "/#value" },
    { id: "testimonials", label: "Testimonials", href: "/testimonials" }, // Link to new page
    { id: "additional-info", label: "More", href: "/#additional-info" },
  ]

  return (
    <header className="glass-effect sticky top-0 z-50 border-b border-gray-200">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-black hover:text-gray-700 transition-colors">
            Ali Mohammadnia
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                onClick={item.href.startsWith("/#") ? () => scrollToSection(item.id) : undefined}
                className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 ${
                  (pathname === "/" && activeSection === item.id) || pathname === item.href
                    ? "text-black"
                    : "text-gray-600 hover:text-black"
                }`}
              >
                {item.label}
                {((pathname === "/" && activeSection === item.id) || pathname === item.href) && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-black rounded-full" />
                )}
              </Link>
            ))}

            <a
              href="mailto:alimohammadnia127@gmail.com"
              className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-all duration-300 font-medium"
            >
              Contact
            </a>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-black hover:text-gray-700 transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={item.href.startsWith("/#") ? () => scrollToSection(item.id) : undefined}
                  className="block text-center py-2 text-lg w-full hover:text-black transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <a
                href="mailto:alimohammadnia127@gmail.com"
                className="block text-center w-1/2 mx-auto mt-4 bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors"
              >
                Contact Me
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
