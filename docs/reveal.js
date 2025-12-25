(() => {
    const targets = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        e.target.classList.add("reveal-in");
        io.unobserve(e.target);
      });
    }, { threshold: 0.12 });
  
    targets.forEach((el) => io.observe(el));
  })();
  