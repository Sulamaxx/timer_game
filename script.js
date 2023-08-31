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

var playerDivComputedStyle = window.getComputedStyle(playerDiv);
var playerDivMarginLeft = parseFloat(playerDivComputedStyle.marginLeft);
var playerDivMarginTop = parseFloat(playerDivComputedStyle.marginTop);


function walkRight() {

    var playerImagePositionX = parseFloat(playerDivComputedStyle.backgroundPositionX);

    var rightFenceComputedStyle = window.getComputedStyle(rightFence);
    var rightFenceMarginLeft = parseFloat(rightFenceComputedStyle.marginLeft);

    var playerDivRightSideMargin = playerDivMarginLeft + 50;
    var fanceTouchingPoint = rightFenceMarginLeft;

    if (fanceTouchingPoint == playerDivRightSideMargin) {

    } else if (playerDivRightSideMargin == 465 && playerDivMarginTop > 355 && playerDivMarginTop < 1405) {
        // Right OutSide
    } else if (playerDivRightSideMargin == 1808 && playerDivMarginTop > 358 && playerDivMarginTop < 1404) {
        // Right InSide
    } else if (playerDivMarginLeft == 1172 && playerDivMarginTop > 1353 && playerDivMarginTop < 1406) {
        // Door Right Side Sideblock
    } else {

        playerDivMarginLeft += 1;
        playerImagePositionX -= 50;

        playerDiv.style.marginLeft = playerDivMarginLeft + "px";

        playerDiv.style.backgroundPositionY = "-50px";
        playerDiv.style.backgroundPositionX = playerImagePositionX + "px";

    }

}

function walkLeft() {
    var playerImagePositionX = parseFloat(playerDivComputedStyle.backgroundPositionX);

    var leftFenceComputedStyle = window.getComputedStyle(leftFence);
    var leftFenceMarginLeft = parseFloat(leftFenceComputedStyle.marginLeft);

    var fanceTouchingPoint = leftFenceMarginLeft + 28;

    if (playerDivMarginLeft == fanceTouchingPoint) {

    } else if (playerDivMarginLeft == 524 && playerDivMarginTop > 358 && playerDivMarginTop < 1404) {
        // Left InSide
    } else if (playerDivMarginLeft == 1862 && playerDivMarginTop > 355 && playerDivMarginTop < 1405) {
        // Left OutSide
    } else if (playerDivMarginLeft == 1106 && playerDivMarginTop > 1353 && playerDivMarginTop < 1406) {
        // Door Left Side Sideblock
    } else {

        playerDivMarginLeft -= 1;
        playerImagePositionX -= 50;

        playerDiv.style.marginLeft = playerDivMarginLeft + "px";

        playerDiv.style.backgroundPositionY = "-100px";
        playerDiv.style.backgroundPositionX = playerImagePositionX + "px";

    }

}

function walkUp() {

    var playerImagePositionX = parseFloat(playerDivComputedStyle.backgroundPositionX);

    var topFenceComputedStyle = window.getComputedStyle(topFence);
    var topFenceMarginTop = parseFloat(topFenceComputedStyle.marginTop);

    var fanceTouchingPoint = topFenceMarginTop + 110;

    if (fanceTouchingPoint == playerDivMarginTop) {

    } else if (playerDivMarginTop == 1406 && 419 < playerDivMarginLeft && playerDivMarginLeft < 1106) {
        // Door Left Side OutSide
    } else if (playerDivMarginTop == 1406 && 1172 < playerDivMarginLeft && playerDivMarginLeft < 1862) {
        // Door Right Side OutSide
    } else if (playerDivMarginTop == 456 && 523 < playerDivMarginLeft && playerDivMarginLeft < 1809) {
        //  Top Inside
    } else {

        playerDivMarginTop -= 1;
        playerImagePositionX -= 50;

        playerDiv.style.marginTop = playerDivMarginTop + "px";

        playerDiv.style.backgroundPositionY = "-200px";
        playerDiv.style.backgroundPositionX = playerImagePositionX + "px";

    }

}

function walkDown() {
    var playerImagePositionX = parseFloat(playerDivComputedStyle.backgroundPositionX);

    var bottomFenceComputedStyle = window.getComputedStyle(bottomFence);
    var bottomFenceMarginTop = parseFloat(bottomFenceComputedStyle.marginTop);

    var fanceTouchingPoint = bottomFenceMarginTop;

    if (fanceTouchingPoint == playerDivMarginTop) {

    } else if (playerDivMarginTop == 1353 && 523 < playerDivMarginLeft && playerDivMarginLeft < 1106) {
        // Door Left Side Inside
    } else if (playerDivMarginTop == 1353 && 1172 < playerDivMarginLeft && playerDivMarginLeft < 1809) {
        // Door right Side Inside
    } else if (playerDivMarginTop == 356 && 420 < playerDivMarginLeft && playerDivMarginLeft < 1862) {
        // Top OutSide 
    } else {

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


    alert("playerDivMarginLeft: " + playerDivMarginLeft + "-playerDivMarginTop: " + playerDivMarginTop);

}

// index Page
const startButton = document.getElementById('startButton');

startButton.addEventListener('click', () => {
    alert('Game is starting!');
});

function onloadMoments() {
    setInterval(genarateGifts, 100);
}

function genarateGifts() {

}