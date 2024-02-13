// // //String
//const myVariable="mathsss";
// // //length
//console.log(myVariable.length);
// // console.log("subscribe".length);
// // //methods
// // console.log(myVariable.charAt(6));
// // console.log(myVariable.indexOf("s"));
// // console.log(myVariable.lastIndexOf("s"));
//console.log(myVariable.slice(3,5));
// // console.log(myVariable.toLowerCase())
// // console.log(myVariable.toUpperCase())
//console.log(myVariable.includes("mat"))
// console.log(myVariable.split("s"))//array
//console.log("Earn, Grow, Give".split(""));

// ////number
//let myNumber=15;
 //let myFloat=15.020002;
//const myVariable="421."
// console.log(myNumber==myFloat);
//console.log(myFloat);
// console.log(Number(myVariable));
// // ////methods
// console.log(Number.isInteger(myVariable));
// console.log(Number.parseFloat(myNumber));
//  console.log(Number.parseInt(myFloat));
//  console.log(Number.parseInt(myFloat).toFixed(2));
//  console.log(typeof(myFloat.toString()));
// //chaining
 //console.log(parseFloat(myVariable).toFixed(3).toString());
//console.log(isNaN("1"));
//math properties
// console.log(Math.PI);
// console.log(Math.trunc(Math.PI));
// console.log(Math.round(4.50));
// console.log(Math.ceil(4.01));
// console.log(Math.floor(4.99));
// //console.log((Math.pow(5,2)));
// console.log(Math.max(1,10,2,3,4,5,7,7));
// console.log(Math.min(1,10,2,3,4,5,7,7));
//console.log(Math.random());
// console.log(Math.random());
//console.log(Math.floor(Math.random()*100)+1);1 to 100 no ceil
//console.log("DHdjdjkie".charAt(Math.random()));
//console.log("DHUabexkif".charAt(Math.random()));
// const myName="ramasamy";
// console.log(myName.charAt((Math.floor(Math.random()*myName.length))));

//if statement
// let viewer="hell0";
// let reply;
// if(viewer){
//     reply= `hi ${viewer}`;
// }
// else{
//     reply="sorry";
// }
// console.log(reply);
// let score=91;
// let grade;
// if(score>90){
//     grade='A';
// }else if(score>80){
//     grade="B";
// }
// console.log(grade);
//switch statement
// switch(Math.floor(Math.random()*4)){
//     case 1:
//         console.log(1);
//         break;
//     case 2:
//         console.log(2);
//         break;
//     default:
//         console.log("No match");
// }
//ternary operator(three operabds)
// const age=20;
// const beverage= age>=21?"Beer":"Juice";
// console.log(beverage)
// let score=50;
// let grade=score>80?"A":score>70?"B":score>60?"C":"f";
// console.log(grade)
//let myBoolean=alert("hi");
//console.log(myBoolean);
 //let myBoolean=confirm("hi");
 //console.log(myBoolean);
 //let my=prompt("Enter your name:");
 //console.log(my);
// // let my=prompt("Enter your name:");
// if(my){
// console.log(my ??"You didnt enter your name");
// }
// else{
//     console.log("You didnt enter your name");
// }
// console.log(my.trim().length);//trim for unwanted spavce in name at last it doesnt take count of that


// let playGame = confirm("Shall we play rock, paper, or scissors?");
// if (playGame) {
//   //play
//   let playerChoice = prompt("Please enter rock, paper, or scissors.");
//   if (playerChoice) {
//     let playerOne = playerChoice.trim().toLowerCase();
//     if (
//       playerOne === "rock" ||
//       playerOne === "paper" ||
//       playerOne === "scissors"
//     ) {
//       let computerChoice = Math.floor(Math.random() * 3 + 1);
//       let computer =
//         computerChoice === 1
//           ? "rock"
//           : computerChoice === 2
//           ? "paper"
//           : "scissors";

//       let result =
//         playerOne === computer
//           ? "Tie game!"
//           : playerOne === "rock" && computer === "paper"
//           ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
//           : playerOne === "paper" && computer === "scissors"
//           ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
//           : playerOne === "scissors" && computer === "rock"
//           ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
//           : `playerOne: ${playerOne}\nComputer: ${computer}\nplayerOne wins!`;
//       alert(result);
//       let playAgain = confirm("Play Again?");
//       playAgain ? location.reload() : alert("Ok, thanks for playing.");
//     } else {
//       alert("You didn't enter rock, paper, or scissors.");
//     }
//   } else {
//     alert("I guess you changed your mind. Maybe next time.");
//   }
// } else {
//   alert("Ok, maybe next time.");
// }

