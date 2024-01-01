let main=document.querySelector(".main")
let cursr=document.querySelector(".cursorr")
main.addEventListener("mousemove",function(dets){
    cursr.style.left=dets.x+"px"
    cursr.style.top=dets.y+"px"
})

gsap.from(".logo,.head,.login,.started",{
    y:-100,
    duration:0.7,
    delay:0.5,
    stagger:0.2
})
var tl=gsap.timeline();
tl.from(".everything,.sell,.anything",{
    y:100,
    duration:1,
    delay:1.8,
    opacity:0,
    stagger:0.4
})
tl.from(".girl1,.girl2,.girl3",{
    scale:0,
    duration:0.5,
    stagger:0.3
})
tl.from(".scroll",{
    opacity:0,
    y:30,
    duration:0.5,
    repeat:-1,
    yoyo:true,
})