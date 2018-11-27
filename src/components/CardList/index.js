import React from 'react';

import EmptyMsg from '../EmptyMsg';

export default ({ cards=[] }) => (
    cards.length > 0 ?
        cards.map(card => (
            <div key={card.id}>
                <p>{card.name}</p>
            </div>
        )) :
        <EmptyMsg>This deck has no cards. Add some with the '+' above.</EmptyMsg>
);