let answer;
let checkans;
let start = document.getElementById("btn");
console.log(start);
start.addEventListener("click", function (e) {
  fetch("https://random-word-api.herokuapp.com/word")
    .then((response) => response.json())
    .then((data) => {
      console.log(data[0]);
      answer = data[0];
    });
});
let check = document.getElementById("btn1");
// console.log(check);
check.addEventListener("click", function (e) {
  let input = document.getElementById("inpt");
  // console.log(input);
  checkans = input.value;
  console.log(checkans);
  if (checkans == answer) {
    alert("Success");
  } else {
    alert("Wrong");
  }
});
let hint = document.getElementById("btn2");
// console.log(hint);
let hintcount = 0;
hint.addEventListener("click", function (e) {
  if (hintcount == 0) {
    let p1 = document.getElementById("para2");
    // console.log(p1);
    p1.innerHTML = "> Word has " + answer.length + " letters";
    hintcount = 1;
    // console.log(hintcount);
  } else if (hintcount == 1) {
    let p2 = document.getElementById("para3");
    p2.innerHTML = "> First letter is " + answer[0];
  }
});
