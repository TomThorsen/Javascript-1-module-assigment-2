//MODULE ASSIGNMENT 2 - LEVEL 1
//1. Create a function that displays prototypal inheritance
function question1() {
    function Games() {
        this.name = 'Factorio';
        this.category = 'management';
    }

    Games.prototype.type = function () {
        console.log('I am currently playing ' + this.name + ', which is a ' + this.category + ' game.');
    };
    var whatgame = new Games();
    whatgame.type();
}

//2. Create an array of numbers from 1 - 10; slice the 5th number in the array
//3. Delete the last number in the array that you created above.
function question2and3() {
    var numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var slicedNumber = numberArray.slice(5, 6); // slice array element 5

    console.log('Element number 5 in the array is ' + '"' + slicedNumber + '"' + ', since array elements are counted from 0');
    console.log('Time to remove the last element from the array');
    console.log('Current array is: ' + numberArray);

    // splice last array element
    var index = numberArray.indexOf(10);
    if (index > -1) {
        numberArray.splice(index, 1);
    }
    console.log('Array after splice is: ' + numberArray);
}

//4. Given the following paragraph, create a JavaScript function that changes all mentions of strawberry to banana and strawberries to bananas: 
function question4() {
    var originalText = 'Strawberries are a popular part of spring and summer diets throughout America. Mouths water from coast to coast each spring, when small white blossoms start to appear on strawberry bushes. They announce the impending arrival of the ruby red berries that so many people crave. Ripe strawberries taste sweet and have only a slight hint of tartness. They are also one of the healthiest fruits around. There are countless recipes for the luscious red berry, but many people prefer to eat them fresh and unaccompanied.';

    var replacedText = originalText
        .replace('Strawberries', 'Bananas')
        .replace('strawberries', 'bananas')
        .replace('strawberry', 'banana');

    console.log('The edited text is:');
    console.log(replacedText);
}


//5. Create an array and a button. The array should contain 4 football clubs names. When the button is clicked, remove all elements out of the array that we just created. There after add in 4 names of cars inside that array. Log it to the console.
function question5() {
    var button1 = document.getElementById('Button1');
    var footballTeams = ['Barcelona', 'Real Madrid', 'Arsenal', 'Manchester United'];
    var carNames = ['Aston Martin DB9', 'Tesla Model X', 'Ferrari 458', 'Porche 911'];
    var buttonPushed = false;
    var questionNrDisplayed = false;

    button1.addEventListener(
        'click',
        function () {

            if (!questionNrDisplayed) { // has "Questions 5" console log been displayed?
                console.log('Question 5');
                questionNrDisplayed = true;
            }

            if (!buttonPushed) { // has button been pushed before?
                console.log('Array contained: ' + footballTeams);
                footballTeams = [];
                console.log('Button was clicked, so array is cleared. Click again to replace with car names');
                buttonPushed = true;
            } else {
                footballTeams = carNames;
                console.log('Button was clicked again. Empty array replaced with 4 car names.');
                console.log('Array content is now: ' + footballTeams);
            }
        }
    );
}

//6. Create an array of objects with 3 people inside it. Use the filter function to map by a name.
function question6() {
    var persons = [
        {
            firstName: 'Ted',
            age: '32',
            hobby: 'Table Tennis'
        },
        {
            firstName: 'Paul',
            age: '34',
            hobby: 'Soccer'
        },
        {
            firstName: 'Bob',
            age: '20',
            hobby: 'Gaming'
        }
    ];

    console.log('People in array:');
    console.log(persons);
    var interests = persons.filter(function (firstName) {
        return (firstName.hobby === 'Gaming');
    });

    console.log('People in array that has Gaming as hobby:');
    console.log(interests);
}

//7. Create a simple function that logs the date.
function question7() {
    var button2 = document.getElementById('Button2');
    button2.addEventListener(
        'click',
        function () {
            console.log('Question 7');
            var today = new Date();
            var currentYear = today.getFullYear();
            var currentMonth = today.getMonth() + 1;
            var currentDay = today.getDate();
            var currentHour = today.getHours();
            var currentMinutes = today.getMinutes();
            var currentSeconds = today.getSeconds();

            console.log('The current date and time is:');
            console.log(currentHour + ':' + currentMinutes + ':' + currentSeconds);
            console.log(currentDay + '-' + currentMonth + '-' + currentYear);
        }
    );
}

//Run functions
console.log('Question 1');
question1();
console.log('Question 2 and 3');
question2and3();
console.log('Question 4');
question4();
question5();
console.log('Question 6');
question6();
question7();
