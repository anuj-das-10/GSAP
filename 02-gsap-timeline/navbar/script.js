const tl = gsap.timeline()

tl.from("#logo", {
    x: -30,
    delay: .5,
    opacity: 0,
    duration: .3,
})

tl.from("#links li", {
    x: 50,
    opacity: 0,
    stagger: 0.1,
})

