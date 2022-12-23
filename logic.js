let usd = document.getElementById("usd");
let inr = document.getElementById("inr");
let submit = document.getElementById("submit");
submit.onclick = () => {
  inr.value = usd.value * 82.88;
};
