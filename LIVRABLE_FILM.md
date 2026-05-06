# Fil Rouge Films — Livrable

## 1. Présentation du projet

Le projet consiste à créer une application front-end en Vue.js connectée à une API de films.

L'application doit permettre de consulter une liste de films, d'afficher le détail d'un film, et à terme de gérer des fonctionnalités comme la connexion, la notation et les critiques.

Pour cette première version et afin de valider mes compétences, je vais me concentrer uniquement sur ces trois pages :

- Page d'accueil
- Page liste des films
- Page détail d'un film

---

## 2. lancement du projet

j'ai commencer par créer un projet viege.
Ensuite j'ai commencer par ecrire dans mon terminal vccode : npm create vue@latest .

cette commande permet de lancé l'outil officiel de création de projet Vue 


---

## 3. Installation des dépendances

je doit faire -> npm install 

## 3.1 . Lancement du serveur

je doit faire -> npm run dev -> qui me donne : http://localhost:5173/



---



## Compétence : connaître la différence entre `let` et `const`

En JavaScript, `let` et `const` servent à créer des variables.

La différence est simple :

- `let` sert quand la valeur peut changer.
- `const` sert quand la valeur ne doit pas être remplacée.

Exemple avec `let` :

```js
let age = 25
age = 26
````

Ici, ça fonctionne parce que la variable `age` peut changer.

Exemple avec `const` :


const age = 25
age = 26


Ici, ça fait une erreur, parce qu’avec `const`, on ne peut pas remplacer la valeur.

Dans mon code, je dois privilégier `const` quand la variable ne change pas.
C’est plus propre et ça évite de modifier une valeur par erreur.

J’utilise `let` seulement quand je sais que la valeur va changer plus tard.

Exemple dans mon projet :


const route = useRoute()


Ici, j’utilise `const` parce que je ne remplace pas la variable `route`.
Je m’en sers seulement pour lire les informations de la page actuelle


Je privilégie `const` par défaut, et j’utilise `let` seulement quand la valeur doit vraiment changer.



## Compétence : connaître le rôle de `this`

En JavaScript, `this` veut dire **“cet objet-là”**.

Il sert à parler de l’objet qui est en train d’utiliser une fonction.

Exemple simple :

```js
const user = {
  name: 'Théo',

  sayHello() {
    console.log(this.name)
  }
}

user.sayHello()


Ici, `this` représente l’objet `user`.

Donc :


this.name


veut dire :


user.name

Résultat affiché :


Théo



Explication : 

`this` permet d’accéder aux informations de l’objet dans lequel on se trouve.

Dans l’exemple, la fonction `sayHello()` est dans l’objet `user`, donc `this` fait référence à `user`.

```
## Attention

```
Le comportement de `this` peut changer selon la façon dont la fonction est écrite.

Avec une fonction classique :


sayHello() {
  console.log(this.name)
}


`this` représente l’objet qui appelle la fonction.

Mais avec une arrow function :


sayHello: () => {
  console.log(this.name)
}


`this` ne fonctionne pas pareil, car une arrow function ne crée pas son propre `this`.



`this` sert à faire référence à l’objet courant.
Je l’utilise pour accéder aux propriétés ou aux méthodes de cet objet.
Il faut faire attention avec les arrow functions, car elles ne gèrent pas `this` comme les fonctions classiques.


 
```

## Compétence : importer et exporter des modules JavaScript
```
En JavaScript, un module est un fichier qui peut partager du code avec un autre fichier.

On utilise :

- `export` pour rendre du code disponible depuis un fichier.
- `import` pour récupérer ce code dans un autre fichier.

## Exemple simple

Dans un fichier `math.js`, je peux exporter une fonction :

```js
export function addition(a, b) {
  return a + b
}


Ensuite, dans un autre fichier script.js, je peux l’importer :

import { addition } from './math.js'

console.log(addition(2, 3))

Résultat : 5

Explication très simple

export veut dire :
“Je rends cette fonction utilisable ailleurs.”

import veut dire :
“Je récupère une fonction qui vient d’un autre fichier.”

Pourquoi c’est utile ?

Les modules permettent de mieux organiser le code.

Au lieu de tout mettre dans un seul gros fichier, on peut séparer le code en plusieurs fichiers.

Par exemple :

un fichier pour les calculs
un fichier pour l’affichage
un fichier principal qui utilise les autres fichiers

Cela rend le code plus propre, plus facile à lire et plus facile à modifier.

J’ai travaillé cette compétence dans l’exercice 5-import de l’introduction ES6+.

Dans cet exercice, il fallait importer et utiliser des fonctions dans le fichier principal, puis exporter les fonctions du fichier math.js pour les utiliser dans script.js.

Importer et exporter des modules permet de partager du code entre plusieurs fichiers JavaScript.
J’utilise export pour rendre une fonction disponible, puis import pour l’utiliser dans un autre fichier.
Cela permet d’avoir un code mieux organisé et plus propre.

```

