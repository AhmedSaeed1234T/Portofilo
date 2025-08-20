  const hiddenElements = document.querySelectorAll('.hidden');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if(entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    });
    hiddenElements.forEach(el => observer.observe(el));
    const skillBars = document.querySelectorAll('.progress');
    const skillObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if(entry.isIntersecting) {
          entry.target.style.width = entry.target.getAttribute('data-skill');
        }
      });
    }, { threshold: 0.5 });
    skillBars.forEach(bar => skillObserver.observe(bar));