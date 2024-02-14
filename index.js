document.getElementById("loveCalculatorForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const yourname = document.getElementById("yourName").value ;
    const crushname = document.getElementById("crushName").value ;

   if (yourname.trim().length === 0 && crushname.trim().length === 0) {
     document.getElementById("output").innerHTML =
       "heyy.. type some content, your life isn't that empty";
   } else if (yourname.trim().length >= 50 && crushname.trim().length >= 50) {
     document.getElementById("output").innerHTML =
       "Just type your name buddy.. not your whole love story..!";
   } else if (yourname === crushname) {
    document.getElementById("output").innerHTML =
      "You love yourself ? That's a great love story..!";
  } else { 
     const arrA = yourname.split("");
     const arrB = crushname.split("");
     
     const respArr = [
        "F : You guys are Friends..!",
        "L : You Love each other..! Go and tell them you love them..!",
        "A : Attracted..! May be you have a chance..!",
        "M : Married..? Soon you wil be.. ",
        "E : Enemies.. may be you broke their PS 5 ?",
        "S : Siblings.. : )"]
     

     const resultArr = [];

     for (let char of arrA) {
       if (!arrB.includes(char)) {
         resultArr.push(char);
       }
     }

     for (let char of arrB) {
       if (!arrA.includes(char)) {
         resultArr.push(char);
       }
     }

     const remainder = resultArr.length % 6;
     
     document.getElementById("output").innerHTML =
     respArr[remainder]

    
   }
  });






