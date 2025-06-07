 window.addEventListener('scroll', () => {
    const reveals = document.querySelectorAll('.reveal');
    for (let i = 0; i < reveals.length; i++) {
      const windowHeight = window.innerHeight;
      const revealTop = reveals[i].getBoundingClientRect().top;
      const revealPoint = 150;
      if (revealTop < windowHeight - revealPoint) {
        reveals[i].classList.add('active');
      }
    }
  });

  const socket = document.querySelector('.socket');
  const icon = document.querySelector('.toggle-icon');

  socket.addEventListener('click', () => {
    if (document.body.classList.contains('dark-theme')) {
      document.body.classList.remove('dark-theme');
      document.body.classList.add('light-theme');
      icon.textContent = '🌙';
    } else {
      document.body.classList.remove('light-theme');
      document.body.classList.add('dark-theme');
      icon.textContent = '☀️';
    }
  });

  document.getElementById('menu-toggle').addEventListener('click', function () {
    this.classList.toggle('active');
    document.querySelector('.nav-links').classList.toggle('open');
  });