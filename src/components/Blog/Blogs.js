import React, { useEffect } from 'react'
import { useAllContext } from '../../Context-Api/AllContext';

const Blogs = () => {

    const {getBlogData,blogData}=useAllContext();
    const api = "blog.json"

    useEffect(() => {
        getBlogData(api);
      }, [api]);
    //   console.log(blogData)

  return (
    <>
    <h2>This is blog</h2>
    <section>
        <div className='max-w-7xl px-6 lg:px-16 mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10'>

       
        {
            blogData.map(item=>{
                return(
                    <div className="">
                        <h2>{item.name}</h2>
                        <img src={item.authorImg} alt="" />
                    </div>
                )
            })
        }
         </div>
    </section>

    </>
  )
}

export default Blogs