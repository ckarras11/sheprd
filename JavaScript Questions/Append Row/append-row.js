// Open index.html in browser to test

(function appendRow() {
    document.getElementById('add').addEventListener('click', function() {
        let table = document.getElementById('tbl');
        let row = table.insertRow(-1)
        let cellCount = document.getElementsByTagName('tr')[0].childElementCount
        for(let i = 0; i < cellCount; i++) {
            row.insertCell(-1)
        }
    })
})();

