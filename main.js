let errorShowText = document.querySelector(".errorText");
let errorShowImg = document.querySelector(".errorImg");
let formtest = document.querySelector(".formMain");
let email = document.querySelector("#email");

/* 
frist we select the elements
we add a EventListener on our form with the submit options and we used a callback arrow function. 
and inside the function we pass the argument name event or e.
inside we create a let varble we name it regExp and add the code that we need to test your email.
then we use a if statement to test our regExp to see if the email value have the req value.
if it does then we want to hide our errorShow if not then we want to show our errorShow.
we also add preventDefault() stop the to go to a differnt page.
*/
    


formtest.addEventListener("submit", (event)=>{
    let regExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

    if (regExp.test(email.value)){
        email.style.border = "1px solid var(--color-primary-offRed)";
        errorShowText.style.visibility= "hidden";
        errorShowImg.style.visibility= "hidden";
        
       
    }else{
        event.preventDefault();
        email.style.border = "1px solid var(--color-primary-midRed)";
        errorShowImg.style.visibility= "visible";
        errorShowText.style.visibility= "visible";
       
    }
});