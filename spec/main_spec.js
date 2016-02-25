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

});