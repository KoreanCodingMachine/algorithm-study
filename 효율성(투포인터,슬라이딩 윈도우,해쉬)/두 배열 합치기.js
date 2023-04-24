// 오름차순으로 정렬된 두 배열이 주어지면 , 두 배열을 오름차순으로 합쳐 출력하는 프로그램

function solution(arr1, arr2){
    let answer=[];

    // arr1.push(...arr2)
    // arr1.sort((a,b)=>a-b)

    let n = arr1.length;
    let m = arr2.length;
    let p1 = 0
    let p2 = 0

    while(p1 < n && p2 < m){
        if(arr1[p1] <= arr2[p2]){
            answer.push(arr1[p1++])
        } else{
            answer.push(arr2[p2++])
        }
    }

    while (p1 < n) {
        answer.push(arr1[p1++])
    }

    while (p2 < n) {
        answer.push(arr2[p2++])
    }

    // 탐색이 모두 끝나고 남은 배열


    return answer
}

let a=[1, 3, 5];
let b=[2, 3, 6, 7, 9];
console.log(solution(a, b));