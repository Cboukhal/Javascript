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
document.write("<h3>Les constantes</h3>");
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
// document.write("<h3>les instructions lire et écrire</h3>");
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

document.write("<h3>Les opérateurs affectation</h3>");
document.write("les valeurs d'entrée de nbr1 et nbr 3 :", nbr1," ", nbr3, "<br>");
nbr1+=nbr3;//nbr1 = nbr1 + nbr3
document.write("la nouvelle valeur de nbr1 :", nbr1, "<br>");
nbr1-=nbr3;//nbr1 = nbr1 - nbr3
document.write("la nouvelle valeur de nbr1 :", nbr1, "<br>");
nbr1*=nbr3;//nbr1 = nbr1 * nbr3
document.write("la nouvelle valeur de nbr1 :", nbr1, "<br>");
nbr1/=nbr3;//nbr1 = nbr1 / nbr3
document.write("la nouvelle valeur de nbr1 :", nbr1, "<br>");
nbr1%=nbr3;//nbr1 = nbr1 % nbr3
document.write("la nouvelle valeur de nbr1 :", nbr1, "<br>");
nbr1*=nbr3;//nbr1 = nbr1 * nbr3
document.write("la nouvelle valeur de nbr1 :", nbr1, "<br>");
document.write("les valeurs de sortie de nbr1 et nbr 3 :", nbr1," ", nbr3, "<br>");

document.write("<h3>Les opérateurs tertiare</h3>");
a=100;
b=20;
document.write("les valeurs d'entrée de a et b :", a," ", b, "<br>");
document.write((a>b)? a/b : b/a);

document.write("<h2>Les conversions</h2>");
a = 8;
b = "5.9";
c = 6.3;
document.write(a, " + ", b, " = ", a + b, "<br>");
document.write(a, " + Number ", b, " = ", a + Number(b),"<br>");
document.write(a, " + ParseFloat ", b, " = ", a + parseFloat(b),"<br>");
document.write(a, " + ParseInt ", b, " = ", a + parseInt(b),"<br>");
document.write(a, " + ", c, " = ", a + c,"<br>");
document.write(a, " + parseInt ", c, " = ", a + parseInt(c),"<br>");
document.write(a," : ", typeof(a), "<br>");
document.write(c," : ", typeof(c), "<br>");
c = String(c);
document.write(c," : ", typeof(c), "<br>");

//------------------------------------les chaines de caractéres ------------------------------------//

document.write("<h2>Les chaines de caractéres</h2>");
let chaine = "le JS est un langage cool.";
document.write(chaine, "<br>");
document.write(chaine.toLowerCase(), " (toLowerCase)", "<br>");
document.write(chaine.toUpperCase(), " (toUpperCase)","<br>");
document.write(chaine.strike(), " (strike)","<br>");
document.write(chaine.bold(), " (bold)","<br>");
document.write(chaine.small(), " (small)","<br>");
document.write(chaine.fontcolor("green"), " (fontcolor)","<br>");
document.write(chaine.fontsize("2em"), " (fontsize)","<br>");
document.write(chaine.length, " (length)","<br>");

//------------------------------------les conditions ------------------------------------//
document.write("<h2>Les conditions</h2>");
e = 300;
f = 200;
if (e > f) //condition simple
    document.write(e," supérieur à ",f,"<br>");
e = 100;
if (e > f) //condition alternative
    document.write(e," supérieur à ",f,"<br>");
 else
    document.write(e," inférieur à ",f,"<br>");
