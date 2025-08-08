import { About } from "@/components/main/about";
import { Education } from "@/components/main/education";
import { Hero } from "@/components/main/hero";
import { Projects } from "@/components/main/projects";
import { Services } from "@/components/main/services";
import { Skills } from "@/components/main/skills";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col">
        <Hero />
        <About />
        <Skills />
        <Education />
        <Services />
        <Projects />
      </div>
    </main>
  );
}
