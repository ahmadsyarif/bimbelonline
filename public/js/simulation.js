$(document).ready(function(){
    $.get("http://localhost:3000/apiv1?mode=simulation&func=get_question&module_name=cpns&module_num=1&question_num=2",
        function (data) {
            console.log(data);
            updateQuestion(data);   
        }
    );
});

function updateQuestion(data){
    $("#question_num").text(data.question_num);
    $("#question_des").text(data.question_des);
    $("#question_op_a").text(data.question_op.a);
    $("#question_op_b").text(data.question_op.b);
    $("#question_op_c").text(data.question_op.c);
    $("#question_op_d").text(data.question_op.d);
    $("#question_op_e").text(data.question_op.e);

}