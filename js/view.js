var view = (function () {


    var clearPieces = function () {

            var piecesSec = document.getElementById("piecesSection");
            while (piecesSec.firstChild) {
                piecesSec.removeChild(piecesSec.firstChild);
            }
        },

        renderPieces = function (pieces) {

            clearPieces();
            var piecesSec = document.getElementById("piecesSection");

            pieces.forEach(function (p) {
                var pieceToAdd = document.createElement("button");
                pieceToAdd.setAttribute("id", p);
                pieceToAdd.setAttribute("class", "piece");
                pieceToAdd.disabled = true;
                pieceToAdd.addEventListener("click", function () {
                    controller.choosePiece(this.id)
                });
                //pieceToAdd.innerText = p;
                piecesSec.appendChild(pieceToAdd);
            });
        },


        allowClicking = function (pieces) {

            pieces.forEach(function (p) {
                var pieceToAddListenerTo = document.getElementById(p);
                pieceToAddListenerTo.disabled = false;
            });
        },

        disableClicking = function (pieces) {
            pieces.forEach(function (p) {
                var piece = document.getElementById(p);
                piece.disabled = true;
            });

        },


        highlightPiecesToGuess = function (piecesToGuess) {

            //to remove
/*            var pieceToGuessInfo = document.getElementById("answers");
            if (!pieceToGuessInfo) {
                pieceToGuessInfo = document.createElement("p");
                pieceToGuessInfo.setAttribute("id", "answers");
                var naviSection = document.getElementById("naviSection");
                naviSection.appendChild(pieceToGuessInfo);
            }
            pieceToGuessInfo.innerText = piecesToGuess;*/


            piecesToGuess.forEach(function (p) {
                var pieceToGuess = document.getElementById(p);
                pieceToGuess.setAttribute("class", "pieceToGuess");
            });

        },


        removeHighlightingOnPieces = function (piecesToGuess) {

            piecesToGuess.forEach(function (p) {
                var pieceToGuess = document.getElementById(p);
                pieceToGuess.setAttribute("class", "piece");
            });
        },


        changeCorrectPieceColor = function (pieceId) {

            var pieceToChange = document.getElementById(pieceId);
            pieceToChange.setAttribute("class", "correctPiece");

        },

        changeWrongPieceColor = function (pieceId) {

            var pieceToChange = document.getElementById(pieceId);
            pieceToChange.setAttribute("class", "wrongPiece");

        },



        showHighlightButton = function () {


            var highlightButton = document.createElement("button");
            highlightButton.setAttribute("id","highlightButton");
            highlightButton.innerText = "Highlight";

            highlightButton.addEventListener("click", function () {

                var config = {
                    numberOfPieces: getNumberOfPieces()
                };
                controller.startGame(config);
                controller.startLevel();

            });

            var highlightButtonSec=document.getElementById("highlightButtonSec");
            highlightButtonSec.appendChild(highlightButton);


        },

        getNumberOfPieces=function(){
        var piecesInput = document.getElementById("noOfPieces");
        var noOfPieces = parseInt(piecesInput.value);
        return noOfPieces;

        },

        showChangeNumberOfPiecesInput = function () {


            var changeNumberOfPiecesInput = document.createElement("input");
            changeNumberOfPiecesInput.setAttribute("type", "number");
            changeNumberOfPiecesInput.setAttribute("id", "noOfPieces");
            changeNumberOfPiecesInput.value = 4;
            changeNumberOfPiecesInput.step = 2;
            changeNumberOfPiecesInput.min = 4;
            changeNumberOfPiecesInput.max = 100;
            changeNumberOfPiecesInput.addEventListener("input", function () {
                controller.setNumberOfPieces(parseInt(this.value));

            });

            var noOfPiecesSpan = document.getElementById("noOfPiecesSpan");
            noOfPiecesSpan.appendChild(changeNumberOfPiecesInput);


        },

        showChangeTimeSection = function () {


            var changeTimeInput = document.createElement("input");
            changeTimeInput.setAttribute("type", "number");
            changeTimeInput.step = 1;
            changeTimeInput.min = 1;
            changeTimeInput.max = 60;
            changeTimeInput.value = 2;
            changeTimeInput.addEventListener("input", function () {
                controller.setHighlightTime(this.value * 1000);
            });

            var highlightTimeSpan = document.getElementById("highlightTimeSpan");
            highlightTimeSpan.appendChild(changeTimeInput);


        },

        showHeader=function(){
            var header = document.getElementById("header");
            header.style.display="block";

        },


        showNaviSection = function () {

            var naviSection = document.getElementById("naviSection");
            naviSection.style.display="block";

            var piecesSection = document.getElementById("piecesSection");
            piecesSection.style.display="block";

            var welcomeSection = document.getElementById("welcome");
            welcomeSection.style.display="none";

            var gameStatus= document.getElementById("gameStatus");
            gameStatus.style.display="block";


            showChangeNumberOfPiecesInput();
            showChangeTimeSection();
            showHighlightButton();



        },

        updateLevelSection = function (level) {
            var levelInfo = document.getElementById("level");
            levelInfo.innerText = level;

        },

        updateResultSection=function(result){
            var resultSection = document.getElementById("gameStatus");
            resultSection.innerText = result;
        },

        updateNumberOfPiecesToGuessInfo= function(numberOfPiecesToGuess){
            var numberOfPiecesToGuessInfo = document.getElementById("piecesToGuessNo");
            numberOfPiecesToGuessInfo.innerText = numberOfPiecesToGuess;

        },

        updateNumberOfPiecesShownInInput = function(numberOfPiecesShown){
            var changeNumberOfPiecesInput = document.getElementById("noOfPieces");
            changeNumberOfPiecesInput.value = numberOfPiecesShown;

        };



    return {
        'clearPieces': clearPieces,
        'renderPieces': renderPieces,
        'showNaviSection': showNaviSection,
        'highlightPiecesToGuess': highlightPiecesToGuess,
        'removeHighlightingOnPieces': removeHighlightingOnPieces,
        'allowClicking': allowClicking,
        'changeCorrectPieceColor': changeCorrectPieceColor,
        'changeWrongPieceColor': changeWrongPieceColor,
        'disableClicking': disableClicking,
        'updateLevelSection': updateLevelSection,
        'updateResultSection': updateResultSection,
        'updateNumberOfPiecesToGuessInfo': updateNumberOfPiecesToGuessInfo,
        'updateNumberOfPiecesShownInInput': updateNumberOfPiecesShownInInput,
        'showHeader': showHeader

    }

})();
