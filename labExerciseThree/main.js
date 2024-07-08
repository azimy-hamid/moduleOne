/* 
Below I have used two seperate functions to change the background color and the text content for each column, just like 
the lab exercise had mentioned. 

// ------------ DOCUMENTATION ------------
However, in the solution below this one I have make two functions each for a their different tasks, as in
backgroundColorChanger() for chaning the background and the other one for changing the content and then I have used 
the same 2 functions for both the columns. I thought it might be better but I'm not sure. 

I would love to have your feedback on it, sir. 


Thanks!
*/

// =========== Approach One ===========

const columnOne = () => {
  const columnOne = document.getElementById("column1");
  const headingOne = document.getElementById("heading1");
  const headingOneBtn = document.getElementById("heading1-btn");
  let columnOneText = document.getElementById("columnOneInput");

  headingOneBtn.addEventListener("click", () => {
    columnOne.style.backgroundColor = "red";
    headingOne.textContent = columnOneText.value;
  });
};

const columnTwo = () => {
  const columnTwo = document.getElementById("column2");
  const headingTwo = document.getElementById("heading2");
  const headingTwoBtn = document.getElementById("heading2-btn");
  let columnTwoText = document.getElementById("columnTwoInput");

  headingTwoBtn.addEventListener("click", () => {
    columnTwo.style.backgroundColor = "red";
    headingTwo.textContent = columnTwoText.value;
  });
};

columnOne();
columnTwo();

// =========== Approach Two ===========

/*
const backgroundColorChanger = (element) => {
    element.style.backgroundColor = "red";
}

const contentChanger = (element, text) => {
    element.textContent = text;
}

const columnOne = document.getElementById("column1");
const headingOne = document.getElementById("heading1");
const headingOneBtn = document.getElementById("heading1-btn");
let columnOneText = document.getElementById("columnOneInput");


const columnTwo = document.getElementById("column2");
const headingTwo = document.getElementById("heading2");
const headingTwoBtn = document.getElementById("heading2-btn");
let columnTwoText = document.getElementById("columnTwoInput");

headingOneBtn.addEventListener("click", () => {
    backgroundColorChanger(columnOne);
    contentChanger(headingOne, columnOneText.value);
})

headingTwoBtn.addEventListener("click", () => {
    backgroundColorChanger(columnTwo);
    contentChanger(headingTwo, columnTwoText.value);
}) 

*/
