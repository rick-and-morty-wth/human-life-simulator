import React from 'react';
import Badge from '../Badge/Badge';
import {Link} from 'framework7-react';
import {inject, observer} from 'mobx-react';

export default inject("sounds", "game")(observer(({to, count, sounds}, context) => {
    return (<Link href={to} className="button__wr" onClick={sounds.play("btn")} openPanel="right">
            <Badge count={count} />
            <svg width="68px" height="68px" viewBox="0 0 68 68" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g id="1" transform="translate(-242.000000, -569.000000)">
                        <g id="icon_2" transform="translate(244.000000, 571.000000)">
                            <circle id="Oval" stroke="#1D1D1D" strokeWidth="2.5" fill="#B5E920" cx="32" cy="32" r="32"></circle>
                            <circle id="Oval-2" strokeOpacity="0.401353034" stroke="#FFFFFF" fill="url(#shopButton)" cx="32" cy="32" r="30.2222222"></circle>
                            <g id="Page-1">
                                <g fill="black" fillOpacity="1" filter="url(#filter-3)">
                                    <path d="M38.6441364,20 L35.6363636,20 C35.6363636,21.7323182 34.2323182,23.1363636 32.5,23.1363636 C30.7676818,23.1363636 29.3636364,21.7323182 29.3636364,20 L26.3558636,20 C24.4369318,20 22.7647273,21.3057727 22.2989773,23.1677273 L21,28.3636364 L25.1818182,30.4545455 L25.9659091,41.1709773 C26.1012955,42.7956136 27.4598636,44.0454545 29.09025,44.0454545 L35.8663636,44.0454545 C37.49675,44.0454545 38.8553182,42.7956136 38.9907045,41.1709773 L39.8181818,30.4545455 L44,28.3636364 L42.7010227,23.1677273 C42.2357955,21.3057727 40.5630682,20 38.6441364,20 Z" id="path-2"></path>
                                </g>
                                <g stroke="#1D1D1D" strokeWidth="2">
                                    <path d="M38.6441364,20 L35.6363636,20 C35.6363636,21.7323182 34.2323182,23.1363636 32.5,23.1363636 C30.7676818,23.1363636 29.3636364,21.7323182 29.3636364,20 L26.3558636,20 C24.4369318,20 22.7647273,21.3057727 22.2989773,23.1677273 L21,28.3636364 L25.1818182,30.4545455 L25.9659091,41.1709773 C26.1012955,42.7956136 27.4598636,44.0454545 29.09025,44.0454545 L35.8663636,44.0454545 C37.49675,44.0454545 38.8553182,42.7956136 38.9907045,41.1709773 L39.8181818,30.4545455 L44,28.3636364 L42.7010227,23.1677273 C42.2357955,21.3057727 40.5630682,20 38.6441364,20 Z" id="path-2"></path>
                                </g>
                            </g>
                            <path d="M53.3333333,27.2243707 C53.3333333,16.1161241 43.7820747,7.11111111 32,7.11111111 C20.2179253,7.11111111 10.6666667,16.1161241 10.6666667,27.2243707 C10.6666667,38.3326172 53.3333333,38.3326172 53.3333333,27.2243707 Z" id="Oval-3" fill="#FFFFFF" opacity="0.2"></path>
                        </g>
                    </g>
                </g>
            </svg>
    </Link>);
}));
