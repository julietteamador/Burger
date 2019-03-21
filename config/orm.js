var connection = require("../config/connection");

function printQuestionMarks(num){
    var arr = [];

    for (var i = 0; i < num; i++){
        arr.push("?");
    }
    return arr.toString();
}

function objToSql(ob) {
    var arr = [];

    for (var key in ob){
        var value = ob[key];

        if (Object.hasOwnProperty.call(ob, key)){
            value = "'" + value + "'";
        }
        arr.push(key + "=" + value);
    }
}
return arr.toString();


