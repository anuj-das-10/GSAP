```javascript
const tl = gsap.timeline()

tl.from("CSS Element Selector", {
    // CSS Properties(camelCase)  & GSAP Properties
})

tl.from("CSS Element Selector", {
    // CSS Properties(camelCase)  & GSAP Properties
})
```

- manlo tin element ko animate karwana he and 
- aaapko ek element ka animation khaatam hone ke baad dusra element ka animation start karwana he
- ye `delay` property se kya kiya ja sakta he but bohut hectic hoga jaida number of elements hone se
- har ek element ke liye `delay` calculate karna padega sahi se 
- toh isko overcome karne ke liye hum `gsap.timeline()` use karte he.