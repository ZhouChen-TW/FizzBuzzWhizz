function getflag(maxlength,num_list){
    var flag =0;
    if(num_list.length!=3){
        flag =3;
    }
    if(maxlength<1||maxlength>100){
        flag =4;
    }
    for(var i=0;i<num_list.length-1;i++){
        if(num_list[i]!=0 && num_list[i+1]!=0){
            if(num_list[i]==num_list[i+1]){
                flag=1;
            }
        }else{
            flag =2;
        }

    }
    return flag;
}

function  getOperation(num,num_list){
    var result ='';
    var num_A=num_list[0];
    var num_B =num_list[1];
    var num_C =num_list[2];
    if (num.toString().indexOf(num_A.toString()) >= 0) {
        return  "Fizz";
    }
    if (num % num_A == 0) {
        result += 'Fizz';
    }
    if (num % num_B == 0) {
        result += 'Buzz';
    }
    if (num % num_C ==0) {
        result += 'Whizz';
    }

    if(result==''){
        return num.toString();
    }
    else {
        return result;
    }
}

function main(maxlength,num_list){
    var flag = getflag(maxlength,num_list);
    var rel='';
    if(flag==1){
        rel= "wrong input";
    }
    if(flag ==2){
        rel= "wrong_zero";
    }
    if(flag ==3){
        rel= "wrong_more"
    }
    if(flag ==4){
        rel ="wrong_max,max should less then 100"
    }
    if(flag ==0){
        for(var j=1;j<maxlength+1;j++) {
            rel += getOperation(j, num_list)+'\n';
        }
    }
    console.log(rel);
    return rel;
}

module.exports = main;

