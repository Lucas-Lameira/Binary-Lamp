const array = [1, 2, 4, 8, 16, 32, 64, 128];//dontknow yet
let turn = false;

function change(turn) {
    if(!turn){
        lamp.style.backgroundColor = 'yellow';           
        turn = true        
    }else{
        lamp.style.backgroundColor = 'white';           
        turn = false        
    }   
}


