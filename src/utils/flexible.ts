const DESIGN_WIDTH = 1920
const DESIGN_HEIGHT = 1080
const BASE_FONT_SIZE = 100

const setRootFontSize = () => {
  const { innerWidth, innerHeight } = window
  const isLandscape = innerWidth >= innerHeight
  const scale = isLandscape ? innerWidth / DESIGN_WIDTH : innerHeight / DESIGN_HEIGHT
  document.documentElement.style.fontSize = `${BASE_FONT_SIZE * scale}px`
}

let resizeFrame = 0

const handleResize = () => {
  if (resizeFrame) {
    cancelAnimationFrame(resizeFrame)
  }

  resizeFrame = window.requestAnimationFrame(() => {
    setRootFontSize()
    resizeFrame = 0
  })
}

setRootFontSize()
window.addEventListener('resize', handleResize)
