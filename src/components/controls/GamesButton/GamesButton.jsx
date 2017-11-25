import React from 'react';
import Badge from '../Badge/Badge';
import {Link} from 'framework7-react';

export default (props, context) => {
    return (<Link href={props.to} className="button__wr">
        <Badge count={props.count} />
        <svg width="68px" height="68px" viewBox="0 0 68 68" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="1" transform="translate(-154.000000, -569.000000)">
                    <g id="icon_3" transform="translate(156.000000, 571.000000)">
                        <circle id="Oval" stroke="#1D1D1D" strokeWidth="2.5" fill="#B5E920" cx="32" cy="32" r="32"></circle>
                        <circle id="Oval-2" strokeOpacity="0.401353034" stroke="#FFFFFF" fill="url(#gameButton)" cx="32" cy="32" r="30.2222222"></circle>
                        <g id="Page-1" transform="translate(20.000000, 20.000000)">
                            <g id="Stroke-1">
                                <g fill="black" fillOpacity="1" filter="url(#filter-3)">
                                    <path d="M21.0070435,3.51469565 C25.6933043,8.20095652 25.6933043,15.7990435 21.0070435,20.4853043 C16.3207826,25.1715652 8.72269565,25.1715652 4.03643478,20.4853043 C-0.649826087,15.7990435 -0.649826087,8.20095652 4.03643478,3.51469565 C8.72269565,-1.17156522 16.3207826,-1.17156522 21.0070435,3.51469565 Z" id="path-2"></path>
                                </g>
                                <g stroke="#1D1D1D" strokeWidth="2">
                                    <path d="M21.0070435,3.51469565 C25.6933043,8.20095652 25.6933043,15.7990435 21.0070435,20.4853043 C16.3207826,25.1715652 8.72269565,25.1715652 4.03643478,20.4853043 C-0.649826087,15.7990435 -0.649826087,8.20095652 4.03643478,3.51469565 C8.72269565,-1.17156522 16.3207826,-1.17156522 21.0070435,3.51469565 Z" id="path-2"></path>
                                </g>
                            </g>
                            <path d="M4.03643478,20.4853043 C4.03643478,20.4853043 6.91695652,14.7430435 11.0908696,10.5691304 C15.2647826,6.39521739 21.0070435,3.51469565 21.0070435,3.51469565" id="Stroke-3" stroke="#1D1D1D" strokeWidth="2"></path>
                            <path d="M4.03643478,3.51469565 L21.0070435,20.4853043" id="Stroke-5" stroke="#1D1D1D" strokeWidth="2"></path>
                            <path d="M12.5248174,23.9998435 C10.7827304,20.1739304 11.1797739,15.9509739 13.8260348,13.3041913 C16.4722957,10.6579304 20.6086435,10.1737565 24.5211652,12.0029739" id="Stroke-7" stroke="#1D1D1D" strokeWidth="2"></path>
                            <path d="M12.5187652,0.000365217391 C12.1738957,3.47827826 10.4349391,5.73897391 8.34798261,7.82593043 C6.26102609,9.91288696 3.73893913,11.5652348 0.521373913,11.996713" id="Stroke-9" stroke="#1D1D1D" strokeWidth="2"></path>
                        </g>
                        <path d="M53.3333333,27.2243707 C53.3333333,16.1161241 43.7820747,7.11111111 32,7.11111111 C20.2179253,7.11111111 10.6666667,16.1161241 10.6666667,27.2243707 C10.6666667,38.3326172 53.3333333,38.3326172 53.3333333,27.2243707 Z" id="Oval-3" fill="#FFFFFF" opacity="0.2"></path>
                    </g>
                </g>
            </g>
        </svg>
    </Link>);
};
