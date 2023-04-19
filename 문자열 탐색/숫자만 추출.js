// 문자와 숫자가 섞여있는 문자열이 주어질 때 그 중 숫자만 추출하여 그 순서대로 자연수를 만든다.
function solution(str){
    let answer="";
    // 숫자가 아닌 문자를 빈문자열로 대체함
    str=str.replace(/[^0-9]/g,'')

    answer = +(str)

    return answer
}

let str="g0en2T0s8eSoft";
console.log(solution(str));