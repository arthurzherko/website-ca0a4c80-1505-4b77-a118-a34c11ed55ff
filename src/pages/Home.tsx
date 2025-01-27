import { useNavigate } from "react-router-dom"
import { HeroSection } from "@/components/HeroSection"
import { ServicesGrid, type Service } from "@/components/ServicesGrid"
import { TestimonialsCarousel, type Testimonial } from "@/components/TestimonialsCarousel"
import { ContactForm } from "@/components/ContactForm"
import { LightbulbIcon, TrendingUpIcon, UsersIcon } from "lucide-react"

export function Home() {
  const navigate = useNavigate()

  const services: Service[] = [
    {
      title: "Digital Strategy",
      description: "Custom-tailored digital strategies to help your business grow online",
      icon: <LightbulbIcon className="h-6 w-6" />,
    },
    {
      title: "SEO Optimization",
      description: "Improve your search rankings and drive organic traffic to your website",
      icon: <TrendingUpIcon className="h-6 w-6" />,
    },
    {
      title: "Social Media",
      description: "Engage your audience and build brand awareness across social platforms",
      icon: <UsersIcon className="h-6 w-6" />,
    },
  ]

  const testimonials: Testimonial[] = [
    {
      content: "Working with DigitalPro Agency transformed our online presence. Our traffic increased by 200% in just 3 months!",
      author: "Sarah Johnson",
      role: "CEO, TechStart",
      avatar: "/placeholder.svg",
    },
    {
      content: "The team's expertise in digital marketing is unmatched. They delivered results beyond our expectations.",
      author: "Michael Chen",
      role: "Marketing Director, GrowthCo",
      avatar: "/placeholder.svg",
    },
    {
      content: "Professional, responsive, and results-driven. Exactly what we needed for our digital marketing needs.",
      author: "Emma Davis",
      role: "Founder, EcoStore",
      avatar: "/placeholder.svg",
    },
  ]

  const handleCtaClick = () => {
    navigate("/services")
  }

  const handleContactSubmit = (data: any) => {
    console.log("Form submitted:", data)
    // Handle form submission
  }

  return (
    <main>
      <HeroSection
        title="Transform Your Digital Presence"
        subtitle="Expert digital marketing solutions to help your business grow and succeed online"
        ctaText="Explore Our Services"
        onCtaClick={handleCtaClick}
      />
      
      <ServicesGrid services={services} />
      
      <TestimonialsCarousel testimonials={testimonials} />
      
      <ContactForm onSubmit={handleContactSubmit} />
    </main>
  )
}