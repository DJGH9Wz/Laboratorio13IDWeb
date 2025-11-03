const ejer3 =() =>{
    function doblarNumero(arreglo){
        let nuevoArreglo=[];
        for(const n of arreglo){
        nuevoArreglo.push(n*2);
        }
        alert(nuevoArreglo);
    }

    let lista=[2,3,5,6,7,8,6];
    doblarNumero(lista);
}

const ejer4 =() =>{
    function filtrarYTransformar(arr){
        let suma=0;
        for(let i=0;i<arr.length;i++){
            if(arr[i]<0){
                arr.splice(i,1);
                i--;
            }else{
                arr[i]=arr[i]**2;
                suma+=arr[i];
            }
        }
        alert(arr);
        alert('La suma es de '+suma);

    }
    let arreglo=[2,-3,2,-1,5,-6,7];
    alert(arreglo);
    filtrarYTransformar(arreglo);
}

const ejer5 =() =>{
    function reordenarPalabras(oracion){
        return oracion.split(' ').map(palabra => palabra.toUpperCase()).sort();
    }

    oracion=prompt('Ingrese su oracion');
    alert(reordenarPalabras(oracion));
    
}

const ejer6 =() =>{
    let nombres = ["Manuel", "Djins", "David", "Manuel", "Osmeyer", "Djins"];
    let sinDuplicados = new Set([...nombres]);

    console.log(sinDuplicados);
}

const ejer7 =() =>{
    function tieneDuplicados(arr){
        const nombres=new Set([...arr])
        return nombres.size!=arr.length;
    } 

    let nombres = ["Manuel", "Djins", "David", "Manuel", "Osmeyer", "Djins"];
    
    if(tieneDuplicados(nombres)){
        alert('Si tiene duplicados');
    }else{
        alert('No tiene duplicados')
    }
    
}

const ejer8 =() =>{
    const precios = new Map([
    ["carne", 4.5],
    ["arroz", 12],
    ["harina", 7],
  ]);
  let lista = [100, 12, 1];

  let precio =
    precios.get("carne")*lista[0] +
    precios.get("arroz")*lista[1] +
    precios.get("harina")*lista[2];
  alert("El precio final es " + precio);

}

const ejer9 =() =>{
    function contarPalabras(texto) {
    const repetidos=new Map();
    const palabras = texto.toLowerCase().split(" ");
    for (const p of palabras) {
        repetidos.set(p, (repetidos.get(p)||0) + 1);
        }
    return repetidos;
    }

console.log(contarPalabras("comida desayuno almuerzo cena y mas"));

}

const ejer10 =() =>{

    function invertirMap(mapa){
        const invertidoMapa=new Map([...mapa].map(([clave,valor])=>[valor,clave]));
        return invertidoMapa;
    }

    const originalMap = new Map([
        ['Nombre', 'Manuel'],
        ['Apellido', 'Valdivia'],
        ['Edad', 19]
    ]);
    console.log(invertirMap(originalMap));
    
}

const ejer11 =() =>{
    let auto={
        marca: 'toyota',
        modelo: 'Corolla',
        año: '2022',
        detalles(){
            console.log('Marca: '+this.marca+
                '\nModelo: '+this.modelo+
                '\nAño: '+this.año);
        }  
    }

    auto.detalles();
    
}

const ejer12 =() =>{
    function contarLetras(text){
        const limpio=text.toLowerCase().match(/[a-z]/g)||[]; 
    
        return limpio.reduce((contador, letra) => {
            contador[letra]=(contador[letra]||0) + 1;
            return contador;
        }, {});
    }
    console.log(contarLetras("hola como estan"));
}

const ejer13 =() =>{
    function combinarCatalogos(tiendaA, tiendaB) {
    const resultado = {};

    for (let producto in tiendaA) {
        resultado[producto]=tiendaA[producto];
    }

    for (let producto in tiendaB) {
        if (resultado[producto]!=undefined) {
            resultado[producto]=Math.min(resultado[producto], tiendaB[producto]);
        } else {
            resultado[producto]=tiendaB[producto];
        }
    }

    for (let producto in resultado) {
        resultado[producto] = Number(resultado[producto].toFixed(2));
    }

    return resultado;
}

const tiendaA = {
    laptop: 3500.5,
    mouse: 100.35,
    teclado: 250.9
}

const tiendaB = {
    mouse: 95.2,
    monitor: 720.457,
    teclado: 260.1
}

console.log(combinarCatalogos(tiendaA, tiendaB));

}

const ejer14 =() =>{
    function gestionarEmpleados(empleados) {
    const mapa = new Map();

    for (const emp of empleados) {
        if (!mapa.has(emp.area)) {
            mapa.set(emp.area, []);
        }
        mapa.get(emp.area).push(emp.nombre);
    }

    return mapa;
}

const empleados = [
    { id: 1, nombre: "Juan", area: "Ventas", salario: 2400 },
    { id: 2, nombre: "Marta", area: "Ventas", salario: 2600 },
    { id: 3, nombre: "Luis", area: "TI", salario: 4000 },
    { id: 4, nombre: "Ana", area: "Recursos Humanos", salario: 3000 }
]

console.log(gestionarEmpleados(empleados));

}