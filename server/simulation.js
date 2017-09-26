var simulation = (function(){

    var getQuestion = function(request){
        var question = {
            'question_num':'1',
            'question_des':'Apakah anda merasa sulit meminta tolong pada seorang teman untuk melakukan sesuatu untuk anda ?',
            'question_op': {
                'A':'Saya merasa sulit karena saya tidak ingin memberatkan orang lain atas tugas saya.',
                'B':'Jika dalam kondisi benar – benar mendesak maka saya akan minta tolong orang lain.',
                'C':'Tergantung situasi dan urgensi, terkadang saya meminta tolong terkadang tidak jika tidak dibutuhkan.',
                'D':'Saya jarang meminta tolong karena saya merasa itu tugas saya dan saya berusaha menyelesaikannya sendiri.',
                'E':'Saya tidak pernah merasa sulit karena menurut saya meminta tolong adalah hal yang sopan dan baik.'
            }
        }
        return question;
    }

    return {
        getQuestion:getQuestion
    }

})();

module.exports = simulation;