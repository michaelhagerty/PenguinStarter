var penguinPromise = d3.json("classData.json")
penguinPromise.then(
function(students)
{console.log("worked",students);
},
function(err)
    {console.log("failed",err);}
)

//trying to get mean quiz score
var getGrade = function(quiz)
    {
        return quizes.grade
    }
var givenmean = function(student)
    {
        var allquizgrades = student.quizes.map(getGrade)
        var findquizmean = d3.mean(allquizgrades)
        return findquizmean
    }
var allquizmean = function(students)
    {
    var arrayquizmeans = students.map(givenmean)
    return arrayquizmeans
}
//end of that 

//trying to get final scores for penguins
var getFinal = function(student)
{
    return student.final.grade;
}
getFinal("students")
var finalgrade = student.map(getFinal)
console.log(finalgrade)
//end of that 


//trying to get mean of homework







//trying to get mean of tests




//making the table
var displayTable = function(penguins)
{
    var rows = d3.select("penguinTable")
    .selectAll("tr")
        .data(penguins)
        .enter()
        .append("tr")
    
    rows.append("td")
        .append("img")
        .attr("src", function(penguins){return penguins.picture})
    
        
}
