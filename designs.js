

// When size is submitted by the user, call makeGrid()
const sizePicker = document.querySelector('.sizePicker');


function makeGrid() {
  let height = document.getElementById('inputHeight').value;
  let size = document.getElementById('inputWidth').value;
  let table =  document.getElementById('pixelCanvas')
  // If grid already present, clears any cells that have been filled in
  while (table.firstChild) {
    table.removeChild(table.firstChild);
    }
 updateHeightAndSize(height,size)
}

makeGrid(25, 25);


function updateHeightAndSize(height,size){
     // Creates rows and cells
  for (let i = 1; i <= height; i++) {
    let tableRow = document.createElement('tr');
    pixelCanvas.appendChild(tableRow);
    for (let j = 1; j <= size; j++) {
      let tableCell = document.createElement('td');
      tableRow.appendChild(tableCell);


      // Fills in cell with selected color upon mouse press ('mousedown', unlike 'click', doesn't also require release of mouse button)
      tableCell.addEventListener('mousedown', function() {
        const color = document.getElementById('colorPicker').value;
        this.style.backgroundColor = color;
      })
     }
  }
}


sizePicker && sizePicker.addEventListener('submit', function(e) {
  e.preventDefault();
  makeGrid();
});



