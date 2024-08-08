// This function splits the word into <span> element with individual character.
function charSpanSplitter(selector) {
    const element = document.querySelector(selector);
    let chrArray = element.textContent.split("")
    let contents = "";
    chrArray.forEach(chr => {
        if(chr == " ") {
            contents = contents.concat(`<span>&nbsp;</span>`)
        }
        else {
            contents = contents.concat(`<span>${chr}</span>`)
        }
    })
    element.innerHTML = contents
}


function BlurryFadeInFrom(selector, direction) {
    charSpanSplitter(selector);

    switch(direction) {
        case "L": gsap.from(`${selector} span`, {
            x: -300,
            scale: 0.5,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            color: "darkgrey",
            filter: "blur(50px)",
        });
        break;

        case "R": gsap.from(`${selector} span`, {
            x: 300,
            scale: 0.5,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            color: "darkgrey",
            filter: "blur(50px)",
        });
        break;

        case "T": gsap.from(`${selector} span`, {
            y: -300,
            scale: 0.5,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            color: "darkgrey",
            filter: "blur(50px)",
        });
        break;

        case "B": gsap.from(`${selector} span`, {
            y: 300,
            scale: 0.5,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            color: "darkgrey",
            filter: "blur(50px)",
        });
        break;

    }
}
