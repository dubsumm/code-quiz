var start_butn = document.querySelector('#start');
var quizboxEl = document.getElementById('quiz-box')
var instrctnsEl = document.getElementById('instructions');
var timeEl = document.querySelector(".timer");
var titleEl = document.getElementById('Qtitle');
var choiceEl = document.getElementById('Choices');
var initialsinputEl = document.getElementById('input-initials')
var secondsLeft = 59;
var questionindex =0;
var userscore = 0;
var questions = [
    {
        title:'Which of these are NOT basic data types in JS?',
        choices:['Boolean', 'Number', 'Method','String'],
        answer:'Method'
    },
    {
        title:'Which of these are methods in JS?',
        choices:['blowup()','fixit()','pop()','popoff()'],
        answer:'pop()'
    },
    {
        title:'What does console.log() do?',
        choices:['Chops wood','Prints argument to the user','Stores info in web pages local memory',
                    'Converts output into log notation'],
        answer:'Prints argument to the user'

    },
    {
        title:'What is the DOM?',
        choices:['Document Object Model','Dingus Ole’ Mingus','Drive Optimal Memory','Dot Operated Mask'],
        answer:'Document Object Model'

    },
    {
        title:'Which of these will NOT provide an empty array1?',
        choices:['array1 = [];','array1.length=0;','array1.splice(0, array1.length)','array1.pop()'],
        answer:'array1.pop()'
    },
    {
        title:'Padding, in CSS, is:',
        choices:['space around element content inside of any defined borders',
                 'space around element content, outside of any defined borders',
                 'space around the  element’s parent, inside of any defined borders',
                 'Bubble boy’s only known environment'],
        answer:'space around element content inside of any defined borders'
    },
    {
        title:'The JS search() method searches a string for:',
        choices:['a match against a regular expression, and returns the matches, as an Array',
                 'finds True Digital Love',
                 'finds the index of (the position of) the first occurrence of a specified text',
                 'a specified value and returns the position of the match'],
        answer:'a specified value and returns the position of the match'
    },
    {
        title:'JavaScript supports which 5 types of loops:',
        choices:['For  for/in  for/of  while  do/while',
                'For  for/in  where/of  while  do/while',
                'Never Gonna Give You Up',
                'For  for/over  for/of  while  do/while'],
        answer:'For  for/in  for/of  while  do/while'

    },
    {
        title:'The break statement________',
        choices:['jumps over one iteration in the loop',
            'jumps out of a loop',
            ' is KitKat propaganda',
            'jumps into any code block'],
        answer:'Jumps out of a loop'
    },
    {
        title:'_______is JavaScripts default behavior of moving declarations to the top.',
        choices:['Hoisting','Vaulting','Syncing','Simping'],
        answer:'Hoisting'
    } 
]

function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      timeEl.textContent = secondsLeft;
      secondsLeft--;
      
  
      if(secondsLeft < 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
      }
  
    }, 1000);
}

function startquiz() {
    instrctnsEl.style.display = 'none';  //clears start menu  
    quizboxEl.style.display = 'flex';
}

function retrieveQuestions () {
    if (questionindex<10 && secondsLeft>0) {
        var cquestion = questions[questionindex];
        titleEl.textContent = cquestion.title;
        choiceEl.innerHTML = '';
        cquestion.choices.forEach(function(choice) {
            var choicepattern = document.createElement('button');
            choicepattern.setAttribute('value', choice);
            choicepattern.textContent = choice; //got check act to set class and value
            choiceEl.append(choicepattern); // adds the elements to the parent ChoiceEl
            choicepattern.classList.add("answer"); // applies  class='answer' styling
            console.log(choicepattern);
            choicepattern.addEventListener("click", checkanswer);
        })
    } else {
        ScoreScreen();
    }
}
   
function checkanswer(){
    var clickedoption = event.target.textContent; // equal to the clicked buttons text
    var correctoption = questions[questionindex].answer; // equal to answer of current question
        if (clickedoption === correctoption) {
            userscore ++;
            questionindex++;
            retrieveQuestions();
        } else { 
            if(secondsLeft>6) {
            secondsLeft= secondsLeft-6;
            questionindex++;
            } else {
                secondsLeft = 0;
            }   
            retrieveQuestions();
        }
 }

 function ScoreScreen() {
    titleEl.textContent = 'Your Score is: ' + userscore+ '/10';
    choiceEl.innerHTML='';
    initialsinputEl.style.display = 'flex';
    choicepattern = document.createElement('button');
    choicepattern.textContent = 'Submit'
    initialsinputEl.append(choicepattern); 
    choicepattern.classList.add("answer");



 } 
 
 
 function goFunction() {
    setTime();  //start the timer
    startquiz();
    retrieveQuestions();
}
// start butn on click call myFunction
start_butn.addEventListener("click", goFunction);
