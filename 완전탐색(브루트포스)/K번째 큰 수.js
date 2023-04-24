function solution(n, k, card){
    let answer;
    let sum = []

    // 카드 배열에서 3가지 카드를 임의로 뽑는 경우의 수
    for (let i=0; i<card.length; i++){
        for (let j=i+1; j<card.length; j++){
            for (let k=j+1; k<card.length; k++){
               sum.push(card[i]+card[j]+card[k])
            }
        }
    }

    // 큰 수로 정렬
    sum.sort((a,b) => b-a)


    return answer = sum[k-1]
}

let arr=[13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(10, 3, arr));