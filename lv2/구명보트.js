// 구명보트는 작아서 한 번에 최대 2명밖에 못 탐
// 무게 제한 (limit)도 있다.

function solution(people, limit) {
    // 구명 보트 수
    let answer = 0;

    people.sort((a,b) =>b-a)
    console.log(people)


    for(let i=0,j=people.length-1; i <=j; i++) {
        if(people[i] + people[j] <= limit){
            j--
        } answer++
    }

    return answer
}

console.log(solution([70, 50, 80, 50],100))
console.log(solution([70, 80, 50],100))