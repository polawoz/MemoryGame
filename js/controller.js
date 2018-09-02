var controller = function () {

    var highlightTime = 2000,

        openGame = function () {

            view.showHeader();
            view.showNaviSection();

            startGame();

        },
        startGame = function (config) {

            game.startGame(config);
            view.renderPieces(game.getPieces());
        },

        startLevel = function () {



            view.updateResultSection("during level");

            view.highlightPiecesToGuess(game.getPiecesToGuess());

            setTimeout(function () {
                view.removeHighlightingOnPieces(game.getPiecesToGuess());
                view.allowClicking(game.getPieces());

            }, highlightTime);

        },

        choosePiece = function (pieceId) {

            var currentPieces = game.getPieces();

            var result = game.choosePiece(pieceId);

            if (result == "level completed!") {
                view.changeCorrectPieceColor(pieceId);
                view.updateResultSection(result);
                setTimeout(nextLevel, 2000);
                view.disableClicking(currentPieces);

            }

            else if (result == "correct") {
                view.changeCorrectPieceColor(pieceId);
            }

            else if (result == "Wrong piece!") {
                view.changeWrongPieceColor(pieceId);
                view.updateResultSection(result);
                setTimeout(repeatLevel, 2000);
                view.disableClicking(game.getPieces());

            }
        },

        repeatLevel = function () {

            var config = {
                numberOfPieces: game.getCurrentNumberOfPieces()
            }

            startGame(config);
            startLevel();

        },

        nextLevel = function () {

            var config = {
                numberOfPieces: game.getCurrentNumberOfPieces()
            }

            startGame(config);
            view.updateLevelSection(game.getLevel());
            view.updateNumberOfPiecesToGuessInfo(game.getNumberOfPiecesToGuess());
            view.updateNumberOfPiecesShownInInput(game.getCurrentNumberOfPieces());
            startLevel();

        },


        setNumberOfPieces = function (number) {

            var config = {
                numberOfPieces: number
            }
            startGame(config);
            view.updateResultSection("before starting level");
            view.updateLevelSection(game.getLevel());
            view.updateNumberOfPiecesToGuessInfo(game.getNumberOfPiecesToGuess());

        },


        setHighlightTime = function (milliseconds) {
            highlightTime = milliseconds;
        };


    return {
        'openGame': openGame,
        'startGame': startGame,
        'choosePiece': choosePiece,
        'nextLevel': nextLevel,
        'setNumberOfPieces': setNumberOfPieces,
        'setHighlightTime': setHighlightTime,
        'startLevel': startLevel
    }
}();
