// Code your solution here
function findMatching(data, target){
    const cb = (name) => name.toUpperCase() === target.toUpperCase();
    return data.filter(cb);
}

function fuzzyMatch(data, target){
    const cb = (name) => name.slice(0,target.length).toUpperCase() === target.toUpperCase();
    return data.filter(cb)
}

function matchName(data, target){
    const cb = (element) => element.name.toUpperCase() === target.toUpperCase();
    return data.filter(cb);
}