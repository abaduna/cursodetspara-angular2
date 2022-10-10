  class auto{
    
    

    public color:string;
    public modelo:string;
    public velocidad:number = 0 


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

var coche1 = new auto();


coche1.getVelocidad()
// coche1.acelerar()
// coche1.acelerar()
// coche1.acelerar()
// console.log(coche1.acelerar());
