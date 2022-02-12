$(function() {


    $(".top").click(function() {
        $("html,body").animate({
            "scrollTop": 0
        })
    });


    // scroll    

    var ts = $("body").height() - $(window).height();

    $(window).scroll(function() {
        var top = $(this).scrollTop();


        if (top >= ts / 2) {
            $(".top").fadeIn()
        } else {
            $(".top").fadeOut()
        }

        // 

        if (top >= $("#contact").offset().top - 85) {
            $(".wrap-1 nav ul li a").removeClass("active");
            $(".wrap-1 nav ul li:nth-child(5) a").addClass("active");
        } else if (top >= $("#about").offset().top - 85) {
            $(".wrap-1 nav ul li a").removeClass("active");
            $(".wrap-1 nav ul li:nth-child(4) a").addClass("active");
        } else if (top >= $("#portfolio").offset().top - 85) {
            $(".wrap-1 nav ul li a").removeClass("active");
            $(".wrap-1 nav ul li:nth-child(3) a").addClass("active");
        } else if (top >= $("#services").offset().top - 85) {
            $(".wrap-1 nav ul li a").removeClass("active");
            $(".wrap-1 nav ul li:nth-child(2) a").addClass("active");
        } else {
            $(".wrap-1 nav ul li a").removeClass("active");
            $(".wrap-1 nav ul li:nth-child(1) a").addClass("active");
        }

    });

    // mobile
    $(".btn-mob").click(function() {
        $(".collapse").slideToggle();
        $(this).toggleClass("active");
    })


    document.querySelector("input").addEventListener("input", function(e) {


        let patt = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#!$])(?=.{8,12})/;
        let val = this.value;
        if (patt.test(val)) {
            this.name.nextElementSibling.innerHTML = ("match");
        } else {
            this.nextElementSibling.innerHTML = ("no match");
        }

    });

    //owl
    $('.owl-carousel').owlCarousel({

        loop: true,
        nav: false,
        autoplay: true,
        autoplaytimeout: 700,
        margin: 10,
        responsive: {
            0: {
                items: 1
            }
        }
    });

    //accordian

    $(".acc").accordion();

})