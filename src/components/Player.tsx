import { ChangeEvent, useState } from 'react'
interface PlayerProps {
    name: string;
    symbol: string;
    isActive: boolean;
}


export default function Player({ name, symbol,isActive }: PlayerProps) {
    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(name);

    let editPlayName = <span className="player-name">{playerName}</span>;

    if (isEditing) {
        editPlayName = (
            <input
                type="text"
                value={playerName}
                onChange={handleChange}
            />
        );
    }

    function handleEdit() {
        setIsEditing((editing)=>!editing);
    }

    function handleChange(e:ChangeEvent<HTMLInputElement>) {
        setPlayerName(e.target.value);
    }



    return (

        <li className={isActive? 'active':undefined}>
            <span className="player">
                {editPlayName}
                < span className="player-symbol">{symbol}</span>
                < button onClick={handleEdit}>{isEditing ? 'Save' : 'Edit'}</button>
            </span>
        </li >

    );
}