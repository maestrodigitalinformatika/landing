export const metadata = {
  title: 'Home - RumahApp',
  description: 'Home - RumahApp',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import FeaturesBlocks from '@/components/features-blocks'
import Testimonials from '@/components/testimonials'
import Newsletter from '@/components/newsletter'
import ContactUs from '@/components/contact-us'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <FeaturesBlocks />
      <Testimonials />
      <ContactUs />
    </>
  )
}
