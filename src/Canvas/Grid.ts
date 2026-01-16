import { Item } from "./Item";

export class Grid{
    ctx:CanvasRenderingContext2D;
    density : number = 5;

    width : number;
    height : number;

    items : Item[] = [];
    constructor(ctx:CanvasRenderingContext2D, height: number, width: number){
        this.ctx = ctx
        this.width = width
        this.height = height
    }

    
    private squareCase( x: number,y: number, size:number,type: boolean){
        // ctx.lineWidth= 5
        if(type){
            this.ctx.fillStyle = "black"
        }else{
            this.ctx.fillStyle = "white"
        }
        this.ctx.fillRect(x,y, size, size);
        
        if (this.randomPercent(30) && !type){
            console.log(size)
            console.log(( (((size)*0.15)/2)),
            ( ((size) * (0.15/(930/1451)))/2),
            (size)*0.85)

            this.items.push(new Item(
                /*(x+(((this.width/size)*0.15)/2)),
                y+(((this.width/size) * (930/1451) *15)/2),
                (this.width/size)*0.85,*/
                x + (((size)*0.15)/2),
                y + ((size - (size*0.85*(930/1451)))/2),
                size*0.85,//this.width/size,
                "CEC075","C63849"
            ))
            /*this.ctx.beginPath();
            switch(Math.floor(Math.random() * 3)){
            case 0:
                this.ctx.arc(x,y, size, 0, Math.PI/2)
                break;
            case 1:
                this.ctx.arc(x+size,
                y, size, Math.PI/2, Math.PI)
                break;
            case 2:
                this.ctx.arc(x+size,y+size, size, Math.PI, Math.PI*1.5)
                break;
            case 3:
                this.ctx.arc(x,y+size, size, Math.PI*1.5, Math.PI*2)
                break;
            }
                this.ctx.fill()
            }*/
        }
    }
  
  
  
  private randomPercent(density: number){
    const percentage = Math.max(0, Math.min(100, density))
    return Math.random() * 100 < percentage
  }
  
  
  
  
  public draw(size:number, density: number){
    //this.ctx.clearRect(0,0,this.width, this.height)
    const squareWidth = this.width/size
    for(let i = 0; i<size; i++){
      for(let j = 0; j<size; j++){
  
        this.squareCase(squareWidth*i, squareWidth*j, squareWidth,((j+i)%2 == 1))
  
      }
    }
  }
}
