// JavaScript for Trivia Game

// Initialize Variables

var triviaGame = [{
    question: "What is the exclusive club that Pam, Oscar, and Toby establish?",
    choices: ["Finer Things Club", "Beet Tasters", "No Michael Club" , "Scranton Book Club"],
    correct: "Finer Things Club"
  }, {
    question: "What does Jim use to make Dwight salivate everytime he hears the Window reboot sound?",
    choices: ["Bear meat cooked medium well", "Turkey Sandwich", "Altoids" , "Bazooka Gum"],
    correct: "Altoids"
  }, {
    question: "What does Darryl tell Michael his gang did to resolve conflict with one another?",
    choices: ["Fluffy Fingers", "Fight", "Dance off", "Arm wrestle"],
    correct: "Fluffy Fingers"
  }, {
    question: "What is the name of the game where people walk with paper boxes on their feet during the Office Olympics?",
    choices: ["Flonkerton", "Leadfoot", "Snowshoe", "Boots"],
    correct: "Flonkerton"
  }, {
    question: "What does Dwight keep a pair of in his car for special occasions?",
    choices: ["Chaps", "Birkenstocks", "Jar of Beet Juice", "A Bear Horn" ],
    correct: "Birkenstocks"
  },{ 
    question: "In the episode 'Survivor Man', what does Dwight stop Michael from eating out in the wilderness?",
    choices: ["Venomous spider", "Poisonous berries", "Yellow snow" , "Mushrooms"],
    correct: "Mushrooms"
  }, {
    question: "According to Dwight, what rule number 17 of the 40 rules that all Schrute boys must learn before the age of 5?",
    choices: ["Don't turn your back on bears, men you have wronged, or the dominant turkey during mating season", "If you come upon an orphan bear cub raist is as one of your own", "Beets are the 'Prime Rib' of the vegetable world" , "The German language will become the world language"],
    correct: "Don't turn your back on bears, men you have wronged, or the dominant turkey during mating season"
  }, {
    question: "When Michael burns his foot with his George Foreman Grill. What does he make a cast with?",
    choices: ["A paper box", "Duct tape", "Bubble wrap" , "Tube socks"],
    correct: "Bubble wrap"
  }, {
    question: "Who was in the same high school graduation class as Michael?",
    choices: ["Stanley", "Angela", "Creed" , "Phyllis"],
    correct: "Phyllis"
  }, {
    question: "What dies Dunder Mifflin sell when the company was first founded in 1949?",
    choices: ["Metal brackets", "Ink for printing presses", "Mufflers" , "Muffins"],
    correct: "Metal brackets"
  }

];

var timer;
var intervalId;
var i = 0;
var correctCounter = 0;
var wrongCounter = 0;

$("#startGame").text("Press any button to begin");
$("#question").text("");
$("#firstAnswer").text("");
$("#secondAnswer").text("");
$("#thirdAnswer").text("");
$("#fourthAnswer").text("");

document.onkeyup = function() {
    $("#startGame").text("")
    currentQuestion();
}

// currentQuestion();

// Start Timer Function
function startTimer() {
    timer = 15 + 1;
    intervalId = setInterval(decrement, 1000);
    decrement();
};

// Decrement Function for Timer
function decrement() {
    timer--;
    $("#timeRemaining").text("Time Remaining: " + timer)

    if (timer === 0){
        clearInterval(intervalId);
        i++;
        currentQuestion();
    }
};

// Displays current question on the DOM
function currentQuestion() {
    if (i > 9) {
        alert("Correct: " + correctCounter + " Incorrect: " + wrongCounter)
    };

    $("#question").text(triviaGame[i].question);
    $("#firstAnswer").text("a. " + triviaGame[i].choices[0]);
    $("#secondAnswer").text("b. " + triviaGame[i].choices[1]);
    $("#thirdAnswer").text("c. " + triviaGame[i].choices[2]);
    $("#fourthAnswer").text("d. " + triviaGame[i].choices[3]);

    startTimer();  
}

$("#firstAnswer").on("click", function() {
    if (triviaGame[i].choices[0] === triviaGame[i].correct) {
        correctCounter++;
        console.log(correctCounter);
        clearInterval(intervalId);
        i++;
        currentQuestion();
    } else {
        wrongCounter++;
        console.log(wrongCounter);
        clearInterval(intervalId);
        i++;
        currentQuestion();
    }     
})

$("#secondAnswer").on("click", function() {
    if (triviaGame[i].choices[1] === triviaGame[i].correct) {
        correctCounter++;
        console.log(correctCounter);
        clearInterval(intervalId);
        i++;
        currentQuestion();
    } else {
        wrongCounter++;
        console.log(wrongCounter);
        clearInterval(intervalId);
        i++;
        currentQuestion();
    }     
})

$("#thirdAnswer").on("click", function() {
    if (triviaGame[i].choices[2] === triviaGame[i].correct) {
        correctCounter++;
        console.log(correctCounter);
        clearInterval(intervalId);
        i++;
        currentQuestion();
    } else {
        wrongCounter++;
        console.log(wrongCounter);
        clearInterval(intervalId);
        i++;
        currentQuestion();
    }     
})

$("#fourthAnswer").on("click", function() {
    if (triviaGame[i].choices[3] === triviaGame[i].correct) {
        correctCounter++;
        console.log(correctCounter);
        clearInterval(intervalId);
        i++;
        currentQuestion();
    } else {
        wrongCounter++;
        console.log(wrongCounter);
        clearInterval(intervalId);
        i++;
        currentQuestion();
    }     
})



