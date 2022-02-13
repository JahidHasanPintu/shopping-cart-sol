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
// phone event handler 
function updatePhoneNumber(isIncreasing){
    const phoneInput=document.getElementById('phone-number');
    let phoneNumber= phoneInput.value;
    if(isIncreasing){
        phoneNumber=parseInt(phoneNumber)+1;
    }else if(phoneNumber>0){
        phoneNumber=parseInt(phoneNumber)-1;
    }
    phoneInput.value=phoneNumber;
    // price update 
    const phoneTotal=document.getElementById('phone-total');
    phoneTotal.innerText=1219*phoneNumber;
}

document.getElementById('phone-plus').addEventListener('click',function(){
    updatePhoneNumber(true);
})

// phone minus 
document.getElementById('phone-minus').addEventListener('click',function(){
    updatePhoneNumber(false);
})


// case event handler 
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
