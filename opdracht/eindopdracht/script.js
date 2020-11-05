let naam = prompt("Wat is uw voor- en achternaam?");
let mail = prompt("Vul uw e-mail adres in:");
let leeftijd = prompt("Hoe jong bent u?");
let wonen = prompt("Ik ben woonachtig in:");

document.querySelector("#naam").innerHTML = naam;
document.querySelector("#mail").innerHTML = mail;
document.querySelector("#leeftijd").innerHTML = leeftijd;
document.querySelector("#wonen").innerHTML = wonen;

document.querySelector("#kopjenaam").innerHTML = "Hey," + " " + naam;

if(naam == "") {
    document.querySelector("#kopjenaam").innerHTML = "Hmm, je hebt geen naam ingevuld.";

}

if(leeftijd == "16") {
    document.querySelector(".bezoeker").style.backgroundColor = 'orange';
}

if(leeftijd == "17") {
    document.querySelector(".bezoeker").style.backgroundColor = 'blue';
}

if(leeftijd == "18") {
    document.querySelector(".bezoeker").style.backgroundColor = 'gold';
}

if(leeftijd == "19") {
    document.querySelector(".bezoeker").style.backgroundColor = 'green';
}

if(leeftijd == "") {
    document.querySelector(".bezoeker").style.backgroundColor = 'red';
}