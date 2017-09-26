$(document).ready(function(){
    $.get("http://localhost:3000/apiv1?func=get_question&module_name=cpns&module_num=1&que_num=1",
        function (data) {
            console.log(data);   
        }
    );
});