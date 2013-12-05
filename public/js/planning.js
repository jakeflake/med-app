function createGoal() {
    $('#planningPane').hide();
    $('#subAction').empty().load(
        pagesFolder + "createGoal.html"
    );
}
function viewGoals() {
    $('#planningPane').hide();
    $('#subAction').empty().load(
        pagesFolder + "viewGoals.html"
    );
    // Assign click handlers to the main goal rows (exculding the description rows which are initially hidden)
     $('#subAction').on( "click", '#viewGoals table tbody tr:nth-child(odd)', function() {
        $(this.nextElementSibling).slideToggle("fast");
    });
}

function resetPlanning() {
    $('#planningPane').show();
    $('#subAction').empty();
}