---

```
## Compétence : utiliser le destructuring

Le destructuring est une façon plus simple de récupérer des valeurs dans un tableau ou dans un objet.

Au lieu d’écrire plusieurs lignes longues, on peut récupérer directement les valeurs qui nous intéressent.

## Exemple avec un objet


const user = {
  name: 'Théo',
  age: 25
}

Sans destructuring, on écrit :

const name = user.name
const age = user.age

Avec le destructuring, on écrit :

const { name, age } = user

Cela veut dire :
“Je récupère name et age depuis l’objet user.”

Exemple avec un tableau
const fruits = ['pomme', 'banane', 'orange']

Avec le destructuring :

const [fruit1, fruit2, fruit3] = fruits

Résultat :

console.log(fruit3)

Affiche :

orange
Pourquoi c’est utile ?

Le destructuring permet d’écrire un code plus court, plus propre et plus facile à lire.

C’est très utile quand on veut récupérer seulement certaines informations dans un objet ou dans un tableau.

J’ai travaillé cette compétence dans l’exercice 4-destructuring de l’introduction ES6+.

Dans cet exercice, il fallait récupérer des valeurs dans un tableau et dans un objet, puis utiliser le destructuring avec les données de perturbations.
Il fallait aussi apprendre à destructurer les paramètres d’une fonction et utiliser l’opérateur rest ....

Le destructuring permet de récupérer rapidement des valeurs dans un tableau ou dans un objet.
Je l’utilise pour éviter d’écrire plusieurs lignes comme objet.propriete.
Cela rend le code plus simple et plus lisible.

```
--- 


```
```
## Compétence : constater la différence de logique entre JavaScript Vanilla et Vue.js

JavaScript Vanilla, c’est du JavaScript “simple”, sans framework.

Vue.js, c’est un framework JavaScript qui aide à construire une interface plus facilement.



## Différence principale

En JavaScript Vanilla, je dois souvent chercher les éléments HTML moi-même, puis les modifier avec le DOM.

Par exemple :

```js
const title = document.querySelector('#title')
title.textContent = 'Bonjour'
````

Ici, je vais chercher l’élément dans la page avec `document.querySelector`, puis je change son texte avec `textContent`.

## Avec Vue.js

Avec Vue.js, je travaille plutôt avec des données.

Je déclare une donnée dans mon composant :

```js
data() {
  return {
    message: 'Bonjour'
  }
}
```

Puis je l’affiche dans le HTML :

```html
<h1>{{ message }}</h1>
```

Ici, je n’ai pas besoin de faire `document.querySelector`.

Vue fait le lien automatiquement entre la donnée `message` et l’affichage dans la page.

## Le binding

Le binding veut dire “faire un lien” entre une donnée JavaScript et le HTML.

Dans Vue, quand une donnée change, l’affichage peut se mettre à jour automatiquement.

Exemple :

```js
data() {
  return {
    title: 'Mes films'
  }
}
```

```html
<h1>{{ title }}</h1>
```

Ici, le texte affiché dans le `h1` dépend de la variable `title`.

C’est ça le binding : le HTML est lié à une donnée JavaScript.

## Exemple simple avec une image

En JavaScript Vanilla, pour changer une image, je pourrais faire :

```js
const image = document.querySelector('img')
image.src = 'film.jpg'
```

Avec Vue.js, je peux utiliser `v-bind` ou `:` :

```html
<img :src="imageUrl" alt="Affiche du film">
```

```js
data() {
  return {
    imageUrl: 'film.jpg'
  }
}
```

Ici, Vue relie automatiquement l’attribut `src` à la donnée `imageUrl`.

## Résumé simple

En JavaScript Vanilla, je manipule directement le HTML avec le DOM.

En Vue.js, je manipule surtout les données, et Vue met à jour le HTML automatiquement.

Vue permet donc d’avoir un code plus organisé, plus lisible et plus simple à maintenir quand l’interface devient plus grande.



JavaScript Vanilla me demande de modifier directement les éléments HTML avec le DOM, par exemple avec `document.querySelector`.

Avec Vue.js, je travaille plutôt avec des données. Grâce au binding, Vue fait le lien entre mes données JavaScript et mon HTML.

Quand une donnée change, l’affichage peut se mettre à jour automatiquement. C’est pour ça que Vue est plus pratique pour créer une interface dynamique.

```
```



```
## Compétence : prendre en main les outils de développement de Vue.js

