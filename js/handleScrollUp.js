var scrollUpEl = document.getElementById("scroll-up");
var handleScroll = () => scrollUpEl.style.display = (window.scrollY < 1300) ? 'none' : 'block';
document.addEventListener('scroll', handleScroll);