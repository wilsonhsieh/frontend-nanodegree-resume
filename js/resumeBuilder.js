/* $("#main").append("Wilson Hsieh");
var awesomeThoughts = "I am Wilson and I am AWESOME";

var funThoughts = awesomeThoughts.replace("AWESOME", "fun");

console.log(funThoughts);
*/

var formattedName = HTMLheaderName.replace("%data%", "Wilson Hsieh");
var formattedRole = HTMLheaderRole.replace("%data%", "Front End Web Developer");

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var skills = ["CSS", "HTML", "JS", "Data Analysis", "leadership", "sales", "customer service"];

var bio = {
	"name" : "Wilson Hsieh",
	"role" : "Front End Developer",
	"contact" : "wilson199@yahoo.com",
	"picture" : "www.facebook.com/wilson.hsieh",
	"welcome" : "Welcome to my resume",
	"skills" : skills
};

//$("#main").append(bio.skills);

var work = {
	"ngccAnalyst" : {
		"position" : "NGCC Analyst",
		"employer" : "Fidelity Investments",
		"years" : "November 2014 - Current",
		"city" : "Westlake",
		"descriptionJob" : "Blah"
	},
	"opsAnalyst" : { 
		"position" : "Operational Analyst",
		"employer" : "Fidelity Investments",
		"years" : "January 2014 - November 2014",
		"city" : "Westlake",
		"descriptionJob" : "Blah"
	},
	"financialRep" : {
		"position" : "Financial Representative: High Opportunity",
		"employer" : "Fidelity Investments",
		"years" : "January 2013 - December 2013",
		"city" : "Westlake",
		"descriptionJob" : "Blah"
	}
};

function displayWork (){

	$("#workExperience").append(HTMLworkStart);

	for (job in work){
		var employer = HTMLworkEmployer.replace("%data%", work[job].employer);
		var title = HTMLworkTitle.replace("%data%", work[job].position);
		var employerTitle = employer + title;
		$(".work-entry").append(employerTitle);

		var year = HTMLworkDates.replace("%data%", work[job].years);
		$(".work-entry").append(year);
		var description = HTMLworkDescription.replace("%data%", work[job].descriptionJob);
		$(".work-entry").append(description);
	}
};

displayWork ();

$(document).click(function(loc){
	var x = loc.pageX;
	var y = loc.pageY;
	logClicks(x,y);
});

$("#main").append(internationalizeButton);
function inName (){
	var oldName = $("#name").html() || "";
	var name = oldName.trim().split(" ");
	console.log(name);
	return name[0].slice(0,1).toUpperCase()+
		name[0].slice(1).toLowerCase()+ " " + name[1].toUpperCase();
}


var education = {
	"school" : {
		"name" : "Texas A&M University",
		"city" : "College Station",
		"major" : "B.S. in Nutritional Science",
		"minor" : "Minor is Business",
		"Graduation" : "2012",
	},
	"onlineCourse" : {
		"name" : "Udacity",
		"city" : "Online",
		"major" : "Front End Web Developer Nanodegree",
		"Graduation" : "2015",
	}
};

var project = [{
	"title" : "Into to HTML and CSS",
	"date" : "November 2014",
	"description" : "Code a mock up of a Udacity site with HTML and CSS",
}];

project.display = function (){
	for (i=0; i < project.length; i++){
		$("#main").append(HTMLprojectStart);
		var doc = HTMLprojectTitle.replace("%data%", project[i].title);
		$("#main").append(doc);
		var complete = HTMLprojectDates.replace("%data%", project[i].date);
		$("#main").append(complete); 
		var summary = HTMLprojectDescription.replace("%data%", project[i].description);
		$("#main").append(summary); 
	}
}

project.display();


education["name"] = "Texas A&M University";
education["years"] = "2007 - 2012";
education["city"] = "College Station";

$("#main").append(work["position"]);
$("#main").append(education.name);

if (bio.skills.length > 0){
	$("#header").append(HTMLskillsStart);	
	for(skill in bio.skills){
		var skillList = HTMLskills.replace("%data%", bio.skills[skill]);
		$("#skills").append(skillList);
	}
};

$("#mapDiv").append(googleMap);

