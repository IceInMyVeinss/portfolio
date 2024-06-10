"use client";

import React from "react";
import Image from "next/image";
import Project1Image from "../../../public/Project1.png";
import Project2Image from "../../../public/Project2.png";
import Project3Image from "../../../public/Project3.png";
import Project4Image from "../../../public/Project4.png";
import { Chip } from "@/components/Chip";

export function Projects() {
  return (
    <div className="mx-auto flex flex-col items-center">
      {/* Project 1 */}
      <div className="flex flex-row">
        <div className="flex flex-col items-center mx-12 w-[421px]">
          <Chip label={"Stack Overflow clone"} />
          <p className="my-10">
            ``Stack Overflow``-той адилхан функцтэй 10 жилийн хүүхдүүдэд зориулж
            хийсэн төсөл. Хүүхдүүд нэгнийхээ мэдэхгүй хичээлийнх нь асуултанд
            хариулж ``Хэрвээ зөв хариулбал оноо авч, буруу хариулсан үед оноо
            авахгүй.
          </p>
        </div>
        <div className="">
          <Image
            src={Project1Image}
            alt="first-project-img"
            className="w-[445px] h-[300px] bg-cover"
          />
        </div>
      </div>
      {/* project 2 */}
      <div className="flex flex-row my-12">
        <div className="">
          <Image
            src={Project2Image}
            alt="second-project-img"
            className="w-[445px] h-[300px] bg-cover"
          />
        </div>
        <div className="flex flex-col items-center mx-12 w-[421px]">
          <Chip label={"Personal Finance"} />
          <p className="my-10">
            Хувь хүнд санхүүгээ зөв хөтөлж сурахад хэрэгтэй ба тооцоолоогүй
            зардал гарахаас сэргийлэх зорилготой.
          </p>
        </div>
      </div>
      {/* project 3 */}
      <div className="flex flex-row my-12">
        <div className="flex flex-col items-center mx-12 w-[421px]">
          <Chip label={"Food Delivery"} />
          <p className="my-10">
            Ресторанууд нь утсаар захиалга авахад дуудлага хүлээн авах хүн нь
            хүрэлцэхгүй, цаг хугацаа алдах, захиалагч нь захиалсан хоол нь
            хүргэлтэнд гарсан эсэххийг мэдэхгүй зэрэг олон асуудал гардаг.
          </p>
        </div>
        <div className="">
          <Image
            src={Project3Image}
            alt="third-project-img"
            className="w-[445px] h[300px] bg-cover"
          />
        </div>
      </div>
      {/* project 4 */}
      <div className="flex flex-row my-12">
        <div className="">
          <Image
            src={Project4Image}
            alt="fourth-project-img"
            className="w-[445px] h-[300px] bg-cover"
          />
        </div>
        <div className="flex flex-col items-center mx-12 w-[421px]">
          <Chip label={"Flight ticket"} />
          <p className="my-10">Онгоцны тасалбараа заавал онгоцны буудалдаа очиж захиалах шаардлагагүй онлайнаар захиалж аялалынхаа төлөвлөгөөг гаргаж болно.</p>
        </div>
      </div>
    </div>
  );
}
