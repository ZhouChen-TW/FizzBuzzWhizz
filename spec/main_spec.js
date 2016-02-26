"use strict";
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);

var main = require("../lib/main.js");
var wrong_num_list =[3,7,7];
var wrong_zero_list =[3,0,7];
var wrong_more_list=[3,2,5,7];
var num_list =[3,5,7];
var num_list_second =[3,2,5];

describe("测试描述", function(){
    sinon.spy(console, 'log');

    it("case1_wrong_input", function(){

        var result = main(3,wrong_num_list);
        var expect_string = 'wrong input';
        expect(expect_string).to.equal(result);
    });

    it("case1_wrong_zero", function(){

        var result = main(3,wrong_zero_list);
        var expect_string = 'wrong_zero';
        expect(expect_string).to.equal(result);
    });

    it("case1_wrong_more", function(){

        var result = main(3,wrong_more_list);
        var expect_string = 'wrong_more';
        expect(expect_string).to.equal(result);
    });

    it("case1_wrong_max", function(){

        var result = main(105,num_list);
        var expect_string = 'wrong_max,max should less then 100';
        expect(expect_string).to.equal(result);
    });

    it("case2_multiple_one", function(){

        var result = main(6,num_list);
        var expect_string = '1\n'
            + '2\n'
            + 'Fizz\n'
            + '4\n'
            + 'Buzz\n'
            + 'Fizz\n';
        expect(expect_string).to.equal(result);
    });

    it("case2_multiple_two", function(){

        var result = main(10,num_list);
        var expect_string = '1\n'
            + '2\n'
            + 'Fizz\n'
            + '4\n'
            + 'Buzz\n'
            + 'Fizz\n'
            + 'Whizz\n'
            + '8\n'
            + 'Fizz\n'
            + 'Buzz\n'
        expect(expect_string).to.equal(result);
    });

    it("case2_multiple_three", function(){

        var result = main(14,num_list);
        var expect_string = '1\n'
            + '2\n'
            + 'Fizz\n'
            + '4\n'
            + 'Buzz\n'
            + 'Fizz\n'
            + 'Whizz\n'
            + '8\n'
            + 'Fizz\n'
            + 'Buzz\n'
            + '11\n'
            + 'Fizz\n'
            + 'Fizz\n'
            + 'Whizz\n';
        expect(expect_string).to.equal(result);
    });

    it("case3_multiple_one_two", function(){

        var result = main(15,num_list);
        var expect_string = '1\n'
            + '2\n'
            + 'Fizz\n'
            + '4\n'
            + 'Buzz\n'
            + 'Fizz\n'
            + 'Whizz\n'
            + '8\n'
            + 'Fizz\n'
            + 'Buzz\n'
            + '11\n'
            + 'Fizz\n'
            + 'Fizz\n'
            + 'Whizz\n'
            + 'FizzBuzz\n';
        expect(expect_string).to.equal(result);
    });

    it("case3_multiple_one_three", function(){

        var result = main(21,num_list);
        var expect_string = '1\n'
            + '2\n'
            + 'Fizz\n'
            + '4\n'
            + 'Buzz\n'
            + 'Fizz\n'
            + 'Whizz\n'
            + '8\n'
            + 'Fizz\n'
            + 'Buzz\n'
            + '11\n'
            + 'Fizz\n'
            + 'Fizz\n'
            + 'Whizz\n'
            + 'FizzBuzz\n'
            + '16\n'
            + '17\n'
            + 'Fizz\n'
            + '19\n'
            + 'Buzz\n'
            + 'FizzWhizz\n';
        expect(expect_string).to.equal(result);
    });

    it("case3_multiple_two_three", function(){

        var result = main(35,num_list);
        var expect_string = '1\n'
            + '2\n'
            + 'Fizz\n'
            + '4\n'
            + 'Buzz\n'
            + 'Fizz\n'
            + 'Whizz\n'
            + '8\n'
            + 'Fizz\n'
            + 'Buzz\n'
            + '11\n'
            + 'Fizz\n'
            + 'Fizz\n'
            + 'Whizz\n'
            + 'FizzBuzz\n'
            + '16\n'
            + '17\n'
            + 'Fizz\n'
            + '19\n'
            + 'Buzz\n'
            + 'FizzWhizz\n'
            + '22\n'
            + 'Fizz\n'
            + 'Fizz\n'
            + 'Buzz\n'
            + '26\n'
            + 'Fizz\n'
            + 'Whizz\n'
            + '29\n'
            + 'Fizz\n'
            + 'Fizz\n'
            + 'Fizz\n'
            + 'Fizz\n'
            + 'Fizz\n'
            + 'Fizz\n';
        expect(expect_string).to.equal(result);
    });

    it("case3_contains_one", function(){

        var result = main(23,num_list);
        var expect_string = '1\n'
            + '2\n'
            + 'Fizz\n'
            + '4\n'
            + 'Buzz\n'
            + 'Fizz\n'
            + 'Whizz\n'
            + '8\n'
            + 'Fizz\n'
            + 'Buzz\n'
            + '11\n'
            + 'Fizz\n'
            + 'Fizz\n'
            + 'Whizz\n'
            + 'FizzBuzz\n'
            + '16\n'
            + '17\n'
            + 'Fizz\n'
            + '19\n'
            + 'Buzz\n'
            + 'FizzWhizz\n'
            + '22\n'
            + 'Fizz\n';
        expect(expect_string).to.equal(result);
    });

    it("case4_multiple_one_two_three", function(){

        var result = main(30,num_list_second);
        var expect_string = '1\n'
            + 'Buzz\n'
            + 'Fizz\n'
            + 'Buzz\n'
            + 'Whizz\n'
            + 'FizzBuzz\n'
            + '7\n'
            + 'Buzz\n'
            + 'Fizz\n'
            + 'BuzzWhizz\n'
            + '11\n'
            + 'FizzBuzz\n'
            + 'Fizz\n'
            + 'Buzz\n'
            + 'FizzWhizz\n'
            + 'Buzz\n'
            + '17\n'
            + 'FizzBuzz\n'
            + '19\n'
            + 'BuzzWhizz\n'
            + 'Fizz\n'
            + 'Buzz\n'
            + 'Fizz\n'
            + 'FizzBuzz\n'
            + 'Whizz\n'
            + 'Buzz\n'
            + 'Fizz\n'
            + 'Buzz\n'
            + '29\n'
            + 'Fizz\n';
        expect(expect_string).to.equal(result);
    });

    it("case4_other", function(){

        var result = main(17,num_list);
        var expect_string = '1\n'
            + '2\n'
            + 'Fizz\n'
            + '4\n'
            + 'Buzz\n'
            + 'Fizz\n'
            + 'Whizz\n'
            + '8\n'
            + 'Fizz\n'
            + 'Buzz\n'
            + '11\n'
            + 'Fizz\n'
            + 'Fizz\n'
            + 'Whizz\n'
            + 'FizzBuzz\n'
            + '16\n'
            + '17\n';
        expect(expect_string).to.equal(result);
    });

    it("case5_one_hundred", function(){

        var result = main(100,num_list);
        var expect_string = '1\n'
            + '2\n'
            + 'Fizz\n'
            + '4\n'
            + 'Buzz\n'
            + 'Fizz\n'
            + 'Whizz\n'
            + '8\n'
            + 'Fizz\n'
            + 'Buzz\n'
            + '11\n'
            + 'Fizz\n'
            + 'Fizz\n'
            + 'Whizz\n'
            + 'FizzBuzz\n'
            + '16\n'
            + '17\n'
            + 'Fizz\n'
            + '19\n'
            + 'Buzz\n'
            + 'FizzWhizz\n'
            + '22\n'
            + 'Fizz\n'
            + 'Fizz\n'
            + 'Buzz\n'
            + '26\n'
            + 'Fizz\n'
            + 'Whizz\n'
            + '29\n'
            + 'Fizz\n'
            + 'Fizz\n'
            + 'Fizz\n'
            + 'Fizz\n'
            + 'Fizz\n'
            + 'Fizz\n'
            + 'Fizz\n'
            + 'Fizz\n'
            + 'Fizz\n'
            + 'Fizz\n'
            + 'Buzz\n'
            + '41\n'
            + 'FizzWhizz\n'
            + 'Fizz\n'
            + '44\n'
            + 'FizzBuzz\n'
            + '46\n'
            + '47\n'
            + 'Fizz\n'
            + 'Whizz\n'
            + 'Buzz\n'
            + 'Fizz\n'
            + '52\n'
            + 'Fizz\n'
            + 'Fizz\n'
            + 'Buzz\n'
            + 'Whizz\n'
            + 'Fizz\n'
            + '58\n'
            + '59\n'
            + 'FizzBuzz\n'
            + '61\n'
            + '62\n'
            + 'Fizz\n'
            + '64\n'
            + 'Buzz\n'
            + 'Fizz\n'
            + '67\n'
            + '68\n'
            + 'Fizz\n'
            + 'BuzzWhizz\n'
            + '71\n'
            + 'Fizz\n'
            + 'Fizz\n'
            + '74\n'
            + 'FizzBuzz\n'
            + '76\n'
            + 'Whizz\n'
            + 'Fizz\n'
            + '79\n'
            + 'Buzz\n'
            + 'Fizz\n'
            + '82\n'
            + 'Fizz\n'
            + 'FizzWhizz\n'
            + 'Buzz\n'
            + '86\n'
            + 'Fizz\n'
            + '88\n'
            + '89\n'
            + 'FizzBuzz\n'
            + 'Whizz\n'
            + '92\n'
            + 'Fizz\n'
            + '94\n'
            + 'Buzz\n'
            + 'Fizz\n'
            + '97\n'
            + 'Whizz\n'
            + 'Fizz\n'
            + 'Buzz\n';
        expect(expect_string).to.equal(result);
    });

});