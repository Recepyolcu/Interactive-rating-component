const btn1 = document.getElementById("btn-1");
const btn2 = document.getElementById("btn-2");
const btn3 = document.getElementById("btn-3");
const btn4 = document.getElementById("btn-4");
const btn5 = document.getElementById("btn-5");

const rate = document.getElementById("user-rating");

const rateBox = document.getElementById("rate-box");
const thankYouBox = document.getElementById("thank-you-box");

let selectedBtn;

btn1.addEventListener("click", function() {
    selectedBtn = btn1.value;
});
btn2.addEventListener("click", function() {
    selectedBtn = btn2.value;
});
btn3.addEventListener("click", function() {
    selectedBtn = btn3.value;
});
btn4.addEventListener("click", function() {
    selectedBtn = btn4.value;
});
btn5.addEventListener("click", function() {
    selectedBtn = btn5.value;
});

function rateGet() {
    rate.innerHTML = selectedBtn;
    rateBox.style.display = "none";
    thankYouBox.style.display = "flex";
}