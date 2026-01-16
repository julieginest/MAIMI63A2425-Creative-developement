import { Item } from './Item';
export class CanvasBox{
    isMoving: boolean = false;
    element: HTMLDivElement;
    // xRotationStart: number;
    // yRotationStart: number;
    // xRotation: number;
    // yRotation: number;
    xRotationDirection: number;
    yRotationDirection: number;
    lastMovment: number = Date.now();
    items :Item[];
    box: HTMLDivElement;
    private drawAll: ()=> void;
    
    transi:number =500;
    deltaT :number = this.transi;
  
    constructor(element: HTMLDivElement, box: HTMLDivElement, items: Item[], drawAll: ()=> void){
      this.element = element
        this.box = box
        this.items = items
        this.drawAll=drawAll

      var _this=this
  
      // this.xRotation = 0
      // this.yRotation = 0
      // this.xRotationStart = 0
      // this.yRotationStart = 0
      this.xRotationDirection = 0
      this.yRotationDirection = 0
  
      this.element.addEventListener("mousemove",function(e){
       _this.mouseMove(e)
      })
  
      this.element.addEventListener("mouseout",function(e){
        e.preventDefault()
        _this.mouseOut(e)
      })
    }


  // private changeDirection(){
  //   this.xRotationStart = this.xRotation
  //   this.yRotationStart = this.yRotation
  //   // this.lastMovment=Date.now()
  //   this.deltaT = 0
  //   this.items.map((i:Item) => i.rotate(16))

  // }

  private mouseMove(e:MouseEvent){

    // this.changeDirection()

    const xPos = (e.pageX - this.element.offsetLeft) - (this.element.offsetWidth/2)-594+185
    const yPos = (e.pageY - this.element.offsetTop) - (this.element.offsetHeight/2)-594+185
    console.log("xPos: "+xPos+"\nyPos: "+yPos+"\nxR: "+this.xRotationDirection+"\nyR: "+this.yRotationDirection)
    
    this.xRotationDirection = (15*xPos)/(this.element.offsetWidth/2)
    this.yRotationDirection = -(15*yPos)/(this.element.offsetHeight/2)

    //console.log("xR: "+this.xRotationDirection+"\nyR: "+this.yRotationDirection)
    this.box.style.transform = "rotateY("+this.xRotationDirection+"deg) rotateX("+this.yRotationDirection+"deg)"
    this.items.map((i:Item) => i.rotate(
      Math.max(
        Math.min(this.xRotationDirection+16,31),
        1
      )
    ))

    this.drawAll()

    // if(!this.isMoving){
    //   // console.log("aaaaaaaaaaa")
    //   this.isMoving = true
    //   this.moving()
    // }
    // canvas.style.transform = "rotateX("+yRotate+"deg)"
    // item.rotate(Math.round(Math.asin(-new DOMMatrix(window.getComputedStyle(box).transform).m23*(180/Math.PI))))
    // console.log(Math.round(Math.asin(-new DOMMatrix(window.getComputedStyle(box).transform).m23*(180/Math.PI))))
    
  }
  
  private mouseOut(e:MouseEvent){
    // console.log("OUT!")
    this.xRotationDirection = 0
    this.yRotationDirection = 0

    this.box.style.transform = "rotateY("+this.xRotationDirection+"deg) rotateX("+this.yRotationDirection+"deg)"
    this.items.map((i:Item) => i.rotate(
      Math.max(
        Math.min(this.xRotationDirection+16,31),
        1
      )
    ))

    this.drawAll()

    

    
    // if(!this.isMoving){
    //   this.isMoving = true
    //   // console.log("aaaaaaaaaaa")
    //   this.moving()
    // }
  }
  
  // private moving(/*xR:number, yR: number*/){
  //   const deltaRX: number =  this.xRotationDirection - this.xRotationStart
  //   const deltaRY: number =  this.yRotationDirection - this.yRotationStart

    

  //   //console.log(
  //     //"yRD: "+ this.yRotationDirection + "\n"+
  //     //"yR: "+ this.yRotation +"\n"//+
  //     //"xRD: " + this.xRotationDirection +"\n"+
  //     //"xR: " + this.xRotation + "\n"
  //     //this.isMoving+"\n"+
  //     //this.xRotation+"\n"+
  //     //this.yRotation+"\n"+
  //     //this.deltaT
  //   //)
  //   this.deltaT = Math.min(Date.now()-this.lastMovment,this.transi)

  //   this.xRotation = Math.min(Math.max(this.xRotationStart - ((deltaRX )*(this.deltaT/this.transi)),-15),15)
  //   this.yRotation = Math.min(Math.max(this.yRotationStart - ((deltaRY )*(this.deltaT/this.transi)),-15),15)

    
  //   /*console.log(box.style.transform)/* this.xRotation+"\n"+
  //   this.yRotation+"\n") */
    
  //   this.drawAll()
    
  //   window.requestAnimationFrame( () =>{
  //     this.box.style.transform = "rotateY("+this.xRotationDirection+"deg) rotateX("+this.yRotationDirection+"deg)"
  //     console.log(Math.max(
  //       Math.min(this.xRotation+16,31),
  //       1
  //     ))
  //     this.items.map((i:Item) => i.rotate(
  //       Math.max(
  //         Math.min(this.xRotation+16,31),
  //         1
  //       )
  //     ))
      
  //     if(/*Date.now() < this.lastMovment+500(this.yRotationDirection!=this.yRotation && this.xRotationDirection != this.xRotation) || */this.deltaT < this.transi){
  //       this.moving()
  //       //console.log(deltaT)
  //     }else{
  //       console.log(this.deltaT <= this.transi)
  //       //console.log("UwU"+this.xRotation)
  //       this.yRotationStart=this.yRotationDirection
  //       this.xRotationStart=this.xRotationDirection
  //       this.yRotation=this.yRotationDirection
  //       this.xRotation=this.xRotationDirection
  //       // box.style.transform = "rotateY("+this.xRotation+"deg) rotateX("+this.yRotation+"deg)"
        
  //       this.isMoving = false
  //       this.deltaT = 0


  //     }
  //   }
  //   )

  // }
}