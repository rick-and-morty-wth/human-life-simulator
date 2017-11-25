import React from 'react';
import { player } from '../../state';

export default (props, context) => {
    return (<div className={player.isDone[props.lvl.id] ? "level-item__wr level-item__done" : "level-item__wr"}>
        <div className="level-item__img-wr">
            <img src={props.lvl.image} className="level-item__img"/>

            <svg className="level-item__svg" width="96px" height="66px" viewBox="0 0 96 66" version="1.1" xmlns="http://www.w3.org/2000/svg">

                <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g id="2" transform="translate(-79.000000, -146.000000)">
                        <g id="Group-6" transform="translate(67.000000, 137.000000)">
                            <g id="Group-2">
                                <g id="Oval-3" transform="translate(12.000000, 9.000000)">
                                    <path d="M96,45.254834 C96,20.2612793 74.509668,0 48,0 C21.490332,0 0,20.2612793 0,45.254834 C0,70.2483887 96,70.2483887 96,45.254834 Z" fill="#FFFFFF" opacity="0.2"></path>
                                    <g id="music-player-play" strokeWidth="1" transform="translate(35.000000, 36.000000)" fill="#A8DE17">
                                        <path d="M24.5945163,12.8744624 L4.17401366,0.296480417 C3.57032373,-0.0548822424 2.82070131,0.0036566633 2.25455198,0.0036566633 C-0.0100453303,0.0036566633 7.46945581e-07,1.71291517 7.46945581e-07,2.14594801 L7.46945581e-07,27.853961 C7.46945581e-07,28.2200553 -0.00991314508,29.9963816 2.25455198,29.9963816 C2.82070131,29.9963816 3.57045591,30.054662 4.17401366,29.7034286 L24.5943841,17.1255758 C26.2704928,16.1505735 25.9808749,14.9999545 25.9808749,14.9999545 C25.9808749,14.9999545 26.270625,13.8493355 24.5945163,12.8744624 Z" id="Shape" fillRule="nonzero"></path>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
            </svg>
        </div>
        <div className="level-item__texts">
            { player.isDone[props.lvl.id] ? <div className="level-item__is-done">Daily is Done</div> : <div className="level-item__is-done"></div>}
            <div className="level-item__name">{props.lvl.name}</div>
            { player.bestScore[props.lvl.id] ? <div className="level-item__best-score">Best Score: {player.bestScore[props.lvl.id]}</div> : <div className="level-item__best-score"></div>}
        </div>
    </div>);
};
