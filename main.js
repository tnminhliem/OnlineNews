function openPage() {
    $("#header").load("header.html");
    $("#footer").load("footer.html");
}

$(document).ready(function() {
    $(".loading").fadeOut(3500)
    setTimeout(function() {
        $(".container").show()
        document.getElementById("marquee").start()
    }, 3000)

    $(window).scroll(function() {
        if ($(this).scrollTop()) {
            $(".go").fadeIn()
            $(".sticky").addClass("sticky-parent")
            $(".sticky > div").addClass("sticky-child")
            $(".sticky-mobile").addClass("sticky-parent-mobile")
            $(".menu").addClass("sticky-nav")
            $("header .width-main:nth-child(4)").removeClass("width-main").addClass("sticky-width")
            $(".sticky-mobile > div").addClass("sticky-child-mobile")
        }
        else {
            $(".go").fadeOut()
            $(".sticky").removeClass("sticky-parent")
            $(".sticky > div").removeClass("sticky-child")
            $(".sticky-mobile").removeClass("sticky-parent-mobile")
            $(".menu").removeClass("sticky-nav")
            $("header .width-main:nth-child(4)").removeClass("sticky-width").addClass("width-main")
            $(".sticky-mobile > div").removeClass("sticky-child-mobile")
        }
    })

    $(".go").click(function() {
        $("html").animate({
            scrollTop: 0
        }, 2000);
    })

    $(".down").click(function() {
        var footer = $("#footer").offset()
        $("html").animate({
            scrollTop: footer.top
        }, 2000);
        $(".nav-bar").hide(500)
        $(".menu .search").hide(500)
    })

    const weekdays = ["Chủ nhật", "Thứ hai", "Thứ ba", "Thứ tư", "Thứ năm", "Thứ sáu", "Thứ bảy"];
    let d = new Date();
    document.getElementById('real-time').innerHTML = 
    `${weekdays[d.getDay()]}, ${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
    document.getElementById('mobile-time').innerHTML = 
    `${weekdays[d.getDay()]}, ${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;

    // $(".menu li").hover(function(){
    //     $(this).find("ul:first").slideDown(225);
    // }, function() {
    //     $(this).find("ul:first").hide(40);
    // })

    var idx = 1;
    $(".list-icon i").click(function() {
        idx++;
        if (idx % 2 == 0) {
            $(".nav-bar, .menu .search").slideDown(500)
        }
        else {
            $(".nav-bar, .menu .search").hide(500)
        }
        var width = $(".mobile-css").width()
            $(".nav-bar li a, .mobile-icon, .menu .search > div").animate({"width": `${width}px`})
    })

    var count = 1;
    $(".mobile-icon").children("i").each(function() {
        $(this).click(function() {
            count++;
            if (count % 2 == 0) {
                $(this).parent(".mobile-icon").parent("li").find(".sub-nav ul").slideDown(300)
                $(this).removeClass("fa-chevron-down").addClass("fa-angle-up")
                .animate({"font-size": "1.25rem"});
            }
            else {
                $(this).parent(".mobile-icon").parent("li").find(".sub-nav ul").hide(300)
                $(this).removeClass("fa-angle-up").addClass("fa-chevron-down")
                .animate({"font-size": "1.1rem"});
            }
        })  
    })

    var titleBanners = [
        "Việt Nam hạ Malaysia ở chung kết U19 Quốc tế",
        "Giá 'trừ quà' Galaxy Z Flip4 dưới 20 triệu đồng", 
        "Hoàng Thùy Linh ra album đón tuổi 34"];

    var images = [
        "img-main/slider1.jpg",
        "img-main/slider2.jpg",
        "img-main/slider3.jpg"];

    var num = 0;
    var slide = document.querySelector(".mini-slider");
    var tb = document.getElementById("tb-main");

    function change_Slide() {
        num++;
        if(num >= images.length) {
            num = 0;
        }
        slide.src = images[num];
        tb.innerHTML = titleBanners[num];
        tb.href = "#";
    }

    $(".btn-prev").click(function(){
        num--;
        if(num < 0) {
            num = images.length - 1;
        }
        slide.src = images[num];
        tb.innerHTML = titleBanners[num];
    })

    $(".btn-next").click(function (){
       change_Slide()
    })

    setInterval(function(){
        change_Slide()
    }, 4000);
})

function enter(e) {
    if (e.keyCode == 13) {
        sendMail();
    }
}

function sendMail() {
    alert("Đang mở ứng dụng mail");
    var link = "mailto:2151050224liem@ou.edu.vn?subject=PHẢN HỒI Ý KIẾN"
             + "&body=" + $("#body-mail").val();
    window.location.href = link;
}