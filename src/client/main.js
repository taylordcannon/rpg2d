import Engine from "./engine";
import Player from "./player";

let engine = new Engine();

let player = new Player(50,50);

engine.addObject(player);


//directional movement animations
engine.update = (dt) => {
    if (engine.input.isKeyDown("KeyW")) {
        player.translate(0, -100 * dt);
        player.facing = 1;
    }

    if (engine.input.isKeyDown("KeyS")) {
        player.translate(0, 100 * dt);
        player.facing = 3;
    }

    if (engine.input.isKeyDown("KeyA")) {
        player.translate(-100 * dt, 0);
        player.facing = 4;
    }

    if (engine.input.isKeyDown("KeyD")) {
        player.translate(100 * dt, 0);
        player.facing = 2;
    }

    //idle directional animation
    if (!engine.input.isKeyDown("KeyW") && 
        !engine.input.isKeyDown("KeyS") &&
        !engine.input.isKeyDown("KeyA") &&
        !engine.input.isKeyDown("KeyD")) {
        player.facing = 0;
    }
}