function $(id) {
    return document.getElementById(id);
}

function initCanvas(id) {
    ctx = $(id).getContext('2d');
    width = parseInt($(id).width);
    height = parseInt($(id).height)
}