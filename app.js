function getMiddle(s) {
    let myArr = s.split('');
    let myNum = s.length;
    let myAns = Math.ceil(myNum / 2);
    let myAns2 = Math.floor(myNum / 2);
    if (s.length == 1) {
        return s;
    }
    else if (myNum % 2 == 1) {
        return myArr[myAns2];
    } else if (myNum % 1 == 0) {
        return myArr[s.length / 2 - 1] + myArr[myAns]
    }
}

console.log(getMiddle("test")); // "es"
console.log(getMiddle("testing")); // "t"
console.log(getMiddle("middle")); // "dd"
console.log(getMiddle("A")); // "A"