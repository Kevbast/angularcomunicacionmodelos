//EJEMPLO DE MODELO
export class Producto{
    //CREAMOS LAS PROPIEDADES, PARA QUE SEAN ACCESIBLES PUES TIENEN QUE SER PÚBLICAS
    /*public nombre:string;
    public imagen:string;
    public precio:number;*/
    
    //CREAMOS UN CONSTRUCTOR CON PARAMETROS PARA QUE RECIBA LA INFORMACION DE LAS PROPIEDADES DIRECTAMENTE
    /*constructor(name:string,image:string,price:number){
        this.nombre=name;
        this.imagen=image;
        this.precio=price;
    }*/

    //ESTA SERÍA OTRA MANERA,existe otra sintaxis para los modelos y sus propiedades

    constructor(
    public nombre:string,
    public imagen:string,
    public precio:number
    ){}




}