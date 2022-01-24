# Követelmények

Kutatásunk elvégzéséhez első körben szükségünk volt egy felületre, ahol képesek voltunk kollaborálni és megosztani

-
- Power BI Desktop szoftverre (verziószám: 2.100.1401.0)
- Service elérésre és ahhoz tartozó fiókokra, licenszekre
-

## Andor

## Balázs

## Ádám

# Technológiák, Tech Stack

Általános

## Andor

## Balázs

## Ádám

# Munkamenet és -felosztás

A kutatást a Power BI platform megismerésével kezdtük. Az első feladataink közé tartozott, hogy utánanézzünk, pontosan milyen szolgáltatásokra is képes a szoftver, milyen licenszekkel lehet dolgozni. Ehhez megfelelő dokumentációt a Power BI-t fejlesztő cég, a Microsoft oldalán találtunk. Mivel dolgozatunk témája a Power BI integrációs lehetőségei a Machine Learning-gel, ezért természetesen a Machine Learning fogalmának, illetve az ahhoz kapcsolódó tudásanyagnak is utána kellett néznünk, amelyet az IBM weboldaláról elérhető dokumentumok segítségével tettünk meg, hiszen ott nagyszerű összegzést kapunk a témáról.
A kezdeti, információgyűjtő fázis után közösen meghoztuk a döntést arról, hogy a kutatás milyen irányokba mozduljon el, milyen lehetőségeket vizsgáljunk meg és milyen mélységben.

## Irány kijelölése, munka felosztása

A harmadik héten jelöltük ki a projekt irányát, a kutatás mérföldköveit, a hátralévő idő felosztását, az egymás közötti munkamegosztást.

### A projekt iránya

Figyelembe véve, hogy a munka egy egyetemi félév hosszára korzlátozódik, a csoport három főből áll, alapvető statisztikai ismeretekkel rendelkezünk és a kutatás területe önmagában rendkívül tág mind horizontálisan mind vertikálisan, így az a döntés született, hogy inkább a horizontális feltérképzésre koncentrálunk:

- Igyekszünk minél több lehetséges AI megoldást keresni a Power BI-jal való ötvözésre
- Alapvető Machine Learning megoldásokat alkalmazunk, amelyek célja a megvalósíthatóság vizsgálata a Power BI-on belül
- Összehasonlítjuk a különböző lehetőségeket
- Összefoglaljuk kutatásunk egy demo keretein belül
- Dokumentáljuk eredményeinket

### A kutatás mérföldkövei

- Megfelelő adathalmazok keresése a különböző feladatokhoz és demohoz
- Technológiák kiválasztása és felosztása egymás között
- Mini projektek megvalósítása személyenként
- Osztályozási probléma megoldása
- Előrejelzési probléma megoldása
- Egyéni összesítés készítése személyenként előre meghatározott szempontok szerint
- Összesítő táblázat készítése a rendelkezésre álló információkból
- Demo készítése az összes kutatott technológia segítségével
- Dokumentáció készítése

### Az időbeosztás

Kutatás teljes időtartama: 15 hét

Kezdés dátuma: 2021. október 14.

Befejezés dátuma: 2022. január 26.

Heti rendszerességű meetingjeink során mindig egy héttel előre határoztuk meg a feladatokat és hogy ki-mit csináljon, ugyanakkor nagy vonalakban rendelkeztünk egy vázlatos ütemtervvel, hogy körülbelül mikor-mit kell elvégezni és mire mennyi idő áll rendelkezésre.
Alapvetően a következő volt az idő felbontása vázlatosan:

- Technológiák megismerése, tanulási szakasz - 2021. október
  - Októberben tartottuk első meetingünket és már az első meeting előtt közölt, szükséges Power BI ismeretek tanulmányozása, majd teszt reportok készítése, ML alap koncepcióinak elsajátítása volt a feladat, így erre hónapra nem terveztünk előre. A hónap végén határoztuk meg a haladás irányát és a projekt célját.
- Mini projektek és összehasonlító táblázat - 2021. november
  - november első hete: dataset kiválasztása a problémákhoz, összehasonlítási szempontok lefektetése
  - november második hete: előrejelzési és osztályozási feladat megvalósítása
  - november harmadik hete: egyéni kiértékelés
  - november negyedik hete: csoportos, összesítő táblázat elkészítése
