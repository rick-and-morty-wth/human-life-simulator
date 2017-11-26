import React from 'react';

export default (props, context) => {
    return (<div className="badge__wr">
        <svg width="26px" height="26px" viewBox="0 0 26 26" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fill="url(#radialGradient3)">
                <g id="1" transform="translate(-198.000000, -567.000000)">
                    <g id="bubble" transform="translate(199.000000, 568.000000)">
                        <circle stroke="#1D1D1D" strokeWidth="2" fill="beige" cx="12" cy="12" r="12"></circle>
                        <circle cx="12" cy="12" r="11" fill="beige"></circle>
                        <g>
                            <g fill="beige" fillRule="evenodd">
                            </g>
                            <circle strokeOpacity="0.358978714" stroke="#FFFFFF" strokeWidth="1" cx="12" cy="12" r="10.5"></circle>
                        </g>
                        <text id="3" fontFamily=".AppleSystemUIFont" fontSize="13" fontWeight="normal" fill="#1D1D1D">
                            <tspan x="8" y="17">{props.count}</tspan>
                        </text>
                    </g>
                </g>
            </g>
        </svg>
    </div>);
};
