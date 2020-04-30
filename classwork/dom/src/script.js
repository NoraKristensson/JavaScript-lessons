// function hideorDisplay () {
//         var x = document.getElementById("myDIV");
//         if (x.style.display === "none") {
//           x.style.display = "block";
//         } else {
//           x.style.display = "none";
//        }
//       }
// }

// 2. Create an HTML page with a progress bar and a button. Clicking the button should fill the progress bar by 5%. To create a progress bar you can use <progress> tag

function load() {
  let file = document.getElementById("file");
  let value = +file.getAttribute("value");
  file.setAttribute("value", +value + 5);
}

// 3. Create an HTML page with a Like button. Clicking it should increase the number in the likes counter.