- Demo és dokumentáció - 2021. december - 2022. január
  - A demo készítésre, a projekt lezárására és dokumentálásra jelöltük ki a hátralévő időkeretet.

### A munka felosztása

A munkák felosztását úgy oldottuk meg, hogy Machine Learning megoldásonként bontottuk fel csoportunkat, így voltak közös munkáink és önállóak is egyaránt. Az egyéni munkák során felmerülő komplikációkat és észrevételeket megosztottuk egymással a jobb hatékonyság érdekében, továbbá a külön csoport meetingjeinek aktívan segítettünk egymásnak egy-egy adott feladattal kapcsolatos probléma megoldásában.

Az első szakaszban kimondottan közös munkáról beszélhetünk. Ekkor igyekeztünk csoport szinten utána járni mindennek, ami kapcsolódhat a Power BI-hoz és a Machine Learning alapjaihoz. Később az adathalmazokat is közösen kerestük, majd együtt kiválasztva a legjobbakat haladtunk tovább az egyéni feladatokra.

Békési Andor feladata volt a beépített Machine Learning lehetőség, az AutoML megismerése, alkalmazása és értékelése. Janoschek Balázs és Kakas Ádám pedig a két alternatív megoldásért feleltek, amelyek script alapúak: R és Python Machine Learning megvalósítása különböző külső könyvtárak alkalmazásának segítségével. Ezt követően mindenki kiértékelte előre egyeztetett szempontok alapján megoldásait, amit pedig végül egy közös táblázatban összegeztünk.

A munka utolsó szakaszán a demo elkészítése során kiválasztottunk egy olyan adathalmazt, amelyen mindkét (osztályozási és előrejelzési) feladat elvégezhető egyaránt. Külön készítettük el megoldásainkat, majd közösen megbeszéltük és javítottuk azok esetleges problémáit és összesítettük őket a Power BI Serviceben.

## Mini projektek

Mini projektjeink során egyénileg oldottuk meg a Machine Learning-gel kapcsolatos feladatokat a különböző tehchnológiák segítségével. Miután létrehozásra került a Dataflow, egy számunkra megfelelő adatsort kellett keresni, amelyen dolgozni lehet. A későbbiekben a használt adatsorra Dataset-ként hivatkozunk. Többféle Dataset-et tekintettünk meg, végül kiejtettük azokat, amik különböző okokból nem voltak alkalmasak a megfelelő predikciók elkészítéséhez.

Tábla betöltése a forrásból történhet egyből, vagy valamilyen átalakítás után. Ezt nevezzük a Extract, Transfer, Load (ETL) folyamatnak. A transzformálás a Power Query nevű Tool-ban hajtható végre. Ez tűnt az egyik legnehezebb feladatnak, hiszen a tábla “kinyerése” után voltak oszlopok, amelyek teljesen más adattípusként voltak tárolva, mint amire szükségünk lett volna.

### Osztályozási feladat

Bináris osztályozás estében egy adott tulajdonságot (függő változó) prediktáltunk a modell segítségével, más, előre kiválasztott tulajdonsághalmaz (független változók) alapján. Az algoritmus betanítása után képes egy, a modellhez használt tulajdonsághalmazzal rendelkező adatsorról predikciót készíteni, aminek eredménye egy pozitív és negatív osztályra bontott sorozat. A kimenetel annak függvényében változik, hogy a függő és független változók kapcsolata mennyire erős. Fontos szempont a független változók száma, mivel itt általában komplexebb összefüggéseket keresünk, ugyanakkor a túl sok szempont kiválasztása során a modell már nem fog összefüggéseket találni.

Szintén figyelni kell arra, hogy a kiválasztott tulajdonság besorolása négy féleképpen végződhet:

- True positive (az a kimenetel, ahol a modell jól becsüli meg a pozitív osztályt)
- False positive (az a kimenetel, ahol a modell rosszul becsüli meg a pozitív osztályt)
- True negative (az a kimenetel, ahol a modell jól becsüli meg a negatív osztályt)
- False negative (az a kimenetel, ahol a modell rosszul becsüli meg a negatív osztályt)

