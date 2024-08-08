const tl = gsap.timeline();

tl.to(".sidebar", {
    x: "translateX(-100%)",
    duration: 0.5,
    ease: "expo.inOut",
})

tl.from(".sidebar ul li", {
    x: 150,
    opacity: 0,
    duration: 0.5,
    stagger: 0.1,
})

tl.pause()


const menu = document.querySelector(".ri-menu-3-line");
menu.addEventListener("click", function() {
    tl.play()
});


const cross = document.querySelector(".ri-close-fill");
cross.addEventListener("click", function() {
    tl.reverse()
});



