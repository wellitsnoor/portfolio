"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export default function Lander() {
  return (
    <div className="w-screen h-screen">
      <div className="flex flex-col bg-black/50 backdrop-blur-3xl h-full">
        <motion.div
          className={`relative w-full h-full`}
          initial={{
            opacity: 0,
            filter: "blur(10px)",
          }}
          animate={{
            opacity: 1,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 1,
          }}
        >
          <Image
            src={"/sardaar.jpg"}
            width={0}
            height={0}
            sizes="100% 100%"
            alt="Banner"
            className={`w-full h-full object-cover object-[100%_50%]`}
          ></Image>

          <div
            className="absolute bottom-0 w-full h-full pointer-events-none 
         backdrop-blur-3xl bg-black/20
         [mask-image:linear-gradient(to_top,black_20%,transparent)]
         [Webkit-mask-image:linear-gradient(to_top,black_10%,transparent)]"
          />
        </motion.div>
        <div
          className={` w-full h-full pt-[3rem] transition px-5 absolute flex flex-col m-auto justify-center items-center  left-0 right-0 bottom-0 rounded-b-2xl `}
        >
          {/* <Image
            src={"/profile.jpg"}
            width={0}
            height={0}
            sizes="100% 100%"
            alt="Logo"
            priority={true}
            blurDataURL="LCJ[I,~q4nD%4nD%~qD%00j[t7IU"
            placeholder="blur"
            className={`w-24 h-24 object-cover object-center rounded-full border-2 border-white grayscale`}
          ></Image> */}

          <p className="text-black font-bold md:text-6xl text-lg text-center">
            {[..."Kanwarnoor"].map((letter, index) => (
              <motion.span
                initial={{
                  opacity: 0,
                  x: -20,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1 + 0.5,
                }}
                key={index}
              >
                {letter}
              </motion.span>
            ))}
          </p>

          <motion.p
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.5,
              delay: 1.5,
            }}
            className="text-BLACK  md:text-3xl text-lg text-center"
          >
            {`{Developer}`}
          </motion.p>
        </div>
      </div>
    </div>
  );
}
