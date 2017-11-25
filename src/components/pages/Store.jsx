import React from 'react';
import Footer from '../controls/Footer/Footer';
import Header from '../controls/Header/Header';
import {ContentBlock, Page, Button} from 'framework7-react';
import Slider from 'react-slick';
import Sound from 'react-sound';
import {inject, observer} from 'mobx-react';

var settings = {
    infinite: false,
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 1
};

export default inject("sounds", "game", "player")(observer(({sounds, game, player}) => {
    return (
        <Page className="store-screen__wr">
            <Header />
            <ContentBlock inner>
                <Slider {...settings}>
                    {game.storeItems.map((e, index)=> {
                        return <div key={index} className="store__element">
                            <img className="store__element-img" src={e.image} />
                            <div className="store__element-title">
                                {e.name}
                            </div>
                            <div className="store__element-blobs">
                                {e.blobs} Blob`s
                            </div>
                        </div>
                    })}
                </Slider>
                { player.blobs > 0 ? <div className="store__shop-wr">
                     <a onClick={(e)=> {
                            sounds.play("btn")();
                            player.pay(10)();
                            e.preventDefault()
                        }}
                        className="store__shop-btn">Buy Now 2</a>
                    <div className="store__shop-hint">
                        We have no discounts, asshole
                    </div>
                </div> : <div className="store__shop-wr">
                      <Button
                            openLoginScreen="#shopping-screen"
                            onClick={(e)=> {
                                sounds.play("btn")();
                                sounds.play("ohYeah", 500)();
                            }}
                    className="store__shop-btn">Buy Now</Button>
                    <div className="store__shop-hint">
                        We have no discounts, asshole
                    </div>
                </div>}
            </ContentBlock>
        </Page>
    );
}));
