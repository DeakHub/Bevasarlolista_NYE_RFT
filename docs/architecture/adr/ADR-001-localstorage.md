# ADR-001: localStorage használata adattárolásra

## Állapot

Elfogadott

## Kontextus

A bevásárlólista alkalmazásnak meg kell őriznie a felhasználó által felvitt termékeket oldalfrissítés és a böngésző újraindítása után is.

## Döntés

Az alkalmazás a böngésző beépített localStorage szolgáltatását használja az adatok tárolására.

## Indoklás

- Nem szükséges külön szerver.
- Nem szükséges adatbázis.
- Egyszerű implementáció.
- Gyors működés.
- Minden modern böngésző támogatja.

## Következmények

### Pozitív

- Az alkalmazás offline is használható.
- Gyors adatelérés.
- Egyszerű fejlesztés és karbantartás.
- Nem igényel külső szolgáltatásokat.

### Negatív

- Az adatok csak az adott böngészőben érhetők el.
- Nincs automatikus szinkronizálás különböző eszközök között.
- A böngésző adatainak törlése esetén a lista elveszhet.
