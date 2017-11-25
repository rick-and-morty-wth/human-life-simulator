import React, {PropTypes} from 'react';
import {Link} from 'framework7-react';

let back = (context)=> ()=> {
    let router = context.framework7AppContext.getRouter();
    router.framework7.mainView.router.back({ url: "/", force: true, reload: true })
}

const HomeButton = (props, context) => {
    return (<Link onClick={back(context)} className="button__wr">
        <svg width="68px" height="68px" viewBox="0 0 68 68" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="1" transform="translate(-66.000000, -569.000000)">
                <g id="icon_1" transform="translate(68.000000, 571.000000)">
                    <g id="Group">
                        <circle id="Oval" stroke="#1D1D1D" strokeWidth="2.5" fill="#B5E920" cx="32" cy="32" r="32"></circle>
                        <circle id="Oval-2" strokeOpacity="0.401353034" stroke="#FFFFFF" fill="url(#homeButton)" cx="32.2222222" cy="32.2222222" r="30.2222222"></circle>
                        <g id="Page-1" transform="translate(22.000000, 19.000000)">
                            <g id="Stroke-1">
                                <g fill="black" fillOpacity="1" filter="url(#filter-3)">
                                    <path d="M16.5778421,25 L4.42215789,25 C1.98007895,25 0,23.0527174 0,20.651087 L0,8.69565217 L10.5,0 L21,8.69565217 L21,20.651087 C21,23.0527174 19.0199211,25 16.5778421,25 Z" id="path-2"></path>
                                </g>
                                <g stroke="#1D1D1D" strokeWidth="2">
                                    <path d="M16.5778421,25 L4.42215789,25 C1.98007895,25 0,23.0527174 0,20.651087 L0,8.69565217 L10.5,0 L21,8.69565217 L21,20.651087 C21,23.0527174 19.0199211,25 16.5778421,25 Z" id="path-2"></path>
                                </g>
                                <polyline id="Stroke-3" stroke="#1D1D1D" strokeWidth="2" points="8 26 8 18 14 18 14 26"></polyline>
                            </g>
                        </g>
                        <path d="M53.3333333,27.2243707 C53.3333333,16.1161241 43.7820747,7.11111111 32,7.11111111 C20.2179253,7.11111111 10.6666667,16.1161241 10.6666667,27.2243707 C10.6666667,38.3326172 53.3333333,38.3326172 53.3333333,27.2243707 Z" id="Oval-3" fill="#FFFFFF" opacity="0.2"></path>
                    </g>
                </g>
            </g>
        </g>
    </svg>
</Link>);
};

HomeButton.contextTypes = {
    framework7AppContext: PropTypes.object
};

export default HomeButton;
