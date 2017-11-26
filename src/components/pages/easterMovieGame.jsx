import React from 'react';
import Footer from '../controls/Footer/Footer';
import Header from '../controls/Header/Header';
import LevelItem from '../controls/LevelItem/LevelItem';
import {ContentBlock, Page} from 'framework7-react';
import {inject, observer} from 'mobx-react';
import {Link} from 'framework7-react';
import HomeSmallButton from '../controls/HomeSmallButton/HomeSmallButton';

import {
    Button
} from 'framework7-react';


export default inject("easterGame", "sounds")(observer(({easterGame, sounds}) => {
    return (
        <Page className="easter-movie-game-screen__wr">
        {easterGame.current ?
        <div>
            <div className = 'easter-movie-game__header'>
                <Header>
                    <div></div>
                    <HomeSmallButton onClick={sounds.play("btn")}></HomeSmallButton>
                </Header>
            </div>
            <div className = 'qustiontDiv'>

                <div className = 'imageEasterMovie'><img className = 'imageEasterMovie-img' src={easterGame.current.url}/></div>
                <div className = 'question'>
                    <div className="answer__badge">#{parseInt(easterGame.current.id) + 1}</div>
                    {easterGame.current.name}
                </div>
                <div className = 'answer'>
                    <div className="answer__item">
                        <div className="answer__badge">A</div>
                        <button onClick={easterGame.next(easterGame.current.answer1, easterGame.current)}>{easterGame.current.answer1}</button>
                    </div>
                    <div className="answer__item">
                        <div className="answer__badge">B</div>
                        <button onClick ={easterGame.next(easterGame.current.answer2, easterGame.current)}>{easterGame.current.answer2}</button>
                    </div>
                    <div className="answer__item">
                        <div className="answer__badge">C</div>
                        <button onClick ={easterGame.next(easterGame.current.answer3, easterGame.current)}>{easterGame.current.answer3}</button>
                    </div>
                </div>
            </div>
        </div> : <div>
            <Header>
                <HomeSmallButton onClick={sounds.play("btn")}></HomeSmallButton>
            </Header>
            <div className="store__shop-content">
                <div className="store__shop-title">Hey brrrp mr. meeseeks, get shwifty.</div>
                <div className="store__shop-sub-title">75%</div>
            </div>
            <div className="store__shop-wr">
                <Button back className="store__shop-btn" onClick={()=> {
                        sounds.play("btn")();
                }
                }>Done</Button>
                <div className="store__shop-hint">
                    find a next game idiot
                </div>
            </div>
        </div>}
        </Page>
    );
}));
