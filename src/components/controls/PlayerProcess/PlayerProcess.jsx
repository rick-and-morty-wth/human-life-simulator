import React from 'react';
import PlayerAvatar from './PlayerAvatar';
import { player } from '../../state';

export default (props, context) => {
    return (<div className="player-process__wr">
        <PlayerAvatar/>
        <div className="player-process__user-wr">
            <div className="player-process__user-blobs">{player.blobs} Blob’s</div>
            <div className="player-process__user-progress">Daily Progress: {player.progress}%</div>
        </div>
    </div>);
};
