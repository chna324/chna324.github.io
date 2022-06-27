$(function(){
    //header submenu
    let header = $('header'),
        headerHeight = header.outerHeight(),
        newHeight = 0,
        menu = header.find('nav>ul>li'),
        submenu = menu.find('ul');
        
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

    //로그인 페이지 오류
    $('.login_input form').validate({
        rules:{
            userid:{required:true},
            userpw:{required:true}
        },
        messages:{
            userid:{required:'아이디를 입력해주세요.'},
            userpw:{required:'비밀번호를 입력해주세요.'}
        },
        errorClass:'error_input',
        errorElement:'span'
    });

    //회원가입 페이지 오류
    $('.signup_form form').validate({
        rules:{
            userid:{required:true},
            username:{required:true},
            userpw:{required:true,minlength:6},
            userpw_check:{equalTo:'#userpw'},
            userphone:{required:true},
            usermail:{required:true,email:true},
        },
        messages:{
            userid:{required:'필수 입력 사항입니다.'},
            username:{required:'필수 입력 사항입니다.'},
            userpw:{required:'필수 입력 사항입니다.',minlength:'비밀번호는 6자리 이상으로 입력해주세요.'},
            userpw_check:{required:'필수 입력 사항입니다.',equalTo:'위와 같은 비밀번호를 다시 입력해주세요.'},
            userphone:{required:'필수 입력 사항입니다.'},
            usermail:{required:'필수 입력 사항입니다.',email:'이메일 형식에 맞춰 입력해주세요.'},
        },
        errorClass:'error_input',
        errorElement:'span'
    });

});