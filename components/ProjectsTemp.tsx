import Image from 'next/image'
import Link from 'next/link'

import {ProjectMetadata} from '../lib/projects'

export default function ProjectsTemp({projects}: {projects: ProjectMetadata[]}){
  return(
      <ul className='grid grid-cols-1 gap-8 sm:grid-cols-2 ml-10 mr-10 mt-5'>
      {projects.map(project => (
        <li key={project.slug} className='group relative'>
          <Link href={`/projects/${project.slug}`}>
            {project.image && (
              <div className='h-72 w-full overflow-hidden bg-neutral-950 sm:h-60'>
                <Image
                  src={project.image}
                  alt={project.title || ''}
                  fill
                  className='rounded-lg object-cover object-center transition-transform duration-500 group-hover:scale-105 filter group-hover:brightness-75'
                />
              </div>
            )}

            <div className='absolute inset-[1px] rounded-lg bg-background/70 opacity-0 transition-opacity duration-500 group-hover:opacity-100' />

            <div className='absolute inset-x-0 bottom-0 translate-y-2 px-6 py-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100'>
              <h2 className='title line-clamp-1 text-xl font-bold no-underline'>
                {project.title}
              </h2>
              <p className='line-clamp-1 text-sm'>
                {project.summary}
              </p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}
