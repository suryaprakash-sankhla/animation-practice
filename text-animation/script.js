
function breakTheText() {
let h1 = document.querySelector("h1")
let h1Text = document.querySelector("h1").textContent;

let splitedText = h1Text.split("");
    let halfVal = Math.floor(splitedText.length / 2);
let clutter = "";


splitedText.forEach((elem,idx) => {
    if (idx < halfVal) {
        clutter += `<span class="a">${elem}</span>`;
    } else {
        clutter += `<span class="b">${elem}</span>`;
    }
})

h1.innerHTML = clutter;
}

breakTheText();

gsap.from(".a", {
    y: 80,
    opacity: 0,
    duration: 0.6,
    delay: 0.5,
    stagger:0.15 
})
gsap.from(".b", {
    y: 80,
    opacity: 0,
    duration: 0.6,
    delay: 0.5,
    stagger:-0.15 
})