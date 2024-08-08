function charSpanSplitter(selector) {
    const element = document.querySelector(selector);
    let chrArray = element.textContent.split("");
    
    let half = Math.floor(chrArray.length/2);
    let contents = "";
    chrArray.forEach((chr, idx) => {
        if(idx <= half) {
            if(chr == " ") {
                contents += `<span class="a">&nbsp;</span>`;
            }
            else {
                contents += `<span class="a">${chr}</span>`;
            }
        }
        else {
            if(chr == " ") {
                contents += `<span class="b">&nbsp;</span>`;
            }
            else {
                contents += `<span class="b">${chr}</span>`;
            }
        }
        
    })
    element.innerHTML = contents
}





charSpanSplitter("#welcome")
gsap.from(`#welcome .a`, {
    y: 100,
    scale: 0.2,
    opacity: 0,
    color: "darkgrey",
    filter: "blur(50px)",
    duration: 0.5,
    // stagger: -0.1,
    stagger: 0.1,
    // ease: "elastic.out(1, 0.75)",
});


gsap.from(`#welcome .b`, {
    y: 100,
    scale: 0.2,
    opacity: 0,
    color: "darkgrey",
    filter: "blur(50px)",
    duration: 0.5,
    stagger: -0.1,
    // stagger: 0.1,
    // ease: "elastic.out(1, 0.75)",
});