console.log("Product page loaded successfully!");
window.addEventListener("DOMContentLoaded", () => {
  const content = document.querySelector(".product-content");
  content.style.opacity = "0";
  content.style.transform = "translateY(40px)";
  setTimeout(() => {
    content.style.transition = "all 1.2s ease";
    content.style.opacity = "1";
    content.style.transform = "translateY(0)";
  }, 200);
});
