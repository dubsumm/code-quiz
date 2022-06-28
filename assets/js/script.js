var start_butn = document.querySelector('#start');
var a_btn = document.querySelector('#butnA')
var b_btn = document.querySelector('#butnB')
var c_btn = document.querySelector('#butnC')
var d_btn = document.querySelector('#butnD')
var instrctnsEl = document.getElementById('instructions')
var quizboxEl = document.getElementById('quiz-box')
var timeEl = document.querySelector(".timer");
var secondsLeft = 59;
var qCount = 0;


//Array that holds answerAs
quesArray = ['Which of these are NOT basic data types in JS?','What does console.log() do?','What is the DOM?','Which of these are methods in JS?','Which of these will not provide an empty array?','Padding, in CSS, is:','The JS search() method searches a string for:','JavaScript supports which 5 types of loops:','The break statement:','_________is JavaScripts default behavior of moving declarations to the top.']
//Array that holds Answer A options
ansAArray = ['Boolean','blowup()','Chops wood','Document Object Model','array1 = [];','space around an elements content, inside of any defined borders.','a match against a regular expression, and returns the matches, as an Array','For  for/in  for/of  while  do/while','jumps over one iteration in the loop.','Vaulting']
//Array that holds Answer B options
ansBArray = ['Number','fixit()','Prints argument to the user','Dingus Ole Mingus','array1.length=0;','space around an elements content, outside of any defined borders.','a string ends with a specified value, otherwise false.','For  for/in  where/of  while  do/while','Jumps out of a loop','Syncing']
//Array that holds Answer C options
ansCArray = ['Method','pop()','Stores info in web pages local memory','Drive Optimal Memory','array1.splice(0, array1.length)','space around an elements parent, inside of any defined borders.','Finding the index of (the position of) the first occurrence of a specified text','For  for/in  for/of  while  try/while','Jumps up and down','Hoisting']
//Array that holds Answer D options
ansDArray = ['String','popoff()','Converts output into log notation','Dot Operated Mask','array1.pop()','Bubble boys only known environment','a specified value and returns the position of the match','For  for/over  for/of  while  do/while','jump into any code block','Simping']

function displayQuizBox() {
    document.getElementById('question').textContent = quesArray[qCount];
    document.getElementById('answerA').textContent = ansAArray[qCount];
    document.getElementById('answerB').textContent = ansBArray[qCount];
    document.getElementById('answerC').textContent = ansCArray[qCount];
    document.getElementById('answerD').textContent = ansDArray[qCount];
}

function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      timeEl.textContent = secondsLeft;
      secondsLeft--;
      
  
      if(secondsLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
      }
  
    }, 1000);
}

function startquiz() {
    instrctnsEl.style.display = 'none';  //clears start menu
    quizboxEl.setAttribute('style','display:flex');  //display quiz box
    displayQuizBox();    
}

function goFunction() {
    setTime();  //start the timer
    startquiz();

}

function addQCount() {
    qCount++;
    displayQuizBox();

}

// start butn on click call myFunction
start_butn.addEventListener("click", goFunction);
//answer buttons
a_btn.addEventListener("click", addQCount);
b_btn.addEventListener("click", addQCount);
c_btn.addEventListener("click", addQCount);
d_btn.addEventListener("click", addQCount);