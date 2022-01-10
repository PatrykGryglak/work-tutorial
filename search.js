// Search Bar


function search(){

    const searchButton = document.querySelector('.search-button');
    const searchInput = document.querySelector('input');
    const searchBarCap = document.querySelector('.search-bar-cap');

    searchButton.addEventListener('click', function(){
        let searchValue = searchInput.value.toLowerCase();

        if(!searchValue){
            searchBarCap.innerText = 'Pole nie moze byc puste!';
        }else{
            searchBarCap.innerText = '';
        }

        
        for(let wordInData in data){
            for(let word in data[wordInData]){
                // console.log('druga petla', word);
                let text = data[wordInData][word].toLowerCase();
                if(text.includes(searchValue)){
                    console.log('znalezione w text', text)
                }
            }

            // if(wordInData.includes(searchValue)){
            //     console.log('"',searchValue,'"', 'znalezione', wordInData);

            // }
            // else
            //     console.log('Brak w "data"');
        }


    })
};
search();

