const grid = document.querySelector('.grid');

const blackButton = document.querySelector('.blackbutton');
blackButton.addEventListener('click', blkButton);
const clear = document.querySelector('.clearbutton')
clear.addEventListener('click', clearGrid);
const eraserButton = document.querySelector('.eraserbutton')
eraserButton.addEventListener('click', ersButton)
const rainbowButton = document.querySelector('.rainbowbutton')
rainbowButton.addEventListener('click', rbwButton)
const errorText = document.querySelector('.error')
//DOM handling

 

  function getGrid(size) {
    const grid = document.querySelector('.grid');
    const boxs = grid.querySelectorAll("div");
    boxs.forEach((div) => div.remove());
    grid.style.gridTemplateColumns = `repeat( ${size} , 1fr)`;
    grid.style.gridTemplateRows = `repeat( ${size} , 1fr)`;
  
    let amount = size * size
    for (let i = 0; i < amount; i++) {
      const box = document.createElement('div');
      box.classList.add('box');
      grid.appendChild(box);
    } 
  }
  
  getGrid(16)
  
  let result = ""
  function changeSize(input){
    if (input >= 2 && input <= 100) {
      getGrid(input);
      result = ("Top choice fam!")
      error()
    }
    else {
      result = ("You'll crash the game fam! Input a no. between 2 to 100 please!")
      error()
    }
  
  }

  function error () {
    errorText.innerHTML = result

  }

function blkButton() {
  grid.querySelectorAll(".box").forEach(box => box.addEventListener("mouseover", () => {
    box.style.background = "black";
  }))
}


function ersButton(){
  grid.querySelectorAll(".box").forEach(box => box.addEventListener("mouseover", () => {
    box.style.background = "lightgray"
  }))
}

function rbwButton(){
  grid.querySelectorAll(".box").forEach(box => box.addEventListener("mouseover", () => {
    box.style.background = getRbwColor()
  }))
}
function getRbwColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


function clearGrid() {
  const tgt = ".box"
  grid.querySelectorAll(".box").forEach(box => box.removeAttribute('style') )
}