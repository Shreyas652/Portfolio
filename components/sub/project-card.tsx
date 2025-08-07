import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  src: string;
  title: string;
  link: string;
};

export const ProjectCard = ({
  src,
  title,
  link,
}: ProjectCardProps) => {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noreferrer noopener"
      className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] group hover:scale-105 transition-transform duration-300"
    >
      <div className="relative w-full h-48 bg-gray-900">
        <Image
          src={src}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <div className="relative p-4 bg-gradient-to-t from-black/80 to-transparent">
        <h1 className="text-lg font-semibold text-white truncate">{title}</h1>
      </div>
    </Link>
  );
};
