// code your solution here
function saturdayFun(defaultActivity = 'roller-skate') {
    return `This Saturday, I want to ${defaultActivity}!`;
}

function mondayWork(defaultActivity = 'go to the office') {
    return `This Monday, I will ${defaultActivity}.`;
}  

function wrapAdjective(emphatic){
    return function (worker) {
        return `You are ${emphatic}${worker}${emphatic}!`;
    }
}
console.log(wrapAdjective('||')); 