// Copyright (c) 2019 ml5
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/* ===
ml5 Example
Real time Object Detection using objectDetector
=== */

var portStr = "";
if (location.port != "") {
  portStr = ":" + location.port;
}
var protocolStr = "ws";
if (location.protocol === "https:") {
  protocolStr = "wss";
}
// console.log(
//   protocolStr + "://" + location.hostname + portStr + "/jpgstream_client"
// );
var ws = new WebSocket(
  protocolStr + "://" + location.hostname + portStr + "/jpgstream_client"
);
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var img = new Image();
img.onload = function () {
  canvas.style.width = this.width + "px";
  canvas.style.height = this.height + "px";
  ctx.drawImage(
    this,
    0,
    0,
    this.width,
    this.height, // source rectangle
    0,
    0,
    canvas.width,
    canvas.height
  ); // destination rectangle
};

let objectDetector;
let status;
let objects = [];
let canvas, ctx;
const width = 640;
const height = 420;

async function make() {
  img = new Image();
  img.src = "images/cat2.JPG";
  img.width = width;
  img.height = height;

  objectDetector = await ml5.objectDetector("cocossd", startDetecting);

  canvas = createCanvas(width, height);
  ctx = canvas.getContext("2d");
}

// when the dom is loaded, call make();
window.addEventListener("DOMContentLoaded", function () {
  make();
});

function startDetecting() {
  console.log("model ready");
  detect();
}

function detect() {
  objectDetector.detect(img, function (err, results) {
    if (err) {
      console.log(err);
      return;
    }
    objects = results;

    if (objects) {
      draw();
    }
  });
}

function draw() {
  // Clear part of the canvas
  ctx.fillStyle = "#000000";
  ctx.fillRect(0, 0, width, height);

  ctx.drawImage(img, 0, 0);
  for (let i = 0; i < objects.length; i += 1) {
    ctx.font = "16px Arial";
    ctx.fillStyle = "green";
    ctx.fillText(objects[i].label, objects[i].x + 4, objects[i].y + 16);

    ctx.beginPath();
    ctx.rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
    ctx.strokeStyle = "green";
    ctx.stroke();
    ctx.closePath();
  }
}

function createCanvas(w, h) {
  const canvas = document.createElement("canvas");
  canvas.width = w;
  canvas.height = h;
  document.body.appendChild(canvas);
  return canvas;
}
ws.onmessage = function (message) {
  var url = URL.createObjectURL(message.data);
  img.src = url;
  console.log(url);
  gotResult();
  classifier.detect(img, resultsFromImage);
};
