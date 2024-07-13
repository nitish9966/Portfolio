import React from 'react';
import { FaReact } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { IoLogoVercel } from "react-icons/io5";
import { FaGitAlt } from "react-icons/fa6";
import { TbBrandSnowflake } from "react-icons/tb";
import { FaAws } from "react-icons/fa";
import { SiUnrealengine } from "react-icons/si";
import { FaUnity } from "react-icons/fa6";
import { SiPowerbi } from "react-icons/si";
import { SiFigma } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import Marquee from './magicui/marquee';

const Skills = () => {
  return (
    <section id="skills" className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-8">Skills</h2>
        <div className="flex flex-col space-y-6">
          <Marquee pauseOnHover speed={50} gradient={false} className="rounded-2xl border-4 border-neutral-800 m-6 p-6 justify-center bg-gradient-to-r from-black to-black via-zinc-800 via-neutral-800 via-slate-800 via-gray-800">
            <div className="flex flex-row text-7xl space-x-6">
              <SiMongodb className="text-[#4DB33D]" />
              <SiExpress className="text-gray-400" />
              <FaReact className="text-[#61DAFB]" />
              <FaNodeJs className="text-[#3C873A]" />
              <FaGitAlt className="text-[#F1502F]" />
              <RiTailwindCssFill className="text-[#38B2AC]" />
              <IoLogoFirebase className="text-[#FFCA28]" />
              <BiLogoPostgresql className="text-[#336791]" />
              <IoLogoVercel className="text-[#323334]" />
              <FaAws className="text-[#FF9900]" />
            </div>
          </Marquee>
          <Marquee pauseOnHover speed={50} gradient={false} className="rounded-2xl border-4 border-neutral-800 m-6 p-6 justify-center bg-gradient-to-r from-black to-black via-zinc-800 via-neutral-800 via-slate-800 via-gray-800">
            <div className="text-7xl flex flex-row space-x-6">
              <FaHtml5 className="text-[#E34F26]" />
              <FaCss3Alt className="text-[#1572B6]" />
              <IoLogoJavascript className="text-[#F7DF1E]" />
              <FaJava className="text-[#007396]" />
              <FaPython className="text-[#3776AB]" />
              <SiFigma className="text-[#A259FF]" />
              <TbBrandSnowflake className="text-[#56B4E9]" />
              <SiPowerbi className="text-[#F2C811]" />
              <SiUnrealengine className="text-[#373a41]" />
              <FaUnity className="text-[#343b42]" />
            </div>
          </Marquee>
        </div>
      </div>
    </section>
  );
}

export default Skills;
