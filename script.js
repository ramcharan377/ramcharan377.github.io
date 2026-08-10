document.body.classList.add('js-enabled');

const observer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    }
  },
  { threshold: 0.14 }
);

document.querySelectorAll('.reveal').forEach((element) => {
  element.classList.add('will-reveal');
  observer.observe(element);
});
