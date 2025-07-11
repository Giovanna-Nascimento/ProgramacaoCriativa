function setup() {
  createCanvas(600, 600);
  textSize(10);

  stroke(20, 20, 100);

  // corpo azul
  fill("LightBlue");
  rect(200, 80, 150, 300);

  // olho (pálbebras)
  circle(240, 160, 50);
  circle(310, 160, 50);

  // olho (esclera)
  fill("white");
  ellipse(240, 160, 45, 35);
  ellipse(310, 160, 45, 35);

  // boca (parte interior)
  fill("indianred");
  rect(250, 280, 50, 50);

  // boca (parte exterior)
  fill("darkgreen");
  rect(235, 300, 80, 110, 0, 0, 10);
  stroke("gray");
  fill("LightGray");
  circle(245, 315, 10);
  circle(305, 315, 10);
  text("x", 243, 318);
  text("x", 303, 318);

  // covinhas
  stroke("gray");
  fill("LightGray");
  circle(235, 285, 10);
  circle(313, 285, 10);
  text("x", 311, 288);
  text("x", 233, 288);

  // nariz
  stroke("brown");
  fill("indianred");
  ellipse(275, 220, 40, 55);

  // olhos (íris)
  stroke("green");
  fill("lightgreen");
  circle(240, 160, 25);
  circle(310, 160, 25);

  // olhos (pupila)
  fill("black");
  circle(240, 162, 15);
  circle(310, 162, 15);

  // olhos (brilhinho)
  fill("fff");
  circle(235, 158, 7);
  circle(305, 158, 7);

  // cabelinho
  stroke("saddlebrown");
  strokeWeight(25);

  point(255, 110);
  point(275, 110);
  point(295, 110);

  // chapéu
  stroke("gold");
  strokeWeight(1);
  fill("yellow");
  rect(203, 10, 145, 55, 50, 50, 0);

  fill("red");
  rect(203, 45, 145, 55);

  fill("yellow");
  rect(188, 60, 175, 50, 10, 10, 50, 50);
}
