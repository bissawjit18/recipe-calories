import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';

const Cards = () => {
    const [cards, setCards] = useState([]);

    useEffect( () => {
        fetch('cards.json')
        .then(res => res.json())
        .then(data => setCards(data))
    }, [])

    return (
        <>
            
            <div className='md:w-3/5'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                {
                    cards.map((card, id) => <Card key={id} card={card}></Card>)
                }
                </div>
            </div>
        </>
    );
};

export default Cards;