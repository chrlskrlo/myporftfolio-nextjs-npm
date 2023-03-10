import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-[#5651e5]'>About</p>
                <h2 className='py-4'>Who I Am</h2>
                <p className='py-2 text-gray-600'>// I am not your normal developer</p>
                <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla dignissimos voluptas ipsum quaerat eligendi illum. Est omnis numquam voluptas officia eligendi, beatae ipsa facilis libero nesciunt eaque aliquid suscipit, nobis voluptatum, aut maxime? Sunt sint numquam quos mollitia impedit pariatur autem, sequi fugit aperiam, architecto recusandae at in eveniet laboriosam totam illo doloremque magni fuga voluptatum culpa, molestiae omnis consectetur. Molestias consequatur suscipit corrupti adipisci eaque illo quae fugit aliquam recusandae architecto? Praesentium officia soluta, ipsa voluptate ab quam accusamus aperiam quasi sequi enim eos maxime nisi, corporis, necessitatibus sunt temporibus optio qui harum a ea fuga libero. Et, voluptas.
                </p>
                 <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint autem ex totam modi atque dolore dolores sunt obcaecati sit sapiente. Alias eaque quibusdam incidunt odio maxime nisi, ipsa asperiores ad quaerat distinctio esse laudantium molestias ducimus laboriosam nam vitae! Ipsam dolore fugiat hic. Natus soluta commodi eos, aliquam nesciunt dolores eveniet dolorum omnis ducimus reiciendis vel! Tenetur magnam labore recusandae doloribus soluta delectus vitae accusantium neque numquam? Quisquam molestias mollitia sunt ea maiores inventore quod iste alias nobis et! Fugiat voluptate quae ipsa, eum, similique quam minima id nihil dolores dicta repellendus blanditiis? Doloremque, aut? Perferendis reiciendis officia veritatis architecto.
                 </p>
                 <p className='py-2 text-gray-600 underline cursor-pointer'>Check out some of my latest projects</p>
            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
              <Image 
              className='rounded-xl' 
              src='/../public/assets/code.jpg'
              alt='/'
              width={1000}
              height={500}/>
            </div>
        </div>
    </div>
  )
}

export default About