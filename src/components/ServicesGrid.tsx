import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Container } from "./ui/container"

export interface Service {
  title: string
  description: string
  icon: React.ReactNode
}

interface ServicesGridProps {
  services: Service[]
}

export function ServicesGrid({ services }: ServicesGridProps) {
  return (
    <section className="py-20">
      <Container>
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <Card key={index} className="transition-transform hover:-translate-y-1">
              <CardHeader>
                <div className="mb-4 inline-block rounded-lg bg-primary/10 p-3 text-primary">
                  {service.icon}
                </div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}