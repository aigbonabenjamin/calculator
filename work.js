const prompt = require("prompt-sync")();


const deposit = () => {
    while(true) {
         const depositAmount = prompt("Enter a deposit amount: ");
      const numberdepoositAmount = parseFloat(depositAmount);        

      if (isNaN(numberdepoositAmount) || numberdepoositAmount <= 0) { 
        console.log("Invalid deposit amount, try again.")
    }
   
      } 
      

};


deposit();