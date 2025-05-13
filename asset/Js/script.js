// document.write reste une fonction obsolére du JS
document.write("<h2>Je suis du JS externe.</h2>");
//commentaire monoligne
/*comentaire 1
commentaire 2*/
//------------------------------------les variables ------------------------------------//
document.write("<h2>Les variables</h2>");
let prenom; //déclaration de la variable prenom avec let
var nom; //déclaration de la variable prenom avec var
prenom = "Ludovic"; //affectation ou assignation
nom = "Dupont";//affectation ou assignation
document.write("Bonjour ",prenom," ",nom," bienvenue sur JS.");
let a, b, c, d;
a = 130;
b = "coucou";
c = true;
document.write("<br>La valeur de a : ",a," "," son type :", typeof(a));
document.write("<br>La valeur de b : ",b," "," son type :", typeof(b));
document.write("<br>La valeur de c : ",c," "," son type :", typeof(c));
document.write("<br>La valeur de d : ",d," "," son type :", typeof(d));

//------------------------------------les constantes ------------------------------------//
document.write("<h2>Les constantes</h2>");
const drapeauFrance = "Bleu Blanc Rouge";
document.write("la constante drapeu de la france :", drapeauFrance, "<br>");
//librairie
document.write("la constante drapeu de PI :", Math.PI, "<br>");
document.write("la constante drapeu de Epsilon :", Math.E, "<br>");

//------------------------------------nbr aléatoire ------------------------------------//
let nbr = Math.random();//nbr alétoire entre 0 et 1
let nbr2 = Math.random()*100;//nbr alétoire entre 0 et 100
document.write("Nombre aléatoire :", nbr, "<br>");
document.write("Nombre aléatoire :", nbr2, "<br>");
//les fonctions pour arrondir
document.write("Nombre aléatoire :", Math.ceil(nbr), "<br>");//arrondi sup
document.write("Nombre aléatoire :", Math.floor(nbr2), "<br>");//arrondi inf

//------------------------------------les instructions lire et écrire ------------------------------------//
// document.write("<h2>les instructions lire et écrire</h2>");
// let prenom2 = prompt("Entrez votre prenom");//récupérer la saisie de l'user
// let nom2 = prompt("Entrez votre nom");//récupérer la saisie de l'user
// confirm("confirmez votre prénom" + prenom2);//récupérer une confirmation
// alert("Bonjour " + prenom2 + " " + nom2);//envoye un message de pop-up
// document.write("Bonjour ", prenom2, " ", nom2, "<br>");//ecrire dans le html
// console.log("Bonjour" + prenom2 + " " + nom2);//ecrire sur la console

//------------------------------------les opératuers ------------------------------------//
document.write("<h2>Les opérateurs</h2>");
let nbr1,nbr3;
nbr1=20;
nbr3=10;
document.write(nbr1," + ",nbr3," = ", nbr1 + nbr3, "<br>");
document.write(nbr1," - ",nbr3," = ", nbr1 - nbr3, "<br>");
document.write(nbr1," * ",nbr3," = ", nbr1 * nbr3, "<br>");
document.write(nbr1," / ",nbr3," = ", nbr1 / nbr3, "<br>");
document.write(nbr1," % ",nbr3," = ", nbr1 % nbr3, "<br>");
document.write(nbr1," ^ ",nbr3," = ", nbr1 ** nbr3, "<br>");
nbr1++;
document.write(nbr1," incrémentation ", "<br>");
nbr3--;
document.write(nbr3," décrémentation ", "<br>");
