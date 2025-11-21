import Link from 'next/link'
import { Facebook, Instagram, Twitter, Youtube, Mail, MapPin } from 'lucide-react'

const navigation = {
  main: [
    { name: 'Home', href: '/' },
    { name: 'Line-up', href: '/line-up' },
    { name: 'In de Media', href: '/in-de-media' },
    { name: 'Nieuws', href: '/nieuws' },
    { name: 'Tickets', href: '/tickets' },
    { name: 'Over Iconic', href: '/over-iconic' },
  ],
  social: [
    {
      name: 'Facebook',
      href: 'https://facebook.com/iconicfestival',
      icon: Facebook,
    },
    {
      name: 'Instagram',
      href: 'https://instagram.com/iconicfestival',
      icon: Instagram,
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/iconicfestival',
      icon: Twitter,
    },
    {
      name: 'YouTube',
      href: 'https://youtube.com/@iconicfestival',
      icon: Youtube,
    },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Algemene Voorwaarden', href: '/terms' },
    { name: 'Contact', href: '/contact' },
  ],
}

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted/50 border-t">
      <div className="container container-padding py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-10 w-10 rounded-full festival-gradient" />
              <span className="text-2xl font-bold festival-text-gradient">
                ICONIC
              </span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              Een groots muzikaal eerbetoon: herkenbaar, meezingbaar en
              Iconisch. Jaarlijks in Goffertpark, Nijmegen.
            </p>
            <div className="flex items-start space-x-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
              <span>Goffertpark, Nijmegen</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Navigatie</h3>
            <ul className="space-y-3">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Informatie</h3>
            <ul className="space-y-3">
              {navigation.legal.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="mailto:info@iconicfestival.nl"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  info@iconicfestival.nl
                </a>
              </li>
            </ul>
          </div>

          {/* Social & Newsletter */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Volg Ons</h3>
            <div className="flex space-x-4 mb-6">
              {navigation.social.map((item) => {
                const Icon = item.icon
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <span className="sr-only">{item.name}</span>
                    <Icon className="h-5 w-5" />
                  </a>
                )
              })}
            </div>
            <p className="text-xs text-muted-foreground">
              Blijf op de hoogte van de laatste nieuws, line-up updates en
              exclusive aanbiedingen.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Iconic Festival. Alle rechten voorbehouden.
            </p>
            <p className="text-sm text-muted-foreground">
              Made with 🎸 in Nijmegen
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
