var ele = document.getElementById("nav_i1");
var clicks = document.getElementById("i2");
clicks.addEventListener("click", function () {
    ele.style.top = "0%";
    setTimeout(() => {
        ele.style.top = "-50%";
    }, 10000);
});
