import React from 'react';

interface GameOverProps {
    winner: string | null; 
    restart: () => void; 
}

const GameOver: React.FC<GameOverProps> = ({ winner, restart }) => {
    return (
        <div id="game-over">
            <h2>Game Over!</h2>
            {winner && <p>{winner} won!</p>}
            {!winner && <p>Just a draw!</p>}
            <p>
                <button onClick={restart}>Rematch!</button>
            </p>
        </div>
    );
}

export default GameOver;
