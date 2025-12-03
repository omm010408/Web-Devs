// Event delegation for all links and home logo
document.body.addEventListener("click", function(e) {

    // Handle nav links
    if (e.target.classList.contains("link")) {
        e.preventDefault();
        const target = e.target.getAttribute("data-target");
        if (target) {
            sessionStorage.setItem("targetPage", target);
            window.location.href = "load.html";
        }
    }

    // Handle home logo
    if (e.target.classList.contains("home")) {
        e.preventDefault();
        sessionStorage.setItem("targetPage", "web1.html");
        window.location.href = "load.html";
    }
});