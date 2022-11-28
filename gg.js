let answer;
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
