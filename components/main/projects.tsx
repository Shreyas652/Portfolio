import { ProjectCard } from "@/components/sub/project-card";
import { PROJECTS } from "@/constants";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center py-20"
    >
      <h1 className="text-[32px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-16">
        My Projects
      </h1>
      
      {/* Projects Grid - 2 rows */}
      <div className="w-full max-w-7xl px-6">
        {/* First Row - 4 Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {PROJECTS.slice(0, 4).map((project) => (
            <ProjectCard
              key={project.title}
              src={project.image}
              title={project.title}
              link={project.link}
            />
          ))}
        </div>
        
        {/* Second Row - 3 Projects (centered) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {PROJECTS.slice(4, 7).map((project) => (
            <ProjectCard
              key={project.title}
              src={project.image}
              title={project.title}
              link={project.link}
            />
          ))}
        </div>
      </div>
      
      {/* Quote below projects */}
      <div className="text-center mt-16">
        <p className="cursive text-[24px] font-medium text-center text-gray-300 max-w-[500px] mx-auto leading-relaxed">
          Ready to explore my projects and discoveries?
        </p>
      </div>
    </section>
  );
};
