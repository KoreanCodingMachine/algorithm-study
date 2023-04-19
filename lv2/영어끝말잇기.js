// words 배열을 순회하면서 이전 인덱스의 마지막 원소와 다음 인덱스의 첫 원소를 비교한다.
// 만약 다르다면 순서는 해당 (인덱스의 번호  % n) + 1 의 사람이 틀린것임
// 중복된 것은 stack으로 비교
// 만약 모든 조건을 만족하지 않는다면 0,0을 리턴한다.

// 애초에 1번째 사람은 끝말잇기를 틀일 일이 없음 ,,,, ㅅㅂ
function solution(n, words) {
    let answer = [];
    let stack = [words[0]]

    for (let i=1; i < words.length; i++) {
        let len = words[i].length

        // 사람 순번
        let person = (i % n ) + 1
        // 사람이 말한 횟수
        let count = Math.ceil((i+1)/n)

        // 중첩
        if(stack.includes(words[i])){
            answer.push(person,count)
            return answer
        } else {
            stack.push(words[i])
        }


        // 끝말잇기 결과가 다를 때
        if(words[i] !== undefined  && words[i-1][words[i-1].length-1] !== words[i][0]) {
            answer.push(person,count)
            return answer
        }
        // 모두 통과했을 때
        if(i === words.length -1) {
            answer.push(0,0)
        }

    }

    return answer;
}

console.log(solution(3,["tank", "kick", "know", "wheel", "land", "dream", "mother", "robot", "tank"]))
console.log(solution(5,["hello", "observe", "effect", "take", "either", "recognize", "encourage", "ensure", "establish", "hang", "gather", "refer", "reference", "estimate", "executive"]))
console.log(solution(2,["hello", "one", "even", "never", "now", "world", "draw"]))