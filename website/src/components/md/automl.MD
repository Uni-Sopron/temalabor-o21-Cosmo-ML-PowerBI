# AutoML dokumentáció

A kutatást a Power BI platform megismerésével kezdtem. Az első feladataim közé tartozott, hogy utánanézzek, pontosan milyen szolgáltatásokra is képes a szoftver, milyen licenszekkel lehet dolgozni. Ehhez megfelelő dokumentációt a Power BI-t fejlesztő cég, a Microsoft oldalán találtam. Mivel dolgozatunk témája a Power BI integrációs lehetőségei a Machine Learning-gel, ezért természetesen a Machine Learning fogalmának, illetve az ahhoz kapcsolódó tudásanyagnak is utána kellett néznem, amelyet az IBM weboldaláról elérhető dokumentumok segítségével tettem meg, hiszen ott nagyszerű összegzést kapunk a témáról.
A kezdeti, információgyűjtő fázis után közösen meghoztuk a döntést arról, hogy a kutatás milyen irányokba mozduljon el, milyen lehetőségeket vizsgáljunk meg és milyen mélységben. Többféle Machine Learning technológiát is lehet alkalmazni a Power BI-ban, viszont az én feladatom a Power BI Service AutoML szolgáltatásának kutatása volt. A számomra szükséges szolgáltatásokhoz premium licenszet kellett igényelnem, amit a COSMO CONSULT egy ideiglenes tesztfelhasználóval a rendelkezésemre bocsátott. A cégtől kapott tenanton alapból a pro licensz elérhető, de lehetőség van 60 napra Prémium próbaverziót is használni.

Milyen témákat kerülnek majd elő:

- Bináris osztályozás
     - Környezet kialakítása
          - Munkaterület létrehozása
          - Követelmények
     - Adatok előkészítése
          - Adatfolyam létrehozása
          - Megfelelő adatok kiválasztása
          - Adatok importálása Adatfolyamba
          - Adatok transzformálása
     - Modellezés
          - Követelmények
          - Predikciós oszlop kiválasztása
          - Modell kiválasztása és konfigurálása
          - Tanuláshoz szükséges attribútumok kiválasztása
          - Modell tanulási idejének meghatározása
          - Tanult modell teljesítménye
          - Tanult modell alkalmazása
          - Végleges adatfolyam
     - Vizualizáció
          - Adatok elérése
          - Modell kimenete
          - Vizualizáció készítése
- Regresszió, idősoros előrejelzés
     - AutoML regresszió
     - Beépített idősoros előrejelzés
     - Adat előkészítése
          - Adatsor kiválasztása
          - Tanuláshoz és teszteléshez adatsor összeállítása
     - Vizualizáció
          - Táblák kombinálása
          - Adatok megjelenítése különböző régió alapján
          - Táblák kapcsolatának kialakítása
          - Predikció frissíthetősége
- Összesítés
     - Power BI + AutoML előnyök
     - Power BI + AutoML hátrányok

BINARY CLASSIFICATION

Környezet kialakítása

- Munkaterület létrehozása
- Követelmények

A számunkra legfontosabb szolgáltatása, az AutoML, csak az applikáció felhőszolgáltatásának felületén érhető el, a Power BI Serviceben. Ott létre kell hozni egy úgynevezett Workspacet, ahol a csapattagok kollaboráltan tudnak dolgozni, valamint különböző jelentéseket képesek megosztani egymással.

<p align="center">
<img src="https://drive.google.com/uc?id=16KKKB16KA1K_LQSWMuMQIci50PnAUrqc" width="80%" alt="" />
</p>

A Workspace létrehozásakor meg kell adni, hogy Premium Per User licensz módot használjon, mivel az AutoML Prémium szolgáltatásnak minősül.

<p align="center">
<img src="https://drive.google.com/uc?id=1J-XXKrReQd83754IUpIF8nhLpKVf1ron" width="80%" alt="" />
</p>

Adatok előkészítése

Adatfolyam létrehozása
Megfelelő adatok kiválasztása
Adatok importálása az Adatfolyamba
Adatok transzformálása

