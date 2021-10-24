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

//문제6. 같은 숫자는 싫어

//문제7. 콜라츠 추측
// 1-1. 입력된 수가 짝수라면 2로 나눕니다. 
// 1-2. 입력된 수가 홀수라면 3을 곱하고 1을 더합니다.
// 2. 결과로 나온 수에 같은 작업을 1이 될 때까지 반복합니다.
// 단, 작업을 500번을 반복해도 1이 되지 않는다면 –1을 반환해 주세요.
function solution(num) {
    var answer = 0;
    let count=0;
    let number = num;
    while(count<501 && number!=1){
        if(number % 2 ===0){
            number = Math.floor(number/2);
        } else {
            number = number*3+1;
        }
        count++;
    }
    if(count>500) return -1;
    answer = count;
    return answer;
}

//다른 풀이 - 재귀함수 이용. 속도 느림. 참고만 하자.
//return num == 1 ? (count >= 500 ? -1 : count) : collatz(num % 2 == 0 ? num / 2 : num * 3 + 1,++count);


//문제8. 최댓값과 최솟값
//주어지는 공백으로 구분된 숫자들의 문자열 s
//내 풀이: 정렬 후 맨 앞, 맨 뒷값
function solution(s) {
    var answer = '';
    let arr=s.split(" ");
    arr.sort((a,b)=>a-b);
    
    answer = String(arr[0])+" "+String(arr[arr.length-1]);
    return answer;
}

//다른 풀이: 정렬 없이 바로 max,min. js는 문자열도 Math.max 가능
// const arr = s.split(' ');
// return Math.min(...arr)+' '+Math.max(...arr);


//문제9. 완주하지 못한 선수
//*find써서 해보자
function solution(participant, completion) {
    var answer = '';
//     var arr = [];
    
//     for(let i=0; i<participant.length; i++){
//         for(let j=0; j<completion.length; j++){
//             if(participant.includes(completion[j])){
//                 participant.splice(i,1);
//                 console.log(participant);
//             }
//         }
//     }
    
//     return participant;
    let p={};
    for(let person of completion){
        if(p[person]){
            p[person]++
        }else{
            p[person]=1;
        }
    }
    for(let person of participant){
        if(!p[person] || p[person]===0){
            return person;
        } else {
            p[person]--;
        }
    }
    return answer;
}


//문제10. 뒷자리 4개 빼고 핸드폰 번호 가리기
//내풀이
function solution(phone_number) {
    var answer = '';
    
    for(let i=0; i<phone_number.length-4; i++){
        answer+="*"
    }
    for(let i=phone_number.length-4; i<phone_number.length; i++){
        answer += phone_number[i];
    }
    return answer;
}
//다른풀이 - 정규식
// return s.replace(/\d(?=\d{4})/g, "*");

//또다른풀이
// return "*".repeat(s.length - 4) + s.slice(-4);

//또또 다른 풀이
// for(var i=0; i< s.length; i++){    
//     answer += i < s.length -4 ? "*" : s.charAt(i);
//   }  

