// 3. Create an HTML page with traffic lights and a button that switches the color to the next one.
// Do not forget to use CSS

// -------------------------all the light turns on at one the same time------

// let trafficLight = document.getElementById("traffic-light");
// let slowLight = document.getElementById("slowLight");
// let goLight = document.getElementById("goLight");
// let currentElement;

// function illuminateTrafficlights() {
//   if (!currentElement) {
//     currentElement = trafficLight.firstChild;
//   } else if (currentElement) {
//     currentElement = currentElement.nextSibling;
//   } else {
//     currentElement = currentElement.lastChild;
//   }

//   currentElement.style.backgroundColor = "red";
//   slowLight.style.backgroundColor = "yellow";
//   goLight.style.backgroundColor = "green";
// }
// -------------------------all the light turns on at one the same time---------

// function illuminateTrafficlights() {
//   let trafficLights = document.querySelectorAll("#traffic-light div");

//   for (let i = 0; i < trafficLights.length; i++) {
//     if (i === 0) {
//       trafficLights[i].style.backgroundColor = "red";
//       // listItems[i].style['background-color'] // background-color
//     } else if (i == 1) {
//       trafficLights[i].style.backgroundColor = "yellow";
//     } else if (i == 2) {
//       trafficLights[i].style.backgroundColor = "green";
//     } else {
//       trafficLights[i].style.backgroundColor = "black";
//     }
//   }
// }

// -------------------------

// -------------------------Martinas code. dont understand the last if/else-----
function clearLights() {
  document.getElementById("stopLight").style.backgroundColor = "black";
  document.getElementById("slowLight").style.backgroundColor = "black";
  document.getElementById("goLight").style.backgroundColor = "black";
}

let index = 0;
function illuminateTrafficlights() {
  clearLights();

  if (index == 0) {
    document.getElementById("stopLight").style.backgroundColor = "red";
  } else if (index == 1 || index == 3) {
    document.getElementById("slowLight").style.backgroundColor = "yellow";
  } else if (index == 2) {
    document.getElementById("goLight").style.backgroundColor = "green";
  }

  if (index < 3) {
    index++;
  } else {
    index = 0;
  }
}
// -------------------------
