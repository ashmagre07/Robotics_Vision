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

//-------------------------------------------------------------------------------------------//

const featureItems = document.querySelectorAll(".feature-item");
const video = document.getElementById("featureVideo");
const videoSource = video.querySelector("source");
const subtitleBox = document.getElementById("videoSubtitle");


featureItems.forEach(item => {
  item.addEventListener("mouseenter", () => {

    // remove active class
    document.querySelector(".feature-item.active")?.classList.remove("active");

     document.querySelectorAll(".feature-item").forEach(i => {
      if (i !== item) i.classList.remove("open");
    });

    item.classList.add("open");
    // add active class to clicked
    item.classList.add("active");

    // get file
    const videoFile = item.dataset.video;

    // update video
    videoSource.src = "videos/" + videoFile;
    video.load();
    video.play();

    // // Change subtitle text
    // const text = item.querySelector(".feature-subtext p").innerText;
    // subtitleBox.innerText = text;
    // subtitleBox.style.opacity = "1";

  });
});


// - Mobile View ----------------------------//
//const mobileFeatures = document.querySelectorAll(".feature-item");

// mobileFeatures.forEach(item => {
//   item.addEventListener("click", () => {

//     // Collapse others
//     mobileFeatures.forEach(f => {
//       if (f !== item) f.classList.remove("active");
//     });

//     // Toggle this one
//     item.classList.toggle("active");
//   });
// });

// MOBILE toggle
// mobileFeatures.forEach(item => {
//   item.addEventListener("click", () => {

//     // Close others
//     mobileFeatures.forEach(f => {
//       if (f !== item) f.classList.remove("active");
//     });

//     // Toggle current one
//     item.classList.toggle("active");

//      // KEEP horizontal list height small
//     document.querySelector(".features-list").style.height =
//       item.classList.contains("active") ? "auto" : "auto";
//   });
// });

// --- Mobile view toggle ---
const mobileFeatures = document.querySelectorAll(".feature-item");

mobileFeatures.forEach(item => {
  item.addEventListener("click", () => {

    // Close others
    mobileFeatures.forEach(f => {
      if (f !== item) f.classList.remove("active");
    });

    // Toggle current card
    item.classList.toggle("active");

    // Update video on click
    const videoFile = item.dataset.video;
    videoSource.src = "videos/" + videoFile;
    video.load();
    video.play();
  });
});


// Optional: hide text when leaving left menu
// document.querySelector(".features-list").addEventListener("mouseleave", () => {
//   subtitleBox.style.opacity = "0";
// });

// const featureItems = document.querySelectorAll(".feature-item");
// const video = document.getElementById("featureVideo");
// const videoSource = video.querySelector("source");

// featureItems.forEach(item => {
//   item.addEventListener("mouseenter", () => {

//     // Remove previous active highlight
//     document.querySelector(".feature-item.active")?.classList.remove("active");

//     // Highlight hovered item
//     item.classList.add("active");

//     // Change video
//     const videoFile = item.dataset.video;
//     videoSource.src = "videos/" + videoFile;
//     video.load();
//     video.play();
//   });
// });
