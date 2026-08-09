let main = document.querySelector("#main")
let cursor = document.querySelector("#cursor")
let img = document.querySelector("#img")
main.addEventListener("mousemove", function (e) {
    
    gsap.to(cursor, {
        x: e.x -10,
        y: e.y -10,
        duration: 1,
        
    
    })

})

img.addEventListener("mouseenter", function () {
    cursor.innerHTML = "View Image";
    console.log("hiiienter")
    gsap.to(cursor, {
        scale: 3,
        backgroundColor:"#ffffff79"
    })
})

img.addEventListener("mouseleave", function () {
    cursor.innerHTML = "";
    console.log("leave")
    gsap.to(cursor, {
        scale: 1,
        backgroundColor:"#fff"
    })
})