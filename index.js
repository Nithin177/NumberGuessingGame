const answer = Math.floor(Math.random() * 10 + 1);
let gusses = 0;

document.getElementById("btn").onclick = function () {
  let guess = document.getElementById("guess").value;
  gusses += 1;

  if (guess == answer) {
    alert(`${answer} is the #,It took You ${gusses} gusess`);
  } else if (guess < answer) {
    alert("Too Small");
  } else {
    alert("Too Large");
  }
};
