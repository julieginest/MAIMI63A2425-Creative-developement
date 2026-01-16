import Gradient from "javascript-color-gradient";

export class Item{
    x:number;
    y:number;
    size:number;
    gradient: Gradient;
    currentColor: string;
    image = document.getElementById('canvasImageSource') as HTMLImageElement;

  
    constructor(xStart: number, yStart: number, size: number, color1: string, color2:string){
      this.x = xStart;
      this.y = yStart;
      this.size = size;
      this.gradient = new Gradient().setColorGradient("#"+color1,"#"+color2).setMidpoint(29);
      this.currentColor = this.gradient.getColor(16)
    }
  
  
    public draw(ctx: CanvasRenderingContext2D) {
      ctx.fillStyle = this.currentColor
      ctx.fillRect(this.x,this.y, this.size, (930/1451)*this.size)
      ctx.drawImage(this.image,this.x,this.y, this.size, (930/1451)*this.size)
      
      //console.log(this.x,this.y,this.size, (930/1451)*this.size)

    }
  
    public rotate(rotation: number){
    // console.log(Math.round(Number(rotation)))
      this.currentColor = this.gradient.getColor(Math.round(Number(rotation)))
    }
  
    public changeColor(color1: string, color2: string){
      this.gradient = new Gradient().setColorGradient("#"+color1,"#"+color2).setMidpoint(29);
      this.currentColor = this.gradient.getColor(16)
    }
  
  }