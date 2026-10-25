# Tesztelési dokumentáció – Bevásárlólista

## 1. Cél

A dokumentum célja a bevásárlólista keresési, automatikus mentési és biztonsági működésének ellenőrzése.

## 2. Tesztesetek

| Azonosító | Funkció | Tesztlépések | Elvárt eredmény |
|---|---|---|---|
| TC-01 | Keresés | Adjunk hozzá több terméket, majd keressünk egy névrészletre. | Csak a keresésnek megfelelő termékek jelennek meg. |
| TC-02 | Kis- és nagybetűk | Keressünk ugyanarra a termékre eltérő kis- és nagybetűkkel. | A találatok mindkét esetben megfelelőek. |
| TC-03 | Automatikus mentés | Adjunk hozzá egy terméket, majd frissítsük az oldalt. | A termék frissítés után is megmarad. |
| TC-04 | Állapot mentése | Jelöljünk meg egy terméket megvásároltként, majd frissítsük az oldalt. | A termék megvásárolt állapota megmarad. |
| TC-05 | Biztonságos megjelenítés | Adjunk hozzá HTML-kódszerű szöveget terméknévként. | A szöveg nem hajtódik végre HTML-kódként vagy JavaScriptként. |
| TC-06 | Törlés | Töröljünk egy terméket, majd frissítsük az oldalt. | A törölt termék nem jelenik meg újra. |

## 3. Tesztelési eredmények

A teszteseteket a fejlesztés során kézzel, böngészőben kell végrehajtani. Az eredményeket csak a tényleges ellenőrzés után szabad véglegesíteni.

| Azonosító | Eredmény |
|---|---|
| TC-01 | Sikeres |
| TC-02 | Sikeres |
| TC-03 | Sikeres |
| TC-04 | Sikeres |
| TC-05 | Sikeres |
| TC-06 | Sikeres |

## 4. Megjegyzések

- Az alkalmazás a böngésző `localStorage` tárhelyét használja az adatok megőrzésére.
- A terméknevek megjelenítése `textContent` használatával történik.
- A tesztek eredménye az aktuális fejlesztői környezetben végzett kézi ellenőrzésre vonatkozik.