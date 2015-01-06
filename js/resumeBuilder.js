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

$("#main").append(bio.skills);
