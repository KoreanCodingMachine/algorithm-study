// 다시 풀어보기
function solution(test){
    let answer=0;

    // 테스트 수
    m = test.length
    // 학생 수
    n = test[0].length

    for (let i=1; i<=n; i++) {
        for (let j=1; j<=n; j++) {
            let cnt = 0
            // 멘토 멘티가 될 수 있는 모든 경우의 수 중에서
            for (let k=0; k<m; k++) {
                let pi=pj=0
                for (let s=0; s<n; s++) {
                    if(test[k][s]===i) pi = s
                    if(test[k][s]===j) pj = s
                }
                if (pi < pj) cnt++
            }
            if (cnt === m) answer++
        }
    }


    return answer;
}

let arr=[[3, 4, 1, 2], [4, 3, 2, 1], [3, 1, 4, 2]];
console.log(solution(arr));
