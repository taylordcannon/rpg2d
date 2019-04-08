import GameObject from "./gameObject";

export default class Engine {
    constructor() {
    document.body.style.margin = "0px";
    document.body.style.overflow = "hidden";
    this.canvas = document.createElement("canvas");
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    document.body.appendChild(this.canvas);

    this.ctx = this.canvas.getContext("2d");
    this.lastTime = new Date().getTime();

    this.objs = []; //list of all game object based off of the roots

    window.requestAnimationFrame(this.loop.bind(this));
    }

    addObject(obj) {
        if(obj instanceof GameObject) {
            this.objs.push(obj);
        }
        else {
            console.error("Invalid object added. Not GameObject.")
        }
    }

    loop() {
        let time = new Date().getTime();
        let dt = (time - this.lastTime) / 1000;

        //implement updates here

        this.ctx.fillStyle = "#303030";
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        //implement drawing here
        this.objs.forEach(obj=>{
            obj.draw(this.ctx);
        })

        this.lastTime = time;
        window.requestAnimationFrame(this.loop.bind(this));
    }
}