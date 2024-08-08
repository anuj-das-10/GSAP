// 01-gsap-basics jo kaam kar rha he same kar rha he but bohut kaam hectic he

const tl = gsap.timeline()

tl.to("#box-1", {
    x: 1650,
    duration: 2,
    delay: 1,
    rotate: 360,
    scale:  1.2,
})

tl.to("#box-2", {
    x: 1650,
    duration: 2,
    rotate: 360,
    scale:  1.2,
})

tl.to("#box-3", {
    x: 1650,
    duration: 2,
    rotate: 1080,
    opacity: 0.1,
    scale:  1.2,
})