// sidebar
const sideNav = document.querySelectorAll('.sidenav');
M.Sidenav.init(sideNav);

// slider
const slider = document.querySelectorAll('.slider');
M.Slider.init(slider, {
    indicators: false,
    interval: 2000,
    height: 500
});

// client
const parallax = document.querySelectorAll('.parallax');
M.Parallax.init(parallax);

// portfolio
const lightbox = document.querySelectorAll('.materialboxed');
M.Materialbox.init(lightbox);

// contct
const datepicker = document.querySelectorAll('.date-picker');
M.Datepicker.init(datepicker);

// scroll page
const scroll = document.querySelectorAll('.scrollspy');
M.ScrollSpy.init(scroll, {
    scrollOffset: 50
});