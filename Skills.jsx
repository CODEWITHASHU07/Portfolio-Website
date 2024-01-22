import React, { useState } from 'react'
import './Skills.css'




function Skill({ Lang, Image, percentage,desc }) {
    let [Showdetail,setShowdetail]=useState(false);
    function HandleToggle()
    {
      console.log(Showdetail)
      setShowdetail(!Showdetail);
    }
    return (
      <div className='Wraperskill'>
      <div className="skill-row  flex items-center justify-between px-4 py-2 skillrapper">
        <div id="image" onClick={()=>HandleToggle()}>
          <img src={Image} alt={Lang} />
        </div>
        <div className="skillmeasure relative">
          <abbr title={`${percentage}%`}className='Abbr'><input type="range" value={percentage} className='Input'/></abbr>
        </div>
      </div>
      <div className={`HiddenDiv ${Showdetail?'TransitiononOpen':null}`}>{desc}</div>)
      </div>
      
    );
  }





function Skills(){
 return (

<div id='Skill'>
 
    <div className="skillset">
        <Skill Lang={'HTML5'} Image={"../../Images/HtmlImage.jpg"} percentage={90} desc={'HTML5 skills encompass semantic elements, multimedia support (audio/video), canvas for dynamic graphics, responsive design tools, and form enhancements. These enable modern web development, providing improved structure, multimedia integration, and user interaction.'}/>
        <Skill Lang={'JavaScript'} Image={"../../Images/Css Logo.png"} percentage={90} desc={"CSS skills include styling, layout design, and responsiveness for web development. Mastery of selectors, positioning, flexbox, grid, transitions, and media queries ensures visually appealing and adaptable websites."}/>

        <Skill Lang={'JavaScript'} Image={"../../Images/Javascript_Logo.png"} desc={"JavaScript skills encompass DOM manipulation, event handling, AJAX for asynchronous data fetching, ES6 features, modular code with functions and classes, error handling, understanding closures, and asynchronous programming using promises and async/await. Mastery enables efficient client-side scripting for dynamic, interactive web applications."} percentage={95}/>

        <Skill Lang={'React Js'} Image={"../../Images/React.png"} percentage={80} desc={"React skills include component-based architecture, state management with Redux, context API for prop drilling mitigation, use of reducers for predictable state changes, JSX syntax, lifecycle methods, and hooks. Proficiency enables building scalable, maintainable, and efficient web applications."}/>

        <Skill Lang={'Scss'} Image={"../../Images/Scss.png"} percentage={100} desc={"SCSS skills showcase expertise in advanced CSS pre-processing, variables, mixins, nesting, and modularization.Proficient SCSS use enhances maintainability,readability, and organization in styling large-scale projects for web development."}/>

        <Skill Lang={'BOOTSTRAP 5'} Image={"../../Images/Bootstrap.png"} percentage={80} desc={"Bootstrap 5 skills demonstrate proficiency in responsive web development, utilizing its grid system, components, and utilities. Knowledge includes styling, layout, and customization, enabling efficient creation of modern and visually appealing websites."}/>
        <Skill Lang={'GSAP'} Image={"../../Images/Gsap.png"} percentage={80} desc={'GSAP (GreenSock Animation Platform) skills showcase expertise in web animation. Proficient use involves timeline sequencing, tweening, easing, and plugins for creating seamless and engaging motion effects, enhancing user experience in web development.'}/>
        <Skill Lang={'Python'} Image={"../../Images/Python.png"} percentage={70} desc={'Python skills encompass object-oriented programming (OOP), leveraging classes and inheritance. Proficiency includes GUI development using Tkinter, data manipulation, and efficient scripting. Knowledge extends to libraries like Flask, empowering diverse applications in software development.'}/>
        
    </div>
</div>

)
}
export default Skills


