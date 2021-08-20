// Add Un order list to the nav bar:
const navbar = document.querySelector("nav button");
const ul = document.createElement("ul");
navbar.insertAdjacentElement("afterend",ul);

// Adding links:
const sectionsOfSection = document.querySelectorAll("section .task-list");

for (let section of sectionsOfSection){
  let link = document.createElement("li");
  ul.appendChild(link);
  link.outerHTML = `<li><a href = "#${section.id}" id = "b${section.id[1]}">${section.querySelector("h2").textContent}</a></li>`;
}
//Add click event to the nav-list class: This event will appear the .nav-side Element in phone query;
    // vars:
const navList = document.querySelector(".nav-list");
const navSide = document.querySelector(".nav-side");
    // f():
const navListAppear = function (){
  navSide.style.cssText = "display : flex";
}
    // Add event:
navList.addEventListener("click",navListAppear);


// Add click event to the nav-list class: This event will disappear the .nav-side Element in phone query;
    // Vars:
const closeButton = document.querySelector(".close-nav-list");
const body = document.querySelector("body");
    // f():
const navListHidden = function (){
    navSide.style.display = "none";
}
    // Add Event:
closeButton.addEventListener("click",navListHidden);


// Add a Click event to the (+) bottun to opent User-task-maker: Note: for Phones query.
    // vars:
const addListButton = document.querySelector(".add-task-list");
const filter = document.querySelector(".filter"); //It's the div wich contain the User-task-maker interface.

    // f():
const taskMakerVisibile = function (){
  filter.style.display = "flex";
}

    // Add Event:
addListButton.addEventListener("click",taskMakerVisibile);


// Add a Click event to the (+) bottun to opent User-task-maker: Note: for labtop & Tablets query.
    // vars:
const addListPhoneButton = document.querySelector(".add-task-list-phone");
    // Add Event:
addListPhoneButton.addEventListener("click",taskMakerVisibile);


// user-task-maker events: from this Interface user will be can create an list of tasks and close this interface:

    // Event Add List: It will create a list of tasks:
        // vars:
const addListOfTasks = document.querySelector(".add-list-of-tasks"); //this is a button: it will be add a list of tasks.
const addItemToList = document.querySelector(".add-item-to-list"); //this is a button: it will be add an item to taskItems list.

const inputTaskTitle = document.querySelector(".list-title");//this is input which user inter his list task title.
const inputTaskItem = document.querySelector(".a-task-item");//this is input which user inter his list task item.
let taskItems = [];//It's a list which contain the tas; list items that user input.

        // Add Event to the addItemToList:
            //f():
const addToList = function (){
  taskItems.push(inputTaskItem.value);
  addItemToList.textContent = `Add (${taskItems.length})`;
  inputTaskItem.value = "";
};
           // Add Event:
addItemToList.addEventListener("click",addToList);

    //Add Event to the addListOfTasks:
        // vars:
let listOfTitles = ["Study Tasks","Sport Tasks", "Reading Tasks", "To day Tasks"];
let idsSections = ["a1","a2","a3","a4"];
let idsLinks = ["b1","b2","b3","b4"];
      // f(): This function will return if the title of the task list is Correct or not:
const isCorrectTitle = function(){
  // const isUnAvailabletitle = listOfTitles.includes(inputTaskTitle.value);
  const alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const alphaArrey = alpha.split("");
  const taskTitleCharArr = inputTaskTitle.value.split("");
  let isHaveChar = null;
  // let isAccepted = null;
          //for loop: return if the task list title have a char or not.
  for (let char of taskTitleCharArr){
    if (alphaArrey.includes(char)){
      isHaveChar = true;
      break;
    }else{
      isHaveChar = false;
    }
  }
        // If cundtion: return if the task list title is accepted or not.
  if ((isHaveChar === true) && (inputTaskTitle.value !== "")){
    return true;
  }else if(isHaveChar === false){
    return "The title Should have a char";
  }else if(inputTaskTitle.value === ""){
    return "ERROR: The title is empty";
  }
  }


    // Add Event: This Event will creat the element.
      // Var:
const errorMas = document.createElement("div");
const errorMasStayle = "background-color: yellow; border-left: 3px black solid; color: red; width: 80%; padding: 3px; padding-left:0px; height:42px; display: flex; justify-content: center; align-items: center";

