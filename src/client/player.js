import GameObject from "./gameObject";
import Renderable from "./renderable";
import playerIMG from '../../public/assets/images/player.png'

export default class Player extends GameObject {
    constructor(x, y){
        super();

        this.position = [x, y];

        

        this.facing = 4;
        this.renderables = [
            new Renderable(playerIMG, 18, 0, 9, 4, 10),
            new Renderable(playerIMG,  1, 7, 9, 4, 10),
            new Renderable(playerIMG, 27, 7, 9, 4, 10),
            new Renderable(playerIMG, 19, 7, 9, 4, 10),
            new Renderable(playerIMG,  9, 7, 9, 4, 10)
        ];
    }

    draw(ctx) {
        ctx.save();
        ctx.translate(this.position[0], this.position[1]);

        this.renderables[this.facing].draw(ctx);

        ctx.restore();
    }
}