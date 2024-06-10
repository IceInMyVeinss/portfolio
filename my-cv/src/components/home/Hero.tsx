"use client";

import React from "react";
import { About } from "@/app/about/About";
import { Projects } from "@/app/projecct/Projects";
import { Chip } from '../Chip';
import { RecentWork } from "@/app/recentWork/RecentWork";
import { GetInTouch } from "@/app/getInTouch/GetInTouch";

export function Hero() {
  return (
    <div className="flex flex-col items-center">
      <About />
      <div className="my-8 ">
        <Chip label={"My Projects"} />
      </div>
      <Projects />
      <div className="my-8">
        <Chip label={"Recent Work"} />
      </div>
      <RecentWork />
    </div>
  );
}
