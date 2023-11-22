import React from "react";

interface Turn {
    player: string;
    square: {
        row: number;
        col: number;
    };
}

interface LogProps {
    turns: Turn[];
}

const Log: React.FC<LogProps> = ({ turns }) => {
    return (
        <ol id="log">
            {turns.map((turn) => (
                <li key={`${turn.square.row}${turn.square.col}`}>
                    {turn.player} selected {turn.square.row},{turn.square.col}
                </li>
            ))}
        </ol>
    );
};

export default Log;