// if
// {}
// else
// {}
// let moyenne = prompt("Entrer votre moyenne");
// if(moyenne < 0)
//     alert("Moyenne impossible");
// else if (moyenne < 10)
//     alert("insuffisant");
// else if (moyenne < 12)
//     alert(moyenne+" passable");
// else if (moyenne < 16)
//     alert(moyenne+" bien");
// else if (moyenne < 18)
//     alert(moyenne+" excellent");
// else if (moyenne <= 20)
//     alert(moyenne+" FELICITATION");
// else
//     alert(moyenne + " tu triches");
// if{}
// else if{}
// else{}
// let civilite = prompt("Saisissez votre civilité Mr, MMme ...");
// civilite = civilite.toLowerCase();
// switch(civilite)
// {
//     case 'mr': 
//     alert("Bonjour Monsieur");
//                 break;
//     case 'mme': 
//     alert("Bonjour Madame");
//                 break;
//     case 'mlle': 
//     alert("Bonjour Mademoiselle");
//                 break;
//     default :
//         alert("Bonjour non-genré");
// }

//------------------------------------les boucles ------------------------------------//
document.write("<h2>Les boucles</h2>");

//------------------------------------les Exercices ------------------------------------//


document.write("<h2>Exercice</h2>");
// document.write("Ecrire un programme qui demande à l'user de sair son age et une confirmation de son age, envoie le message bienvenue si il a plus de 18ans ou accés refusé sinon et aurevoir s'il ne confirme pas son age","<br>");
// let age = prompt("Saisiser votre age");//récupérer la saisie de l'user
// let conf = confirm("Vous confirmez que vous avez bien " + age + " ans");
// (conf == true)?alert((age>=18)?"Bienvenue":"accès refusé"):alert("Aurevoir");
// document.write("Demander un programme qui demande a l'utilisateur de saisir un jour de la semaine et affiche par exemple: mardi est le 2 éme jour de la semaine.")
// let date = prompt("Saisisser une journée dans la semaine");
// jour = jour.toLowerCase();
// if(date == "lundi")
//     alert(date + " est le 1 er jour de la semaine.")
// else if(date == "mardi")
//     alert(date + " est le 2 éme jour de la semaine.")
// else if(date == "mercredi")
//     alert(date + " est le 3 éme jour de la semaine.")
// else if(date == "jeudi")
//     alert(date + " est le 4 éme jour de la semaine.")
// else if(date == "vendredi")
//     alert(date + " est le 5 éme jour de la semaine.")
// else if(date == "samedi")
//     alert(date + " est le 6 éme jour de la semaine.")
// else if(date == "dimanche")
//     alert(date + " est le 7 éme jour de la semaine.")
// else
//     alert(date + " n'est pas un jour dans la semaine.")
// document.write("Ecrire le même le programme pour les mois de l'année comme pour les jours de la semaine mais avec un switch case");
// let mois = prompt("Saisissez votre mois");
// alert(typeof(mois));
//     mois = mois.toLowerCase();
//     console.log(mois);
//     switch(mois)
//     {
//         case ('janvier'):
//             case '1':
//             alert("janvier est le 1er moi de l'année.");
//             break;
//         case ('février'):
//             case '2':
//             alert("février est le 1er moi de l'année.");
//             break;
//         case ('mars'):
//             case '3':
//             alert("mars est le 1er moi de l'année.");
//             break;
//         case ('avril'):
//             alert("avril est le 1er moi de l'année.");
//             break;
//         case ('mai'):
//             alert("mai est le 1er moi de l'année.");
//             break;
//         case ('juin'):
//             alert("juin est le 1er moi de l'année.");
//             break;
//         case ('juillet'):
//             alert("juillet est le 1er moi de l'année.");
//             break;
//         case ('aout'):
//             alert("aout est le 1er moi de l'année.");
//             break;
//         case ('septembre'):
//             alert("septembre est le 1er moi de l'année.");
//             break;
//         case ('octobre'):
//             alert("octobre est le 1er moi de l'année.");
//             break;
//         case ('novembre'):
//             alert("novembre est le 1er moi de l'année.");
//             break;
//         case ('décembre'):
//             alert("décembre est le 1er moi de l'année.");
//             break;
//         default :
//             alert(mois + " n'est un moi de l'année.");
// }