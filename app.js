// using function 

function updateCaseNumber(isIncreasing){
    const caseInput=document.getElementById('case-numbr');
    let caseNumber= caseInput.value;
    if(isIncreasing==true){
        caseNumber=parseInt(caseNumber)+1;

    }else if(caseNumber>0){
        caseNumber=parseInt(caseNumber)-1;
   
    }
    caseInput.value=caseNumber;
    const caseTotal= document.getElementById('case-total');
    caseTotal.innerText= caseNumber*59;
}


document.getElementById('case-plus').addEventListener('click',function(){
    // const caseInput=document.getElementById('case-numbr');
    // const caseNumber= caseInput.value;
    // caseInput.value=parseInt(caseNumber)+1;
    updateCaseNumber(true); //using function
    
})
// button-minus 

document.getElementById('button-minus').addEventListener('click',function(){
    // const caseInput=document.getElementById('case-numbr');
    // const caseNumber= caseInput.value;
    // caseInput.value=parseInt(caseNumber)-1;
    // if(caseNumber<1){
    //     caseInput.value=0;
    // }
    updateCaseNumber(false);
    
})
