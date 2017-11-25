import { observable } from 'mobx';
import oooo_yeah__caaan_doo from '../../sounds/oooo_yeah__caaan_doo.wav';
import bg_music from '../../sounds/bg-music.mp3';
import btn_click from '../../sounds/btn-click.wav';

const sounds = observable({
    ohYeah: {
        src: oooo_yeah__caaan_doo,
        isPlaying: false
    },
    btn: {
        src: btn_click,
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
