// Search Bar
const searchBar = document.getElementById("searchBar");
const cards = document.querySelectorAll(".card");

searchBar.addEventListener("keyup", () => {
  let value = searchBar.value.toLowerCase();

  cards.forEach(card => {
    card.style.display = card.innerText.toLowerCase().includes(value)
      ? "block"
      : "none";
  });
});

// Card Animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

cards.forEach(card => observer.observe(card));

// Welcome
window.onload = () => {
  console.log("🌸 सौरव की कविता में आपका स्वागत है 🌸");
};

// Scroll Top Button
const btn = document.createElement("button");
btn.innerHTML = "⬆";
btn.id = "topBtn";
document.body.appendChild(btn);

btn.style.position = "fixed";
btn.style.bottom = "20px";
btn.style.right = "20px";
btn.style.padding = "12px";
btn.style.border = "none";
btn.style.borderRadius = "50%";
btn.style.background = "#ff4f87";
btn.style.color = "#fff";
btn.style.fontSize = "20px";
btn.style.cursor = "pointer";
btn.style.display = "none";

window.addEventListener("scroll", () => {
  btn.style.display =
    document.documentElement.scrollTop > 300 ? "block" : "none";
});

btn.onclick = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};