
# PWKS & MUP Lab. vježba JavaScript - 6

1. Napišite funkciju koja, s obzirom na datum (u formatu MM/DD/YYYY), vraća dan u tjednu. Svaki naziv dana mora biti jedan od sljedećih stringova: "Ponedjeljak", "Utorak", "Srijeda", "Četvrtak", "Petak", "Subota" ili "Nedjelja". 

Primjeri:
```
getDay("12/07/2016") ➞ "Srijeda"
getDay("09/04/2016") ➞ "Nedjelja"
getDay("12/08/2011") ➞ "Četvrtak"
```

2. Napravite funkciju koja prima ime kao string i provjerava koliko je dobro dano ime. Prethodno učitani objekt abecednih rezultata dostupan ispod. Zbrojite slova imena da dobijete ukupan rezultat.

```
const scores = {"A": 100, "B": 14, "C": 9, "D": 28, "E": 145, "F": 12, "G": 3, "H": 10, "I": 200, "J": 100, "K": 114, "L": 100, "M": 25, "N": 450, "O": 80, "P": 2, "Q": 12, "R": 400, "S": 113, "T": 405, "U": 11, "V": 10, "W": 10, "X": 3, "Y": 210, "Z": 23}
```

Pravila su sljedeća:
```
score <= 60: "NOT TOO GOOD"
61 <= score <= 300: "PRETTY GOOD"
301 <= score <= 599: "VERY GOOD"
score >= 600: "THE BEST"
```

Primjeri:
```
nameScore("MUBASHIR") ➞ "THE BEST"
nameScore("YOU") ➞ "VERY GOOD"
nameScore("MATT") ➞ "THE BEST"
nameScore("PUBG") ➞ "NOT TOO GOOD"
```

3. Napravite funkciju koja određuje ispunjava li narudžbu za kupnju besplatnu dostavu. Narudžba je prihvatljiva za besplatnu dostavu ako ukupni trošak kupljenih artikala prelazi 50,00 USD. 

Primjeri:
```
freeShipping({ "Shampoo": 5.99, "Rubber Ducks": 15.99 }) ➞ false
freeShipping({ "Flatscreen TV": 399.99 }) ➞ true
freeShipping({ "Monopoly": 11.99, "Secret Hitler": 35.99, "Bananagrams": 13.99 }) ➞ true
```

4. Napišite funkciju koja preokreće sve riječi u rečenici koje počinju određenim slovom (pripaziti na velika i mala slova). 

Primjeri:
```
specialReverse("word searches are super fun", "s") ➞ "word sehcraes are repus fun"
specialReverse("first man to walk on the moon", "m") ➞ "first nam to walk on the noom"
specialReverse("peter piper picked pickled peppers", "p") ➞ "retep repip dekcip delkcip sreppep"
```