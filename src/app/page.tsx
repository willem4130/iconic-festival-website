import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Ticket, Music, Calendar, MapPin, ArrowRight } from 'lucide-react'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center justify-center bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="relative container container-padding text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="festival-text-gradient">ICONIC</span>
            <br />
            <span className="text-3xl md:text-4xl lg:text-5xl text-foreground/90">
              Festival
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 font-semibold mb-8 max-w-3xl mx-auto">
            Een groots muzikaal eerbetoon: herkenbaar, meezingbaar en Iconisch
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/tickets">
              <Button size="lg" className="btn-festival text-lg px-8 py-6">
                <Ticket className="mr-2 h-5 w-5" />
                Koop Tickets
              </Button>
            </Link>
            <Link href="/line-up">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 border-2"
              >
                <Music className="mr-2 h-5 w-5" />
                Bekijk Line-up
              </Button>
            </Link>
          </div>

          {/* Quick Info */}
          <div className="mt-12 flex flex-wrap gap-6 justify-center items-center text-sm md:text-base text-foreground/70">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              <span>Zomer 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              <span>Goffertpark, Nijmegen</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Iconic Section */}
      <section className="section-padding bg-background">
        <div className="container container-padding">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-8">Over Iconic Festival</h2>
            <div className="prose prose-lg max-w-none text-foreground/80 space-y-6">
              <p className="text-lg leading-relaxed">
                Iconic Festival viert jaarlijks de grootste muziekiconen met een
                line-up volledig gewijd aan legendarische hits en tijdloze
                artiesten. De beste tribute acts van hier en over de grens komen
                samen om het vuur en de magie van hun muzikale helden weer tot
                leven te brengen. Tijdens dit festival in Goffertpark, Nijmegen,
                maken we een reis door decennia van iconische muziek: van
                meezingers tot rockklassiekers, van guilty pleasures tot
                onvergetelijke live-optredens.
              </p>
              <p className="text-lg leading-relaxed">
                Iconic Festival draait niet alleen om muziek, maar ook om
                herinneringen, vriendschap, vrijheid en die unieke festivalsfeer.
                Omringd door het groen van het park, vieren we samen de nummers
                die een generatie hebben gevormd – en ons nog steeds raken. Bij
                Iconic brengen we het vuur van toen weer tot leven.
              </p>
            </div>

            {/* Slogan */}
            <div className="mt-12 text-center">
              <blockquote className="text-2xl md:text-3xl font-bold festival-text-gradient italic">
                "Een groots muzikaal eerbetoon: herkenbaar, meezingbaar en
                Iconisch"
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Artists Preview */}
      <section className="section-padding bg-muted/30">
        <div className="container container-padding">
          <div className="text-center mb-12">
            <h2 className="mb-4">Line-up 2025</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              De beste tribute acts van hier en over de grens komen samen om
              legendarische optredens neer te zetten
            </p>
          </div>

          {/* Artist Cards Grid - Placeholder */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Card
                key={i}
                className="overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <Music className="h-16 w-16 text-muted-foreground/40" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Artist Name</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Short description of the tribute act and what they bring to
                    the stage...
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    Meer Info
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/line-up">
              <Button size="lg" variant="outline" className="btn-festival-secondary">
                Volledige Line-up
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* News Preview */}
      <section className="section-padding bg-background">
        <div className="container container-padding">
          <div className="text-center mb-12">
            <h2 className="mb-4">Laatste Nieuws</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Blijf op de hoogte van alle updates, aankondigingen en verhalen
            </p>
          </div>

          {/* News Grid - Placeholder */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[1, 2, 3].map((i) => (
              <Card
                key={i}
                className="overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="aspect-video bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
                  <Calendar className="h-12 w-12 text-muted-foreground/40" />
                </div>
                <div className="p-6">
                  <div className="text-sm text-muted-foreground mb-2">
                    01 Jan 2025
                  </div>
                  <h3 className="text-lg font-bold mb-2">
                    Nieuws Artikel Titel
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Korte samenvatting van het nieuwsartikel met de belangrijkste
                    informatie...
                  </p>
                  <Button variant="ghost" size="sm" className="px-0">
                    Lees meer
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/nieuws">
              <Button size="lg" variant="outline">
                Alle Nieuws
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding festival-gradient text-white">
        <div className="container container-padding text-center">
          <h2 className="text-white mb-6">Mis Het Niet!</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
            Zomer 2025 in Goffertpark, Nijmegen. Koop nu je tickets en maak deel
            uit van een onvergetelijke muzikale reis.
          </p>
          <Link href="/tickets">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6"
            >
              <Ticket className="mr-2 h-5 w-5" />
              Bestel Je Tickets
            </Button>
          </Link>
        </div>
      </section>
    </>
  )
}
