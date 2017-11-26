import React from 'react';
import Footer from '../controls/Footer/Footer';
import Header from '../controls/Header/Header';
import LevelItem from '../controls/LevelItem/LevelItem';
import { ContentBlock, Page } from 'framework7-react';
import { inject, observer } from 'mobx-react';
import { Link } from 'framework7-react';
import { observable } from 'mobx';
import HomeSmallButton from '../controls/HomeSmallButton/HomeSmallButton';
const state = observable({
    currentBeat: 0,
    rightNotes: 0,
    startTimeout: 3,
});

const leftBeat = (rhythm) => () => {
    beatClick(rhythm)();
    document.getElementsByClassName('left-guy')[0].classList.add('punch');
    setTimeout(function () {
        document.getElementsByClassName('left-guy')[0].classList.remove('punch');
    }, 400);
}

const rightBeat = (rhythm) => () => {
    beatClick(rhythm)();
    document.getElementsByClassName('right-guy')[0].classList.add('kickAss');
    setTimeout(function () {
        document.getElementsByClassName('right-guy')[0].classList.remove('kickAss');
    }, 400);
}

const beatClick = (rhythm) => () => {
    if ((rhythm.points[state.currentBeat] - 0.3 < audioPlayer.currentTime) && (audioPlayer.currentTime < rhythm.points[state.currentBeat] + 0.4)) {
        ++state.rightNotes;
        document.getElementById('score').style.backgroundColor = 'green';
        document.getElementById('score').style.color = 'black';
    } else {
        document.getElementById('score').style.backgroundColor = 'red';
        document.getElementById('score').style.сolor = 'white';
    }

}

let audioPlayer;
let onEnded = (rhythm) => () => {
    var stickerUrl = './img/strickers/';

    if (state.rightNotes < rhythm.points.length / 3) {
        stickerUrl += 'fu.png';
    } else if (state.rightNotes < rhythm.points.length * 2 / 3) {
        stickerUrl += 'whatever.png';
    } else {
        stickerUrl += 'cool.png';
    }

    var img = document.createElement('img');
    img.src = stickerUrl;
    document.getElementById('score').style.height = '100vh';
    document.getElementById('score').style.border = 'none';
    document.getElementById('score').appendChild(img);
}

let makeBeat = (isLeft) => {
    var beat = document.createElement('div');
    beat.classList.add('beat');
    setTimeout(function () {
        beat.remove();
        state.currentBeat++;
    }, 500);
    if (isLeft) {
        document.getElementById('right-beat').appendChild(beat);
    } else {
        document.getElementById('left-beat').appendChild(beat);
    }
}

let startGame = (rhythm) => () => {
    audioPlayer = document.getElementById('audioPlayer');
    setTimeout(function me() {
        if (state.startTimeout == 0) {
            rhythm.points.forEach(function (item) {
                setTimeout(function () { makeBeat(item % 6 > 3) }, item * 1000 - 500);
            }, this);
            audioPlayer.play();
        } else {
            setTimeout(me, 1000);

            state.startTimeout -= 1;
        }
    }, 1000);
}

let rhythm;
const DancingGame = inject("dancingGame", "player", "game", "sounds")(observer(({ dancingGame }) => {
        rhythm = dancingGame.rhythm;
        return (

            <Page className="dancing-game-screen__wr">
            <HomeSmallButton ></HomeSmallButton>
                <audio id="audioPlayer" src={dancingGame.rhythm.src} onEnded={onEnded(rhythm)}></audio>
                <div className="container">
                    <div id="score">{state.startTimeout ? state.startTimeout : state.rightNotes}</div>
                    <div className="left-beat" id="left-beat" onClick={leftBeat(rhythm)}>
                        </div>
                    <div className="right-beat" id="right-beat" onClick={rightBeat(rhythm)}></div>
                    <div className="left-guy idle">
                        <div className="human-pivot">
                            <div className="human-body">
                                <div className="head-pivot">
                                    <div className="head"></div>
                                </div>

                                <div className="biceps-pivot">
                                    <div className="biceps">
                                        <div className="arm-pivot">
                                            <div className="arm"></div>
                                        </div>
                                    </div>
                                </div>

                                <div className="biceps-pivot left">
                                    <div className="biceps left">
                                        <div className="arm-pivot left">
                                            <div className="arm left"></div>
                                        </div>
                                    </div>
                                </div>

                                <div className="thigh-pivot">
                                    <div className="thigh">
                                        <div className="shin-pivot">
                                            <div className="shin"></div>
                                        </div>
                                    </div>
                                </div>

                                <div className="thigh-pivot left">
                                    <div className="thigh left">
                                        <div className="shin-pivot left">
                                            <div className="shin left"></div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="idleCenter human-center">
                        <div className="human-pivot">

                            <div className="human-body">
                                <div className="head-pivot">
                                    <div className="head"></div>
                                </div>

                                <div className="biceps-pivot">
                                    <div className="biceps">
                                        <div className="arm-pivot">
                                            <div className="arm"></div>
                                        </div>
                                    </div>
                                </div>

                                <div className="biceps-pivot left">
                                    <div className="biceps left">
                                        <div className="arm-pivot left">
                                            <div className="arm left"></div>
                                        </div>
                                    </div>
                                </div>

                                <div className="thigh-pivot">
                                    <div className="thigh">
                                        <div className="shin-pivot">
                                            <div className="shin"></div>
                                        </div>
                                    </div>
                                </div>

                                <div className="thigh-pivot left">
                                    <div className="thigh left">
                                        <div className="shin-pivot left">
                                            <div className="shin left"></div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="human-left right-guy idle">
                        <div className="human-pivot">

                            <div className="human-body">
                                <div className="head-pivot">
                                    <div className="head"></div>
                                </div>

                                <div className="biceps-pivot">
                                    <div className="biceps">
                                        <div className="arm-pivot">
                                            <div className="arm"></div>
                                        </div>
                                    </div>
                                </div>

                                <div className="biceps-pivot left">
                                    <div className="biceps left">
                                        <div className="arm-pivot left">
                                            <div className="arm left"></div>
                                        </div>
                                    </div>
                                </div>

                                <div className="thigh-pivot">
                                    <div className="thigh">
                                        <div className="shin-pivot">
                                            <div className="shin"></div>
                                        </div>
                                    </div>
                                </div>

                                <div className="thigh-pivot left">
                                    <div className="thigh left">
                                        <div className="shin-pivot left">
                                            <div className="shin left"></div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </Page>
        );
    }));

export default class DandingGame extends React.Component {
    componentDidMount() {
        setTimeout(() => {
            startGame(rhythm)();
        }, 300);
    }
    render() {
        return <DancingGame/>
    }
}
