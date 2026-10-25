# Bevásárlólista alkalmazás

## 1. Projekt leírása

A projekt célja egy egyszerű, böngészőben használható bevásárlólista-alkalmazás fejlesztése, amely segíti a felhasználókat a vásárlás megtervezésében és a szükséges termékek nyilvántartásában.

Az alkalmazás HTML, CSS és JavaScript segítségével készült. Az adatokat a böngésző helyi tárhelyén tárolja, ezért a lista az oldal frissítése után is megmaradhat ugyanabban a böngészőben.

## 2. Funkciók

- Termékek hozzáadása a bevásárlólistához
- Termékek törlése
- Terméknevek szerkesztése
- Termékek megjelölése megvásároltként
- Termékek keresése név vagy névrészlet alapján
- A keresés kis- és nagybetűktől függetlenül működik
- A lista automatikus mentése
- A korábban mentett lista visszatöltése az alkalmazás indításakor
- Visszajelzés megjelenítése a mentési és betöltési hibákról

## 3. Használt technológiák

- **HTML** – az alkalmazás szerkezete
- **CSS** – a megjelenés és az elrendezés
- **JavaScript** – a funkciók és az események kezelése
- **localStorage** – a bevásárlólista helyi tárolása a böngészőben
- **Git és GitHub** – verziókezelés és csapatmunka

## 4. Használat

1. Nyisd meg az `index.html` fájlt egy modern böngészőben.
2. Írd be a hozzáadni kívánt termék nevét.
3. Add hozzá a terméket a listához.
4. A keresőmező segítségével szűrheted a megjelenített termékeket.
5. A termékek megvásároltként jelölhetők, szerkeszthetők és törölhetők.

A lista módosításait az alkalmazás automatikusan elmenti a böngésző helyi tárhelyére.

## 5. Adattárolás

Az alkalmazás a böngésző `localStorage` funkcióját használja.

- A lista mentése a módosítások után automatikusan történik.
- Az alkalmazás induláskor megpróbálja betölteni a korábban mentett adatokat.
- A tárolt adatok ugyanabban a böngészőben és böngészőprofilban érhetők el.
- Az adatok nem szinkronizálódnak automatikusan más eszközökkel.
- A böngésző tárhelyének törlése az elmentett lista elvesztését okozhatja.

## 6. Biztonság és megbízhatóság

- A terméknevek megjelenítése `textContent` használatával történik, így a beírt szöveget a program nem HTML-kódként értelmezi.
- Az alkalmazás kezeli a mentett adatok beolvasása és a mentés során fellépő hibákat.
- A program csak a szükséges bevásárlólista-adatokat tárolja helyben.

## 7. Tesztelés

A fontosabb funkciókat kézi teszteléssel lehet ellenőrizni, többek között az alábbi esetekben:

- Termékek hozzáadása, szerkesztése és törlése
- Keresés név vagy névrészlet alapján
- Kis- és nagybetűk kezelése a keresés során
- Adatok és vásárlási állapot megőrzése oldalfrissítés után
- HTML-kódszerű szöveg biztonságos megjelenítése

A részletes tesztesetek a [`docs/testing.md`](docs/testing.md) fájlban találhatók.

## 8. Projektstruktúra

- `index.html` – a weboldal szerkezete
- `style.css` – a megjelenés stílusai
- `script.js` – az alkalmazás működése
- `docs/` – projektkövetelmények, diagramok és kapcsolódó dokumentációk
- `README.md` – projektleírás és használati útmutató

## 9. Fejlesztés és csapatmunka

A projekt háromfős csapatmunkában készül a Rendszerfejlesztési technológiák tantárgy keretében.

A követelmények a `docs/requirements.md` fájlban találhatók. A fejlesztés során a Git és a GitHub segíti a változtatások nyomon követését és a csapattagok közötti együttműködést.
