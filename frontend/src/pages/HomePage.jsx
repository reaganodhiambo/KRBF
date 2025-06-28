import { Fixtures } from "../components/homePage/Fixtures";
import Hero from "../components/homePage/Hero";
import Standings from "../components/homePage/Standings";
export default function HomePage() {
  return (
    <main>
      <Hero />
      <Standings />
      <Fixtures />
    </main>
  );
}