Az általunk készített Workspace-ben létre kell hozni egy új Dataflow-t, ugyanis az AutoML-hez szükséges adatoknak mind a tárolása, mind az előkészítése ott történik. Dataflow létrehozása csak Serviceben lehetséges, tehát semmilyen adatelőkészítést nem tudunk végrehajtani a Desktop-on, hogy az AutoML dolgozni tudjon vele. Amennyiben Desktopon töltjük be a fájlokat, akkor csak Dataset jön létre, viszont a modellezéshez Dataflow-ra van szükségünk. A Dataset azért sem lenne megoldás, mivel a Service nem támogat adat transzformációt, ezzel szemben a Dataflow-ok esetében igen.
Miután létrehozásra került a Dataflow, egy számunkra megfelelő adatsort kellett keresni, amelyen dolgozni lehet. A későbbiekben a használt adatsorra Dataset-ként fogok hivatkozni. Többféle Dataset-et tekintettem meg, végül kiejtettem azokat, amik különböző okokból nem voltak alkalmasak a megfelelő predikciók elkészítéséhez. A Dataseteket olyan szempontok szerint válogattuk ki, mint például, hogy, mennyi adat állt rendelkezésre, észlelhető valamilyen mintázat, periodikusság az adatsorban, megfelelő számú attribútum áll-e rendelkezésre és az attribútumok között észlelhetőek-e kapcsolatok. Így esett a választásom kerékpár eladásokat tároló adatforrás mellett.
Dataflow-ba új tábla, entitás hozzáadásával lehet az adatokat tárolni. Egy Dataflow-hoz több tábla is hozzáadható. Új tábla betöltése nagyon sokféle forrásból származhat.
Úgy véltem, hogy elsősorban a számítógépről töltöm fel a fájlt, mivel ez is kielégítette a kezdeti igényeket, és ki tudtam próbálni, hogy az milyen módon történik. Ekkor a fájl mindig a kapott Microsoftos tenant OneDrive for Business fiókjába töltődik fel. Ehhez a felhasználó számára a OneDrive for Business inicializációja szükséges. A OneDrive-os Data Source egyszerűnek bizonyult, és azért is volt megfelelő, hiszen OneDrive felületén egyből lehet módosítani a fájlokon, hogy teszteljük miként reagál a Dataflow.

<p align="center">
<img src="https://drive.google.com/uc?id=1uSDKEJvsm-VeXgRpGT16i4lx0HGlebEm" width="80%" alt="" />
</p>

<p align="center">
<img src="https://drive.google.com/uc?id=1zWfdodJzTJ8OJFURf8y1r5EtK9Ybijn5" width="80%" alt="" />
</p>

Tábla betöltése a forrásból történhet egyből, vagy valamilyen átalakítás után. Ezt nevezzük a Extract, Transfer, Load (ETL) folyamatnak. A transzformálás a Power Query nevű Tool-ban hajtható végre. Ez tűnt az egyik legnehezebb feladatnak, hiszen a tábla “kinyerése” után voltak oszlopok, amelyek teljesen más adattípusként voltak tárolva, mint amire nekem szükségem lett volna. Emellett számomra kissé frusztráló volt az is, hogy a Service a Desktop-hoz képest jóval lassabbnak bizonyult úgy is, hogy Prémium felhasználóknak nagyobb teljesítmény van kiosztva.

<p align="center">
<img src="https://drive.google.com/uc?id=1cQRWyWSAhWIsopNUL4DlT0PaY6WHuGV7" width="80%" alt="" />
</p>

<p align="center">
<img src="https://drive.google.com/uc?id=1engwqXsKIkCB1i6SOvOsQAa8pRtDG7Vc" width="80%" alt="" />
</p>

Probléma adódott annál az esetnél, amikor több Data Source-ból kerültek be táblák. Erre a Power BI fórumán találtam megoldást, ahol egy másik illető is ugyanebbe a hibába ütközött. Ilyenkor a Power Queryben a Project Setting-nél egy beállítást kellett kikapcsolni, amely meggátolta, hogy káros tartalom kerüljön a Dataflow-ba.

Modellezés

Követelmények
Predikciós oszlop kiválasztása
Modell kiválasztása és konfigurálása
Tanuláshoz szükséges attribútumok kiválasztása
Modell tanulási idejének meghatározása
Tanult modell teljesítménye
Tanult modell alkalmazása
Végleges adatfolyam

