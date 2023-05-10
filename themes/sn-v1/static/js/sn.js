window.addEventListener("DOMContentLoaded", () => {
  // hide/show scroll hint icons when scrolling from top/bottom of scroll content
  for (const scroller of document.querySelectorAll(".sn-scroll-hint")) {
    let pos = scroller.scrollTop;
    scroller.addEventListener("scroll", () => {
      const newPos = scroller.scrollTop;
      if (pos < 1 && newPos > pos) {
        let down = scroller.querySelector(".sn-scroll-hint-down");
        if (down) {
          down.style.opacity = 0;
        }
      } else if (newPos < 1 && pos > 0) {
        let down = scroller.querySelector(".sn-scroll-hint-down");
        if (down) {
          down.style.opacity = 1;
        }
      }
      pos = newPos;
    });
  }
});
