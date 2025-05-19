 console.log("hola")
//Strings
var myString ="texto"
//myString = 5 |Error por tipado
console.log(typeof myString) //da el tipo de la variable
let myString2: string ="cadena de texto"
myString2="cambiado"
console.log(myString2)
//Numeros
let myNumber =7
myNumber= myNumber+4
console.log(myNumber)
console.log(myNumber -1)
//Mix
console.log(myString+" "+myNumber)//concatenar mixtos
let myNumber2=6.5
console.log(myNumber2)
console.log(typeof myNumber2)
//Boolean
let myBool : boolean=false
myBool=true
console.log(myBool)
console.log(typeof myBool)
//Undefined
let myUndefined: undefined
console.log(myUndefined)
//Controles de flujo
if (myNumber = 10){
    console.log("myNumber es 10"+" ("+myNumber+")")
} else if (myNumber = 11){
    console.log("myNumber es 11")
} else {
    console.log("myNumber no es 10 ni 11")
}
//Constantes
const myConst ="Constante"
// myConst= "otro valor" | fallo porque es constante
console.log(myConst)
//funciones
function myFunction(): void{//void indica que no necesita return, : indica tipo de datos de retorno
    console.log("funcion")
}
myFunction()
function myFunction2(): string{
    return "mi funcion 2"
}
console.log(myFunction2())
function sumTwoNumbers(FirstNumber:number,SecondNumber:number){
    return FirstNumber+SecondNumber
}
console.log(sumTwoNumbers(8,5))
//List
let myList: Array<string> =["Bustos","Alvarez","Peña"]//tipo de Array va ente <>
console.log(myList)
//Set
let mySet: Set<string> = new Set (["Bustos","Alvarez","Peña","Bustos"])//set no muestra valores repetidos
mySet.add("Añadido")//ingresar al set/array
console.log(mySet)
//Mapa
let myMap: Map<string, number> = new Map ([["Peña",15],["Alvarez",3]])//cada par de valores dentro de su propio []
myMap.set("Bustos",36)
console.log(myMap)
console.log(myMap.get("Alvarez"))
//Bucles
for (const value of myList){
    console.log(value)
}
//myList.forEach
let myCounter = 0
while(myCounter< myList.length){
    console.log(myList[myCounter])
    myCounter++
}
//Clases
class myClass{
    name:string
    age:number
    constructor(name:string,age:number){//asignar forma de construir clase
        this.name=name
        this.age=age
    }
}
let myClass2=new myClass("Luna",10)
console.log(myClass2)
console.log(myClass2.name)
//Enum
enum myEnum{
    DART = "dart",
    PYTHON = "python",
    SWIFT = "swift",
    JAVA = "java",
    KOTLIN = "kotlin",
    JAVASCRIPT = "javascript"
}
const myEnum2=myEnum.DART
console.log(myEnum2)