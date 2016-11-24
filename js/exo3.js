function changeText() {

    var mot = prompt("Saisissez un mot");
    if (mot == "") {
        document.getElementById("myDiv").innerHTML = "Ce n'est pas un mot !";
        return;
    }else if(!isNaN(mot)){
      document.getElementById("myDiv").innerHTML = "Ceci est un nombre!";
      return;
    }



    var myDiv = document.getElementById("myDiv");
    var i = 0;

    for (i = 0; i < 3; i++) {
        myDiv.innerHTML += "<p>" + mot + "</br></p>";
    }

    var child = myDiv.childNodes;
    child[0].style.fontWeight = "bold";
    child[0].style.color = "#6495ED";
    child[1].style.textTransform = "lowercase";
    child[2].style.textTransform = "uppercase";


    var voyelle = 0;
    var consonne = 0;

    for (var j = 0; j < mot.length; j++) {
        var machin = mot[j].toLowerCase();
        if (machin == "a" || machin == "e" || machin == "i" || machin == "o" || machin == "u" || machin == "y") {
            voyelle++;
        } else {
            consonne++;
        }
    }

    myDiv.innerHTML += "<p>nombre de voyelles = " + voyelle + "</p>";
    myDiv.innerHTML += "<p>nombre de consonnes = " + consonne + "</p>";

    var change = mot.split("").reverse().join("");
    myDiv.innerHTML += "</p>" + change + "</p>";

    if (mot.toLowerCase() == change.toLowerCase()) {
        myDiv.innerHTML += "<p>" + "C'est un palindrome" + "</p>";
    } else {
        myDiv.innerHTML += "<p>" + "Ceci n'est pas un palindrome" + "</p>";
    }

    var repert = document.getElementById("repert");
    repert.innerHTML += mot + "</br>";

}
changeText();


document.onkeypress = function(e) {
    if (e.keyCode == "13") {
        reset();
    }
}

function reset() {
    document.getElementById("myDiv").innerHTML = "";
    changeText();
}
