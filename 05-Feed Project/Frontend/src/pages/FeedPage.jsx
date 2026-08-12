import React, { useEffect, useState } from 'react'
import axios, { Axios } from "axios";


const FeedPage = () => {

    const [post, setpost] = useState([
        {
            _id:1,
            image: "https://imgs.search.brave.com/Pdi-y2Qzxn4ptbhSNe5cYYuv2LVO8ewL-Htt_uLkmts/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9nZWVr/bW9ua2V5LmluL2Nk/bi9zaG9wL2ZpbGVz/LzY5Xzk1NGRlZTRm/LTViNDQtNDBiOC1h/NmQ2LWJkNmFiY2I2/N2YwMy5qcGc_dj0x/NzExMzI3NDU0Jndp/ZHRoPTMyMA",
            caption: "This is a beautiful image"
        }
    ])


    useEffect(()=>{
        
        axios.get("http://localhost:3000/Posts-Feed")
        .then((res)=>{
            setpost(res.data.posts)
        })
        .catch((err) => {
            console.log(err);   
        });


    },[])

  return (
    <section className='flex flex-col items-center  gap-5 h-full w-full bg-[#f0f2f5] p-5'>

        <h1 className='text-2xl font-bold'>Feeds</h1>

        {
            post.length > 0 ?(
                post.map((post)=>{
                    return(
                    <div key={post._id} className='bg-white p-5 rounded-lg shadow-[0_2px_4px_rgba(0,0,0,0.1)] w-[95%] lg:w-[40%]'>
                        <img src={post.image} alt="image" className='max-w-full mt-2.5'/>
                        <p className='mb-2.5 mt-2 font-semibold'>{post.caption}</p>
                    </div>)  
                })
            ): <h1>No Posts available</h1>
        }

    </section>
  )
}

export default FeedPage