/**
 * Created by luychaco on 9/19/2014.
 */
/*
var inputObject = {
    str: "string",
    obj: {
        strInObj: "string",
        obj: {
            strInObjInObj: "string"
        }
    },
    arr: ["string1","string2", {strInObjInArr1: "string"}, {strInObjInArr2: "string"}]
*//*    isObject: {
        strInObj: "string in Object",
        nestedObject: {
            strInNestedObj: "string in a Nested Object"
        }
    };
    isArray = ["string in Array", ["string in Nested Array", ["string in Doubly Nested Array"]], { strInObjNestedInArray: "string in Object Nested in Array"}];*//*
};*/

var inputObject =
{"startTime":"2014-09-19T17:17:42Z","stepCount":3,"allNodes":["target-node-001","target-node-002"],"targetNodes":["target-node-001","target-node-002"],"updateTime":"2014-09-19T17:17:58Z","nodes":{"target-node-001":[{"stepctx":"1","executionState":"SUCCEEDED"},{"stepctx":"2","executionState":"SUCCEEDED"},{"stepctx":"3","executionState":"SUCCEEDED"}],"target-node-002":[{"stepctx":"1","executionState":"SUCCEEDED"},{"stepctx":"2","executionState":"SUCCEEDED"},{"stepctx":"3","executionState":"SUCCEEDED"}]},"executionId":734,"steps":[{"startTime":"2014-09-19T17:17:42Z","id":"1","nodeStep":true,"stepctx":"1","updateTime":"2014-09-19T17:17:50Z","nodeStates":{"target-node-001":{"startTime":"2014-09-19T17:17:42Z","updateTime":"2014-09-19T17:17:47Z","endTime":"2014-09-19T17:17:47Z","executionState":"SUCCEEDED"},"target-node-002":{"startTime":"2014-09-19T17:17:50Z","updateTime":"2014-09-19T17:17:55Z","endTime":"2014-09-19T17:17:55Z","executionState":"SUCCEEDED"}},"endTime":"2014-09-19T17:17:55Z","executionState":"SUCCEEDED"},{"startTime":"2014-09-19T17:17:47Z","id":"2","nodeStep":true,"stepctx":"2","updateTime":"2014-09-19T17:17:55Z","nodeStates":{"target-node-001":{"startTime":"2014-09-19T17:17:47Z","updateTime":"2014-09-19T17:17:49Z","endTime":"2014-09-19T17:17:49Z","executionState":"SUCCEEDED"},"target-node-002":{"startTime":"2014-09-19T17:17:55Z","updateTime":"2014-09-19T17:17:57Z","endTime":"2014-09-19T17:17:57Z","executionState":"SUCCEEDED"}},"endTime":"2014-09-19T17:17:57Z","executionState":"SUCCEEDED"},{"startTime":"2014-09-19T17:17:49Z","id":"3","nodeStep":true,"stepctx":"3","updateTime":"2014-09-19T17:17:57Z","nodeStates":{"target-node-001":{"startTime":"2014-09-19T17:17:49Z","updateTime":"2014-09-19T17:17:50Z","endTime":"2014-09-19T17:17:50Z","executionState":"SUCCEEDED"},"target-node-002":{"startTime":"2014-09-19T17:17:57Z","updateTime":"2014-09-19T17:17:58Z","endTime":"2014-09-19T17:17:58Z","executionState":"SUCCEEDED"}},"endTime":"2014-09-19T17:17:58Z","executionState":"SUCCEEDED"}],"serverNode":"serverNode","endTime":"2014-09-19T17:17:58Z","executionState":"SUCCEEDED","completed":true};

var result = {};

var getStringsInObject = function(obj) {

    for (prop in obj) {

        var val = obj[prop];
        console.log("prop: " +prop+ ", val: " +val);

        if (val.constructor == String || val.constructor == Number) {
            result[prop] = val;
        } else if (val.constructor == Object ) {
            getStringsInObject(val);
        } else if (val.constructor == Array) {
            val.forEach(function(element, i) {
                if (val[i].constructor == String) {
                    // result[prop] = (typeof result[prop] === 'undefined') ? "" : result[prop] + val[i] + "\n"; // BUG: This only outputs last array entry =/
                    result[prop] += val[i]+"\n"; // BUG: first part of string is "undefined"... tried using conditional (ternary) operator but couldn't get it to work...
                } else if (val[i].constructor == Object) {
                    getStringsInObject(val[i]);
                }
            });
        }
    }
};

getStringsInObject(inputObject);
console.log(result);