// Get all collapsible buttons
const collapsibleBtns = document.querySelectorAll('.collapsible-btn');

// Add event listeners to each button
collapsibleBtns.forEach(btn => {
  btn.addEventListener('click', function() {
    // Get the content associated with the clicked button
    const content = this.nextElementSibling;
    
    // Toggle the display of the content (collapse or expand)
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
});
