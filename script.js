    const stars = document.querySelectorAll('.star');
    stars.forEach((star, index) => {
      star.addEventListener('mouseover', () => {
        stars.forEach((s, i) => s.classList.toggle('hover', i <= index));
      });
      star.addEventListener('mouseout', () => {
        stars.forEach(s => s.classList.remove('hover'));
      });
      star.addEventListener('click', () => {
        stars.forEach((s, i) => s.classList.toggle('active', i <= index));
      });
    });