import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Ticket, Music, Calendar, MapPin, ArrowRight } from 'lucide-react'

export default function Home() {
  return (
    <>
      {/* Hero Section with Background Video */}
      <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/hero-background.mp4" type="video/mp4" />
        </video>

        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Hero Content */}
        <div className="relative z-10 container container-padding text-center">
          <div className="mb-8">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-2 text-white drop-shadow-lg">
              ICONIC
            </h1>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg">
              FESTIVAL
            </h2>
            <p className="text-2xl md:text-3xl font-bold text-secondary mt-2 drop-shadow-lg">
              BEST OF TRIBUTE
            </p>
          </div>

          <Link href="/tickets">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white text-lg px-12 py-6 font-bold shadow-xl"
            >
              TICKETS
            </Button>
          </Link>
        </div>

        {/* Scrolling Marquee - Event Info */}
        <div className="absolute bottom-0 left-0 right-0 bg-accent text-white py-3 overflow-hidden">
          <div className="animate-marquee whitespace-nowrap flex gap-8 items-center text-sm md:text-base font-bold">
            <span className="inline-flex items-center gap-2">
              <span className="text-secondary">★</span> 9 MEI 2026
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="text-secondary">★</span> GOFFERTPARK, NIJMEGEN
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="text-secondary">★</span> BEST OF TRIBUTE
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="text-secondary">★</span> 9 MEI 2026
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="text-secondary">★</span> GOFFERTPARK, NIJMEGEN
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="text-secondary">★</span> BEST OF TRIBUTE
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="text-secondary">★</span> 9 MEI 2026
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="text-secondary">★</span> GOFFERTPARK, NIJMEGEN
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="text-secondary">★</span> BEST OF TRIBUTE
            </span>
          </div>
        </div>
      </section>

      {/* About Iconic Section - Split Layout */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[hsl(15,90%,55%)] to-[hsl(15,85%,50%)]">
        <div className="grid lg:grid-cols-2 min-h-[500px]">
          {/* Left: Text Content */}
          <div className="relative z-10 flex items-center p-8 md:p-12 lg:p-16 text-white">
            {/* Decorative circles */}
            <div className="absolute top-10 right-10 w-32 h-32 rounded-full bg-primary/30 blur-2xl" />
            <div className="absolute bottom-20 right-20 w-24 h-24 rounded-full bg-primary/20 blur-xl" />

            <div className="relative max-w-xl">
              <p className="text-lg md:text-xl leading-relaxed mb-6">
                Iconic Festival is een jaarlijks tribute muziekfestival in het
                Goffertpark in Nijmegen. Een muzikaal eerbetoon aan de grootste
                artiesten ooit door hoogwaardige tribute acts. Van Queen en ABBA
                tot Bruno Mars en Dua Lipa – we brengen generaties samen rond
                gedeelde muzikale herinneringen.
              </p>
              <p className="text-lg md:text-xl leading-relaxed mb-8">
                Pure herkenning, meezingen, en dat onmiskenbare Iconic gevoel.
                In 2026 breiden we uit met een tweede podium in het Goffert Theater.
                Kom samen genieten van de beste tribute acts op 9 mei 2026!
              </p>

              <Link href="/tickets">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-[hsl(15,90%,55%)] font-bold"
                >
                  KOOP TICKETS
                </Button>
              </Link>
            </div>
          </div>

          {/* Right: Festival Photo */}
          <div className="relative min-h-[400px] lg:min-h-full">
            {/* Placeholder - replace with actual festival crowd photo */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
              <div className="text-center text-white/50">
                <Music className="h-24 w-24 mx-auto mb-4" />
                <p className="text-sm">Festival Photo Placeholder</p>
                <p className="text-xs mt-2">
                  Add image to: public/images/hero/festival-crowd.jpg
                </p>
              </div>
            </div>

            {/* Photo Caption Overlay */}
            <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 text-xs text-foreground/70">
              Iconic Festival, Goffertpark, Nijmegen
            </div>
          </div>
        </div>

        {/* Bold Statement Banner */}
        <div className="bg-[hsl(280,70%,20%)] text-white text-center py-6 px-4">
          <p className="text-xl md:text-2xl lg:text-3xl font-bold">
            BEST OF TRIBUTE – 9 MEI 2026 – GOFFERTPARK NIJMEGEN
          </p>
        </div>
      </section>

      {/* Featured Artists Preview - Carousel */}
      <section className="py-12 md:py-16 bg-accent/10">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 text-accent">
              DIT IS DE LINE-UP VAN 2026
            </h2>
            <p className="text-xl md:text-2xl font-semibold text-foreground/70">
              MAINSTAGE
            </p>
          </div>

          {/* Artist Carousel */}
          <Carousel
            opts={{
              align: 'center',
              loop: true,
            }}
            className="w-full max-w-6xl mx-auto"
          >
            <CarouselContent className="-ml-3">
              {[
                'Queen Tribute',
                'Golden Earring Tribute',
                'Urban Soulitude – Anouk Tribute',
                'Mystery Band',
                'Donna Summer Tribute',
                'Coldplay Tribute',
                'Pink Floyd Tribute',
                'Fleetwood Mac Tribute',
                'ABBA Tribute',
              ].map((artist, index) => (
                <CarouselItem
                  key={index}
                  className="pl-3 basis-4/5 sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                >
                  <Card className="border-4 border-white shadow-lg overflow-hidden hover:scale-105 transition-transform">
                    {/* Artist Image */}
                    <div className="aspect-[3/4] bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center relative">
                      <Music className="h-20 w-20 text-muted-foreground/40" />
                      {/* Placeholder text */}
                      <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                        <p className="text-xs text-white/70 text-center px-4">
                          Artist Photo<br />
                          Add to: public/images/artists/
                        </p>
                      </div>
                    </div>

                    {/* Artist Name */}
                    <div className="bg-white p-4 text-center border-t-4 border-accent">
                      <h3 className="font-bold text-base md:text-lg text-foreground">
                        {artist}
                      </h3>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>

          {/* Dot Navigation Indicators - Visual only */}
          <div className="flex justify-center gap-2 mt-8">
            {[...Array(9)].map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full ${
                  i === 0 ? 'bg-secondary' : 'bg-accent'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Decorative zigzag pattern */}
        <div className="mt-8 h-8 bg-primary/20" style={{
          clipPath: 'polygon(0 0, 5% 100%, 10% 0, 15% 100%, 20% 0, 25% 100%, 30% 0, 35% 100%, 40% 0, 45% 100%, 50% 0, 55% 100%, 60% 0, 65% 100%, 70% 0, 75% 100%, 80% 0, 85% 100%, 90% 0, 95% 100%, 100% 0)'
        }} />
      </section>

      {/* News Preview - Compact */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Laatste Nieuws
            </h2>
          </div>

          {/* News Grid - Compact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                date: '15 Nov 2025',
                title: 'Line-up 2026 Aangekondigd',
                excerpt:
                  'Eerste namen bekend! Queen, Golden Earring en Anouk tribute acts bevestigd...',
              },
              {
                date: '01 Nov 2025',
                title: 'Early Bird Tickets Nu Verkrijgbaar',
                excerpt:
                  'Profiteer van korting op de eerste 500 tickets voor Iconic Festival 2026...',
              },
              {
                date: '20 Okt 2025',
                title: 'Terugblik Iconic 2025',
                excerpt:
                  'Wat een geweldig festival! Bekijk de hoogtepunten en foto\'s van dit jaar...',
              },
            ].map((news, i) => (
              <Card
                key={i}
                className="overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="aspect-video bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
                  <Calendar className="h-12 w-12 text-muted-foreground/40" />
                </div>
                <div className="p-5">
                  <div className="text-xs text-muted-foreground mb-2">
                    {news.date}
                  </div>
                  <h3 className="text-base font-bold mb-2">{news.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {news.excerpt}
                  </p>
                  <Button variant="ghost" size="sm" className="px-0 text-accent">
                    Lees meer
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/nieuws">
              <Button size="lg" variant="outline">
                Alle Nieuws
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section - Compact */}
      <section className="py-12 md:py-16 festival-gradient text-white">
        <div className="container container-padding text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Mis Het Niet!
          </h2>
          <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto text-white/90">
            9 Mei 2026 in Goffertpark, Nijmegen. Koop nu je tickets!
          </p>
          <Link href="/tickets">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90 text-lg px-10 py-6 font-bold"
            >
              <Ticket className="mr-2 h-5 w-5" />
              BESTEL TICKETS
            </Button>
          </Link>
        </div>
      </section>
    </>
  )
}
