//console
console.log("Your Browser supports Speech Recognition or this Program");

//Welcome speech or Background Speech
//var myAudio = new Audio('Welcome_message.mp3');
//myAudio.play();

function startDictation() {
    if (window.hasOwnProperty('webkitSpeechRecognition')) {

      var myAudio = new Audio('google_now_voice.mp3');
       myAudio.play();

      var recognition = new webkitSpeechRecognition();
	  
      recognition.continuous = true;
      recognition.interimResults = false;
     // new Date().toLocaleTimeString();
      recognition.lang = "en-US";
      recognition.start();

      recognition.onresult = function(e) {
        document.getElementById('transcript').value
                                 = e.results[0][0].transcript;
      var Jarvis = new Artyom();
      Jarvis.say(e.results[0][0].transcript);

         recognition.stop();
      };
    

      recognition.onerror = function(e) {
        recognition.stop();
      }
    }
  }
  
function openNav() {
  document.getElementById("mySidepanel").style.width = "250px";
 }
 /* Set the width of the sidebar to 0 (hide it) */
 function closeNav() {
   document.getElementById("mySidepanel").style.width = "0";
 }


//console
//console.log("Your Browser supports Speech Recognition or this Program");
//function startDictation() {
    //if (window.hasOwnProperty('webkitSpeechRecognition')) {

     // var myAudio = new Audio('google_now_voice.mp3');
      // myAudio.play();

      //var recognition = new webkitSpeechRecognition();
		//	speechSynthesis.speak(new SpeechSynthesisUtterance(response));

    
     // recognition.continuous = true;
     // recognition.interimResults = false;
     // new Date().toLocaleTimeString();
      //recognition.lang = "en-US";
      //recognition.start();

     
     // let response = "Youtube";

     // if(!response){
      //  window.open('https://www.youtube.com')
      //}

    //  recognition.onresult = function(e) {
       // document.getElementById('transcript').value
                          //       = e.results[0][0].transcript;

      //  recognition.stop();
      //  document.getElementById('VoiceAssistant').submit();
    //  };
    //  if(recognition.includes('youtube')){
      //  window.open('https://www.youtube.com');
     // }
    // if(document.getElementById('transcript').value.includes('youtube')){
    //  window.open('https://www.youtube.com');
     //}

   //   recognition.onerror = function(e) {
     //   recognition.stop();
   //   }
  //  }
  //}
  
 
//function openNav() {
  //document.getElementById("mySidepanel").style.width = "250px";
 //}
 
 /* Set the width of the sidebar to 0 (hide it) */
 //function closeNav() {
 //  document.getElementById("mySidepanel").style.width = "0";
 //}
 

//function lightMode() {
  //lightMode = document.getElementById('light-mode');
 // lightMode =
//}
 /*function changeIcon(imgName){
    image = document.getElementById('changeIcon');
    image.src = imgName;
  }*/
/* Set the width of the sidebar to 250px (show it) */
//function readOutLoud(message){
  //const speech = new SpeechSynthesisUtterance();
 // speech.text = 'I am not able to understand ,sir';
// The JavaScript Part Starts
//if('Youtube' in ('webkitSpeechRecognition')){
 // window.open('https://www.youtube.com');
//}
  //console.log("Hello World");
      // window.open('https://www.youtube.com/')    
     // if(('YouTube')){
       // const finalText = 
          //  YouTube[Math.floor(Math.random()*YouTube.length)];
      //  speech.text = finalText; 
      //  window.open('https://www.youtube.com/')
      //  }
   // speech.volume = 1;
  //  speech.rate = 1.1;
   // speech.pitch = 1;
   // window.speechSynthesis.speak(speech);
//  }