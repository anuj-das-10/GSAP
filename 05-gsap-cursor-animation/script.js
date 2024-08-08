const cursor = document.querySelector("#cursor");
const imgDiv = document.querySelector("#image");

window.addEventListener("mousemove", function(dets){
    gsap.to(cursor, {
        x: dets.x,
        y: dets.y,
        ease: "elastic.out(1, 0.3)",
        duration: 1.2,
    })
})




imgDiv.addEventListener("mouseenter", function() {
    cursor.innerText = "know more";

    gsap.to(cursor, {
        scale: 2.5,
        opacity: 0.8,
    })
})

imgDiv.addEventListener("mouseleave", function() {
    cursor.innerText = "";

    gsap.to(cursor, {
        scale: 1
    })
})


