var lamps = document.querySelectorAll('div.lamp');
console.log(lamps);

var turn = false;

function change(lamp) {    
    if(!turn){
        lamp.style.backgroundColor = 'yellow';           
        turn = true        
    }else{
        lamp.style.backgroundColor = 'white';           
        turn = false        
    }   
    console.log(turn)
}

lamps.forEach(lamp => {
    console.log(lamp);
    lamp.addEventListener('click', () => change(lamp));    
})



