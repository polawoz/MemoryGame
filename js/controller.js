"use strict";
var controller = function () {

    var highlightTime = 2000,

        openGame = function () {

            view.showHeader();
            view.showNaviSection(setHighlightTime, setNumberOfPieces, startLevelFromHighlightButton);
            view.renderPieces(game.getPieces(), choosePiece);

        },
        startGame = function (config) {

            game.startGame(config);
            view.renderPieces(game.getPieces(), choosePiece);
        },

        startLevel = function () {

            view.updateResultSection("during level");

            view.highlightPiecesToGuess(game.getPiecesToGuess());

            setTimeout(function () {
                view.removeHighlightingOnPieces(game.getPiecesToGuess());
                view.allowClicking(game.getPieces());

            }, highlightTime);

        },

        choosePiece = function (event) {

            var pieceId,
                currentPieces,
                result;

            pieceId = event.target.id;

            currentPieces = game.getPieces();

            result = game.choosePiece(pieceId);

            if (result === "level completed!") {
                view.changeCorrectPieceColor(pieceId);
                view.updateResultSection(result);
                setTimeout(nextLevel, 2000);
                view.disableClicking(currentPieces);
            }

            else if (result === "correct") {
                view.changeCorrectPieceColor(pieceId);
            }

            else if (result === "Wrong piece!") {
                view.changeWrongPieceColor(pieceId);
                view.updateResultSection(result);
                setTimeout(repeatLevel, 2000);
                view.disableClicking(game.getPieces());
            }
        },

        repeatLevel = function () {

            var config = {
                numberOfPieces: game.getCurrentNumberOfPieces()
            };

            startGame(config);
            startLevel();
        },

        nextLevel = function () {

            var currentNumberOfPieces = game.getCurrentNumberOfPieces();

            if(currentNumberOfPieces>=100){
                view.updateResultSection("all levels completed!");
            } else{

                var config = {
                    numberOfPieces: currentNumberOfPieces
                };

                startGame(config);
                view.updateLevelSection(game.getLevel());
                view.updateNumberOfPiecesToGuessInfo(game.getNumberOfPiecesToGuess());
                view.updateNumberOfPiecesShownInInput(game.getCurrentNumberOfPieces());
                startLevel();
            }
        },

        startLevelFromHighlightButton = function(){

            var config = {
                numberOfPieces: view.getNumberOfPieces()
            };

            game.startGame(config);
            view.renderPieces(game.getPieces(), choosePiece);

            startLevel();

         },


        setNumberOfPieces = function (event) {

            var config = {
                numberOfPieces: event.target.value
            };
            startGame(config);

            game.startGame(config);
            view.renderPieces(game.getPieces(), choosePiece);

            view.updateResultSection("before starting level");
            view.updateLevelSection(game.getLevel());
            view.updateNumberOfPiecesToGuessInfo(game.getNumberOfPiecesToGuess());

        },


        setHighlightTime = function (event) {
            highlightTime = event.target.value*1000;
        };


    return {
        'openGame': openGame,
        'startGame': startGame,
        'choosePiece': choosePiece,
        'nextLevel': nextLevel,
        'setNumberOfPieces': setNumberOfPieces,
        'setHighlightTime': setHighlightTime,
        'startLevel': startLevel,
        'startLevelFromHighlightButton': startLevelFromHighlightButton
    }
}();
