let outputElement = document.getElementById("potato");
let clicks = 0;
let currentImage = 0;
const IMAGES_LIST = [
  "./assets/one.jpg",
  "./assets/two.png",
  "./assets/three.jpg",
  "./assets/four.jfif"
];

function increment() {
  clicks++;
  outputElement.innerText = clicks;
}

// Arrow function, es6 style
const updateValue = (value) => {
  outputElement.innerHTML = value;
}

const nextImage = () => {
  //ACM Only SYNTAX
  // currentImage = ++currentImage % IMAGES_LIST.length;

  // IT People syntax
  currentImage++;
  if (currentImage == IMAGES_LIST.length)
    currentImage = 0;

  document.getElementById("imgContainer").src = IMAGES_LIST[currentImage];
}

const changeMe = () => {
  const chElement = document.getElementById("changable");
  // console.log(chElement.style.color);
  if (chElement.style.color == "rgb(19, 23, 28)") {
    chElement.style.background = "linear-gradient(19deg, #21D4FD 0%, #B721FF 100%)";
    chElement.style.color = "#d6e7ff";
  } else {
    chElement.style.background = "linear-gradient(19deg, #8dfd21 0%, #ff3e21 100%)";
    chElement.style.color = "#13171c";
  }
}

const surprize = () => {
  document.getElementById("imgContainer").src = "https://loremflickr.com/520/340?random=" + Math.random();
}

///////// Some array examples
let arr = ["aaa", "bbb", 50];
const arr2 = [];
arr2.push("100");
/// arr2=arr; Error!
arr.push("ccc");
console.log(arr.pop());

arr[3] = "ddd";

for (var i = 0; i < arr.length; i++)
  console.log(arr[i]);