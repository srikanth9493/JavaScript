function ageInDays() {
  let year = prompt("what year you were born");
  let days = (new Date().getFullYear() - year) * 365;
  // let text = document.getElementById("ageid").innerText;
  // console.log(text + " " + days);
  var h1 = document.createElement("h1");
  console.log(h1);
  var textAnswer = document.createTextNode("your age in days " + days);
  h1.append = textAnswer;
  console.log(h1);
  h1.setAttribute("id", "ans");
  h1.appendChild(textAnswer);
  console.log(h1);
  document.getElementById("ans").appendChild(h1);
}

function reset() {
  document.getElementById("ans").remove();
}

function generate() {
  img = document.createElement("img");
  console.log(img);
  img.setAttribute(
    "src",
    "data:image/jpeg;base64,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  "
  );
  img.setAttribute("class", "myimage");
  console.log(img);

  document.getElementById("challenge2__res").appendChild(img);
}

function RPS(choice) {
  let list = ["rock", "sci", "paper"];
  let imageslist = [
    "https://i.pinimg.com/originals/49/a6/e9/49a6e9c659b49cf1f90909f79efde5b6.jpg",
    "https://c8.alamy.com/comp/2BWY1RJ/cartoon-scissors-2BWY1RJ.jpg",
    "https://previews.123rf.com/images/lineartestpilot/lineartestpilot1802/lineartestpilot180273229/95583696-cartoon-lined-paper-with-paperclip.jpg",
  ];

  console.log(choice);
  let bot_id = Math.floor(Math.random() * 3);
  let bot_image = imageslist[bot_id];
  let bot_choice = list[bot_id];

  let human_choice = choice.id;
  let human_image = choice.src;

  let winner = getWinner(human_choice, bot_choice);
  let winner_text = "";

  let img1 = document.createElement("img");
  img1.setAttribute("src", human_image);

  let img2 = document.createElement("img");
  img2.setAttribute("src", bot_image);

  let h1 = document.createElement("h1");

  if (winner == 1) {
    console.log("you won");

    img1.setAttribute("class", "challenge3__winner");
    img2.setAttribute("class", "challenge3__looser");

    winner_text = "you won";
  } else if (winner == 0) {
    console.log("Tie");
    winner_text = "Tie";
    img2.setAttribute("class", "challenge3__tie");
    img1.setAttribute("class", "challenge3__tie");
  } else {
    console.log("bot won  ");
    winner_text = "bot won ";
    img2.setAttribute("class", "challenge3__winner");
    img1.setAttribute("class", "challenge3__looser");
  }

  document.getElementById("challenge3__container").remove();
  // console.log(human_choice, bot_choice);''

  let myDiv = document.createElement("div");
  console.log(myDiv);
  myDiv.setAttribute("class", "challenge3__container");

  // console.log(img1);

  console.log("h1", h1);
  let text = document.createTextNode(winner_text);
  h1.appendChild(text);
  // console.log(img2);

  myDiv.appendChild(img1);
  myDiv.appendChild(h1);
  myDiv.appendChild(img2);
  // console.log(myDiv);

  document.getElementById("challenge2box").appendChild(myDiv);

  console.log(human_choice, bot_choice);
}

function getWinner(human, bot) {
  if (human == bot) return 0;
  if (
    (human == "rock" && bot == "sci") ||
    (human == "paper" && bot == "rock") ||
    (human == "sci" && bot == "paper")
  ) {
    return 1;
  } else return 2;
}

let all_buttons = document.getElementsByTagName("button");

function getColor(option) {
  var e = document.getElementById("list").value;
  console.log("buttonos", all_buttons, typeof all_buttons);
  if (e == "red") {
    paint(all_buttons, "red");
  }
  if (e == "green") {
    paint(all_buttons, "green");
  }
  if (e == "random") {
    paint(all_buttons, "random");
  }
}
function paint(all_buttons, color) {
  if (color == "random") {
    list = ["red", "green", "blue", "orange"];
    for (let i = 0; i < all_buttons.length; i++) {
      let random = Math.floor(Math.random() * 5);
      console.log(random);

      all_buttons[i].style.backgroundColor = list[random];
    }
  } else {
    for (let i = 0; i < all_buttons.length; i++) {
      all_buttons[i].style.backgroundColor = color;
    }
  }
}
