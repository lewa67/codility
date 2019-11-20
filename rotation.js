function solution(A,K) {
function rotate(A){
    let B=A.slice(-1)
    let rotated= B.concat(A.slice(0,-1))
    return rotated
}

let result=[];

result[0]=rotate(A)
for(let i=0; i<K-1;i++){
    
        result.push(rotate(result[i]))
 
}

return result.slice(-1)[0]
// console.log(result[0])

}

solution([3, 8, 9, 7, 6],2)