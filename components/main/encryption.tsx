"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { slideInFromTop } from "@/lib/motion";

export const Encryption = () => {
  return (
    <div className="flex flex-row relative items-center justify-center min-h-screen w-full h-full -z-20">
      <div className="absolute w-auto h-auto top-0 z-[5]">
        <motion.div
          variants={slideInFromTop}
          className="text-[40px] font-medium text-center text-gray-200"
        >
          Modern{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            &
          </span>{" "}
          Innovation.
        </motion.div>
      </div>

      <div className="flex flex-col items-center justify-center translate-y-[-50px] absolute z-[20] w-auto h-auto">
        <div className="flex flex-col items-center group cursor-pointer w-auto h-auto">
                    <Image
            src="/Portfolio/lock-top.png"
            alt="Lock top"
            width={50}
            height={50}
            className="translate-y-5 transition-all duration-200 group-hover:translate-y-11"
          />
          <Image
            src="/Portfolio/lock-main.png"
            alt="Lock Main"
            width={70}
            height={70}
            className="-translate-y-5 transition-all duration-200 group-hover:translate-y-12"
          />
        </div>

        <div className="Welcome-box px-[15px] py-[4px] z-[20] border my-[20px] border-[#7042F88B] opacity-[0.9]">
          <h1 className="Welcome-text text-[12px]">Innovation</h1>
        </div>
      </div>

      <div className="absolute z-[20] bottom-[10px] px-[5px]">
        <div className="cursive text-[20px] font-medium text-center text-gray-300">
          Building innovative solutions with cutting-edge technology.
        </div>
      </div>

      <div className="w-full flex items-start justify-center absolute">
        <div 
          className="w-full h-screen bg-gradient-to-br from-green-900/20 to-purple-900/20"
          style={{
            backgroundImage: 'radial-gradient(circle at center, rgba(34, 197, 94, 0.1) 0%, rgba(147, 51, 234, 0.1) 100%)'
          }}
        />
      </div>
    </div>
  );
};
