let canvas, backgroundImage;
let questions;
let question, contestant, quiz;

function setup() {

  canvas = createCanvas(850, 400);
  database = firebase.database();
  quiz = new Quiz();
  quiz.start();

}

function draw() {
  
  background("lightcyan");

}
