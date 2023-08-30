var playerDiv = document.getElementById("playerDiv");

var walkRightAnimationId = 0;
var walkLeftAnimationId = 0;
var walkUpAnimationId = 0;
var walkDownAnimationId = 0;

function move(event) {
    var keycode = event.which;

    if (keycode == 39 || keycode == 68) {

        if (walkRightAnimationId == 0) {
            walkLeftAnimationId = "None";
            walkUpAnimationId = "None";
            walkDownAnimationId = "None";
            walkRightAnimationId = setInterval(walkRight, 150);
        }

    } else if (keycode == 37 || keycode == 65) {

        if (walkLeftAnimationId == 0) {

            walkRightAnimationId = "None";
            walkUpAnimationId = "None";
            walkDownAnimationId = "None";

            walkLeftAnimationId = setInterval(walkLeft, 150);

        }

    } else if (keycode == 38 || keycode == 87) {

        if (walkUpAnimationId == 0) {

            walkRightAnimationId = "None";
            walkLeftAnimationId = "None";
            walkDownAnimationId = "None";

            walkUpAnimationId = setInterval(walkUp, 150);
        }

    } else if (keycode == 40 || keycode == 83) {

        if (walkDownAnimationId == 0) {
            walkRightAnimationId = "None";
            walkLeftAnimationId = "None";
            walkUpAnimationId = "None";

            walkDownAnimationId = setInterval(walkDown, 150);
        }

    }


}

function walkRight() {

    var playerDivComputedStyle = window.getComputedStyle(playerDiv);

    var playerDivMarginLeft = parseFloat(playerDivComputedStyle.marginLeft);
    var playerImagePositionX = parseFloat(playerDivComputedStyle.backgroundPositionX);

    playerDivMarginLeft += 20;
    playerImagePositionX -= 80;

    playerDiv.style.marginLeft = playerDivMarginLeft + "px";

    playerDiv.style.backgroundPositionY = "-80px";
    playerDiv.style.backgroundPositionX = playerImagePositionX + "px";

}

function walkLeft() {

    var playerDivComputedStyle = window.getComputedStyle(playerDiv);

    var playerDivMarginLeft = parseFloat(playerDivComputedStyle.marginLeft);
    var playerImagePositionX = parseFloat(playerDivComputedStyle.backgroundPositionX);

    playerDivMarginLeft -= 20;
    playerImagePositionX -= 80;

    playerDiv.style.marginLeft = playerDivMarginLeft + "px";

    playerDiv.style.backgroundPositionY = "-160px";
    playerDiv.style.backgroundPositionX = playerImagePositionX + "px";

}

function walkUp() {

    var playerDivComputedStyle = window.getComputedStyle(playerDiv);

    var playerDivMarginTop = parseFloat(playerDivComputedStyle.marginTop);
    var playerImagePositionX = parseFloat(playerDivComputedStyle.backgroundPositionX);

    playerDivMarginTop -= 20;
    playerImagePositionX -= 80;

    playerDiv.style.marginTop = playerDivMarginTop + "px";

    playerDiv.style.backgroundPositionY = "-320px";
    playerDiv.style.backgroundPositionX = playerImagePositionX + "px";

}

function walkDown() {

    var playerDivComputedStyle = window.getComputedStyle(playerDiv);

    var playerDivMarginTop = parseFloat(playerDivComputedStyle.marginTop);
    var playerImagePositionX = parseFloat(playerDivComputedStyle.backgroundPositionX);

    playerDivMarginTop += 20;
    playerImagePositionX -= 80;

    playerDiv.style.marginTop = playerDivMarginTop + "px";

    playerDiv.style.backgroundPositionY = "-240px";
    playerDiv.style.backgroundPositionX = playerImagePositionX + "px";

}

function stop() {

    var keycode = event.which;

    if (keycode == 39 || keycode == 68 || keycode == 37 || keycode == 65 || keycode == 38 || keycode == 87 || keycode == 40 || keycode == 83) {

        walkRightStop();
        walkLeftStop();
        walkUpStop();
        walkDownStop();

    }

}

function walkRightStop() {
    clearInterval(walkRightAnimationId);
    walkRightAnimationId = 0;
    playerDiv.style.backgroundPositionX = "80px";
}

function walkLeftStop() {
    clearInterval(walkLeftAnimationId);
    walkLeftAnimationId = 0;
    playerDiv.style.backgroundPositionX = "80px";
}

function walkUpStop() {
    clearInterval(walkUpAnimationId);
    walkUpAnimationId = 0;
    playerDiv.style.backgroundPositionX = "80px";
}

function walkDownStop() {
    clearInterval(walkDownAnimationId);
    walkDownAnimationId = 0;
    playerDiv.style.backgroundPositionX = "80px";
}