import Container from "@/components/layout/Container";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import HeroBanner from "@/components/layout/HeroBanner";
import AdGrid from "@/features/Ad/AdGrid";

export default function Home() {
  return (
    <>
      <Header />
      <Container>
        <HeroBanner />
        <AdGrid />
      </Container>
      <Footer />
    </>
  );
}
