
const data = {
    'Check if yesterdays work is done' : "ladne slowo",
    'Check your email' : "sialalala",
    'Check your redmine account': "bleblebel",
    'Check devices to set up' : "sdasdas",
    'Your time to pick up phone' : "test",
    'Check if yesterdays work is donee' : "ladne slowo",
    'Check your emaill' : "sialalala",
    'Check your redmine accountt': "bleblebel",
    'Check devices to set upp' : "sdasdas",
    'Your time to pick up phonee' : "test"
}

function taskDivsCreating(){
    for (let task in data){
        taskDiv = document.createElement('div');
        taskDiv.classList.add('task');
        taskP = document.createElement('p');
        taskP.innerText = task;
        taskDiv.append(taskP);
        taskDivParent = document.querySelector('.main-page');
        taskDivParent.append(taskDiv);
        popUpCreation(taskDiv, task, data[task]);
    }
}

taskDivsCreating();

// Window with description pop up

function popUpCreation(element, title, description){
    element.addEventListener('click', function(){
        console.log('clicked');
        newDiv = document.createElement('div');
        newIcon = document.createElement('i');
        newP = document.createElement('p');
        newH = document.createElement('h3');
        newDiv.classList.add('pop-up');
        newIcon.classList.add('far', 'fa-times-circle');
        newH.innerText = title;
        newP.innerText = description;
        document.body.append(newDiv);
        newDiv.append(newIcon, newH, newP);
        newIcon.addEventListener('click', function (){
            newDiv.remove();
        })
    });
}






