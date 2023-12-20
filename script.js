let str='';
let flag=false;
let output=document.getElementById('output');
function addData(value){
    if(value==='+' || value==='-' || value==='/' || value==='*'){
        str+=' '+value+' ';
    }else{
        str+=value;
    }
    if(flag===false){
        str='';
        output.value="Device is OFF.......";
        return;
    }
    console.log("check", str);
    updateDisplay(); 
}

function updateDisplay(){
    output.value=str;
}

function clearRes(){
    str="";
    updateDisplay();
}

function printData(){
    str=str.split(' ');
    for(let i=0; i<str.length && str.length>1; i++){
        if(str[i]==='/'){
            str[i-1]=(str[i-1]/str[i+1]).toFixed(10);
            str.splice(i,2);
            i--;
        }
    }

    for(let i=0; i<str.length && str.length>1; i++){
        if(str[i]==='*'){
            str[i-1]=(str[i-1]*str[i+1]).toFixed(10);
            str.splice(i,2);
            i--;
        }
    }
    


    for(let i=1; i<str.length && str.length>1; ){
        if(str[i]==='+'){
            str[i-1]=parseFloat(str[i-1])+parseFloat(str[i+1]);            
        }
        else{
            str[i-1]=parseFloat(str[i-1])-parseFloat(str[i+1]);
        }
        str.splice(i,2);
        console.log(str);
    }
    output.value=str[0];

    str='';
    div='';
    mul='';

    console.clear();
}

function changeCOLOR(){
    flag=!flag;
    console.log(flag);
    if(flag===false){
        clearRes();
        console.clear();
    }else{
        output.value="ON";
    }
}