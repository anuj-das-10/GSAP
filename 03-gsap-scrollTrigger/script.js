gsap.from("#page-1 #box", {
    y: 180,
    opacity: 0, 
    rotate: 360,
    duration: 1,
    delay: 1,
    scale: 0,
})

gsap.from("#page-2 h1", {
    x: 1000,
    opacity: 0, 
    duration: 1,
    scale: 0,
    // scrollTrigger: "#page-2 #box",      // Shortcut  
    scrollTrigger: {
        trigger: "#page-2 h1",
        scroller: "body",
        markers: true,
        start: "top 70%",
        end: "top 40%",
        scrub: 1,       // Either Boolean values or <Integer> [1 - 5]
    }
})


gsap.from("#page-2 h2", {
    x: -1000,
    opacity: 0, 
    duration: 1,
    scale: 0,
    // scrollTrigger: "#page-2 #box",      // Shortcut  
    scrollTrigger: {
        trigger: "#page-2 h2",
        scroller: "body",
        markers: true,
        start: "top 90%",
        end: "top 40%",
        scrub: true,
    }
})



gsap.from("#page-3 #box", {
    y: 180,
    opacity: 0, 
    rotate: 360,
    duration: 1,
    delay: 1,
    scale: 0,
})