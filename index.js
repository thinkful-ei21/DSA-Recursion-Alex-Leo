function sheep (num) {
  if (num ===0) {
    return;
  }
  console.log(num + ' - Another sheep jump over the fence');
  sheep(num -1);
}

sheep(5);

function doubleArray (arr) {
  if (arr.length ===0){
    return [];
  }
  const double = arr[0]*2;
  return [double, ...doubleArray(arr.slice(1))];
}

console.log(doubleArray([1,2,3]));

function reverseStr (str){
  if (str.length=== 0){
    return '';
  }
  const newString = str[str.length-1];
  return newString + reverseStr(str.slice(0,-1));
}

console.log(reverseStr('test string'));


function nthTriangle (side){
  if (side===0){
    return 0;
  }
  
  return  side + nthTriangle(side-1);
}

console.log(nthTriangle(6));

function strSplit (str, seperator){
  if (str.length===0){
    return '';
  }
  const splitWord = [str[0]];
  return splitWord + strSplit(str.slice(1));
}

console.log(strSplit('test sentence', ' '));////////////////////????????