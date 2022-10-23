// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected;

// Add a row
function addR() {
  var grid = document.getElementById("grid");
  row = grid.insertRow(numRows);

  if (numCols == 0){
    numCols++;
  }

  for (let i = 0; i < numCols; i++) {
    row.insertCell(i);
  }

  numRows++;
}

// Add a column
function addC() {
  var grid = document.getElementById("grid");

  if (numRows == 0){
    addR();
  }
  else {
    for (let i = 0; i < numRows; i++){
      console.log("hello" + numRows);
      grid.rows[i].insertCell(numCols);
    }
    numCols++;
  }
}

// Remove a row
function removeR() {
    alert("Clicked Remove Row"); // Replace this line with your code.
}

// Remove a column
function removeC() {
    alert("Clicked Remove Col"); // Replace this line with your code.
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){
    alert("Clicked Fill All Uncolored"); // Replace this line with your code.
}

// Fill all cells
function fillAll(){
    alert("Clicked Fill All"); // Replace this line with your code.
}

// Clear all cells
function clearAll(){
    alert("Clicked Clear All"); // Replace this line with your code.
}
