import noIMG from './images/noIMG.png';

export default class Renderable {
    constructor(image = noIMG, startFrame = 0, frameCount = 0, framesX = 1, framesY = 1, speed = 1) {
        this.img = new Image();
        this.img.src = image;

        this.frame = startFrame;

        this.startFrame = startFrame;
        this.frameCount = frameCount;

        this.framesX = framesX;
        this.framesY = framesY;

        //determines subimage width and height from sprite sheet
        this.subIMGX = this.img.width / framesX;
        this.subIMGY = this.img.height / framesY;
        
        this.speed = speed;

        this.animTime = new Date().getTime();
    }



    draw(ctx) {
        let t = new Date().getTime();
        if (t > this.animTime) {
            this.frame++;
            this.animTime = t + 1000 / this.speed;
        }

        if (this.frame > this.startFrame + this.frameCount) {
            this.frame = this.startFrame;
        }

        let posX = (this.frame % this.framesX) * this.subIMGX;
        let posY = Math.floor(this.frame / this.framesX) * this.subIMGY;

        ctx.drawImage(this.img, posX, posY, this.subIMGX, this.subIMGY, 0, 0, this.subIMGX, this.subIMGY);
    }
}

