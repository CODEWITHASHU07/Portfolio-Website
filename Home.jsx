import React from 'react'
import './Home.css'

function Home(){
 return (
<main className="h-screen w-full flex items-center justify-start relative" >
    <div className='ms-12 w-1/2' id='Home'>
    <h2 className=' text-4xl text-white'>Hi ,I'm <span id='Name'>Ashu...</span></h2>
    <h4 id="BrandName" className="mt-2" data-text="FullStack_Devloper">FullStack_Devloper</h4>
    <p className='text-white mt-4 pe-8 font-semibold capitalize'>
    Proficient in multiple tech stacks. Strong problem-solving abilities. Effective communicator in both front-end and back-end development. Adaptable to diverse project needs.
</p>
<div id="button" className='mt-8 flex gap-12 w-full'><button className="px-6 py-2 bg-transparent font-semibold text-black relative" id='FirstbuttonHome'>Hire Me</button><button id='secondbuttonHome' className='px-6 py-2 bg-transparent border font-semibold text-customColor border-customColor relative hover:text-black'>Download CV</button></div>

</div>
    

</main>
)
}
export default Home