import { observable } from 'mobx';
import oooo_yeah__caaan_doo from '../../sounds/oooo_yeah__caaan_doo.wav';
import woo_vu_luvub_dub_dub from '../../sounds/woo_vu_luvub_dub_dub.wav';
import let_me_out from '../../sounds/let_me_out_.wav';
import turn_into_a_car from '../../sounds/turn_into_a_car.wav';
import bg_music from '../../sounds/bg-music.mp3';
import btn_click from '../../sounds/btn-click.wav';
import bgMusic from '../../sounds/main-game.mp3';

const sounds = observable({
    ohYeah: {
        src: oooo_yeah__caaan_doo,
        isPlaying: false
    },
    wooVu: {
        src: woo_vu_luvub_dub_dub,
        isPlaying: false
    },
    letMeOut: {
        src: let_me_out,
        isPlaying: false
    },
    aCar: {
        src: turn_into_a_car,
        isPlaying: false
    },
    btn: {
        src: btn_click,
        isPlaying: false
    },
    dancingBg: {
        src: bgMusic,
        isPlaying: false
    },
    bg: {
        src: bg_music,
        isPlaying: false
    },
    current: undefined
});

let timeout = null;
sounds.play = (name, delay) => () => {
    clearTimeout(timeout);
    if (delay) {
        setTimeout(() => {
            sounds[name].isPlaying = true;
            sounds.current = sounds[name];
        }, delay);
    } else {
        sounds[name].isPlaying = true;
        sounds.current = sounds[name];
    }
}

sounds.stop = () => () => {
    if (sounds.current) {
        sounds.current.isPlaying = false;
        sounds.current = undefined;
    }
}

export {
    sounds
};
