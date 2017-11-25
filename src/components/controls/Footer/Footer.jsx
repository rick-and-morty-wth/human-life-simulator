import React from 'react';
import HomeButton from '../HomeButton/HomeButton';
import GamesButton from '../GamesButton/GamesButton';
import ShopButton from '../ShopButton/ShopButton';
import { game } from '../../state';

export default (props, context) => {
    return (<div className="footer__wr">
        {/* <HomeButton to="/"></HomeButton> */}
        <GamesButton to="/levels" count={game.levels.length}></GamesButton>
        <ShopButton to="/store" count={game.storeItems.length}></ShopButton>
    </div>);
};
