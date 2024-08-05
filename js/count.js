document.addEventListener("DOMContentLoaded", function() {
    const counters = document.querySelectorAll('.count-number');

    const observerOptions = {
      threshold: 0.5 // Trigger when 50% of the element is visible
    };

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const counter = entry.target;
          const target = +counter.getAttribute('data-count');
          const updateCount = () => {
            const count = +counter.innerText;
            const increment = target / 400; // Adjust this value to control speed

            if (count < target) {
              counter.innerText = Math.ceil(count + increment);
              setTimeout(updateCount, 100); // Adjust this value to control speed
            } else {
              counter.innerText = target;
              observer.unobserve(counter); // Stop observing once the count is done
            }
          };
          updateCount();
        }
      });
    }, observerOptions);

    counters.forEach(counter => {
      observer.observe(counter);
    });
  });

