document.addEventListener("scroll", (event) => {
    document.documentElement.style.setProperty("--scroll", (window.scrollY + "px"));
});
