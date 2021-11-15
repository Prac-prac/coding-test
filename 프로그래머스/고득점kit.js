//해시
//완주하지 못한 선수
function solution(participant, completion) {
    let p = participant;
    //findIndex는 없으면 -1 반환
    //splice 바람직하지 x
    // p.forEach((e,i)=>{
    //     p.splice(completion.findIndex(ele=>ele==e),1);
    // });
   
    // console.log(participant[-1]);
    // console.log(participant.splice(-1,1));
    //turn p[0];
}   
//--------------------------------------------------------    
//     let p={};
//     for(let person of completion){
//         if(p[person]){
//             p[person]++
//         }else{
//             p[person]=1;
//         }
//     }
//     for(let person of participant){
//         if(!p[person] || p[person]===0){
//             return person;
//         } else {
//             p[person]--;
//         }
//     }
//     return answer;
// }

//위장
// https://programmers.co.kr/learn/courses/30/lessons/42578
// 내 풀이. 제출하면 실패뜸. 테스트케이스는 통과인데
function solution(clothes) {
    let arr=[];
    let count=0;
    let result=[];
    let resultCount=0;
    for(let i=0; i<clothes.length; i++){
        arr.push(clothes[i][1]);
    }
    arr.sort();
    for(let i=0; i<arr.length; i++){
        if(arr[i]==arr[i+1]){
            count++;
        } else {
            count++;
            result.push(count);
            count=0;
        }
        
    }
   
    result.forEach(ele=>{resultCount+=ele;});
    let star=0;
    if(result.length>=2){
        star=1;
        for(let i=0; i<result.length; i++){
            star *= result[i];
        }
    }
    
    return resultCount+star;
}

//정렬
function solution(array, commands) {
    var answer = [];
    
    for(let i=0; i<commands.length; i++){
        answer.push(array.slice(commands[i][0]-1, commands[i][1]).sort((a,b)=>a-b)[commands[i][2]-1]);        
    }
    
    
    return answer;
}

//가장 큰 수
//https://programmers.co.kr/learn/courses/30/lessons/42746
//주어진 수들을 가지고 가장 큰 수 만들기
//내 풀이
function solution(numbers) {

    //정렬을 어떻게 해야할지 몰라서 수작업. 일의자리와 그 이상의 자리 첫숫자가 같을 때 정렬x.
    let stringSort = numbers.map(e=>e+'').sort(function(a,b){
        if(a[0]>b[0]){
            return -1;
        } else if(a[0]<b[0]){
            return 1;
        }else {
           let i=1;
            while(a[i]==b[i]){
                i++;
            }
            if(a[i]>b[i]){
                return -1;
            } else if(a[i]<b[i]){
                return 1;
            }
        }
        
    });
    while(stringSort[0]==0){
        stringSort.push(stringSort[0]);
        stringSort.shift();
    }
    stringSort = stringSort.join('');
    return stringSort;
}

//다른 해답 풀이
function solution(numbers) {
    
    var answer = numbers.map(c=> c + ''). 
    				sort((a,b) => (b+a) - (a+b)).join(''); //sort는 안의 값을 문자로 바꿔 비교. 문자로 변환된 숫자를 연결하여 비교정렬
    
    return answer[0]==='0'? '0' : answer;
}

//큰 수 만들기
// https://programmers.co.kr/learn/courses/30/lessons/42883
// 틀린 접근법. 수 중에 작은 수들을 빼는 게 아니라 앞일수록 큰수니 앞에서부터 작은수들을 빼야됨
function solution(number, k) {
    let num=[...number];
    console.log(num);
    let copySort = [...number].sort((a,b)=>a-b).slice(0,k);
    
     while(copySort.length!=0){
         for(let i=0; i<copySort.length; i++){
             if(copySort[0]==num[i]){
                 num.splice(i,1);
                 copySort.splice(0,1);
                 // delte는 안 됨. 배열이 차지하는 자리 그대로 유지
                 // delete num[i];
                 // delete copySort[0];
                
            }       
         }
     }
    return num;
}

//그래도 틀린 풀이..
function solution(number, k) {
    let num=[...number];
    let count = 0;
    for(let i=0; i<num.length; i++){
        if(num[i]<num[i+1]) {
            num.splice(i,1);
            count++;
            i=-1;
        }
        if(count===k) break;
    }
    return num.join('');
    
}

//탐욕법
//체육복
function solution(n, lost, reserve) {
    var answer = 0;
    let on = false;
    let count=0;
    for(let i=0; i<lost.length; i++){
        for(let j=0; j<reserve.length; j++){
            if(lost[i]==reserve[j]-1 || lost[i]==reserve[j]+1) {
                reserve[j]=-1; //문제점: lost 중복 수여 가능
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