Az AutoML modell létrehozása (ahogy feljebb említésre került) csak Service-ben, Prémium licesszel, Prémium Workspace-szel, azon belül pedig Dataflow-ban lehetséges. A Machine Learning során szükség van olyan Training Dataset-re, amelyen a modellt betanítatjuk. Egy már általunk készített táblán van erre lehetőségünk. Dataflow-ban vagy a Machine Learning fülre kattintva lehet elkezdeni az AutoML folyamatát, vagy pedig egy táblát kijelölve alakítjuk ki a modellt.
Elsősorban a Classification (osztályozás) modellt szeretném bemutatni, annak elkészítését, alkalmazását, valamint eredményének kiértékelését, megjelenítését.

1. lépés: Első lépésként meg kell nevezni a Training Dataset-ben azt az oszlopot, amelyre akarjuk, hogy a Prediction, vagyis az előrejelzés elkészüljön.

<p align="center">
<img src="https://drive.google.com/uc?id=1k_BWhIE-nB2ES7-dIh3-is-E0Pzo_4J-" width="80%" alt="" />
</p>

2. lépés: Második lépés az, hogy kiválasztjuk azt a modellt, amit az AutoML használni fog. Ez általában automatikus felismeréssel történik, de abban az esetben, ha nem tudja vagy rosszul ismeri fel, akkor manuálisan is meghatározhatjuk a számunkra megfelelőt. A Power BI AutoML szolgáltatása, mint ahogyan a későbbi képen is látható, kevés modellezési módszert ismer. Az általam választott Training Dataset miatt Binary Prediction modell volt szükséges, hiszen arra voltunk kíváncsiak, hogy az illető bizonyos attribútumoknál vevő lesz-e vagy sem.

<p align="center">
<img src="https://drive.google.com/uc?id=1NC6KvabyhzOG-xiVWEJ10EeMMkzsAW0P" width="80%" alt="" />
</p>

<p align="center">
<img src="https://drive.google.com/uc?id=1GGlQLR6OIjh8JK2Zd_1jw-lFNruB6DW-" width="80%" alt="" />
</p>

3. lépés: Harmadik lépésben meghatározásra kerülnek azok az oszlopok, amelyeken a modell tanulása végbemegy. Előző lépéshez hasonlóan, itt is elsőként automatikus felismerés történik, habár egy kis segítséget is kapunk, hogy például az Outcome (jelen esetben BikeBuyer) oszlop más oszloppal kevésbé van függő viszonyban. Természetesen manuálisan itt is nyugodtan kijelölhetjük a számunkra tetsző oszlopot, amelyet vizsgálni akarunk.

<p align="center">
<img src="https://drive.google.com/uc?id=1ZN-d7EHpvPFcAEt42DMVcR0sKE7H3J4r" width="80%" alt="" />
</p>

4. lépés: Legutoljára a modell elnevezése, illetve a tanulás idejének meghatározása maradt. Oldal alján olvasható, miszerint az adatok 80%-án történik a tanulás, és a maradék 20%-on pedig a modell tesztelése.

<p align="center">
<img src="https://drive.google.com/uc?id=1mCEdUWavcMtNKhHymX3MdTJPOTLiOpI" width="80%" alt="" />
</p>

Miután a modell Train-elése végigment, lehetőség van megtekinteni a tanulásról szóló jelentést a Dataflow-ban, a Machine Learning models fülön. Látható, hogy a Train-elt modellnek a pontossága 84%-os. Ezután lehetőség van módosítani, vagy pedig alkalmazni a modellt egy másik Dataset-en. Ilyenkor megadhatjuk, hogy mi legyen annak az oszlopnak a neve, ahol a Prediction értékek kiértékelődnek, valamint mi legyen az a határ, amely fölött ez megtörténjen.

<p align="center">
<img src="https://drive.google.com/uc?id=1KkxbtdWT8hhnd9mkqtOttElbeKFhJPqv" width="80%" alt="" />
</p>

<p align="center">
<img src="https://drive.google.com/uc?id=1DdaxuKcZBNkZ6mw77Bi1retHrOarPtmu" width="80%" alt="" />
</p>

