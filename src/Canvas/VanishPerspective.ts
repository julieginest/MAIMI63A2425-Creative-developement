import { Grid } from "./Grid";
export class VanishPerspective{

    context: CanvasRenderingContext2D
    image = document.getElementById('canvasImageSource') as HTMLImageElement;
    damier = document.getElementById('canvasDamier') as HTMLImageElement;
    
    imageWidth: number;
    imageHeight: number;

    centerX: number; 
    centerY: number;
    horizon: number = 0;
    distance: number = Math.round((Math.random()*10000)+9000)*750;
    scalingFactor: number = 1;
    maxAngle: number = 0;
    angleIncrement: number = 5;
    squareWidth:number;
    squareHeight: number;

    constructor(context: CanvasRenderingContext2D,squareWidth:number, squareHeight: number){
        this.context = context
        this.imageWidth = this.image.width
        this.imageHeight = this.image.height
        this.squareWidth = 750 //squareWidth
        this.squareHeight = 750 //squareHeight
        
        this.centerX = 375 //Math.round(Math.random()*squareWidth);

        this.centerY = 375 //Math.round(Math.random()*squareHeight)

        const _this=this
        this.image.addEventListener("load",()=>{
            console.log("LOADED")
            _this.createImage()
        })
        this.damier.addEventListener("load",()=>{
            console.log("LOADED")
            _this.createBackground()
        })
    }

    public applyVanishingPointPerspectiveGrid(squareSize: number, ctx: CanvasRenderingContext2D) {
        // Define the four corners of the square
        const corners = [
            { x: 0, y: 0 },
            { x: squareSize, y: 0 },
            { x: squareSize, y: squareSize },
            { x: 0, y: squareSize }
        ];
    
        // Transform the corners
        const transformedCorners = corners.map(corner => 
            this.vanishingPointPerspective(
                corner. x,
                corner.y,
                this.distance,
                this.centerY,
                this. horizon,
                this.distance,
                this.scalingFactor,
                this.angleIncrement
            )
        );
    
        // Draw the transformed quad
        ctx.fillStyle = "black";
        ctx.beginPath();
        ctx.moveTo(transformedCorners[0].x, transformedCorners[0].y);
        transformedCorners.slice(1).forEach(corner => {
            ctx.lineTo(corner.x, corner.y);
        });
        ctx.closePath();
        ctx.fill();
    }

    /*public applyVanishingPointPerspectiveToCanvas(ctx: CanvasRenderingContext2D, size: number) {
        // Create an offscreen canvas to draw the original square
        const offscreenCanvas = document.createElement('canvas');
        offscreenCanvas.width = this.squareWidth;
        offscreenCanvas.height = this. squareHeight;
        const offscreenCtx = offscreenCanvas.getContext('2d')!;
        (new Grid(offscreenCtx,this.squareHeight,this.squareWidth)).draw(size,30)
        console.log(this.squareHeight, this.squareWidth)
        
        for (let x = 0; x < this.squareWidth; x++) {
            for (let y = 0; y < this. squareHeight; y++) {
                const { x: xPrime, y: yPrime } = this.vanishingPointPerspective(
                    x, 
                    y, 
                    this. centerX, 
                    this.centerY, 
                    this.horizon, 
                    this.distance, 
                    this.scalingFactor, 
                    this.angleIncrement
                );
                
                // Get the pixel color from the offscreen canvas
                const pixelData = offscreenCtx.getImageData(x, y, 1, 1);
                ctx.putImageData(pixelData, Math.round(xPrime), Math.round(yPrime));
            }
        }
        
    }*/
    public createBackground(){
        this.applyVanishingPointPerspective(this.damier.width, this.damier.height, this.damier)
    }
    public createImage(){
        this.applyVanishingPointPerspective(this.image.width, this.image.height, this.image)
    }
    public applyVanishingPointPerspective(width: number, height: number, image: HTMLImageElement) {
        for (let x = 0; x < width; x++) {
          for (let y = 0; y < height; y++) {
            const { x: xPrime, y: yPrime } = this.vanishingPointPerspective(x, y, this.centerX, this.centerY, this.horizon, this.distance, this.scalingFactor, this.angleIncrement);
            this.context.drawImage(image, x, y, 1, 1, xPrime, yPrime, 1, 1);
          }
        }
      }

    private vanishingPointPerspective(x: number, y: number, centerX: number, centerY: number, horizon: number, distance: number, scalingFactor: number, angleIncrement: number) {
        const theta = Math.atan2(y - centerY, x - centerX);
        const distanceFromViewer = Math.sqrt(Math.pow(centerX - x, 2) + Math.pow(centerY - y, 2));
        const distanceFromHorizon = Math.abs(y - horizon);
        const angle = Math.min(this.maxAngle, angleIncrement * distanceFromViewer);
        const scaling = distance / (distance + distanceFromViewer);
        const z = distanceFromHorizon * scaling * scalingFactor;
        const xPrime = centerX + z * Math.cos(theta + angle);
        const yPrime = centerY + z * Math.sin(theta + angle);
        return { x: xPrime, y: yPrime };
      }
}