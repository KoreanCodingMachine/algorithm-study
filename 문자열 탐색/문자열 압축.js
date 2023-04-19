// 알파벳 대문자로 이루어진 문자열을 입력받아 같은 문자가 연속으로 반복되는 경우
// 반복되는 문자 바로 오른쪽에 반복 횟수를 표기하는 방법으로 문자열을 압축하는 프로그램


function solution(s) {
    let answer = ''

    let count = 0;
    for (let i=0; i < s.length; i++) {
        if (s[i] === s[i+1]){
            count += 1
        } else {
            answer += s[i]+(count+1)
            count = 0
        }
    }

    let arr = answer.split('')
    for(let i=0;i<arr.length;i++){
        if(arr[i] === '1'){
            arr.splice(i,1)
        }
    }
    answer = arr.join('')

    return answer
}

console.log(solution('KKHSSSSSSSE'))