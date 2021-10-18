// const speechSynthesis = require('speech-synthesis');

const speak = (msg)=>{
    const sp = new SpeechSynthesisUtterance(msg);

    console.log(speechSynthesis.getVoices());

    let voice = speechSynthesis.getVoices().find((ele)=> ele.name==="Veena");
    console.log(voice);

    // [sp.voice] = speechSynthesis.getVoices();
    sp.voice = voice;

    speechSynthesis.speak(sp);
}

speak("Hello Sandeep");