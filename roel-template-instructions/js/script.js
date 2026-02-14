document.addEventListener('DOMContentLoaded', function() {
  const toTop = document.querySelector('.toTop');

  // Scroll olayı dinleniyor
  window.addEventListener('scroll', function() {
    if (window.pageYOffset !== 0) {
      toTop.style.display = 'block';  // Göster
      toTop.style.opacity = 1;
      toTop.style.transition = 'opacity 0.4s ease';
    } else {
      // Kademeli gizleme için opacity'yi 0 yap
      toTop.style.opacity = 0;
      // Opacity animasyonu bittikten sonra display:none yap
      setTimeout(() => {
        if (window.pageYOffset === 0) {
          toTop.style.display = 'none';
        }
      }, 400);
    }
  });

  // Butona tıklanınca sayfa en üste yumuşak scroll ile gider
  toTop.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
