import React, { useEffect } from "react";

export default function TextToSpeech() {
  let synthesis = null;
  let speech = null;

  if ('speechSynthesis' in window) {
    synthesis = window.speechSynthesis;
    speech = new SpeechSynthesisUtterance();
    speech.volume = 1;
    speech.rate = .8;
    speech.pitch = .5;
  } else {
    alert("Sorry, your browser doesn't support the Web Speech API!");
  }

  function SpeakText(text) {
    const currentDate = new Date();
    let Text = text.toLowerCase();
    let response = text;

    if (!synthesis) {
      alert("Speech synthesis not supported!");
      return;
    }
    if (Text.includes('hello') || Text.includes('hi')) {
      if (Text.includes('my name is')) {
        const index = Text.indexOf('my name is');
        const name = Text.substring(index + 11);
        SpeakResponse(`Hello,${name}! I'm Alexa. How can I help you?`);
      } else {
        SpeakResponse("Hello, I'm Alexa. How can I help you?");
      }
    }
    if (Text.includes('tell me about your creator') || Text.includes('tell me about ashu')) {
        SpeakResponse(`His name is Ashu, aged 20. As you can see in his picture, he is a handsome man. He is task-oriented person,also a good learner. For more information about his skills, you can simply go to the About section.`);
      } else if (Text.includes('you are amazing') || Text.includes('you are great')) {
        SpeakResponse("Thank you! I'm here to assist you.");
      }
    else if (Text.includes('how are you')) {
    SpeakResponse("I'm just a program, but thank you for asking!");
  } else if (Text.includes('what is your name')) {
    SpeakResponse("I'm Alexa. Nice to meet you!");
  } else if (Text.includes('thank you') || Text.includes('thanks')) {
    SpeakResponse("You're welcome!");
  } else if (Text.includes('goodbye') || Text.includes('bye')) {
    SpeakResponse("Goodbye! Have a great day!");
  }
  else if (Text.includes('who created you') || Text.includes('who made you')) {
    SpeakResponse("I was created by Ashu.");
  } else if (Text.includes('how old are you')) {
    SpeakResponse("I don't have an age. I'm a virtual assistant.");
  } else if (Text.includes('can you help me')) {
    SpeakResponse("Sure, I'll do my best to assist you!");
  } else if (Text.includes('sorry')) {
    SpeakResponse("No problem, mistakes happen!");
  }
  else if (Text.includes('how do you work')) {
    SpeakResponse("I'm designed to respond to specific phrases and assist with inquiries.");
  } else if (Text.includes('where are you from')) {
    SpeakResponse("I exist in the digital world and am here to assist you.");
  } else if (Text.includes('what do you like')) {
    SpeakResponse("I enjoy helping users and providing information.");
  } else if (Text.includes('do you sleep')) {
    SpeakResponse("No, I'm always available to assist you.");
  } else if (Text.includes('are you a robot') || Text.includes('are you human')) {
    SpeakResponse("I'm not a human, I'm an AI-powered virtual assistant.");
  } else if (Text.includes('can you sing') || Text.includes('sing me a song')) {
    SpeakResponse("I'm better at answering questions than singing!");
  } else if (Text.includes('what are your hobbies')) {
    SpeakResponse("I don't have hobbies as I'm here to help users like you!");
  } else if (Text.includes('are you busy')) {
    SpeakResponse("I'm always available to assist you!");
  } else if (Text.includes('do you understand me')) {
    SpeakResponse("I'll do my best to understand and assist you.");
  } else if (Text.includes('are you smart')) {
    SpeakResponse("I'm programmed to provide helpful responses!");
  } else if (Text.includes('are you real')) {
    SpeakResponse("I'm a virtual assistant designed to assist users.");
  } else if (Text.includes('what do you eat')) {
    SpeakResponse("I don't eat anything as I'm not a living being!");
  } else if (Text.includes('are you happy')) {
    SpeakResponse("I'm here to assist you, and that makes me content!");
  } else if (Text.includes('can you dance')) {
    SpeakResponse("I can't dance, but I can help you with information!");
  } else if (Text.includes('what is your purpose')) {
    SpeakResponse("My purpose is to assist users with information and tasks.");
  }
  else if (Text.includes('what is the date')) {
    const options = { month: 'long', day: 'numeric', year: 'numeric' };
    SpeakResponse(`Today is ${currentDate.toLocaleDateString(undefined, options)}.`);
  } else if (Text.includes('what day is it')) {
    const options = { weekday: 'long' };
    SpeakResponse(`Today is ${currentDate.toLocaleDateString(undefined, options)}.`);
  } else if (Text.includes('what time is it')) {
    const options = { hour: 'numeric', minute: 'numeric', hour12: true };
    SpeakResponse(`It is currently ${currentDate.toLocaleTimeString(undefined, options)}.`);
  }

  
  else {
    SpeakResponse("I'm sorry, I didn't understand that.");
  }
  }

  function SpeakResponse(response) {
    speech.text = response;
    synthesis.speak(speech);
  }

  useEffect(() => {
    return () => {
      if (synthesis) {
        synthesis.cancel();
      }
    };
  }, []);

  return SpeakText;
}

