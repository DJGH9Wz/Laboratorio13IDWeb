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
    let sinDuplicados=new Set(['Naranja', 'Rojo', 'Azul', 'Naranja', 'Azul']);
    console.log(sinDuplicados);
}
const ejer7 =() =>{
    
}
const ejer8 =() =>{
    
}
const ejer9 =() =>{
    
}