import "./app.scss"
import Navbar from "./components/navbar/Navbar"
import Herosection from "./components/herosection/Herosection"
import Parallax from "./components/parallax/Parallax"
import Parallax2 from "./components/parallax/Parallax2"
import Portfolio from "./components/portfolio/Portfolio"


function App() {
  return (
    <div>
      <section id="Home">
        <Navbar />
        <Herosection />
      </section>
      <section id="Portfolio">
        <Parallax />
      </section>
      <Portfolio />
      <section id="Contact">
        <Parallax2 />
      </section>
    </div>
  )
}

export default App
