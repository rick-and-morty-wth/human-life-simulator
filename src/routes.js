import Home from './components/pages/Home';
import Store from './components/pages/Store';
import Levels from './components/pages/Levels';
import easterMovieGame from './components/pages/easterMovieGame';

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
    component: easterMovieGame
}];
