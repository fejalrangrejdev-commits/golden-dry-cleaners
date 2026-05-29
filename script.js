function showPage(page, element){

    // Hide all tab contents
    const sections = document.querySelectorAll(".tab-content");
    sections.forEach(sec => {
        sec.style.display = "none";
    });

    // Show selected tab content
    document.getElementById(page).style.display = "block";

    // Remove active class from all buttons
    const buttons = document.querySelectorAll(".tabs button");
    buttons.forEach(btn => {
        btn.classList.remove("active");
    });

    // Add active class to clicked button
    element.classList.add("active");
}
