// const myHeading = document.querySelector("h1");
// myHeading.textContent = "Hello world!";

const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/f5e5b0bd-ed40-400b-9216-34bae9d78955_2643x3500.jpg") {
    myImage.setAttribute("src", "images/KAW-KYO-027_unframed.webp");
  } else {
    myImage.setAttribute("src", "images/f5e5b0bd-ed40-400b-9216-34bae9d78955_2643x3500.jpg");
  }
});

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  localStorage.setItem("name", myName);
  myHeading.textContent = `Welcome to Japan, ${myName}`;
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Welcome to Japan, ${storedName}`;
}

myButton.addEventListener("click", () => {
  setUserName();
});
