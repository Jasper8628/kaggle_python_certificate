const sampleArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]
const sample2 = [11, 22, 33, 44, 55, 66, 77, 88, 99, 110, 111, 112, 113, 114, 115, 116, 117]
const divide = (array) => {
    if (array.length > 0) {
        let newArray = array;
        let halfLen = Math.floor(array.length / 2)
        let left = newArray.slice(0, halfLen);
        let right = newArray.slice(halfLen, array.length + 1);
        console.log("logging", left, right);
        if (left.length > 1) {
            divide(left);
        }
        // else { console.log("final left: ", left) }
        if (right.length > 1) {
            divide(right);
        }
        // else { console.log("final right: ", right) }
    } else {
        console.log("need a non-empty array");
    }

}

// divide(sampleArray);
let buffer1=[];
let buffer2=[];
let high1=[];
let high2=[];
const merge=(left,right)=>{
    if(buffer1.length==0){
        buffer1=left.concat(right)
    } else{
        buffer2=left.concat(right)
    }
    high1=buffer1.concat(buffer2);
}
const divide2 = (left, right) => {
    if (left.length > 1 && right.length > 1) {
        let halfLeft = Math.floor(left.length / 2);
        let halfRight = Math.floor(right.length / 2);
        let leftLfet = left.slice(0, halfLeft);
        let leftRight = left.slice(halfLeft, left.length + 1);
        let rightLeft = right.slice(0, halfRight);
        let rightRight = right.slice(halfRight, right.length + 1);
        // console.log(leftLfet, leftRight, rightLeft, rightRight);
        // console.log("still working")
        divide2(leftLfet, leftRight);
        divide2(rightLeft, rightRight);
    }
     else{

        console.log(left,right);
        if(buffer1.length==0){
            
        buffer1=left.concat(right);
        } else {
            buffer2=left.concat(right);
            final=buffer1.concat(buffer2)
        }
        console.log(final);
    }
}
divide2(sampleArray, sample2);