const createList = function(){
      // if condition: Ask if the inputs is correct or not, if it not correct the function will return an error massage else create the list of tasks:
      if (isCorrectTitle() !== true){
        inputTaskTitle.insertAdjacentElement('afterend',errorMas);
        errorMas.textContent = `${isCorrectTitle()}`;
        errorMas.style.cssText = errorMasStayle;

      }else if (taskItems.length === 0) {
        errorMas.textContent = "";
        inputTaskItem.insertAdjacentElement('afterend',errorMas);
        errorMas.textContent = "Your Task list should have 1 item at a minimum.";
        errorMas.style.cssText = errorMasStayle;

      }else if ((isCorrectTitle() === true) && (taskItems.length > 0)){
        errorMas.textContent = "";
        errorMas.style.cssText = "";

        let taskListDiv = document.createElement("div");
        const section = document.querySelector("section");
        let listTitle = inputTaskTitle.value;
        section.appendChild(taskListDiv);
        taskListDiv.className = "task-list";
        taskListDiv.outerHTML = `<div id = "a${listOfTitles.length + 1}" class = "task-list">
                                   <button class = "x closing">X</button>
                                   <h2>${listTitle}</h2>
                                 </div>`;


        const newSection = document.querySelector(`#a${listOfTitles.length + 1}`);
        let fakeDOM = document.createDocumentFragment();

        for (let item of taskItems){
          let divItem = document.createElement("div");
          divItem.className = "item";

          let checkBox = document.createElement("input");
          checkBox.setAttribute("type","checkbox");
          divItem.appendChild(checkBox);

          let label = document.createElement("label");
          label.textContent = `${item}`;
          divItem.appendChild(label);

          const deletItem = document.createElement("button");
          deletItem.className = "x";
          deletItem.textContent = "X";
          divItem.appendChild(deletItem);

          fakeDOM.appendChild(divItem);
        }

        newSection.appendChild(fakeDOM);
        // Add a link of the section to the navPar.
        const navPar = document.querySelector("ul");
        let link = document.createElement("li");
        navPar.appendChild(link);
        link.outerHTML = `<li><a href = "#a${listOfTitles.length + 1}" id = "b${listOfTitles.length + 1}">${listTitle}</a></li>`;
        idsSections.push(`a${listOfTitles.length + 1}`);
        idsLinks.push(`b${listOfTitles.length + 1}`);
        listOfTitles.push(listTitle);

        taskItems = [];

        addItemToList.textContent = "Add";
        inputTaskTitle.value = "";
        filter.style.display = "none";

        // This is note work: Any Advice??
        let viewPort = function() {var b  = taskListDiv.getBoundingClientRect();
                                 t = b.top;
                                 if (t <= 150 && t > - 450){
                                 taskListDiv.style.backgroundColor = "#00ffd78f";
                                 }else{
                                   taskListDiv.style.backgroundColor = "#00ddff4d";
                                 }};
       document.addEventListener("scroll",viewPort);
      }
    }
addListOfTasks.addEventListener("click",createList);

// Add close Event To close user list tasks maker without creating a list of tasks:
const closeTaskMaker = document.querySelector(".close-interface");

const closingFunction = function(){
  taskItems = [];

  addItemToList.textContent = "Add";
  inputTaskTitle.value = "";
  errorMas.textContent = "";
  errorMas.style.cssText = "";
  filter.style.display = "none";
};
closeTaskMaker.addEventListener("click",closingFunction);

// Add Event To 'a' Element To make a spetial design for the element which 'a' element related to.
const navPar = document.querySelector("ul");
const spetialStyle = function (e){
  if (e.target.nodeName === "A"){
  const idTargetLink = e.target.id;
  const indexColor = idsLinks.indexOf(idTargetLink);
  const elementTargetColor = document.querySelector(`#${idsSections[indexColor]}`).style.color;
  for (id of idsLinks){
    if (id === idTargetLink){
      const index = idsLinks.indexOf(id);
      const elementTarget = document.querySelector(`#${idsSections[index]}`);
      elementTarget.style.backgroundColor = "#00ddffd4";
      const aElement = document.querySelector(`#${id}`);
      aElement.style.backgroundColor = "black";
      aElement.style.color = "white";

    }else{
      const indexNotTarget = idsLinks.indexOf(id);
      const elementNotTarget = document.querySelector(`#${idsSections[indexNotTarget]}`);
      elementNotTarget.style.backgroundColor = `${elementTargetColor}`;
      const aElement = document.querySelector(`#${id}`);
      aElement.style.backgroundColor = "";
      aElement.style.color = "#707070";
    }
  }
}
};
 navPar.addEventListener('click',spetialStyle);


// add Event: this event will Remove an Item from list of tasks.
    //Vars:
const section = document.querySelector("section");
    // f():
