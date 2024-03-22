//Find the last element of the following arrays.arr1 = [3,7,34,90,12]arr2 = [true, "green", "where",12,56]
const arr1 = [3,7,34,90,12];
console.log("last item",arr1[arr1.lenght-1]);
l
let arr2 = [true ,"green", "where",12 ,56];
console.log("last item",arr2[arr2.lenght-1]);




//Write a JS program that will join the following array elements into a stringmyPets = ["Cow", "Bird", "Snake", "Dog"];
const myPets = ["Cow", "Bird", "Snake", "Dog"];
let newPets = myPets.toString();
console.log({newPets});

//Write a JS script to sort the following array itemsvar arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];
const arr3 = [ -5,9,5,3,2,-3,6,8,4,1];
let newarr3 = arr3.sort();
console.log({newarr3});

//Write a program to remove duplicates from the following array.Console the array without duplicates, and console another array that only contains the duplicates
//let arr = ["boy", "man", "girl",            "school", "girl", "woman"];
let arr = ["boy", "man", "girl", "school", "girl", "woman"]
function removeDuplicate(arr){
    return {...new Set (arr)};
    console.log(removeDuplicate(arr));;
}


//Write a JS script to search for the following word in the array."food"If the word is present, return it else return "the search word was not found"let arr5 = ["the", "way", "x", 4];
let arr5 = ["the", "way", "x", 4];
let get = arr5.includes("food");

if(get==true){
    console.log(true);
}
else{
    console.log("the search word was not found");
}


//Write a JS script to sort the following string:let word = "renniw"
const word = ["renniw"];
let newWord = word.sort();
console.log({newWord});

