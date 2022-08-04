$(document).ready(function() {
    const weekdays = ["Chủ nhật", "Thứ hai", "Thứ ba", "Thứ tư", "Thứ năm", "Thứ sáu", "Thứ bảy"];
    let d = new Date();
    document.getElementById('time').innerHTML = 
    `${weekdays[d.getDay()]}, ${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;

    $(".menu li").hover(function(){
        $(this).find("ul:first").slideDown(450);
    }, function() {
        $(this).find("ul:first").hide(50);
    })

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
        }, 1000);
        $("html").css("scroll-behavior", "auto");
    })

    $(".back").click(function() {
        $("html").css("scroll-behavior", "smooth");
    })
})

function openNav() {
    var header = document.querySelector('header');
    var nav = document.getElementById('nav');
    var isOpen = header.clientHeight === 50;

    if (isOpen) {
        header.style.height = '315px';
        nav.style.display = "block";
    } 
    else {
        header.style.height = null;
        nav.style.display = 'none';
    }
}

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