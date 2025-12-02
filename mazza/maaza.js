gsap.from(".Img1", {
    x: -100,
    y: -150,
    rotate: -40,
    duration: 3,
    scrollTrigger: {
        trigger: ".Img1",
        scroller: "body",
        scrub: true
    }
});

gsap.from(".Img2", {
    x: -60,
    y: -150,
    rotate: -20,
    scrollTrigger: {
        trigger: ".Img2",   // FIXED
        scroller: "body",
        scrub: true
    }
});

gsap.from(".Img3", {
    x: 60,
    y: -150,
    rotate: 20,
    scrollTrigger: {
        trigger: ".Img3",   // FIXED
        scroller: "body",
        scrub: true
    }
});

gsap.from(".Img4", {
    x: 100,
    y: -150,
    rotate: 40,
     scrollTrigger: {
        trigger: ".Img4",   // FIXED
        scroller: "body",
        scrub: true
    }
});
gsap.from(".main1 .nav .nav-items a", {
    opacity:0,
    stagger:.2,
    duration:.3,
    y:-10,
    ease: "power4.out"
});
// Split h1 text into words
// Split h1 text into words
let h1 = document.querySelector(".main");
let words = h1.innerText.split(" ");
h1.innerHTML = words.map(w => `<span class="word" style="display:inline-block">${w}</span>`).join(" ");
gsap.from(".main .word", {
    opacity: 0,
    y: -30,
    duration: 0.3,
    stagger: 0.2,  // 🔥 words come one after another
    delay:1,
    scrollTrigger: {
        trigger: ".main",
        scroller: "body",
        start: "top 80%",
        end: "top 50%",
        scrub: false,   // smooth one-time reveal
    }
});
gsap.from(".main1-img img", {
    opacity:0,
    scale:1.2,
    delay:2.2,
    duration:1
})
gsap.from(".main1 .main1-content .main1-text p", {
    opacity:0,
    duration:2,
    delay:1.8,
    y: -25
})
gsap.from(".main1 .main1-content .main1-text img", {
    opacity:0,
    delay:2.5,
    duration:1,
    y:20
})
gsap.to(".main1 .mango", {
    rotate:360,
    x:1300,
    scrollTrigger: {
        trigger: ".main1 mango",
        scroller: "body",
        scrub:true
    }
})
gsap.from(".teXt", {
    opacity:0,
    y:60,
    duration:1.5,
    delay:.2,
    scrollTrigger:{
        trigger:".teXt",
        scrub:false,
        scoller:"body",
        start: "top 95%"
    }
})
gsap.from(".tExt", {
    opacity:0,
    y:60,
    duration:1.5,
    delay:.4,
    scrollTrigger:{
        trigger:".tExt",
        scrub:false,
        scoller:"body",
        start: "top 95%"
    }
})
gsap.from(".heaDer", {
    opacity:0,
    scale:1.4,
    duration:1.5,
    scrollTrigger:{
        trigger:".heaDer",
        scrub:false,
        scoller:"body",
        start: "top 85%"
    }
})
gsap.from(".cheCk", {
    opacity: 0,
    scale: 1.2,
    y: 20,
    duration: .8,
    scrollTrigger: {
        trigger: ".cheCk",
        scroller: "body",   // fixed typo
        start: "top 90%",
        scrub: false
    }
});
// Split page3-h1 text into words
let h1Page3 = document.querySelector(".page3-h1");
let page3Words = h1Page3.innerText.split(" ");
h1Page3.innerHTML = page3Words
  .map(w => `<span class="page3-word inline-block">${w}</span>`)
  .join(" ");

// Animate per word
gsap.from(".page3-word", {
  opacity: 0,
  y: 30,
  duration: 0.4,
  stagger: 0.2,   // each word comes after the previous one
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".page3-h1",
    scroller: "body",
    start: "top 95%",
  }
});
// Split page3-p text into word

// Animate per word
gsap.from(".page3-p", {
  opacity: 0,
  y: 20,
  delay:.3,
  duration: 1,  // each word comes one after the other
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".page3-p",
    scroller: "body",
    start: "top 95%",
  }
});