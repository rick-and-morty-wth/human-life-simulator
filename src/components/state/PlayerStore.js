
import { observable } from 'mobx';

const player = observable({
    blobs: 0,
    progress: 0,
    bestScore: {
        2: "200 jumps"
    },
    isDone: {
        1: true
    }
});

export {
    player
};
