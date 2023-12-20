
//get Input Element
const inputValue =document.getElementById('userinput');

//set for getting operations while click
const calculate = document.querySelectorAll('.operations').forEach(items =>{
    items.addEventListener("click",e=>{
        //find if the last value is number
        let last_value = inputValue.innerText.substring(inputValue.innerText.length,inputValue.innerText.length-1)
        if(!isNaN(last_value) && e.target.innerText ==="=")
        {
            inputValue.innerText =eval(inputValue.innerText);
        //reset all the values to the zero
        }else if(e.target.innerText === "AC"){
            inputValue.innerText = "0";
        //remove the numbers from the end
        }else if(e.target.innerText === "DEL"){
            inputValue.innerText = inputValue.innerText.substring(0,inputValue.innerText.length-1);

            //set to not delete the last or zero to hide input box
            if(inputValue.innerText == 0){
                inputValue.innerText = "0";
            }
          
        }else{
            //this part avoid to set alot operator
            if(!isNaN(last_value)){
            inputValue.innerText +=e.target.innerText;
            }
        }
    })
})
//set for getting numbers while click
const number = document.querySelectorAll(".numbers").forEach(items =>{
    items.addEventListener("click", e=>{
        //romove the 0 befor number as like as 09 => 9
        if(inputValue.innerText ==="0"){
            inputValue.innerText ="";
        }
        //after chcking get the numbers
        inputValue.innerText += e.target.innerText.trim();
    });
})