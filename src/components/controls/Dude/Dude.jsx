import React from 'react';
import { game } from '../../state';

export default (props, context) => {
    let animName = props.anims[Math.round(Math.random()*3)];

    return (<div className={animName+' '+props.theme}>
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

                <div className="thigh-pivot left">
                    <div className="thigh left">
                        <div className="shin-pivot left">
                            <div className="shin left"></div>
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

            </div>
        </div>
    </div>);
};
