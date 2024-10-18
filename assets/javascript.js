const theNumber=document.querySelector('.the-number');
const operator=document.querySelector('.operator');
const unity=document.querySelector('.unity');
const unity1=document.querySelector('.unity1');
const calculateBtn=document.querySelector('.calculate');
const resultSpan =document.querySelector('.result');
function inputChanged(event){
    console.log(event.target.value);}

theNumber.addEventListener('click', inputChanged)
function calculate(){
    let result =0;
    console.log(theNumber.value, operator.value,unity.value,unity1.value);
if (unity.value=='mm'){
        if(unity1.value=='mm'){
             result= theNumber.value*1;}
        else if (unity1.value=='cm'){
               result=theNumber.value/10;}
       else if(unity1.value=='dm'){
            result=theNumber.value/100;} 
        else if( unity1.value=='m'){
            result=theNumber.value/1000;}
        else if(unity1.value=='dcm'){
            result=theNumber.value/10000;}
        else if(unity1.value=='hm'){
            result=theNumber.value/100000;}
        else if(unity1.value=='km'){
            result=theNumber.value/1000000;}
        
    }
else if (unity.value=='cm'){
        if(unity1.value=='mm'){
             result= theNumber.value*10;}
        else if (unity1.value=='cm'){
              result=theNumber.value*1;}
       else if(unity1.value=='dm'){
           result=theNumber.value/10;} 
        else if( unity1.value=='m'){
           result= theNumber.value/100;}
        else if(unity1.value=='dcm'){
            result=theNumber.value/1000;}
        else if(unity1.value=='hm'){
           result=theNumber.value/10000;}
        else if(unity1.value=='km'){
           result=theNumber.value/100000;}
        
    } 
else if (unity.value=='dm'){
        if(unity1.value=='mm'){
             result=theNumber.value*100;}
        else if (unity1.value=='cm'){
               resulttheNumber.value*10;}
       else if(unity1.value=='dm'){
            result=theNumber.value*1;} 
        else if( unity1.value=='m'){
            result=theNumber.value/10;
        }
        else if(unity1.value=='dcm'){
           result=theNumber.value/100;
        }
        else if(unity1.value=='hm'){
            result=theNumber.value/1000;
        }
        else if(unity1.value=='km'){
           result= theNumber.value/10000;
        }
        
    }

else if (unity.value=='m'){
        if(unity1.value=='mm'){
             result=theNumber.value*1000;}
        else if (unity1.value=='cm'){
              result=theNumber.value*100;}
       else if(unity1.value=='dm'){
           result=theNumber.value*10;} 
        else if( unity1.value=='m'){
           result= theNumber.value*1;
        }
        else if(unity1.value=='dcm'){
           result=theNumber.value/10;
        }
        else if(unity1.value=='hm'){
           result= theNumber.value/100;
        }
        else if(unity1.value=='km'){
            result=theNumber.value/1000;
        }
        
    }
else if (unity.value=='dcm'){
        if(unity1.value=='mm'){
              result=theNumber.value*10000;}
        else if (unity1.value=='cm'){
               result=theNumber.value*1000;}
       else if(unity1.value=='dm'){
            result=theNumber.value*100;} 
        else if( unity1.value=='m'){
           result= theNumber.value*10;
        }
        else if(unity1.value=='dcm'){
            result=theNumber.value*1;
        }
        else if(unity1.value=='hm'){
            result=theNumber.value/10;
        }
        else if(unity1.value=='km'){
            result=theNumber.value/100;
        }
    }
else if (unity.value=='hm'){
        if(unity1.value=='mm'){
              result=theNumber.value*100000;}
        else if (unity1.value=='cm'){
              result=theNumber.value*10000;}
       else if(unity1.value=='dm'){
            result=theNumber.value*1000;} 
        else if( unity1.value=='m'){
            result=theNumber.value*100;
        }
        else if(unity1.value=='dcm'){
           result= theNumber.value*10;
        }
        else if(unity1.value=='hm'){
            result=theNumber.value*1;
        }
        else if(unity1.value=='km'){
           result=theNumber.value/10;
        }
    } 
else if (unity.value=='km'){
        if(unity1.value=='mm'){
              result=theNumber.value*1000000;}
        else if (unity1.value=='cm'){
              result= theNumber.value*100000;}
       else if(unity1.value=='dm'){
           result=theNumber.value*10000;} 
        else if( unity1.value=='m'){
            result=theNumber.value*1000;
        }
        else if(unity1.value=='dcm'){
           result=theNumber.value*100;
        }
        else if(unity1.value=='hm'){
           result=theNumber.value*10;
        }
        else if(unity1.value=='km'){
            result=theNumber.value*1;
        }
    } 
    resultSpan.innerHTML=result;              

}


calculateBtn.addEventListener('click',calculate);