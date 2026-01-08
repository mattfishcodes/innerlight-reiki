import Footer from '@/components/Footer'
import Header from '@/components/Header'
import PageWrapper from '@/components/PageWrapper'

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <PageWrapper>{children}</PageWrapper>
      <Footer />
    </>
  )
}
