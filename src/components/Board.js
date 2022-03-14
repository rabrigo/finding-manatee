import { useState } from 'react';
import Card from './Card';

function Board() {
    const [cards, setCards] = useState([
        { id: 1, img: '/images/manatee.png', status: "" },
        { id: 1, img: '/images/manatee.png', status: "" },
        { id: 2, img: '/images/whale.png', status: "" },
        { id: 2, img: '/images/whale.png', status: "" },
        { id: 3, img: '/images/jellyfish.png', status: "" },
        { id: 3, img: '/images/jellyfish.png', status: "" },
        { id: 4, img: '/images/starfish.png', status: "" },
        { id: 4, img: '/images/starfish.png', status: "" },
        { id: 5, img: '/images/shark.png', status: "" },
        { id: 5, img: '/images/shark.png', status: "" },
        { id: 6, img: '/images/coral.jpeg', status: "" },
        { id: 6, img: '/images/coral.jpeg', status: "" },
        { id: 7, img: '/images/octopus.png', status: "" },
        { id: 7, img: '/images/octopus.png', status: "" },
        { id: 8, img: '/images/shrimp.png', status: "" },
        { id: 8, img: '/images/shrimp.png', status: "" }
    ].sort(() => Math.random() - 0.5))

    // function Board() {
    //     const [cards, setCards] = useState([
    //         { value: 'manatee', img: '/images/manatee.png', status: ""},
    //         { value: 'manatee', img: '/images/manatee.png', status: ""},
    //         { value: 'whale', img: '/images/whale.png', status: ""},
    //         { value: 'whale', img: '/images/whale.png', status: ""},
    //         { value: 'jellyfish', img: '/images/jellyfish.png', status: ""},
    //         { value: 'jellyfish', img: '/images/jellyfish.png', status: ""},
    //         { value: 'starfish', img: '/images/starfish.png', status: ""},
    //         { value: 'starfish', img: '/images/starfish.png', status: ""},
    //         { value: 'shark', img: '/images/shark.png', status: ""},
    //         { value: 'shark', img: '/images/shark.png', status: ""},
    //         { value: 'coral', img: '/images/coral.jpeg', status: ""},
    //         { value: 'coral', img: '/images/coral.jpeg', status: ""},
    //         { value: 'octopus', img: '/images/octopus.png', status: ""},
    //         { value: 'octopus', img: '/images/octopus.png', status: ""},
    //         { value: 'shrimp', img: '/images/shrimp.png', status: ""},
    //         { value: 'shrimp', img: '/images/shrimp.png', status: ""},
    //     ].sort(() => Math.random() - 0.5))

    // when previous is -1 then no card id is the previous id
    const [previous, setPrevious] = useState(-1);
    const [cardsPressed, setCardsPressed] = useState(0);

    const checkCard = (current) => {
        if(cards[current].id == cards[previous].id) {
            cards[current].status = "correct";
            cards[previous].status = "correct";
            setCards([...cards]);
            setPrevious(-1);
            setCardsPressed(0);
        } else {
            cards[current].status = "incorrect";
            cards[previous].status = "incorrect";
            setCards([...cards]);
            setTimeout(() => {
                cards[current].status = "";
                cards[previous].status = "";
                setCards([...cards]);
                setPrevious(-1);
                setCardsPressed(0);
            }, 1000)
        }
    }

    const handleClick = (id) => {
        if (cardsPressed < 2) {
            if (previous === -1) {
                if (cards[id].status !== "correct"){
                    setCardsPressed(cardsPressed + 1);
                    setPrevious(id);
                    cards[id].status = "active";
                    setCards([...cards]);
                }
            } else {
                if (id !== previous)
                {
                    if (cards[id].status !== "correct")
                    {
                        setCardsPressed(cardsPressed + 1);
                        checkCard(id);
                    }
                }
            }
        }
    }

    return (
        <div className="board">
            { cards.map((card, index) => (
                <Card key={index} card={card} id={index} handleClick={handleClick}/>
            ))}
        </div>
    );
}

export default Board;