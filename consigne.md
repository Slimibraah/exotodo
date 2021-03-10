# Mini ToDo List

### Exercice 1. 
- Quand on clique sur le "span supprimer" cela supprime son li, utilise les boucles et les event.target

### Exercice 2.
- Au clique d'un des carrés red ou blue, le texte du li devient red ou blue
- Quand on clique sur l'un des deux spans, celui sur le quel on clique disparais et un autre span "annulé" apparait, l'autre couleur disparait également.
    - Exemple : J'ai au départ red et blue, si je clique sur blue :
        - blue et red disparaissent
        - annulé apparait

### Exercice 3.
- Quand on clique sur l'un des deux liens "Page 1" ou "Page 2" , il devient en surbrillange pour montrer qu'on est sur cette page, il permet de faire apparaitre le paragraphe.
    - Page 1 fait apparait premierePara se met en surbrillance
    - Page 2 fait apparait secondePara se met en surbrillance
    - Si l'un est en surbrillance l'autre ne l'est pas ou ne l'est plus.

### Exercice 4
- Récupere l'element html input et affiche le via un console.log
- Affiche l'innerText de l'input via un console.log
- Verifie avec une condition si l'innerText est vide, si oui, tu répond via une alert de remplir la zone texte
- dans une fonction "addTask", utilise plusieurs méthodes pour créer la zone texte récuperer en "li" et le rendre enfant à "ul#list"
- Une fois la fonction fonctionnel, récuperer l'element button et affiche le via un console.log
- Rajoute à ce button un addEventListener de click, et fais lui passer en deuxieme parametre la fonction "addTask"
- Bonus, au clique du button "clearList", toutes tes taches se supprime

### Exercice 5
- récuperer les buttons et affiche les dans un console.log
- 1 er étape : 
    - utilise les boucles et events.target (comme pour l'exo1)
    - au clique des buttons la valeur du "span" se change en "tache éditée"
- 2 eme étape :
    - au clique des buttons, tu donne la possibilité de changer la valeur de l'input via un nouvelle input vide
    - a ce nouveau input qui se rajoute, donne lui un attribut "placeholder" avec comme valeur "nouvelle valeur?"
- 3 eme étape : 
    - tu refais la procédé de l'étape 2
    - au rajout du new input, un button 'valider' se rajoute a coté du button 'edit'
    - au clique de ce button, la nouvelle tache se valide et s'enregistre 
    - bonus : via une event.key "Enter", la tâche se valide également 

