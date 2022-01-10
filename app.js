
function backArrow(){
    headerDiv = document.querySelector('.header');
    backToMainPage = document.createElement('a');
    backToMainPage.href = "/./index.html";
    backToMainPage.title = "Back to main page";
    backIcon = document.createElement('i');
    backIcon.classList.add('fas','fa-chevron-left');
    backToMainPage.append(backIcon);
    headerDiv.append(backToMainPage);
};
backArrow();

function taskDivsCreating(){
    pageTitle = document.querySelector('title').innerText;
    console.log(pageTitle);
    for (let subPage in data){
        console.log(subPage);
        if(pageTitle === subPage){
            for (let task in data[subPage]){
                taskDiv = document.createElement('div');
                taskDiv.classList.add('task');
                taskP = document.createElement('p');
                taskP.innerText = task;
                taskDiv.append(taskP);
                taskDivParent = document.querySelector('.main-page');
                taskDivParent.append(taskDiv);
                popUpCreation(taskDiv, task, data[subPage][task]);
            }
        }
    }
};

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
        bgDarkUp = document.querySelector('.main-section');
        bgDarkUp.style['filter'] = 'blur(0.5rem)'
        bgDarkUp.style['pointer-events'] = 'none';
        newIcon.addEventListener('click', function (){
            newDiv.remove();
            bgDarkUp.style['filter'] = 'blur(0)'
            bgDarkUp.style['pointer-events'] = 'auto';            
        })
        document.addEventListener('keydown', function(event){
            if(event.key === 'Escape'){
                newDiv.remove()
                bgDarkUp.style['filter'] = 'blur(0)'
                bgDarkUp.style['pointer-events'] = 'auto';
            }
        })
    });
}






