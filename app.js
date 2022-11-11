//querySelectorAll
//question 1
var seconditem=document.querySelectorAll('li:nth-child(2)');
 seconditem.style.color='yellow'; 


 //question 2

 var odd= document.querySelectorAll('li:nth-child(odd)');
 for(var i =0; i<odd.length;i++){
     odd[i].style.backgroundColor='green';
 }



// //question 3

//different b/w querySelector and querySelector All

 var header = document.querySelector('#main-header');
 header.style.borderBottom='solid 4px #ccc';

  var titles=document.querySelectorAll('title');
  console.log(titles);

  titles[0].textContent='Hello';