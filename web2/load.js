const targetPage = sessionStorage.getItem("targetPage");
setTimeout(() => {
    window.location.href = targetPage;
}, 2000);