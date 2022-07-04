'use strict';

// 1.

// function libraryFeesCalculation (days){
//     let total = 0;
//     if(days>0 && days <=5){
//         total = (`${days*0} rs.`);
//     }else if(days>5 && days <=10){
//         total = (`${(days-5)*3} rs.`);
//     }else if(days>10 && days<=15){
//         total = (`${((days-10)*4)+(5*3)}rs.`);
//     }else if(days>15){
//         total = (`${((days=15)*5)+((5*3)+(10*4))}`);
//     }

//     return total;
// }

// const libraryFeesTotal = (libraryFeesCalculation(50));
// console.log(libraryFeesTotal)

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// 2

// function classStudentCounting (a,b){
//     let student = 1;
//     while(student <=8){
//         var teacher = a+b;
//         a=b
//         b=teacher
//         student++;
//     }
//     return teacher;
// }
// console.log(classStudentCounting(20,30));

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// 3.


// function clockConverstion (hr, min){
//     if(hr===0 && min <=60 ){
//         min = min>9 ? min : '0'+min;
//         hr = hr >9 ? hr : '0'+hr;
//         return (12+' : '+ min+ ' AM');
//     }else if(hr>12 && min<60){
//         min = min>9 ? min : '0'+min;
//         hr = hr-12;
//         hr = hr>9 ? hr : '0'+hr;
//         if(hr == 0 && min <=60){
//             return ('12 : '+min+' PM');
//         }else{
//             return (hr +' : '+ min+' PM');
//         }
//     }else{
//         min = min>9 ? min : '0'+min;
//         hr = hr >9 ? hr : '0'+hr;
//         return (hr+' : '+ min + 'AM' );
//     }
// }
// console.log(clockConverstion(15,45))

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
