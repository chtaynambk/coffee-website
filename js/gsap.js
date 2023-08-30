gsap.registerPlugin(ScrollTrigger);

gsap.from(".land-img", {
    duration: 1 ,
    y: 50,
    autoAlpha: 0,
    
   
});



gsap.from(".coffe",{
    opacity:0,
    duration:1,
 
    
  })
  gsap.from(".cofe-shop1",{
    opacity:0,
    y:50,
    duration:1,

    
  })
  gsap.from(".cofe-shop2",{
    y:50,
    x:-50,
    opacity:0,
    duration:1,

  })
  gsap.from(".cofe-shop3",{
    y:50,
    
    opacity:0,
    duration:1,

  })
  gsap.from(".cofe-shop4",{
    y:50,
    
    opacity:0,
    duration:1,

  })

 

  gsap.from(".title",{
    opacity:0,
    x: -50,
    duration:1,
    
    stagger: 0.2

  })




  gsap.from(
    ".sub ",
    {
      y: 100,
       opacity: 0,
      duration: 1,
    }
  );


const txte = gsap.utils.toArray('.txt');

txte.forEach((txt, i) => {
  const ani = gsap.from(txt, {autoAlpha: 0, x: 50});
  ScrollTrigger.create({
    trigger: txt,
    start:"top, 60%",
    end:"top, 50%",
    animation: ani,
    toggleActions: 'restart none none reverse',
    // markers:true
   
  });
});


const boxes = gsap.utils.toArray('.anm');

boxes.forEach((anm, i) => {
  const anim = gsap.from(anm, {autoAlpha: 0, x: -50});
  ScrollTrigger.create({
    trigger: anm,
    start:"top, 50%",
    end:"top, 50%",
    animation: anim,
    toggleActions: 'restart none none reverse',


  });
});

const animee = gsap.utils.toArray('.anime');

animee.forEach((anime, i) => {
  const anim = gsap.from(anime, {autoAlpha: 0, y: -50});
  ScrollTrigger.create({
    trigger: anime,
    start:"top, 40%",
    end:"top, 50%",
    animation: anim,
    toggleActions: 'restart none none reverse',
    once: true,
  });
});

const cardss = gsap.utils.toArray('.card');

cardss.forEach((card, i) => {
  const animia = gsap.from(card, {autoAlpha: 0, y: 50});
  ScrollTrigger.create({
    trigger: card,
    start:"top, 50%",
    end:"top, 50%",
    animation: animia,
    toggleActions: 'restart none none reverse',
   
   
  });
});


gsap.from(".text", {
    duration: 1,
    x: -50,
   autoAlpha:0,
   stagger:0.5,
    
    scrollTrigger:{
        trigger:".text",
        toggleActions:"restart none none reverse",
        start:"30% 70%",
        end:"30% 50% ",
        // markers:true,
        // scrub: 1
    }
});

gsap.from(".voucher", {
    duration: 1,
    x: 50,
   autoAlpha:0,
   stagger:0.5,
    
    scrollTrigger:{
        trigger:".voucher",
        toggleActions:"restart none none reverse",
        start:"30% 70%",
        end:"30% 50% ",
        
    }
});


gsap.from(".btn-w", {
    duration: 1,
    y: 50,
   autoAlpha:0,

    scrollTrigger:{
        trigger:".voucher",
        toggleActions:"restart none none reverse",
        start:"30% 70%",
        end:"30% 50% ",
      
      
    }
});


gsap.from(".customer", {
    duration: 1,
    y: 50,
   autoAlpha:0,

    
    scrollTrigger:{
        trigger:".customer",
        toggleActions:"restart none none reverse",
        start:"30% 70%",
        end:"30% 50% ",
     
    }
});



gsap.from(".nxs", {
    duration: 1,
    y: 50,
   autoAlpha:0,
   stagger:0.5,
    
    scrollTrigger:{
        trigger:".nxs",
        toggleActions:"restart none none reverse",
        start:"top 80%",
        end:"top 50% ",
    
    }
})


gsap.from(".info", {
    duration: 1,
    y: 50,
   autoAlpha:0,
   stagger:0.5,
    
    scrollTrigger:{
        trigger:".nxs",
        toggleActions:"restart none none reverse",
        start:"top 80%",
        end:"top 50% ",
     
    }
})
gsap.from(".social", {
    duration: 1,
    y: 50,
   autoAlpha:0,
   stagger:0.5,
    
    scrollTrigger:{
        trigger:".nxs",
        toggleActions:"restart none none reverse",
        start:"top 80%",
        end:"top 50% ",
   
    }
})