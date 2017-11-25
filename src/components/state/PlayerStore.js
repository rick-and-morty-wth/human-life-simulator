
import { observable } from 'mobx';

const player = observable({
    blobs: 0,
    progress: 0,
    bestScore: {
        2: "200 jumps"
    },
    isDone: observable.map({})
});

let timeout = null;

player.mapIsDone = (map)=> ()=> {
    player.isDone.set(map.id, true);
    player.progress = Math.round(player.isDone.size / 3 * 100, 10);
    clearTimeout(timeout);
    setTimeout(()=> {
        player.isDone.clear();
        player.progress = Math.round(player.isDone.size / 3 * 100, 10);
    }, 10000);
}

player.buy = (count) => ()=> {
    player.blobs += count;
}

player.pay = (count) => ()=> {
    player.blobs -= count;
}


export {
    player
};
