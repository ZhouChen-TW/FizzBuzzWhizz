"use strict";
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);

var main = require("../lib/main.js");
var num_list =[3,7,7];

describe("测试描述", function(){
    sinon.spy(console, 'log');

    it("case1_wrong_input", function(){

        var result = main(3,num_list);
        var expect_string = 'wrong input';
        expect(expect_string).to.equal(result);
    });

});