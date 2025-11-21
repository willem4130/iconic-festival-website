import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Seeding Iconic Festival database...')

  // Create sample artists
  const artist1 = await prisma.artist.create({
    data: {
      slug: 'the-bon-jovi-experience',
      name: 'The Bon Jovi Experience',
      description: 'The ultimate Bon Jovi tribute bringing all the hits',
      bio: 'The Bon Jovi Experience is Europe\'s premier tribute to the legendary rock band. With stunning vocal accuracy and an electrifying stage presence, they bring the magic of Bon Jovi\'s greatest hits to life.',
      imageUrl: '/images/artists/bon-jovi-experience.webp',
      year: 2025,
      order: 1,
      featured: true,
    },
  })

  const artist2 = await prisma.artist.create({
    data: {
      slug: 'queen-forever',
      name: 'Queen Forever',
      description: 'A spectacular tribute to the legendary Queen',
      bio: 'Queen Forever delivers an authentic recreation of Queen\'s iconic performances. From Bohemian Rhapsody to We Will Rock You, experience the power and passion of Freddie Mercury and the band.',
      imageUrl: '/images/artists/queen-forever.webp',
      year: 2025,
      order: 2,
      featured: true,
    },
  })

  const artist3 = await prisma.artist.create({
    data: {
      slug: 'fleetwood-mac-revival',
      name: 'Fleetwood Mac Revival',
      description: 'Celebrating the timeless music of Fleetwood Mac',
      bio: 'Fleetwood Mac Revival brings the magic of Rumours and beyond to the Iconic stage. Experience the harmonies, the emotion, and the unforgettable songs that defined a generation.',
      imageUrl: '/images/artists/fleetwood-mac-revival.webp',
      year: 2025,
      order: 3,
      featured: false,
    },
  })

  console.log('✅ Created artists:', { artist1, artist2, artist3 })

  // Create sample news articles
  const news1 = await prisma.newsArticle.create({
    data: {
      slug: 'lineup-announcement-2025',
      title: 'Line-up 2025 Bekend: De Grootste Tribute Acts!',
      excerpt:
        'We zijn trots om de eerste namen voor Iconic Festival 2025 aan te kondigen. De beste tribute acts komen naar Nijmegen!',
      content: `
# Line-up 2025 Bekend!

We zijn enorm trots om de eerste namen voor **Iconic Festival 2025** aan te kondigen!

Dit jaar verwelkomen we enkele van Europa's beste tribute acts op ons podium in Goffertpark, Nijmegen.

## Bevestigde Acts:
- The Bon Jovi Experience
- Queen Forever
- Fleetwood Mac Revival
- En meer namen volgen binnenkort!

Blijf onze website en social media volgen voor meer updates. Tickets zijn nu beschikbaar!
      `,
      coverImage: '/images/news/lineup-announcement-2025.webp',
      author: 'Iconic Festival Team',
      publishedAt: new Date('2025-01-15'),
      featured: true,
    },
  })

  const news2 = await prisma.newsArticle.create({
    data: {
      slug: 'tickets-now-available',
      title: 'Tickets Nu Beschikbaar!',
      excerpt:
        'De ticketverkoop voor Iconic Festival 2025 is gestart. Wees er snel bij!',
      content: `
# Tickets Nu Beschikbaar!

De ticketverkoop voor **Iconic Festival 2025** is officieel gestart!

## Ticket Types:
- **Early Bird**: €49,50 (beperkt beschikbaar)
- **Regular**: €59,50
- **VIP Package**: €99,50 (inclusief backstage access)

Bestel je tickets nu via onze ticketpartner en zeker je plek voor een onvergetelijke dag vol iconische muziek!
      `,
      coverImage: '/images/news/tickets-available.webp',
      author: 'Iconic Festival Team',
      publishedAt: new Date('2025-01-10'),
      featured: true,
    },
  })

  const news3 = await prisma.newsArticle.create({
    data: {
      slug: 'terugblik-2024',
      title: 'Terugblik: Iconic Festival 2024',
      excerpt:
        'Een geweldige editie ligt achter ons. Bekijk de hoogtepunten van 2024!',
      content: `
# Terugblik: Iconic Festival 2024

Wat een fantastische editie hebben we mogen beleven in 2024!

Meer dan **10.000 bezoekers** genoten van een dag vol legendarische hits en onvergetelijke tribute acts in het prachtige Goffertpark.

## Hoogtepunten:
- Uitverkocht event
- 15 tribute acts
- Perfecte weer
- Geweldige sfeer

Bedankt aan iedereen die erbij was. We zien jullie in 2025!
      `,
      coverImage: '/images/news/terugblik-2024.webp',
      publishedAt: new Date('2024-09-15'),
      featured: false,
    },
  })

  console.log('✅ Created news articles:', { news1, news2, news3 })

  // Create sample media items
  const media1 = await prisma.mediaItem.create({
    data: {
      type: 'PHOTO',
      title: 'Main Stage 2024',
      url: '/images/gallery/2024/main-stage-01.webp',
      thumbnailUrl: '/images/gallery/2024/thumbs/main-stage-01.webp',
      year: 2024,
      category: 'performances',
      order: 1,
      featured: true,
    },
  })

  const media2 = await prisma.mediaItem.create({
    data: {
      type: 'PHOTO',
      title: 'Crowd Atmosphere 2024',
      url: '/images/gallery/2024/crowd-01.webp',
      thumbnailUrl: '/images/gallery/2024/thumbs/crowd-01.webp',
      year: 2024,
      category: 'atmosphere',
      order: 2,
      featured: true,
    },
  })

  const media3 = await prisma.mediaItem.create({
    data: {
      type: 'VIDEO',
      title: 'Aftermovie 2024',
      url: 'https://www.youtube.com/watch?v=example',
      thumbnailUrl: '/images/gallery/2024/thumbs/aftermovie-2024.webp',
      year: 2024,
      category: 'aftermovie',
      order: 1,
      featured: true,
    },
  })

  console.log('✅ Created media items:', { media1, media2, media3 })

  // Create admin user (optional)
  const admin = await prisma.user.upsert({
    where: { email: 'admin@iconicfestival.nl' },
    update: {},
    create: {
      email: 'admin@iconicfestival.nl',
      name: 'Festival Admin',
      role: 'ADMIN',
    },
  })

  console.log('✅ Created admin user:', admin)

  console.log('🎉 Iconic Festival database seeded successfully!')
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error('❌ Error seeding database:', e)
    await prisma.$disconnect()
    process.exit(1)
  })
