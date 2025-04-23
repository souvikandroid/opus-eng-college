{/* <form action="./nextindex.html" onsubmit="data(event)">
username:
<input type="text" id="n1"><br><br>
contact no:
<input type="contact" id="n2"><br><br>
password:
<input type="email" id="n3"><br><br>
confirm password:
<input type="text" id="n4"><br><br>
<input type="submit" value="click to submit">
</form>
<!-- dom:document object model class/id -->
<script>
function data(event){
    var a=document.getElementById('n1').value;
var b=document.getElementById('n2').value;
var c=document.getElementById('n3').value;
var d=document.getElementById('n4').value;

if(a == "" || b == "" || c== "" || d== ""){
    alert("all fields are required");
    event.preventDefault();
    return false;
}
else if(b.length<10 || b.length>10){
    alert("min 10 digits");
    event.preventDefault();
    return false;
}
else if(c!=d){
    alert("password and confirm password should be same");
    event.preventDefault();
    return false;
}
return true;
}
// </script> */}
// // const hamberger=document.getElementById('hamberger');
// // const navigation=document.getElementById('navigation');
// // hamberger.addEventListener('click',()=>{
// //     navigation.style.display='block';
// //     hamberger.style.display='none';
// //     navigation.style.position='absolute';
// //     navigation.style.top='80px';
// //     navigation.style.left='20px';
// //     navigation.style.flexDirection='column';
// // })

const hamburger = document.getElementById('hamburger-icon');
const navigation = document.getElementById('navigation');

hamburger.addEventListener('click',()=>{
    hamburger.style.display = 'none';
    navigation.style.display = "block";

})