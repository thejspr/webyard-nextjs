import Image from "next/image";
import Container from "./container";
import heroImg from "../public/img/illu-team.png";

import gomoreImg from "../public/img/logos/gomore.png";
import housetripImg from "../public/img/logos/housetrip.png";
import peanutImg from "../public/img/logos/peanut.png";
import skyscannerImg from "../public/img/logos/skyscanner.png";

const Linkedin = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor">
    <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.27 20.1H3.65V9.24h3.62V20.1zM5.47 7.76h-.03c-1.22 0-2-.83-2-1.87 0-1.06.8-1.87 2.05-1.87 1.24 0 2 .8 2.02 1.87 0 1.04-.78 1.87-2.05 1.87zM20.34 20.1h-3.63v-5.8c0-1.45-.52-2.45-1.83-2.45-1 0-1.6.67-1.87 1.32-.1.23-.11.55-.11.88v6.05H9.28s.05-9.82 0-10.84h3.63v1.54a3.6 3.6 0 0 1 3.26-1.8c2.39 0 4.18 1.56 4.18 4.89v6.21z" />
  </svg>
);

export default function Hero() {
  return (
    <>
      <Container className="flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              Hurtig og Pålidelig Software Udvikling
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              Webyard tilbyder software udvikling i Ruby on Rails, Python, React, Node, og meget mere.
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <a
                href="mailto:j@webyard.io"
                target="_blank"
                rel="noopener"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-indigo-600 rounded-md ">
                Tag kontakt
              </a>
              <a
                href="https://www.linkedin.com/in/jesperkjeldgaard/"
                target="_blank"
                rel="noopener"
                className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
                <Linkedin />
                <span> Følg på LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2 pt-[80px]">
          <div className="">
            <Image
              src={heroImg}
              className={"object-cover"}
              alt="Hero Illustration"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
      </Container>
      <Container>
        <div className="flex flex-col justify-center">
          <div className="text-xl text-center text-gray-700 dark:text-white">
            Udvalgte kunder
          </div>

          <div className="flex flex-wrap justify-center items-center gap-5 mt-10 md:justify-around">
            <div className="">
              <Image
                src={peanutImg}
                className={"object-cover"}
                alt="GoMore logo"
                loading="eager"
                placeholder="blur"
              />
            </div>
            <div className="">
              <Image
                src={gomoreImg}
                className={"object-cover"}
                alt="GoMore logo"
                loading="eager"
                placeholder="blur"
              />
            </div>
            <div className="">
              <Image
                src={skyscannerImg}
                className={"object-cover"}
                alt="GoMore logo"
                loading="eager"
                placeholder="blur"
              />
            </div>
            <div className="">
              <Image
                src={housetripImg}
                className={"object-cover"}
                alt="GoMore logo"
                loading="eager"
                placeholder="blur"
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
