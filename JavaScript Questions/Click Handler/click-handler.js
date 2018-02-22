// Open index.html in browser to test


(function addClickHandler() {
    let button = document.getElementById('btn')
    button.onclick = function () {
        this.classList.add('js-hide-display');
        setTimeout(function () {button.classList.remove('js-hide-display')}, 1000)
    }
})();
