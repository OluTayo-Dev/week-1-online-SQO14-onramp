//Implement a function countTruthy(arr) that takes an array and returns the number as truthy values
//Example
//countTruthy([6,3,0,30,7]) to return 4
//countTruthy([",30,30,7]) to return 3 of the truthy value

//Challenge 2
//Implement a function fizzbuzz(input) that takes a number and returns "fizz":if the number is divisible
//by 3 "buzz": if the number is divisible by 5 "fizzbuzz": if the number is divisible by both 3 and 5 number. if it is not divisible by 3 and 5 
//Example
//fizzbuzz(3) to return "fizz"
//fizzbuzz(5) to return "buzz"
//fizzbuzz(15) to return "fizz"
//fizzbuzz(7) to return 7
//filterArray([4,"z","f",5]) to return 4
//filterArray(["$^", 567,"&&&"]) to return 567

//Challenge 3
//Implement a function sumMix(arr) that given an array of integers as strings and numbers, returns the sum of 
// the array values as if all were numbers

//Example
//sumMix([9,3,'7','3']) to return 22
//sumMix(['5','0',9,3,2,1,'9',6,7]) to return 42
//sumMix(['3',6,6,0,'5',8,6,'6',2,0]) to return 41

function sumMix(arr){
    let result=0
    for(i=0;i<arr.length;i++){
        result+=parseInt(arr[i])
    }
    return result;
}
console.log(sumMix([9,3,'7','3']))

//Challenge 4
//Implement a function calculateGrade(marks) that takes an array of grades and calculates the average
//It should return the average grade by comparing with the grade table 1-49:F 50-59:E 60-69:D 70-79:C 80-89: B 90-100:A


//Example
//calculateGrade([80,80,70]) to return A
//calculateGrade([19,5,42,2,77]) to return 'F'
//calculateGrade([59,80,40,2,77]) to return 'E'
//calculateGrade([89,50,40,90,77]) to return 'D'

//Challenge 5
//Implement a function filterList(arr) that takes a list of non-negative integers and returns a new list with the stringsfiltered out

//Example
//filterList([1,2,'a','b']) to return [1,2]
//filterList([1,'a','b',0,15]) to return [1,0,15]