//Loops
// let i=0;
// while(i<50){
//     console.log(i);
// }
// let i=0;
// do{
//     console.log(i);
//     i=i+10;
// }while(i<5)
// for(i=0;i<50;i++){
//     console.log(i);
// }
// let i=0;
// while(i<6){
//     if(i==3){
//         break;
//     }
//     i=i+1;
// }
// console.log(i);
// let text='';
// for(let i=0;i<5;i++){
//     if(i===1){
// continue;
//     }
//     text=text+i;
// }
// console.log(text);
//function
// function sum(num1,num2){
//     console.log(num1);
//     console.log(num2);
//     if(num2===undefined){
//         return num1;
//     }
//     return num1+num2;
// }
// console.log(sum(10,2));


//console.log("ramasamy3135@gmail.com".slice(0,"ramasamy3135@gmail.com".indexOf("@")))

// email="ramasamy3135@gmail.com";
// console.log(email.slice(0,email.indexOf("@")))

// function getUserNameFromEmail(email){
//     return(email.slice(0,email.indexOf("@")));
// }
// console.log(getUserNameFromEmail("ramasamy3135@gmail.com"));

// function toProperCase(name){
//     return name.charAt(0).toUpperCase()+name.slice(1).toLowerCase();

// }
// console.log(toProperCase("subScribe"));

// const toProperCase=function(name){
//     return name.charAt(0).toUpperCase()+name.slice(1).toLowerCase();
// }
// console.log(toProperCase("subScribe"));

// const toProperCase= (name) =>{
//     return name.charAt(0).toUpperCase()+name.slice(1).toLowerCase();
// }
// console.log(toProperCase("subScribe"));

//global scope
// var x=1;
// let y=2;
// const z=3;

// //local scope//block scope
// {
//     let y=4;
// }
//  //local scope // block scope
//  function myFunc(){
//      const z=5;
//  }
//  myFunc()
//  console.log(x);

//Array

// const myArray=[];
// myArray[0]="rohi";
// myArray[1]="ram";
// myArray[2]=999;
// myArray[3]=true
// console.log(myArray);
// console.log(myArray.length);
// console.log(myArray[3]);
// console.log(myArray[myArray.length-1]);
// //add and delete at last
// myArray.push("click");
// console.log(myArray);
// myArray.pop()
// console.log(myArray);
// //add and delte at first
// myArray.unshift("click");
// console.log(myArray);
// myArray.shift()
// console.log(myArray);
//const lastItem = myArray.push("Bala");
//console.log(lastItem);
// const lastItem = myArray.pop();
// console.log(lastItem);
// const firstItem = myArray.shift();
// console.log(firstItem);
// const firstItem = myArray.unshift("Bala");
// console.log(firstItem);
// delete myArray[2];
// console.log(myArray);
// console.log(myArray[2]);
// myArray.splice(2,1);
// console.log(myArray);
// console.log(myArray[2]);
// myArray.splice(2,0,990);
// console.log(myArray);
 
// const newArray=myArray.slice(1,4);
// console.log(newArray);
// const newArray=myArray.reverse();
// console.log(newArray);
// const newArray=myArray.join();
// console.log(newArray);

// const neArray=newArray.split(',');
// console.log(neArray);

// myArrayA=["false",56,445];
// console.log(myArrayA);

// //const newArray=myArray.concat(myArrayA)
// const newArray=[...myArray,...myArrayA]
// console.log(newArray);

// const emA=["ab","cd"];
// const emB=["ef","gh"];
// const gmA=["ij","kl"];
// const gmB=["mn","op"];
// const em=[emA,emB];
// const gm=[gmA,gmB];
// const rohith=[em,gm,gm]
// console.log(emA[1],gmB[1]);
// console.log(em[0][1],gm[1][1]);
// console.log(rohith[0][0][1],rohith[1][1][1]);

