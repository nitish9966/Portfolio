

const Header = () => {
  return (
   
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#home" className="ml-3 text-xl">
          {/* <img src={logo} alt="Bolla Nitish Babu" className='h-10 w-10 rounded-full'/> */}
          Home
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#about" className="mr-5 hover:text-white text-zinc-500 font-bold">
            About
          </a>
          <a href="#education" className="mr-5 hover:text-white text-zinc-500 font-bold">
            Education
          </a>
          <a href="#skills" className="mr-5 hover:text-white text-zinc-500 font-bold">
            Skills
          </a>
          <a href="#projects" className="mr-5 hover:text-white text-zinc-500 font-bold">
            Projects
          </a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0 text-white">
          Hire Me
        </a>
      </div>
    </header>
  );
};

export default Header;
