import ProjectsTemp from '../../components/ProjectsTemp'
import {getProjects} from '../../lib/projects'
import Link from 'next/link'
import {IconArrowLeft} from '@tabler/icons-react'

export default async function ProjectsPage() {
  const projects = await getProjects();

  return(
    <section > 
      <div className="bg-black">
        <Link
          href='/'
          className='absolute inline-flex mt-3 pl-10 items-center gap-2 text-sm font-light text-muted-foreground transition-colors hover:text-foreground'
        >
          <IconArrowLeft className='h-8 w-8' />
          <span className="hidden md:block">Back to Home</span>
        </Link>
        <h1 className="text-center mt-10 pb-5 text-4xl font-bold md:text-6xl">Projects</h1>
        <ProjectsTemp projects={projects}/>
      </div>
    </section>
  )
}
