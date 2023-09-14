import Link from 'next/link'
import React from 'react'

function BlogCard({ blogs }: any) {
  const content : String =blogs.brief.substring(0,200)+"...";
  return (
    <Link href={`https://satyampsoni.hashnode.dev/${blogs.slug}`}>
    <div className=" rounded-2xl mt-[3vh]  w-fit xsm:h-[25vh] nm:h-[27vh] h-[30vh] xnm:mx-[0vw] mx-[50vw] ">
    <div className="flex flex-row  border-[1px] border-gray-600  rounded-2xl">
      <div className=' overflow-hidden ' >
      <img src={blogs.coverImage} alt='Image Not Availabe' className=" w-[25vw] xssm:w-[70vw] nm:h-[27vh] xnm:w-[33vw]  nm:w-[43vw] xsm:h-[25vh]  sm:w-[25vh] h-[30vh] rounded-3xl p-2"></img>

      </div>
      <div className="p-1 pr-2  justify-center flex overflow-hidden  flex-col w-[65vw] ">
        <div className="text-xl nm:text-lg xsm:text-base md:text-lg font-sans  px-1 font-bold">{blogs.title}</div>
        <div className="text-base nm:text-sm pt-2 nm:pt-2 px-1  mlg:line-clamp-2 xssm:hidden font-sans pb-1">{content}</div>

      </div>

    </div>
  </div>
  </Link>
  )
}

export default BlogCard