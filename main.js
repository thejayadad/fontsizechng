

let large = document.getElementById("large");
let small = document.getElementById("small");

large.addEventListener("click", function() {
    let text = document.getElementById("text")
    text.style.fontSize = "2rem";

})

small.addEventListener("click", function () {
    let text = document.getElementById("text")
    text.style.fontSize = ".6rem";
})