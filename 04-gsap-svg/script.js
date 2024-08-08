let initialSVGPath = "M 20 100 Q 950 350 1880 100";
let finalSVGPath = "M 20 100 Q 950 100 1880 100";

const str = document.querySelector("#string");


str.addEventListener("mouseover", function(dets) {
    let path = `M 20 100 Q ${dets.x} ${dets.y} 1880 100`
    console.log(dets.y);
    gsap.to("svg path", {
        attr: {d: path},
        duration: 0.3,
        // ease: "power3.out",
        ease: "elastic.out(1, 0.2)"
    })
})



str.addEventListener("mouseleave", function() {
    attr: {d: finalSVGPath}
})