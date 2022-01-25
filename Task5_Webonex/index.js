// 1. Take 2 numbers and print the smallest one amongst them
let a=20, b=10;
if ( a<b)
    console.log(a+" is the smallest");
else
    console.log(b+" is the smallest")




// 2. Take 3 numbers and print the biggest one amongst them
let a1=40,a2=20,a3=30;
if( a1<a2 && a1<a3)
    console.log(a1+" is the smallest")
else if( a2<a1 && a2<a3)
    console.log(a2+" is the smallest")
else
    console.log(a3+" is the smallest")
// 3. Use switch case to return a grade for the score, either "A", "B", "C", "D", or "F". (Take convension for numbers and grades by yourself)Anything below 50 is F
 let grade=97;

switch (true){
    case grade>=90:
        console.log("A")
        break;
    case grade>=80:
        console.log("B")
        break;
    case grade>=65:
        console.log("C")
        break;
    case grade>=40:
        console.log("D")
        break;
    default:
        console.log("F") 
    
}