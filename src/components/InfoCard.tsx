"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import Image from "next/image";

interface InfoCardProps {
  title1: string;
  title2?: string;
  des?: string;
  description?: string;
  image: string;
  link?: string;
  animation?: "left" | "center" | "right";
  position?: string;
}

export default function InfoCard({
  title1,
  title2,
  image,
  des,
  description,
  animation,
  link,
  position
}: InfoCardProps) {
  const [clicked, setClicked] = useState(false);

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: animation == "left" ? "-10%" : animation === "center" ? "0" : "10%",
        y: animation == "center" ? "10%" : "0%",
      }}
      animate={{
        transition: {
          duration: 0.5,
        },
      }}
      whileHover={{
        scale: 1.02,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
          duration: 0.5,
        },
      }}
      transition={{
        duration: 0.1,
      }}
      // viewport={{
      //   amount: 0.3,
      // }}
      // onClick={() => setClicked1((clicked1) => !clicked1)}
      className="flex flex-col cursor-pointer md:w-[400px] shadow-xl md:h-[450px] w-[300px] h-[350px] bg-black/50 backdrop-blur-xl rounded-2xl"
    >
      {!clicked && (
        <div
          className="flex flex-col bg-black/50 backdrop-blur-xl h-full rounded-2xl"
          onClick={() =>
            description
              ? setClicked((clicked) => !clicked)
              : window.open(link, "_ blank")
          }
        >
          <div className={`relative w-full duration-300 rounded-t-2xl h-full`}>
            <Image
              src={image}
              width={0}
              height={0}
              sizes="100% 100%"
              alt="Saturn Roman"
              className={`w-full h-full object-cover  duration-300 rounded-2xl`}
              style={{objectPosition: position ? position : "center center"}}

            ></Image>

            <div
              className="absolute bottom-0 left-0 w-full h-1/2 pointer-events-none 
               backdrop-blur-xl
               [mask-image:linear-gradient(to_top,black_50%,transparent)]
               [Webkit-mask-image:linear-gradient(to_top,black_50%,transparent)] rounded-b-2xl"
            />

          </div>
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.5,
            }}
            className={` w-full h-1/3 transition px-5 absolute flex flex-col m-auto justify-center items-center  left-0 right-0 bottom-0 rounded-b-2xl `}
          >
            <p className="text-white font-bold md:text-xl text-lg text-center">
              {title1}
              {title2 && (
                <>
                  <br />
                  {title2}
                </>
              )}
            </p>
            {des && (
              <p
                className={`text-center text-white text-xs opacity-80 font-bold mt-1`}
              >
                {des}
              </p>
            )}
          </motion.div>
        </div>
      )}

      {clicked && description && (
        <>
          <div
            className={`absolute w-full h-full duration-300 rounded-t-2xl md:h-full -z-10`}
          >
            <Image
              src={image}
              width={0}
              height={0}
              sizes="100% 100%"
              alt="Saturn Roman"
              className={`w-full h-full object-cover duration-300 rounded-2xl `}
              style={{objectPosition: position ? position : "center center"}}
            ></Image>
          </div>
          <div
            className="absolute bottom-0 left-0 w-full h-full pointer-events-none 
               backdrop-blur-xl
               [mask-image:linear-gradient(to_top,black_100%,transparent)]
               [Webkit-mask-image:linear-gradient(to_top,black_100%,transparent)] rounded-2xl -z-10"
          />
          <div className="flex justify-end p-5 cursor-default">
            <motion.svg
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              className="size-9 cursor-pointer hover:scale-110 duration-150"
              onClick={() => setClicked((clicked) => !clicked)}
            >
              <path
                fill-rule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
                clip-rule="evenodd"
              />
            </motion.svg>
          </div>

          <div className="relative h-full md:p-10 px-10 md:text-base text-white text-center cursor-default">
            <motion.p
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: 0.5,
              }}
              className="md:text-base text-sm"
            >
              {description}
            </motion.p>

            {link && (
              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  duration: 0.5,
                }}
                className="absolute bottom-0 flex justify-center m-auto left-0 right-0 pb-10 rounded-b-2xl"
              >
                <a
                  href={link}
                  target="_blank"
                  className="px-5 py-2 border-2 border-white rounded-full hover:scale-110 duration-200"
                >
                  Read more
                </a>
              </motion.div>
            )}
          </div>
        </>
      )}
    </motion.div>
  );
}