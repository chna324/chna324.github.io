$(function(){
    //header
    let header = $('header'),
        headerHeight = header.outerHeight(),
        newHeight = 0,
        menu = header.find('nav>ul>li'),
        submenu = menu.find('ul');

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

    //header submenu
    submenu.each(function(){
        if($(this).outerHeight() > newHeight){
            newHeight = headerHeight + $(this).outerHeight();
        };
    });

    menu.hover(
        function(){		
            header.stop().animate({height:newHeight});
        },
        function(){
            header.stop().animate({height:headerHeight});
        }
    );

    //main 슬라이더
    let autoSlide = $('.auto_slider').bxSlider({
        pager:true,
        controls:false,
        //speed:7000,
        onSliderLoad:function(currentIndex){
			$('.auto_slider li').eq(currentIndex+1).find('video').get(0).play();
		},
		onSlideAfter:function($slideElement){
			$slideElement.find('video').get(0).play();
			$slideElement.siblings().find('video').get().pause();
		}
    });

    $('.main_slide .controls .next').click(function(e){
        e.preventDefault();
        autoSlide.goToNextSlide();
    });

    $('.main_slide .controls .prev').click(function(e){
        e.preventDefault();
        autoSlide.goToNextSlide();
    });

    //rnd 멀티플 슬라이더
    let rndSlider = $('.rnd_slider').bxSlider({
        pager:false,
        controls:false,
        speed:700,
        auto:true,
        minSlides:1,
        maxSlides:3,
        moveSlides:1,
        slideWidth:305,
        slideMargin:24,
        autoHover:true,
        infiniteLoop:true
    });
    $('.rnd_controls .prev').click(function(e){
        e.preventDefault();
        rndSlider.goToPrevSlide();
    });
    $('.rnd_controls .next').click(function(e){
        e.preventDefault();
        rndSlider.goToNextSlide();
    });

    
    //비디오 모달
    let videoBtn = $('.video_icon'),
        targetVideo = $('#cf_video');
    
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

    //toggle menu
    let toggleBtn = $('.toggle_menu_btn');
    toggleBtn.click(()=>{
        $('aside').toggleClass('active');
    });

    let toggleMenu = $('.toggle_menu > li');
    toggleMenu.click(function(){
        $(this).find('ul').slideToggle();
        $(this).siblings().find('ul').slideUp();
        $(this).toggleClass('active');
        $(this).siblings().removeClass('active');
    });

    //쿠키 팝업 모달
    let popup = document.querySelector('.popup'),
        popupCheck = document.querySelector('#popup_close'),
        popupClose = document.querySelector('#close');
    
    function setCookie(name, value, day){
        let date = new Date();
        date.setDate(date.getDate() + day);
    
        let cookieContent = '';
        cookieContent += `${name}=${value};`;
        cookieContent += `Expires=${date.toUTCString()}`;            
    
        document.cookie = cookieContent;
    }

    function getCookie(name){
        let visited = false;
        let cookies = document.cookie.split(';'); 
    
        for(let cookie of cookies){
            if(cookie.indexOf(name) > -1){
                visited = true;
            }
        }
        if(visited){
            popup.style.display = 'none'; 
        }else{
            popup.style.display = 'block'; 
        }
    }
    getCookie('LG');

    function delCookie(name,value){
        let date = new Date();
        date.setDate(date.getDate() - 1);
    
        let cookieContent = '';
        cookieContent += `${name} = ${value};`;
        cookieContent += `Expires = ${date.toUTCString()}`;            
    
        document.cookie = cookieContent;
    }
    
    popupClose.addEventListener('click', ()=>{
        popup.style.display = 'none';
        if(popupCheck.checked){
            setCookie('LG', 'Main Page', 1);
        }else{
            delCookie('LG', 'Main Page');
        }
    });

});
