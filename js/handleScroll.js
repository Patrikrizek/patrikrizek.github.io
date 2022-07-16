const scrollUpEl = document.getElementById("scroll-up");
const handleScroll = () => scrollUpEl.style.display = (window.scrollY < 1300) ? 'none' : 'block';
document.addEventListener('scroll', handleScroll);