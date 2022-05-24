import React from "react";
import Layout from "../components/Layout";

const Work = () => {
  return (
    <Layout>
      <div className="text-4xl text-center font-semibold pb-24">My Work</div>
      {/* Grid layout to set your projects */}
      <div className="grid gap-8 grid-cols-3 grid-rows-3">
        {/* Start */}
        <div>
          <a
            href="https://cappcher.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="object-cover w-full h-80 mb-6 rounded"
              src="/placeholder.jpeg"
              alt="Cappcher Website"
            />
          </a>
          <p className="mb-2 text-xl font-bold leading-none sm:text-2xl">
            Cappcher Website
          </p>
          <p>Sample Description of Project</p>
        </div>
        {/* End */}
      </div>
    </Layout>
  );
};

export default Work;