<p align="center">
<img src="https://drive.google.com/uc?id=1kilu9zhsgyi2M7NLQYg9tKPHJNqGO2St" width="80%" alt="" />
</p>

Végezetül az alábbi képen látható módon néz ki a Dataflow. Modell traineléséhez tartozik a “bike_buyer Training Data”, és a “bike_buyer Testing Data”. A táblára alkalmazott modell az “enriched” nevezetű táblákban található, amely már a Prediction értékeket tartalmazza.

<p align="center">
<img src="https://drive.google.com/uc?id=1N6CvVBPCACje9SoOiVf4T8dOWV38Sq6g" width="80%" alt="" />
</p>

Vizualizáció

Adatok elérése
Modell kimenete
Vizualizáció készítése

Az elkészült Prediction táblából nem tudunk egyből Report-ot készíteni Service-ben. Először mindenképpen Desktop-ba kell importálni, majd utána Publish-olhatjuk azt Service-be.
A Get Data gombra kattintva láthatjuk miféle Data Source-okat használhatunk, ahonnan a fájlt el akarjuk érni. Mivel nekem a szükséges adatok Dataflow-ban van, ezért a Power BI Data Flow-ra kattintva látható, hogy milyen Dataflow-k szerepelnek a Service-ben. Majd kiválasztható, hogy mely táblákra is lesz szükség, amiket betöltés helyett akár transzformálhatunk is.

<p align="center">
<img src="https://drive.google.com/uc?id=1_aWm8OuOSHseynhRte70feV363JTh68y" width="80%" alt="" />
</p>

<p align="center">
<img src="https://drive.google.com/uc?id=1nDvRtpPLKe1i5D1chipqxa3HL-MD9SGx" width="80%" alt="" />
</p>

Ismét a Service-hez hasonlóan a transzformáció Power Query-ben történik, ahol akár ugyanazokat a lépéseket is végrehajthatjuk. A Prediction Explanation oszlopban láthatóak az értékek, amelyek minden attribútumhoz hozzárendelésre kerültek és amelyek a Prediction kimenetelét meghatározták. Ezeket az értékeket összeszámolva született meg a Prediction Score oszlop, és a modell alkalmazása során meghatározott küszöbindex szerint, az Outcome oszlopban kiértékelésre kerültek. Tehát az Outcome oszlop lesz az, amire szükség van, amely a végleges kimenetet tartalmazza.

<p align="center">
<img src="https://drive.google.com/uc?id=1uRLVak0mQeZ8LMkk6tnjzAuu4JJBaNPg" width="80%" alt="" />
</p>

Láthatóság szempontjából a Visualizations-öknél egy kördiagramot választottam, amihez a jobb oldalon található táblákból választottam értéket. A vizualizációknál lehet az értékeket aggregáltan kezelni, tehát mindenféle összesített kimutatás végezni velük. Ennél az esetnél a Count függvény-re van szükség, hogy pontosan mennyi volt a modell kimeneteleinek a darabszáma.

<p align="center">
<img src="https://drive.google.com/uc?id=1LzBHpPg6aRbxcMoIgl3h91jH3G7hZ-hS" width="80%" alt="" />
</p>

REGRESSION, FORECASTING

AutoML regresszió
Beépített előrejelzés

Mivel kutatásom célja az AutoML lehetőségeinek feltárása volt, így minden modellt meg kellett vizsgálnom, amelyet a Power BI nyújtani tud. Előzőleg a Classification, mint modell elkészítése, kiértékelése, eredményének megjelenítése történt meg. Emellett egy másik modell, a Regression (regresszió) használatára is lehetőség van. Mivel hasonlóan mennek itt is végbe a folyamatok, mint a Classification-nél, ezért csak az eltérésekre szeretnék kitérni. A Regression modellel az idősoros előrejelzés lehetőségét vizsgáltam.
A Forecasting alkalmazásához az AutoML mellett, lehetőség van a Power BI Desktop funkcióját is használni. Mindenképpen vonaldiagram vizualizációt kell használni és olyan táblákat, amik valamilyen idősoros adatokat tartalmaznak. Ha a feltételek teljesülnek, akkor a vizualizációra, a Forecasting menüpontnál Prediction-t tudunk kimutatni. Ennél a Desktop-os lehetőségnél beállíthatjuk, hogy mekkora időszakot hagyjon figyelmen kívül, valamint hány időszakonként keressen benne valamilyen mintát.

