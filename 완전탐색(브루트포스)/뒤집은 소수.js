// N개의 자연수가 주어질 때 각 자연수를 뒤집은 후
// 뒤집은 수가 소수인 경우 그 소수를 출력하는 프로그램


function isPrime(num){
    let count = 0
    for (let i=1; i<=num; i++) {
        if (num % i === 0) {
            count += 1
        }
    }

    return count === 2;
}
function solution(arr){
    let answer=[];

    for (let i=0; i < arr.length; i++) {
        let str = String(arr[i])
        str = +str.split('').reverse().join('')

        if (isPrime(str)) {
            answer.push(arr[i])
        }
    }

    return answer;
}

let arr=[32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));