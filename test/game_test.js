describe('Game', function () {
    it('should have 4 pieces after game start', function () {

        //arrange
        var pieces;

        //act
        game.startGame();

        //assert
        pieces = game.getPieces();
        expect(pieces.length).toBe(4);
    });

    it('one pieces should be to guess after game start', function () {

        //arrange
        var piecesToGuess;

        //act
        game.startGame();

        //assert
        piecesToGuess = game.getPiecesToGuess();
        expect(piecesToGuess.length).toBe(1);
    });

    it('should start game with configured number of pieces', function () {

        //arrange
        var pieces,
            config = {
                numberOfPieces: 6
            };
        //act
        game.startGame(config);

        //assert
        pieces = game.getPieces();
        expect(pieces.length).toBe(6);
    });


    it('should return correct piece info', function(){

        //arrange
        var config = {
            numberOfPieces: 8
        };
        game.startGame(config);
        var pieceToGuess = game.getPiecesToGuess()[0],
            result;

        //act
        result = game.choosePiece(pieceToGuess);

        //assert
        expect(result).toBe("correct");


    });


    it('should return wrong piece info double choice', function(){

        //arrange
        var config = {
            numberOfPieces: 6
        };
        game.startGame(config);
        var piecesToGuess = game.getPiecesToGuess(),
        result;


        //act
        game.choosePiece(piecesToGuess[1]);
        result = game.choosePiece(piecesToGuess[1]);

        //assert
        expect(result).toBe("Wrong piece!");


    });


    it('should return wrong piece info', function(){

        //arrange
        var config = {
            numberOfPieces: 6
        };
        game.startGame(config);
        var pieces = game.getPieces();
        var piecesToGuess = game.getPiecesToGuess();
        pieces.splice(pieces.indexOf(piecesToGuess[0]),1);
        pieces.splice(pieces.indexOf(piecesToGuess[1]),1);


        //act
        var result = game.choosePiece(pieces[1]);

        //assert
        expect(result).toBe("Wrong piece!");


    });

    it('should return level finished info', function(){

        //arrange
        var config = {
            numberOfPieces: 6
        };
        game.startGame(config);
        var piecesToGuess = game.getPiecesToGuess();
        game.choosePiece(piecesToGuess[0]);

        //act
        var result = game.choosePiece(piecesToGuess[1]);

        //assert
        expect(result).toBe("level completed!");


    });

    it('should update level', function(){

        //arrange
        var config = {
            numberOfPieces: 6
        };
        game.startGame(config);
        var levelBefore = game.getLevel();

        //act
        game.moveToNextLevel();
        var config2 = {
            numberOfPieces: game.getCurrentNumberOfPieces()
        };
        game.startGame(config2);

        //assert
        expect(game.getLevel()).toBe(levelBefore+1);


    });



});
