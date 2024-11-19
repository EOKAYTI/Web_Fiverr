import React from "react";

import "./services.scss";
const Services = () => {
  return (
    <div className="services">
      <div className="container">
        <h2 className="text-5xl mb-10">Popular services</h2>
        <div className="services_group grid grid-cols-6 gap-5">
          <div className="services_item bg-[#1F8447] p-1 rounded-2xl flex flex-col alig pt-5">
            <h3 className="pb-5 px-[10px] text-lg text-white font-semibold">
              Website Development
            </h3>
            <img className="mx-auto rounded-2xl" src="./s1.webp" alt="s1" />
          </div>
          <div className="services_item bg-[#FF7640] p-1 rounded-2xl flex flex-col justify-between pt-5">
            <h3 className="pb-5 px-[10px] text-lg text-white font-semibold">
              Logo Design
            </h3>
            <img className="mx-auto rounded-2xl" src="./s2.webp" alt="s1" />
          </div>
          <div className="services_item bg-[#003912] p-1 rounded-2xl flex flex-col justify-between pt-5">
            <h3 className="pb-5 px-[10px] text-lg text-white font-semibold">
              SEO
            </h3>
            <img className="mx-auto rounded-2xl" src="./s3.webp" alt="s1" />
          </div>
          <div className="services_item bg-[#633341] p-1 rounded-2xl flex flex-col justify-between pt-5">
            <h3 className="pb-5 px-[10px] text-lg text-white font-semibold">
              Architecture & Interior Design
            </h3>
            <img className="mx-auto rounded-2xl" src="./s4.webp" alt="s1" />
          </div>
          <div className="services_item bg-[#687200] p-1 rounded-2xl flex flex-col justify-between pt-5">
            <h3 className="pb-5 px-[10px] text-lg text-white font-semibold">
              Social Media Marketing
            </h3>
            <img className="mx-auto rounded-2xl" src="./s5.webp" alt="s1" />
          </div>
          <div className="services_item bg-[#59301F] p-1 rounded-2xl flex flex-col justify-between pt-5">
            <h3 className="pb-5 px-[10px] text-lg text-white font-semibold">
              Voice Over
            </h3>
            <img className="mx-auto rounded-2xl" src="./s6.webp" alt="s1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
