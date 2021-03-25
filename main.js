var canvas = new fabric.canvas("myCanvas");
var playerX = 10;
var playerY = 10;
var blockWidth = 30;
var blockHeight = 30;
var playerObject = "";
var blockObject = "";
function playerUpload() {
    fabric.Image.fromURL("ADV C86 2 (2).JPG",function(Img){
        playerObject=Img;
        playerObject.scaleToWidth(150);
        playerObject.scaleToHeight(140);
        playerObject.set({
            top:playerY,
left:playerX
        });
        canvas.add(playerObject);
    });
}