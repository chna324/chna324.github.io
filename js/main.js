$(function(){

    //rnd 멀티플 슬라이더
    $('.rnd_slider').bxSlider({
        pager:false,
        minSlides:3,
        moveSlides:1,
        slideWidth:965,
        slideMargin:24
    });
    
    //비디오 모달
    let videoBtn = $('.video_icon'),
        targetVideo = $('#video');
    
        videoBtn.click(function(e){
            e.preventDefault();
            targetVideo.addClass('active');
        });
        targetVideo.click(function(){
            targetVideo.removeClass('active');
        });
    
    //버튼
    let Btn = $('.fixed');
    $(window).scroll(function(){
        if($(this).scrollTop() > 600){
            Btn.addClass('active');
        }else{
            Btn.removeClass('active');
        }
    });
    Btn.click(function(e){
        e.preventDefault();
       $('body,html').animate({scrollTop:0},500);
    });
});
