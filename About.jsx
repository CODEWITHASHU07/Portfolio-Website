import React from 'react'
import "./About.css"
import { useState } from 'react';
function About(){
    const [toggle,settoggle]=useState(false);
  
 return (
<>
<div id="About" className='mt-10 relative'>
    <h1 className="text-5xl text-white font-semibold text-center"><span className="text-customColor me-1">ABOUT </span>ME</h1>
    {console.log(toggle)}

    <div id="contentAbout" className=" p-4 mx-4 flex items-center justify-center flex-col gap-1 mt-4">
        <div id="Imageorigine" className='h-48 w-48  rounded-full relative overflow-hidden flex items-center justify-center'> <div id="image"><img src="../../Images/Firstsample Hero Image.jpg" alt="" /></div></div>
        <div id="textcontent" className='mt-4 text-slate-50 text-center p-2 mx-6 relative'>
            <h4 className="font-bold text-2xl  text-center my-2">Mern Stack Devloper</h4>
            <p className=" text-gray-300 mt-2" id='pera'>I am <b>Ashutosh Thakur</b>, and you can call me <q><b>SASHU</b></q>. I embarked on my journey into the world of web development in February 2023, immersing myself in the dynamic MERN stack. A proud graduate in Computer Science from Vikram University, Ujjain, in 2022, I have since been on a dedicated quest for knowledge and excellence.

<span className={toggle?'block':'hidden'}>Driven by a relentless passion for technology, I am not just a developer; I am a proactive learner and an initiator. Taking the initiative to stay ahead of the curve, I thrive on challenges and see them as opportunities to grow. My hunger for knowledge is insatiable, pushing me to explore and understand the intricate nuances of emerging technologies.
In the ever-evolving landscape of web development, I am committed to continuous improvement, seeking to enhance my skills and contribute meaningfully to every project I undertake. Join me on this exciting journey as I strive to create innovative solutions and bring ideas to life through the power of code.</span></p>
          
            <button onClick={()=>settoggle(!toggle)} id='Show' className='relative bg-customColor px-4 py-2 mt-4 font-semibold hover:bg-sky-600 '>Read More</button>
           
        </div>
    </div>
     
 

</div>
</>
)
}
export default About        