$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });



    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".auto-type", {
        strings: ["Developer", "Designer", "Project Manager", "Dev Ops"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".auto-type-2", {
        strings: ["Developer", "Designer", "Project Manager", "Dev Ops"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });

    // $('.send-msg').on('click', function () {
    //     var link = "mailto:me@example.com"
    //          + "?cc=myCCaddress@example.com"
    //          + "&subject=" + encodeURIComponent("This is my subject")
    //          + "&body=" + encodeURIComponent(document.getElementById('myText').value)
    // ;
    
    // window.location.href = link;
    // });

    function sendMail() {
        var link = "mailto:kurtisjin21@gmail.com"
                 + "?cc=myCCaddress@gmail.com"
                 + "&subject=" + encodeURIComponent("This is my subject")
                 + "&body=" + encodeURIComponent(document.getElementById('myText').value)
        ;
        
        window.location.href = link;
    }
    
});