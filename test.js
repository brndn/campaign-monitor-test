/**
 * test Q1
 * @param input
 * @return {boolean}
 */
function isNullOrEmpty(input){
    return input === null || input == "";
}

console.log("Result of QUESTION 1",
    isNullOrEmpty(null),
    isNullOrEmpty("a"),
    isNullOrEmpty(""),
    isNullOrEmpty("null"),
);

/**
 * test Q2
 * @param input
 * @return {Array}
 */
function getPositiveDivisor(input){
    const arr = [];
    let i = 1;
    while(i <= input){
        if(input%i === 0){
            arr.push(i);
        }
        i++;
    }
    return arr;
}
console.log("Result of QUESTION 2",
    getPositiveDivisor(60),
    getPositiveDivisor(42));

/**
 * test Q3
 * @param a
 * @param b
 * @param c
 * @return {number}
 */
function getAreaOfTringle(a,b,c){
    try{
        if(a < 0 || b < 0 || c < 0){
            throw new Error("No negative values")
        }
        const semiperimeter = (a + b + c) / 2;
        const area = Math.sqrt(semiperimeter * (semiperimeter - a) * (semiperimeter - b) * (semiperimeter - c));
        if(Number.isNaN(area)){
            throw new Error("isNaN")
        }
        return area;
    }catch (e){
        return e;
    }
}

console.log("Result of QUESTION 3",
    getAreaOfTringle(3,4,5),
    getAreaOfTringle(3,-4,5)
);

/**
 * test Q4
 * @param array {Array}
 */
function getMostCommonOccurance(array){
    const ret = new Map();
    for(let i = 0; i < array.length; i++){
        if(array.indexOf(array[i]) != i){
            let count = 1;
            if(ret.has(array[i])){
                count = ret.get(array[i])  + 1;
            }
            ret.set(array[i], count);
        }
    }
    if(ret.size == 0){
        return array;
    }
    return [...ret.entries()].sort((a, b) => b[1] - a[1]).splice(0,2).map(item => item[0]);
}

console.log("Result of QUESTION 4",
    getMostCommonOccurance([5, 4, 3, 2, 4, 5, 1, 6, 1, 2, 5, 4]),
    getMostCommonOccurance([1, 2, 3, 4, 5, 1, 6, 7]),
    getMostCommonOccurance([1, 2, 3, 4, 5, 6, 7]),
);

/**
 *QUESTION 7
 * @param data
 */
function combineUsers(data){
    const ret = {};
    for(let person of data){
        if(!ret[person.name]){
            ret[person.name] = [];
        }
        ret[person.name].push(person);
    }
    return ret;
}


console.log(combineUsers([{ id: 1,
    name: 'bob', },
    {
        id: 2,
        name: 'sally', },
    {
        id: 3,
        name: 'bob',
        age: 30, }]))

