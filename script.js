$(document).ready(function(){

    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            //$('.filter').removeClass('hidden');
            $('.filter').show('4000, ease-in-out');
        }
        else
        {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.'+value).hide('4000, ease-in-out');
            $('.filter').filter('.'+value).show('4000, ease-in-out');
            
        }
    });
    
    if ($(".filter-button").removeClass("active")) {
$(this).removeClass("active");
}
$(this).addClass("active");

});
 
$(document).ready(function(){
    $('.show').hover(function(){
        $("#filtre-photo").show('1000, ease-in-out');
        $("#filtre-photo1").show('1000, ease-in-out');
        $("#filtre-photo2").show('1000, ease-in-out');
        $("#filtre-photo3").show('1000, ease-in-out');
        $("#filtre-photo4").show('1000, ease-in-out');
    })
});

$(function(){
    $(".grid").masonry({ itemSelector: ".lightbox", columWidth : '.grid-sizer', percentPosition: true,});
    
    $(".filtering").on("click", ".photo-filter", function () {
        var a = $(".gallery").isotope({});
        var e = $(this).attr("data-filter");
        a.isotope({ filter: e, itemSelector: ".lightbox"}, );
    });
    $(".filtering").on("click", ".photo-filter", function () {
        $(this).addClass("active").siblings().removeClass("active");
    });
}) 