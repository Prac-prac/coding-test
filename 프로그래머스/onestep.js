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

//문제11.
//배열 거꾸로 뒤집기
// for(let i=0; i<arr.length; i++){
//     let tmp=0;
//     for(let j=0; j<)
// }



//문제12. 체육복 도난 당한 친구 lost, 여분 있는 reverse. lost의 앞뒤로만 빌릴 수 있
//내 안 된 풀이 - splice를 어떻게 해결할 수 있을까? -1을 넣어도 안 되네..
function solution(n, lost, reserve) {
    var answer = 0;
    let on = false;
    let count=0;
    for(let i=0; i<lost.length; i++){
        for(let j=0; j<reserve.length; j++){
            if(lost[i]==reserve[j]-1 || lost[i]==reserve[j]+1) {
                reserve.splice(j,1);
                on=true;
            }
        }
        if(on===true){
            count++;
            on=false;
        } 
    }
    count += (n-lost.length);
    return count;
}

//다른 풀이
function solution(n, lost, reserve) {
    var answer = 0;
    var exist=0;

    for(let i=0; i<lost.length; i++) {
        for(let j=0; j<reserve.length; j++) {
            if(lost[i]===reserve[j]) {
                exist++;
                lost[i] = -1;
                reserve[j] = -1;
                break;
            }
        }
    }
    for(let i=0; i<lost.length; i++){
        for(let j=0; j<reserve.length; j++){
            if(reserve[j]-1===lost[i] || reserve[j]+1===lost[i]){
                answer++;
                reserve[j]=-1;
                break;
            }
        }
    }
    answer = n - lost.length + exist + answer;
    return answer;
}


//문제13. n을 나눴을 때 나머지가 1이 되게 하는 수 찾기
//내 풀이 - 왜 무한로딩이 걸릴까..?
function solution(n) {
   
    while(true){
        let x =1;
        console.log(n%x);
        if(n%x===1){
            return x;
        }
        x++;
    }
}

//문자14. 문자열 내 숫자영단어 숫자로 바꾸기
//내 풀이 ??
function solution(s) {
    var answer = 0;
    let arr=["zero", "one", "two", "three", "four", "five",
            "six", "seven", "eight", "nine", "ten"];
    
    for(let i=0; i<arr.lenght; i++){
        if(s.includes(arr[i])){
            s.replace(arr[i],i);
            console.log("!!");
        }
    }
    return s;
}


//문제15. https://programmers.co.kr/learn/courses/30/lessons/42840 ->for문 작성이...
function solution(answers) {
    var answer = [];
    
    let student=[[1,2,3,4,5], [2,1,2,3,2,4,2,5], [3,3,1,1,2,2,4,4,5,5]];
    let index=0;
    for(let i=0; i<student.length; i++){
        while(answers.length > student[i].length){
            student[i][length] = student[i][(index+1)%student.length-1];
            index++;
        }
    }
    console.log(student);
    
    let count=0;
    let correct=[0,0,0];
    
    for(let i=0; i<answers.length; i++){
       for(let j=0; j<student.length; j++){
            
            if(answers[i]===student[j][i]){
                count++;
            }
        }
            
        correct[i]=count;
        count=0;
    }
    console.log('correct', correct);
    let max=0;
    for(let i=0; i<correct.length; i++){
        if(correct[i]>max) max = correct[i];
    }
    for(let i=0; i<correct.length; i++){
        if(correct[i]===max){
            answer.push(i);
        }
    }
    return answer;
}



//로또문제 https://programmers.co.kr/learn/courses/30/lessons/77484
function solution(lottos, win_nums) {
    var answer = [];
    
    let count=0;
    for(let i=0; i<lottos.length; i++){
        if(lottos[i]===0){
            count++;
        }
    }
    let correct=0;
    for(let i=0; i<win_nums.length; i++){
        if(lottos.includes(win_nums[i])){
            correct++;
        }
    }
    switch(correct){
      case 6: answer[0]=1;
      case 5: answer[0]=2;
      case 4: answer[0]=3;
      case 3: answer[0]=4;
      case 2: answer[0]=5;     
      default: answer[0]=6;
    }
        
    switch(correct+count){
      case 6: answer[1]=1;
      case 5: answer[1]=2;
      case 4: answer[1]=3;
      case 3: answer[1]=4;
      case 2: answer[1]=5;     
      default: answer[1]=6;
    }
    
    console.log(correct);
    console.log(count);
    return answer;
}