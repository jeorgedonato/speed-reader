let poem = "Some say the world will end in 🔥, Some say in ice. From what I’ve tasted of desire, I hold with those who favor fire. But if it had to perish twice, I think I know enough of hate. To say that for destruction ice, Is also great, And would suffice.";

let body = document.body;
let countDownDiv = document.getElementById('countDownTimer');
let readDiv = document.getElementById('readDiv');
function prepareRead() {
  // Create the countdown timer.
  let milliPrompt = prompt("How fast can you read? (Milliseconds) e.g. 1000 for 1 second.");
  let countDownSeconds = 5;
  if (milliPrompt && !isNaN(milliPrompt)) {

    let countDownTimer = setInterval(() => {
      countDownDiv.textContent = `The challenge will start in ${countDownSeconds}`;
      countDownSeconds--;
      if (countDownSeconds === 0) {
        countDownDiv.textContent = "";
        clearInterval(countDownTimer);
        speedRead(milliPrompt);
      }
    }, 1000);

  } else {
    alert('Please provide a number.');
  }
}

function speedRead(milliSeconds) {
  // Print words to the screen one at a time.
  //Declare a var for iterator
  let iterator = 0;
  //Split the string to array
  const splitPoem = poem.split(" ");
  // console.log(splitPoem);
  let readTimer = setInterval(() => {
    readDiv.textContent = splitPoem[iterator];
    iterator++;
    // console.log(iterator)
    if (iterator === splitPoem.length) {
      if (milliSeconds <= 200) {
        countDownDiv.textContent = "Challenge Done! But did you really catch any of that?";
      } else {
        countDownDiv.textContent = "Challenge Done!";
      }
      clearInterval(readTimer);
    }
  }, milliSeconds);
}

prepareRead();