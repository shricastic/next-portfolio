import NavBar from '../components/NavBar'
import Intro from '../components/Intro'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contacts from '../components/Contact'

import { SparklesCore } from "../components/ui/sparkles";

export default function Home() {
  return (<>
    <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
    </div>   

    <NavBar />
    <Intro />
    <Skills />
    <Projects />
    <Contacts />
  </>);
}
