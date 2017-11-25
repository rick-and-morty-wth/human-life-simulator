import Home from './components/pages/Home';
import Store from './components/pages/Store';
import Levels from './components/pages/Levels';
import EasterMovieGame from './components/pages/EasterMovieGame';

export const routes = [{
    path: '/',
    component: Home
},{
    path: '/store/',
    component: Store
}, {
    path: '/levels/',
    component: Levels
},{
    path: '/easter-movie-game/',
    component: EasterMovieGame
}];
