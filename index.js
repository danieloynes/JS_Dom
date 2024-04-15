//Oppgave 1

/*
document.getElementById("F").addEventListener("click", function () {
    let data = document.getElementById("txt").value;
    let result = (data-32)*5/9
    document.getElementById("result").innerText = `${data}F er ${Math.round(result)}C`
})
document.getElementById("C").addEventListener("click", function () {
    let data = document.getElementById("txt").value;
    let result = (9/5*data)+32
    document.getElementById("result").innerText = `${data}C er ${Math.round(result)}F`
})
*/


//Oppgave 2

/*
let num1, num2;

document.getElementById("knapp").addEventListener("click", function () {
    num1 = document.getElementById("txt1").value;
    num2 = document.getElementById("txt2").value;

    if (num1 > num2) {
        document.getElementById("result").innerText = `${num1} er større enn ${num2}`;
    } else if (num1 < num2) {
        document.getElementById("result").innerText = `${num1} er mindre enn ${num2}`;
    } else {
        document.getElementById("result").innerText = `${num1} er lik ${num2}`;
    }
})
*/


//Oppgave 3

/*
document.getElementById('knapp').addEventListener('click', function() {
    var userInput = document.getElementById('txt').value.toLowerCase();
    var reversedInput = userInput.split('').reverse().join('');

    if (userInput === reversedInput) {
        document.getElementById('result').textContent = userInput + " er et palindrom.";
    } else {
        document.getElementById('result').textContent = userInput + " er ikke et palindrom.";
    }
});
*/

//Oppgave 4

/*
const redBtn = document.getElementById('redBtn');
const box1 = document.getElementById('box1');

redBtn.addEventListener('click', function() {
  box1.style.backgroundColor = 'red';

  setTimeout(function() {
    box1.style.backgroundColor = '';
  }, 1000);
});

const blueBtn = document.getElementById('blueBtn');
const box2 = document.getElementById('box2');

blueBtn.addEventListener('click', function() {
  box2.style.backgroundColor = 'red';

  setTimeout(function() {
    box2.style.backgroundColor = '';
  }, 1000);
});

const randomBtn = document.getElementById('randomBtn');
const box3 = document.getElementById('box3');

randomBtn.addEventListener('click', function() {
  const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);

  box3.style.backgroundColor = randomColor;

  setTimeout(function() {
    box3.style.backgroundColor = '';
  }, 1000);
});
*/