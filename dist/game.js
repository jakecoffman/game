var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Jake;
(function (Jake) {
    var Boot = (function (_super) {
        __extends(Boot, _super);
        function Boot() {
            _super.apply(this, arguments);
        }
        Boot.prototype.preload = function () {
            this.load.image('preloadBar', 'assets/loader.png');
        };
        Boot.prototype.create = function () {
            this.input.maxPointers = 1;
            this.stage.disableVisibilityChange = true;
            if (this.game.device.desktop) {
                this.game.scale.pageAlignHorizontally = true;
            }
            else {
            }
        };
        return Boot;
    })(Phaser.State);
    Jake.Boot = Boot;
})(Jake || (Jake = {}));
var Jake;
(function (Jake) {
    var Game = (function (_super) {
        __extends(Game, _super);
        function Game() {
            _super.call(this, 800, 600, Phaser.AUTO, 'content', null);
            this.state.add('Boot', Jake.Boot, false);
            this.state.start('Boot');
        }
        return Game;
    })(Phaser.Game);
    Jake.Game = Game;
})(Jake || (Jake = {}));
new Jake.Game();
//# sourceMappingURL=game.js.map