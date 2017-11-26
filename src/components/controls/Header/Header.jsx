import React from 'react';
import PlayerProcess from '../PlayerProcess/PlayerProcess';
import HomeSmallButton from '../HomeSmallButton/HomeSmallButton';
import {
    Navbar
} from 'framework7-react';

export default (props, context) => {
    return (<div className="navbar__wr">{!props.children ? <Navbar sliding>
        <PlayerProcess></PlayerProcess>
        <HomeSmallButton width="48px" height="48px"></HomeSmallButton>
    </Navbar> : <Navbar sliding><div></div>{props.children}</Navbar> }</div>);
}
