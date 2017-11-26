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
            <div className = 'easter-movie-game__header'>
                <Header>
                    <div></div>
                    <HomeSmallButton></HomeSmallButton>
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
                    <div clasclassNames="answer__item">
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
            <div className='result'>

            Results TODO
            <div class='gameScore'>{easterGame.score.length}</div>

            </div>
            <Link onClick={easterGame.reset()} back>Back</Link>
        </div>}
        </Page>
    );
}));
