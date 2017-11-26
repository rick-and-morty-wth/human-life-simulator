import React from 'react';
import Footer from '../controls/Footer/Footer';
import Header from '../controls/Header/Header';
import LevelItem from '../controls/LevelItem/LevelItem';
import {ContentBlock, Page} from 'framework7-react';
import {inject, observer} from 'mobx-react';
import {Link} from 'framework7-react';
import HomeSmallButton from '../controls/HomeSmallButton/HomeSmallButton';
export default inject("easterGame")(observer(({easterGame}) => {
    return (
        <Page className="easter-movie-game-screen__wr">
        {easterGame.current ?
        <div>
            <div className = 'header'>
                <Header><span className = 'titleGameEaster'>Question #{parseInt(easterGame.current.id) + 1}</span>
                <HomeSmallButton ></HomeSmallButton>
                </Header>


            </div>
            <div className = 'qustiontDiv'>

                <div className = 'imageEasterMovie'><img className = 'imageEasterMovie-img' src={easterGame.current.url}/></div>
                <div className = 'question'>{easterGame.current.name}</div>
                <div className = 'answer'>
                    <button onClick={easterGame.next(easterGame.current.answer1, easterGame.current)}>{easterGame.current.answer1}</button>
                    <button onClick ={easterGame.next(easterGame.current.answer2, easterGame.current)}>{easterGame.current.answer2}</button>
                    <button onClick ={easterGame.next(easterGame.current.answer3, easterGame.current)}>{easterGame.current.answer3}</button>
                </div>
            </div>
        </div> : <div>
            <div className='result'>

            Results TODO
            <div class='gameScore'>{easterGame.score.length}</div>

            </div>
            <Link onClick={easterGame.reset()} back>Back</Link>
        </div>}
        </Page>
    );
}));
