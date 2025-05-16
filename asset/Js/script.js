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
document.write("<h3>for</h3>");

for(i = 0; i<10;i++)
{
    if(i == 6)
        break;
    document.write("i est égal au nombre de passage dans la boucle = ", i, "<br>");
}
document.write("<br>");
for(i = 10; i>=0;i--)
{
    if(i == 8 || i == 4)
        continue;
    document.write("i est égal au nombre de passage dans la boucle = ", i, "<br>");
}

document.write("<h3>for in</h3>");
let tab1 = ["Janat","Mathieu","Stanley","Armel","Anthony"];
for(let a in tab1)//parcour les indices du tableau
{
    document.write(tab1[a], "<br>");
}
document.write(a);

document.write("<h3>for of</h3>");
let tab2= new Array("Ludovic","Andrew","Anaïs","Tristan","Camil");
for(let b of tab2)//parcour les valeurs du tableau
{
    document.write(b, "<br>");
}
document.write(b);
document.write("<h3>forEach</h3>");
tab2.forEach((c, d)=>//methode de l'objet Array, prend les valeurs du tab en 1er parametre et indice en 2nd.
{
    document.write("indice : ",d," <b>Valeur</b> : ",c, "<br>");
});


document.write("<h3>while</h3>");
let n = 0;
while (n<=10) {
    document.write("Je suis le passager numéro ", n, "<br>");
    n++;
}

document.write("<h3>do while</h3>");
n = 0;
do{
    document.write("Je suis le passager numéro ", n, "<br>");
    n++;
}while(n<=10);

do{
    document.write("Je suis le passager en trop ", n, "<br>");
    n++;
}while(n<=10);

//------------------------------------les Tableaux ------------------------------------//
document.write("<h2>Tableaux</h2>");
//Déclarer de tableau.
// let tab1= [];
// let tab2= new Array();//nouvelle instance de la class Array

//parcourir un tab

for(i = 0;i < tab1.length; i++)
{
    document.write("indice : ",i," <b>Valeur</b> : ",tab1[i], "<br>");
}
document.write("<br>");
for(i = 0;i < tab2.length; i++)
{
    document.write("indice : ",i," <b>Valeur</b> : ",tab2[i], "<br>");
}
document.write("<h3>copier le tableau 2 dans le tableau 1</h3>");
//copier le tableau 2 dans le tableau 1

for(let a of tab2)
{
    let j = tab1.length;
    tab1[j]=a;
}
tab1.forEach((c, d)=>//methode de l'objet Array, prend les valeurs du tab en 1er parametre et indice en 2nd.
{
    document.write("indice : ",d," <b>Valeur</b> : ",c, "<br>");
});

//modifier le tableau 2 dans le tableau 1
document.write("<h3>modifier le tableau 2 dans le tableau 1</h3>");
tab1[3] = "Julien";
tab1[8] = "Gracia";
tab1.forEach((c, d)=>//methode de l'objet Array, prend les valeurs du tab en 1er parametre et indice en 2nd.
{
    document.write("indice : ",d," <b>Valeur</b> : ",c, "<br>");
});
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
document.write("afficher les 100 premiers nombre premier","<br>");
for(i = 2; i<=100;i++){
    for(j=2;j<=i;j++)
    {
        if(i%j == 0 )
            break;
    }
    if (j == i)
       document.write(i," est un nombre premier", "<br>");
}

// document.write("Réaliser un programme du jeu du juste prix de 0 à 100","<br>");
// n = Math.ceil(Math.random()*100);
// essaye = 0
// let prix = prompt("Entrer votre prix");
// while (prix != n)
// {
//     if(prix > n){
//         alert("Le prix est plus bas");
//         essaye++;
//     }
//     else {
//         alert("Le prix est plus haut");
//         essaye++;
//     }
//     if(essaye == 3)
//     {
//         alert("Je vais t'aider");
//         if (n < 50)
//             alert("Le prix est entre 0 et 49")
//         else
//             alert("Le prix est entre 50 et 100")
//     }
//     if(essaye == 6)
//     {
//         alert("tu es null");
//         break;
//     }
//     prix = prompt("Entrer un notre prix");
// }
// if (essaye == 6 )
//     alert("tu as échoué, vous n'avez rien gagné.");
// else
//     alert("bien joué vous avez gagné","<br>");

