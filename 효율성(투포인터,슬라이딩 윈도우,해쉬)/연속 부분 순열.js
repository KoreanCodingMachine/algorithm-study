// 연속된 배열의 숫자의 합이 m이 되는 경우의 수
function solution(m, arr){
    let answer=0

    let sum = 0

    for (let i=0; i < arr.length; i++) {
        let sum = 0
        for (let j=i; j < arr.length; j++) {
          sum += arr[j]
          if (sum === m){
              console.log(arr.slice(i,j+1))
          }
        }
    }


    return answer;
}

let a=[1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a));