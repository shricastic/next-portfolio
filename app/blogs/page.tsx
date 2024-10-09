import {IconArrowLeft} from '@tabler/icons-react'
import Link from 'next/link'

export default async function ProjectsPage() {

  return(
    <section > 
      <div>
        <Link
          href='/'
          className='absolute inline-flex mt-3 pl-10 items-center gap-2 text-sm font-light text-muted-foreground transition-colors hover:text-foreground'
        >
          <IconArrowLeft className='h-8 w-8' />
          <span className="hidden md:block">Back to Home</span>
        </Link>
        <h1 className="text-center mt-10 pb-5 text-4xl font-bold md:text-6xl">Blogs</h1>
        <div className="h-screen w-full">
          <h1 className="text-center mt-[20%] pb-5 text-3xl font-medium md:text-3xl">Content updating soon...</h1>
        </div>

      </div>
    </section>
  )
}
