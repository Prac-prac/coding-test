//문제1. 자릿수 더하기
//주어지는 자연수 n의 각 자릿수 합 구해서 return하는 함수

//내 풀이: 수->문자열로 바꾼 뒤 for문 돌려
function solution(n)
{
    var answer = 0;
    let sum=0;
    
    let toString = String(n);
    for(let i=0; i<toString.length; i++){
        sum += Number(toString[i]);
    }
    answer = sum;
    return answer;
}

//풀이1 문자 풀이
/* number -> 문자열 : +"" 로 간단히
문자열 -> 배열: .split()
reduce((누적값,현재값)=> 누적값+현재값, 초기값)  초기값 없으면 a가 초기값 */

function solution(n){
    return (n+"").split("").reduce((acc, curr) => acc + parseInt(curr), 0);
}
console.log(1%10);


//풀이2 숫자 풀이
function solution(n){
var sum = 0;

    while(n > 0){
        sum += n%10;
        n = Math.floor(n/10);
    }
    return sum;
}



//문제2. 문자열 내 p와 y의 개수
//내 풀이
function solution(s){

    let pCount=0;
    let yCount=0;
    let toLower = s.toLowerCase();
    for(let i=0; i<toLower.length; i++){
        if(toLower[i]==='p') pCount++;
        if(toLower[i]==='y') yCount++;
    }
    if(pCount === yCount) return true;
    return false;
}

// 다른 축약형 풀이: 개수 같다면 split한 length 같을 테니까
// return s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length;



//문제3. 수박수박수박수박수박수?
//내 풀이
function solution(n) {
   
    let string = '수박';
    let text = '';
    let half = parseInt(n/2);
    
    if(n%2===0){
        for(let i=1; i<=half; i++){text += string;}
    } else{
        for(let i=1; i<=half; i++){text += string;}
        text += '수';
    }
    
    return text;
}
//다른 풀이 : 문자열 repeat활용
//return '수박'.repeat(n/2) + (n%2 === 1 ? '수' : '');

//또다른풀이
//return "수박".repeat(n).slice(0,n);



//문제4. 주어지는 배열에 없는 값의 총합 구하기
//내 풀이
function solution(numbers) {
    var answer = -1;
    let sum=0;
    
    for(let i=0; i<=9; i++){
        if(!numbers.includes(i)) sum += i;
    }
    
    return sum;
}
//간단 축약 풀이
//return 45 - numbers.reduce((cur, acc) => cur + acc, 0);


//문제5. 두 수 사잇값들의 약수의 개수 구하기
//내 풀이
function solution(left, right) {
    
    let count=0;
    let sum=0;
    
    for(let k=left; k<=right; k++){
   
        for(let i=1; i<=k; i++){
            if(k%i === 0) {
                count++;
            }
        }
        count%2===0? sum +=k: sum -= k;
        count=0;
    }
    
    
    return sum;
}