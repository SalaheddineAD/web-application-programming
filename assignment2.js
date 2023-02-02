const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let result=0;
let sumNumbers=function(){
    
    readline.question('Enter a number ', nb => {
        if(nb=="stop"){
            console.log("the sum of those numbers is: "+result);
            readline.close();
        }
        else{
            result+=parseInt(nb);
            sumNumbers();
        }
    })
};
sumNumbers();


   




   