// array

// let c = 10;
// let b = 29;

// collection of different type of elements

// let a = [10,20,30,40,5];
//       // 0 , 1,2 ,3, 4
// console.log(typeof a);

// console.log(a);                  // 10,20,30,40,5

// console.log(typeof a[0]);        // number
 
// console.log(a[6]);               // undefined

// console.log(a[-1]);              // undefined

// //length

// console.log(a.length);

// a[2] = 100;

// console.log(a);

// a[9] = 300;

// console.log(a);              // 10 20 100 40 5 , , , , ,300

// let b  = [
//     "orange",
//     true,
//     {name : "dev"},
//     function(){alert("hello from b");}
// ];

// console.log(b);       

// console.log(b[2].name);         //dev

//  b[3]() ;                    // popup - hello from b

//  array methods

// let f = ['orange' , 'banana' , 'apple'];

// f.push('papaya');           // whatever element we pass it insert in last of an array

// alert(f);

// // pop 

// console.log(f.pop());       // deleted last element 

// console.log(f);             // orange banana

// f.pop();

// console.log(f);          // orange 

// let feb = ['orange' , 'banana' , 'apple'];

// feb.shift();

// console.log(feb);          // deleted first element

// feb.unshift("mango");        // insert in first index

// console.log(feb);             // mango banana apple

// let may = ['orange', 'apple' , 'banana', 'mango'];

// for(let i = 0 ; i< may.length ; i++)
// {
//     alert(may[i]);            // 4 times pop up 
// }

// for in loop

// let jan = ['orange', 'chiku' , 'banana', 'mango'];


// for (let y in jan)
// {
//     console.log(y);         0 1 2 3 
// }

// // for of loop

// for (r of jan)
// {
//     console.log(r);         orange chiku banana mango
// }

// splice

let june = ['orange', 'chiku' , 'banana', 'mango'];

let x =june.splice(1,2);
console.log(x);                // orange mango

 console.log(june);            // orange mango


june.splice(2,0 , 'cherry',"wattermelon");      // orange mango cherry watermelon

console.log(june);