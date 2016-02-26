function fizzbuzzwhizz(maxlength,num_list){
    var num_A=num_list[0];
    var num_B =num_list[1];
    var num_C =num_list[2];
    return {
        getflag : function(maxlength,num_list){
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
        },

        getOperation:function(num){
            var result ='';
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
        },
        getall:function(maxlength){
            var rel ="";
            for(var j=1;j<maxlength+1;j++) {
                rel += this.getOperation(j)+'\n';
            }
            return rel;
        },

        main:function(){
            var flag = this.getflag(100,num_list);
            var rel='';
            if(flag ==0){
                rel = this.getall(100);
            }
            console.log(rel);
        }
    }
}

module.exports = fizzbuzzwhizz;


