const form =document.getElementById('form');
const input =document.getElementById('email');
const error =document.getElementById('error');

form.addEventListener('submit', (e)=>{
e.preventDefault();

if (input.value===""){
 error.style.display='block';
 return;
}
else if(input.value.indexOf('@')=== -1){
 error.style.display='block';    
}
else{
error.style.display='none';    
}

});