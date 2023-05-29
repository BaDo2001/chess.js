import { Chess } from '../src/chess'

describe('Board Tests', () => {
  const tests = [
    {
      fen: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
      board: [
        [
          { id: 'a8', square: 'a8', type: 'r', color: 'b' },
          { id: 'b8', square: 'b8', type: 'n', color: 'b' },
          { id: 'c8', square: 'c8', type: 'b', color: 'b' },
          { id: 'd8', square: 'd8', type: 'q', color: 'b' },
          { id: 'e8', square: 'e8', type: 'k', color: 'b' },
          { id: 'f8', square: 'f8', type: 'b', color: 'b' },
          { id: 'g8', square: 'g8', type: 'n', color: 'b' },
          { id: 'h8', square: 'h8', type: 'r', color: 'b' },
        ],
        [
          { id: 'a7', square: 'a7', type: 'p', color: 'b' },
          { id: 'b7', square: 'b7', type: 'p', color: 'b' },
          { id: 'c7', square: 'c7', type: 'p', color: 'b' },
          { id: 'd7', square: 'd7', type: 'p', color: 'b' },
          { id: 'e7', square: 'e7', type: 'p', color: 'b' },
          { id: 'f7', square: 'f7', type: 'p', color: 'b' },
          { id: 'g7', square: 'g7', type: 'p', color: 'b' },
          { id: 'h7', square: 'h7', type: 'p', color: 'b' },
        ],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [
          { id: 'a2', square: 'a2', type: 'p', color: 'w' },
          { id: 'b2', square: 'b2', type: 'p', color: 'w' },
          { id: 'c2', square: 'c2', type: 'p', color: 'w' },
          { id: 'd2', square: 'd2', type: 'p', color: 'w' },
          { id: 'e2', square: 'e2', type: 'p', color: 'w' },
          { id: 'f2', square: 'f2', type: 'p', color: 'w' },
          { id: 'g2', square: 'g2', type: 'p', color: 'w' },
          { id: 'h2', square: 'h2', type: 'p', color: 'w' },
        ],
        [
          { id: 'a1', square: 'a1', type: 'r', color: 'w' },
          { id: 'b1', square: 'b1', type: 'n', color: 'w' },
          { id: 'c1', square: 'c1', type: 'b', color: 'w' },
          { id: 'd1', square: 'd1', type: 'q', color: 'w' },
          { id: 'e1', square: 'e1', type: 'k', color: 'w' },
          { id: 'f1', square: 'f1', type: 'b', color: 'w' },
          { id: 'g1', square: 'g1', type: 'n', color: 'w' },
          { id: 'h1', square: 'h1', type: 'r', color: 'w' },
        ],
      ],
    },
    // checkmate
    {
      fen: 'r3k2r/ppp2p1p/2n1p1p1/8/2B2P1q/2NPb1n1/PP4PP/R2Q3K w kq - 0 8',
      board: [
        [
          { id: 'a8', square: 'a8', type: 'r', color: 'b' },
          null,
          null,
          null,
          { id: 'e8', square: 'e8', type: 'k', color: 'b' },
          null,
          null,
          { id: 'h8', square: 'h8', type: 'r', color: 'b' },
        ],
        [
          { id: 'a7', square: 'a7', type: 'p', color: 'b' },
          { id: 'b7', square: 'b7', type: 'p', color: 'b' },
          { id: 'c7', square: 'c7', type: 'p', color: 'b' },
          null,
          null,
          { id: 'f7', square: 'f7', type: 'p', color: 'b' },
          null,
          { id: 'h7', square: 'h7', type: 'p', color: 'b' },
        ],
        [
          null,
          null,
          { id: 'c6', square: 'c6', type: 'n', color: 'b' },
          null,
          { id: 'e6', square: 'e6', type: 'p', color: 'b' },
          null,
          { id: 'g6', square: 'g6', type: 'p', color: 'b' },
          null,
        ],
        [null, null, null, null, null, null, null, null],
        [
          null,
          null,
          { id: 'c4', square: 'c4', type: 'b', color: 'w' },
          null,
          null,
          { id: 'f4', square: 'f4', type: 'p', color: 'w' },
          null,
          { id: 'h4', square: 'h4', type: 'q', color: 'b' },
        ],
        [
          null,
          null,
          { id: 'c3', square: 'c3', type: 'n', color: 'w' },
          { id: 'd3', square: 'd3', type: 'p', color: 'w' },
          { id: 'e3', square: 'e3', type: 'b', color: 'b' },
          null,
          { id: 'g3', square: 'g3', type: 'n', color: 'b' },
          null,
        ],
        [
          { id: 'a2', square: 'a2', type: 'p', color: 'w' },
          { id: 'b2', square: 'b2', type: 'p', color: 'w' },
          null,
          null,
          null,
          null,
          { id: 'g2', square: 'g2', type: 'p', color: 'w' },
          { id: 'h2', square: 'h2', type: 'p', color: 'w' },
        ],
        [
          { id: 'a1', square: 'a1', type: 'r', color: 'w' },
          null,
          null,
          { id: 'd1', square: 'd1', type: 'q', color: 'w' },
          null,
          null,
          null,
          { id: 'h1', square: 'h1', type: 'k', color: 'w' },
        ],
      ],
    },
  ]

  tests.forEach(({ fen, board }) => {
    it('Board - ' + fen, () => {
      const chess = new Chess(fen)
      expect(chess.board()).toEqual(board)
    })
  })
})
