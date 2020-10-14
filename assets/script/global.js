let defaultStatus = "crewmate";

function resetStatus(player, text) {
    const status = player.find('.status');
    status.removeClass('impostor');
    status.removeClass('suspect');
    status.html(text);
}

$(window).on("load", function(){
   
    $("#default-crewmate").click(function(event) {
        event.preventDefault();
        defaultStatus = "crewmate";
        $("#default-crewmate").addClass("active");
        $("#default-suspect").removeClass("active");
    });
    
    $("#default-suspect").click(function(event) {
        event.preventDefault();
        defaultStatus = "suspect";
        $("#default-suspect").addClass("active");
        $("#default-crewmate").removeClass("active");
    });
    
    $("#removed").click(function(event){
        event.preventDefault();
        $(".player.removed").removeClass('removed');
    });
    
    $("#reset").click(function(event){
        event.preventDefault();
        resetStatus($(".player"), defaultStatus);
        $(".player").removeClass('isDead');
        if (defaultStatus == "suspect") {
            $(".player .status").addClass('suspect');
        }        
        $(".player.removed").removeClass('removed');
    });

    $('.dead').click(function(event) {
        const player = $(this).closest('.player');
        player.toggleClass('isDead');
    });
    
    $('.remove').click(function(event) {
        const player = $(this).closest('.player');
        resetStatus(player, "removed");
        player.addClass('removed');
    });

    $('.fa-caret-left').click(function(event) {
        const player = $(this).closest('.player');
        const status = player.find('.status');
        if (status.text() == "suspect") {
            resetStatus(player, "crewmate");
        } else if (status.text() == "impostor") {      
            resetStatus(player, "suspect");
            status.addClass('suspect');
        }
    });

    $('.fa-caret-right').click(function(event) {
        const player = $(this).closest('.player');
        const status = player.find('.status');
        if (status.text() == "crewmate") {
            resetStatus(player, "suspect");
            status.addClass('suspect');
        } else if (status.text() == "suspect") {
            resetStatus(player, "impostor");
            status.addClass('impostor');
        }
    });
    
});
