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