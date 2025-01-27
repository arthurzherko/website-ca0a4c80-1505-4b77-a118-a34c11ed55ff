import { Button } from "./ui/button"
import { Container } from "./ui/container"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card"

export interface ServiceDetails {
  title: string
  description: string
  features: string[]
  price: string
  isPopular?: boolean
}

interface ServicesListProps {
  services: ServiceDetails[]
  onSelect: (service: ServiceDetails) => void
}

export function ServicesList({ services, onSelect }: ServicesListProps) {
  return (
    <section className="py-20">
      <Container>
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <Card 
              key={index}
              className={`relative ${
                service.isPopular ? 'border-accent shadow-lg' : ''
              }`}
            >
              {service.isPopular && (
                <span className="absolute -top-3 right-4 rounded-full bg-accent px-3 py-1 text-sm text-white">
                  Popular
                </span>
              )}
              <CardHeader>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <span className="text-3xl font-bold">{service.price}</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <ul className="mb-6 space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <svg
                        className="h-5 w-5 text-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  className="w-full"
                  variant={service.isPopular ? "default" : "outline"}
                  onClick={() => onSelect(service)}
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}