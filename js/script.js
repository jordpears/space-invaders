const main = () => {
    var img = new Image();
    img.onload = function () {
        ctx.drawImage(img, 0, 0);
    };
    img.src =
        "https://i.imgur.com/Ama7Xac.png";

    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    ctx.width = window.innerWidth;
    ctx.height = window.innerHeight;

}

main();