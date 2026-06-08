const board = document.getElementById("board");

const DESIGN_WIDTH = 922;
const DESIGN_HEIGHT = 781;

function fitBoard() {
  const scaleX = window.innerWidth / DESIGN_WIDTH;
  const scaleY = window.innerHeight / DESIGN_HEIGHT;
  const scale = Math.min(scaleX, scaleY);

  board.style.transform = `translate(-50%, -50%) scale(${scale})`;
}

window.addEventListener("resize", fitBoard);
window.addEventListener("orientationchange", fitBoard);
fitBoard();