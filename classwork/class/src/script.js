// 1. Create a PrintMaсhine class that consists of font size, font color, font-family, and print() method that accepts text and prints it to the webpage using document.write(). The text should be displayed using the font properties of the class. Create an instance of that class and call the print() method.

class PrintMachine {
  constructor(fontSize, fontColor, fontFamily) {
    this.fontSize = fontSize;
    this.fontColor = fontColor;
    this.fontFamily = fontFamily;
  }

  print(text) {
    document.write(`
      <p style="font-size: ${this.fontSize}; color: ${this.fontColor}; font-family: ${this.fontFamily}">
        ${text}
      </p>
      `);
  }
}

let greet = new PrintMachine("20px", "red", "arial");
greet.print("My name is Nora");

// _____________________________________________________________________________

// 2. Create a Shape class that consists of name, number of sides, and side length.
// Add getter that returns the shape perimeter. Create a new instance of Shape called square.
// Get the perimeter to check whether it works correctly.
// Create a new instance of Shape called triangle, get the perimeter to check that it works OK.

class Shape {
  constructor(name, numberOfSides, sideLength) {
    this.name = name;
    this.numberOfSides = numberOfSides;
    this.sideLength = sideLength;
  }

  get perimeter() {
    return this.numberOfSides * this.sideLength;
  }
}

let square = new Shape("square", 4, 10);
console.log(square.perimeter);

let triangle = new Shape("triangle", 3, 15);
console.log(triangle.perimeter);

// ___________________________________________________________________________

// 3. Create a Square class that inherits from the Shape class you created in the last assignment. Add calculateArea() method that calculates the square’s area. Also set up the constructor so that the name property of Square class is automatically set to “square”, and the “sides” property is automatically set to 4. When invoking the constructor, you should therefore just need to provide the side length property.

class Square extends Shape {
  constructor(sideLength) {
    super("square", 4, sideLength);
  }

  calculateArea() {
    return this.sideLength * this.sideLength;
  }
}

let square1 = new Square(5);
console.log(square1.calculateArea());

// ______________________________________________________________________

// 4. Create an Animal class. Animal has a name and can eat. The eat() method should display a string “The animal called NAME is eating”. Create a Bird class that inherits from the Animal class. Bird accepts a number of wings and has a method fly() that just displays some message. Create an instance of Bird class and call eat() and fly() methods of it.

class Animal {
  constructor(name, food) {
    this.name = name;
    this.food = food;
  }
  eat() {
    return `The animal called ${this.name} is eating ${this.food}`;
  }
}

class Bird extends Animal {
  constructor(name, food, numberOfWings) {
    super(name, food);
    this.numberOfWings = numberOfWings;
  }
  fly() {
    return `${this.name} can fly with ${this.numberOfWings} wings;`;
  }
}

let bird = new Bird("seagull", "chips", 2);
console.log(bird.eat());
console.log(bird.fly());

// ___________________________________________________________________
