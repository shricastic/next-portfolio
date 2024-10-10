import {getProjectBySlug} from '../../../lib/projects'
import{notFound} from 'next/navigation'
import MDXContent from '../../../components/mdx-content'
import Image from 'next/image'
import Link from 'next/link'
import {IconArrowLeft} from '@tabler/icons-react'

export default async function Project({params} : {params: {slug: string}}){
  const {slug} = params
  const project = await getProjectBySlug(slug)

  if(!project) notFound()

  const {metadata, content} = project 
  const {title, image, author} = metadata

  return(
    <section className='pb-24 pt-20 bg-black'>
      <div className='container max-w-2xl'>
        <Link
          href='/projects'
          className='mb-8 inline-flex items-center gap-2 text-sm font-light text-muted-foreground transition-colors hover:text-foreground'
        >
          <IconArrowLeft className='h-5 w-5' />
          <span>Back to projects</span>
        </Link>

        {image && (
          <div className='relative mb-6 h-96 w-full overflow-hidden rounded-lg'>
            <Image
              src={image}
              alt={title || ''}
              className='object-cover'
              fill
            />
          </div>
        )}

        <header>
          <h1 className='text-2xl text-white font-bold md:text-4xl'>{title}</h1>
          <p className='mt-1 text-xs text-muted-foreground'>~ {author}</p>
        </header>

        <main className='mt-10 prose'>
          <MDXContent source={content} />
        </main>
      </div>
    </section>  )
}
