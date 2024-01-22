function setup() {
  // put setup code here
  document.oncontextmenu =()=> false;
  function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    createEasyCam();
  }
  
  function draw()
  {
    background(0);
    lights();
    box(200);
  }}
