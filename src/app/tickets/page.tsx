'use client'

import { motion } from 'framer-motion'

export default function TicketsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-accent via-primary to-secondary py-20 md:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
          >
            Tickets
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto"
          >
            Secure je plek voor Iconic Festival 2026
          </motion.p>
        </div>
      </section>

      {/* Weeztix Embed Section */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          {/* Instructions for adding Weeztix embed */}
          <div className="max-w-4xl mx-auto mb-8 p-6 bg-amber-50 border-l-4 border-amber-500 rounded-lg">
            <h2 className="text-lg font-bold text-amber-900 mb-2">
              Weeztix Integration Required
            </h2>
            <p className="text-sm text-amber-800 mb-4">
              To complete the integration, retrieve your Weeztix embed code:
            </p>
            <ol className="text-sm text-amber-800 space-y-2 list-decimal list-inside">
              <li>Log into your Weeztix Dashboard at <a href="https://dashboard.weeztix.com" target="_blank" rel="noopener noreferrer" className="underline">dashboard.weeztix.com</a></li>
              <li>Go to <strong>Manage → Events</strong></li>
              <li>Select your event and click the blue <strong>Edit event</strong> icon</li>
              <li>Click the shopping cart icon to access the <strong>Shops</strong> tab</li>
              <li>Scroll to the bottom and click <strong>Show integration code</strong></li>
              <li>Copy the iframe code and replace the placeholder below</li>
            </ol>
          </div>

          {/* Weeztix Embed Container */}
          <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-4">
            {/*
              REPLACE THIS COMMENT WITH YOUR WEEZTIX IFRAME CODE
              Example format:
              <iframe
                src="https://[your-event].weeztix.com/widget/[shop-id]"
                width="100%"
                height="800"
                frameBorder="0"
                className="w-full"
              />
            */}

            {/* Placeholder - Remove when adding real embed */}
            <div className="w-full h-[800px] bg-gradient-to-br from-accent/10 to-primary/10 rounded-lg flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-accent/20 flex items-center justify-center">
                  <svg className="w-12 h-12 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Weeztix Ticket Shop
                </h3>
                <p className="text-muted-foreground mb-4">
                  Add your Weeztix iframe embed code here
                </p>
                <p className="text-sm text-muted-foreground">
                  File: <code className="bg-muted px-2 py-1 rounded">src/app/tickets/page.tsx</code>
                </p>
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="max-w-4xl mx-auto mt-12 text-center">
            <h2 className="text-2xl font-bold mb-4">Ticket Informatie</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-white rounded-lg shadow-md">
                <div className="text-accent text-3xl font-bold mb-2">Veilig</div>
                <p className="text-sm text-muted-foreground">
                  Alle betalingen verlopen via een beveiligde verbinding
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md">
                <div className="text-secondary text-3xl font-bold mb-2">Direct</div>
                <p className="text-sm text-muted-foreground">
                  Ontvang je tickets direct per e-mail na betaling
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md">
                <div className="text-primary text-3xl font-bold mb-2">Support</div>
                <p className="text-sm text-muted-foreground">
                  Vragen? Neem contact op via tickets@iconicfestival.nl
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
