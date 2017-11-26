import Home from './components/pages/Home';
import Store from './components/pages/Store';
import Levels from './components/pages/Levels';
import EasterMovieGame from './components/pages/EasterMovieGame';
import DancingGame from './components/pages/DancingGame';

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
}, {
    path: '/dancing-game/',
    component: DancingGame
}];
