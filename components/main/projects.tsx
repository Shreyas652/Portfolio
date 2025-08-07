import { ProjectCard } from "@/components/sub/project-card";
import { PROJECTS } from "@/constants";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center py-20"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        {PROJECTS.map((project) => (
          <ProjectCard
            key={project.title}
            src={project.image}
            title={project.title}
            link={project.link}
          />
        ))}
      </div>
      
      {/* Quote below projects */}
      <div className="text-center mt-16">
        <p className="cursive text-[32px] font-medium text-center text-gray-300 max-w-[600px] mx-auto leading-relaxed">
          Ready to explore my projects and discoveries?
        </p>
      </div>
    </section>
  );
};
