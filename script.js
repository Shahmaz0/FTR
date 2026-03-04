document.addEventListener("DOMContentLoaded", () => {
    // Set the current year in footer
    const yearSpan = document.getElementById("year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Interactive details polyfill or smooth opening for details
    const detailsElements = document.querySelectorAll("details.faq-item");
    
    detailsElements.forEach(targetDetail => {
        targetDetail.addEventListener("click", () => {
            // Optional: Close other open details
            detailsElements.forEach(detail => {
                if (detail !== targetDetail) {
                    detail.removeAttribute("open");
                }
            });
        });
    });

    // Add depth to search input when focused (handled mostly in CSS, 
    // but JS can add class to container if needed).
    const searchInput = document.querySelector('input[type="text"]');
    if (searchInput) {
        searchInput.addEventListener('keydown', (e) => {
            if(e.key === 'Enter') {
                e.preventDefault();
                alert(`Search for "${searchInput.value}" not connected to a backend yet.`);
            }
        });
    }
});
