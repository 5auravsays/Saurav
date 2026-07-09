// =========================
// सौरव की कविता
// =========================

// Search Bar
const searchBar = document.getElementById("searchBar");
const cards = document.querySelectorAll(".card");

searchBar.addEventListener("keyup", function () {

let value = searchBar.value.toLowerCase();

cards.forEach(card => {

let text = card.innerText.toLowerCase();

if(text.includes(value)){
card.style.display = "block";
}else{
card.style.display = "none";
}

});

});

// Card Animation
const observer = new IntersectionObserver((entries)=>{

entries.forEach((entry)=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

cards.forEach(card=>{

observer.observe(card);

});

// Welcome Message
window.onload = ()=>{

console.log("🌸 सौरव की कविता में आपका स्वागत है 🌸");

};

// Scroll Button
const btn = document.createElement("button");

btn.innerHTML="⬆";

btn.id="topBtn";

document.body.appendChild(btn);

btn.style.position="fixed";
btn.style.bottom="20px";
btn.style.right="20px";
btn.style.padding="12px";
btn.style.border="none";
btn.style.borderRadius="50%";
btn.style.background="#ff4f87";
btn.style.color="#fff";
btn.style.fontSize="20px";
btn.style.cursor="pointer";
btn.style.display="none";

window.onscroll=function(){

if(document.documentElement.scrollTop>300){

btn.style.display="block";

}else{

btn.style.display="none";

}

}

btn.onclick=function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

};
