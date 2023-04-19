// 앞에서 읽거나 뒤에서 읽었을 때 똑같은 문자열을 회문문자열이라고 한다.
// 대,소문자는 구분하지 않는다.
function solution(s){
    let answer="YES";
    let word = s.toLowerCase()
    let reverseWord = word.split('').reverse().join('')


    return word === reverseWord ? answer : 'NO';
}

let str="goooG";
console.log(solution(str));

let str2 = 'sexy'
console.log(solution(str2))