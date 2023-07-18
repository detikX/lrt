$(document).ready(function() {
    AOS.init();
    new WOW().init();
});




// $(".data-detail").hide()
$(".gambar").click(function(){
    var id_ = $(this).attr('id')
    var show = $("#show-"+id_+"");
//    show.removeAttr('hidden')
    show.fadeIn()
})

$(".tutups").click(function(){
    $(this).parent().fadeOut()
})



//gsap
gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray(".panel");

gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".containerx",
    pin: true,
    scrub: 1,
    // snap: 1 / (sections.length - 2),
    end: () => "+=" + document.querySelector(".containerx").offsetWidth
  }
});