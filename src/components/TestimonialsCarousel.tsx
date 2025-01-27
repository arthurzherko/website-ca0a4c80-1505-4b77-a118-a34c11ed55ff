import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel"
import { Card, CardContent } from "./ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Container } from "./ui/container"

export interface Testimonial {
  content: string
  author: string
  role: string
  avatar: string
}

interface TestimonialsCarouselProps {
  testimonials: Testimonial[]
}

export function TestimonialsCarousel({ testimonials }: TestimonialsCarouselProps) {
  return (
    <section className="bg-muted py-20">
      <Container>
        <h2 className="mb-12 text-center text-3xl font-bold">
          What Our Clients Say
        </h2>
        <Carousel
          opts={{
            align: "center",
            loop: true,
          }}
          className="mx-auto w-full max-w-5xl"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2">
                <Card className="mx-4 h-full">
                  <CardContent className="flex flex-col items-center p-6">
                    <blockquote className="mb-6 text-center text-lg text-muted-foreground">
                      "{testimonial.content}"
                    </blockquote>
                    <Avatar className="h-16 w-16">
                      <AvatarImage src={testimonial.avatar} />
                      <AvatarFallback>
                        {testimonial.author[0]}
                      </AvatarFallback>
                    </Avatar>
                    <div className="mt-4 text-center">
                      <p className="font-semibold">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </Container>
    </section>
  )
}