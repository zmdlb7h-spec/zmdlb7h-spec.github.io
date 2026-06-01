const cursor = document.querySelector("#cursor-img");
const defaultSrc = cursor.src;
const hoverSrc = decodeURIComponent(cursor.src).replace("光标.png", "光标2.png");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.pageX + "px";
  cursor.style.top = e.pageY + "px";
});

document.querySelectorAll("a").forEach((link) => {
  link.addEventListener("mouseenter", () => {
    cursor.src = hoverSrc;
  });
  link.addEventListener("mouseleave", () => {
    cursor.src = defaultSrc;
  });
});
