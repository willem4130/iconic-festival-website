'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Ticket } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Line-up', href: '/line-up' },
  { name: 'In de Media', href: '/in-de-media' },
  { name: 'Nieuws', href: '/nieuws' },
  { name: 'Tickets', href: '/tickets' },
  { name: 'Over Iconic', href: '/over-iconic' },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-16 items-center justify-between container-padding">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-full festival-gradient" />
          <span className="text-2xl font-bold festival-text-gradient">
            ICONIC
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:space-x-1 lg:space-x-2">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-foreground hover:bg-muted rounded-md"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* CTA Button + Mobile Menu */}
        <div className="flex items-center space-x-4">
          {/* Ticket CTA Button */}
          <Link href="/tickets" className="hidden sm:block">
            <Button className="btn-festival group">
              <Ticket className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
              Tickets
            </Button>
          </Link>

          {/* Mobile Menu Toggle */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                {isOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-4 mt-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium text-foreground/80 hover:text-foreground transition-colors py-2"
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4 border-t">
                  <Link href="/tickets" onClick={() => setIsOpen(false)}>
                    <Button className="w-full btn-festival">
                      <Ticket className="mr-2 h-4 w-4" />
                      Koop Tickets
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}
