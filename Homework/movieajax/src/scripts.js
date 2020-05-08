$(document).ready(function () {
  $("#movieForm").submit(function (event) {
    event.preventDefault();
    let movie = $("#movie").val();
    let url = "http://www.omdbapi.com/?apikey=d521c475&t=";
    let resultText = "";
    let resultImg = "";

    $.ajax({
      method: "GET",
      url: url + movie,
      success: function (
        data
      ) // $.get("http://www.omdbapi.com/?apikey=d521c475&t=.movie").done(function (
      //   data
      // )
      {
        console.log(data);

        if (data.Response === "True") {
          resultText = `
        <h2>${data.Title}</h2>
        <h4>Movie released: <span>${data.Released}</span></h4>
        <h4>Movie released: <span>${data.Genre}</span></h4>
        <h4>Movie actors: <span>${data.Actors}</span></h4>
        <h4>Description: <span>${data.Plot}</span></h4>
         `;

          resultImg = `
         <img src="${data.Poster}"/>`;

          $("#resultText").html(resultText);
          $("#resultImg").html(resultImg);
        } else {
          document.write(`<h1>Movie not found</h1>`);
        }
      },
    });
  });
});
// -------------------------
