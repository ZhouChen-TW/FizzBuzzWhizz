"use strict";
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);

var fizzbuzzwhizz=require("../lib/main.js");
var wrong_num_list =[3,7,7];
var wrong_zero_list =[3,0,7];
var wrong_more_list=[3,2,5,7];
var num_list =[3,5,7];
var num_list_second =[2,3,5];
var num_contains_multipe =[3,2,4];

describe("fizzbuzzwhizz", function(){
    describe("getflag", function() {
        it("case1_wrong_input", function(){
            expect(1).to.equal(fizzbuzzwhizz(3,wrong_num_list).getflag(3,wrong_num_list));
        });

        it("case1_wrong_zero", function(){
            expect(2).to.equal(fizzbuzzwhizz(3,wrong_zero_list).getflag(3,wrong_zero_list));
        });

        it("case1_wrong_more", function(){
            expect(3).to.equal(fizzbuzzwhizz(3,wrong_more_list).getflag(3,wrong_more_list));
        });

        it("case1_wrong_max", function(){
            expect(4).to.equal(fizzbuzzwhizz(105,num_list).getflag(105,num_list));
        });
    });

    var fizzbuzz = fizzbuzzwhizz(100,num_list);
    describe("getOperation", function() {
        it("should return Fizz when input is one's multiple", function() {
            expect("Fizz").to.equal(fizzbuzz.getOperation(3));
            expect("Fizz").to.equal(fizzbuzz.getOperation(6));
            expect("Fizz").to.equal(fizzbuzz.getOperation(9));
        });

        it("should return Buzz when input is two's multiple", function() {
            expect("Buzz").to.equal(fizzbuzz.getOperation(5));
            expect("Buzz").to.equal(fizzbuzz.getOperation(10));
            expect("Buzz").to.equal(fizzbuzz.getOperation(20));
        });

        it("should return Whizz when input is three's multiple", function() {
            expect("Whizz").to.equal(fizzbuzz.getOperation(7));
            expect("Whizz").to.equal(fizzbuzz.getOperation(14));
            expect("Whizz").to.equal(fizzbuzz.getOperation(28));
        });

        it("should return FizzBuzz when input is one_two's multiple", function() {
            expect("FizzBuzz").to.equal(fizzbuzz.getOperation(15));
            expect("FizzBuzz").to.equal(fizzbuzz.getOperation(90));
        });

        it("should return FizzWhizz when input is one_three's multiple", function() {
            expect("FizzWhizz").to.equal(fizzbuzz.getOperation(21));
            expect("FizzWhizz").to.equal(fizzbuzz.getOperation(42));
        });

        it("should return BuzzWhizz when input is two_three's multiple", function() {
            expect("BuzzWhizz").to.equal(fizzbuzz.getOperation(70));
        });

        it("should return FizzBuzzWhizz when input is one_two_three's multiple", function() {
            expect("FizzBuzzWhizz").to.equal(fizzbuzzwhizz(30,num_list_second).getOperation(30));
        });

        it("should return Fizz when input contains one", function() {
            expect("Fizz").to.equal(fizzbuzz.getOperation(13));
            expect("Fizz").to.equal(fizzbuzz.getOperation(23));
            expect("Fizz").to.equal(fizzbuzz.getOperation(30));
            expect("Fizz").to.equal(fizzbuzz.getOperation(31));
            expect("Fizz").to.equal(fizzbuzz.getOperation(32));
            expect("Fizz").to.equal(fizzbuzz.getOperation(33));
            expect("Fizz").to.equal(fizzbuzz.getOperation(34));
            expect("Fizz").to.equal(fizzbuzz.getOperation(35));
            expect("Fizz").to.equal(fizzbuzz.getOperation(36));
            expect("Fizz").to.equal(fizzbuzz.getOperation(37));
            expect("Fizz").to.equal(fizzbuzz.getOperation(38));
            expect("Fizz").to.equal(fizzbuzz.getOperation(39));
            expect("Fizz").to.equal(fizzbuzz.getOperation(43));
            expect("Fizz").to.equal(fizzbuzz.getOperation(53));
            expect("Fizz").to.equal(fizzbuzz.getOperation(63));
            expect("Fizz").to.equal(fizzbuzz.getOperation(73));
            expect("Fizz").to.equal(fizzbuzz.getOperation(83));
            expect("Fizz").to.equal(fizzbuzz.getOperation(93));
        });

        it("should return oneself when input is not belong to the rules", function() {
            expect('1').to.equal(fizzbuzz.getOperation(1));
            expect('2').to.equal(fizzbuzz.getOperation(2));
            expect('4').to.equal(fizzbuzz.getOperation(4));
            expect('8').to.equal(fizzbuzz.getOperation(8));
            expect('11').to.equal(fizzbuzz.getOperation(11));
            expect('16').to.equal(fizzbuzz.getOperation(16));
            expect('17').to.equal(fizzbuzz.getOperation(17));
            expect('19').to.equal(fizzbuzz.getOperation(19));
            expect('22').to.equal(fizzbuzz.getOperation(22));
            expect('26').to.equal(fizzbuzz.getOperation(26));
            expect('29').to.equal(fizzbuzz.getOperation(29));
        });

    });

    describe("getall", function() {

        it("should return the correct when the maxlength is 17", function() {
            var result = '1\n2\nFizz\n4\nBuzz\nFizz\nWhizz\n8\nFizz\nBuzz\n11\nFizz\nFizz\nWhizz\nFizzBuzz\n16\n17\n';
            expect(fizzbuzz.getall(17)).to.equal(result);
        });

        it("should return the correct when the input has multiple", function() {
            var result = '1\nBuzz\nFizz\nBuzzWhizz\n5\nFizzBuzz\n7\nBuzzWhizz\nFizz\nBuzz\n11\nFizzBuzzWhizz\n';
            expect(fizzbuzzwhizz(12,num_contains_multipe).getall(12)).to.equal(result);
        });

    });

    describe("main : should call with 100 and console.log result", function() {
        sinon.spy(console, 'log');
        var mainresult = sinon.spy(fizzbuzz, "getall");
        fizzbuzz.main();
        expect(mainresult).to.have.been.calledWith(100);
    });
});
