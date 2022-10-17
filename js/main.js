const mainContainer = document.querySelector(".default-container");
const ratingContainer = document.querySelector(".gratitude-container");
const buttons = document.querySelectorAll(".numeros")
const submit = document.querySelector(".enviar");
const rating = document.querySelector("#rating")
const back = document.querySelector("#back");

submit.addEventListener("click", () => {
    mainContainer.style.display = "none";
    ratingContainer.style.display = "block";
})


buttons.forEach((numbers) => {
    numbers.addEventListener("click", () => {
        rating.innerHTML = numbers.innerHTML
    })
})

back.addEventListener("click", () => {
    location.reload();
})