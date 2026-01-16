import {Item} from './Item'

export class ColorSelection{
    nmbr: number = 1
    selector :HTMLDivElement
    color1Div: HTMLDivElement; 
    color2Div: HTMLDivElement; 
    color1: string; 
    color2: string; 
  
    allItems: Item[]

    drawAll: () => void;
  
    colorsList=[
      "CEC075","C63849",
      "B0B0B0","7D5613","5D0A0B"
    ]
  
    constructor(items: Item[], callBack: () => void){
      this.selector = document.getElementById("colorSelector") as HTMLDivElement
      this.color1Div = document.getElementById("colorSelect0") as HTMLDivElement
      this.color2Div = document.getElementById("colorSelect1") as HTMLDivElement
      this.color1 = this.colorsList[0]
      this.color2 = this.colorsList[1]
      this.drawAll = callBack
      this.allItems = items
  
      const _this = this
      document.getElementById("colorSelect0")?.addEventListener("click",function(e){
        _this.selectColor(0)
       })
      document.getElementById("colorSelect1")?.addEventListener("click",function(e){
        _this.selectColor(1)
       })
      document.getElementById("colorSelect2")?.addEventListener("click",function(e){
        _this.selectColor(2)
       })
      document.getElementById("colorSelect3")?.addEventListener("click",function(e){
        _this.selectColor(3)
       })
      document.getElementById("colorSelect4")?.addEventListener("click",function(e){
        _this.selectColor(4)
       })
    }
  
    private selectColor(id:number) {
      console.log(this.nmbr,id)
      if(this.nmbr == 1){
        this.color1Div = document.getElementById("colorSelect"+id) as HTMLDivElement
        console.log(this.color1Div)
        this.color1 = this.colorsList[id]
        const newSpan = document.createElement("span")
        newSpan.className="Selected"
        newSpan.id="Selected1"
        newSpan.textContent="1"

        console.log(document.getElementById("Selected1"))
        document.getElementById("Selected1")?.remove()
        const a = (document.getElementById("colorSelect"+id) as HTMLDivElement).appendChild(newSpan)
        
        this.nmbr = 2
      }else if(this.nmbr == 2){
        this.color2Div = document.getElementById("colorSelect"+id) as HTMLDivElement
        this.color2 = this.colorsList[id]
        const newSpan = document.createElement("span")
        newSpan.className="Selected"
        newSpan.id="Selected2"
        newSpan.textContent="2"
        
        this.color1Div.appendChild(newSpan)
        document.getElementById("Selected2")?.remove()
        const a = (document.getElementById("colorSelect"+id) as HTMLDivElement).appendChild(newSpan)
        
        this.nmbr = 1
      }
      console.log(this.color1,this.color2)
      this.allItems.map((e)=>{
        e.changeColor(this.color1,this.color2)
      })
      this.drawAll
    }
  }