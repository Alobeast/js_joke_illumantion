let joke = ""

fetch("https://icanhazdadjoke.com/", {
  headers: {
    Accept: "application/json",
  },
})
  .then((response) => response.json())
  .then((data) => {
    joke = data.joke
  });

const jokeContainer = document.getElementById("joke");
const mouseEvent = document.documentElement;

mouseEvent.addEventListener("mousemove", (e) => {
  jokeContainer.innerText = joke
  mouseEvent.style.setProperty("--x", e.clientX + "px");
  mouseEvent.style.setProperty("--y", e.clientY + "px");
});


