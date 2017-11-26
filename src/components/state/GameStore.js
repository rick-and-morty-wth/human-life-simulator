
import { observable } from 'mobx';
import skin1 from './../../images/skin1.png';
import skin2 from './../../images/skin2.png';
import level1 from './../../images/level1.png';
import level2 from './../../images/level2.png';
import level3 from './../../images/level3.png';

const game = observable({
    levels: [
        {
            id: 1,
            image: level1,
            path: '/easter-movie-game',
            name: 'Rick Driving Bitches',
            sound: 'aCar'
        },
        {
            id: 3,
            image: level2,
            path: "/dancing-game/",
            name: 'Dancing Rick Bitches',
            // sound: 'dancingBg'
        },
        {
            id: 2,
            image: level3,
            path: "/",
            name: 'Wabu-Labu-Dabdab',
            sound: 'wooVu'
        },
    ],
    storeItems: [
        {
            parts: [],
            image: skin1,
            name: 'Alien Rick & Morty',
            blobs: 10
        },
        {
            parts: [],
            image: skin2,
            name: 'Robotic Rick & Morty',
            blobs: 15
        }
    ]
});

export {
    game
};
