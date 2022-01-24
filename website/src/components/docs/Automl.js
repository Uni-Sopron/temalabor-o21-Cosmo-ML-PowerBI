

const Automl = () => {
    return (
        <div>
            <h1 id="automl-dokumentáció">AutoML dokumentáció</h1>
            A kutatást a Power BI platform megismerésével kezdtem. Az első feladataim közé tartozott, hogy utánanézzek, pontosan milyen szolgáltatásokra is képes a szoftver, milyen licenszekkel lehet dolgozni. Ehhez megfelelő dokumentációt a Power BI-t fejlesztő cég, a Microsoft oldalán találtam. Mivel dolgozatunk témája a Power BI integrációs lehetőségei a Machine Learning-gel, ezért természetesen a Machine Learning fogalmának, illetve az ahhoz kapcsolódó tudásanyagnak is utána kellett néznem, amelyet az IBM weboldaláról elérhető dokumentumok segítségével tettem meg, hiszen ott nagyszerű összegzést kapunk a témáról. A kezdeti, információgyűjtő fázis után közösen meghoztuk a döntést arról, hogy a kutatás milyen irányokba mozduljon el, milyen lehetőségeket vizsgáljunk meg és milyen mélységben. Többféle Machine Learning technológiát is lehet alkalmazni a Power BI-ban, viszont az én feladatom a Power BI Service AutoML szolgáltatásának kutatása volt. A számomra szükséges szolgáltatásokhoz premium licenszet kellett igényelnem, amit a COSMO CONSULT egy ideiglenes tesztfelhasználóval a rendelkezésemre bocsátott. A cégtől kapott tenanton alapból a pro licensz elérhető, de lehetőség van 60 napra Prémium próbaverziót is használni.
            Milyen témákat kerülnek majd elő:
            <ul>
                <li>Bináris osztályozás
                    <ul>
                        <li>Környezet kialakítása
                            <ul>
                                <li>Munkaterület létrehozása</li>
                                <li>Követelmények</li>
                            </ul></li>
                        <li>Adatok előkészítése
                            <ul>
                                <li>Adatfolyam létrehozása</li>
                                <li>Megfelelő adatok kiválasztása</li>
                                <li>Adatok importálása Adatfolyamba</li>
                                <li>Adatok transzformálása</li>
                            </ul></li>
                        <li>Modellezés
                            <ul>
                                <li>Követelmények</li>
                                <li>Predikciós oszlop kiválasztása</li>
                                <li>Modell kiválasztása és konfigurálása</li>
                                <li>Tanuláshoz szükséges attribútumok kiválasztása</li>
                                <li>Modell tanulási idejének meghatározása</li>
                                <li>Tanult modell teljesítménye</li>
                                <li>Tanult modell alkalmazása</li>
                                <li>Végleges adatfolyam</li>
                            </ul></li>
                        <li>Vizualizáció
                            <ul>
                                <li>Adatok elérése</li>
                                <li>Modell kimenete</li>
                                <li>Vizualizáció készítése</li>
                            </ul></li>
                    </ul></li>
                <li>Regresszió, idősoros előrejelzés
                    <ul>
                        <li>AutoML regresszió</li>
                        <li>Beépített idősoros előrejelzés</li>
                        <li>Adat előkészítése
                            <ul>
                                <li>Adatsor kiválasztása</li>
                                <li>Tanuláshoz és teszteléshez adatsor összeállítása</li>
                            </ul></li>
                        <li>Modellezés</li>
                        <li>Vizualizáció
                            <ul>
                                <li>Táblák kombinálása</li>
                                <li>Adatok megjelenítése különböző régió alapján</li>
                                <li>Táblák kapcsolatának kialakítása</li>
                                <li>Predikció frissíthetősége</li>
                            </ul></li>
                    </ul></li>
                <li>Összesítés
                    <ul>
                        <li>Power BI + AutoML előnyök</li>
                        <li>Power BI + AutoML hátrányok</li>
                    </ul></li>
            </ul>
            <h3>BINARY CLASSIFICATION</h3>
            <h4>Környezet kialakítása</h4>
            <ul>
                <li>Munkaterület létrehozása</li>
                <li>Követelmények</li>
            </ul>
            A számunkra legfontosabb szolgáltatása, az AutoML, csak az applikáció felhőszolgáltatásának felületén érhető el, a Power BI Serviceben. Ott létre kell hozni egy úgynevezett Workspacet, ahol a csapattagok kollaboráltan tudnak dolgozni, valamint különböző jelentéseket képesek megosztani egymással.

            <div align="center">
                <img src={require("../../images/automl_doc/workspace.png")} width="80%" alt="" />
            </div>

            A Workspace létrehozásakor meg kell adni, hogy Premium Per User licensz módot használjon, mivel az AutoML Prémium szolgáltatásnak minősül.

            <div align="center">
                <img src={require("../../images/automl_doc/premium_workspace.png")} width="80%" alt="" />
            </div>

            <h4>Adatok előkészítése</h4>
            <ul>
                <li>Adatfolyam létrehozása</li>
                <li>Megfelelő adatok kiválasztása</li>
                <li>Adatok importálása az Adatfolyamba</li>
                <li>Adatok transzformálása</li>
            </ul>

            Az általunk készített Workspace-ben létre kell hozni egy új Dataflow-t, ugyanis az AutoML-hez szükséges adatoknak mind a tárolása, mind az előkészítése ott történik. Dataflow létrehozása csak Serviceben lehetséges, tehát semmilyen adatelőkészítést nem tudunk végrehajtani a Desktop-on, hogy az AutoML dolgozni tudjon vele. Amennyiben Desktopon töltjük be a fájlokat, akkor csak Dataset jön létre, viszont a modellezéshez Dataflow-ra van szükségünk. A Dataset azért sem lenne megoldás, mivel a Service nem támogat adat transzformációt, ezzel szemben a Dataflow-ok esetében igen. Miután létrehozásra került a Dataflow, egy számunkra megfelelő adatsort kellett keresni, amelyen dolgozni lehet. A későbbiekben a használt adatsorra Dataset-ként fogok hivatkozni. Többféle Dataset-et tekintettem meg, végül kiejtettem azokat, amik különböző okokból nem voltak alkalmasak a megfelelő predikciók elkészítéséhez. A Dataseteket olyan szempontok szerint válogattuk ki, mint például, hogy, mennyi adat állt rendelkezésre, észlelhető valamilyen mintázat, periodikusság az adatsorban, megfelelő számú attribútum áll-e rendelkezésre és az attribútumok között észlelhetőek-e kapcsolatok. Így esett a választásom kerékpár eladásokat tároló adatforrás mellett. Dataflow-ba új tábla, entitás hozzáadásával lehet az adatokat tárolni. Egy Dataflow-hoz több tábla is hozzáadható. Új tábla betöltése nagyon sokféle forrásból származhat. Úgy véltem, hogy elsősorban a számítógépről töltöm fel a fájlt, mivel ez is kielégítette a kezdeti igényeket, és ki tudtam próbálni, hogy az milyen módon történik. Ekkor a fájl mindig a kapott Microsoftos tenant OneDrive for Business fiókjába töltődik fel. Ehhez a felhasználó számára a OneDrive for Business inicializációja szükséges. A OneDrive-os Data Source egyszerűnek bizonyult, és azért is volt megfelelő, hiszen OneDrive felületén egyből lehet módosítani a fájlokon, hogy teszteljük miként reagál a Dataflow.

            <div align="center">
                <img src={require("../../images/automl_doc/data_sourceok_service.png")} width="80%" alt="" />
            </div>


            <div align="center">
                <img src={require("../../images/automl_doc/fajl_feltoltes.png")} width="80%" alt="" />
            </div>

            Tábla betöltése a forrásból történhet egyből, vagy valamilyen átalakítás után. Ezt nevezzük a Extract, Transfer, Load (ETL) folyamatnak. A transzformálás a Power Query nevű Tool-ban hajtható végre. Ez tűnt az egyik legnehezebb feladatnak, hiszen a tábla “kinyerése” után voltak oszlopok, amelyek teljesen más adattípusként voltak tárolva, mint amire nekem szükségem lett volna. Emellett számomra kissé frusztráló volt az is, hogy a Service a Desktop-hoz képest jóval lassabbnak bizonyult úgy is, hogy Prémium felhasználóknak nagyobb teljesítmény van kiosztva.

            <div align="center">
                <img src={require("../../images/automl_doc/adat_import.png")} width="80%" alt="" />
            </div>


            <div align="center">
                <img src={require("../../images/automl_doc/adatelokeszites.png")} width="80%" alt="" />
            </div>

            Probléma adódott annál az esetnél, amikor több Data Source-ból kerültek be táblák. Erre a Power BI fórumán találtam megoldást, ahol egy másik illető is ugyanebbe a hibába ütközött. Ilyenkor a Power Queryben a Project Setting-nél egy beállítást kellett kikapcsolni, amely meggátolta, hogy káros tartalom kerüljön a Dataflow-ba.
            <h4>Modellezés</h4>
            <ul>
                <li>Követelmények</li>
                <li>Predikciós oszlop kiválasztása</li>
                <li>Modell kiválasztása és konfigurálása</li>
                <li>Tanuláshoz szükséges attribútumok kiválasztása</li>
                <li>Modell tanulási idejének meghatározása</li>
                <li>Tanult modell teljesítménye</li>
                <li>Tanult modell alkalmazása</li>
                <li>Végleges adatfolyam</li>
            </ul>

            Az AutoML modell létrehozása (ahogy feljebb említésre került) csak Service-ben, Prémium licesszel, Prémium Workspace-szel, azon belül pedig Dataflow-ban lehetséges. A Machine Learning során szükség van olyan Training Dataset-re, amelyen a modellt betanítatjuk. Egy már általunk készített táblán van erre lehetőségünk. Dataflow-ban vagy a Machine Learning fülre kattintva lehet elkezdeni az AutoML folyamatát, vagy pedig egy táblát kijelölve alakítjuk ki a modellt. Elsősorban a Classification (osztályozás) modellt szeretném bemutatni, annak elkészítését, alkalmazását, valamint eredményének kiértékelését, megjelenítését.
            <ol type="1">
                <li>lépés: Első lépésként meg kell nevezni a Training Dataset-ben azt az oszlopot, amelyre akarjuk, hogy a Prediction, vagyis az előrejelzés elkészüljön.</li>
            </ol>

            <div align="center">
                <img src={require("../../images/automl_doc/modell_kimenet.png")} width="80%" alt="" />
            </div>

            <ol start="2" type="1">
                <li>lépés: Második lépés az, hogy kiválasztjuk azt a modellt, amit az AutoML használni fog. Ez általában automatikus felismeréssel történik, de abban az esetben, ha nem tudja vagy rosszul ismeri fel, akkor manuálisan is meghatározhatjuk a számunkra megfelelőt. A Power BI AutoML szolgáltatása, mint ahogyan a későbbi képen is látható, kevés modellezési módszert ismer. Az általam választott Training Dataset miatt Binary Prediction modell volt szükséges, hiszen arra voltunk kíváncsiak, hogy az illető bizonyos attribútumoknál vevő lesz-e vagy sem.</li>
            </ol>

            <div align="center">
                <img src={require("../../images/automl_doc/modellek.png")} width="80%" alt="" />
            </div>

            <div align="center">
                <img src={require("../../images/automl_doc/classification_tanulas.png")} width="80%" alt="" />
            </div>

            <ol start="3" type="1">
                <li>lépés: Harmadik lépésben meghatározásra kerülnek azok az oszlopok, amelyeken a modell tanulása végbemegy. Előző lépéshez hasonlóan, itt is elsőként automatikus felismerés történik, habár egy kis segítséget is kapunk, hogy például az Outcome (jelen esetben BikeBuyer) oszlop más oszloppal kevésbé van függő viszonyban. Természetesen manuálisan itt is nyugodtan kijelölhetjük a számunkra tetsző oszlopot, amelyet vizsgálni akarunk.</li>
            </ol>

            <div align="center">
                <img src={require("../../images/automl_doc/modell_tanulas.png")} width="80%" alt="" />
            </div>

            <ol start="4" type="1">
                <li>lépés: Legutoljára a modell elnevezése, illetve a tanulás idejének meghatározása maradt. Oldal alján olvasható, miszerint az adatok 80%-án történik a tanulás, és a maradék 20%-on pedig a modell tesztelése.</li>
            </ol>

            <div align="center">
                <img src={require("../../images/automl_doc/training_ido.png")} width="80%" alt="" />
            </div>

            Miután a modell Train-elése végigment, lehetőség van megtekinteni a tanulásról szóló jelentést a Dataflow-ban, a Machine Learning models fülön. Látható, hogy a Train-elt modellnek a pontossága 84%-os. Ezután lehetőség van módosítani, vagy pedig alkalmazni a modellt egy másik Dataset-en. Ilyenkor megadhatjuk, hogy mi legyen annak az oszlopnak a neve, ahol a Prediction értékek kiértékelődnek, valamint mi legyen az a határ, amely fölött ez megtörténjen.

            <div align="center">
                <img src={require("../../images/automl_doc/befejezodott_modell.png")} width="80%" alt="" />
            </div>


            <div align="center">
                <img src={require("../../images/automl_doc/modell_teljesitmeny.png")} width="80%" alt="" />
            </div>


            <div align="center">
                <img src={require("../../images/automl_doc/modell_alkalmazas.png")} width="80%" alt="" />
            </div>

            Végezetül az alábbi képen látható módon néz ki a Dataflow. Modell traineléséhez tartozik a “bike_buyer Training Data”, és a “bike_buyer Testing Data”. A táblára alkalmazott modell az “enriched” nevezetű táblákban található, amely már a Prediction értékeket tartalmazza.

            <div align="center">
                <img src={require("../../images/automl_doc/dataflow.png")} width="80%" alt="" />
            </div>

            <h4>Vizualizáció</h4>
            <ul>
                <li>Adatok elérése</li>
                <li>Modell kimenete</li>
                <li>Vizualizáció készítése</li>
            </ul>

            Az elkészült Prediction táblából nem tudunk egyből Report-ot készíteni Service-ben. Először mindenképpen Desktop-ba kell importálni, majd utána Publish-olhatjuk azt Service-be. A Get Data gombra kattintva láthatjuk miféle Data Source-okat használhatunk, ahonnan a fájlt el akarjuk érni. Mivel nekem a szükséges adatok Dataflow-ban van, ezért a Power BI Data Flow-ra kattintva látható, hogy milyen Dataflow-k szerepelnek a Service-ben. Majd kiválasztható, hogy mely táblákra is lesz szükség, amiket betöltés helyett akár transzformálhatunk is.

            <div align="center">
                <img src={require("../../images/automl_doc/data_sourceok_desktop.png")} width="80%" alt="" />
            </div>


            <div align="center">
                <img src={require("../../images/automl_doc/modell_import.png")} width="80%" alt="" />
            </div>

            Ismét a Service-hez hasonlóan a transzformáció Power Query-ben történik, ahol akár ugyanazokat a lépéseket is végrehajthatjuk. A Prediction Explanation oszlopban láthatóak az értékek, amelyek minden attribútumhoz hozzárendelésre kerültek és amelyek a Prediction kimenetelét meghatározták. Ezeket az értékeket összeszámolva született meg a Prediction Score oszlop, és a modell alkalmazása során meghatározott küszöbindex szerint, az Outcome oszlopban kiértékelésre kerültek. Tehát az Outcome oszlop lesz az, amire szükség van, amely a végleges kimenetet tartalmazza.

            <div align="center">
                <img src={require("../../images/automl_doc/kiertekeles.png")} width="80%" alt="" />
            </div>

            Láthatóság szempontjából a Visualizations-öknél egy kördiagramot választottam, amihez a jobb oldalon található táblákból választottam értéket. A vizualizációknál lehet az értékeket aggregáltan kezelni, tehát mindenféle összesített kimutatás végezni velük. Ennél az esetnél a Count függvény-re van szükség, hogy pontosan mennyi volt a modell kimeneteleinek a darabszáma.

            <div align="center">
                <img src={require("../../images/automl_doc/eredmeny.png")} width="80%" alt="" />
            </div>

            <h3>REGRESSION, FORECASTING</h3>
            <ul>
                <li>AutoML regresszió</li>
                <li>Beépített előrejelzés</li>
            </ul>

            Mivel kutatásom célja az AutoML lehetőségeinek feltárása volt, így minden modellt meg kellett vizsgálnom, amelyet a Power BI nyújtani tud. Előzőleg a Classification, mint modell elkészítése, kiértékelése, eredményének megjelenítése történt meg. Emellett egy másik modell, a Regression (regresszió) használatára is lehetőség van. Mivel hasonlóan mennek itt is végbe a folyamatok, mint a Classification-nél, ezért csak az eltérésekre szeretnék kitérni. A Regression modellel az idősoros előrejelzés lehetőségét vizsgáltam. A Forecasting alkalmazásához az AutoML mellett, lehetőség van a Power BI Desktop funkcióját is használni. Mindenképpen vonaldiagram vizualizációt kell használni és olyan táblákat, amik valamilyen idősoros adatokat tartalmaznak. Ha a feltételek teljesülnek, akkor a vizualizációra, a Forecasting menüpontnál Prediction-t tudunk kimutatni. Ennél a Desktop-os lehetőségnél beállíthatjuk, hogy mekkora időszakot hagyjon figyelmen kívül, valamint hány időszakonként keressen benne valamilyen mintát.
            <h4>Adat előkészítése</h4>
            <ul>
                <li>Adatsor kiválasztása</li>
                <li>Tanuláshoz és teszteléshez adatsor összeállítása</li>
            </ul>

            Ehhez mindenképpen szükség volt egy olyan Dataset-re, amely tárol valamilyen oszlopot, dátumokkal, illetve ahhoz tartozó értékekkel. Ezekhez az igényekhez egy olyan adatforrásra volt szükségem, amely tartalmaz valamilyen dátummal rendelkező oszlopot és ahhoz tartozó értékoszlopot, amikre előrejelzést készíthetek. A forrásfájlból manuálisan kellett létrehoznom Train és egy Test adatsort. A Train adatsornál pár hónapot ki kellett vennem, ugyanis az ellenőrzéshez az utóbbi pár hónapból jó, ha van valós, illetve előrejelzett adat is. Így jól látható mennyire is tér el a modell által kiértékelt Prediction. A Test adatok esetében pedig további hónapokat kellett hozzáadnom, null értékekkel.
            <h4>Modellezés</h4>
            A modell létrehozásakor a Classification-nel (osztályok elnevezése) ellentétben, itt nem kell plusz dolgot beállítani a Regression-nel kapcsolatban, csak annyit, hogy mi legyen az oszlop amire a Prediction elkészüljön, valamint melyik oszlopokat vizsgálja. A modell taníttatása az általam készített Train adatsoron, míg a betanult modell alkalmazása a Test adatsoron történt.

            <div align="center">
                <img src={require("../../images/automl_doc/forecast_kimenet.png")} width="80%" alt="" />
            </div>


            <div align="center">
                <img src={require("../../images/automl_doc/forecast_modellek.png")} width="80%" alt="" />
            </div>


            <div align="center">
                <img src={require("../../images/automl_doc/forecast_tanulas.png")} width="80%" alt="" />
            </div>

            <h4>Vizualizáció</h4>
            <ul>
                <li>Táblák kombinálása</li>
                <li>Adatok megjelenítése különböző régió alapján</li>
                <li>Táblák kapcsolatának kialakítása</li>
                <li>Predikció frissíthetősége</li>
            </ul>

            A korábban említett Test és Source (eredeti, amiből törölve lett a Train adatsorhoz) adatforrásokat Append-elni (kombinálni) kell, hiszen így lehetséges a valós és az előrejelzett adatokat egyszerre megjeleníteni egy vizualizáción.

            <div align="center">
                <img src={require("../../images/automl_doc/tabla_kapcsolas.png")} width="80%" alt="" />
            </div>


            <div align="center">
                <img src={require("../../images/automl_doc/forecast_tablak_osszekapcsolva.png")} width="80%" alt="" />
            </div>

            Mivel a Service Power Query-ben transzformált Dataset más régió alapján jeleníti meg az adatot, mint a Desktop, így a szükséges oszlop típusát meg megváltoztatni Locale szerint. Jelen esetben a Service-ben az adatot English (United Kingdom), Desktop-on Hungarian alapján tárolja, jeleníti meg.

            <div align="center">
                <img src={require("../../images/automl_doc/local_tipus.png")} width="80%" alt="" />
            </div>

            Az adatok megfelelő megjelenítéséhez szükséges a különböző táblák kapcsolatának a kialakítása, amely a valós és előrejelzett összekapcsolásáért is felel.

            <div align="center">
                <img src={require("../../images/automl_doc/kapcsolatok.png")} width="80%" alt="" />
            </div>


            <div align="center">
                <img src={require("../../images/automl_doc/forecast_eredmeny.png")} width="80%" alt="" />
            </div>

            Miután sikeresen létrehoztam a Prediction-t tartalmazó Report-ot, jó lenne egy olyan lehetőség is, mihelyt változik a Dataset, abban az esetben újból fusson le a modellezés és jöjjön létre egy új Prediction. Több lépésben közelítettem meg ezt a problémát. Elsősorban megnéztem, hogy amennyiben a Dataflow Power Query-ben változtattam az adatsoron, úgy sikeresen lefutott ismét az AutoML magától, és a Report Refresh-elése után az új Prediction látható volt. Majd megpróbáltam azt a lehetőséget is, melynél ha One Drive-on frissítem a fájlt, akkor a Dataflow frissüljön le, vele együtt pedig AutoML is lefusson ismét. Többszöri próbálkozás után, manuális Refresh-sel, valamint Scheduled Refresh-sel (beállítani egy időpontot, hogy mikor frissüljön) sem sikerült az AutoML-t magától lefuttatni, hanem csak a Dataflow frissült. A Report-ban látható volt az eredeti értékeknél a változás, viszont a Prediction-nél nem. A probléma vizsgálása közben az AutoML, Dataflow integrációjának dokumentációját is tanulmányoztam, viszont az ott leírtak alapján, a Dataflow frissítésének magával kéne hordizonia az AutoML újboli lefutását is, viszont ez az én esetemben nem történt meg.
            <h3>ÖSSZESÍTÉS</h3>
            Kutatásom során vegyes vélemény alakult meg bennem, hiszen a Power BI integrációja az AutoML-lel előnyöket, valamint hátrányokat is tartalmaz. Egy felsorolással szeretném szemléltetni ezeket.
            <h4>Power BI + AutoML előnyök:</h4>
            <ul>
                <li>Elegendő az alapvető Machine Learning és statisztikai tudás</li>
                <li>Nem igényel kódolást</li>
                <li>Modellezés cross-platform módon történhet</li>
                <li>A Training-ről készült Report statisztikái jól szemlélteti a modell teljesítményét</li>
                <li>A Machine Learning model menthető, ezáltal alkalmazható más Dataset-eken is</li>
            </ul>

            <h4>Power BI + AutoML hátrányok:</h4>
            <ul>
                <li>Csak Service-ben alkalmazható</li>
                <li>Service-ben kevesebb adatforrási lehetőség áll rendelkezésre, mint Desktop-ban</li>
                <li>Service: 53 darab (megszámlálva)</li>
                <li>Desktop: 160 darab (megszámlálva)</li>
                <li>A Service-ben (modellezéshez szükséges) adattranszformáció lassabb, mint Desktop-on</li>
                <li>Premium licensz nélkülözhetetlen a használathoz</li>
                <li>Adatkonverziós problémák léphetnek fel</li>
                <li>Modellezés testreszabhatósága korlátozott</li>
                <li>Nem frissül magától a modell az adatforrás frissítése után</li>
                <li>Report készítése Desktop-on történik (nem cross-platform, hiszen kell Windows)</li>
            </ul>

            <br />
            <br />
            Adatforrások:
            <ul>
                <li><a href="https://www.kaggle.com/rakannimer/air-passengers">Forecasting dataset</a></li>
                <li><a href="https://github.com/BlueGranite/AI-in-a-Day/tree/master/AutoML">Binary classification dataset</a></li>
            </ul>
            Tudásanyag források:
            <ul>
                <li><a href="https://www.ibm.com/cloud/learn/machine-learning">Machine Learning</a></li>
                <li><a href="https://docs.microsoft.com/en-us/power-bi/connect-data/service-tutorial-build-machine-learning-model">AutoML</a></li>
                <li><a href="https://radacad.com/dataflow-vs-dataset-what-are-the-differences-of-these-two-power-bi-components">Dataflow and dataset</a></li>
                <li><a href="https://docs.microsoft.com/en-us/power-bi/collaborate-share/service-connect-to-files-in-app-workspace-onedrive-for-business">OneDrive for Business</a></li>
                <li><a href="https://community.powerbi.com/t5/Community-Blog/Building-a-Regression-Model-with-zero-code-in-PowerBI/ba-p/663582">Regression model</a></li>
                <li><a href="https://pawarbi.github.io/blog/forecasting/python/powerbi/forecasting_in_powerbi/2020/04/24/timeseries-powerbi.html#Power-BI-Forecast">Forecasting</a></li>
                <li><a href="https://powerbi.microsoft.com/en-us/blog/introducing-power-bi-data-prep-wtih-dataflows/">Dataflow and data preparation</a></li>
                <li><a href="https://docs.microsoft.com/en-us/power-bi/transform-model/dataflows/dataflows-machine-learning-integration">Dataflow, refresh and Machine Learning models</a></li>
                <li><a href="https://community.powerbi.com/t5/Service/Information-is-needed-in-order-to-combine-data/m-p/574058">Combining data</a></li>
                <li><a href="https://community.powerbi.com/t5/Service/Create-Dataset-from-Dataflow-FROM-WITHIN-THE-SERVICE/m-p/1099589">Report from dataflow</a></li>
                <li><a href="https://support.microsoft.com/en-us/office/set-a-locale-or-region-for-data-power-query-d42b9390-1fff-413f-8120-d7df0ced20b9">Locale types</a></li>
            </ul>

        </div>
    )
}

export default Automl;