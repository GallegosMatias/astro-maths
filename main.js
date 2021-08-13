//Cuadrado
console.group("Cuadrados")

/*const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden " + ladoCuadrado + "cm");*/

function perimetroCuadrado(lado) {
    return lado * 4;
}

/*const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");*/

function areaCuadrado(lado) {
    return lado * lado;
}

/*const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El area del cuadrado es: " + areaCuadrado + "cm2");*/

console.groupEnd("Cuadrados");

//Triangulo

console.group("Triangulos");

/*const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;

console.log("Los lados del triangulo miden: " + ladoTriangulo1 + "cm, " + ladoTriangulo2 + "cm, " + baseTriangulo + "cm");

const alturaTriangulo = 5.5;
console.log("La altura del triangulo es de: " + alturaTriangulo + "cm");

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perimetro del triangulo es: " + perimetroTriangulo + "cm");

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("El area del triangulo e    s: " + areaTriangulo + "cm");*/

function perimetroTriangulo(lado1, lado2, base) {
    return lado1, lado2, base;
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

console.groupEnd("Triangulos");

// Circulo

console.group("Circulo");

/*//Radio
const radioCirculo = 4;
console.log("El radio del circulo es :" + radioCirculo + "cm");

//Diametro
const diametroCirculo = radioCirculo * 2;
console.log("El diametro del circulo es :" + diametroCirculo + "cm");

//Pi
const Pi = Math.PI;
console.log("Pi es igual a :" + Pi);

//Circunferencia
const perimetroCirculo = diametroCirculo * Pi;
console.log("El perimetro del circulo es :" + perimetroCirculo + "cm");

//Area
const areaCirculo = Pi * (radioCirculo * radioCirculo);
console.log("El area del circulo es: " + areaCirculo + "cm2");*/

//Pi
const Pi = Math.PI;
console.log("Pi es igual a :" + Pi);


function diametroCirculo(radio) {
    return radio * 2;
}

function perimetorCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * Pi;
}

function areaCirculo(radio) {
    return Pi * (radio * radio);
}

console.groupEnd("Circulo");

// Button functions

function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}


// Reto triangulo isósceles

function alturaIsosceles(lado1, lado2, base) {
    const altura = (Math.sqrt(((lado1 * lado2) - ((base / 2) ** 2))));

    if (lado1 === lado2) {
        return altura;
    } else {
        return "No es un triangulo isosceles";
    }

}


