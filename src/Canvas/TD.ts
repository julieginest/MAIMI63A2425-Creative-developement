// import '../style.css'
import {Item} from './Item'
import {CanvasBox} from'./CanvasBox'
import {ColorSelection} from './ColorSelection'
import { Grid } from './Grid';
// import { VanishPerspective } from './VanishPerspective';
// import 'destyle.css'

/* PANE */
/* #### */

/* CANVAS INIT */
const canvas = document.getElementById("canvas") as HTMLCanvasElement;
console.log(canvas);
const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
const dpr = window.devicePixelRatio || 1
const width = 750 //Math.floor(canvas.clientWidth*dpr)
const height = 750 //Math.floor(canvas.clientHeight*dpr)
canvas.width = width;
canvas.height = height

const canvas2 = document.getElementById("canvas2") as HTMLCanvasElement;
const ctx2 = canvas2.getContext("2d") as CanvasRenderingContext2D;
const dpr2 = window.devicePixelRatio || 1
const width2 = 750 //Math.floor(canvas2.clientWidth*dpr2)
const height2 = 750 //Math.floor(canvas2.clientHeight*dpr2)
canvas2.width = width2;
canvas2.height = height2

const box = document.getElementsByClassName("box")[0] as HTMLDivElement;


ctx.fillStyle = "grey"
/* ########### */






let grid:Grid;

function drawAll(){
  // ctx.clearRect(0,0,width,height)
  ctx2.clearRect(0,0,width2,height2)
  grid.items.map((i)=>{
    i.draw(ctx2)
  })
}




// canvasBox.addEventListener("mouseout",function(e){
  // canvas.style.transition = ".5s"
  // })
  






  // const vanishedImage = new VanishPerspective(ctx2,width2,height2)
  // vanishedImage.createBackground()
  //item.draw(ctx2)


  const yourFunction = async () => {
    setTimeout(() => {
      grid = new Grid(ctx,height2,width2)
      const canvasBox = new CanvasBox(document.getElementById("canvasBox") as HTMLDivElement, box, grid.items,drawAll )
    
      const item: Item = new Item(50,50,100,"CEC075","C63849")
      const colorSelector = new ColorSelection(grid.items, drawAll)
    grid.draw(4,30)
    
    
    console.log(width,height,width2,height2) 
    drawAll()

    },2000)


  };

  yourFunction()
  // vanishedImage.applyVanishingPointPerspectiveGrid(500,ctx)

/*
ctx.fillStyle = "purple"
ctx.strokeStyle = "pink"

const size = width / 2 
const center = (width/2) - (size/2)
 ctx.fillRect(center,center, size,size);
 
 
 ctx.fillStyle = "red"
 ctx.beginPath();
 ctx.arc(size,size, size/2, 0, Math.PI*2)
 ctx.fill()
 
 
ctx.fillStyle = "red"
ctx.strokeStyle = "black"

const squareWidth = width/2

const startY=25
const startX=31
ctx.beginPath();
ctx.moveTo(startX,startY)
ctx.lineTo(startX+squareWidth,startY)
ctx.lineTo(startX+squareWidth,startY+squareWidth)
ctx.lineTo(startX,startY+squareWidth)
ctx.lineTo(startX,startY)

ctx.fill()
ctx.stroke()
*/