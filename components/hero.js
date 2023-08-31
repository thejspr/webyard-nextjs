import Image from "next/image";
import Container from "./container";
import heroImg from "../public/img/illu-team.png";

import gomoreImg from "../public/img/logos/gomore.png";
import housetripImg from "../public/img/logos/housetrip.png";
import peanutImg from "../public/img/logos/peanut.png";
import skyscannerImg from "../public/img/logos/skyscanner.png";

const Hero = () => {
  return (
    <>
      <Container className="flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              Hurtig og Pålidelig Software Udvikling
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              Webyard tilbyder software udvikling i Ruby on Rails, Python, Django, Flask, JavaScript, React, Vue, Node, og meget mere.
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

export default Hero;
