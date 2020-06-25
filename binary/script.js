var lamps = document.querySelectorAll('div.lamp');
let fieldsetElement = document.getElementById('binary');
let binaryElement = document.getElementById('binary');
let decimalElement = document.getElementById('decimal')
let total = 0;

let arr = [0,0,0,0,0,0,0,0];

function change(lamp) {
    if(lamp.style.backgroundColor === 'white'){    
        lamp.style.backgroundColor = 'yellow';
        binario(lamp.id);
        sum(lamp.id);                                     
        return;
    }else{
        lamp.style.backgroundColor = 'white';
        tiraBinario(lamp.id);        
        subtract(lamp.id)
        return;
    }        
}

function binario (id) {
    //console.log(id);//string             
    let k = 1;      
    binaryElement.innerHTML = '';    
    for(let i = 7; i>0; i--){        
        if(id==k)
            arr[i] = 1;            
        k+=k;
       
    }    
    for(let i = 0; i<8; i++){
        binaryElement.appendChild(document.createTextNode(arr[i]));        
    }

}

function tiraBinario(id) {
    let k = 1;
    binaryElement.innerHTML = '';
    for(let i = 7; i>0; i--){
        if(id==k)
            arr[i] = 0;
        k+=k        
    }

    for(let i = 0; i<8; i++){
        binaryElement.appendChild(document.createTextNode(arr[i]));        
    }
}

function sum(id){
    decimalElement.innerHTML = '';
    total += Number(id);    
    decimalElement.appendChild(document.createTextNode(total))
    
}

function subtract (id) {
    decimalElement.innerHTML = '';
    total -= Number(id)
    decimalElement.appendChild(document.createTextNode(total))
}

lamps.forEach(lamp => {
    lamp.style.backgroundColor = 'white';
    lamp.addEventListener('click', () => change(lamp));
})