Les Vue DevTools sont des outils de développement pour inspecter une application Vue.js dans le navigateur.

Ils permettent de voir ce qu’il se passe dans une application Vue : les composants, les données, les props, les événements et parfois le store comme Pinia.

## À quoi servent les Vue DevTools ?

Les Vue DevTools servent à comprendre et déboguer une application Vue plus facilement.

Avec ces outils, je peux voir :

- les composants Vue affichés sur la page ;
- les données utilisées par un composant ;
- les props reçues par un composant ;
- les événements déclenchés ;
- les changements dans l’état de l’application.

La documentation officielle explique que l’extension Vue DevTools permet d’explorer l’arborescence des composants, d’inspecter l’état des composants, de suivre les événements et d’analyser les performances. :contentReference

## Installer les Vue DevTools

Pour installer les Vue DevTools, j'ai du utiliser l’extension officielle du navigateur.

La documentation officielle indique qu’il faut installer l’extension selon le navigateur utilisé : Chrome, Firefox, Edge ou un navigateur basé sur Chromium comme Brave.


### Sur Firefox

1. Ouvrir le site des extensions Firefox.
2. Chercher `Vue.js devtools`.
3. Cliquer sur `Ajouter à Firefox`.
4. Accepter l’installation.
5. Recharger la page de mon projet Vue.

L’extension Firefox officielle sert aussi à déboguer les applications Vue.js. :contentReference

## Attention à la version de Vue

Mon projet utilise Vue 3.

Pour Vue 3, je peux utiliser la version récente des Vue DevTools.

La documentation précise que la version 7 des DevTools fonctionne avec Vue 3. Si un projet utilise encore Vue 2, il faut utiliser une ancienne version compatible. 

## Lancer mon projet Vue

Avant d’utiliser les DevTools, mon projet Vue doit être lancé.

Dans le terminal, je vais dans le dossier de mon projet :

```bash
cd fil-rouge-film
````

Puis je lance le serveur de développement :

```bash
npm install
npm run dev
```

Ensuite, j’ouvre l’adresse affichée dans le terminal, par exemple :

```txt
http://localhost:5173
```

## Utiliser les Vue DevTools

Une fois mon projet ouvert dans le navigateur :

1. Je fais clic droit sur la page.
2. Je clique sur `Inspecter`.
3. J’ouvre l’onglet `Vue`.
4. Je regarde les composants Vue de mon application.

Si l’onglet `Vue` n’apparaît pas, je vérifie que :

* l’extension est bien installée ;
* mon projet Vue est bien lancé ;
* la page a bien été rechargée ;
* je suis bien sur une page qui utilise Vue.js.

## Expliquer le contenu de l’onglet Vue

Dans l’onglet Vue, je peux voir l’arborescence des composants.

L’arborescence des composants, c’est la liste des composants utilisés dans la page.

Par exemple, dans une application Vue, je peux avoir :

```txt
App
 ├─ RouterView
 └─ FilmsView
