"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const links = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Projects",
      link: "#projects",
    },
    {
      name: "About",
      link: "#about",
    },

    {
      name: "Contact",
      link: "#contact",
    },
  ];

  const [scrolled, setScrolled] = React.useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar") as HTMLElement;
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div className="">
      <AnimatePresence>
        {scrolled ? (
          <motion.div
            key={"scrolled-navbar"}
            initial={{
              y: -100,
            }}
            animate={{
              y: 0,
            }}
            transition={{
              duration: 0.5,
            }}
            exit={{
              y: -100,
            }}
            className="w-[60%] fixed left-0 right-0 m-auto h-[5rem] pt-5  z-10"
          >
            <div className="h-[5rem] bg-black/50 backdrop-blur-2xl w-full rounded-full ">
              <ul className="flex justify-center items-center h-full">
                <div className="flex justify-start m-auto items-center gap-5 w-[50%] h-full">
                  <Image
                    src={"/profile.jpg"}
                    width={0}
                    height={0}
                    sizes="100% 100%"
                    alt="Logo"
                    priority={true}
                    blurDataURL="LCJ[I,~q4nD%4nD%~qD%00j[t7IU"
                    placeholder="blur"
                    className={`w-16 h-16 object-cover object-center rounded-full ml-2`}
                  ></Image>
                  <a href="/" className="text-white text-2xl pb-1 font-bold">
                    Kanwarnoor Singh
                  </a>
                </div>
                <div className="flex gap-20 justify-end items-center h-full w-1/2 pr-10">
                  {links.map((link) => (
                    <a href={link.link} key={link.name} className="text-white">
                      {link.name}
                    </a>
                  ))}
                </div>
              </ul>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key={"top-navbar"}
            initial={{
              opacity: 0,
              y: -100,
            }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                delay: 0.5,
                duration: 1,
              },
            }}
            exit={{
              opacity: 0,
              y: -100,
              transition: {
                delay: 0,
                duration: 1,
              },
            }}
            className="w-full absolute left-0 right-0 m-auto h-[3.5rem] z-10 bg-black"
          >
            <ul className="flex w-full h-full">
              <div className="flex gap-40 justify-center m-auto items-center h-full ">
                {links.map((link) => (
                  <a href={link.link} key={link.name} className="text-white ">
                    {link.name}
                  </a>
                ))}
              </div>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
