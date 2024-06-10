"use client";

import React from 'react';
import Image from 'next/image';
import Project5Image from "../../../public/Project5.png";
import { Chip } from '@/components/Chip';
export function RecentWork() {
  return (
    <div className="flex flex-row items-center mx-auto">
      <div className="flex flex-col items-center mx-12 w-[421px]">
        <Chip label={"Current project"} />
        <p className='my-10'>Pinecone Internship HRMS-Payroll Delivery</p>
      </div>
      <div className="">
        <Image src={Project5Image} alt='fifth-project-img' className='w-[445px] h-[300px] bg-cover'/>
      </div>
    </div>
  );
}
