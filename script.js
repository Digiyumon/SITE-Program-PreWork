// global constants
const clueHoldTime = 500; //how long to hold each clue's light/sound
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 500; //how long to wait before starting playback of the clue sequence
//Global Variables
var pattern = [];
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;
var guessCounter = 0;
var first = true;


function startGame(){
    //initialize game variables
    progress = 0;
    gamePlaying = true;
    document.getElementById("startBtn").classList.add("hidden");
    document.getElementById("stopBtn").classList.remove("hidden");
    playClueSequence();
    rounds = 0;
}
function stopGame()
{
  gamePlaying = false;
  document.getElementById("stopBtn").classList.add("hidden");
  document.getElementById("startBtn").classList.remove("hidden");
  first = true;
}
function getRandomInt()
{
  console.log(pattern);
}
// Sound Synthesis Functions
const freqMap = {
  1: 293.7,
  2: 554,
  3: 146,
  4: 100,
  5:200
}

function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}
function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}
function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}
function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}
function playClueSequence(){
  guessCounter = 0;
  
  if (first == true)
    {
        for (let j=0;j<=9;j++)
      {
        pattern[j] = Math.floor(Math.random() *5 + 1);
      }
    }
  first = false;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    console.log("this is pattern at " + 0 + " " +  pattern[0] + " " + pattern)
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
  rounds++;
}
function loseGame(){
  stopGame();
  alert("Game Over. You lost. You survived " + rounds + " rounds!");
}
function winGame()
{
  stopGame();
  alert("Game Over. You Won!");
}
    function guess(btn){
    console.log("user guessed: " + btn);

    if(!gamePlaying){
      return;
    }

    if(pattern[guessCounter] == btn){
      //Guess was correct!
      if(guessCounter == progress){
        if(progress == pattern.length - 1){
          //GAME OVER: WIN!
          winGame();
        }else{
          //Pattern correct. Add next segment
          progress++;
          playClueSequence();
        }
      }else{
        //so far so good... check the next guess
        guessCounter++;
      }
    }else{
      //Guess was incorrect
      //GAME OVER: LOSE!
      loseGame();
    }
  }    
// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)
var rounds = 0;