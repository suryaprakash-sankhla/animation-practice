function page1Animation() {
    let tl = gsap.timeline();

tl.from("nav h1 , nav h4 , nav button", {
    y: -30,
    opacity: 0,
    duration: 0.6  ,
    delay:0.1,
    stagger:0.1
})

tl.from(".center-part1 h1", {
    x: -200,
    opacity: 0,
    duration: 0.5
},"-=0.3")

tl.from(".center-part1 p", {
    x: -200,
    opacity: 0,
    duration: 0.5
})

tl.from(".center-part1 button", {
    opacity: 0,
    duration: 0.5
})

tl.from(".center-part2 img", {
    x: 200,
    opacity: 0,
    duration: 0.5,
}, "-=0.7")

tl.from(".section1Bottom img", {
    opacity: 0,
    y: 30,
    duration: 0.5,
    stagger:0.15
})
}
page1Animation();


function page2Animation() {
    let tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".section2",
        scroller: "body",
        start: "top 50%",
        end: "top 0",
        scrub: 2,
    }
})

tl2.from(".services", {
    x: 30,
    duration: 0.5,
    opacity: 0,
})

tl2.from(".elem.line1.left", {
    x: -200,
    opacity: 0,
    duration:0.5
},"anim")

tl2.from(".elem.line1.right", {
    x: 200,
    opacity: 0,
    duration:0.5
},"anim")

tl2.from(".elem.line2.left", {
    x: -200,
    opacity: 0,
    duration:0.5
},"anim2")

tl2.from(".elem.line2.right", {
    x: 200,
    opacity: 0,
    duration:0.5
},"anim2")
}
page2Animation();


function page3Animation(){
    let tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".section3",
        scroller: "body",
        start: "top 50%",
        end: "top -50%",
        scrub: 2
    }})

    
    tl2.from(".rect", {
        y: 50,
        opacity: 0,
       
    })

    tl2.from(".caseStudyHeading", {
        x: -200,
        opacity: 0,
  
    })
    tl2.from(".content", {
        y: 300,
        opacity:0
    })
}

page3Animation();