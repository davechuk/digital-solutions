import Hero from "./components/Hero";
import Implementation from "./components/Implementation";
import Design from "./components/Design";
import Team from "./components/Team";
import Clients from "./components/Clients";
import Service from "./components/Service";
import Brainstorming from "./components/Brainstorming";

export default function Home() {
  return (
    <>
      <Hero />
      <Brainstorming />
      <Design />
      <Implementation />
      <Clients />
      <Team />
      <Service />
    </>
  );
}
