$(function() {
    //마우스 효과
    const circle = document.querySelector(".circle");

    document.addEventListener("mousemove", (e) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        circle.style.left = mouseX + 'px';
        circle.style.top = mouseY + 'px';
    });



    // 포트폴리오 자기소개 구간 원형 애니메이션
    setInterval(function() {
        $(".circle-1")
        .animate({marginTop : "50px"}, 1200)
        .animate({marginTop : "0px"}, 1200)

        $(".circle-2")
        .animate({marginTop : "-300px"}, 800)
        .animate({marginTop : "-220px"}, 800)

        $(".circle-3")
        .animate({marginTop : "60px"}, 1500)
        .animate({marginTop : "0px"}, 1500)

        $(".circle-4")
        .animate({marginTop : "150px"}, 1000)
        .animate({marginTop : "80px"}, 1000)

        $(".circle-5")
        .animate({marginTop : "-200px"}, 1500)
        .animate({marginTop : "-150px"}, 1500)
    }, 1000);



    // 상단 메뉴
    var gnbA = $("#gnb > li > a");
    $("#gnb").css("top",$(window).height() / 2 - $("#gnb").height() / 2 + "px");

    gnbA.click(function() {
        var targeta = $(this).attr("href");
        $("html").animate({scrollTop:$(targeta).offset().top},1000);

        if(gnbA.targeta) {
            $(gnbA.targeta).removeClass("on");
            $(this).addClass("on");
        } else {
            $(this).addClass("on");
        }
        gnbA.targeta = this;
        return false;
    });
    gnbA[0].click();



    // 사이드 메뉴
    var side = $("#side-menu > li > a");
    $("#side-menu").css("top",$(window).height() / 2 - $("#side-menu").height() / 2 + "px");

    side.click(function() {
        var targetb = $(this).attr("href");
        $("html").animate({scrollTop:$(targetb).offset().top},1000);

        if(side.targetb) {
            $(side.targetb).removeClass("on");
            $(this).addClass("on");
        } else {
            $(this).addClass("on");
        }
        side.targetb = this;
        return false;
    });
    side[0].click();



    // 버튼 메뉴
    var hyper = $("#hyper-box > a");
    $("#hyper-box").css("top",$(window).height() / 2 - $("#hyper-box").height() / 2 + "px");

    hyper.click(function() {
        var targetc = $(this).attr("href");
        $("html").animate({scrollTop:$(targetc).offset().top},1000);

        if(hyper.targetc) {
            $(hyper.targetc).removeClass("on");
            $(this).addClass("on");
        } else {
            $(this).addClass("on");
        }
        hyper.targetc = this;
        return false;
    });
    hyper[0].click();



    // 마우스 커서가 이미지 위에 올라갔을 때 비디오 재생 마우스 커서가 이미지에서 벗어나면 비디오에서 이미지로 변환
    $('.dover').hide();

    $('.button-flex div').mouseover(function() {        
        $(this).children('h3').next().hide().next().show();
    }).mouseout(function() {
        $(this).children('h3').next().show().next().hide();
    }); 



    // 스킬 게이지
    $('.gauge').each(function() {
        var $this = $(this);
        var per = $this.attr('per');

        $this.animate({width: per + "%"});

        $('.icon-img').mouseover(function(){
            $this.animate({width: per + "%"});
        })
    });



    // 디자인1 모달창
    $('.design-1').click(function() {
        $('.modal-1').addClass("active");
    });

    $('.closeBtn-1').click(function() {
        $('.modal-1').removeClass("active");
    });

    // 디자인2 모달창
    $('.design-2').click(function() {
        $('.modal-2').addClass("active");
    });

    $('.closeBtn-2').click(function() {
        $('.modal-2').removeClass("active");
    });

    // 디자인3 모달창
    $('.design-3').click(function() {
        $('.modal-3').addClass("active");
    });

    $('.closeBtn-3').click(function() {
        $('.modal-3').removeClass("active");
    });

    // 디자인4 모달창
    $('.design-4').click(function() {
        $('.modal-4').addClass("active");
    });

    $('.closeBtn-4').click(function() {
        $('.modal-4').removeClass("active");
    });



    // 포폴 이미지 슬라이드 1
    function auto1() {
        $(".slide-1").animate({right:"-270px"}, 2000, function() {
            $(".slide-1").append($(".slide-1 li:first-child")).css({right:0});
        });
    }

    var timer = setInterval(auto1, 2000);
    
    $(".slide-1").on("mouseover", function() {
        clearInterval(timer);
    });

    $(".slide-1").on("mouseleave", function() {
        timer = setInterval(auto1, 2000);
    });

    // 포폴 이미지 슬라이드 2
    function auto2() {
        $(".slide-2").animate({left:"-270px"}, 2000, function() {
            $(".slide-2").append($(".slide-2 li:first-child")).css({left:0});
        });
    }

    var timer = setInterval(auto2, 2000);
    
    $(".slide-2").on("mouseover", function() {
        clearInterval(timer);
    });

    $(".slide-2").on("mouseleave", function() {
        timer = setInterval(auto2, 2000);
    });



    // TOP버튼
    $(window).scroll(function() {
        if($(this).scrollTop() > 200) {
            $("#top-bt").fadeIn('fast');
        } else {
            $("#top-bt").fadeOut('fast');
        }
    });

    $("#top-bt").click(function() {
        $("html").animate({scrollTop : 0}, 1000);
    });
});