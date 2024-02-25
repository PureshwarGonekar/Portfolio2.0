"use client";

import Image from "../../assets/project/pchess.png";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../../utiils/ui/3d-card";

type Props = {
  title: string;
  image: string;
  tech: string;
  link: string;
};

export const ThreeDCardDemo =({title,image, tech, link}: Props) =>{
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[40rem] h-auto rounded-xl p-8 border  ">

        <CardItem
          translateZ="50"
          className="text-4xl font-bold text-neutral-600 dark:text-white project cursor-pointer"
        >
        <a href={link} target="_blank">
            <h1>{title}</h1> 
        </a>
        </CardItem>

        <br />

        <CardItem translateZ="100" className="text-neutral-500  mt-2 dark:text-neutral-300">
          <span className="font-bold">Tech: </span> &nbsp; <span className="text-[13px]">{tech}</span>
        </CardItem>

        <br />

        <CardItem translateZ="100" className="w-full mt-4">
          <img
            src={image}
            max-height="200"
            width="100"
            className="w-full max-h-80 object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        {/* <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            Try now →
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Sign up
          </CardItem>
        </div> */}
      </CardBody>
    </CardContainer>
  );
}
