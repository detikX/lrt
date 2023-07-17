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