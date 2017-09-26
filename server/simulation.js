const cpns_module = require('./bank/cpns/cpns_module');

var simulation = (function(){
    var getResponse = function(request){
        switch(request.func){
            case 'get_question':
                return getQuestion(request);
                break;
        }
    }
    var getQuestion = function(request){
        var question;
        switch(request.module_name){
            case 'cpns':
                question = cpns_module[parseInt(request.module_num)-1].question[parseInt(request.question_num)-1];
                
                break;
        }
        return question;
    }

    return {
        getResponse:getResponse
    }

})();

module.exports = simulation;