```

Cela veut dire que le composant principal est `App`, et qu’il affiche d’autres composants à l’intérieur.

Quand je clique sur un composant, je peux voir ses informations.

Je peux voir ses données, par exemple :

```js
films: []
loading: true
error: null
```

Cela m’aide à comprendre l’état actuel de mon composant.

Par exemple, si `loading` vaut `true`, cela veut dire que le chargement est en cours.

Si `films` contient des éléments, cela veut dire que les films ont bien été récupérés.

Si `error` contient un message, cela veut dire qu’il y a eu un problème.

## Exemple d’utilisation dans mon projet

Dans mon projet de films, je peux utiliser les Vue DevTools pour vérifier que ma page de films fonctionne correctement.

Je peux ouvrir l’onglet Vue, cliquer sur le composant de la page des films, puis regarder si les données sont bien présentes.

Par exemple, je peux vérifier :

```js
films
loading
error
```

Si `films` contient une liste de films, cela veut dire que l’appel API a fonctionné.

Si `loading` passe de `true` à `false`, cela veut dire que mon chargement est terminé.

Si `error` reste à `null`, cela veut dire qu’il n’y a pas d’erreur.

## Pourquoi c’est utile ?

Les Vue DevTools sont utiles parce qu’ils permettent de vérifier ce qu’il se passe dans l’application sans ajouter des `console.log` partout.

Ils permettent de mieux comprendre les composants Vue et de trouver plus facilement les erreurs.

C’est pratique pour voir si les données changent bien, si les composants reçoivent les bonnes informations, et si l’interface fonctionne correctement.

## Preuve de travail

J’ai installé les Vue DevTools dans mon navigateur.

J’ai lancé mon projet Vue avec :

```bash
npm run dev
```

Puis j’ai ouvert mon application dans le navigateur.

Ensuite, j’ai ouvert les outils de développement avec `Inspecter`, puis j’ai utilisé l’onglet `Vue`.

Dans cet onglet, j’ai pu voir les composants de mon application et inspecter leurs données.



Les Vue DevTools sont des outils qui permettent d’inspecter une application Vue directement dans le navigateur.

Je peux voir les composants, leurs données, leurs props et parfois les événements ou le store.

Dans mon projet, je peux m’en servir pour vérifier si mes données sont bien chargées, par exemple la liste des films, l’état du chargement ou les erreurs.

Cela m’aide à comprendre mon application et à corriger plus facilement les problèmes.



```
---


## Compétence : décrire le concept de Single Page App

Une Single Page App, souvent appelée SPA, est une application web qui fonctionne principalement avec une seule page HTML.

Au lieu de recharger une nouvelle page complète à chaque clic, l’application garde la même page et change seulement le contenu affiché.

## Explication 

Dans une application classique, quand je clique sur un lien, le navigateur demande une nouvelle page au serveur.

Dans une SPA, le navigateur charge l’application une première fois, puis JavaScript s’occupe de changer le contenu de la page sans tout recharger.

Par exemple, avec Vue.js, je peux passer de la page d’accueil à la page des films sans recharger complètement le site.

## Exemple avec Vue Router

Dans une SPA Vue.js, on utilise souvent Vue Router.

Vue Router permet de gérer les pages côté front-end.

Exemple :

```js
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: HomeView
    },
    {
      path: '/films',
      component: FilmsView
    }
  ]
})
````

Ici, quand l’utilisateur va sur `/films`, Vue affiche le composant `FilmsView`.

Le navigateur ne recharge pas toute l’application. Vue change seulement le composant affiché.

## Structure simple d’une SPA

Une SPA contient souvent :

* un fichier HTML principal ;
* une application JavaScript ;
* des composants Vue ;
* un routeur pour gérer les pages ;
* des appels API pour récupérer les données.

Dans Vue.js, la structure peut ressembler à ça :

```txt
src/
├─ main.js
├─ App.vue
├─ router/
│  └─ index.js
├─ views/
│  ├─ HomeView.vue
│  └─ FilmsView.vue
└─ components/
   └─ MovieCard.vue
```

 Schéma du fonctionnement d’une SPA

```txt
Utilisateur
    |
    v
Navigateur
    |
    v
Charge une seule page HTML
    |
    v
L'application Vue.js démarre
    |
    v
Vue Router choisit le composant à afficher
    |
    v
Le composant demande des données à l'API si besoin
    |
    v
L'API renvoie les données
    |
    v
Vue met à jour l'affichage sans recharger toute la page
```

## Explication du schéma

L’utilisateur ouvre le site dans son navigateur.

Le navigateur charge une seule page HTML.

Ensuite, l’application Vue.js démarre.

Quand l’utilisateur change de page, Vue Router choisit le bon composant à afficher.

Si le composant a besoin de données, il fait une requête vers une API.

L’API renvoie les données, puis Vue met à jour l’affichage.

Le point important, c’est que la page complète n’est pas rechargée à chaque navigation.
```
## Différence avec une application Laravel classique

Dans une application Laravel classique, le serveur prépare souvent la page HTML complète.

Quand l’utilisateur clique sur un lien, Laravel renvoie une nouvelle page.

Le navigateur recharge donc toute la page.

