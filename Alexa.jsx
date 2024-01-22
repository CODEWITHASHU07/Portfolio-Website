import React, { useState } from "react";
import "./Alexa.css";
import Texttospeech from './chat'

function MicSlider({Mic}){
    const truehandle={width:`${Mic}%`,border:'2px solid #0EA5E9'};
    const flasehandle={width:`${Mic}%`,border:'0px solid #0EA5E9'}
    const stylehandle=Mic?truehandle:flasehandle;
      
    return(
        <div className="flex items-center gap-8 justify-around overflow-hidden  rounded-2xl bg-slate-700 Micwrapper" style={stylehandle}><div className="Mics border-white rounded-xl"></div>
        <div className="Mics border-white rounded-xl"></div></div>
    )
}

function Textslider({ show,SpeakByText}) {
  return (
    <form
      className="flex items-center gap-0 rounded-2xl max-w-80 overflow-hidden"
      style={{ width: `${show}%` }}
    onSubmit={(e)=>{
      e.preventDefault();
      if(e.target[0].value===''){
        alert("Empty ,Please Type something!")
      }else
      {
        SpeakByText(e.target[0].value);
      }
    }}>
      <input
        type="text"
        placeholder="Ask Me Something"
        className="bg-inherit text-pretty italic py-1 ps-2 text-white capitalize text-lg  flex items-center justify-center outline-none border-none  mx-2 w-3/4"
      />
      <button type="submit" className="h-8 w-8 border-x-1">
        <img
          src="../../Images/Uparrow.png"
          alt="Go"
          className="h-full w-full"
        />
      </button>
    </form>
  );
}
// !----------Main funtion
function Alexa() {
  let [show, setshow] = useState(0);
  let [Mic, setMic] = useState(0);
  let [Tokens, setTokens] = useState(false);
  let SpeakByText=Texttospeech()
//   !-----------------style object for alexa---------------
    const Animate ={
        animation: 'circle 3s linear 0s infinite '
    }
    const stopAnimate ={
        animation: 'raidus 1s linear 0s infinite alternate'
    }
    const handlestyle=Tokens?stopAnimate:Animate;
//   !--------------------styled for tokens block
  const defaultstyleFirst = {
    transform: "translate(-50px,30px)",
    display:'none'
  };
  const defaultstylesecond = {
    transform: "translate(-50px,-28px)",
    display:'none'
  };
  const Tokenstyle = {
    transform: "translate(0px,0px)",
    display:'block'
  };
  const styletoapplyfirst = Tokens ? Tokenstyle : defaultstyleFirst;
  const styletoapplysecoond = Tokens ? Tokenstyle : defaultstylesecond;
//   !-------------------------------------render--------------
  return (
    <div className="flex items-center  gap-4 p-2 fixed left-8 bottom-2 z-50">
      <div id="wraperalexa" className="p-2">
        {" "}
        <div id="boat" onClick={() => {setTokens(!Tokens)
  }} style={handlestyle}>
          <div
            className="absolute border-2 -top-8 -right-12 token "
            style={styletoapplyfirst}
            onClick={() => {
                setshow(0)
                setMic(Mic == 0 ? 30 : 0)
            }}
          ></div>
          <div
            className="absolute border-2 -bottom-10 -right-12 token  mb-2 ms-4"
            style={styletoapplysecoond}
            onClick={() => {
                setMic(0)
              setshow(show == 0 ? 50: 0);
            }}
          ></div>
        </div>
      </div>
      <Textslider show={show} SpeakByText={SpeakByText}/>
      <MicSlider Mic={Mic}/>
    </div>
  );
}





export default Alexa;

