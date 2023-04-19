// 앞에서 읽을때나 뒤에서 읽을 때 같은 문자열을 팰린드롬이라고 한다.
// 알파벳 문자 이외에는 무시한다. , 대 소문자 구분하지 않는다.

function solution(s){
    let answer="YES";

    // 알파벳 소문자가아닌 모든 문자열을 찾아서 빈문자열로 만든다.
    s = s.toLowerCase().replace(/[^a-z]/g, '');
    console.log(s)
    if(s !== s.split('').reverse().join('')) {
        answer = 'NO'
    }
    return answer;
}

let str="found7, time: study; Yduts; emit, 7Dnuof";
console.log(solution(str));

let str2 = '12sdfkqwetlwkejtqw'
console.log(solution(str2))