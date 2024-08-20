// src/components/Home.jsx
import { NAME, TITLE } from "../constants";
import TypingAnimation from "@/components/magicui/typing-animation";
import AnimatedShinyText from "./magicui/animated-shiny-text";
import { FiDownload } from "react-icons/fi";
import ShinyButton from "./magicui/shiny-button";

const Home = () => {
  return (
    <>
      <section
        id="home"
        className="min-h-screen flex items-center justify-center"
      >
        <div className="text-center">
          <AnimatedShinyText className="transition ease-out hover:text-neutral-300 hover:duration-100 hover:dark:text-zinc-100">
            <h2 className="text-6xl font-bold mb-4">{NAME}✨</h2>
          </AnimatedShinyText>

          <p className="text-3xl text-gray-700 mb-4">
            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent">
              <TypingAnimation
                className="text-4xl font-bold inline-block"
                text={TITLE}
              />
            </span>
          </p>

          <p className="text-lg text-gray-500">SCROLL DOWN TO FIND ME 😉</p>

          <a
            href="https://drive.google.com/file/d/1-qnFDn5DAxzwgRcETo_lWOuxmf-DrDGy/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="items-center justify-center flex pt-5"
          >
            <ShinyButton text="Download Resume" icon={<FiDownload />} />
          </a>
        </div>
      </section>
    </>
  );
};

export default Home;
