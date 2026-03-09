let shoppingList = [
    "Milk",
    "Eggs",
    "Bread",
    ["Apples", "Bananas", "Oranges"],
    ["Potatoes", "Tomatoes", "Onions"]
];

let student = {
    name: "Amit",
    age: 20,
    grade: "A",
    address: {
        street: "123 Main St",
        city: "Anytown",
        country: "India"
    }
};
const movies = [
    {
      title: "The Dark Knight",
      genre: "Action",
      year: 2008,
      imdbRating: 9.0,
      actors: ["Christian Bale", "Heath Ledger", "Michael Caine"]
    },
    {
      title: "Inception",
      genre: "Thriller",
      year: 2010,
      imdbRating: 8.8,
      actors: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page"]
    },
    {
      title: "Shawshank Redemption",
      genre: "Drama",
      year: 1994,
      imdbRating: 9.3,
      actors: ["Tim Robbins", "Morgan Freeman"]
    },
    {
      title: "Pulp Fiction",
      genre: "Crime",
      year: 1994,
      imdbRating: 8.9,
      actors: ["John Travolta", "Uma Thurman", "Samuel L. Jackson"]
    },
    {
      title: "The Godfather",
      genre: "Drama",
      year: 1972,
      imdbRating: 9.2,
      actors: ["Marlon Brando", "Al Pacino"]
    },
    {
      title: "The Matrix",
      genre: "Action",
      year: 1999,
      imdbRating: 8.7,
      actors: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"]
    },
    {
      title: "Forrest Gump",
      genre: "Drama",
      year: 1994,
      imdbRating: 8.8,
      actors: ["Tom Hanks", "Robin Wright", "Gary Sinise"]
    },
    {
      title: "The Silence of the Lambs",
      genre: "Thriller",
      year: 1991,
      imdbRating: 8.6,
      actors: ["Jodie Foster", "Anthony Hopkins"]
    },
    {
      title: "The Shawshank Redemption",
      genre: "Drama",
      year: 1994,
      imdbRating: 9.3,
      actors: ["Tim Robbins", "Morgan Freeman"]
    },
    {
      title: "The Departed",
      genre: "Crime",
      year: 2006,
      imdbRating: 8.5,
      actors: ["Leonardo DiCaprio", "Matt Damon", "Jack Nicholson"]
    },
    {
      title: "The Prestige",
      genre: "Mystery",
      year: 2006,
      imdbRating: 8.5,
      actors: ["Christian Bale", "Hugh Jackman", "Scarlett Johansson"]
    },
    {
      title: "The Hangover",
      genre: "Comedy",
      year: 2009,
      imdbRating: 7.7,
      actors: ["Bradley Cooper", "Ed Helms", "Zach Galifianakis"]
    },
    {
      title: "Die Hard",
      genre: "Action",
      year: 1988,
      imdbRating: 8.2,
      actors: ["Bruce Willis", "Alan Rickman"]
    },
    {
      title: "Fight Club",
      genre: "Drama",
      year: 1999,
      imdbRating: 8.8,
      actors: ["Brad Pitt", "Edward Norton", "Helena Bonham Carter"]
    },
    {
      title: "Gladiator",
      genre: "Action",
      year: 2000,
      imdbRating: 8.5,
      actors: ["Russell Crowe", "Joaquin Phoenix"]
    },
    {
      title: "The Social Network",
      genre: "Biography",
      year: 2010,
      imdbRating: 7.7,
      actors: ["Jesse Eisenberg", "Andrew Garfield", "Justin Timberlake"]
    },
    {
      title: "The Shining",
      genre: "Horror",
      year: 1980,
      imdbRating: 8.4,
      actors: ["Jack Nicholson", "Shelley Duvall"]
    },
    {
      title: "The Departed",
      genre: "Crime",
      year: 2006,
      imdbRating: 8.5,
      actors: ["Leonardo DiCaprio", "Matt Damon", "Jack Nicholson"]
    },
    {
      title: "The Revenant",
      genre: "Adventure",
      year: 2015,
      imdbRating: 8.0,
      actors: ["Leonardo DiCaprio", "Tom Hardy"]
    },
    {
      title: "The Usual Suspects",
      genre: "Crime",
      year: 1995,
      imdbRating: 8.5,
      actors: ["Kevin Spacey", "Gabriel Byrne", "Benicio Del Toro"]
    },
    {
      title: "Interstellar",
      genre: "Sci-Fi",
      year: 2014,
      imdbRating: 8.6,
      actors: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"]
    }
  ];
  
  console.log(movies);
  
