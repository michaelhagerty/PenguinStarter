var penguinPromise = d3.json("classData.json")
penguinPromise.then(
function(students)
{console.log("worked",students);
},
function(err)
    {console.log("failed",err);}
)

//trying to get mean quiz score for all penguins
var getQGrade = function(quizes)
    {
        return quizes.grade
    }
var givenQmean = function(student)
    {
        var allquizgrades = student.quizes.map(getQGrade);
        var findquizmean = d3.mean(allquizgrades);
        return findquizmean;
    }
var allquizmean = function(students)
    {
    var arrayquizmeans = students.map(givenQmean);
    return arrayquizmeans;
}
//end 




//trying to get final scores for penguins
var getFinal = function(students)
{
    console.log(students.final.grade);
}
var finalgrade = students.map(getFinal)
//end




//trying to get mean of homework
var getHGrade = function(homework)
	{
		return homework.grade
	}
var givenHmean = function(student)
	{
		var allhwgrades = student.homework.map(getHGrade);
		var findhwmean = d3.mean(allhwgrades);
		return findhwmean;
	}
var allhwmean = function(students)
	{
		var arrayhwmeans = students.map(givenHmean);
		return arrayhwmeans;
	}
//end



//trying to get mean of tests
var getTGrade = function(test)
	{
		return test.grade
	}
var givenTmean = function(student)
	{
		var alltestgrades = student.test.map(getTGrade);
		var findtestmean = d3.mean(alltestgrades);
		return findtestmean;
	}
var alltestmean = function(students)
	{
		var arraytestmeans = students.map(givenTmean);
		return arraytestmeans;
	}
//end


//making the table
var displayTable = function(students)
{
    var rows = d3.select("penguinTable")
    .selectAll("tr")
        .data(penguins)
        .enter()
        .append("tr")
    
    rows.append("td")
        .append("img")
        .attr("src", function(penguins){return penguins.picture})
	rows.append("td")
		.text(allquizmean)
	rows.append("td")
		.text(allhwmean)
	rows.append
		.text(alltestmean)
	rows.append
		.text(finalgrade)
}
//end




