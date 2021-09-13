import p5 from "p5";

export const sketch = (p5: p5): void => {
  p5.setup = () => {
    p5.createCanvas(600, 400);
  };

  p5.draw = () => {
    p5.background(0);
    p5.fill(255);
    p5.ellipse(p5.width / 2, p5.height / 2, 20, 20);
  };
};
