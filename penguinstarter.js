var penguinPromise = d3.json("classData.json")
penguinPromise.then(
function(penguins)
{console.log("worked",penguins);
 drawTable(penguins);
},
function(err)
    {console.log("failed",err);}
)


var getGrade = function(quiz)
    {
        return quizes.grade
    }
var givenmean = function(penguin)
    {
        var allquizgrades = penguin.quizes.map(getGrade)
        var findquizmean = d3.mean(allquizgrades)
        return findquizmean
    }
var allquizmean = function(classroom)
    {
    var arrayquizmeans = classroom.map(givenmean)
    return arrayquizmeans
}
console.log(allquizmean)



var drawTable = function(penguins)
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
        
}
