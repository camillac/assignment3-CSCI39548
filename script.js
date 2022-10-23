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
    cell = row.insertCell(i);
    cell.onclick=function(){
      this.style.backgroundColor = colorSelected;
    };
  }

  numRows++;
}

// function changeColor(cell){
//   this.style.backgroundColor = colorSelected;
// }

// Add a column
function addC() {
  var grid = document.getElementById("grid");

  if (numRows == 0){
    numCols++;
    addR();
  }
  else {
    for (let i = 0; i < numRows; i++){
      cell = grid.rows[i].insertCell(numCols);
      cell.onclick=function(){
        this.style.backgroundColor = colorSelected;
      };
    }
    numCols++;
  }
}

// Remove a row
function removeR() {
  var grid = document.getElementById("grid"); // table reference

  if (numRows > 0){
    grid.deleteRow(numRows-1);
    numRows--;
  }

}

// Remove a column
function removeC() {
  var grid = document.getElementById("grid"); // table reference

  if (numCols > 0){
    for (let i = 0; i < numRows; i++){
      grid.rows[i].deleteCell(numCols-1);
    }
    numCols--;
  }
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
