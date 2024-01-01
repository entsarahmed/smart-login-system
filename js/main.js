//! login form
var emailInputLogin=document.getElementById('emailInput');
var passwordInputLogin=document.getElementById('passwordInput');
var btnLogin=document.getElementById('btnLogin');
var homeName=document.getElementById('homeName');
//var listArr=[];
if(localStorage.getItem('user') != null){
  var listArr=JSON.parse(localStorage.getItem('user'));
}
var message=document.querySelector('.message');
 function validationLogin(){
  
  if(emailInputLogin.value=="" || passwordInputLogin.value==""){
    message.classList.remove('d-none');
  }else{
    if(existLocal()==true){

window.location='./home.html';
    }else{
      messageerror.classList.remove('d-none');
      message.classList.add('d-none');

    }
  }
  }

btnLogin.addEventListener('click',function(){
  validationLogin();
  
})  
var messageerror=document.querySelector('.messageerror');
function existLocal(){
  for(var i=0;i<listArr.length;i++){
    if(listArr[i].name!=""&&emailInputLogin.value==listArr[i].email&&passwordInputLogin.value==listArr[i].password){
      localStorage.setItem('username',listArr[i].name);
      messageerror.classList.add('d-none');
      message.classList.add('d-none');

      return true;
    }else{
      messageerror.classList.remove('d-none');
      message.classList.add('d-none');

    }
  }
}