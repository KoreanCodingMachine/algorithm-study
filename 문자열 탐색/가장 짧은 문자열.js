// 한개의 문자열 s 와 문자 t가 주어지면 문자열 s의 각 문자가 문자 t와 떨어진 최소 거리를 출력하는 프로그램

function solution(s, t){
    let answer=[];
    let p = 1000

    for (let i=0;i < s.length; i++){
        if (s[i] === t) {
            p = 0
            answer.push(p)
        } else {
            p += 1
            answer.push(p)
        }
    }

    p = 1000
    for (let i=s.length-1; i>=0; i--){
        if (s[i] === t) {
            p = 0
        } else {
            p += 1
            answer[i] = Math.min(answer[i],p)
        }
    }


    return answer;
}

let str="teachermode";
console.log(solution(str, 'e'));