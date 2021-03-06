
# PWKS & MUP Lab. vježba JavaScript - 7

1. Napišite funkciju pod nazivom findMin koja prihvaća promjenjiv broj argumenata i vraća najmanji argument. Koristiti rest operator kod funkcije. U funkciji nije dozvoljeno koristiti petlje za pronalazak najmanjeg broja (hint: Math objekt).  
Primjeri:

```js
findMin(1,4,12,-3) // -3
findMin(1,-1) // -1
findMin(3,1) // 1
```


2. Napišite funkciju zvanu mergeObjects koja prihvaća dva objekta i vraća novi objekt koji sadrži sve ključeve i vrijednosti prvog i drugog objekta.  
Primjeri:

```js
mergeObjects({a:1, b:2}, {c:3, d:4}) // {a:1, b:2, c:3, d:4}
```

3. Napišite funkciju pod nazivom doubleAndReturnArgs koja prihvaća niz i promjenjiv broj argumenata. Funkcija bi trebala vratiti novi niz s izvornim vrijednostima niza i udvostručenim svim dodatnim argumentima. Nije dozvoljeno koristiti petlje. Zadatak riješiti koristeći spread i rest operatore te .map() funkciju.  
Primjer:

```js
doubleAndReturnArgs([1,2,3],4,4) // [1,2,3,8,8]
doubleAndReturnArgs([2],10,4) // [2, 20, 8]
```

4. Napišite konstruktor Person koji inicijalizira `name` i `age` iz argumenata. Override-ajte .toString() metodu iz prototipa na način da Person ispisuje ime i godine na konzolu.  
Primjer:

```js
const marko = new Person("Marko", 26);
console.log(marko.toString()); // ispisuje "Marko, 26 godina"
```

5. Proučiti Pokemon API s linka: <https://pokeapi.co/> te napisati funkcija koja poziva odgovarajući endpoint za dohvaćanje pokemon-a po boji. Dohvatiti sve pokemone žute boje. Koristeći funkciju .map() Ispisati u konzolu imena pokemona.