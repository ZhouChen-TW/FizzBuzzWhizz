function main(maxlength,num_list){
    var result ='';
    var flag =true;
    for(var i=0;i<num_list.length-1;i++){
        if(num_list[i]==num_list[i+1]){
            flag=false;
        }
    }
    if(!flag){
        result="wrong input";
    }
    return result;
}

module.exports = main;
