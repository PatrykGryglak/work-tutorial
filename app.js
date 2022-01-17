
const navbar = document.querySelector('.navbar');
const searchButton = document.querySelector('.search-button');
const searchInput = document.querySelector('input');
const searchBarCap = document.querySelector('.search-bar-cap');
const resultContainer = document.querySelector('.results-container');
const mainPage = document.querySelector('.start-page');
const header = document.querySelector('.title-header');
const navbarUl = document.querySelector('.navbar-ul');

// SEARCH BAR

function search(){
    

    function clearCapBar(){
        searchInput.addEventListener('focusout', function(){
        searchBarCap.innerHTML = '';
        });
    }
    function blurBgIn(){
        header.style.filter= 'blur(0.2rem)';
        navbar.style.filter= 'blur(0.1rem)';
        header.style.transition = '0.3s ease';
        navbar.style.transition = '0.3s ease';
    };
    function blurBgOut(){
        header.style.filter = 'blur(0)';
        navbar.style.filter= 'blur(0)';
        header.style.transition = '0.3s ease';
        navbar.style.transition = '0.3s ease';
    };
    function blurOnFocus(){
        searchInput.addEventListener('focusin', function(){
        blurBgIn();
        mainPage.addEventListener('focusout', function(){
            blurBgOut();
            
            })
        })
    }


    blurOnFocus();

    searchButton.addEventListener('click', function(){
        let searchValue = searchInput.value.toLowerCase();
        resultContainer.innerHTML='';
        if(!searchValue){
            searchBarCap.innerText = 'Pole nie moze byc puste';
            clearCapBar();
        }else{
            let resultsPlace = [];
            for(let wordInData in data){

                for(let word in data[wordInData]){
                    let allData = data[wordInData][word].toLowerCase();
                    //Moze warto wrzucic w tablice
                     allData = allData.split(".").join("");
                     allData = allData.split("-").join(" ");
                     allData = allData.split(",").join("");
                     allData = allData.split(":").join("");
                     allData = allData.split("'").join("");
                    let resultArr = allData.split(' ');
                    
                    if(resultArr.includes(searchValue)){
                        resultsPlace.push(resultArr);
                        let index = resultArr.indexOf(searchValue);
                        const li = document.createElement('li');
                        const p = document.createElement('p');
                        const i = document.createElement('i');
                        const a = document.createElement('a');
                        i.classList.add('fas', 'fa-arrow-right');
                        li.append(p, i, a);
                        resultContainer.append(li);
                        //moze warto zrobic petle
                        let wordsBeforeNum = index-3;
                        if(wordsBeforeNum === -3){
                            num = 0;
                        }else if(wordsBeforeNum === -2){
                            num = 1;
                        }else if(wordsBeforeNum === -1){
                            num = 2;
                        }else{
                            num = 3;
                        }
                        const readyArr = resultArr.slice(index-num, index+6).join(" ");
                        p.innerText = `... ${readyArr}...`;
                        
                        a.innerText = "skocz do informacji";
                        a.addEventListener('click', function(){
                            const searchPopUp = document.createElement('div');
                            const searchPopUpExit = document.createElement('i');
                            searchPopUp.classList.add('pop-up');
                            searchPopUpExit.classList.add('fas', 'fa-times-circle');
                            searchPopUp.innerHTML = "<h2>"+`${word}`+"</h2>"+"<p>"+`${allData}`+"</p>";
                            mainPage.append(searchPopUp);
                            searchPopUp.append(searchPopUpExit);
                            mainPage.style['pointer-events'] = 'none';
                            searchPopUp.style['pointer-events'] = 'auto';
                            navbarUl.style['pointer-events'] = 'none';
                            blurBgIn();
                            searchPopUp.addEventListener('click', function(){
                                searchPopUp.remove();
                                blurBgOut();
                                navbarUl.style['pointer-events'] = 'auto'
                                mainPage.style['pointer-events'] = 'auto'
                            })
                            document.addEventListener('keydown', function(event){
                                if(event.key === 'Escape'){
                                    searchPopUp.remove();
                                    blurBgOut();
                                    navbarUl.style['filter'] = 'blur(0)';
                                    navbarUl.style['pointer-events'] = 'auto';
                                    mainPage.style['pointer-events'] = 'auto'
                                }
                            })
                        })
                        
                    }
                }
            }
            if(resultsPlace.length === 0){
                searchBarCap.innerText = 'brak wynikow unfortunately';
                clearCapBar();
            }else{  
                searchBarCap.innerText = '';
            }
            
        }


    });

    document.addEventListener('keydown', function(event){
        if(event.key === 'Enter'){
            searchButton.click();
        };
    })

};
search();

// NAVBAR AND CONTENT TABS

function mainNavbar(){
    for(let subtitle in data){
        const newLi = document.createElement('li');
        newLi.innerText = subtitle;
        navbarUl.append(newLi);
        newLi.classList.add('navbar-li');
        const navbarLi = document.querySelectorAll('.navbar-li');
        navbarLi.forEach(function(elem){
            elem.addEventListener('click', function(){
                if(elem.innerText == subtitle){
                    console.log(subtitle);
                    navbarUl.style['filter'] = 'blur(0.2rem)';
                    navbarUl.style.transition = '0.7s ease'
                    navbarUl.style['pointer-events'] = 'none';
                    const popUp = document.createElement('div');
                    const popExit = document.createElement('i');
                    const popH = document.createElement('h2');
                    popUp.classList.add('pop-up');
                    popExit.classList.add('fas', 'fa-times-circle');
                    popH.innerText = subtitle;
                    mainPage.append(popUp);
                    popUp.append(popExit);
                    popUp.append(popH);
                    popExit.addEventListener('click', function(){
                        popUp.remove();
                        navbarUl.style['filter'] = 'blur(0)';
                        navbarUl.style['pointer-events'] = 'auto';
                    })
                    document.addEventListener('keydown', function(event){
                        if(event.key === 'Escape'){
                            popUp.remove();
                            navbarUl.style['filter'] = 'blur(0)';
                            navbarUl.style['pointer-events'] = 'auto';
                        }
                    })
                    for(let thread in data[subtitle]){
                        const subtitleThread = document.createElement('div');
                        subtitleThread.classList.add('task');
                        subtitleThread.innerHTML = thread;
                        popUp.append(subtitleThread);
                        subtitleThread.addEventListener('click', function(){
                            if(subtitleThread.innerText == thread){    
                                const desc = data[subtitle][thread];
                                const popUpCover = document.createElement('div');
                                const backArrow = document.createElement('i');
                                popUpCover.classList.add('popup-cover');
                                backArrow.classList.add('fas', 'fa-chevron-left');
                                popUpCover.innerHTML = "<h2>"+`${thread}`+"</h2>"+"<p>"+`${desc}`+"</p>";
                                popUp.append(popUpCover);
                                popUpCover.append(backArrow);
                                backArrow.addEventListener('click', function(){
                                    console.log('click');
                                    popUpCover.remove();                 
                                });
                            }
                        });
                    
                    }
                }
            })
        })
    }



}
mainNavbar();
