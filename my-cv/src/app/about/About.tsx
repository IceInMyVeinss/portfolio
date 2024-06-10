"use client";

import React from 'react';
import { HeadTitle } from './HeadTitle';
import { HeadBody } from './HeadBody';
import Image from 'next/image';
import PortFolioImage from "../../../public/portfolio.jpg";

export function About() {
  return (
    <div className="mx-20 my-24 flex flex-row items-center justify-around">
      <div className="flex flex-col items-center justify-center max-w-3xl h-96">
        <HeadTitle />
        <HeadBody />
      </div>
      <div className="w-80 h-80 avatar">
        <Image
          src={PortFolioImage}
          alt="my-img"
          className='rounded-full'
        />
      </div>
    </div>
  );
}
