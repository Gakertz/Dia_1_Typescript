//Día 1: Proyecto TypeScript – Inventario de prendas
//Objetivo: Practicar tipos, interfaces y clases.

//Proyecto:
//Crea una app en consola que gestione un inventario básico de ropa.

//Características:
//Define una interfaz Prenda con nombre, talla, tipo (camisa, pantalón), y estado (nuevo/usado).

//Agrega funciones para:
//Listar prendas
//Agregar nuevas prendas
//Buscar por tipo

//Extra: Usa clases para crear instancias de prendas.

class ClaseRopa{
    Nombre: string
    Tipo: string
    Talla: string
    Estado:boolean
    Cantidad: Number

    constructor(Nombre: string, Tipo: string,Talla:string,Estado:boolean,Cantidad:Number) {
        this.Nombre = Nombre;
        this.Tipo = Tipo;
        this.Talla=Talla
        this.Estado=Estado
        this.Cantidad=Cantidad

    }
}
let ListaRopa: Set<ClaseRopa> = new Set([])

let Jeans = new ClaseRopa("Jeans", "Pantalón","XL",false,10)
let Camiseta = new ClaseRopa("Camiseta", "Camisa","L",true,7)  
let Camisa = new ClaseRopa("Camisa", "Camisa","M",false,13)
let Cargo = new ClaseRopa("Cargo", "Pantalón","S",true,3)

ListaRopa.add(Jeans)
ListaRopa.add(Camiseta)
ListaRopa.add(Camisa)
ListaRopa.add(Cargo)
console.log(ListaRopa);

let TipoSeleccionado:string = "Camisa" 

function AgregarPrenda(Nombre: string, Tipo: string,Talla:string,Estado:boolean,Cantidad:Number) {
    let NuevaPrenda = new ClaseRopa(Nombre, Tipo,Talla,Estado,Cantidad)
    ListaRopa.add(NuevaPrenda)
    return console.log("Prenda agregada: " + NuevaPrenda.Nombre + " de tipo " + NuevaPrenda.Tipo+" Talla:"+Talla+" Nuevo?:"+Estado+" Cantidad:"+Cantidad);
}
function ListarPrendas() {
    console.log("Lista de prendas:")
    ListaRopa.forEach((prenda) => {
        console.log("Prenda: "+prenda.Nombre + " tipo: " + prenda.Tipo+" Talla:"+prenda.Talla+" Nuevo?:"+prenda.Estado+" Cantidad:"+prenda.Cantidad)
    })
}
function BuscarPrendaPorTipo(tipo: string) {
    let prendasEncontradas = Array.from(ListaRopa).filter((prenda) => prenda.Tipo === tipo)
    if (prendasEncontradas.length > 0) {
        console.log("Prendas encontradas del tipo " + tipo + ":")
        prendasEncontradas.forEach((prenda) => {
            console.log(prenda.Nombre)
        })
    } else {
        console.log("No se encontraron prendas del tipo " + tipo)
    }
}
ListarPrendas()
console.log("")
AgregarPrenda("Short", "Pantalón","XXL",true,5)
console.log("")
ListarPrendas()
console.log("")
BuscarPrendaPorTipo(TipoSeleccionado)
console.log("")
TipoSeleccionado="Pantalón"
BuscarPrendaPorTipo(TipoSeleccionado)