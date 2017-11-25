import React from 'react';
import Footer from '../controls/Footer/Footer';
import Header from '../controls/Header/Header';
import {ContentBlock, Page, Button} from 'framework7-react';
import Slider from 'react-slick';
import { game } from '../state';

var settings = {
    infinite: false,
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 1
  };

export default () => {
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
                <div className="store__shop-wr">
                    <Button openLoginScreen="#shopping-screen" className="store__shop-btn">Buy Now</Button>
                    <div className="store__shop-hint">
                        We have no discounts, asshole
                    </div>
                </div>
            </ContentBlock>
        </Page>
    );
};
