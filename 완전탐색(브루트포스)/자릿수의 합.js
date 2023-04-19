// 주어진 배열의 원소들의 자릿수의 합이 최대인 자연수를 출력
function solution(n, arr){
    let answer = 0;
    let max = Number.MIN_SAFE_INTEGER
    let sum = 0

    for (let i=0; i<arr.length; i++) {
        let str = `${arr[i]}`
        sum = str.split('').reduce((acc,cur) => {
            return acc + (+cur)
        },0)

        if (sum > max) {
            max = sum
            answer = str
        }
    }



    return answer;
}

let arr=[128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr));