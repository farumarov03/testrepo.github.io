var counter = 0;
var min = 1;
var max = 10;
var res;
var idx = 0;

function randomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function getRndVal() {
    min = document.getElementById("min").value;
    max = document.getElementById("max").value;
    console.log('min, max', min, max);
    
    let randomNumberValue = randomNumber(min, max);
    console.log('randomNumberValue', randomNumberValue);
    document.getElementById('number').innerHTML = randomNumberValue;
    var resultDiv = document.getElementById('number');
    resultDiv.classList.remove('big1');
    void resultDiv.offsetWidth;
    resultDiv.classList.add('big1');
    return document.getElementById('number').innerHTML;
}


function rightClick(fList) {
    console.log('ev', idx)
    const element = document.getElementById("btn");
    element.addEventListener('contextmenu', (event) => {
        if (idx > fList.length - 1) {
            idx = 0;
            document.getElementById('number').innerHTML = fList[0];
            idx += 1;
        }
        else{
            console.log('idx', idx);
            document.getElementById('number').innerHTML = fList[0 + idx];
            idx += 1
        }
        var resultDiv = document.getElementById('number');
        resultDiv.classList.remove('big1');
        void resultDiv.offsetWidth; 
        resultDiv.classList.add('big1');
        return document.getElementById('number').innerHTML;
    });
}