Adat előkészítése

Adatsor kiválasztása
Tanuláshoz és teszteléshez adatsor összeállítása

Ehhez mindenképpen szükség volt egy olyan Dataset-re, amely tárol valamilyen oszlopot, dátumokkal, illetve ahhoz tartozó értékekkel. Ezekhez az igényekhez egy olyan adatforrásra volt szükségem, amely tartalmaz valamilyen dátummal rendelkező oszlopot és ahhoz tartozó értékoszlopot, amikre előrejelzést készíthetek.
A forrásfájlból manuálisan kellett létrehoznom Train és egy Test adatsort. A Train adatsornál pár hónapot ki kellett vennem, ugyanis az ellenőrzéshez az utóbbi pár hónapból jó, ha van valós, illetve előrejelzett adat is. Így jól látható mennyire is tér el a modell által kiértékelt Prediction. A Test adatok esetében pedig további hónapokat kellett hozzáadnom, null értékekkel.

Modellezés

A modell létrehozásakor a Classification-nel (osztályok elnevezése) ellentétben, itt nem kell plusz dolgot beállítani a Regression-nel kapcsolatban, csak annyit, hogy mi legyen az oszlop amire a Prediction elkészüljön, valamint melyik oszlopokat vizsgálja. A modell taníttatása az általam készített Train adatsoron, míg a betanult modell alkalmazása a Test adatsoron történt.

<p align="center">
<img src="https://drive.google.com/uc?id=11OzUYqk0sbK7zSUnWpn7G6hfGFZ_a4x1" width="80%" alt="" />
</p>

<p align="center">
<img src="https://drive.google.com/uc?id=10pcbLOCuFc4cdaq9E4kKPDNqTpVapKkw" width="80%" alt="" />
</p>

<p align="center">
<img src="https://drive.google.com/uc?id=1Ktqd1E1EzDU21JPkBiMDciF69abrjeVI" width="80%" alt="" />
</p>

Vizualizáció

Táblák kombinálása
Adatok megjelenítése különböző régió alapján
Táblák kapcsolatának kialakítása
Predikció frissíthetősége

A korábban említett Test és Source (eredeti, amiből törölve lett a Train adatsorhoz) adatforrásokat Append-elni (kombinálni) kell, hiszen így lehetséges a valós és az előrejelzett adatokat egyszerre megjeleníteni egy vizualizáción.

<p align="center">
<img src="https://drive.google.com/uc?id=1HSiQ4tfmxA-k2IIJl9zC8l0Pc1sn20OC" width="80%" alt="" />
</p>

<p align="center">
<img src="https://drive.google.com/uc?id=12bXGgdC_eggnVMCWbTvJjrgcc4Kq-ZFE" width="80%" alt="" />
</p>

Mivel a Service Power Query-ben transzformált Dataset más régió alapján jeleníti meg az adatot, mint a Desktop, így a szükséges oszlop típusát meg megváltoztatni Locale szerint. Jelen esetben a Service-ben az adatot English (United Kingdom), Desktop-on Hungarian alapján tárolja, jeleníti meg.

<p align="center">
<img src="https://drive.google.com/uc?id=1Cd9na0RMIXjUyh_zEyo-koMgQ9kBJ0tZ" width="80%" alt="" />
</p>

Az adatok megfelelő megjelenítéséhez szükséges a különböző táblák kapcsolatának a kialakítása, amely a valós és előrejelzett összekapcsolásáért is felel.

<p align="center">
<img src="https://drive.google.com/uc?id=17OOjmAqIuWxLSr5OiJG98kogOfy0ISUX" width="80%" alt="" />
</p>

<p align="center">
<img src="https://drive.google.com/uc?id=1ZvD1lmGj8RbVy6AmUyE2kkR7K9dXuPjf" width="80%" alt="" />
</p>

