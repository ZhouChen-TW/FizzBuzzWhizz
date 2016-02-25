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
var num_list =[3,5,7];

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

    it("case4_contains_one", function(){

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


});