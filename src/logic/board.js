import { WINNER_COMBOS } from "../constants.js";

export const checkWinnerFrom = (boardToCheack) => {
  // revisamos todas las combinaciones ganadoras
  // para ver si X u 0 gano
  for (const combo of WINNER_COMBOS) {
    const [a, b, c] = combo;
    if (
      boardToCheack[a] &&
      boardToCheack[a] === boardToCheack[b] &&
      boardToCheack[a] === boardToCheack[c]
    ) {
      return boardToCheack[a];
    }
  }
  // si no hay un ganador
  return null;
};

export const checkEndGame = (newBoard) => {
  // revisamos si hay un empate
  // si no hay mas espacios vacios
  // en el tablero
  return newBoard.every((square) => square !== null);
};
