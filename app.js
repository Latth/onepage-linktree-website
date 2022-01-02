const contT1 = gsap.timeline({defaults: {ease: "power1.inOut"}})


contT1.fromTo('.container', 1, {y: "-200%"}, {y: "0%"})
contT1.fromTo('.link',1, {x: "-200%"}, {x: "0%",stagger: 0.25})
contT1.fromTo('.box1', 1, {x: "200rem"}, {x: "0"})
contT1.fromTo('.circle1', 1, {x: "-200rem"}, {x: "0"}, "<")


// Copy email button

let copyMailBtn = document.querySelector('#copy-email')

function clipboardEmail() {
    new ClipboardJS(copyMailBtn);
    btnT1 = gsap.timeline({defaults: {duration: 1, repeat: -1}})
    btnT1.to(copyMailBtn, {backgroundColor: "green", color: "white", yoyo: true, repeat: 1})


}


copyMailBtn.addEventListener('click', clipboardEmail)
