import Intro from '../components/Intro'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contacts from '../components/Contact'
import Blogs from '../components/Blogs'

export default function Home() {
  return (<>
    <Intro />
    <Blogs />
    <Skills />
    <Projects />
    <Contacts />
  </>);
}
