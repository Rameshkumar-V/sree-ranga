
  const counters = document.querySelectorAll('.counter');
  const speed = 100;

  counters.forEach(counter => {
    const animate = () => {
      const value = +counter.getAttribute('data-target');
      const data = +counter.innerText;
      
      const time = value / speed;
      if (data < value) {
        counter.innerText = Math.ceil(data + time);
        setTimeout(animate, 30);
      } else {
        counter.innerText = value;
      }
    };
    animate();
  });

