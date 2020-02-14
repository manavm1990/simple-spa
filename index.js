import NProgress from "nprogress";
import "nprogress/nprogress.css";

NProgress.start();

fetch("http://localhost:3000/coffees")
  .then(response => response.json())
  .then(coffees => {
    NProgress.done();
    document.querySelector("main").innerHTML = coffees
      .map(
        ({ name, image }) => `<div class="card">
    <img class="card--avatar" src=${image} alt="Random coffee image." />
    <h2 class="card--title">${name}</h2>
  </div>`
      )
      .join("");
  });
