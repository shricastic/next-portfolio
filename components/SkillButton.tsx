import Image from 'next/image'

export default function(props: {img: string; name: string;}){

  return(
    <button className="relative inline-flex h-12 overflow-hidden rounded-md p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-md bg-slate-800 text-xl px-3 font-medium text-white backdrop-blur-3xl gap-x-2">
        <Image 
          src= {props.img} 
          height={25} // Adjusted size
          width={25}  
          alt={`${props.name} logo`}
        />
        {props.name}
      </span>
    </button>
  )
}
