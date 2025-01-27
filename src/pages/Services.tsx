import { useNavigate } from "react-router-dom"
import { ServicesList, type ServiceDetails } from "@/components/ServicesList"
import { ProcessTimeline, type ProcessStep } from "@/components/ProcessTimeline"
import { CallToAction } from "@/components/CallToAction"

export function Services() {
  const navigate = useNavigate()

  const services: ServiceDetails[] = [
    {
      title: "Basic Package",
      description: "Perfect for small businesses starting their digital journey",
      price: "$999",
      features: [
        "Social Media Management",
        "Basic SEO Optimization",
        "Monthly Performance Reports",
        "Email Support",
      ],
    },
    {
      title: "Professional Package",
      description: "Comprehensive solution for growing businesses",
      price: "$1,999",
      features: [
        "Everything in Basic Package",
        "Advanced SEO Strategies",
        "Content Marketing",
        "PPC Campaign Management",
        "Priority Support",
      ],
      isPopular: true,
    },
    {
      title: "Enterprise Package",
      description: "Full-scale digital marketing solution",
      price: "$3,999",
      features: [
        "Everything in Professional Package",
        "Custom Strategy Development",
        "Dedicated Account Manager",
        "Brand Development",
        "24/7 Premium Support",
      ],
    },
  ]

  const processSteps: ProcessStep[] = [
    {
      title: "Discovery",
      description: "We analyze your business needs and current digital presence",
      number: 1,
    },
    {
      title: "Strategy Development",
      description: "Creating a customized digital marketing plan",
      number: 2,
    },
    {
      title: "Implementation",
      description: "Executing the strategy across all channels",
      number: 3,
    },
    {
      title: "Optimization",
      description: "Continuous monitoring and improvement of results",
      number: 4,
    },
  ]

  const handleServiceSelect = (service: ServiceDetails) => {
    console.log("Selected service:", service)
    // Handle service selection
  }

  const handleCtaClick = () => {
    navigate("/#contact")
  }

  return (
    <main>
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 text-4xl font-bold">Our Services</h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Comprehensive digital marketing solutions tailored to your business needs
          </p>
        </div>
      </section>

      <ServicesList 
        services={services} 
        onSelect={handleServiceSelect} 
      />

      <ProcessTimeline steps={processSteps} />

      <CallToAction
        title="Ready to Grow Your Business?"
        description="Get started with our digital marketing services today and see the difference."
        buttonText="Contact Us Now"
        onAction={handleCtaClick}
      />
    </main>
  )
}