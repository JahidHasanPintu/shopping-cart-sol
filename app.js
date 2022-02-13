document.getElementById('case-plus').addEventListener('click',function(){
    const caseInput=document.getElementById('case-numbr');
    const caseNumber= caseInput.value;
    caseInput.value=parseInt(caseNumber)+1;
    
})
// button-minus 

document.getElementById('button-minus').addEventListener('click',function(){
    const caseInput=document.getElementById('case-numbr');
    const caseNumber= caseInput.value;
    caseInput.value=parseInt(caseNumber)-1;
    if(caseNumber<1){
        caseInput.value=0;
    }
    
})