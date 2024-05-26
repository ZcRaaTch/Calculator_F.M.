var number=document.querySelectorAll(".number");

var operatorButton=document.querySelectorAll(".operator");

var deleteButton=document.querySelector(".delete");
var res=document.querySelector(".reset");
var equals=document.querySelector(".equals");
var deci=document.querySelector(".decimal");
var screen=document.querySelector("#screen");

var operand=['',''];
var operator='';
var index=0;

// functions
function reset(){
    operand=['',''];
    operator='';
    index=0;
    display();
}
function display(){
    if(operand[index]===''){
        screen.value='';
    }
    else{
        screen.value=operand[index];
    }
}
function del(){
    if(operand[index].length>0){
        operand[index]=operand[index].substr(0,operand[index].length-1);
        display();
    }
    
}
function calculate(){
    var res=eval(operand[0] + operator + operand[1]);
    operand[0]=res;
    operand[1]='';
    index=0;
    display();
}

// Events
deleteButton.addEventListener("click",del);
res.addEventListener("click", reset);
equals.addEventListener("click",calculate);

number.forEach(btn =>{
    btn.addEventListener("click", function(){
        const regexp= /^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$/ ;
        if (regexp.test(operand[index]+btn.value)){
            operand[index]+=btn.value;
            display();
        }
    });
});

operatorButton.forEach(op =>{
    op.addEventListener("click", function(){
        index++;
        operator=op.value;
        display();
    });
});


