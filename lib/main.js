function main(maxlength,num_list){
    var result ='';
    var flag =0;

    for(var i=0;i<num_list.length-1;i++){
        if(num_list[i]!=0 && num_list[i+1]!=0){
            if(num_list[i]==num_list[i+1]){
                flag=1;
            }
        }else{
            flag =2;
        }

    }
    if(flag==1){
        result="wrong input";
    }
    if(flag ==2){
        result="wrong_zero";
    }
    return result;
}

module.exports = main;
