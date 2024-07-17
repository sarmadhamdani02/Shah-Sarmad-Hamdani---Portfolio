import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, ContactMe } from "./components";
import AnimatedCursor from "react-animated-cursor"
// import { BorderBeam } from "../@/components/magicui/border-beam"
// import ShineBorder  from "../@/components/magicui/shine-border"


const App = () => {
  return (
    <BrowserRouter>
      <AnimatedCursor
        innerSize={8}
        innerStyle={{
          backgroundColor: "#9962ff",
          border: "1px solid #9962ff"

        }}
        outerStyle={{
          backgroundColor: "white",
          mixBlendMode: 'difference'
        }}
        outerSize={40}
        color='91, 20, 245'
        outerAlpha={0.2}
        innerScale={1}
        outerScale={2}
        trailingSpeed={5}
        clickables={[
          'a',
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
          'select',
          'textarea',
          'button',
          '.link',
          "Github"
        ]}
      />
      <div className='relative z-0 bg-primary '>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />

          <Hero />
        </div>
        <div className=" bg-gradient-to-b from-[#1a112e] to-[#121212]">
          <About />
        </div>
        {/* <Cool/> */}
        {/* <Experience /> */}
        {/* <Tech /> */}
        <Works />
        {<ContactMe/>}
        {/* <Feedbacks />  */}
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
