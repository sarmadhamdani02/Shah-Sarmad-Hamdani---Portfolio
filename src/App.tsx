import { BrowserRouter } from "react-router-dom";
import { useState, CSSProperties, useEffect } from "react";
import AnimatedCursor from "react-animated-cursor";
import HashLoader from "react-spinners/HashLoader";
import {
  About,
  Contact,
  Hero,
  Navbar,
  Works,
  StarsCanvas,
  ContactMe,
} from "./components";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const loadingMessages = [
  "Upgrading Windows, your PC will restart several times. Sit back and relax.",
  "Would you prefer chicken, steak, or tofu?",
  "(Pay no attention to the man behind the curtain)",
  "just testing your patience :)",
  "As if you had any other choice",
  "keep calm and npm install",
  "The bits are flowing slowly today",
  "Have you lost weight?",
  "Just count to 10",
  "Why so serious?",
  "Counting backwards from Infinity",
  "I swear it's almost done.",
  "Where did all the internets go",
  "Your left thumb points to the right and your right thumb points to the left.",
  "How did you get here?",
  "Wait, do you smell something burning?",
  "When nothing is going right, go left!!...",
  "Kindly hold on as we convert this bug to a feature...",
  "Loading funny message...",
  "Loading to make it look something heavier...",
  "Patience! This is difficult, you know...",
  "Discovering new ways of making you wait...",
  "Still faster than Windows update",
  "Please wait while the minions do their work",
  "You are number 2843684714 in the queue",
  "Do you like my loading animation? I made it myself...believe me...",
  "Baking ice cream...",
  "Don't panic, Just count to infinite.",
  "Who is staring at you from the corner...",
  "Who is standing behind you?...",
  "Check below your bed if there is anything..",
];

const App = () => {
  let [loading, setLoading] = useState(true);
  let [currentMessage, setCurrentMessage] = useState("");

  useEffect(() => {
    // Simulating delay for demonstration
    setTimeout(() => {
      setLoading(false);
    }, 8000); // Simulated loading time

    // Display random loading message every 3 seconds
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * loadingMessages.length);
      setCurrentMessage(loadingMessages[randomIndex]);
    }, 4000);

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, []); // Run once on component mount


  return (
    <div>
      {loading ? (
        <div className="h-screen w-screen flex flex-col gap-10 items-center justify-center bg-[#1a112e]">
          <HashLoader
            color={"#915EFF"}
            loading={loading}
            cssOverride={override}
            size={100}
            aria-label="HashLoader"
            data-testid="loader"
          />
          <h1 className="text-white text-xl transition text-space-mono">{currentMessage}</h1>
        </div>
      ) : (
        <BrowserRouter>
          <div className="hidden sm:flex">
            <AnimatedCursor
              innerSize={8}
              innerStyle={{
                backgroundColor: "#9962ff",
                border: "1px solid #9962ff",
              }}
              outerStyle={{
                backgroundColor: "white",
                mixBlendMode: "difference",
              }}
              outerSize={40}
              color="91, 20, 245"
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
          </div>
          <div className="relative z-0 bg-primary">
            <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
              <Navbar />
              <Hero />
            </div>
            <div className="bg-gradient-to-b from-[#1a112e] to-[#121212]">
              <About />
            </div>
            <Works />
            {<ContactMe />}
            <div className="relative z-0">
              <Contact />
              <StarsCanvas />
            </div>
          </div>
        </BrowserRouter>
      )}
    </div>
  );
};

export default App;
