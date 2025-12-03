const links = document.querySelectorAll(".link");

links.forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault(); // prevent default link navigation
        const target = this.getAttribute("data-target"); // get target page

        // Save target page in sessionStorage
        sessionStorage.setItem("targetPage", target);

        // Go to loader page
        window.location.href = "load.html";
    });
});