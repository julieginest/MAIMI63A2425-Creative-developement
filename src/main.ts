
const initSmoothScroll = () => {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
};

const initCanvas = () => {
  const canvas = document.querySelector("canvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  // Set canvas size to match image dimensions
  const img = canvas.previousElementSibling as HTMLImageElement;
  if (!img) return;

  const updateCanvasSize = () => {
    canvas.width = img.offsetWidth;
    canvas.height = img.offsetHeight;
  };

  updateCanvasSize();
  window.addEventListener("resize", updateCanvasSize);

  canvas.addEventListener("mousemove", (e) => {
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    // Canvas ready for drawing interactions
  });
};

const init = () => {
  initSmoothScroll();
  initCanvas();
};

document.addEventListener("DOMContentLoaded", init);
