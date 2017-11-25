import React from 'react';
import Footer from '../controls/Footer/Footer';
import Header from '../controls/Header/Header';
import LevelItem from '../controls/LevelItem/LevelItem';
import {ContentBlock, Page} from 'framework7-react';
import { game } from '../state';

export default () => {
    return (
        <Page className="levels-screen__wr">
            <Header />
            <div className="levels-line"></div>
            <div className="levels-line-two"></div>

            <ContentBlock inner>
                {game.levels.map((e, index) => <LevelItem key={index} lvl={e}/>)}
            </ContentBlock>
            {/* <Footer /> */}
        </Page>
    );
};