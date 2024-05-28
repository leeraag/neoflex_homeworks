document.addEventListener("DOMContentLoaded", function () {
    const anchor = document.getElementById("top")
    const topBtn = document.getElementById("topBtn")
   
    window.addEventListener("scroll", function () {
      if (window.scrollY > document.documentElement.clientHeight / 4) {
        topBtn.style.display = "flex";
      } else {
        topBtn.style.display = "none";
      }
    });

    anchor.addEventListener("click", function (event) {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });