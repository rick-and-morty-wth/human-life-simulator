import React from 'react';
import Footer from '../controls/Footer/Footer';
import Header from '../controls/Header/Header';
import {ContentBlock, Page} from 'framework7-react';
import {inject, observer} from 'mobx-react';
import {observable} from 'mobx';

const state = observable({
    isRick: false,
    isMorty: false,
});

const startGame = (str, player)=> ()=> {
    state[str] = true;
    setTimeout(() => {
        player.person = true;
    }, 1500);
}
const StartScreen = inject("sounds", "game", "player")(observer(({player}) => {
    return (
        <div className="super-start-screen">
            <div onClick={startGame('isRick', player)} className="rick"></div>
            <div onClick={startGame('isMorty', player)} className="morty"></div>
            <div className={state.isMorty ? 'sperme to-morty' : state.isRick ? 'sperme to-rick' : 'sperme'}></div>
        </div>
    )
}));

export default inject("sounds", "game", "player")(observer(({game, player}) => {
    return (
        <Page className="home-screen__wr">
            {player.person ?
            <div>
                <Header />
                <Footer />
            </div> : <StartScreen></StartScreen>}


        </Page>
    );
}));