// jours = ["lundi","mardi","mercredi","jeudi","vendredi","samedi","dimanche"];
// mois = new Array("janvier","février","mars","avril","mai","juin","juillet","aout","septembre","octobre","novembre","décembre");
// document.write("Ecrire un programme à l'utilisateur de saisir un jour entre 1 et 7 et un moi entre 1 et 12 et affiche une date sous la forme lundi 15 janvier 2025,l'année et le jj peuvent rester fixe.","<br>")
// let jj = prompt("Saisisser un jours entre 1 et 7");
// // jj = jours[jj-1];
// // jours.forEach((c,d)=>
// // {
// //         if(d == jj)
// //             jj = c
// // });
// let mj = prompt("Saisser un mois entre 1 et 12");
// // mj = mois[mj-1];
// // for (let b in mois)
// // {
// //     if (b == mj)
// //         mj = mois[b];
// // }
// document.write(jours[jj-1].toUpperCase() , " 15 " , mois[mj-1].toUpperCase()  , " 2025");
//chercher le max et le min du tab et les permuter
document.write("<br>");
let tab = [2, 18, 36, 15, 8, 9, 57, 13];
document.write(tab,"<br>");
let t = tab.length-1;
max = 0;
min = 100;
pmax = 0;
pmin = 0;

tab.forEach((c,b)=>
{
    if (max < c)
    {
        max = c;
        pmax = b;
    }
    if (min > c)
    {
        min = c;
        pmin = b;
    }
    if(b == t)
    {
        tab[pmax]=min;
        tab[pmin]=max;
    }
}
)
document.write(tab,"<br>");

//Exo 3 qui demande à l'user de saisir la taille tableau d'entier, ensuite les valeur, puis affiche le tableau ensuite fais la somme des valeurs et l'affiche ainsi que ça moyenne et l'affiche et fini par mettre toutes les notes endessous de la moyenne
// let taille = prompt("donner la taille du tableau");
// tab = [];
// somme=0;
// for(i=0;i<taille;i++)
//     {
//         tab[i]=prompt("donner une valeur à l'éléve numéro " + i);
//         somme = somme + parseInt(tab[i]);
//     }
// document.write(tab,"<br>");
// document.write("la somme de toute les valeurs est de ",somme,"<br>");
// document.write("la moyenne de toute les valeurs est de ",somme/taille,"<br>");
// for(i=0;i<taille;i++)
//     {
//         if(tab[i] < somme/taille)
//             tab[i] = "ajournée";
//     }
// document.write(tab);

//exo4:Ecrire un programme qui calcule
//Le nombre de chiffre pair dans le tableau et son pourcentage
//Le nombre de chiffre parfait dans le tableau et son pourcentage
//Le nombre de chiffre premier dans le tableau et son pourcentage
//pair 50%
//parfait 2/12
//premier 50%
document.write("<br>");
let tab4 = [2, 3, 8, 7, 12, 15, 28, 30, 17, 13, 6, 19];
let premier = 0;
let parfait = 0;
let pair = 0;
let v = true;
j = 0;
for(let a of tab4){
    if (a%2 == 0)
        pair++;
    for(i = 2; i<a;i++){
        if(a%i == 0)
            v = false;
    }
    if(v == true)
    {
        premier++;
        document.write("non",a,"<br>");
    }
    v =true;
    for(i = 1; i<a;i++){
        if(a%i == 0)
            j = j + i;
    }
    if(j==a)
        parfait++;
    j = 0;        
}
document.write("<br>");
document.write(tab4,"<br>");
document.write("Le nombre de chiffre premier est de",premier," le pourcentage est de ",premier/tab4.length*100,"%","<br>");
document.write("Le nombre de chiffre parfait est de ",parfait," le pourcentage est de ",parfait/tab4.length*100,"%","<br>");
document.write("Le nombre de chiffre pair est de ",pair," le pourcentage est de ",pair/tab4.length*100,"%","<br>");