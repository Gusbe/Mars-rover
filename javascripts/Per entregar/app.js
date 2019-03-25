
var rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: []
}

var obstacles = [
  [null,null,"X",null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null,null,null],
  ["X",null,"X","X",null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null,null,null],
  [null,null,null,null,"X",null,null,null,null,null],
  [null,null,null,null,"X",null,null,null,null,null],
  [null,null,null,null,"X",null,null,null,null,null],
  [null,null,"X","X","X",null,null,null,"X",null,null],
  [null,null,null,null,null,null,null,"X",null,null],
  [null,null,null,null,null,null,null,"X",null,null],
];


function turnLeft(rover){
  console.log("turnLeft was called!");

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

function turnRight(rover){
  console.log("turnRight was called!");

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

function moveForward(rover){

  var obstacleFree = true;

  console.log("moveForward was called");

  rover.travelLog.push(rover.x + "," + rover.y);

  switch(rover.direction){

    case "N":
      if(rover.y === 9){
        console.log("North boundarie reached! Rover will not move and stays in (" + rover.x + "," +rover.y + ") position.");
      }
      else if(!checkOsbtacles(obstacles,rover.x,rover.y+1)){
        rover.y +=1;
      }
      else{
        obstacleFree = false;
      }
      break;

    case "E":
      if(rover.x === 9){
        console.log("East boundarie reached! Rover will not move and stays in (" + rover.x + "," +rover.y + ") position.");
      }
      else if(!checkOsbtacles(obstacles,rover.x+1,rover.y)){
        rover.x +=1;
      }
      else{
        obstacleFree = false;
      }
      break;

    case "S":
      if(rover.y === 0){
        console.log("South boundarie reached! Rover will not move and stays in (" + rover.x + "," +rover.y + ") position.");
      }
      else if(!checkOsbtacles(obstacles,rover.x,rover.y-1)){
        rover.y -=1;
      }
      else{
        obstacleFree = false;
      }
      break;

    case "W":
      if(rover.x === 0){
        console.log("West boundarie reached! Rover will not move and stays in (" + rover.x + "," +rover.y + ") position.");
      }
      else if(!checkOsbtacles(obstacles,rover.x-1,rover.y)){
        rover.y -=1;
      }
      else{
        obstacleFree = false;
      }
      break;
  }

  return obstacleFree;

}


function moveBackward(rover){

  var obstacleFree = true;

  console.log("moveBackward was called");

  rover.travelLog.push(rover.x + "," + rover.y);

  switch(rover.direction){

    case "N":
      if(rover.y === 0){
        console.log("South boundarie reached! Rover will not move and stays in (" + rover.x + "," +rover.y + ") position.");
      }
      else if(!checkOsbtacles(obstacles,rover.x,rover.y-1)){
        rover.y -=1;
      }
      else{
        obstacleFree = false;
      }
      break;

    case "E":
      if(rover.x === 0){
        console.log("West boundarie reached! Rover will not move and stays in (" + rover.x + "," +rover.y + ") position.");
      }
      else if(!checkOsbtacles(obstacles,rover.x-1,rover.y)){
        rover.x -=1;
      }
      else{
        obstacleFree = false;
      }
      break;

    case "S":
      if(rover.y === 9){
        console.log("North boundarie reached! Rover will not move and stays in (" + rover.x + "," +rover.y + ") position.");
      }
      else if(!checkOsbtacles(obstacles,rover.x,rover.y+1)){
        rover.y +=1;
      }
      else{
        obstacleFree = false;
      }
      break;

    case "W":
      if(rover.x === 9){
        console.log("East boundarie reached! Rover will not move and stays in (" + rover.x + "," +rover.y + ") position.");
      }
      else if(!checkOsbtacles(obstacles,rover.x+1,rover.y)){
        rover.x +=1;
      }
      else{
        obstacleFree = false;
      }
      break;
  }

 return obstacleFree;

}





function execute(commands){

  console.log("Executing orders: " + commands);

  for (i = 0; i < commands.length ; i++){
    
    switch(commands[i]){

      case "f":
        if(!moveForward(rover)){  //if rover can't move, force the "for" condition to end the iteration
          i = commands.length;
        }
        break;
      case "b":
        if(!moveBackward(rover)){ //if rover can't move, force the "for" condition to end the iteration
          i = commands.length;
        }
        break;
      case "l":
        turnLeft(rover);
        break;
      case "r":
        turnRight(rover);
        break;
    }
  }
}

function printMoves(rover){

  for (var i = 0 ; i < rover.travelLog.length ; i++){
    console.log("COORDINATES " + i +": " + rover.travelLog[i]);
  }
}

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



function checkOsbtacles(obstacles, x, y){

  var ok = false;

  if (obstacles[x][y]==="X"){
    ok = true;
    console.log("Obstacle Found in position (" + x + "," + y + ")");
  }

  return ok;
}

var orders = "ffrffrfflfff";

if (validateOrders(orders) === true){ //If there is not an error in the order line
  execute(orders);
  printMoves(rover);
}
else {
  console.log("Execution cancelled");
}