A Dataseteket olyan szempontok szerint válogattuk ki, mint például, hogy, mennyi adat állt rendelkezésre, észlelhető valamilyen mintázat, periodikusság az adatsorban, megfelelő számú attribútum áll-e rendelkezésre és az attribútumok között észlelhetőek-e kapcsolatok. Így esett a választásunk a [kerékpár eladások](https://github.com/BlueGranite/AI-in-a-Day/tree/master/AutoML)at tároló adatforrás mellett.

### Előrejelzési feladat

Jövőbe mutató predikció készítése során historikus adatok felhasználásával egy adott tulajdonság jövőbeli alakulását becsültettük meg algoritmusunk segítségével, aminek eredménye egy sorozat. A folyamat úgy zajlik, hogy a kiválasztott tulajdonság alapján becslést készít a modell, amihez megvizsgálja az adatok szezonalitását, trendjét, és a fennmaradó (nem a másik kettő komponenshez tartozó) részt majd ezt követően adott időtávra készít becslést.

Fontos szempont, hogy minél nagyobb időtávot figyelünk annál nagyobb a tévesztés és pontatlanság esélye, így túl nagy időtávokat nem érdemes figyelni. Továbbá adataink periodikusságának függvényében érdemes az időtávot kijelölni.

Az előrejelzési feladathoz felhasznált forrásunk [repülési adatok](https://www.kaggle.com/rakannimer/air-passengers)at használt fel.
A forrásfájlból manuálisan létrehoztunk egy Train és egy Test adatsort. A Train adatsornál pár hónapot kivettünk, ugyanis az ellenőrzéshez az utolsó pár hónapból szükség volt valós, illetve előrejelzett adatokra is. Így jól szemléltethető, mennyire is tér el a modell által kiértékelt Prediction a valós elvárásoktól.

## Integrációs lehetőségek

Szintén egy nagyon fontos rész az integrációs lehetőségek és a modellek vizsgálata, mivel megoldásaink nem feltétlenül garantálják annak a Power BI teljes rendszerével (Desktop és Service) való teljes integrálhatóságát és hozzáférhetőségét, így ezeket ki kellett vizsgálnunk.

Az alábbi szempontok szerint értékeltük a megoldásokat:

### Elérhetőség

Power BI Desktopon a Machine Learning modellek kezelése az alternatív script megoldásokkal hozzáférhető, a beépített AutoML megoldás algoritmusa kizárólag a Serviceben van, így azt a Desktopban nem tudjuk elérni. Ez fordított esetben is igaz: Serviceben nem hozzáférhetőek scriptjeink, mivel azokat a Power Query Editorban ágyazzuk be, a Service Query Editorjában pedig egyáltalán nem elérhető ez a script beágyazási lehetőség.

### Menthetőség

Scriptekkel létrehozott modelljeink mentésére nincs lehetőségünk, Applied Steps formájában kerül elmentésre az összes többi módosítással egyetemben, amit az adatokon végeztünk azok importálásakor (ETL folyamat). Az AutoML esetében a modell a felhőben kerül létrehozásra és ott is tárolódik, elérhető és alkalmazható más adathalmazokra is.

### Frissíthetőség

Az ütemezett frissítés lehetősége korlátozottan érhető el scriptek esetében: kizárólag personal data gateway segítségével tudunk ütemezetten frissíteni az adatainkon, amelyek Python vagy R scriptet használnak, mindezt úgy, hogy mind adatainknak, mind a Pythonnak / R-nek "nyilvános" beállításon kell lenniük, továbbá állandónak kell lennie a kapcsolatnak az ütemezett frissítésekhez. Ehhez értelem szerűen a personal gateway-jel rendelkező számítógépnek folyamatosan üzemelnie kell és állandó internetkapcsolat is szükséges. Természetesen a manuális megoldás, miszerint letöltjük a reportot és lokálisan módosítunk, elérhető továbbra is.

Az AutoML esetében a frissítés nem teljesen egyértelmű, mivel a feltrainelt modell nem frissül, ha annak input táblája frissül, ugyanakkor, ha a modell adatfolyamát Power Query Editorral nyitjuk meg és módosítunk, akkor pedig igen. Szintén fontos megemlíteni, hogy a predikcióink a beépített lehetőség esetén automatikusan nem frissülnek, ha azok adatai igen.
