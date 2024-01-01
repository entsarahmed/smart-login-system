var nameInputSign=document.getElementById('nameInputSign');
var emailInputSign=document.getElementById('emailInputSign');
var passwordInputSign=document.getElementById('passwordInputSign');
var btnSignUp=document.getElementById('btnSignUp');
var messageSuccess=document.querySelector('.text-success');
var messageDangerSign=document.querySelector('.text-danger');
var messageExit=document.getElementById('messageExit');
var listArr=[];
   


if (localStorage.getItem("user") != null) {
  listArr = JSON.parse(localStorage.getItem("user"));
  
}



//!sign ip function

function exitLocalData(){
for(var i =0; i<listArr.length;i++){
  if(listArr[i].email == emailInputSign.value){
    messageExit.classList.remove('d-none');
    messageSuccess.classList.add('d-none');
    messageDangerSign.classList.add('d-none');
return true;
  }

}
}


 btnSignUp.addEventListener('click',function(){
  createData();
}) 



//! button sign up
function createData(){
if (nameInputSign.value=="" || emailInputSign.value=="" || passwordInputSign.value=="" ){ //validationNameSign()==true && validationEmailSign()==true && exitLocalData()!=true){
  messageDangerSign.classList.remove('d-none');
 }else{
   if(listArr.length==0){
  var users={
 name:nameInputSign.value,
 email:emailInputSign.value,
 password:passwordInputSign.value
}
 listArr.push(users);
console.log(listArr);
localStorage.setItem('user',JSON.stringify(listArr));
clearDataSign();
 messageSuccess.classList.remove('d-none');
 messageDangerSign.classList.add('d-none');
 messageExit.classList.add('d-none');
}else{
  if(exitLocalData()==true){
    messageExit.classList.remove('d-none');
    messageDangerSign.classList.add('d-none');
    messageSuccess.classList.add('d-none');

  }else{
    var users={
      name:nameInputSign.value,
      email:emailInputSign.value,
      password:passwordInputSign.value
     }
      listArr.push(users);
     console.log(listArr);
     localStorage.setItem('user',JSON.stringify(listArr));
     clearDataSign();
     messageSuccess.classList.remove('d-none');
     messageDangerSign.classList.add('d-none');
     messageExit.classList.add('d-none');
  }
}
 }
}

 //* function clear
function clearDataSign(){
  nameInputSign.value="";
  emailInputSign.value="";
  passwordInputSign.value="";
}

