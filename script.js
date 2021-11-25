// function displayValue(num){
//     let res=document.querySelector("#result")
//     res.value+=num
// }
// function clr(){
//     document.querySelector("#result").value=""
// }

// function solve(){
//     let res=document.querySelector("#result")
//     let cur_val=res.value
//     let result=eval(cur_val)
//     res.value=result

// }
function backSpace(){

    let bak=document.querySelector("#result")
    let cur_val=bak.value
    bak.value=cur_val.slice(0,-1)
}



var displayValue=(num)=>result.value+=num

var clr=()=>result.value=""

var solve=()=>result.value=eval(result.value)