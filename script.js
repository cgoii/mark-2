document.querySelectorAll(".slide").forEach(card => {

let lastTime = 0;

card.addEventListener("mousemove", e => {

let now = Date.now();

/* يقلل عدد الخطوط حتى لا يحدث خلل */

if(now - lastTime < 40) return;

lastTime = now;

let rect = card.getBoundingClientRect();

let x = e.clientX - rect.left;
let y = e.clientY - rect.top;

let line = document.createElement("div");

line.className = "light-line";

line.style.left = x + "px";
line.style.top = y + "px";

card.appendChild(line);

/* حذف الخط بعد انتهاء الأنيميشن */

setTimeout(()=>{

if(line.parentNode){
line.parentNode.removeChild(line);
}

},600);

});

});