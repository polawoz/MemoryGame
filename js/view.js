"use strict";
var view = (function () {


    var clearPieces = function () {

            var piecesSec = document.getElementById("piecesSection");
            while (piecesSec.firstChild) {
                piecesSec.removeChild(piecesSec.firstChild);
            }
        },

        renderPieces = function (pieces, choosePieceCb) {

            clearPieces();
            var piecesSec = document.getElementById("piecesSection");

            pieces.forEach(function (p) {
                var pieceToAdd = document.createElement("button");
                pieceToAdd.setAttribute("id", p);
                pieceToAdd.setAttribute("class", "piece");
                pieceToAdd.classList.add("blocked");

                pieceToAdd.addEventListener("click", choosePieceCb);

                piecesSec.appendChild(pieceToAdd);
            });
        },


        allowClicking = function (pieces) {

            pieces.forEach(function (p) {
                var piece = document.getElementById(p);
                piece.classList.remove("blocked");

            });
        },

        disableClicking = function (pieces) {
            pieces.forEach(function (p) {
                var piece = document.getElementById(p);
                piece.classList.add("blocked");

            });
        },

        highlightPiecesToGuess = function (piecesToGuess) {

            blockButtons();

            piecesToGuess.forEach(function (p) {
                var pieceToGuess = document.getElementById(p);
                pieceToGuess.classList.add("pieceToGuess");

            });

        },


        blockButtons= function(){

            var highlightButton,
                noOfPiecesInput,
                changeTimeInput;

            highlightButton = document.getElementById("highlightButton");
            highlightButton.classList.add("blocked");

            noOfPiecesInput = document.getElementById("noOfPieces");
            noOfPiecesInput.classList.add("blocked");

            changeTimeInput = document.getElementById("changeTime");
            changeTimeInput.classList.add("blocked");

        },

        unblockButtons=function(){

            var highlightButton,
                noOfPiecesInput,
                changeTimeInput;

            highlightButton = document.getElementById("highlightButton");
            highlightButton.classList.remove("blocked");

            noOfPiecesInput = document.getElementById("noOfPieces");
            noOfPiecesInput.classList.remove("blocked");

            changeTimeInput = document.getElementById("changeTime");
            changeTimeInput.classList.remove("blocked");


        },

        removeHighlightingOnPieces = function (piecesToGuess) {

            piecesToGuess.forEach(function (p) {
                var pieceToGuess = document.getElementById(p);
                pieceToGuess.classList.remove("pieceToGuess");

            });
            unblockButtons();
        },

        changeCorrectPieceColor = function (pieceId) {

            var pieceToChange = document.getElementById(pieceId);
            pieceToChange.classList.add("correctPiece");

        },

        changeWrongPieceColor = function (pieceId) {

            var pieceToChange = document.getElementById(pieceId);
            pieceToChange.classList.add("wrongPiece");

        },

        showHighlightButton = function (startLevelFromHighlightButtonCb) {


            var highlightButton,
                highlightButtonSec;

            highlightButton = document.createElement("button");
            highlightButton.setAttribute("id","highlightButton");
            highlightButton.innerText = "Highlight";

            highlightButton.addEventListener("click", startLevelFromHighlightButtonCb);

            highlightButtonSec=document.getElementById("highlightButtonSec");
            highlightButtonSec.appendChild(highlightButton);
        },

        getNumberOfPieces=function(){
        var piecesInput = document.getElementById("noOfPieces"),
        noOfPieces = parseInt(piecesInput.value);
        return noOfPieces;

        },

        showChangeNumberOfPiecesInput = function (setNumberOfPiecesCb) {

            var changeNumberOfPiecesInput,
                noOfPiecesSpan;

            changeNumberOfPiecesInput = document.createElement("input");
            changeNumberOfPiecesInput.setAttribute("type", "number");
            changeNumberOfPiecesInput.setAttribute("id", "noOfPieces");
            changeNumberOfPiecesInput.value = 4;
            changeNumberOfPiecesInput.step = 2;
            changeNumberOfPiecesInput.min = 4;
            changeNumberOfPiecesInput.max = 100;
            changeNumberOfPiecesInput.addEventListener("input", setNumberOfPiecesCb);

            noOfPiecesSpan = document.getElementById("noOfPiecesSpan");
            noOfPiecesSpan.appendChild(changeNumberOfPiecesInput);

        },

        showChangeTimeSection = function (setHighlightTimeCb) {

            var changeTimeInput,
                highlightTimeSpan;

            changeTimeInput = document.createElement("input");
            changeTimeInput.setAttribute("id", "changeTime");
            changeTimeInput.setAttribute("type", "number");
            changeTimeInput.step = 1;
            changeTimeInput.min = 1;
            changeTimeInput.max = 60;
            changeTimeInput.value = 2;
            changeTimeInput.addEventListener("input", setHighlightTimeCb);

            highlightTimeSpan = document.getElementById("highlightTimeSpan");
            highlightTimeSpan.appendChild(changeTimeInput);

        },

        showHeader=function(){
            var header = document.getElementById("header");
            header.style.display="block";
        },

        showNaviSection = function (setHighlightTimeCb, setNumberOfPiecesCb, startLevelFromHighlightButtonCb) {

            var naviSection,
                piecesSection,
                welcomeSection,
                gameStatus;

            naviSection = document.getElementById("naviSection");
            naviSection.style.display="block";

            piecesSection = document.getElementById("piecesSection");
            piecesSection.style.display="block";

            welcomeSection = document.getElementById("welcome");
            welcomeSection.style.display="none";

            gameStatus= document.getElementById("gameStatus");
            gameStatus.style.display="block";

            showChangeNumberOfPiecesInput(setNumberOfPiecesCb);
            showChangeTimeSection(setHighlightTimeCb);
            showHighlightButton(startLevelFromHighlightButtonCb);

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
        'showHeader': showHeader,
        'getNumberOfPieces': getNumberOfPieces

    }

})();
