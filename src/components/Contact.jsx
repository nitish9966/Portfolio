// src/components/Contact.jsx
// import React from 'react';
import { IoLogoGithub } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


import { CONTACT } from "../constants";
import ShinyButton from "./magicui/shiny-button";
import { FiDownload } from "react-icons/fi";

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
        <div className="pt-8 flex flex-col items-center font-bold space-y-4">
    <a className="text-lg text-gray-700 flex items-center">
        <FaPhoneAlt className="text-xl text-green-600 mr-2" />
        {CONTACT.phone_no}
    </a>
    <a href={`mailto:${CONTACT.email}`} className="text-lg text-gray-700 flex items-center pt-4">
        <MdEmail className="mr-4 text-2xl text-sky-400" />
        {CONTACT.email}
    </a>
    <div className="flex space-x-8 pt-6">
    <a href={CONTACT.linkedin} className="text-2xl text-[#0077B5]" aria-label="LinkedIn">
            <FaLinkedin />
        </a>
        <a href={CONTACT.github} className="text-2xl text-black" aria-label="GitHub">
            <IoLogoGithub />
        </a>
        <a href={CONTACT.youtube} className="text-2xl text-red-500" aria-label="YouTube">
            <FaYoutube />
        </a>
        <a href={CONTACT.instagram} className="text-2xl text-pink-500" aria-label="Instagram">
            <FaInstagram />
        </a>
        <a href={CONTACT.twitter} className="text-2xl text-blue-500" aria-label="Twitter">
            <BsTwitterX />
        </a>
    </div>
    <a
  href="https://drive.google.com/file/d/1-qnFDn5DAxzwgRcETo_lWOuxmf-DrDGy/view?usp=sharing"
  target="_blank"
  rel="noopener noreferrer"
  className='items-center justify-center flex pt-5'
>
  <ShinyButton
    text="Download Resume"
    icon={<FiDownload />}
  />
</a>
</div>

      </div>
    </section>
  );
};

export default Contact;
