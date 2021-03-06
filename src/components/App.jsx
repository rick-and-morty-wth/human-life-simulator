import React, { PropTypes } from 'react';
import Home from './pages/Home';
import * as store from './state';
import Header from './controls/Header/Header';
import {Provider, observer, inject} from 'mobx-react';
import Sound from 'react-sound';

import {
    Framework7App, Statusbar, Panel, View, Navbar, Pages, Page, ContentBlock, ContentBlockTitle,
    List, ListItem, Views, NavLeft, Link, NavCenter, NavRight, GridRow, GridCol, Button, Popup,
    LoginScreen, LoginScreenTitle, ListButton, ListLabel, FormLabel, FormInput
} from 'framework7-react';

import { routes } from '../routes';

const MainViews = ()=> {
    return (
        <Views>
            <View id="main-view" main url="/">
                <Pages>
                    <Home />
                </Pages>
            </View>
        </Views>
    );
};

MainViews.contextTypes = {
    framework7AppContext: PropTypes.object
};

// const AppPopup = () => (
// 	<Popup id="popup">
// 		<View navbarFixed>
// 			<Pages>
// 				<Page>
// 					<Navbar title="Popup">
// 						<NavRight>
// 							<Link closePopup>Close</Link>
// 						</NavRight>
// 					</Navbar>
// 					<ContentBlock>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, architecto. Cupiditate laudantium rem nesciunt numquam, ipsam. Voluptates omnis, a inventore atque ratione aliquam. Omnis iusto nemo quos ullam obcaecati, quod.</ContentBlock>
// 				</Page>
// 			</Pages>
// 		</View>
// 	</Popup>
// );

