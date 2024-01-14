import React from "react";
import heroImg from "../../assets/images/hero.jpg";
import CountUp from "react-countup";
import Typed from "typed.js";
import { useRef } from "react";
import { useEffect } from "react";

const Hero = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Software Engineer",
        "FullStack Developer",
        "APP Developer",
        "Backend Developer",
      ], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 100,
      typeSpeed: 80,
      backSpeed: 20,
      backDelay: 100,
      loop: true,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="pt-0" id="about">
      <div className="container pt-14">
        <div className="md:flex items-center justify-between sm:flex-col md:flex-row">
          {/* ------Hero left content---------- */}
          <div className="w-full md:basis-1/2">
            <h5
              data-aos="fade-right"
              data-aos-duration="1500"
              className="text-headingColor font-[600] text-[1.8rem] sm:text-[40px]"
            >
              Hello welcome
            </h5>
            <h1
              data-aos="fade-up"
              data-duration="1500"
              className="text-headingColor font-[800] text-[1.8rem] sm:text-[40px] leading-[35px] sm:leading-[46px] mt-5"
            >
              I'm Manan Sethi <br />
              <span className="text-primaryColor underline" ref={el}></span>
            </h1>
            <div
              data-aos="fade-up"
              data-aos-duration="1800"
              data-aos-delay="200"
              className="flex items-center gap-6 mt-7"
            >
              <a
                href="https://drive.google.com/file/d/1mbZj9cHwFaoKBI_04jIXgpVoXNfgnMfg/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-primaryColor text-white font-[500] flex items-center gap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px]">
                  <i class="ri-download-fill"></i> Resume
                </button>
              </a>
              <a
                href="#portfolio"
                className="text-smallTextColor font-[600] text-[16px] border-b border-solid border-smallTextColor"
              >
                See Portfolio
              </a>
            </div>
            <p
              data-aos="fade-left"
              data-aos-duration="1500"
              className="flex gap-2 text-headingColor mt-12 font-[500] text-[18px] leading-7 sm:pl-14 sm:pr-10"
            >
              <span>
                <i class="ri-apps-2-line"></i>
              </span>
              As a full-stack developer, I thrive on the dual responsibilities
              of shaping engaging user interfaces and building resilient backend
              structures to build dynamic web applications.
              {/* Committed to delivering cutting-edge, user-centric experiences that push the boundaries of digital innovation. */}
            </p>
            <div className="flex items-center gap-9 mt-14">
              <span className="text-smallTextColor text-[20px] font-[600]">
                Follow me:
              </span>
              <span>
                <a
                  href="https://www.linkedin.com/in/manan-sethi-041ab0184/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-smallTextColor text-[22px] font-[600]"
                >
                  <i class="ri-linkedin-line"></i>
                </a>
              </span>
              <span>
                <a
                  href="https://github.com/manansethi22?tab=overview&from=2023-11-01&to=2023-11-30"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-smallTextColor text-[22px] font-[600]"
                >
                  <i class="ri-github-fill"></i>
                </a>
              </span>
              <span>
                <a
                  href="https://www.instagram.com/manan_sethi._/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-smallTextColor text-[22px] font-[600]"
                >
                  <i class="ri-instagram-line"></i>
                </a>
              </span>
            </div>
          </div>
          {/* ------Hero left end-------------- */}
          {/* --------Hero img----------------- */}
          <div className="basis-1/3 mt-10 sm:mt-0 ">
            <figure className="flex items-center justify-center">
              <img src={heroImg} className="rounded-[500px] " alt="" />
            </figure>
          </div>
          {/* --------Hero img end------------- */}
          {/* --------Hero content right------- */}
          <div className="md:basis-1/5 flex justify-between text-center mt-10 flex-wrap gap-3 md:mt-0 md:flex-col md:justify-end md:text-end">
            <div className="mb-10">
              <h2 className="text-headingColor font-[700] text-[32px]">1+</h2>
              <h4 className="text-headingColor font-[600] text-[18px]">
                Years of experience
              </h4>
            </div>
            <div className="mb-10">
              <h2 className="text-headingColor font-[700] text-[32px]">
                <CountUp start={0} end={100} duration={2} suffix="%" />
              </h2>
              <h4 className="text-headingColor font-[600] text-[18px]">
                Success Rate
              </h4>
            </div>
            <div className="mb-10">
              <h2 className="text-headingColor font-[700] text-[32px]">
                <CountUp start={0} end={3} duration={2} suffix="+" />
              </h2>
              <h4 className="text-headingColor font-[600] text-[18px]">
                Happy Clients
              </h4>
            </div>
            <div className="mb-10">
              <h2 className="text-headingColor font-[700] text-[32px]">
                <CountUp start={0} end={10} duration={2} suffix="+" />
              </h2>
              <h4 className="text-headingColor font-[600] text-[18px]">
                Projects Completed
              </h4>
            </div>
          </div>
          {/* --------Hero content right end------- */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
