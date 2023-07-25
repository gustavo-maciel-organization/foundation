import Head from 'next/head'

import { Author } from '@/components/newsleatter/Author'
import { Footer } from '@/components/newsleatter/Footer'
import { FreeChapters } from '@/components/newsleatter/FreeChapters'
import { Hero } from '@/components/newsleatter/Hero'
import { Introduction } from '@/components/newsleatter/Introduction'
import { NavBar } from '@/components/newsleatter/NavBar'
import { Pricing } from '@/components/newsleatter/Pricing'
import { Resources } from '@/components/newsleatter/Resources'
import { Screencasts } from '@/components/newsleatter/Screencasts'
import { TableOfContents } from '@/components/newsleatter/TableOfContents'
import { Testimonial } from '@/components/newsleatter/Testimonial'
import { Testimonials } from '@/components/newsleatter/Testimonials'
import avatarImage1 from '@/images/avatars/avatar-1.png'
import avatarImage2 from '@/images/avatars/avatar-2.png'

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Everything Starts as a Square - Get lost in the world of icon design
        </title>
        <meta
          name="description"
          content="A book and video course that teaches you how to design your own icons from scratch. "
        />
      </Head>
      <Hero />
      <Introduction />
      <NavBar />
      <TableOfContents />
      <Testimonial
        id="testimonial-from-tommy-stroman"
        author={{
          name: 'Tommy Stroman',
          role: 'Front-end developer',
          image: avatarImage1,
        }}
      >
        <p>
          “I didn’t know a thing about icon design until I read this book. Now I
          can create any icon I need in no time. Great resource!”
        </p>
      </Testimonial>
      <Screencasts />
      <Testimonial
        id="testimonial-from-gerardo-stark"
        author={{
          name: 'Gerardo Stark',
          role: 'Creator of Pandemicons',
          image: avatarImage2,
        }}
      >
        <p>
          “I’ve tried to create my own icons in the past but quickly got
          frustrated and gave up. Now I sell my own custom icon sets online.”
        </p>
      </Testimonial>
      <Resources />
      <FreeChapters />
      <Pricing />
      <Testimonials />
      <Author />
      <Footer />
    </>
  )
}
