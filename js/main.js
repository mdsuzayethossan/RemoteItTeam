$(function() {
    //web
    var swiper = new Swiper(".mySwiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,


        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,

        },

        on: {
            init() {
                this.el.addEventListener('mouseenter', () => {
                    this.autoplay.stop();
                });

                this.el.addEventListener('mouseleave', () => {
                    this.autoplay.start();
                });
            }
        },

        loop: true,

    });





    //Logos
    var containerEl = document.querySelector('.main-filter');

    var mixer = mixitup(containerEl);

    //Typed Js
    $(".typed").typed({
        strings: ["Developers.", "Designers.", "Editor."],
        // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
        stringsElement: null,
        // typing speed
        typeSpeed: 30,
        // time before typing starts
        startDelay: 1200,
        // backspacing speed
        backSpeed: 20,
        // time before backspacing
        backDelay: 500,
        // loop
        loop: true,
        // false = infinite
        loopCount: 5,
        // show cursor
        showCursor: false,
        // character for cursor
        cursorChar: "|",
        // attribute to type (null == text)
        attr: null,
        // either html or text
        contentType: 'html',
        // call when done callback function
        callback: function() {},
        // starting callback function before each string
        preStringTyped: function() {},
        //callback for every typed string
        onStringTyped: function() {},
        // callback for reset
        resetCallback: function() {}
    });





    // var mybutton = document.getElementById("backToTop");


    // window.onscroll = function() { scrollFunction() };

    // function scrollFunction() {
    //     if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    //         $(".back-to-top").fadeIn("slow");
    //     } else {
    //         $(".back-to-top").fadeOut("slow");
    //     }
    // }

    // function topFunction() {
    //     document.body.scrollTop = 0;
    //     document.documentElement.scrollTop = 0;
    // }

    //Navbar add bg
    $(window).scroll(function() {
        var scrolling = $(this).scrollTop();
        if (scrolling > 150) {
            $('.navbar').addClass('navBackground');
        } else {
            $('.navbar').removeClass('navBackground');
        }

    });

    //Accordion
    const items = document.querySelectorAll(".accordion button");

    function toggleAccordion() {
        const itemToggle = this.getAttribute('aria-expanded');

        for (i = 0; i < items.length; i++) {
            items[i].setAttribute('aria-expanded', 'false');
        }

        if (itemToggle == 'false') {
            this.setAttribute('aria-expanded', 'true');
        }
    }

    items.forEach(item => item.addEventListener('click', toggleAccordion));

    //bars
    document.addEventListener('click', function(e) {
        // Hamburger menu
        if (e.target.classList.contains('hamburger-toggle')) {
            e.target.children[0].classList.toggle('active');
        }
    });

    //AOS
    AOS.init({
        easing: 'ease-in-out-sine',
        duration: 700,
    });

    $('.count').each(function() {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 3300,
            easing: 'swing',
            step: function(now) {
                $(this).text(Math.ceil(now));
            }
        });
    });

    //skills

    $('.skill-per').each(function() {
        var $this = $(this);
        var per = $this.attr('per');
        $this.css("width", per + '%');
        $({ animatedValue: 0 }).animate({ animatedValue: per }, {
            duration: 1000,
            step: function() {
                $this.attr('per', Math.floor(this.animatedValue) + '%');

            },
            complete: function() {
                $this.attr('per', Math.floor(this.animatedValue) + '%');

            }

        });
    });



    $(function() {
        var galleryThumbs = new Swiper(".gallery-thumbs", {
            centeredSlides: true,
            centeredSlidesBounds: true,
            direction: "horizontal",
            spaceBetween: 10,
            slidesPerView: 3,
            freeMode: false,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
            watchOverflow: true,
            breakpoints: {
                480: {
                    direction: "vertical",
                    slidesPerView: 3
                }
            }
        });
        var galleryTop = new Swiper(".gallery-top", {
            direction: "horizontal",
            spaceBetween: 10,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
            },
            thumbs: {
                swiper: galleryThumbs
            }
        });
        galleryTop.on("slideChangeTransitionStart", function() {
            galleryThumbs.slideTo(galleryTop.activeIndex);
        });
        galleryThumbs.on("transitionStart", function() {
            galleryTop.slideTo(galleryThumbs.activeIndex);
        });
    });



    $('.banner-section').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        vertical: true,
        prevArrow: '.logo-scroll-down',
        nextArrow: '.logo-scroll-up',
    });


    $("#myBtn").click(function() {
        $("#exampleModal").modal("hide");
    });



    //Scroll event
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn();
        } else {
            $('.back-to-top').fadeOut();
        }
    });
    $('.back-to-top').click(function() {
        $("html, body").animate({ scrollTop: 0 }, 1000);
        return false;
    });

});