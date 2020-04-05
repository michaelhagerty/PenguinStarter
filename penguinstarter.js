var penguinPromise = d3.json("classData.json")
penguinPromise.then(
function(penguins)
{console.log("worked",penguins)
},
function(err)
    {console.log("failed",err);}
)