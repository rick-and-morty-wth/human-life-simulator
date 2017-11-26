import React from 'react';
import GamesButton from '../GamesButton/GamesButton';
import ShopButton from '../ShopButton/ShopButton';
import { game } from '../../state';

export default (props, context) => {
    return (<div className="footer__wr">
        <GamesButton to="/levels" count={game.levels.length}></GamesButton>
        <ShopButton to="/store" count={game.storeItems.length}></ShopButton>
    </div>);
};
