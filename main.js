// $(function () {
//     var header = $(".header");
//     $(window).scroll(function () {
//         var scroll = $(window).scrollTop();

//         if (scroll >= 150) {
//             header.removeClass('header').addClass("header-alt");
//             console.log(scroll);
//         } else {
//             header.removeClass("header-alt").addClass('header');
//         }
//     });
// });

const parallax = document.getElementById("home");
window.addEventListener('scroll', function () {
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset * 0.7 + "px";
})

const bich = document.getElementById("about");
window.addEventListener('scroll', function () {
    let offset2 = window.pageYOffset;
    bich.style.backgroundPositionY = offset2 * 0.4 + "px";
    console.log(offset2 * 1.5);
})


const middle = document.getElementById("gallery");
window.addEventListener('scroll', function () {
    let hello = window.pageYOffset;
    middle.style.backgroundPositionY = hello * 0.2 + "px";
})