console.log("Ritwik");
//declaring const with buttons 
const buttons = document.querySelectorAll('.button'); //querySelectAll is a function that will select all the buttons all at once.
const body = document.querySelector('body'); //we need to change the bg color of the page which is in the body part thus querySelector will help to selct the body part.

buttons.forEach(function(button){
    console.log(button);
    button.addEventListener('click', function(e){
        console.log(e);
        console.log(e.target);
        //conditional statement use
        if(e.target.id === 'Red'){
            body.style.backgroundColor = e.target.id; 
        }
        if(e.target.id === 'Blue'){
            body.style.backgroundColor = e.target.id; 
        }
        if(e.target.id === 'Green'){
            body.style.backgroundColor = e.target.id; 
        }
        if(e.target.id === 'Yellow'){
            body.style.backgroundColor = e.target.id; 
        }
        if(e.target.id === 'Grey'){
            body.style.backgroundColor = e.target.id; 
        }
        if(e.target.id === 'Purple'){
            body.style.backgroundColor = e.target.id; 
        }
    
    })
})