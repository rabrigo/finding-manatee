import { useState } from 'react';
import Square from './Square';

function Grid() {
    const [cards, setCards] = useState([
        { id: 1, img: '/images/manatee.png', status: ""},
        { id: 1, img: '/images/manatee.png', status: ""},
        { id: 2, img: '/images/whale.png', status: ""},
        { id: 2, img: '/images/whale.png', status: ""},
        { id: 3, img: '/images/jellyfish.png', status: ""},
        { id: 3, img: '/images/jellyfish.png', status: ""},
        { id: 4, img: '/images/starfish.png', status: ""},
        { id: 4, img: '/images/starfish.png', status: ""},
        { id: 5, img: '/images/shark.png', status: ""},
        { id: 5, img: '/images/shark.png', status: ""},
        { id: 6, img: '/images/coral.jpeg', status: ""},
        { id: 6, img: '/images/coral.jpeg', status: ""},
        { id: 7, img: '/images/octopus.png', status: ""},
        { id: 7, img: '/images/octopus.png', status: ""},
        { id: 8, img: '/images/shrimp.png', status: ""},
        { id: 8, img: '/images/shrimp.png', status: ""},
    ].sort(() => Math.random() - 0.5))

    const [prev, setPrev] = useState(-1);

    const handleClick = (id) => {
        cards[id].status = "active";
        setCards([...cards]);
    }

    return (
        <div className="grid">
            { cards.map((card, index) => (
                <Square key={index} card={card} id={index} handleClick={handleClick}/>
            ))}
        </div>
    );
}

export default Grid;