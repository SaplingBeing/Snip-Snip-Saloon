// Justin D. Grumal 240005134
$(document).ready(function(){
    const autoHide = $(".autohide");
    if(autoHide){
        let lastScrollTop = 0;
        $(window).on("scroll", function(){
            let scrollTop = $(window).scrollTop();
            if(scrollTop < lastScrollTop){
                autoHide.removeClass("scrolled-down");
                autoHide.addClass("scrolled-up");
            }
            else{
                autoHide.removeClass("scrolled-up");
                autoHide.addClass("scrolled-down");
            }
            $("#navigationBar").removeClass("scrolled-up");
            lastScrollTop = scrollTop;
        });
    }
});