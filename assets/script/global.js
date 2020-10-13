let defaultStatus = "crewmate";

function resetStatus(card, text) {
    card.removeClass('isDead');
    const status = card.find('.status');
    status.removeClass('imposter');
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
        $(".card.removed").removeClass('removed');
    });
    
    $("#reset").click(function(event){
        event.preventDefault();
        resetStatus($(".card"), defaultStatus);
        if (defaultStatus == "suspect") {
            $(".card .status").addClass('suspect');
        }        
        $(".card.removed").removeClass('removed');
    });
    
    $('.crewmate').click(function(event) {
        const card = $(this).closest('.card');
        resetStatus(card, "crewmate");
        console.log("oui !!");
    });

    $('.suspect').click(function(event) {
        const card = $(this).closest('.card');
        resetStatus(card, "suspect");
        card.find(".status").addClass('suspect');
    });
    
    $('.impostor').click(function(event) {
        const card = $(this).closest('.card');
        resetStatus(card, "impostor");
        card.find(".status").addClass('impostor');
    });

    $('.dead').click(function(event) {
        const card = $(this).closest('.card');
        resetStatus(card, "dead");
        card.addClass('isDead');
    });
    
    $('.remove').click(function(event) {
        const card = $(this).closest('.card');
        resetStatus(card, "removed");
        card.addClass('removed');
    });
    
});