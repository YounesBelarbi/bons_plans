import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import SearchBar from "@/features/search/SearchBar";

export default function Home() {
  return (
    <Container>
      <SearchBar placeholder="Rechercher sur bons plans" />
      <Button>teszt</Button>
    </Container>
  );
}
