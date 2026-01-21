'use client'

import ContactForm from './components/ContactForm'

export default function Contact() {
  return (
    <main className='py-8'>
      <h3 className='text-secondary-foreground mb-8 text-center md:text-2xl'>
        Fill out this form and I&apos;ll be in touch as soon as possible!
      </h3>
      <ContactForm />
    </main>
  )
}
