/*let qarr = ["lisa", "jisoo"]

let inp = "lisoo"

let extArrCount = 0
let strCount = 0

var verify = " ";

//i = qarr length; j = qarr[i] length

for (let i = 0; i < qarr.length; i++) { //qarr length; run times 2
   
    console.log(qarr[i].length);
    
    for (let j = 0; j < qarr[i].length ; j++) { //qarr[i] length
             var temp = qarr[i].split('')
            if(inp[extArrCount] === temp[j]){
               verify = qarr[i]
               if(verify === (qarr[i]))

               while(inp[strCount] === temp[j]){
                   extArrCount++;
                   strCount++
               }
               
            }

    }
}
console.log("extArrCount : " + extArrCount)
console.log(verify);

/*let str = "AB"
let arr = str.split('') //[A , B , I]

let avlarr = "ENABJSHI".split('') //8

let extArrCount = 0
let strCount = 0

for (let i = 0; i < avlarr.length; i++) { //8-LOOPS
     if(arr[extArrCount] === avlarr[i])
        console.log("S");

        while(arr[strCount] === avlarr[i]){
            extArrCount++;
            strCount++
        }
        
}
console.log(extArrCount);
*/


const axios = require('axios');
axios.get("http://localhost:8080/q?name=jennie")
.then((response) => console.log(JSON.stringify(response.data)))