const initGame = () => {
    const startGame = confirm("Shall we play rock, paper, or scissors?");
    startGame ? playGame() : alert("Ok, maybe next time.");
  };
  
  // Game flow function
  const playGame = () => {
    while (true) {
      let playerChoice = getPlayerChoice();
      playerChoice = formatPlayerChoice(playerChoice);
      if (playerChoice === "") {
        invalidChoice();
        continue;
      }
      if (!playerChoice) {
        decidedNotToPlay();
        break;
      }
      playerChoice = evaluatePlayerChoice(playerChoice);
      if (!playerChoice) {
        invalidChoice();
        continue;
      }
      const computerChoice = getComputerChoice();
      const result = determineWinner(playerChoice, computerChoice);
      displayResult(result);
      if (askToPlayAgain()) {
        continue;
      } else {
        thanksForPlaying();
        break;
      }
    }
  };
  
  const getPlayerChoice = () => {
    return prompt("Please enter rock, paper, or scissors.");
  };
  
  const formatPlayerChoice = (playerChoice) => {
    if (playerChoice || playerChoice === "") {
      return playerChoice.trim().toLowerCase();
    } else {
      return false;
    }
  };
  
  const decidedNotToPlay = () => {
    alert("I guess you changed your mind. Maybe next time.");
  };
  
  const evaluatePlayerChoice = (playerChoice) => {
    if (
      playerChoice === "rock" ||
      playerChoice === "paper" ||
      playerChoice === "scissors"
    ) {
      return playerChoice;
    } else {
      return false;
    }
  };
  
  const invalidChoice = () => {
    alert("You didn't enter rock, paper, or scissors.");
  };
  
  const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    const rpsArray = ["rock", "paper", "scissors"];
    return rpsArray[randomNumber];
  };
  
  const determineWinner = (player, computer) => {
    const winner =
      player === computer
        ? "Tie game!"
        : player === "rock" && computer === "paper"
        ? `playerOne: ${player}\nComputer: ${computer}\nComputer wins!`
        : player === "paper" && computer === "scissors"
        ? `playerOne: ${player}\nComputer: ${computer}\nComputer wins!`
        : player === "scissors" && computer === "rock"
        ? `playerOne: ${player}\nComputer: ${computer}\nComputer wins!`
        : `playerOne: ${player}\nComputer: ${computer}\nplayerOne wins!`;
  
    return winner;
  };
  
  const displayResult = (result) => {
    alert(result);
  };
  
  const askToPlayAgain = () => {
    return confirm("Play Again?");
  };
  
  const thanksForPlaying = () => {
    alert("Ok, thanks for playing.");
  };
  
  initGame();
//objects
//key-value pairs in curly braces
// //const myObj={name:"Rohith"}
// const anotherObj={
//   subscriber: true,
//   no:10000,
//   content:{
//     earn:"js",
//     grow:"stocks"
//   },
//   sub:["earn","grow","give"],
//   action: function(a,b){
//     return a+b;
//   },
//   act: function(){
//     return `Earn by learning ${this.content.earn}`
//   }
// }
// console.log(anotherObj.sub[2]);
// console.log(anotherObj.action(5,6));
// console.log(anotherObj.act());

// const vehicle={
//   door:2,
//   engine: function(){
//     return "Vroooom!";
//   }
// };
// console.log(vehicle.engine());
// const car = Object.create(vehicle);//to extract properties from above object we use this line(inheritance)
// //to add some values to car
// car.wheels=4;
// car.engine=function(){return "Whoosh"};00
// console.log(car.engine());
// const tesla= Object.create(car);
// tesla.engine=function(){return "zzzzz"};
// console.log(tesla.engine());

// const movie={
//     actor:"kavin",
//     music:"Arr",
//     director:"Lokesh",
//     producer:"Anbu"
// }
// movie.actress="oviya"
// delete movie.producer;
// console.log(movie.hasOwnProperty("producer"));
// console.log(Object.keys(movie));
// console.log(Object.values(movie));

// for(let job in movie){
//     console.log(`${job}, it's ${movie[job]}`);
// }
// //destructuring the objects

// const {music:myFavMusicDirector,director:myFavDir}=movie;
// const{actor,music,director,producer}=movie;
// console.log(music);
// console.log(actor);
// console.log(myFavMusicDirector,myFavDir);
// const movie={
//     actor:"kavin",
//     music:"Arr",
//     director:"Lokesh",
//     producer:"Anbu"
// };
// const {music}=movie;
// function sings({music}){return music;}
// console.log(sings(movie));

// const myPizza ={
//     size:"medium",
//     crust:"original",
//     bake:function(){
//         return console.log(`Baking a ${this.size} ${this.crust} crust pizza.`);
//     }
// };
// myPizza.bake();

// class pizza{
//     constructor(typePizza,sizePizza,crustPizza){
//         this.type=typePizza
//         this.size=sizePizza;
//         this.crust=crustPizza;
//         this.toppings="olives";
//     }
//     bake(){
//         return console.log(`Baking a ${this.size} ${this.type} ${this.crust} crust pizza with ${this.toppings}.`);
//     }
// }
// const anotherPizza = new pizza("margarita","small","thin");
// const anPizza = new pizza("chicken","big","thin");
// anPizza.bake();







