// code your solution here
function saturdayFun(actOne = "roller-skate"){
    return `This Saturday, I want to ${actOne}!`;
}

function mondayWork(workAct = "go to the office"){
    return `This Monday, I will ${workAct}.`;
}
   

 function wrapAdjective(symbol) {
     return function (phrase) {
         return `You are ${symbol}${phrase}${symbol}!`;
     }
 }