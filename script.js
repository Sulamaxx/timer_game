var playerDiv = document.getElementById("playerDiv");
var plantsArea = document.getElementById("plantsArea");
var topFence = document.getElementById("topFence");
var leftFence = document.getElementById("leftFence");
var rightFence = document.getElementById("rightFence");
var bottomFence = document.getElementById("bottomFence");

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
            walkRightAnimationId = setInterval(walkRight, 1);
        }

    } else if (keycode == 37 || keycode == 65) {

        if (walkLeftAnimationId == 0) {

            walkRightAnimationId = "None";
            walkUpAnimationId = "None";
            walkDownAnimationId = "None";

            walkLeftAnimationId = setInterval(walkLeft, 1);

        }

    } else if (keycode == 38 || keycode == 87) {

        if (walkUpAnimationId == 0) {

            walkRightAnimationId = "None";
            walkLeftAnimationId = "None";
            walkDownAnimationId = "None";

            walkUpAnimationId = setInterval(walkUp, 1);
        }

    } else if (keycode == 40 || keycode == 83) {

        if (walkDownAnimationId == 0) {
            walkRightAnimationId = "None";
            walkLeftAnimationId = "None";
            walkUpAnimationId = "None";

            walkDownAnimationId = setInterval(walkDown, 1);
        }

    } else if (keycode == 13) {

        showPlayerLocation();

    }


}

var playerFocusId = 0;
var playerFocusNumber = 0;

document.addEventListener('DOMContentLoaded', function() {

    playerFocusId = setInterval(focusPlayer, 1);

});

function focusPlayer() {

    playerDiv.scrollIntoView({ behavior: 'auto', block: 'center', inline: 'center' });

    if (playerFocusNumber > 0) {

        clearInterval(playerFocusId);

    }

}

function walkRight() {

    var playerDivComputedStyle = window.getComputedStyle(playerDiv);

    var playerDivMarginLeft = parseFloat(playerDivComputedStyle.marginLeft);
    var playerImagePositionX = parseFloat(playerDivComputedStyle.backgroundPositionX);

    var rightFenceComputedStyle = window.getComputedStyle(rightFence);
    var rightFenceMarginLeft = parseFloat(rightFenceComputedStyle.marginLeft);

    var playerFenceTouchingPoint = playerDivMarginLeft + 50;
    var fanceTouchingPoint = rightFenceMarginLeft;

    if (fanceTouchingPoint != playerFenceTouchingPoint) {

        playerDivMarginLeft += 1;
        playerImagePositionX -= 50;

        playerDiv.style.marginLeft = playerDivMarginLeft + "px";

        playerDiv.style.backgroundPositionY = "-50px";
        playerDiv.style.backgroundPositionX = playerImagePositionX + "px";

    }


}

function walkLeft() {

    var playerDivComputedStyle = window.getComputedStyle(playerDiv);

    var playerDivMarginLeft = parseFloat(playerDivComputedStyle.marginLeft);
    var playerImagePositionX = parseFloat(playerDivComputedStyle.backgroundPositionX);

    var leftFenceComputedStyle = window.getComputedStyle(leftFence);
    var leftFenceMarginLeft = parseFloat(leftFenceComputedStyle.marginLeft);

    var playerFenceTouchingPoint = playerDivMarginLeft;
    var fanceTouchingPoint = leftFenceMarginLeft + 28;

    if (fanceTouchingPoint != playerFenceTouchingPoint) {

        playerDivMarginLeft -= 1;
        playerImagePositionX -= 50;

        playerDiv.style.marginLeft = playerDivMarginLeft + "px";

        playerDiv.style.backgroundPositionY = "-100px";
        playerDiv.style.backgroundPositionX = playerImagePositionX + "px";

    }

}

function walkUp() {

    var playerDivComputedStyle = window.getComputedStyle(playerDiv);

    var playerDivMarginTop = parseFloat(playerDivComputedStyle.marginTop);
    var playerImagePositionX = parseFloat(playerDivComputedStyle.backgroundPositionX);

    var topFenceComputedStyle = window.getComputedStyle(topFence);
    var topFenceMarginTop = parseFloat(topFenceComputedStyle.marginTop);

    var playerFenceTouchingPoint = playerDivMarginTop;
    var fanceTouchingPoint = topFenceMarginTop + 110;


    var bottomWallComputedStyle = window.getComputedStyle(bottomWall);
    var bottomWallMarginTop = parseFloat(bottomWallComputedStyle.marginTop);

    var playerWallTouchingPoint = playerDivMarginTop + 100;
    var bottomWallTouchingPoint = bottomWallMarginTop + 100;

    if (fanceTouchingPoint == playerFenceTouchingPoint) {} else if (playerWallTouchingPoint == bottomWallTouchingPoint) {} else {


        playerDivMarginTop -= 1;
        playerImagePositionX -= 50;

        playerDiv.style.marginTop = playerDivMarginTop + "px";

        playerDiv.style.backgroundPositionY = "-200px";
        playerDiv.style.backgroundPositionX = playerImagePositionX + "px";

    }

}

function walkDown() {

    var playerDivComputedStyle = window.getComputedStyle(playerDiv);

    var playerDivMarginTop = parseFloat(playerDivComputedStyle.marginTop);
    var playerImagePositionX = parseFloat(playerDivComputedStyle.backgroundPositionX);

    var bottomFenceComputedStyle = window.getComputedStyle(bottomFence);
    var bottomFenceMarginTop = parseFloat(bottomFenceComputedStyle.marginTop);

    var playerFenceTouchingPoint = playerDivMarginTop;
    var fanceTouchingPoint = bottomFenceMarginTop;

    if (fanceTouchingPoint != playerFenceTouchingPoint) {

        playerDivMarginTop += 1;
        playerImagePositionX -= 50;

        playerDiv.style.marginTop = playerDivMarginTop + "px";

        playerDiv.style.backgroundPositionY = "-150px";
        playerDiv.style.backgroundPositionX = playerImagePositionX + "px";
    }


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
    playerDiv.style.backgroundPositionX = "50px";
}

function walkLeftStop() {
    clearInterval(walkLeftAnimationId);
    walkLeftAnimationId = 0;
    playerDiv.style.backgroundPositionX = "50px";
}

function walkUpStop() {
    clearInterval(walkUpAnimationId);
    walkUpAnimationId = 0;
    playerDiv.style.backgroundPositionX = "50px";
}

function walkDownStop() {
    clearInterval(walkDownAnimationId);
    walkDownAnimationId = 0;
    playerDiv.style.backgroundPositionX = "50px";
}

function showPlayerLocation() {

    var playerDivComputedStyle = window.getComputedStyle(playerDiv);

    var playerDivMarginLeft = parseFloat(playerDivComputedStyle.marginLeft);
    var playerDivMarginTop = parseFloat(playerDivComputedStyle.marginTop);

    var bottomWallLeftSideComputedStyle = window.getComputedStyle(bottomWall);
    var bottomWallLeftSideMarginTop = parseFloat(bottomWallLeftSideComputedStyle.marginTop);
    var bottomWallRightSideComputedStyle = window.getComputedStyle(bottomWallRightSide);
    var bottomWallRightSideMarginTop = parseFloat(bottomWallRightSideComputedStyle.marginTop);

    alert("bottomWallLeftSideMarginTop:" + bottomWallLeftSideMarginTop + "bottomWallRightSideMarginTop:" + bottomWallRightSideMarginTop);

}












// index Page
const startButton = document.getElementById('startButton');

startButton.addEventListener('click', () => {
       alert('Game is starting!');
});





