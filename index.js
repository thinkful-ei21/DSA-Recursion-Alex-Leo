function sheep (num) {
    if (num ===0) {
        return
    }
    console.log(num + " - Another sheep jump over the fence")
    sheep(num -1)
}

sheep(5)

function doubleArray (arr) {
    if (arr.length ===0){
        return []
    }
    const double = arr[0]*2
    return [double, ...doubleArray(arr.slice(1))]
}

console.log(doubleArray([1,2,3]))