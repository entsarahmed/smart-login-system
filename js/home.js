document.getElementById("result").innerHTML=`welcome ${localStorage.getItem('username')}`;
var logOut=document.getElementById('logOut');
logOut.addEventListener('click',function(){
  window.location='./index.html';
})