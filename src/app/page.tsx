// pages/page.tsx

// import { Main } from "next/document";
import Contact from "./_components/Contact";
import Navbar from "./_components/Navbar";
import About from "./_components/About";
import Main from "./_components/Main";
import Sold from "./_components/Sold";
import Services from "./_components/Services";
import Carousel from "./_components/Carousel";
import FindHome from "./_components/FindHome";
import Footer from "./_components/Footer";




const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Main />
      <FindHome />
      <Sold />
      <Services />
      <Carousel />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;
