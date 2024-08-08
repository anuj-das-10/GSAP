```javascript
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
```



- `scrub` can be boolean `<true or false>` or any integer value ranging from 1 to 5, which determines the smoothness of the scroll animation.

- `pin` is used to pin a particular section until the entire animation is completed! 