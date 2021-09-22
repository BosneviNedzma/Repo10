function myFunction (myObj, checkProp) {
    // Only change code below this line
    if(myObj.hasOwnProperty(checkProp)){
    return myObj[checkProp]; }
return "Not Found";
    
myFunction({title: "Titanic", song: "My Heart Will Go On", genre: "drama"}, "title");
myFunction({title: "Titanic", song: "My Heart Will Go On", genre: "drama"}, "song");
myFunction({title: "Titanic", song: "My Heart Will Go On", genre: "drama"}, "genre");
myFunction({title: "Titanic", song: "My Heart Will Go On", genre: "drama"}, "actor");
    // Only change code above this line
    }
module.exports = myFunction;