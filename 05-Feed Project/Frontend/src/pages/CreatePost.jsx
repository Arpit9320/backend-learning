import React from 'react'

const CreatePost = () => {
  return (
    <section className='h-full w-full flex flex-col items-center justify-start gap-4 pt-10'>
      <h1 className='font-bold text-2xl lg:text-4xl'>Create Post</h1>

      <form className='form flex flex-col items-center justify-center gap-4 w-[90%] lg:w-[50%] border-black border-2 p-4 rounded-2xl mt-20'>

        <input type="file" accept="image/*,video/*" required className=' outline-none border border-black p-2 rounded-md w-[70%] font-medium'/>

        <input type="text" placeholder='Caption....' required className=' font-medium border border-black p-2 rounded-md outline-none w-[70%]'/>

        <button type='submit' className=' font-semibold bg-blue-900 p-2 border border-black rounded-md cursor-pointer'>Upload</button>

      </form>
    </section>
  )
}

export default CreatePost
