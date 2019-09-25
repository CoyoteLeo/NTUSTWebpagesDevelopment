window.onload = function () {
    let canvas = document.getElementById("canvas");
    let context = canvas.getContext("2d");
    context.beginPath();
    context.rect(20, 20, 10, 10);
    context.stroke();

    let y = 20
    let ori = true;
    setInterval(() => {
        y = ori ? y + 5 : y - 5;
        context.beginPath();
        context.clearRect(0, 0, 500, 500);
        context.rect(20, y, 10, 10);
        context.stroke();
        ori = y + 10 > 500 ? false : true;
        ori = y < 0 ? true : false;
    }, 50);
}