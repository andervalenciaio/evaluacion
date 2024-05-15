let figura = prompt("hola, ingresa la figura a la cual desea realizar el calculo (en numero). opciones: 1=circulo, 2=rectangulo, 3=triangulo")

figura=parseInt(figura)

if (figura === 1 ){
   let radio = prompt("ingrese el radio")
   radio = parseInt(radio)
   area1 = 3.14*radio**2
   alert("el area de su circulo es: " + area1)
} else if (figura === 2 ){
   let base= prompt("ingrese la base ")
   base = parseInt(base)
   let altura= prompt("ingrese la altura")
   altura=parseInt(altura)
   let area = base*altura 
   area=parseInt(area)
   let perimetro= (base+altura)*2
   alert("el area es:"+area+" y el perimetro es:"+perimetro)
} else if (figura === 3 ){
    let base2= prompt("ingrese la base ")
    base2=parseInt(base2)
    let altura2= prompt("ingrese la altura")
    altura2=parseInt(altura2)
    let area2= base2*altura2/2
    alert("el area de el triangulo es:"+ area2)
}else{
    alert("numero no valido")
}

alert("gracias por usar la calculadora")