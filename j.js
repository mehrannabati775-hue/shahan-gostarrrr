// اسکرول نرم بین سکشن‌ها
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// تغییر رنگ هدر موقع اسکرول
window.addEventListener('scroll', () => {
  const header = document.getElementById('header');
  if (window.scrollY > 100) {
    header.style.backgroundColor = '#000000';
  } else {
    header.style.backgroundColor = '#1e1e1e';
  }
});
