var goals = new Array, contacts, facts;

$(document).ready ( function () {
	
	$.getJSON("../js/goals.json", function(data) {
        
        goals = data;
       	goals.sort(
       	    function (goal1, goal2) {
                // sort goals based on priority (maxPriority -> minPriority)
    	        return (goal1.priority<goal2.priority ? 1 :( goal1.priority>goal2.priority ? -1 : 0 ));
       	    });
       	
		var enumCell, titleCell, priorityCell, addedonCell, descCell;
		
		for ( var i=0 ; i < goals.length; i++)
		{
			enumCell = $('<td></td>').text( i+1 );
			titleCell = $('<td></td>').text( goals[i].title );
			priorityCell = $('<td></td>').text( goals[i].priority );
			addedonCell = $('<td></td>').text( goals[i].addedOn );
			descCell = $('<td></td>')
			    .attr('colspan', '4')
			    .append(
				$('<h1></h1>').text('Description'),
				$('<p></p>').text( goals[i].description == "" ? "(no description available)" : goals[i].description )
			);
			
			// Odd Row containing main fields of the goal
			$('<tr></tr>')
			    .append(enumCell, titleCell, priorityCell, addedonCell)
			    .on (
				"click", function() {
					$(this.nextElementSibling).toggleClass('collapsed');
				})
				.appendTo( $('#goals tbody'));
			
			// Even Row containing description of the goal
			$('<tr></tr>').addClass('collapsed').append(descCell).appendTo( $('#goals tbody') );
		}
		//$('<div></div>').addClass('editIcon').insertAfter($('.tblTemplate'));
	});
	
	$('#btnAddGoal').on("click", addGoal());
	$('#btnExpandAll').on("click", function(){
		$('#goals tbody tr:nth-child(2n)').removeClass("collapsed");
	});
	$('#btnCollapseAll').on("click", function(){
		$('#goals tbody tr:nth-child(2n)').addClass("collapsed");
	});
});


function addGoal() {
    $("#goals tbody tr:last-child").append(
        $('<tr></tr>')
        .append(
            $('<td></td>').text(goals.length + 1),
            $('<td><input type=\'text\' /></td>'),
            $('<td><input type=\'text\' /></td>'),
            $('<td><input type=\'text\' /></td>')
        ),
        $('<tr></tr>')
    );
}