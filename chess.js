// Initialise white pieces and which square they are on
var white = {
    white_queens_rook: 'a1',
    white_queens_knight: 'b1',
    white_queens_bishop: 'c1',
    white_queen: 'd1',
    white_king: 'e1',
    white_kings_bishop: 'f1',
    white_kings_knight: 'g1',
    white_kings_rook: 'h1',
    white_pawn1: 'a2',
    white_pawn2: 'b2',
    white_pawn3: 'c2',
    white_pawn4: 'd2',
    white_pawn5: 'e2',
    white_pawn6: 'f2',
    white_pawn7: 'g2',
    white_pawn8: 'h2',
};

// Initialise black pieces and which square they are on
var black = {
    black_queens_rook: 'a8',
    black_queens_knight: 'b8',
    black_queens_bishop: 'c8',
    black_queen: 'd8',
    black_king: 'e8',
    black_kings_bishop: 'f8',
    black_kings_knight: 'g8',
    black_kings_rook: 'h8',
    black_pawn1: 'a7',
    black_pawn2: 'b7',
    black_pawn3: 'c7',
    black_pawn4: 'd7',
    black_pawn5: 'e7',
    black_pawn6: 'f7',
    black_pawn7: 'g7',
    black_pawn8: 'h7',
};

// Initialise the board squares and whether or not there is a piece on the square
var board = {
    a1: 1,
    a2: 1,
    a3: 0,
    a4: 0,
    a5: 0,
    a6: 0,
    a7: 1,
    a8: 1,
    b1: 1,
    b2: 1,
    b3: 0,
    b4: 0,
    b5: 0,
    b6: 0,
    b7: 1,
    b8: 1,
    c1: 1,
    c2: 1,
    c3: 0,
    c4: 0,
    c5: 0,
    c6: 0,
    c7: 1,
    c8: 1,
    d1: 1,
    d2: 1,
    d3: 0,
    d4: 0,
    d5: 0,
    d6: 0,
    d7: 1,
    d8: 1,
    e1: 1,
    e2: 1,
    e3: 0,
    e4: 0,
    e5: 0,
    e6: 0,
    e7: 1,
    e8: 1,
    f1: 1,
    f2: 1,
    f3: 0,
    f4: 0,
    f5: 0,
    f6: 0,
    f7: 1,
    f8: 1,
    g1: 1,
    g2: 1,
    g3: 0,
    g4: 0,
    g5: 0,
    g6: 0,
    g7: 1,
    g8: 1,
    h1: 1,
    h2: 1,
    h3: 0,
    h4: 0,
    h5: 0,
    h6: 0,
    h7: 1,
    h8: 1,
};



// Find what white piece is on a square
function getPieceWhite(square) {
    for(var key in white) {
        if(white.hasOwnProperty(key) && white[key].indexOf(square) != -1) {
            return key;
        }
    }
    return "Not found";
};

// Find what black piece is on a square
function getPieceBlack(square) {
    for(var key in black) {
        if(black.hasOwnProperty(key) && black[key].indexOf(square) != -1) {
            return key;
        }
    }
    return "Not found";
};

// Find what piece is on a square
function getPiece(square) {
    for(var key in black) {
        if(black.hasOwnProperty(key) && black[key].indexOf(square) != -1) {
            return key;
        }
    }
    for(var key in white) {
        if(white.hasOwnProperty(key) && white[key].indexOf(square) != -1) {
            return key;
        }
    }
    return "Not found";
};

console.log(getPiece('a8'))

