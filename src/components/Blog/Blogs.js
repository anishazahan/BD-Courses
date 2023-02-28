import React, { useEffect } from 'react'
import { useAllContext } from '../../Context-Api/AllContext';
import { BsPlayCircle } from 'react-icons/bs';

const Blogs = () => {

    const {getBlogData,blogData}=useAllContext();
    const api = "blog.json"

    useEffect(() => {
        getBlogData(api);
      }, [api]);
      console.log(blogData)
    const {id,img,name,heading,authorImg,authorName,date}=blogData

  return (
    <>
   <div className="text-center mt-16">
    <h2 className='text-2xl text-primary font-bold'>We Share </h2>
    <h2 className='text-2xl font-bold my-3'>Our Thoughts On Design </h2>
    <p className='font-medium mb-10 text-sm'>আপনাকে একা সংগ্রাম করতে হবে না, আপনি আমাদের সহায়তা এবং সাহায্য পেয়েছেন।</p>
   </div>
    <section>
        <div className='max-w-7xl px-6 lg:px-16 mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-10 mb-36'>

       
        {
            blogData.map(item=>{
                return(
                  <div key={item.id} className="border border-gray shadow">
                      <img className='h-52 w-full object-cover' src={item.img} alt="" />
                      <div className=" py-6 px-3">
                      <h2 className='text-secondary px-2 py-2 bg-pink-200 inline text-sm font-semibold'>{item.heading}</h2>
                      <h2 className='text-xl font-bold my-3'>{item.name}</h2>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <img src={item.authorImg} alt="" />
                          <p>{item.authorName}</p>
                        </div>
                        <p className='text-slate-400'>{item.date}</p>
                      </div>
                      </div>
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



// return(
//   <div key={item.id} className="card border shadow-md border-gray">

  
//   <img className='h-52 w-full object-cover' src={img} alt="" />
 
//  <div className=" px-4 py-3">
//    <h2 className='text-secondary px-2 py-1 bg-pink-200 inline text-sm font-semibold'>{heading}</h2>
//    <h2 className='text-2xl font-bold mt-3 mb-2'>{name}</h2>
//    <div className="flex items-center space-x-4">
//    <div className="flex items-center space-x-2">
//      <BsPlayCircle></BsPlayCircle>
//      <p className='text-slate-400'>Lessons</p>
//    </div>
//    <div className="flex items-center space-x-2">
//      <p className='text-slate-400'></p>
//    </div>
//    </div>
   

//    <div className="flex items-center justify-between">
//    <img className='w-8' src={authorImg} alt="" />
     
//      <h2 className='text-slate-400'>{date}</h2>
    
//    </div>
//  <div className="flex justify-between my-4">
 

//  </div>

//  </div>
// </div>
// )