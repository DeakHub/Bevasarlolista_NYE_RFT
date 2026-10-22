# Bevásárlólista alkalmazás – Követelményspecifikáció

## 1. Projekt bemutatása

A projekt célja egy egyszerű, böngészőben használható bevásárlólista-alkalmazás létrehozása, amely segíti a felhasználókat a vásárlás megtervezésében és a megvásárolandó termékek nyilvántartásában.

Az alkalmazás lehetővé teszi termékek hozzáadását, szerkesztését, törlését, megvásároltnak jelölését, keresését és a bevásárlólista helyi mentését.

**Alkalmazott technológiák:** HTML, CSS, JavaScript, localStorage.

## 2. Funkcionális követelmények

### 1. csapattag

#### FR-01 – Termék hozzáadása

**Description (User Story):**

Felhasználóként szeretnék új termékeket hozzáadni a bevásárlólistámhoz, hogy nyilvántarthassam, mit kell megvásárolnom.

**Acceptance Criteria:**

- **Given:** A felhasználó megnyitotta az alkalmazást.
- **When:** Beír egy terméknevet, és megnyomja a „Hozzáadás” gombot.
- **Then:** A termék megjelenik a bevásárlólistában.

**További feltétel:** Üres terméknév nem adható hozzá.

#### FR-02 – Termék törlése

**Description (User Story):**

Felhasználóként szeretném törölni a feleslegessé vált termékeket, hogy a listám mindig aktuális legyen.

**Acceptance Criteria:**

- **Given:** A bevásárlólistában legalább egy termék szerepel.
- **When:** A felhasználó a termék melletti „Törlés” gombra kattint.
- **Then:** A kiválasztott termék eltűnik a listából.

### 2. csapattag

#### FR-03 – Termék megvásároltnak jelölése

**Description (User Story):**

Felhasználóként szeretném megjelölni a már megvásárolt termékeket, hogy könnyen megkülönböztethessem őket a még megvásárolandó termékektől.

**Acceptance Criteria:**

- **Given:** A bevásárlólistában szerepel egy még nem megvásárolt termék.
- **When:** A felhasználó bejelöli a termék melletti jelölőnégyzetet.
- **Then:** A termék megvásárolt állapotba kerül, és áthúzott szöveggel jelenik meg.

#### FR-04 – Termék szerkesztése

**Description (User Story):**

Felhasználóként szeretném módosítani a korábban felvett termékek nevét, hogy kijavíthassam az esetleges hibákat.

**Acceptance Criteria:**

- **Given:** A bevásárlólistában már szerepel egy termék.
- **When:** A felhasználó a „Szerkesztés” gombra kattint, módosítja a termék nevét, majd menti a változtatást.
- **Then:** A termék az új névvel jelenik meg a listában.

### 3. csapattag

#### FR-05 – Termékek keresése

**Description (User Story):**

Felhasználóként szeretnék keresni a bevásárlólistámban, hogy gyorsan megtaláljam a szükséges termékeket.

**Acceptance Criteria:**

- **Given:** A bevásárlólistában több termék szerepel.
- **When:** A felhasználó beír egy keresési kifejezést a keresőmezőbe.
- **Then:** Csak azok a termékek jelennek meg, amelyek neve tartalmazza a keresett szöveget.

#### FR-06 – Bevásárlólista automatikus mentése

**Description (User Story):**

Felhasználóként szeretném, hogy a bevásárlólistám automatikusan mentésre kerüljön, hogy az oldal újratöltése után se veszítsem el az adataimat.

**Acceptance Criteria:**

- **Given:** A felhasználó módosította a bevásárlólistát.
- **When:** Bezárja, majd újra megnyitja az alkalmazást ugyanabban a böngészőben.
- **Then:** A korábban mentett termékek és azok állapotai újra megjelennek.

## 3. Nem funkcionális követelmények

### 1. csapattag

#### NFR-01 – Teljesítmény

**Description:**

Az alkalmazásnak gyorsan és akadásmentesen kell működnie.

**Acceptance Criteria:**

- Az alkalmazás kezdőoldala átlagos internetkapcsolaton, normál terhelés mellett legfeljebb 3 másodperc alatt betöltődik.
- Egy új termék hozzáadása 100 elemet tartalmazó lista esetén legfeljebb 1 másodperc alatt megjelenik.

#### NFR-02 – Használhatóság

**Description:**

Az alkalmazás felhasználói felülete legyen egyszerű és könnyen kezelhető.

**Acceptance Criteria:**

- A termék hozzáadása legfeljebb 3 felhasználói művelettel elvégezhető.
- A fő funkciók külön használati útmutató nélkül is elérhetők.
- A gombok és beviteli mezők egyértelmű magyar nyelvű feliratokkal rendelkeznek.

### 2. csapattag

#### NFR-03 – Hordozhatóság

**Description:**

Az alkalmazás különböző eszközökön és böngészőkben is használható legyen.

**Acceptance Criteria:**

- Az alkalmazás működik a Google Chrome, Mozilla Firefox és Microsoft Edge aktuális stabil verzióiban.
- A felület legalább 320 pixel széles mobilképernyőn is vízszintes görgetés nélkül használható.
- Asztali számítógépen és mobiltelefonon egyaránt használható.

#### NFR-04 – Megbízhatóság

**Description:**

Az alkalmazás a felhasználói adatokat megbízhatóan kezelje, és ne veszítse el azokat oldalfrissítéskor.

**Acceptance Criteria:**

- A termékek hozzáadása, szerkesztése, törlése és állapotváltoztatása után az adatok automatikusan mentésre kerülnek.
- Az oldal újratöltése után minden sikeresen mentett adat visszaáll.
- A mentés sikertelensége esetén az alkalmazás hibaüzenetet jelenít meg.

### 3. csapattag

#### NFR-05 – Biztonság

**Description:**

Az alkalmazás biztonságosan kezelje a felhasználó által megadott adatokat.

**Acceptance Criteria:**

- A terméknevek megjelenítése során a bevitt HTML- és JavaScript-kód nem hajtódhat végre.
- A termékek adatai kizárólag a böngésző helyi tárhelyén kerülnek tárolásra.
- Az alkalmazás nem kér személyes adatokat vagy jelszót.

#### NFR-06 – Karbantarthatóság

**Description:**

Az alkalmazás forráskódja legyen átlátható és könnyen módosítható.

**Acceptance Criteria:**

- A HTML, CSS és JavaScript kód külön fájlokban található.
- A JavaScript-funkciók egyértelmű, beszédes nevekkel rendelkeznek.
- A GitHub-repository tartalmaz egy README.md fájlt a projekt leírásával és használati útmutatójával.

## 4. Csapattagok feladatainak összesítése

| Csapattag | Funkcionális követelmények | Nem funkcionális követelmények |
|---|---|---|
| 1. csapattag | FR-01, FR-02 | NFR-01, NFR-02 |
| 2. csapattag | FR-03, FR-04 | NFR-03, NFR-04 |
| 3. csapattag | FR-05, FR-06 | NFR-05, NFR-06 |

## 5. Projekt megvalósítása

Az alkalmazás HTML, CSS és JavaScript technológiák használatával készül.

A bevásárlólista adatait a böngésző localStorage tárhelye tárolja, ezért külön adatbázis vagy szerver használata nem szükséges.

A fejlesztés GitHubon történik, ahol minden csapattag külön branch-en dolgozhat, majd pull request segítségével egyesíthetők a módosítások.
