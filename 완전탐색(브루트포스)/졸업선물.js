// 최소 비용으로 선물을 사주는 경우 구하기
function solution(m, product){
    let answer=0;
    let count = 0;

   const sorted_arr =  arr.sort((a,b)=> {
        if(a[0] -b[0]){
           return a[0] - b[0]
        }
    })

    // 가장 높은 가격 할인율 50프로 적용
    sorted_arr[sorted_arr.length-1][0] /= 2

    // 가격과 배송비를 합한 가격이
    const sum = sorted_arr.reduce((acc,cur) => {
       acc.push(cur[0] + cur[1])
       return acc
    },[])

    // 작은 수 부터 정렬하여 , 비용을 넘는지 계산한다.
    const sorted_arr2 = sum.sort((a,b) => a-b)

    console.log(sorted_arr2)

    for (let i=0; i<sorted_arr2.length; i++) {
        count += sorted_arr2[i]
        if (m - count >=0 ) answer++
        else break;
    }

    return answer;
}

let arr=[[6, 6], [2, 2], [4, 3], [4, 5], [10, 3]];
console.log(solution(28, arr));