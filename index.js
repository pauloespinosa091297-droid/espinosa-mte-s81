document.addEventListener("DOMContentLoaded", () => {

  const modal = document.getElementById("productModal");
  const modalTitle = document.getElementById("modal-title");
  const modalPrice = document.getElementById("modal-price");
  const modalImg = document.getElementById("modal-img");
  const modalDesc = document.getElementById("modal-desc");
  const closeBtn = document.querySelector(".close-btn");

  // OPEN MODAL
  document.querySelectorAll(".btn-buy").forEach(button => {
    button.addEventListener("click", (e) => {
      e.preventDefault();

      modalTitle.textContent = button.dataset.name || "Watch Model";
      modalPrice.textContent = button.dataset.price || "Contact for Price";
      modalImg.src = button.dataset.img || "";
      modalDesc.textContent = button.dataset.desc || "No description available.";

      modal.style.display = "flex";
    });
  });

  // CLOSE BUTTON
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // CLICK OUTSIDE
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });

  // ESC KEY
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      modal.style.display = "none";
    }
  });

  // ADD TO CART (basic)
  document.querySelector(".btn-add-cart").addEventListener("click", () => {
    alert("Added to cart!");
  });

});



// Dark Mode function

function toggleTheme() {
    const body = document.body;
    const themeIcon = document.getElementById("themeIcon");
    
    // Toggle the class on the body
    body.classList.toggle("dark-mode");
    
    // Switch the icon visually
    if (body.classList.contains("dark-mode")) {
        themeIcon.classList.replace("bi-moon-stars", "bi-sun");
        localStorage.setItem("theme", "dark"); // Save user preference
    } else {
        themeIcon.classList.replace("bi-sun", "bi-moon-stars");
        localStorage.setItem("theme", "light");
    }
}

// Optional: Check for saved preference on page load
document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
        document.getElementById("themeIcon").classList.replace("bi-moon-stars", "bi-sun");
    }
});