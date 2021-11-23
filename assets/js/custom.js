function toggleMenu() {
    // toggle menu-js
    var mobileMenu = document.getElementById("siteMenu");
    mobileMenu.classList.toggle("OpenNav");
    // toggle overflow js
    var body = document.body;
    body.classList.toggle("overflow_hidden");
    // toggle button animate js
    var togglemenuIcon = document.getElementById("menuIcon");
    togglemenuIcon.classList.toggle("active");
}


// search-js
const search = document.querySelector(".search-bar");
const btn = document.querySelector(".btn");
const input = document.querySelector(".input");

btn.addEventListener("click", () => {
    search.classList.toggle("active");
    input.focus();
});


$('#seller-carousel').owlCarousel({
    loop:true,
    margin:35,
    dots: false,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
});

$('#sellernew-carousel').owlCarousel({
    loop:true,
    margin:15,
    dots: false,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
});


$('#banner-carousal').owlCarousel({
    loop:true,
    nav:false,
    dots:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});




$('.dropdown-submenu > a').on("click", function(e) {
    var submenu = $(this);
    $('.dropdown-submenu .dropdown-menu').removeClass('show');
    submenu.next('.dropdown-menu').addClass('show');
    e.stopPropagation();
});

$('.dropdown').on("hidden.bs.dropdown", function() {
    // hide any open menus when parent closes
    $('.dropdown-menu.show').removeClass('show');
});


$(window).load(function() {
    // The slider being synced must be initialized first
    $('#gallerycarousel').flexslider({
      animation: "slide",
      controlNav: false,
      animationLoop: false,
      slideshow: false,
      itemWidth: 180,
      itemMargin: 10,
      asNavFor: '#galleryslider'
    });
   
    $('#galleryslider').flexslider({
      animation: "slide",
      controlNav: false,
      animationLoop: false,
      slideshow: false,
      sync: "#gallerycarousel"
    });
  });