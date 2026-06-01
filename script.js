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

// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
modal.style.display = "block";
modalImg.src = this.src;
captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
modal.style.display = "none";
}
    

