'use strict';
document.addEventListener("DOMContentLoaded", function() {
    var target = document.getElementById("change");
    target.addEventListener("click", function() {
        var addtext = "　言い換え"
        var text = document.getElementById('text').value;

        var url = "https://www.google.com/search?q=" + text + addtext;
        window.open(url, '_blank')
    })
})

document.addEventListener("DOMContentLoaded", function() {
    var target = document.getElementById("changeEX");
    target.addEventListener("click", function() {
        var addtext = "　言い換え 丁寧"
        var text = document.getElementById('text').value;

        var url = "https://www.google.com/search?q=" + text + addtext;
        window.open(url, '_blank')
    })
})