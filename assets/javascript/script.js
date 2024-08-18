// Script di bawah ini untuk menyembunyikan Navbar saat di Scroll
var hideScroll = window.pageYOffset;

    window.onscroll = function() {
        var currentScrollPos = window.pageYOffset;
            if (hideScroll > window.pageYOffset) {
                document.getElementById("navbar").style.top = "0";
            } else {
                document.getElementById("navbar").style.top = "-70px";
            }

        hideScroll = currentScrollPos;
    }

// Script di bawah ini untuk mengatur munculnya menu navbar saat tombol hamburger diclick 
const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('.navbar ul');

menuToggle.addEventListener('click', function() {
    nav.classList.toggle('slide');
})