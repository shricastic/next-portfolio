import { IconArrowRight } from '@tabler/icons-react';
import Link from 'next/link';

export interface BlogContent {
  img: string;
  title: string;
  desc: string;
  link: string;
}

interface BlogCardProps {
  props: BlogContent;
}

export function BlogCard({ props }: BlogCardProps) {
  return (
    <div className="cursor-pointer group relative flex flex-col my-6 bg-slate-900 border border-slate-700 rounded-lg w-96 hover:shadow-lg transition-shadow duration-300">
      <div className="p-4">
        <div className="h-56 w-full overflow-hidden bg-neutral-950">
        <img
          className="object-cover h-full w-full rounded-lg transition-transform duration-500 ease-[cubic-bezier(0.25, 1, 0.5, 1)] transform group-hover:scale-110"
          src={props.img}
          alt={props.title} 
        />
        </div>

        <h6 className="mb-2 text-slate-200 text-xl pt-4 font-semibold">{props.title}</h6>
        <p className="text-slate-500 leading-normal font-light">{props.desc}</p>
      </div>
      <div className="px-4 pb-4 pt-0 mt-2">
        <Link href={props.link}>
          <button className="rounded-md bg-slate-800 py-2 px-4 border border-slate-800 text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 active:bg-slate-700">
            Read article
          </button>
        </Link>
      </div>
    </div>
  );
}

export function MoreBlogsCard() {
  return (
    <Link href={'/blogs'}>
      <div className="cursor-pointer h-fit block bg-slate-900 border border-slate-700 rounded-lg hover:shadow-lg transition-shadow duration-300">
        <div className="p-4">
          <IconArrowRight className='w-10 h-10' />
        </div>
      </div>
    </Link>
  );
}
