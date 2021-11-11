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