Dans une SPA Vue.js, le serveur envoie surtout les données avec une API.

Le front-end Vue.js reçoit les données et affiche lui-même les pages.

## Comparaison simple

Application Laravel classique :

```txt
Clic sur un lien
→ demande au serveur
→ Laravel prépare une nouvelle page HTML
→ le navigateur recharge la page
```

Single Page App avec Vue.js :

```txt
Clic sur un lien
→ Vue Router change le composant affiché
→ Vue demande les données à l'API si besoin
→ l'affichage change sans recharger toute la page
```

## Pourquoi utiliser une SPA ?

Une SPA permet d’avoir une navigation plus fluide.

L’utilisateur a l’impression que l’application est plus rapide, car toute la page ne se recharge pas à chaque clic.

C’est pratique pour créer des interfaces dynamiques, comme une application de films, un tableau de bord, un espace utilisateur ou un deckbuilder.

## Avantages d’une SPA

Une SPA permet :

* d’avoir une navigation plus rapide ;
* de créer une interface plus dynamique ;
* de séparer le front-end et le back-end ;
* d’utiliser une API pour récupérer les données ;
* de mieux organiser le code avec des composants.

---

Une Single Page App est une application web qui charge une seule page HTML au départ.

Ensuite, JavaScript, par exemple Vue.js, change le contenu affiché sans recharger toute la page.

Avec Vue Router, l’application affiche le bon composant selon l’URL.

La différence avec une application Laravel classique, c’est que Laravel renvoie souvent une nouvelle page HTML à chaque navigation, alors qu’une SPA garde la même page et récupère seulement les données nécessaires avec une API.

L’intérêt d’une SPA, c’est d’avoir une application plus fluide, plus dynamique et plus proche d’une vraie application.

```
```
---




## Compétence : stocker la donnée de sa page dans l’objet `data` de Vue

Dans Vue.js, l’objet `data` sert à stocker les données utilisées par une page ou un composant.

Ces données peuvent ensuite être affichées dans le HTML.

## Exemple simple

Dans un composant Vue, je peux écrire :

```js
export default {
  data() {
    return {
      title: 'Découverte de Vue',
      message: 'Bonjour tout le monde'
    }
  }
}
````

Ici, les données de ma page sont stockées dans `data`.

J’ai deux données :

```js
title
message
```

## Afficher les données dans le HTML

Dans le template, je peux afficher ces données avec les doubles accolades :

```html

<h1>{{ title }}</h1>
<p>{{ message }}</p>

Vue remplace automatiquement `{{ title }}` par la valeur de `title`.

Vue remplace aussi `{{ message }}` par la valeur de `message`.

## Explication très simple

L’objet `data` est comme une boîte où je range les informations de ma page.

Ensuite, Vue peut utiliser ces informations pour les afficher dans le HTML.

Si une donnée change dans `data`, l’affichage peut se mettre à jour automatiquement.

## Exemple complet

```vue
<template>
  <main>
    <h1>{{ title }}</h1>
    <p>{{ message }}</p>
  </main>
</template>

<script>
export default {
  data() {
    return {
      title: 'Découverte de Vue',
      message: 'Je stocke mes données dans data'
    }
  }
}
</script>
```

## Exemple avec une liste

Je peux aussi stocker une liste dans `data`.

```js
export default {
  data() {
    return {
      films: [
        'Avatar',
        'Titanic',
        'Interstellar'
      ]
    }
  }
}
```

Puis je peux afficher cette liste avec `v-for` :

```html
<ul>
  <li v-for="film in films" :key="film">
    {{ film }}
  </li>
</ul>
```

Ici, Vue parcourt la liste `films` et affiche chaque film dans un `<li>`.

## Pourquoi utiliser `data` ?

J’utilise `data` pour séparer les données de l’affichage.

Au lieu d’écrire toutes les informations directement dans le HTML, je les stocke dans Vue.

Cela rend le code plus propre et plus facile à modifier.



## Explication 

Dans Vue.js, l’objet `data` sert à stocker les données d’un composant ou d’une page.

Je peux ensuite afficher ces données dans le HTML avec les doubles accolades.

Par exemple, si je stocke un titre dans `data`, je peux l’afficher avec `{{ title }}`.

L’intérêt est que mes données sont rangées dans JavaScript, et Vue s’occupe de les afficher dans la page.

```
```
---

## 