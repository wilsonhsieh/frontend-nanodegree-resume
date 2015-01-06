/* $("#main").append("Wilson Hsieh");
var awesomeThoughts = "I am Wilson and I am AWESOME";

var funThoughts = awesomeThoughts.replace("AWESOME", "fun");

console.log(funThoughts);
*/

var formattedName = HTMLheaderName.replace("%data%", "Wilson Hsieh");
var formattedRole = HTMLheaderRole.replace("%data%", "Front End Web Developer");

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);