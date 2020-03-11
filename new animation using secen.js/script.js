new Scene({
  ".card-wrapper.forward": {
    0: {
      transform: "rotateY(0deg)",
    },
    2: {
      transform: "rotateY(360deg)"
    },
  },
  ".card-wrapper.backward": {
    0: {
      transform: "rotateY(180deg)",
    },
    2: {
      transform: "rotateY(540deg)"
    },
  },
  ".shadow": {
    0: {
      transform: "scaleX(1)",
      easing: "ease-in",
    },
    0.5: {
      transform: "scaleX(0.16)",
      easing: "ease-out",
    },
    1: {
      transform: "scaleX(1)",
    },
    options: {
      iterationCount: 2,
    }
  }
}, {
  selector: true,
  iterationCount: "infinite",
}).playCSS();