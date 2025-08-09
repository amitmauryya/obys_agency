function loader() {
    var tl = gsap.timeline()
tl.from(".line h1", {
    y: 150,
    stagger: 0.25,
    duration: 0.6,
    delay:0.5
})
tl.from("#line1-part1",{
    opacity: 0,
    onStart: function () {
        var count = 0;
var h5timer=document.querySelector(".line #line1-part1 h5");
setInterval(function () {
    if (count <100) {
        h5timer.innerHTML = count++;
    }
    else {
        h5timer.innerHTML = count;
    }
}, 33)
    }
})
    
tl.to(".line h2", {
    opacity: 1,
    animationName:"anime"
})
tl.to("#loader", {
    opacity: 0,
    duration: 0.2,
    delay:4
})
tl.from("#page1", {
    delay:0.2,
    y: 1600,
    opacity: 0,
    duration:0.5,
    ease:Power4
})
tl.to("#loader", {
    display: "none"
})
    tl.from("#nav", {
        opacity:0
    })
    tl.from("#hero1 h1 ,#hero2 h1,#hero3 h2,#hero4 h1", {
        // opacity: 0, 
        y: 120,
        stagger: 0.2,
    })

}
loader()
function cursoranimation(params) {
    document.addEventListener("mousemove", function (val){
    gsap.to("#crsr", {
        left: val.x,
        top:val.y
    })
})
   Shery.makeMagnet("#nav-part2 h4", {
  //Parameters are optional.
}); 
}
cursoranimation();

