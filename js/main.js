$(function(){
    //header
    let header = $('header');

    $(window).scroll(function(){
        if($(this).scrollTop() >= 100){
            if(!header.hasClass('shrink')){
                header.addClass('shrink');
            }
        }else{
            if(header.hasClass('shrink')){
                header.removeClass('shrink');                    
            }
        };
    });

    //main 슬라이더
    /*
    $('.main_slider').bxSlider({
        // auto:true,
        pager:false,
        // controls:false,
        // speed:7000,
        onSliderLoad:function(currentIndex){
			$('.main_slider div').eq(currentIndex+1).find('video').get(0).play();
		},
		onSlideAfter:function($slideElement){
			$slideElement.find('video').get(0).play();
			$slideElement.siblings().find('video').get().pause();
		}
    });
    */
    //rnd 멀티플 슬라이더
    // $('.rnd_slider').bxSlider({
    //     pager:false,
    //     minSlides:3,
    //     moveSlides:1,
    //     slideWidth:965,
    //     slideMargin:24
    // });
    
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
