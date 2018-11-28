//consol.log("we don't need this anymore")

//var thing = 345
//var thing = "web design basics"
//var thatthing = thing + 5
//console.log(thing) 
//document.write(thing)
//document.write(thatthing)

//var here = ["nalin","elizabeth","owen", "alice", "rebecca"];

//var fragment = "One of the people here today is ";

//var sentence = fragment + here[0]

//var randomPerson = Math.floor(Math.random() * 7);

//var sentence= fragment + here[randomPerson]

//document.write(sentence)

var adj =  [" smelly ", " fake ", " large and in charge ", " mental ", " repulsive "]
var randomAdj = Math.floor(Math.random() * adj.length);



var noun1 =  ["clown", "telletubbie", "cowboy", "coding professor", "flying squirrel"];
var randomnoun1 = Math.floor(Math.random() * noun1.length);



var noun2 =  ["therapist", "the moon", "mental institution", "orthopedic surgeon", "lephrechon rainbow"];
var randomnoun2 = Math.floor(Math.random() * noun2.length);


var sentence = " The " + adj[randomAdj] + noun1[randomnoun1] + " will go to the " +  noun2[randomnoun2];

document.write(sentence)