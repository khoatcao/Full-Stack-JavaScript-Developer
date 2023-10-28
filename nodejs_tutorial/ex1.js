// add number in an array 

const sum = (arr) => {
    let total = 0; 
    arr.forEach(element => {
        total += element  
    });
    return total;
}

// concatenate two array 

const concat = (arr1,arr2) =>{
    return [...arr1, ...arr2];
}

// find the largest number in an array 

const lgNum = (arr) => {
    let largest = 0; 
    arr.forEach(element =>{
        if (element > largest) {
            largest = element; 
        }
    });

    return largest;
}

module.exports = { sum, concat, lgNum };
// module.exports = { concat};


