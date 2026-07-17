import { HiArrowDown } from "react-icons/hi";
import { Link as ScrollLink } from "react-scroll/modules";
import bgImage from "../assets/bgpattern3.png";
import profile from "../assets/images/AVA.jpg";
import rezume from "../assets/CV_EN.pdf"; 

function Hero() {
  return (
    <section id="home">
      <div
        className="relative md:h-[calc(100vh-200px)] flex flex-col text-center items-center 
            justify-center animate-fadeIn animation-delay-2 my-10 py-16 
            sm:py-30 md:py-24 md:flex-row md:space-x-4 md:text-left"
      >
        <div
          style={{ backgroundImage: `url(${bgImage})` }}
          className="bg-pattern bg-hero"
        ></div>

        {/* Profile Image */}
        <div className="md:mt-2 md:w-1/2 ">
          <img
            src={profile}
            alt="Profile image"
            className="rounded-full shadow-[0_10px_40px_rgba(255,255,255,0.9)] w-[230px] xl:w-[320px]"
          />
        </div>

        {/* Hero Content */}
        <div className="md:mt-2 md:w-3/5 relative">
          <h1
            className="heading text-4xl font-bold mt-6 md:mt-0 md:text-5xl 
            md:whitespace-nowrap md:-ml-4"
          >
            Hi, i'm Anvar!
          </h1>
          <p className="font-semibold text-xl mt-4 mb-6 md:text-2xl">
            <span className="">I'm a FullStack Developer</span>
          </p>
          <p className="mt-4 mb-10 text-gray-300 md:text-lg">
            JavaScript | TypeScript | React | NextJS  <br />
            Go | Node.js/Express.js | PostgreSQL <br />
             Rest API | Git 
          </p>

          {/* Contact Button */}
          <ScrollLink
            smooth={true}
            offset={-100}
            spy={true}
            to="contact"
            className="text-primary-foreground font-semibold px-6 py-3 bg-secondary rounded-lg cursor-pointer shadow hover:bg-accent transition"
          >
            Contact
          </ScrollLink>

          {/* Resume Button */}
          <a
            href={rezume} // PDF faylga havola
            download // Yuklab olish uchun download atributi
            className="text-primary-foreground font-semibold px-6 py-3 bg-secondary mt-6 ml-[30px] rounded-lg cursor-pointer shadow hover:bg-accent transition"
          >
            Resume
          </a>
        </div>
      </div>

      {/* Arrow Down */}
      <div className="flex flex-row items-center text-center justify-center">
        <ScrollLink
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce cursor-pointer" />
        </ScrollLink>
      </div>
    </section>
  );
}

export default Hero;
