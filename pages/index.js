import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
// import SectionTitle from "../components/sectionTitle";

// import { benefitOne, benefitTwo } from "../components/data";
// import Video from "../components/video";
// import Benefits from "../components/benefits";
// import Footer from "../components/footer";
// import Testimonials from "../components/testimonials";
// import Cta from "../components/cta";
// import Faq from "../components/faq";
// import PopupWidget from "../components/popupWidget";

const Home = () => {
  return (
    <>
      <Head>
        <title>Webyard - Hurtig og pålidelig software udvikling</title>
        <meta
          name="description"
          content="Webyard udvikler software i Ruby on Rails, JavaScript, React, Vue, Node, Python, Django, Flask og meget mere."
        />

        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>⚓</text></svg>"></link>

        <script defer data-domain="webyard.dk" src="https://plausible.io/js/script.js"></script>
      </Head>

      <Navbar />
      <Hero />
      {/* <SectionTitle */}
      {/*   pretitle="Webyard" */}
      {/*   title="Hvorfor vælge Webyard?"> */}
      {/*   Vi hjælper med udvikling i en lang række web-teknologier, herunder Ruby on Rails, JavaScript, React, Vue, Node, Python, Django, Flask og meget mere. */}
      {/* </SectionTitle> */}
      {/* <Benefits data={benefitOne} /> */}
      {/* <Benefits imgPos="right" data={benefitTwo} /> */}
      {/* <SectionTitle */}
      {/*   pretitle="Watch a video" */}
      {/*   title="Learn how to fullfil your needs"> */}
      {/*   This section is to highlight a promo or demo video of your product. */}
      {/*   Analysts says a landing page with video has 3% more conversion rate. So, */}
      {/*   don&apos;t forget to add one. Just like this. */}
      {/* </SectionTitle> */}
      {/* <Video /> */}
      {/* <SectionTitle */}
      {/*   pretitle="Testimonials" */}
      {/*   title="Here's what our customers said"> */}
      {/*   Testimonails is a great way to increase the brand trust and awareness. */}
      {/*   Use this section to highlight your popular customers. */}
      {/* </SectionTitle> */}
      {/* <Testimonials /> */}
      {/* <SectionTitle pretitle="FAQ" title="Frequently Asked Questions"> */}
      {/*   Answer your customers possible questions here, it will increase the */}
      {/*   conversion rate as well as support or chat requests. */}
      {/* </SectionTitle> */}
      {/* <Faq /> */}
      {/* <Cta /> */}
      {/* <Footer /> */}
      {/* <PopupWidget /> */}
    </>
  );
}

export default Home;
