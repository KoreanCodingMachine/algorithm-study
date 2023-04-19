// brown은 8 이상의 자연수이다.
// yellow는 1 이상의 자연수이다.
// 카펫의 가로길이는 세로의 길이와 같거나 , 세로길이보다 크다.
// brown + yellow = width * height

// yellow = (width - 2) * (height - 2)
// brown = (width * height) - (width -2) * (height - 2)

function solution(brown, yellow) {
    let answer = [];

    // 전체 면적
    let size = brown + yellow

    // width는 최소 3 이상이다.
    for(let i = 3; i < size; i++) {

        let width = size / i
        let height = i

        // 가로의 길이는 항상 세로의 길이보다 커야함
        if (height > width) {
            continue
        }

        if((width-2) * (height-2) === yellow){
            answer[0] = width
            answer[1] = height
        }
    }
    return answer;
}

console.log(solution(10,2))
console.log(solution(8,1))
console.log(solution(24,24))