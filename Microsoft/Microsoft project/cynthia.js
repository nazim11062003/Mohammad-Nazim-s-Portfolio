gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});
// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
//yaha se img ka hover wala hai
var text_year=document.querySelector(".text_year")
  var rotate = 0;
  var diffrot = 0;

  text_year.addEventListener("mouseleave", function (dets) {
    gsap.to(text_year.querySelector(".plug"), {
      opacity: 0,
      ease: Power3,
      duration: 0.5,
    });
  });

  text_year.addEventListener("mousemove", function (dets) {
    var diff = dets.clientY - text_year.getBoundingClientRect().top;
    diffrot = dets.clientX - rotate;
    rotate = dets.clientX;
    gsap.to(text_year.querySelector(".plug"), {
      opacity: 1,
      ease: Power3,
      top: diff-170,
      left: dets.clientX,
      rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
    });
  });


  var text_year2=document.querySelector(".text_year2")
  var rotate = 0;
  var diffrot = 0;

  text_year2.addEventListener("mouseleave", function (dets) {
    gsap.to(text_year2.querySelector(".ix"), {
      opacity: 0,
      ease: Power3,
      duration: 0.5,
    });
  });

  text_year2.addEventListener("mousemove", function (dets) {
    var diff = dets.clientY - text_year.getBoundingClientRect().top;
    diffrot = dets.clientX - rotate;
    rotate = dets.clientX;
    gsap.to(text_year2.querySelector(".ix"), {
      opacity: 1,
      ease: Power3,
      top: diff-350,
      left: dets.clientX,
      rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
    });
  });


  var text_year3=document.querySelector(".text_year3")
  var rotate = 0;
  var diffrot = 0;

  text_year3.addEventListener("mouseleave", function (dets) {
    gsap.to(text_year3.querySelector(".hudu"), {
      opacity: 0,
      ease: Power3,
      duration: 0.5,
    });
  });

  text_year3.addEventListener("mousemove", function (dets) {
    var diff = dets.clientY - text_year.getBoundingClientRect().top;
    diffrot = dets.clientX - rotate;
    rotate = dets.clientX;
    gsap.to(text_year3.querySelector(".hudu"), {
      opacity: 1,
      ease: Power3,
      top: diff-650,
      left: dets.clientX,
      rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
    });
  });
//neeche gsap hai
gsap.from(".logo",{
    opacity:0,
    duration:1,
    delay:0.5,
    y:-100
})

gsap.from(".product,.design",{
    opacity:0,
    duration:1.5,
    delay:0.5,
    x:-100,
    stagger:0.3
})

gsap.from(".toronto",{
    opacity:0,
    duration:0.3,
    delay:1.7,
    y:-100
})

gsap.from(".work,.ambassador,.may,.free",{
    scale:0,
    duration:0.5,
    delay:1.7
})

gsap.from(".text_line,.text_one,.year1,.text_line2,.text_two,.year3,.text_line3,.text_three,.year3",{
    opacity:0,
    y:100,
    duration:1,
    stagger:0.3,
    scrollTrigger:{
        trigger:".text_line,.text_one,.year1",
        scroller:".main"
    }
})
