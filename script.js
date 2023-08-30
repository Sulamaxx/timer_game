var walkRight_worker_id = 0;

function move(event) {
    var keycode = event.which;

    if (keycode == 39) {

        if (walkRight_worker_id == 0) {
            walkRight_worker_id = setInterval(walkRight, 200);
        }

    }



}


var walkRightImage = 0;
var walkRight_MarginLeft = 0;

function walkRight() {

    walkRightImage = walkRightImage + 1;

    walkRight_MarginLeft = walkRight_MarginLeft + 10;

    document.getElementById("player").src = "./assets/walk_right/player_walk" + walkRightImage + ".png";
    document.getElementById("player").style.marginLeft=walkRight_MarginLeft+"px";


    if (walkRightImage == 2) {
        walkRightImage = 0;
    }



}

function stop() {


    clearInterval(walkRight_worker_id);
    walkRight_worker_id=0;

    document.getElementById("player").src = "./assets/stop/player_idle.png";
}