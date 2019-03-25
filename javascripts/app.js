
var obstacles = [
  [null,null,null,null,null,null,null,null,null,null],  //Row x=0   || y-> Columns
  [null,null,null,null,null,null,null,null,null,null],  //Row x=1
  [null,null,null,null,null,null,null,null,null,null],  //Row x=2
  ["X",null,null,null,null,null,null,null,null,null],   //Row x=3
  [null,"X",null,null,null,null,null,null,null,null],   //Row x=4
  [null,null,null,null,null,null,null,null,null,null],  //Row x=5
  [null,null,null,null,null,null,null,null,null,null],  //Row x=6
  [null,null,null,null,null,null,null,null,null,null],  //Row x=7
  [null,null,null,null,null,null,null,null,null,null],  //Row x=8
  [null,null,null,null,null,null,null,null,null,null],  //Row x=9
];

//The code allow to create any number of rovers. 
var rover1 = {
  name: "Opportunity",
  direction: "N",
  x: 0,
  y: 0,
  travelLog: []
}

var rover2 = {
  name: "Sojourner",
  direction: "N",
  x: 0,
  y: 9,
  travelLog: []
}

var rover3 = {
  name: "Curiosity",
  direction: "N",
  x: 9,
  y: 9,
  travelLog: []
}

var rovers = [rover1, rover2, rover3];  //Include all the rovers in the rovers variable.

var orders = ["fffrfffff","llfffflf","lffrfflffrbb"]; //Include all the orders for all the rovers


//Execute the turn to the left for a rover
function turnLeft(rover){
  console.log(rover.name + ": turnLeft was called!");

  switch(rover.direction){
    case "N":
      rover.direction="W";
      break;
    case "E":
      rover.direction="N";
      break;
    case "S":
      rover.direction="E";
      break;
    case "W":
      rover.direction="S";
      break;
  }
}


//Execute the turn to the right for a rover
function turnRight(rover){
  console.log(rover.name + ": turnRight was called");

  switch(rover.direction){
    case "N":
      rover.direction="E";
      break;
    case "E":
      rover.direction="S";
      break;
    case "S":
      rover.direction="W";
      break;
    case "W":
      rover.direction="N";
      break;
  }
}


//Execute the forward move for a rover
function moveForward(rover){

  console.log(rover.name + ": moveForward was called");

  rover.travelLog.push(rover.x + "," + rover.y);  //Records the position in the travel log

  switch(rover.direction){

    case "N":
      if(rover.y === 9){ //If the rover reachs a boundarie
        console.log("North boundarie reached! Rover will not move and stays in (" + rover.x + "," +rover.y + ") position.");
      }
      else if(!checkOsbtacles(obstacles,rover.x,rover.y+1) && !checkRoverCollision(rover.x,rover.y+1)){ //If there isn't a obstacle or another rover in the future position moves the rover
        rover.y +=1;
      }
      break;

    case "E":
      if(rover.x === 9){ //If the rover reachs a boundarie
        console.log("East boundarie reached! Rover will not move and stays in (" + rover.x + "," +rover.y + ") position.");
      }
      else if(!checkOsbtacles(obstacles,rover.x+1,rover.y) && !checkRoverCollision(rover.x+1,rover.y)){ //If there isn't a obstacle or another rover in the future position moves the rover
        rover.x +=1;
      }
      break;

    case "S":
      if(rover.y === 0){ //If the rover reachs a boundarie
        console.log("South boundarie reached! Rover will not move and stays in (" + rover.x + "," +rover.y + ") position.");
      }
      else if(!checkOsbtacles(obstacles,rover.x,rover.y-1) && !checkRoverCollision(rover.x,rover.y-1)){ //If there isn't a obstacle or another rover in the future position moves the rover
        rover.y -=1;
      }
      break;

    case "W":
      if(rover.x === 0){ //If the rover reachs a boundarie
        console.log("West boundarie reached! Rover will not move and stays in (" + rover.x + "," +rover.y + ") position.");
      }
      else if(!checkOsbtacles(obstacles,rover.x-1,rover.y) && !checkRoverCollision(rover.x-1,rover.y)){ //If there isn't a obstacle or another rover in the future position moves the rover
        rover.x -=1;
      }
      break;
  }
}


