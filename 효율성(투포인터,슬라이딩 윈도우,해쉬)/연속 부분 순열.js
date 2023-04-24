// 연속된 배열의 숫자의 합이 m이 되는 경우의 수
// 어차피 연속부분순열이기 때문에 값이 연속되어야 하고
// 합이 m일 때 조건만 비교해주면 된다. (작으면 내부 반복문이 인덱스를 자동 증가, 크면 break)
function solution(m, arr){
    let answer=0

    for (let i=0; i < arr.length; i++) {
        let sum = 0
        for (let j=i; j < arr.length; j++) {
            sum += arr[j]
            if (sum > m) {
                break;
            } else if (sum === m){
              console.log(arr.slice(i,j+1))
              answer++
              break;
            }
        }
    }
    return answer;
}

let a=[1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a));




// 투 포인터 알고리즘으로 해결
function solution2(m, arr){
    let answer=0, lt=0, sum=0;
    for(let rt=0; rt<arr.length; rt++){
        sum+=arr[rt];
        if(sum===m){
          console.log('lt', lt)
          console.log('rt', rt)
          answer++
        }
        while(sum>=m){
            sum-=arr[lt++];
            if(sum===m){
                console.log('lt', lt)
                console.log('rt', rt)
                answer++
            }
        }
    }
    return answer;
}

let a2=[1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution2(6, a2));