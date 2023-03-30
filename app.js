"use strict";
let first = document.getElementById("firstImg");
let second = document.getElementById("secondImg");
let third = document.getElementById("thirdImg");
let firstIndex;
let secondIndex;
let thirdIndex;
let tries = 5;
Render.allImgs = [];
let count = 0;

function Render(name, path) {
    this.name = name;
    this.path = path;
    this.votes = 0;
    this.shown = 0;
    Render.allImgs.push(this);
}

new Render("bag", "img/bag.jpg");
new Render("banana", "img/banana.jpg");
new Render("bathroom", "img/bathroom.jpg");
new Render("boots", "img/boots.jpg");
new Render("breakfast", "img/breakfast.jpg");
new Render("bubblegum", "img/bubblegum.jpg");
new Render("chair", "img/chair.jpg");
new Render("cthulhu", "img/cthulhu.jpg");
new Render("dog-duck", "img/dog-duck.jpg");
new Render("dragon", "img/dragon.jpg");
new Render("pen", "img/pen.jpg");
new Render("pet-sweep", "img/pet-sweep.jpg");
new Render("scissors", "img/scissors.jpg");
new Render("shark", "img/shark.jpg");
new Render("sweep", "img/sweep.png");
new Render("tauntaun", "img/tauntaun.jpg");
new Render("unicorn", "img/unicorn.jpg");
new Render("usb", "img/usb.gif");
new Render("water-can", "img/water-can.jpg");
new Render("wine-glass", "img/wine-glass.jpg");

function random() {
    return Math.floor(Math.random() * Render.allImgs.length);
}
function generates() {
    firstIndex = random();
    secondIndex = random();
    thirdIndex = random();

    while (
        firstIndex === secondIndex ||
        firstIndex === thirdIndex ||
        secondIndex === thirdIndex
    ) {
        firstIndex = random();
        secondIndex = random();
    }
    first.setAttribute('src', Render.allImgs[firstIndex].path);
    second.setAttribute("src", Render.allImgs[secondIndex].path);
    third.setAttribute("src", Render.allImgs[thirdIndex].path);
    Render.allImgs[firstIndex].shown++;
    Render.allImgs[secondIndex].shown++;
    Render.allImgs[thirdIndex].shown++;
}
console.log(Render.allImgs);

first.addEventListener('click', listenerFun)
second.addEventListener('click', listenerFun)
third.addEventListener('click', listenerFun)
function listenerFun(event) {
    count++;
    console.log(count);
    if (count <= tries) {
        if (event.target.id === 'firstImg') {
            Render.allImgs[firstIndex].votes++;
        } else if (event.target.id === 'secondImg') {
            Render.allImgs[secondIndex].votes++;
        } else if (event.target.id === 'thirdImg') {
            Render.allImgs[thirdIndex].votes++;
        }
    } else {
        let buttons = document.getElementById('button');
        let button = document.createElement('button')
        buttons.appendChild(button)
        button.addEventListener('click', showing);


        first.removeEventListener('click', listenerFun)
        second.removeEventListener('click', listenerFun)
        third.removeEventListener('click', listenerFun)





    }
    generates();

}


function showing() {
    let list = document.getElementById('results-list');

    let Result;
    for (let i = 0; i < Render.allImgs.length; i++) {
        Result = document.createElement('li');
        list.appendChild(Result);
        Result.textContent = `${Render.allImgs[i].name} has ${Render.allImgs[i].votes} votes and was seen ${Render.allImgs[i].shown} times`

    }



    
    button.hidden = true;
}

generates();