//Execute the backward move for a rover
function moveBackward(rover){

  console.log(rover.name + ": moveBackward was called");

  rover.travelLog.push(rover.x + "," + rover.y);  //Records the position in the travel log

  switch(rover.direction){

    case "N":
      if(rover.y === 0){  //If the rover reachs a boundarie
        console.log("South boundarie reached! Rover will not move and stays in (" + rover.x + "," +rover.y + ") position.");
      }
      else if(!checkOsbtacles(obstacles,rover.x,rover.y-1) && !checkRoverCollision(rover.x,rover.y-1)){ //If there isn't a obstacle or another rover in the future position moves the rover
        rover.y -=1;
      }
      break;

    case "E":
      if(rover.x === 0){  //If the rover reachs a boundarie
        console.log("West boundarie reached! Rover will not move and stays in (" + rover.x + "," +rover.y + ") position.");
      }
      else if(!checkOsbtacles(obstacles,rover.x-1,rover.y) && !checkRoverCollision(rover.x-1,rover.y)){ //If there isn't a obstacle or another rover in the future position moves the rover
        rover.x -=1;
      }
      break;

    case "S":
      if(rover.y === 9){  //If the rover reachs a boundarie
        console.log("North boundarie reached! Rover will not move and stays in (" + rover.x + "," +rover.y + ") position.");
      }
      else if(!checkOsbtacles(obstacles,rover.x,rover.y+1) && !checkRoverCollision(rover.x,rover.y+1)){ //If there isn't a obstacle or another rover in the future position moves the rover
        rover.y +=1;
      }
      break;

    case "W":
      if(rover.x === 9){  //If the rover reachs a boundarie
        console.log("East boundarie reached! Rover will not move and stays in (" + rover.x + "," +rover.y + ") position.");
      }
      else if(!checkOsbtacles(obstacles,rover.x+1,rover.y) && !checkRoverCollision(rover.x+1,rover.y)){ //If there isn't a obstacle or another rover in the future position moves the rover
        rover.x +=1;
      }
      break;
  }

}


//Execute the turn action concrete for a rover
function execute(rover, commands, turn){
  
  switch(commands[turn]){

    case "f":
      moveForward(rover);
      break;

    case "b":
      moveBackward(rover);
      break;

    case "l":
      turnLeft(rover);
      break;

    case "r":
      turnRight(rover);
      break;

    case undefined:
      //There is not more turns for this rover
      break;
  }
}


//Prints the history of movements of a rover from the beggining to the last one
function printMoves(rover){

  for (var i = 0 ; i < rover.travelLog.length ; i++){
    console.log("COORDINATES " + i +": " + rover.travelLog[i]);
  }
  console.log("COORDINATES " + i +": " + rover.x + "," + rover.y);
}


//Checks if a single string of orders are valid
function validateOrders(orders){

  var valid = true;

  for (var i = 0 ; i < orders.length ; i++){
    if (orders[i] !== "f" && orders[i] !== "b" && orders[i] !== "r" && orders[i] !== "l"){
      console.log("The character \'" + orders[i] + "\' is not a valid move. Insert only \'f\', \'b\', \'l\', \'r\' commands.");
      valid = false;
    }
  }
  return valid;
}


//Checks if there is any obstacle in a certain coordinates
function checkOsbtacles(obstacles, x, y){

  var ok = false;

  if (obstacles[x][y]==="X"){
    ok = true;
    console.log("Obstacle found in position (" + x + "," + y + ")");
  }
  return ok;
}


//Checks if there is any rover in a certain coordinates
function checkRoverCollision(x, y){

  var collision = false;
  var numRovers = rovers.length;
  
  for(var i = 0 ; i < numRovers ; i++){

    if(x === rovers[i].x && rovers[i].y === y){
      collision = true;
      console.log("Rover " + rovers[i].name + " found in position (" + x + "," + y + "). Rover will not move.");
    }
  }
  return collision;
}


//Checks if all the orders for all the rovers are valid
function validateAllOrders(orders){

  var validated = true;
  var numOrders = orders.length;

  for(var i = 0; i < numOrders ; i++){
    if(!validateOrders(orders[i])){
      validated = false;
    }
  }

  return validated;
}


if (validateAllOrders(orders)){ //If all the orders are valid

  var numRovers = rovers.length;

  //Calculate the number of turns to do. All the rovers will execute an action in each turn
  var turnsToGo = 0;
  for (var i = 0; i < orders.length ; i++){
    if(orders[i].length > turnsToGo){
      turnsToGo = orders[i].length;
    }
  }



  /******** This code mades walk randomly the rovers :) ************
  //        (comment lines 320 to 325 to execute random movements)

  var movements = ["f","b","l","r"];
  var numIterations = 1000;
  var random;
  
  while(numIterations > 0){

    for (var j = 0; j < numRovers ; j++){
      random = Math.floor(Math.random()*4);
      orders[0] = movements[random];
      console.log(orders[0]);
      execute(rovers[j], orders[j], 0);
    } 
    numIterations--;
  }
 ******************************************************************/




  //For every turn, will execute an action for every rover
  for (var i = 0; i < turnsToGo ; i++){
    for (var j = 0; j < numRovers ; j++){
      execute(rovers[j], orders[j], i);
    }

  }
  //Will print all the trace for each rover
  for (var i = 0 ; i < numRovers ; i++){
    console.log("Rover " + rovers[i].name + " movements:");
    printMoves(rovers[i]);
  }
}
else {  //If the orders has a mistake
  console.log("Execution cancelled");
}