const removeItem = function (e){
  if (e.target.nodeName === "BUTTON"){
    const listItem = e.target.parentElement;
    if ((listItem.nodeName === "DIV") && (listItem.className === "task-list") || (listItem.className === "task-list task-list-dark")){
      const idDiv = listItem.id;
      const indexid = idsSections.indexOf(idDiv);
      const linkRelated = document.querySelector(`#${idsLinks[indexid]}`);
      linkRelated.style.display = 'none';
    }
    listItem.style.display = "none";

  }
}
  // Add Event:
section.addEventListener("click",removeItem);


// Add Events :

// dark mood event: will change the web site from blue mode to dark mode.

const darkMoodButton = document.querySelector(".dark-mood");

// Create Elements:
const darkMoodIcon = document.querySelector(".fa-check");
const webTitle = document.querySelector(".web-logo h1");
webTitle.insertAdjacentElement("beforebegin",darkMoodIcon);

const changeMood = function(e){
    // Vars:
    const blueMoodButton = document.querySelector(".blue-mood");
    const header = document.querySelector("header");
    const webLogo = document.querySelector(".web-logo");
    const webIcon = document.querySelector("i");
    const webBody = document.querySelector(".web-body");
    const nav = document.querySelector("nav");
    const plusButton = document.querySelector(".nav-side button");
    darkMoodIcon.style.display = 'flex';
    // Change styles:
    blueMoodButton.style.borderWidth = "0px";
    darkMoodButton.style.border = "3px red solid";
    header.style.backgroundColor = "#D6D6D6";
    webLogo.style.backgroundColor = "#D6D6D6";
    webTitle.style.color = "#000000";
    webIcon.style.display = "none";
    section.style.backgroundColor = "#E2E2E2";
    // Change styling for all sections:
    for (id of idsSections){
      const sectionSelected = document.querySelector(`#${id}`);
      sectionSelected.classList.add("task-list-dark");

      const sectionSelectedH2 = document.querySelector(`#${id} h2`);
      sectionSelectedH2.style.color = "#FFFFDC";

      const sectionSelectedLabel = document.querySelectorAll(`#${id} label`);
      for (label of sectionSelectedLabel){
        label.style.color = "#FFFFFF";
      }
    }
    // Complate: Canging style:
    webBody.style.backgroundColor = "#E8E8E8";
    nav.style.backgroundColor = "#FFFBE4";
    plusButton.style.cssText = "background-color: #FFF9C7; color : #262928; border : 2px black solid";


};
darkMoodButton.addEventListener("click",changeMood);


// Add blue Mood Event:
const blueMoodButton = document.querySelector(".blue-mood");

const changeMoodb = function(e){
    // Vars:
    const darkMoodButton = document.querySelector(".dark-mood");
    const header = document.querySelector("header");
    const webLogo = document.querySelector(".web-logo");
    const webIcon = document.querySelector("i");
    const webBody = document.querySelector(".web-body");
    const nav = document.querySelector("nav");
    const plusButton = document.querySelector(".nav-side button");
    const darkMoodIcon0 = document.querySelector(".fa-check");
// fas fa-check
    // Change styles:
    darkMoodButton.style.borderWidth = "0px";
    blueMoodButton.style.border = "3px red solid";
    header.style.backgroundColor = "#95adef";
    webLogo.style.backgroundColor = "#95adef";
    webTitle.style.color = "#FFFFFF";
    webIcon.style.display = "flex";
    darkMoodIcon0.style.display = "none";
    section.style.backgroundColor = "#b695ef1c";
    // Change styling for all sections:
    for (id of idsSections){
      const sectionSelected = document.querySelector(`#${id}`);
      sectionSelected.classList.remove("task-list-dark");

      const sectionSelectedH2 = document.querySelector(`#${id} h2`);
      sectionSelectedH2.style.color = "#715EB1";

      const sectionSelectedLabel = document.querySelectorAll(`#${id} label`);
      for (label of sectionSelectedLabel){
        label.style.color = "#393939";
      }
    }
    // Complate: Canging style:
    webBody.style.backgroundColor = "";
    nav.style.backgroundColor = "#00ddff4d";
    plusButton.style.cssText = "background-color: #1F8AE7; color : #FFFFFF";


};
blueMoodButton.addEventListener("click",changeMoodb);

// Smothy sceroling attribute:
const html = document.querySelector("html");
html.style.scrollBehavior = "smooth";


// The Event will happen when the section being between top <= 100 && top >= -400:
for (let sect of sectionsOfSection) {
  let viewPort = function() {var b  = sect.getBoundingClientRect();
                            t = b.top;
                            if (t <= 150 && t > - 450){
                            sect.style.backgroundColor = "#00ffd78f";
                            }else{
                              sect.style.backgroundColor = "#00ddff4d";
                            }};
  document.addEventListener("scroll",viewPort);
}
