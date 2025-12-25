(() => {
    const onScroll = () => {
      document.body.classList.toggle("scrolled", window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
  })();
  