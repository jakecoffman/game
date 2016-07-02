/// <reference path="../../typescript/phaser.d.ts"/>

import {Boot} from './states/boot';
import {Preloader} from './states/preloader';
import {Level1} from './states/level1';


export class Game extends Phaser.Game {
    constructor() {
        super(800, 600, Phaser.AUTO, 'content', null);

        this.state.add('Boot', Boot, false);
        this.state.add('Preloader', Preloader, false);
        // this.state.add('MainMenu', MainMenu, false);
        this.state.add('Level1', Level1, false);

        this.state.start('Boot');
    }
}

new Game();
