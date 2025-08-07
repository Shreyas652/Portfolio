import { HeroContent } from "@/components/sub/hero-content";

export const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full">
      <div
        className="rotate-180 absolute top-[-340px] left-0 w-full h-full object-cover -z-20 bg-gradient-to-b from-purple-900/50 to-black"
        style={{
          backgroundImage: 'radial-gradient(circle at center, rgba(112, 66, 248, 0.3) 0%, rgba(0, 0, 0, 0.8) 100%)'
        }}
      />

      <HeroContent />
    </div>
  );
};
