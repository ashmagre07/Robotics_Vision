// Smooth scroll for navbar links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    const target = link.getAttribute('href');
    if (target.startsWith('#')) {
      e.preventDefault();
      document.querySelector(target).scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Load external blog page
document.addEventListener("DOMContentLoaded", function () {
  const readMoreBtn = document.getElementById("readMoreBtn");
  const blogFullContent = document.getElementById("blogFullContent");

  readMoreBtn.addEventListener("click", function (e) {
    e.preventDefault(); // Stop page reload

    // Load blogDetails.html
    fetch("Pages/blogDetails.html")
      .then(response => response.text())
      .then(data => {
        blogFullContent.innerHTML = data;
        blogFullContent.scrollIntoView({ behavior: "smooth" });
      })
      .catch(error => console.error("Error loading blog:", error));
  });
});

