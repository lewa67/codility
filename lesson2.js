function solution(A){

    function myFunc(total, num) {
        return total ^ num;
      } 
return A.reduce(myFunc)


}

console.log(Number.isInteger(solution([42])))