import React from "react";
import frontendImg from "../../assets/images/front-end.png";
import backendImg from "../../assets/images/backend.png";
import uiImg from "../../assets/images/design.png";
import appsImg from "../../assets/images/apps.png";

const Services = () => {
  return (
    <section id="services">
      <div className="container lg:pt-5">
        <div className="text-center">
          <h2 className="text-headingColor font-[800] text-[2.4rem] mb-5">
            What do I help
          </h2>
          <p className="lg:max-w-[600]px lg:mx-auto text-headingColor font-[500] text-[18px] leading-7">
            I specialize in dynamic UIs with React and React Native, backed by
            full-stack expertise in Node.js and Express. Proficient in MongoDB
            and MySQL, I optimize performance, integrate APIs, and prioritize
            security. With Git, Webpack, and a commitment to clean code, I stay
            updated with emerging technologies for scalable and future-ready
            solutions.
          </p>
        </div>
        <div className="flex flex-col justify-center sm:py-12">
          <div className="w-full py-3 px-2 sm:max-w-xl sm:mx-auto sm:px-0">
            <div className="relative text-gray-700 antialiased text-sm font-semibold">
              {/* =============vertical line running through the middle========== */}
              <div className="hidden absolute w-1 sm:block bg-indigo-300 h-full left-1/2 transform-translate-x-1/2"></div>
              {/* ===============left card======================== */}
              <div className="mt-6 sm:mt-0 sm:mb-2">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-start w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pr-8">
                      <div
                        data-aos="fade-right"
                        data-aos-duraiton="1200"
                        className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150"
                      >
                        <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-2xl">
                          App Development
                        </h3>
                        <p className="text-[15px] text-smallTextColor group-hover:font-[600] leading-7">
                          As a specialized app developer, I excel in crafting
                          visually stunning and responsive user interfaces using
                          React Native, ensuring seamless and engaging
                          experiences on mobile platforms.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                    <figure>
                      <img src={appsImg} alt="" />
                    </figure>
                  </div>
                </div>
              </div>
              {/* ===============right card===================== */}
              <div className="mt-6 sm:mt-0 sm:mb-2">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-end w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pl-8">
                      <div
                        data-aos="fade-left"
                        data-aos-delay="50"
                        data-aos-duraiton="1300"
                        className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150"
                      >
                        <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-2xl">
                          Backend Development
                        </h3>
                        <p className="text-[15px] text-smallTextColor group-hover:font-[600] leading-7">
                          I engineer scalable and efficient server-side
                          architectures using technologies like Node.js and
                          Express for seamless data management and
                          high-performance applications.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                    <figure>
                      <img src={backendImg} alt="" />
                    </figure>
                  </div>
                </div>
              </div>
              {/* ===============left card======================== */}
              <div className="mt-6 sm:mt-0 sm:mb-2">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-start w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pr-8">
                      <div
                        data-aos="fade-right"
                        data-aos-delay="100"
                        data-aos-duraiton="1400"
                        className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150"
                      >
                        <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-2xl">
                          Frontend Development
                        </h3>
                        <p className="text-[15px] text-smallTextColor group-hover:font-[600] leading-7">
                          I specialize in creating captivating user interfaces
                          with React, leveraging my design skills to transform
                          concepts into visually appealing and intuitive digital
                          experiences.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                    <figure>
                      <img src={frontendImg} alt="" />
                    </figure>
                  </div>
                </div>
              </div>
              {/* ===============right card===================== */}
              <div className="mt-6 sm:mt-0 sm:mb-2">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-end w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pl-8">
                      <div
                        data-aos="fade-left"
                        data-aos-delay="100"
                        data-aos-duraiton="1500"
                        className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150"
                      >
                        <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-2xl">
                          FullStack Development
                        </h3>
                        <p className="text-[15px] text-smallTextColor group-hover:font-[600] leading-7">
                          I seamlessly integrate frontend finesse with backend
                          robustness, ensuring end-to-end development
                          proficiency in crafting comprehensive, user-centric
                          digital solutions.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                    <figure>
                      <img src={uiImg} alt="" />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
