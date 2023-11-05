import "./App.css";
import { About } from "./components/about";
import { Clients } from "./components/clients";
import { ClientSlider } from "./components/clientsslider";
import { Showcase } from "./components/showcase";
import { Work } from "./components/work";
import aboutImg from "./media/about.jpg";
function App() {
  return (
    <>
      <Showcase
        title={"Refresh your Room and Make Awesome Interior Design With Us!"}
        paragraf={
          "We are Interior Design Team Based in Wakanda, 58th street East Waka. We provide Interior Design services since 1899 and have many client from various country."
        }
      />
      <About
        img={aboutImg}
        clinentNumber={"52+"}
        clinets={"Satisfied Clients From Various Country."}
        about={"Years of Experience in Interior Design"}
        year={"15+"}
      />
      <Work title={"How We Work"} desc={"OUR WORKFLOW"} />
      <Clients title={"Reviews from Our Clients"} desc={"OUR CLIENT SAYS"} />
    </>
  );
}

export default App;