// Write JavaScript code to fetch the first item in the grocery items list.
console.log(shoppingList[0]);

//Write JavaScript code to add "Carrots" to the end of the grocery items list. 
//Log the updated grocery items list.
shoppingList.push('Carrots');
console.log(shoppingList);

//Write JavaScript code to remove the last item from the grocery items list. 
//Log the updated grocery items list before and after the removal.
console.log(shoppingList);
shoppingList.pop();
console.log(shoppingList);

//remove "Tomatoes" and "Onions" from the grocery items list, and add "Cucumbers" and "Bell Peppers" 
//in their place. Log the updated grocery items list before and after the splice operation.
// Log before splice
console.log("Before splice:", shoppingList);

// Remove Tomatoes and Onions, add Cucumbers and Bell Peppers
shoppingList[4].splice(1, 2, "Cucumbers", "Bell Peppers");

// Log after splice
console.log("After splice:", shoppingList);


//Write JavaScript code to fetch the student's name.
console.log(student.name);

//Write JavaScript code to add a new property phone with the value "123-456-7890" to the student object. 
// Log the updated student object.
// Add new property
student.phone = "123-456-7890";
// Log updated object
console.log(student);

//Write JavaScript code to remove the grade property from the student object. 
//Log the updated student object before and after the removal.

//student object before 
console.log("Before: ", student);
//remove the grade property
delete student.grade;
//student object after 
console.log("After: ", student);

//Write JavaScript code to modify the student's age to 21. Log the updated student object.
//student object before modification
console.log("Before: ", student);
//remove the grade property
student.age=21;
//student object after modification
console.log("Afte: ", student);

//Write a JavaScript function that takes a number as input and returns "Positive" if the number is greater than 
//0, "Negative" if it's less than 0, and "Zero" if it's equal to 0.
let num = -9;

if(num > 0){
    console.log("The number is positive");
}else if (num < 0){
    console.log("The number is negative");
}else{
    console.log("The number is zero");
}

//Create a JavaScript program that evaluates a student's grade based on their score. The program should output
//  "A" if the score is between 90 and 100, "B" if it's between 80 and 89, "C" if it's between 70 and 79, "D" 
// if it's between 60 and 69, and "F" if it's below 60.

let score = 32;

if(score >= 90 && score <=100){
    console.log("Grade A");
}else if(score >= 80 && score <=89){
    console.log("Grade B");
}else if(score >= 70 && score <=79){
    console.log("Grade C");
}else if(score >= 60 && score <=69){
    console.log("Grade D");
}else{
    console.log("Grade F")
}

//- Write a JavaScript function that takes a string as input and returns "Truthy" if the string is not empty, 
// "Falsy" otherwise.
function checkString(str) {
    if (str) {
        return "Truthy";
    } else {
        return "Falsy";
    }
}

console.log(checkString("Hello")); // Truthy
console.log(checkString(""));      // Falsy


//Create a new array containing only the titles of the movies.
let movieTitles = movies.map(movie => movie.title);
console.log(movieTitles);

//Create a new array containing only the movie titles along with their IMDb ratings.
let titlesImdb = movies.map(movie => "Title: "+movie.title + " Imdb: " + movie.imdbRating);
console.log(titlesImdb);

//Filter the movies to create an array of thriller movies released after the year 2000.
let thriller2000 = movies.filter(movie => movie.genre == 'Thriller').filter(movie => movie.year >2000);
console.log(thriller2000);

//Filter the movies to create an array of drama movies with IMDb ratings above 8.5.
let dramaImdb8 = movies.filter(movie => movie.genre=='Drama' && movie.imdbRating > 8.5);
console.log(dramaImdb8);

//Filter the movies to create an array of action movies starring Leonardo DiCaprio.
let actionLeonardo = movies.filter(movie => movie.genre == 'Action' && movie.actors.includes('Leonardo DiCaprio'));
console.log(actionLeonardo);

//Chain operations to find all drama movies featuring Christian Bale.
let dramaChristian = movies.filter(movie => movie.genre == 'Drama').filter(movie => movie.actors.includes('Christian Bale'));
console.log(dramaChristian);

//Chain operations to find all drama movies featuring Tim Robbins.
let dramaRobbins= movies.filter(movie => movie.genre == 'Drama').filter(movie => movie.actors.includes('Tim Robbins'));
console.log(dramaRobbins);