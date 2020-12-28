$(()=>{
    $("#deliver").click(()=>{
        $('#deliver').prop('disabled', false);
$('#schedule').prop('disabled', true);
    })



    $(document).ready(function(){ 
        $('#deliver').click(function() { 
            $('#deliver').toggleClass('active');
            $('#schedule').toggleClass('active');
        });
        });
})