var start_butn = document.querySelector('#start');
var quizboxEl = document.getElementById('quiz-box')
var instrctnsEl = document.getElementById('instructions');
var timeEl = document.querySelector(".timer");
var secondsLeft = 59;
var questionindex =0;
var questions = [
    {
        title:'Which of these are NOT basic data types in JS?',
        choices:['Boolean', 'Number', 'Method','String'],
        answer:'Method'
    },
    
]


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
    quizboxEl.style.display = 'flex';
}

function goFunction() {
    setTime();  //start the timer
    startquiz();
    retrieveQuestions();
}

function retrieveQuestions () {
    var cquestion = questions[questionindex];
    var titleEl = document.getElementById('Qtitle');
    var choiceEl = document.getElementById('Choices');
    titleEl.textContent = cquestion.title;
    choiceEl.innerHTML = '';
    cquestion.choices.forEach(function(choice, i) {
        var choicepattern = document.createElement('button');
        choicepattern.setAttribute('value', choice);
        choicepattern.textContent = choice; //got check act to set class and value
        choiceEl.append(choicepattern); // adds the elements to the parent ChoiceEl
        choicepattern.classList.add("answer"); // applies  class='answer' styling
        console.log(choicepattern);
        choicepattern.addEventListener("click", checkanswer);
    })
}
function checkanswer(){
    var clickedoption = event.target.textContent;
    var correctoption = questions[questionindex].answer;
    if (clickedoption === correctoption) {
        alert('correct');
    } else {
        alert('wrong');
    }
 }


// start butn on click call myFunction
start_butn.addEventListener("click", goFunction);
