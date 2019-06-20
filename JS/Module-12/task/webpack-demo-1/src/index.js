import "./style.css";

const   
    urlInput = document.querySelector('.url-input'),
    urlAddBtn = document.querySelector('.url-add-btn'),
    urlRemoveAllBtn = document.querySelector('.url-remove-all-btn'),
    urlList = document.querySelector('.url-list'),
    urlCard = document.querySelector('#url-card').innerHTML.trim(),
    template = Handlebars.compile(urlCard);
    
let urlArr = JSON.parse(localStorage.getItem("urlArr"));

let result = template(urlArr);
urlList.innerHTML = result;

if(urlArr == null){
    urlArr = [];
    localStorage.setItem("urlArr", JSON.stringify(urlArr));
}

urlAddBtn.addEventListener('click', urlAddFn)
urlRemoveAllBtn.addEventListener('click', urlRemoveAllFn)

function urlAddFn(evt){
    evt.preventDefault();
    addFn(urlInput.value);
    urlInput.value = '';
}

function addFn (url) {
    urlArr.unshift({url: url});
    result = template(urlArr);
    urlList.innerHTML = result;

    localStorage.setItem("urlArr", JSON.stringify(urlArr));
}

urlList.addEventListener('click', removeFn);

function removeFn (event) {
    const target = event.target;
    if(target.nodeName == 'BUTTON'){
        let arrEl = urlArr.find(el => el.url == target.previousElementSibling.textContent);
        let index = urlArr.indexOf(arrEl);
        if (index !== -1) urlArr.splice(index, 1);

        result = template(urlArr);
        urlList.innerHTML = result;
        localStorage.setItem("urlArr", JSON.stringify(urlArr));
    }
}

function urlRemoveAllFn (evt) {
    evt.preventDefault();
    localStorage.removeItem("urlArr");
    urlArr = [];
    localStorage.setItem("urlArr", JSON.stringify(urlArr));
    result = template(urlArr);
    urlList.innerHTML = result;
}
