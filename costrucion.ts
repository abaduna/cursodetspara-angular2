class auto{
    public color:string;
    public modelo:string;
    public velocidad:number

        constructor(modelo == null){
        this.velocidad = 0 ,
        this.modelo ="BXN blaco" ,
        this.color = "white",
    }
    public getcolor() : string {
        return this.color
    }
    public getVelocidadsetcolor(color:string){
        this.color = color;
    }
    public acelerar(){
        this.velocidad ++ ;
    }
    public frenar(){
        this.velocidad -- ;
    }
    public getVelocidad():any{
        return this.velocidad
        }
    
 }

function getcolor() {
    throw new Error("Function not implemented.");
}
