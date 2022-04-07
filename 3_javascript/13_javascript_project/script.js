// captcha generator
function captchagenerator(){
    var alpha = new Array('A','B','C','D','E','F','G','H','a','b','c','d','e','f','g','h');
//  alpha[0]  -> 'A'
// console.log(alpha.length);       // gives length
// console.log(alpha[15]);          // gives value of 15th index
  
//   console.log( Math.random())             //it generate random no. from 0 to 1 in points 

var A,B,C,D,E,F,result;

 A = (alpha[ Math.floor(Math.random()*alpha.length)]);
 B = (alpha[ Math.floor(Math.random()*alpha.length)]);
 C = (alpha[ Math.floor(Math.random()*alpha.length)]);
 D = (alpha[ Math.floor(Math.random()*alpha.length)]);
 E = (alpha[ Math.floor(Math.random()*alpha.length)]);
 F = (alpha[ Math.floor(Math.random()*alpha.length)]);

 result = A +" "+ B +" "+ C +" "+ D +" "+ E +" "+F;
 document.getElementById("mainCaptcha").value=result;

}    



// is valid 
function isValid()
{
    var one = removeSpaces(document.getElementById("mainCaptcha").value);
    var two = removeSpaces(document.getElementById("inputCaptcha").value);

    if(one == two)
{
    return true;
}
else{
    return false;
}
}
// remove spaces

function removeSpaces(string){
    // console.log(string.split(" ").join(""));
    var x = string.split(" ");
    var s = x.join("");

    return s;
}