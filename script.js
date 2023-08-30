var playerDiv = document.getElementById("playerDiv");
var plantsArea = document.getElementById("plantsArea");

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
    playerImagePositionX -= 50;

    playerDiv.style.marginLeft = playerDivMarginLeft + "px";

    playerDiv.style.backgroundPositionY = "-50px";
    playerDiv.style.backgroundPositionX = playerImagePositionX + "px";

}

function walkLeft() {

    var playerDivComputedStyle = window.getComputedStyle(playerDiv);

    var playerDivMarginLeft = parseFloat(playerDivComputedStyle.marginLeft);
    var playerImagePositionX = parseFloat(playerDivComputedStyle.backgroundPositionX);

    playerDivMarginLeft -= 20;
    playerImagePositionX -= 50;

    playerDiv.style.marginLeft = playerDivMarginLeft + "px";

    playerDiv.style.backgroundPositionY = "-100px";
    playerDiv.style.backgroundPositionX = playerImagePositionX + "px";

}

function walkUp() {

    var playerDivComputedStyle = window.getComputedStyle(playerDiv);

    var playerDivMarginTop = parseFloat(playerDivComputedStyle.marginTop);
    var playerImagePositionX = parseFloat(playerDivComputedStyle.backgroundPositionX);

    playerDivMarginTop -= 20;
    playerImagePositionX -= 50;

    playerDiv.style.marginTop = playerDivMarginTop + "px";

    playerDiv.style.backgroundPositionY = "-200px";
    playerDiv.style.backgroundPositionX = playerImagePositionX + "px";

}

function walkDown() {

    var playerDivComputedStyle = window.getComputedStyle(playerDiv);

    var playerDivMarginTop = parseFloat(playerDivComputedStyle.marginTop);
    var playerImagePositionX = parseFloat(playerDivComputedStyle.backgroundPositionX);

    playerDivMarginTop += 20;
    playerImagePositionX -= 50;

    playerDiv.style.marginTop = playerDivMarginTop + "px";

    playerDiv.style.backgroundPositionY = "-150px";
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

//////////////////////////////////////////////////////
function generate() {
    generateTrees();
}


function generateTrees() {

    var treeId = 1;
    var leftHundrethPlace = -7;

    for (var i = 0; i < 10; i++) {

        var tree = document.createElement("div");
        tree.className = "leftTree";
        tree.id = "tree" + treeId;
        treeId = treeId + 1;
        var imageNumber = Math.floor(Math.random() * 2) + 1;
        tree.style.backgroundImage = 'url("./assets/plants/tree' + imageNumber + '.png ")';

        plantsArea.appendChild(tree);

        var rdn = Math.floor(Math.random() * 51);

        if (rdn < 10) {
            rdn = rdn + "0";
        }

        tree.style.marginLeft = "-95%";
        tree.style.marginTop = leftHundrethPlace + "" + rdn + "px";

        var leftHundrethPlaceAddValue = Math.floor(Math.random() * 2) + 1;
        leftHundrethPlace = leftHundrethPlace + leftHundrethPlaceAddValue;

    }

    var rightHundrethPlace = -7;

    for (var i = 0; i < 10; i++) {

        var tree = document.createElement("div");
        tree.className = "rightTree";
        tree.id = "tree" + treeId;
        treeId = treeId + 1;
        var imageNumber = Math.floor(Math.random() * 2) + 1;
        tree.style.backgroundImage = 'url("./assets/plants/tree' + imageNumber + '.png ")';

        plantsArea.appendChild(tree);

        var rdn = Math.floor(Math.random() * 51);

        if (rdn < 10) {
            rdn = rdn + "0";
        }

        tree.style.marginLeft = "90%";
        tree.style.marginTop = rightHundrethPlace + "" + rdn + "px";

        var rightHundrethPlaceAddValue = Math.floor(Math.random() * 2) + 1;
        rightHundrethPlace = rightHundrethPlace + rightHundrethPlaceAddValue;

    }

    var topHundrethPlace = -7;

    for (var i = 0; i < 10; i++) {

        var tree = document.createElement("div");
        tree.className = "topTree";
        tree.id = "tree" + treeId;
        treeId = treeId + 1;
        var imageNumber = Math.floor(Math.random() * 2) + 1;
        tree.style.backgroundImage = 'url("./assets/plants/tree' + imageNumber + '.png ")';

        plantsArea.appendChild(tree);

        var rdn = Math.floor(Math.random() * 51);

        if (rdn < 10) {
            rdn = rdn + "0";
        }
        var currentMarginLeftPercentage = -95;

        currentMarginLeftPercentage = currentMarginLeftPercentage + i * 20;

        tree.style.marginLeft = currentMarginLeftPercentage + "%";
        tree.style.marginTop = "-60%";

        var topHundrethPlaceAddValue = Math.floor(Math.random() * 2) + 1;
        topHundrethPlace = topHundrethPlace + topHundrethPlaceAddValue;

    }

    var bottomHundrethPlace = -7;

    for (var i = 0; i < 10; i++) {

        var tree = document.createElement("div");
        tree.className = "bottopTree";
        tree.id = "tree" + treeId;
        treeId = treeId + 1;
        var imageNumber = Math.floor(Math.random() * 2) + 1;
        tree.style.backgroundImage = 'url("./assets/plants/tree' + imageNumber + '.png ")';

        plantsArea.appendChild(tree);

        var rdn = Math.floor(Math.random() * 51);

        if (rdn < 10) {
            rdn = rdn + "0";
        }
        var currentMarginLeftPercentage = -95;

        currentMarginLeftPercentage = currentMarginLeftPercentage + i * 20;

        if (i == 9) {
            currentMarginLeftPercentage = 95;
        }

        tree.style.marginLeft = currentMarginLeftPercentage + "%";
        tree.style.marginTop = "60%";

        var bottomHundrethPlaceAddValue = Math.floor(Math.random() * 2) + 1;
        bottomHundrethPlace = bottomHundrethPlace + bottomHundrethPlaceAddValue;

    }


}