document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Scroll indicator functionality
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', function() {
            window.scrollBy({
                top: window.innerHeight,
                left: 0,
                behavior: 'smooth'
            });
        });
    }

    // Optional: Add a subtle animation to the content container on page load
    const contentContainer = document.querySelector('.content-container');
    if (contentContainer) {
        contentContainer.style.opacity = '0';
        contentContainer.style.transform = 'translateY(20px)';
        setTimeout(() => {
            contentContainer.style.transition = 'opacity 0.5s, transform 0.5s';
            contentContainer.style.opacity = '1';
            contentContainer.style.transform = 'translateY(0)';
        }, 100);
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const experienceItems = document.querySelectorAll('.experience-item');
  
    experienceItems.forEach(item => {
      const header = item.querySelector('.experience-header');
      header.addEventListener('click', () => {
        // Close all other dropdowns
        experienceItems.forEach(otherItem => {
          if (otherItem !== item && otherItem.classList.contains('active')) {
            otherItem.classList.remove('active');
          }
        });
        
        // Toggle the clicked dropdown
        item.classList.toggle('active');
      });
    });
  });