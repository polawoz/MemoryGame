"use strict";
var game = (function () {

    var initialNumberOfPieces = 4,
        currentNumberOfPieces = 4,
        numberOfPiecesToGuess = 1,
        numberOfPiecesLeftToGuess = 1,
        piecesToGuess = [],
        piecesGuessed = [],
        currentLevel = 0,

        startGame = function (config) {
            if (config && config.numberOfPieces) {
                currentNumberOfPieces = config.numberOfPieces;


            } else {
                currentNumberOfPieces = initialNumberOfPieces;
            }

            currentLevel = (currentNumberOfPieces - 4) / 2;
            numberOfPiecesToGuess = currentLevel + 1;
            numberOfPiecesLeftToGuess = numberOfPiecesToGuess;
            piecesToGuess = [];
            piecesGuessed = [];
            generatePiecesToGuess();

        },

        getPieces = function () {

            var i,
                pieces = [];

            for (i = 0; i < currentNumberOfPieces; i++) {
                pieces.push("pieceNo" + i);
            }
            return pieces;
        },

        generatePiecesToGuess = function () {

            while (piecesToGuess.length < numberOfPiecesToGuess) {
                var pieceToGuess = "pieceNo" + Math.floor(Math.random() * currentNumberOfPieces);

                if (!piecesToGuess.includes(pieceToGuess)) {
                    piecesToGuess.push(pieceToGuess);
                }
            }
        },


        choosePiece = function (pieceId) {

            var result;
            if (numberOfPiecesLeftToGuess > 0) {
                result = verifyChosenPiece(pieceId);
            }

            if (piecesGuessed.length === piecesToGuess.length) {
                result = "level completed!";
                numberOfPiecesLeftToGuess = 0;
                moveToNextLevel();
            }
            return result;
        },

        verifyChosenPiece = function (pieceId) {

            var result;

            if (piecesGuessed.includes(pieceId)) {
                result = "Wrong piece!";
                return result;
            }

            if (piecesToGuess.includes(pieceId)) {
                piecesGuessed.push(pieceId);
                numberOfPiecesLeftToGuess = numberOfPiecesLeftToGuess - 1;
                result = "correct";
            }
            else {
                result = "Wrong piece!";
            }

            return result;

        },


        moveToNextLevel = function () {

            currentNumberOfPieces = currentNumberOfPieces + 2;

        },

        getCurrentNumberOfPieces = function () {
            return currentNumberOfPieces;
        },


        getLevel = function () {
            return currentLevel;
        },


        getPiecesToGuess = function () {

            return piecesToGuess;
        },

        getNumberOfPiecesLeftToGuess = function () {
            return numberOfPiecesLeftToGuess;
        },

        getNumberOfPiecesToGuess = function () {
            return numberOfPiecesToGuess;
        };


    return {
        'startGame': startGame,
        'getPieces': getPieces,
        'choosePiece': choosePiece,
        'moveToNextLevel': moveToNextLevel,
        'getLevel': getLevel,
        'getPiecesToGuess': getPiecesToGuess,
        'getNumberOfPiecesLeftToGuess': getNumberOfPiecesLeftToGuess,
        'getNumberOfPiecesToGuess': getNumberOfPiecesToGuess,
        'getCurrentNumberOfPieces': getCurrentNumberOfPieces

    }
})();
