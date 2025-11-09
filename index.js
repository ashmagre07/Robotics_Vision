// drawer control
const openMenu = document.getElementById('openMenu');
const closeMenu = document.getElementById('closeMenu');
const sideDrawer = document.getElementById('sideDrawer');
const overlay = document.getElementById('overlay');

function openDrawer() {
  sideDrawer.classList.add('open');
  overlay.classList.add('show');
  overlay.hidden = false;
  sideDrawer.setAttribute('ariahidden', 'false');
}
function closeDrawer() {
  sideDrawer.classList.remove('open');
  overlay.classList.remove('show');
  // hide overlay after transition
  setTimeout(()=> overlay.hidden = true, 300);
  sideDrawer.setAttribute('aria-hidden', 'true');
}

openMenu.addEventListener('click', openDrawer);
closeMenu.addEventListener('click', closeDrawer);
overlay.addEventListener('click', closeDrawer);

// close on Esc
document.addEventListener('keydown', (e)=>{
  if(e.key === 'Escape' && sideDrawer.classList.contains('open')) closeDrawer();
});

// Scroll to Home
// document.getElementById("navHome").addEventListener("click", function(e) {
//   e.preventDefault();
//   document.getElementById("home").scrollIntoView({ behavior: "smooth" });
// });

document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".navHome");

  links.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      const targetId = link.getAttribute("href").substring(1); // remove '#'
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });
});


// Load Product page dynamically
document.getElementById("navProduct").addEventListener("click", function(e) {
  e.preventDefault();
  
  // Fetch Product.html from Pages folder
  fetch("Pages/product.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("product").innerHTML = data;

      // Attach Product CSS dynamically
      let link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "Style/product.css";
      document.head.appendChild(link);

      // Attach Product JS dynamically
      let script = document.createElement("script");
      script.src = "Script/product.js";
      document.body.appendChild(script);

      // Scroll down to Product section
      document.getElementById("product").scrollIntoView({ behavior: "smooth" });
    })
    .catch(err => console.error("Error loading product:", err));
});