const CloseSmallButton = (props, context) => {
    return (<Link closeLoginScreen><svg width="44px" height="44px" viewBox="0 0 44 44" version="1.1" xmlns="http://www.w3.org/2000/svg">
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
};

const AppLoginScreen = inject("sounds", "player")(observer(({sounds, player}) => (
    <LoginScreen id="shopping-screen">
        <View>
            <Pages>
                <Page loginScreen className="shopping-screen__wr">
                    <Header><CloseSmallButton onClick={sounds.play("btn")}></CloseSmallButton></Header>
                    <div className="store__shop-content">
                        <div className="store__shop-title">Buy 100 Blob’s</div>
                        <div className="store__shop-sub-title">9,99 USD</div>
                    </div>
                    <div className="store__shop-wr">
                        <Button closeLoginScreen className="store__shop-btn" onClick={()=> {
                                sounds.play("btn")();
                                player.buy(100)();
                        }
                        }>Buy Now</Button>
                        <div className="store__shop-hint">
                            if you have no money, find a job idiot
                        </div>
                    </div>
                </Page>
            </Pages>
        </View>
    </LoginScreen>
)));

const SoundsManager = inject("sounds")(observer(({sounds}) => {
    return sounds.current ? <Sound url={ sounds.current.src }
        playStatus={ sounds.current.isPlaying ? Sound.status.PLAYING : Sound.status.PAUSED }
        onFinishedPlaying={sounds.stop()}
    /> : <div></div>
}));

export const App = () => (
    //Change themeType to "material" to use the Material theme
    <Provider {...store}>
        <Framework7App themeType="ios" routes={routes}>
            <svg className="hidden">
                <defs>
                    <radialGradient cx="50%" cy="50%" fx="50%" fy="50%" r="84.9944196%" gradientTransform="translate(0.500000,0.500000),rotate(90.000000),scale(1.000000,0.997777),translate(-0.500000,-0.500000)" id="homeButton">
                        <stop stopColor="#CFFF32" offset="0%"></stop>
                        <stop stopColor="#86C100" offset="100%"></stop>
                    </radialGradient>
                    <filter x="-14.3%" y="-9.2%" width="128.6%" height="125.2%" filterUnits="objectBoundingBox" id="filter-3">
                        <feMorphology radius="1" operator="dilate" in="SourceAlpha" result="shadowSpreadOuter1"></feMorphology>
                        <feOffset dx="0" dy="1" in="shadowSpreadOuter1" result="shadowOffsetOuter1"></feOffset>
                        <feMorphology radius="1" operator="erode" in="SourceAlpha" result="shadowInner"></feMorphology>
                        <feOffset dx="0" dy="1" in="shadowInner" result="shadowInner"></feOffset>
                        <feComposite in="shadowOffsetOuter1" in2="shadowInner" operator="out" result="shadowOffsetOuter1"></feComposite>
                        <feGaussianBlur stdDeviation="0.5" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
                        <feColorMatrix values="0 0 0 0 1   0 0 0 0 1   0 0 0 0 1  0 0 0 0.5 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
                    </filter>
                    <radialGradient cx="50%" cy="50%" fx="50%" fy="50%" r="84.9944196%" gradientTransform="translate(0.500000,0.500000),rotate(90.000000),scale(1.000000,0.997777),translate(-0.500000,-0.500000)" id="homeSmallButton">
                        <stop stopColor="#CFFF32" offset="0%"></stop>
                        <stop stopColor="#86C100" offset="100%"></stop>
                    </radialGradient>
                    <radialGradient cx="50%" cy="50%" fx="50%" fy="50%" r="84.9944196%" gradientTransform="translate(0.500000,0.500000),rotate(90.000000),scale(1.000000,0.997777),translate(-0.500000,-0.500000)" id="shopButton">
                        <stop stopColor="#CFFF32" offset="0%"></stop>
                        <stop stopColor="#86C100" offset="100%"></stop>
                    </radialGradient>
                    <radialGradient cx="50%" cy="50%" fx="50%" fy="50%" r="100%" id="playerAvatar">
                        <stop stopColor="#FAD961" offset="0%"></stop>
                        <stop stopColor="#F76B1C" offset="100%"></stop>
                    </radialGradient>
                    <circle id="path-2" cx="20" cy="20" r="18.3333333"></circle>
                    <filter x="-17.9%" y="-27.2%" width="135.8%" height="163.8%" filterUnits="objectBoundingBox" id="filter-4">
                        <feMorphology radius="1" operator="dilate" in="SourceAlpha" result="shadowSpreadOuter1"></feMorphology>
                        <feOffset dx="0" dy="1" in="shadowSpreadOuter1" result="shadowOffsetOuter1"></feOffset>
                        <feMorphology radius="1" operator="erode" in="SourceAlpha" result="shadowInner"></feMorphology>
                        <feOffset dx="0" dy="1" in="shadowInner" result="shadowInner"></feOffset>
                        <feComposite in="shadowOffsetOuter1" in2="shadowInner" operator="out" result="shadowOffsetOuter1"></feComposite>
                        <feGaussianBlur stdDeviation="0.5" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
                        <feColorMatrix values="0 0 0 0 1   0 0 0 0 1   0 0 0 0 1  0 0 0 0.5 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
                    </filter>
                    <radialGradient cx="50%" cy="50%" fx="50%" fy="50%" r="84.9944196%" gradientTransform="translate(0.500000,0.500000),rotate(90.000000),scale(1.000000,0.997777),translate(-0.500000,-0.500000)" id="gameButton">
                        <stop stopColor="#CFFF32" offset="0%"></stop>
                        <stop stopColor="#86C100" offset="100%"></stop>
                    </radialGradient>
                    <radialGradient cx="50%" cy="50%" fx="50%" fy="50%" r="100%" id="badge">
                        <stop stopColor="#FAD961" offset="0%"></stop>
                        <stop stopColor="#F76B1C" offset="100%"></stop>
                    </radialGradient>
                    <circle id="path-2" cx="12" cy="12" r="11"></circle>
                </defs></svg>
            <MainViews />
            <AppLoginScreen />
            <SoundsManager />
        </Framework7App>
    </Provider>
);
