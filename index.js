// Your code here
function saturdayFun(activity = "roller-skate") {
    let fun = `This Saturday, I want to ${activity}!`
    return fun
}

const mondayWork = function(work = "go to the office") {
    let monday = `This Monday, I will ${work}.`
    return monday
}

function wrapAdjective(flair = "*") {
    return function(myVar = "special") {
        return `You are ${flair}${myVar}${flair}!`
    }
}