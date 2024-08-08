gsap.from("#page-1 ul li", {
    x: 1000,
    duration: 1,
    opacity: 0,
    scale: 0.5,
    stagger: 0.1,
    filter: "blur(30px)"
})



gsap.to("#page-2 h1", {
    transform: "translateX(-170%)",
    scrollTrigger: {
        // We are targeting parent bcoz of Pin Property
        trigger: "#page-2",     
        scroller: "body",
        scrub: 1,
        pin: true,
    }
})




gsap.from("#page-3 h1 span", {
    y: -100,
    opacity: 0,
    filter: "blur(30px)",
    duration: .5,
    stagger: 0.1,
    scrollTrigger: {
        trigger: "#page-3 h1",
        scroller: "body",
        start: "top 70%",
    }
})