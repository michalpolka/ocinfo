let π = Math.PI;
let circle = 2*π;

function $(id) {
    return document.getElementById(id);
}

function initCanvas(id) {
    ctx = $(id).getContext('2d');
    width = parseInt($(id).width);
    height = parseInt($(id).height)
}

function random(n1, n2) {
    let range = n2-n1+1;
    return n1+Math.floor(Math.random()*range);
}

function clearCanvas() {
    ctx.clearRect(0,0,width,height);
}