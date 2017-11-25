import React, {PropTypes} from 'react';
import {Link} from 'framework7-react';
import {inject, observer} from 'mobx-react';

let back = (context)=> ()=> {
    let router = context.framework7AppContext.getRouter();
    router.framework7.mainView.router.back({ url: "/", force: true, reload: true })
}

const HomeSmallButton = inject("sounds", "game")(observer(({sounds}, context) => {
    return (<Link back onClick={sounds.play("btn")}><svg width="44px" height="44px" viewBox="0 0 44 44" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="3" transform="translate(-315.000000, -47.000000)">
            <g id="Group-3" transform="translate(317.000000, 49.000000)">
                <g id="icon_1">
                    <g id="Group">
                        <circle id="Oval" stroke="#1D1D1D" strokeWidth="2.5" fill="#B5E920" cx="20" cy="20" r="20"></circle>
                        <circle id="Oval-2" strokeOpacity="0.401353034" stroke="#FFFFFF" fill="url(#homeSmallButton)" cx="20.1388889" cy="20.1388889" r="18.8888889"></circle>
                        <g id="Page-1" transform="translate(13.750000, 11.875000)">
                            <g id="Stroke-1">
                                <use fill="black" fillOpacity="1" filter="url(#filter-3)">
                                    <path d="M10.3611513,15.625 L2.76384868,15.625 C1.23754934,15.625 0,14.4079484 0,12.9069293 L0,5.43478261 L6.5625,0 L13.125,5.43478261 L13.125,12.9069293 C13.125,14.4079484 11.8874507,15.625 10.3611513,15.625 Z" id="path-2"></path>
                                </use>
                                <g stroke="#1D1D1D" strokeWidth="2">
                                    <path d="M10.3611513,15.625 L2.76384868,15.625 C1.23754934,15.625 0,14.4079484 0,12.9069293 L0,5.43478261 L6.5625,0 L13.125,5.43478261 L13.125,12.9069293 C13.125,14.4079484 11.8874507,15.625 10.3611513,15.625 Z" id="path-2"></path>
                                </g>
                            </g>
                            <polyline id="Stroke-3" stroke="#1D1D1D" strokeWidth="2" points="5 16.25 5 11.25 8.75 11.25 8.75 16.25"></polyline>
                        </g>
                        <path d="M33.3333333,17.0152317 C33.3333333,10.0725776 27.3637967,4.44444444 20,4.44444444 C12.6362033,4.44444444 6.66666667,10.0725776 6.66666667,17.0152317 C6.66666667,23.9578857 33.3333333,23.9578857 33.3333333,17.0152317 Z" id="Oval-3" fill="#FFFFFF" opacity="0.2"></path>
                    </g>
                </g>
            </g>
        </g>
    </g>
</svg></Link>);
}));

HomeSmallButton.contextTypes = {
    framework7AppContext: PropTypes.object
};

export default HomeSmallButton;
