function addNewskills(){
    // console.log("Adding new field");
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("skillsField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("placeholder" , "Enter Here");
    
    let skillsOb = document.getElementById("skills");
    let skillsAddBtnOb = document.getElementById("skillsAddBtn");
   
    skillsOb.insertBefore(newNode, skillsAddBtnOb);
    
}


function addNewEducation(){
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("educationField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("placeholder" , "Enter Here");

    let educationOb = document.getElementById("education");
    let educationAddBtnOb = document.getElementById("educationAddBtn");

    educationOb.insertBefore(newNode , educationAddBtnOb);    

}

/*function addNewProject(){
    let newNode1 = document.createElement("input");
    let newNode2 = document.createElement("textarea");

    newNode1.classList.add("form-control");
    newNode1.classList.add("projectTitle");
    newNode1.classList.add("mt-4");
    newNode1.setAttribute("placeholder" , "Enter Here");

    newNode2.classList.add("form-control");
    newNode2.classList.add("projectDesc");
    newNode2.classList.add("mt-4");
    newNode2.setAttribute("placeholder" , "Enter Here");
    

    let projectOb = document.getElementById("project");
    let projectAddBtnOb = document.getElementById("projectAddBtn");
    // projectOb.insertBefore(newNode , projectAddBtnOb);

    projectOb.appendChild(newNode1); 

    projectOb.appendChild(newNode2);

    projectOb.appendChild(projectAddBtnOb);
}
    */

function addNewProject(){
    let newNode = document.createElement("textarea");

    newNode.classList.add("form-control");
    newNode.classList.add("projectField");
    newNode.classList.add("mt-4");
    newNode.setAttribute("placeholder" , "Enter Here");
    newNode.setAttribute("rows" , "3");

    let projectOb = document.getElementById("project");
    let projectAddBtnOb = document.getElementById("projectAddBtn");
    projectOb.insertBefore(newNode , projectAddBtnOb);

}



function addNewIntrest(){
    let newNode = document.createElement("input");
    newNode.classList.add("form-control");
    newNode.classList.add("intrestField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("placeholder" , "Enter Here");

    let intrestOb = document.getElementById("intrest");
    let intrestAddBtnOb = document.getElementById("intrestAddBtn");

    intrestOb.insertBefore(newNode , intrestAddBtnOb);    

}

function generateCV(){
    let nameField = document.getElementById("nameField").value;
    let namet1 = document.getElementById("namet1");
    // let namet2 = document.getElementById("namet2");

    namet1.innerHTML = nameField;
    document.getElementById("namet2").innerHTML = nameField;

    let addressField = document.getElementById("addressField").value;
    let addresst = document.getElementById("addresst");
    addresst.innerHTML = addressField;

    let contactField = document.getElementById("contactField").value;
    let contactt = document.getElementById("contactt");
    contactt.innerHTML = contactField;

    let emailField = document.getElementById("emailField").value;
    let emailt = document.getElementById("emailt");
    emailt.innerHTML = emailField;

    let linkedinField = document.getElementById("linkedinField").value;
    let linkedint = document.getElementById("linkedint");
    linkedint.innerHTML = linkedinField;

    let githubField = document.getElementById("githubField").value;
    let githubt = document.getElementById("githubt");
    githubt.innerHTML = githubField;

    // Skills

    let skills = document.getElementsByClassName("skillsField");
    var str="";
    for(let i of skills){
        str = str + `<li> ${i.value} </li>`;
    }
    document.getElementById("skillst").innerHTML = str;

    //objective

    let objectiveField = document.getElementById("objectiveField").value;
    let objectivet = document.getElementById("objectivet");
    objectivet.innerHTML = objectiveField;

    //education

    let education = document.getElementsByClassName("educationField");
    var str="";
    for(let i of education){
        str = str + `<li> ${i.value} </li>`;
    }
    document.getElementById("educationt").innerHTML = str;

    // Projects

    /*let projectTitle = document.getElementsByClassName("projectTitle");
    let projectDesc = document.getElementsByClassName("projectDesc");
    var str1="";
    for(let i of projectTitle){
        str1 = str1 + `<li> ${i.value} </li>`;  
    }
    document.getElementById("projectt").getElementsByTagName("li").innerText = str1;
      
    var str2="";
    for(let j of projectDesc){
         str2 = str2 + `<p> ${j.value} </p>`;
    }

    document.getElementById("projectt").getElementsByTagName("p").innerText = str2;

    console.log(document.getElementById("projectt").getElementsByTagName("p").innerHTML);
    */


    let project = document.getElementsByClassName("projectField");
     var str="";
     for(let i of project){
         str = str + `<li> ${i.value} </li>`;
     }
     document.getElementById("projectt").innerHTML = str;


    //intrests

    let intrest = document.getElementsByClassName("intrestField");
    var str="";
    for(let i of intrest){
        str = str + `<li> ${i.value} </li>`;
    }
    document.getElementById("intrestt").innerHTML = str;

    //code for setting image

    let file = document.getElementById("imgField").files[0];
    console.log(file);
    let reader = new FileReader();
    reader.readAsDataURL(file);
    console.log(reader.result);

    reader.onloadend = function() {
        document.getElementById("imgt").src = reader.result;
    };

    

    document.getElementById("cv-form").style.display = "none"
    document.getElementById("cv-template").style.display = "block"


} 

// printCV

function printCV(){
    window.print();
}