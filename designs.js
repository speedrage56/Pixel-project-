// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

const height = document.querySelector('#inputHeight');
const width = document.querySelector('#inputWeight');
const form = document.querySelector('#sizePicker');
const tableGenerate = document.querySelector('#pixelCanvas');
const color = document.querySelector('#colorPicker');

function makeGrid() {

// Your code goes here!
tableGenerate.innerHTML = " ";

const fragment = document.createDocumentFragment();
for(i=0;i<height.value;i++){
  const row = document.createElement('tr');
  fragment.appendChild(row);
  for(j=0;j<width.value;j++){
    const col = document.createElement('td');
    row.appendChild(col);
  }
}
tableGenerate.appendChild(fragment);
}


form.addEventListener("submit", function(e){
  e.preventDefault();
  makeGrid()
})

tableGenerate.addEventListener("click", function(e){
  if (e.target.nodeName === 'TD'){
    e.target.style.backgroundColor = color.value;
  }
});
