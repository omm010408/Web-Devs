const links = document.getElementsByClassName("link");

Array.from(links).forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        const target = link.getAttribute("targetPage"); // get the target page
        if (target) {
            sessionStorage.setItem("targetPage", target);
            window.location.href = "load.html";
        }
    });
});

const home = document.getElementsByClassName("home")[0];
home.addEventListener("click", function(e) {
    e.preventDefault();
    sessionStorage.setItem("targetPage", "web1.html");
    window.location.href = "load.html";
});