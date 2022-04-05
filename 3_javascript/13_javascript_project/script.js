// captcha generator
function captchagenerator(){
    var alpha = new Array('A','B','C','D','E','F','G','H','a','b','c','d','e','f','g','h');
//  alpha[0]  -> 'A'
// console.log(alpha.length);       // gives length
// console.log(alpha[15]);          // gives value of 15th index
  
//   console.log( Math.random())             //it generate random no. from 0 to 1 in points 

var A,B,C,D,E,F,x;

 A = (alpha[ Math.floor(Math.random()*alpha.length)]);
 B = (alpha[ Math.floor(Math.random()*alpha.length)]);
 C = (alpha[ Math.floor(Math.random()*alpha.length)]);
 D = (alpha[ Math.floor(Math.random()*alpha.length)]);
 E = (alpha[ Math.floor(Math.random()*alpha.length)]);
 F = (alpha[ Math.floor(Math.random()*alpha.length)]);

 x = A+B+C+D+E+F;
 document.getElementById("mainCaptcha").value=x;

}    
captchagenerator();


// is valid 


// remove spaces