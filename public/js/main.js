// GLOBALS
var curPage = null;             // the current page
var pagesFolder = null;         // the folder where subpages reside
var projectName = "E-health";   // the project's name


function viewGoals() {
    $('#planningPane').hide();
    $('#subAction').empty().load(
        pagesFolder + "viewGoals.html"
    );
    // get the goals from the backend
    getGoals();
    // Assign click handlers to the main goal rows (exculding the description rows which are initially hidden)
     $('#subAction').on( "click", '#viewGoals table tbody tr:nth-child(odd)', function() {
        $(this.nextElementSibling).slideToggle("fast");
    });
}

// function for returning the goals from the database and appending the response to the goal table
function getGoals() {
    console.log('getGoals');
    $.ajax({
        url: "/goals",
        dataType: "json",
        success: function(data) {
            console.log('success');
            var json = data;
            $.each(json, function(index, elem) {
            	$('#goals').append('<tr><td>'+(index+1)+'</td><td class="goal-title"</td>'
            	+json[index].goal+
            	'<td class="goal-priority">'
            	+json[index].priority+
            	'</td><td class="goal-date">'
            	+json[index].dueDate+
            	'</td></tr><tr><td colspan=4>'
            	+json[index].description+
            	'</td></tr>');
            });
        }
    });
}

function createGoal() {
    $('#planningPane').hide();
    $('#subAction').empty().load(
        pagesFolder + "createGoal.html"
    );
}

function resetPlanning() {
    $('#planningPane').show();
    $('#subAction').empty();
}

$(document).ready(function(){
    /* CODE FOR EVALUATION */
    console.log('ready');

    pagesFolder = "pages/"; // directory holding sub-pages
    
    // Load default page (home.html)
    $("main").load(pagesFolder + "home.html");
    curPage = "home";

    // assign click handlers to the menu links
    $("header nav ul li:nth-child(1) a").click(
        function () {
            var selectedPage = "home";
            if (curPage==selectedPage) return false;
            $('main').empty().load(pagesFolder + selectedPage + ".html");
            document.title = projectName + "- " + selectedPage;
            curPage = selectedPage;
        }
    );
    $("header nav ul li:nth-child(2) a").click(
        function () {
            var selectedPage = "planning";
            if (curPage==selectedPage) return false;
            $('main').empty().load(pagesFolder + selectedPage + ".html");
            document.title = projectName + "- " + selectedPage;
            curPage = selectedPage;
        }
    );
    $("header nav ul li:nth-child(3) a").click(
        function () {
            var selectedPage = "measuring";
            if (curPage==selectedPage) return false;
            $('main').empty().load(pagesFolder + selectedPage + ".html");
            document.title = projectName + "- " + selectedPage;
            curPage = selectedPage;
        }
    );
    $("header nav ul li:nth-child(4) a").click(
        function () {
            var selectedPage = "statistics";
            if (curPage==selectedPage) return false;
            $('main').empty().load(pagesFolder + selectedPage + ".html");
            document.title = projectName + "- " + selectedPage;
            curPage = selectedPage;
        }    
    );
});