Miután sikeresen létrehoztam a Prediction-t tartalmazó Report-ot, jó lenne egy olyan lehetőség is, mihelyt változik a Dataset, abban az esetben újból fusson le a modellezés és jöjjön létre egy új Prediction. Több lépésben közelítettem meg ezt a problémát. Elsősorban megnéztem, hogy amennyiben a Dataflow Power Query-ben változtattam az adatsoron, úgy sikeresen lefutott ismét az AutoML magától, és a Report Refresh-elése után az új Prediction látható volt. Majd megpróbáltam azt a lehetőséget is, melynél ha One Drive-on frissítem a fájlt, akkor a Dataflow frissüljön le, vele együtt pedig AutoML is lefusson ismét. Többszöri próbálkozás után, manuális Refresh-sel, valamint Scheduled Refresh-sel (beállítani egy időpontot, hogy mikor frissüljön) sem sikerült az AutoML-t magától lefuttatni, hanem csak a Dataflow frissült. A Report-ban látható volt az eredeti értékeknél a változás, viszont a Prediction-nél nem. A probléma vizsgálása közben az AutoML, Dataflow integrációjának dokumentációját is tanulmányoztam, viszont az ott leírtak alapján, a Dataflow frissítésének magával kéne hordizonia az AutoML újboli lefutását is, viszont ez az én esetemben nem történt meg.

ÖSSZESÍTÉS

Kutatásom során vegyes vélemény alakult meg bennem, hiszen a Power BI integrációja az AutoML-lel előnyöket, valamint hátrányokat is tartalmaz. Egy felsorolással szeretném szemléltetni ezeket.

Power BI + AutoML előnyök:
Elegendő az alapvető Machine Learning és statisztikai tudás
Nem igényel kódolást
Modellezés cross-platform módon történhet
A Training-ről készült Report statisztikái jól szemlélteti a modell teljesítményét
A Machine Learning model menthető, ezáltal alkalmazható más Dataset-eken is

Power BI + AutoML hátrányok:
Csak Service-ben alkalmazható
Service-ben kevesebb adatforrási lehetőség áll rendelkezésre, mint Desktop-ban
Service: 53 darab (megszámlálva)
Desktop: 160 darab (megszámlálva)
A Service-ben (modellezéshez szükséges) adattranszformáció lassabb, mint Desktop-on
Premium licensz nélkülözhetetlen a használathoz
Adatkonverziós problémák léphetnek fel
Modellezés testreszabhatósága korlátozott
Nem frissül magától a modell az adatforrás frissítése után
Report készítése Desktop-on történik (nem cross-platform, hiszen kell Windows)

TODO:

FORECAST DESKTOP KÉP
TOVÁBBI FORRÁS LINKEK

Adatforrások:

- forecasting: https://www.kaggle.com/rakannimer/air-passengers

- binary prediction: https://github.com/BlueGranite/AI-in-a-Day/tree/master/AutoML

Tudásanyag források:

- machine learning:
  https://www.ibm.com/cloud/learn/machine-learning

- automl:
  https://docs.microsoft.com/en-us/power-bi/connect-data/service-tutorial-build-machine-learning-model

- dataflow + dataset:
  https://radacad.com/dataflow-vs-dataset-what-are-the-differences-of-these-two-power-bi-components

- one drive:
  https://docs.microsoft.com/en-us/power-bi/collaborate-share/service-connect-to-files-in-app-workspace-onedrive-for-business

- regression model:
  https://community.powerbi.com/t5/Community-Blog/Building-a-Regression-Model-with-zero-code-in-PowerBI/ba-p/663582

- forecasting:
  https://pawarbi.github.io/blog/forecasting/python/powerbi/forecasting_in_powerbi/2020/04/24/timeseries-powerbi.html#Power-BI-Forecast

- dataflow + data prep:
  https://powerbi.microsoft.com/en-us/blog/introducing-power-bi-data-prep-wtih-dataflows/

- dataflow + ml + refresh:
  https://docs.microsoft.com/en-us/power-bi/transform-model/dataflows/dataflows-machine-learning-integration

- firewall:
  https://community.powerbi.com/t5/Service/Information-is-needed-in-order-to-combine-data/m-p/574058

- report from dataflow:
  https://community.powerbi.com/t5/Service/Create-Dataset-from-Dataflow-FROM-WITHIN-THE-SERVICE/m-p/1099589

- locale type:
  https://support.microsoft.com/en-us/office/set-a-locale-or-region-for-data-power-query-d42b9390-1fff-413f-8120-d7df0ced20b9
