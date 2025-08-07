"use client";

import { useState } from "react";
import Link from "next/link";
import { IconType } from "react-icons";

import { FOOTER_DATA } from "@/constants";
import { ContactModal } from "@/components/sub/contact-modal";

export const Footer = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const handleClick = (name: string, link: string) => {
    if (name === "Contact Me") {
      setIsContactModalOpen(true);
    }
  };

  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          {FOOTER_DATA.map((column) => (
            <div
              key={column.title}
              className="min-w-[200px] h-auto flex flex-col items-center justify-start"
            >
              <h3 className="font-bold text-[16px]">{column.title}</h3>
              {column.data.map(({ icon: Icon, name, link }) => {
                const IconComponent = Icon as IconType;
                return name === "Contact Me" ? (
                  <button
                    key={`${column.title}-${name}`}
                    onClick={() => handleClick(name, link)}
                    className="flex flex-row items-center my-[15px] cursor-pointer hover:text-purple-400 transition-colors"
                  >
                    {IconComponent && <IconComponent className="w-4 h-4" />}
                    <span className="text-[15px] ml-[6px]">{name}</span>
                  </button>
                ) : (
                  <Link
                    key={`${column.title}-${name}`}
                    href={link}
                    target={link.startsWith('http') ? "_blank" : "_self"}
                    rel={link.startsWith('http') ? "noreferrer noopener" : undefined}
                    className="flex flex-row items-center my-[15px] hover:text-purple-400 transition-colors"
                  >
                    {IconComponent && <IconComponent className="w-4 h-4" />}
                    <span className="text-[15px] ml-[6px]">{name}</span>
                  </Link>
                );
              })}
            </div>
          ))}
        </div>

        <div className="mb-[20px] text-[15px] text-center">
          &copy; Shreyas Gosavi {new Date().getFullYear()} Inc. All rights reserved.
        </div>
      </div>

      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </div>
  );
};
