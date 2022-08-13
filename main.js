function openPage() {
    $("#header").load("header.html");
    $("#footer").load("footer.html");
}

$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop()) {
            $(".go").fadeIn();
        }
        else {
            $(".go").fadeOut();
        }
    })

    $(".go").click(function() {
        $("html").animate({
            scrollTop: 0
        }, 2000);
    })

    $(".back").click(function() {
        var footer = $("#footer").offset();
        $("html").animate({
            scrollTop: footer.top
        }, 2000);
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

    var count = 1;
    $(".list-icon i").click(function() {
        count++;
        if (count % 2 == 0) {
            $(".menu").show();
            $(".main").animate({"marginTop": "350px"});
        }
        else {
            $(".menu").hide();
            $(".main").animate({"marginTop": "0px"});
        }
    })

    var idx = 1;
    $(".mobile-icon .one").click(function() {
        idx++;
        if (idx % 2 == 0) {
            $(".sub-nav .one").show()
        }
        else {
            $(".sub-nav ul").hide()
        }
    })

    $(".mobile-icon .two").click(function() {
        idx++;
        if (idx % 2 == 0) {
            $(".sub-nav .two").show()
        }
        else {
            $(".sub-nav ul").hide()
        }
    })

    $(".mobile-icon .three").click(function() {
        idx++;
        if (idx % 2 == 0) {
            $(".sub-nav .three").show()
        }
        else {
            $(".sub-nav ul").hide()
        }
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