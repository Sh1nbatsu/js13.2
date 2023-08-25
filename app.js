// // Ex1

// function car(color) {
//   this.color = color;
//   this.logColor = () => {
//     console.log(`car is ${this.color}`);
//   };
// }

// const audi = new car("red");

// audi.logColor();

// // Ex2

// class calculator {
//   constructor() {
//     const num1 = prompt("Введите первое число");
//     const num2 = prompt("Введите второе число");
//     this.sum = () => {
//       return +num1 + +num2;
//     };
//     this.mul = () => {
//       return +num1 * +num2;
//     };
//   }
// }

// const calc = new calculator();

// // Ex3

class Logo {
  constructor(url) {
    this.top = 0;
    this.left = 0;
    this.width = 200;
    this.imgUrl = url;
    this.html = null;
    this.root = document.getElementById("root");
    mfLogotip.init();
  }

  init() {
    const img = document.createElement("img");
    img.src = this.imgUrl;
    this.html = img;
    this.render();
    document.body.style.backgroundColor = "black";
  }

  render() {
    this.root.innerHTML = "";
    root.appendChild(this.html);
    this.html.style.position = "fixed";
    this.html.style.left = `${this.left}px`;
    this.html.style.top = `${this.top}px`;
    this.html.style.width = `${this.width}px`;
  }

  moveUp() {
    this.top -= 20;
    this.render();
  }
  moveDown() {
    this.top += 20;
    this.render();
  }
  moveLeft() {
    this.left -= 20;
    this.render();
  }
  moveRight() {
    this.left += 20;
    this.render();
  }
}

const imgUrl = "https://bit.ly/2tcDito";
const mfLogotip = new Logo(imgUrl);
console.log(mfLogotip);

mfLogotip.moveRight();
mfLogotip.moveRight();
mfLogotip.moveRight();
mfLogotip.moveRight();
mfLogotip.moveDown();
mfLogotip.moveDown();
mfLogotip.moveDown();
mfLogotip.moveDown();

class circle {
  constructor(size, color) {
    this.size = size;
    this.color = color;
    this.html = null;
    this.init();
  }

  init() {
    const circle = document.createElement("div");
    circle.style.width = `${this.size}px`;
    circle.style.height = `${this.size}px`;
    circle.style.backgroundColor = this.color;
    circle.style.borderRadius = `${this.size / 2}px`;
    this.html = circle;
    this.render();
  }

  render() {
    const root = document.getElementById("root");
    root.prepend(this.html);
  }
}

const yellowCircle = new circle(120, "yellow");

// yellowCircle.init();
