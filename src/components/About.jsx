// src/components/About.jsx
// import React from 'react';

import { ABOUT_TEXT } from "../constants";


const About = () => {
  return (<>
    <section id="about" className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-lg text-gray-700 bg-slate-100 w-[60vw] rounded-md p-4 shadow-md">{ABOUT_TEXT}</p>
      </div>
    </section>
    </>
  );
};

export default About;
