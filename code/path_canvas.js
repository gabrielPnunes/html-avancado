
let tela = document.getElementById("tela");
let context = tela.getContext("2d");

context.beginPath();

context.lineWidht = 9;
context.strokeStyle = "aquamarine";
context.moveTo (10, 10);
context.lineTo(400, 300);
context.stroke();

context.beginPath();
context.lineWidht = 7;
context.strokeStyle = "black";
context.fillStyle = "blueviolet";
context.moveTo(50, 10);
context.lineTo(300, 300); 
context.lineTo(200, 300);
context.closePath();
context.stroke();
context.fill()

