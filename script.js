var playerDiv = document.getElementById("playerDiv");
var plantsArea = document.getElementById("plantsArea");
var groundArea1 = document.getElementById("groundArea1");
var topFence = document.getElementById("topFence");
var leftFence = document.getElementById("leftFence");
var rightFence = document.getElementById("rightFence");
var bottomFence = document.getElementById("bottomFence");

var animationNumber = 0;

var walkRightAnimationId = 0;
var walkLeftAnimationId = 0;
var walkUpAnimationId = 0;
var walkDownAnimationId = 0;

var coinId = 1;
var coinNumber = 1;
var coins = [];

function move(event) {
    var keycode = event.which;

    if (keycode == 39 || keycode == 68) {

        if (walkRightAnimationId == 0) {
            walkLeftAnimationId = "None";
            walkUpAnimationId = "None";
            walkDownAnimationId = "None";
            animationNumber = 0;
            walkRightAnimationId = setInterval(walkRight, 1);
        }

    } else if (keycode == 37 || keycode == 65) {

        if (walkLeftAnimationId == 0) {

            walkRightAnimationId = "None";
            walkUpAnimationId = "None";
            walkDownAnimationId = "None";
            animationNumber = 0;
            walkLeftAnimationId = setInterval(walkLeft, 1);

        }

    } else if (keycode == 38 || keycode == 87) {

        if (walkUpAnimationId == 0) {

            walkRightAnimationId = "None";
            walkLeftAnimationId = "None";
            walkDownAnimationId = "None";
            animationNumber = 0;
            walkUpAnimationId = setInterval(walkUp, 1);
        }

    } else if (keycode == 40 || keycode == 83) {

        if (walkDownAnimationId == 0) {
            walkRightAnimationId = "None";
            walkLeftAnimationId = "None";
            walkUpAnimationId = "None";
            animationNumber = 0;
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
    } else if (playerDivMarginLeft == 1084 && playerDivMarginTop > 455 && playerDivMarginTop < 757) {
        // Vertical InSide Wall
    } else if (playerDivMarginLeft == 536 && playerDivMarginTop > 560 && playerDivMarginTop < 735) {
        // Left Side Computer Tables
    } else if (playerDivMarginLeft == 1200 && playerDivMarginTop < 735 && playerDivMarginTop > 560) {
        // Left Side Computer Tables
    } else if (playerDivMarginLeft == 580 && playerDivMarginTop < 862 && playerDivMarginTop > 756) {
        // Middle Horizontal Wall Side Left
    } else if (playerDivMarginLeft == 628 && playerDivMarginTop > 995 && playerDivMarginTop < 1113) {
        // Bellow Right Table
    } else if (playerDivMarginLeft == 975 && playerDivMarginTop > 953 && playerDivMarginTop < 1182) {
        // Bellow Middle Table
    } else if (playerDivMarginLeft == 1516 && playerDivMarginTop > 995 && playerDivMarginTop < 1113) {
        // Bellow Left Table
    } else {

        playerDivMarginLeft += 1;
        playerImagePositionX -= 50;

        playerDiv.style.marginLeft = playerDivMarginLeft + "px";

        playerDiv.style.backgroundPositionY = "-50px";

        if (animationNumber == 0) {
            playerDiv.style.backgroundPositionX = playerImagePositionX + "px";
        }

        animationNumber = animationNumber + 1;

        if (animationNumber >= 50) {
            animationNumber = 0;
        }


        var numOfCoins = coins.length;

        if (numOfCoins >= 1) {

            for (c = 0; c < numOfCoins; c++) {

                var coin = document.getElementById("coin" + coins[c]);

                var playerRightPoint = playerDivMarginLeft + 50;

                var coinComputedStyle = window.getComputedStyle(coin);
                var coinLeftPoint = parseFloat(coinComputedStyle.marginLeft) + 280;
                var coinTopPoint = parseFloat(coinComputedStyle.marginTop) + 206;

                if (playerRightPoint == coinLeftPoint && (playerDivMarginTop + 50) > coinTopPoint && playerDivMarginTop < (coinTopPoint + 20)) {

                    // coin.style.marginLeft = (coinComputedStyle.marginLeft - 25) + "px";
                    // coin.style.marginTop = (coinComputedStyle.marginTop - 25) + "px";
                    coin.className = "bomb";

                }

            }

        }
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
    } else if (playerDivMarginLeft == 1695 && playerDivMarginTop < 862 && playerDivMarginTop > 756) {
        // Middle Horizontal Wall Side Right
    } else if (playerDivMarginLeft == 1067 && playerDivMarginTop < 735 && playerDivMarginTop > 560) {
        // Left Side Computer Tables
    } else if (playerDivMarginLeft == 1176 && playerDivMarginTop > 455 && playerDivMarginTop < 757) {
        // Vertical InSide Wall
    } else if (playerDivMarginLeft == 1738 && playerDivMarginTop < 735 && playerDivMarginTop > 560) {
        // Right Side Computer Tables
    } else if (playerDivMarginLeft == 775 && playerDivMarginTop > 995 && playerDivMarginTop < 1113) {
        // Bellow Right Table
    } else if (playerDivMarginLeft == 1279 && playerDivMarginTop > 953 && playerDivMarginTop < 1182) {
        // Bellow Middle Table
    } else if (playerDivMarginLeft == 1666 && playerDivMarginTop > 995 && playerDivMarginTop < 1113) {
        // Bellow Left Table
    } else {

        playerDivMarginLeft -= 1;
        playerImagePositionX -= 50;

        playerDiv.style.marginLeft = playerDivMarginLeft + "px";

        playerDiv.style.backgroundPositionY = "-100px";

        if (animationNumber == 0) {
            playerDiv.style.backgroundPositionX = playerImagePositionX + "px";
        }

        animationNumber = animationNumber + 1;

        if (animationNumber >= 50) {
            animationNumber = 0;
        }

        var numOfCoins = coins.length;

        if (numOfCoins >= 1) {

            for (c = 0; c < numOfCoins; c++) {

                var coin = document.getElementById("coin" + coins[c]);

          
                var coinComputedStyle = window.getComputedStyle(coin);
                var coinLeftPoint = parseFloat(coinComputedStyle.marginLeft) + 270;
                var coinTopPoint = parseFloat(coinComputedStyle.marginTop) + 206;

                if (playerDivMarginLeft == (coinLeftPoint) && (playerDivMarginTop + 50) > coinTopPoint && playerDivMarginTop < (coinTopPoint + 20)) {

                    // coin.style.marginLeft = (coinComputedStyle.marginLeft - 25) + "px";
                    // coin.style.marginTop = (coinComputedStyle.marginTop - 25) + "px";
                    coin.className = "bomb";

                }

            }

        }

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
    } else if (playerDivMarginTop == 862 && playerDivMarginLeft > 580 && playerDivMarginLeft < 1695) {
        // Middle Horizontal Wall
    } else if (playerDivMarginTop == 735 && playerDivMarginLeft > 536 && playerDivMarginLeft < 1067) {
        // Left Side Computer Tables
    } else if (playerDivMarginTop == 735 && playerDivMarginLeft > 1200 && playerDivMarginLeft < 1738) {
        // right Side Computer Tables
    } else if (playerDivMarginTop == 1113 && playerDivMarginLeft > 628 && playerDivMarginLeft < 775) {
        // Bellow Right Table
    } else if (playerDivMarginTop == 1182 && playerDivMarginLeft > 975 && playerDivMarginLeft < 1279) {
        // Bellow Middle Table
    } else if (playerDivMarginTop == 1113 && playerDivMarginLeft > 1516 && playerDivMarginLeft < 1666) {
        // Bellow Left Table
    } else {

        playerDivMarginTop -= 0.5;
        playerImagePositionX -= 50;

        playerDiv.style.marginTop = playerDivMarginTop + "px";

        playerDiv.style.backgroundPositionY = "-200px";

        if (animationNumber == 0) {
            playerDiv.style.backgroundPositionX = playerImagePositionX + "px";
        }

        animationNumber = animationNumber + 1;

        if (animationNumber >= 50) {
            animationNumber = 0;
        }

        var numOfCoins = coins.length;

        if (numOfCoins >= 1) {

            for (c = 0; c < numOfCoins; c++) {

                var coin = document.getElementById("coin" + coins[c]);

                var coinComputedStyle = window.getComputedStyle(coin);
                var coinLeftPoint = parseFloat(coinComputedStyle.marginLeft) + 280;
                var coinTopPoint = parseFloat(coinComputedStyle.marginTop) + 206;

                if (playerDivMarginTop == coinTopPoint && (playerDivMarginLeft + 55) > coinLeftPoint && playerDivMarginLeft < (coinLeftPoint)) {

                    // coin.style.marginLeft = (coinComputedStyle.marginLeft - 25) + "px";
                    // coin.style.marginTop = (coinComputedStyle.marginTop - 25) + "px";
                    coin.className = "bomb";

                }

            }
        }

    }

}

function walkDown() {
    var playerImagePositionX = parseFloat(playerDivComputedStyle.backgroundPositionX);

    var bottomFenceComputedStyle = window.getComputedStyle(bottomFence);
    var bottomFenceMarginTop = parseFloat(bottomFenceComputedStyle.marginTop);

    var fanceTouchingPoint = bottomFenceMarginTop;

    if (fanceTouchingPoint == playerDivMarginTop) {

    } else if (playerDivMarginTop == 1353 && 523 < playerDivMarginLeft && playerDivMarginLeft < 1106) {
        // Door Left Side InsideF
    } else if (playerDivMarginTop == 1353 && 1172 < playerDivMarginLeft && playerDivMarginLeft < 1809) {
        // Door right Side Inside
    } else if (playerDivMarginTop == 356 && 420 < playerDivMarginLeft && playerDivMarginLeft < 1862) {
        // Top OutSide 
    } else if (playerDivMarginTop == 756 && playerDivMarginLeft > 580 && playerDivMarginLeft < 1695) {
        // Middle Horizontal Wall 
    } else if (playerDivMarginTop == 560 && playerDivMarginLeft > 536 && playerDivMarginLeft < 1067) {
        // Left Side Computer Tables
    } else if (playerDivMarginTop == 560 && playerDivMarginLeft > 1200 && playerDivMarginLeft < 1738) {
        // right Side Computer Tables
    } else if (playerDivMarginTop == 995 && playerDivMarginLeft > 628 && playerDivMarginLeft < 775) {
        // Bellow Right Table
    } else if (playerDivMarginTop == 953 && playerDivMarginLeft > 975 && playerDivMarginLeft < 1279) {
        // Bellow Middle Table
    } else if (playerDivMarginTop == 995 && playerDivMarginLeft > 1516 && playerDivMarginLeft < 1666) {
        // Bellow Left Table
    } else {

        playerDivMarginTop += 0.5;
        playerImagePositionX -= 50;

        playerDiv.style.marginTop = playerDivMarginTop + "px";

        playerDiv.style.backgroundPositionY = "-150px";

        if (animationNumber == 0) {
            playerDiv.style.backgroundPositionX = playerImagePositionX + "px";
        }

        animationNumber = animationNumber + 1;

        if (animationNumber >= 50) {
            animationNumber = 0;
        }

        var numOfCoins = coins.length;

        if (numOfCoins >= 1) {

            for (c = 0; c < numOfCoins; c++) {

                var coin = document.getElementById("coin" + coins[c]);

                var playerRightPoint = playerDivMarginTop + 50;

                var coinComputedStyle = window.getComputedStyle(coin);
                var coinLeftPoint = parseFloat(coinComputedStyle.marginLeft) + 280;
                var coinTopPoint = parseFloat(coinComputedStyle.marginTop) + 206;

                if (playerRightPoint == coinTopPoint && (playerDivMarginLeft + 55) > coinLeftPoint && playerDivMarginLeft < (coinLeftPoint)) {

                    // coin.style.marginLeft = (coinComputedStyle.marginLeft - 25) + "px";
                    // coin.style.marginTop = (coinComputedStyle.marginTop - 25) + "px";
                    coin.className = "bomb";

                }

            }
        }

    }

}

function stop() {

    var keycode = event.which;

    if (keycode == 39 || keycode == 68 || keycode == 37 || keycode == 65 || keycode == 38 || keycode == 87 || keycode == 40 || keycode == 83) {

        walkRightStop();
        walkLeftStop();
        walkUpStop();
        walkDownStop();
        animationNumber = 0;

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
    // alert("playerDivMarginLeft: " + playerDivMarginLeft + "-playerDivMarginTop: " + playerDivMarginTop);

    var numOfCoins = coins.length;

    for (c = 0; c < numOfCoins; c++) {

        var coin = document.getElementById("coin" + coins[c]);

        var playerLeftPoint = playerDivMarginLeft;
        var playerTopPoint = playerDivMarginTop;
        var playerRightPoint = playerDivMarginLeft + 50;
        var playerBottopPoint = playerDivMarginLeft + 50;

        var coinComputedStyle = window.getComputedStyle(coin);
        var coinLeftPoint = parseFloat(coinComputedStyle.marginLeft);
        var coinTopPoint = parseFloat(coinComputedStyle.marginTop);
        var coinRightPoint = parseFloat(coinComputedStyle.marginLeft) + 20;
        var coinBottomPoint = parseFloat(coinComputedStyle.marginTop) + 20;


        alert("     playerLeftPoint:" + playerLeftPoint + "     playerTopPoint:" + playerTopPoint + "     playerRightPoint:" + playerRightPoint + "     playerBottopPoint:" + playerBottopPoint + "     coinLeftPoint:" + coinLeftPoint + "     coinTopPoint:" + coinTopPoint + "     coinRightPoint:" + coinRightPoint + "     coinBottomPoint:" + coinBottomPoint);

    }
}

function onloadMoments() {
    setInterval(genarateCoins, 100);
}


function genarateCoins() {

    if (coinNumber < 50) {
        var coin = document.createElement("div");
        coin.className = "coin";
        coin.id = "coin" + coinId;
        coins.push(coinId);
        coinId = coinId + 1;
        groundArea1.appendChild(coin);

        coinNumber = coinNumber + 1;

        var groundAreaWidth = groundArea1.offsetWidth;
        var groundAreaHeight = groundArea1.offsetHeight;

        var x3 = Math.floor(Math.random() * (groundAreaWidth - 40));
        var y3 = Math.floor(Math.random() * (groundAreaHeight - 40));

        coin.style.marginLeft = x3 + "px";
        coin.style.marginTop = y3 + "px";
    }

  
}











// Timer

var hoursTag = document.getElementById("hours");
var minutesTag;
var secondsTag;

var hoursText = document.getElementById("hours").innerHTML;
var minutesText;
var secondsText;

var updatedSeconds;

var startBtnStatus = false;
var startBtnAnimationNumber = 0;

function startBtn() {
    secondsTag = document.getElementById("seconds");
    secondsText = document.getElementById("seconds").innerHTML;

    minutesTag = document.getElementById("minutes");
    minutesText = document.getElementById("minutes").innerHTML;

    if (secondsText == "00") {

        if (parseInt(minutesText) == 0) {
            clearInterval(startBtnAnimationNumber);
        } else {
            var minutes = parseInt(minutesText);
            minutes = minutes - 1;

            minutesTag.innerHTML = "0" + minutes.toString();

            secondsTag.innerHTML = "59";
            updatedSeconds = 59;
        }

    } else {
        updatedSeconds = updatedSeconds - 1;

        if (updatedSeconds < 10) {
            secondsTag.innerHTML = "0" + updatedSeconds.toString();
        } else {
            secondsTag.innerHTML = updatedSeconds.toString();
        }

    }
}

function timerStar() {

    if (startBtnStatus == false) {

        startBtnAnimationNumber = setInterval(startBtn, 1000);
        startBtnStatus = true;
    }

}

