let img;
let video;
let detector;
let detections = [];

function preload() {
  img = loadImage("cat.png");
  detector = ml5.objectDetector("cocossd");
}

function gotDetections(error, results) {
  if (error) {
    console.error(error);
  }
  console.log("results");
  console.log(results);
  detections = results;
  detector.detect(video, gotDetections);
}

function setup() {
  createCanvas(640, 480);
  // video = createCapture(VIDEO);
  img = loadImage(
    "https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_960_720.jpg"
  );

  // img.size(640, 480);
  // img.hide();
  detector.detect(img, gotDetections);
  console.log(img);
}

// z
