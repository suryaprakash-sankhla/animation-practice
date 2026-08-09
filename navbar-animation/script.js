let tl = gsap.timeline();

let cross = document.querySelector(".cross");
let box = document.querySelector("#full");
let menu = document.querySelector(".menu");



tl.from(box, {
    right: "-40%",
    duration: 0.5
})

tl.from("h4", {
        opacity: 0,
        x: 200,
        duration:0.1,
        stagger:0.3
    })

tl.from(cross, {
    opacity: 0,
    duration:0.25
})
    
tl.pause();

menu.addEventListener("click", function () {
    tl.play();
})

cross.addEventListener("click", function(){
    tl.reverse();
})