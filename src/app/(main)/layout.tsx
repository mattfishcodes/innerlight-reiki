import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { PageBackground } from '@/components/PageBackground'

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <PageBackground>
        <Header />
        <Container>{children}</Container>
        <Footer />
      </PageBackground>
    </>
  )
}
