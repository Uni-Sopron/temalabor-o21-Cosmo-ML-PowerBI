const Bevezetes = () => {
    return (
        <div>
            <div>
                <h1 id="bevezetés" align="center">Bevezetés</h1>
                <br />
                <br />
                <p>A vállalati adatvizualizáció és -elemzés területének egyik kimagasló megoldása a <a href="https://powerbi.microsoft.com/hu-hu">Microsoft Power BI</a>, ami a 2021-es évben is nagy népszerűségnek örvendett.</p>
                <figure align="center">
                    <img src={require("../../images/bevezetes/Power_BI_2021.png")} title="Power Bi 2021-ben az adatvizualizációs szoftverek körében" width="60%" alt="" />
                </figure>
                <p align="center">Ábra: 2021 adatvizualizációs szoftverei - Forrás: <a href="https://www.capterra.com/data-visualization-software/#shortlist">Capterra</a></p>
                <p>Szintén jelentős, hogy a mesterséges intelligencia <a href="https://techvidvan.com/tutorials/artificial-intelligence-applications/">egyre több területen</a> jelenik meg és kerül alkalmazásra, ami alól az üzleti alkalmazás sem kivétel. Az <a href="https://filecache.mediaroom.com/mr5mr_ibmnewsroom/191468/IBM%27s%20Global%20AI%20Adoption%20Index%202021_Executive-Summary.pdf">IBM Global AI Adoption Index 2021</a>-e szerint a cégek háromnegyede használja a mestersége intelligencia által nyújtott megoldásokat (31%) vagy éppen azok használatának megismerésével foglalkozik (43%).</p>
                <p>Éppen emiatt egy potenciális lehetőség a kettő ötvözése: egy olyan megoldás, amely a Power BI által nyújtott adatelemzéseket és -vizualizációkat képes támogatni egy AI modell segítségével. Munkánk célja ennek feltérképezése és a potenciális lehetőségek összehasonlítása. A kutatás elsősorban a beépített lehetőségekre és külső, alternatív szkript megoldásokra fókuszál. Ehhez csapatunk a built-in AutoML megoldást, továbbá az R és Python nyelvet és az azokhoz tartozó külső könyvtárakat használta fel. Minden egyes rész magába foglalja a vizsgált módszert, annak követelményeit, probémáit, megoldásait és eredményét.</p>
                <p>Csoportunk három főből áll:</p>
                <ul>
                    <li>Békési Andor, aki az AutoML lehetőségeit vizsgálta,</li>
                    <li>Janoschek Balázs, aki az R szkriptek és Power BI összeköthetőségét vizsgálta,</li>
                    <li>Kakas Ádám, aki a Python és Power BI összeköthetőségét vizsgálta.</li>
                </ul>
                <p>A Machine Learning modelljeink osztályozási (classification) és előrejelzési (forecast) feladatokat látnak el, mindazonáltal csak a különböző AI megoldások megvalósíthatóságát kívánjuk velük demonstrálni, így mélységében nem merülünk bele a statisztika és gépi tanulás tudományaiba.</p>
                <p>A feladatunk alapját a <a href="https://www.cosmoconsult.hu/">COSMO CONSULT Kft.</a> fejlesztőmérnökei hívták életre, akik szintén a mesterséges intelligencia és Power BI ötvözését fontolgatják, amihez szeretnének egy átfogó képet kapni a potenciális lehetőségekről.</p>
                <p>Dokumentációnk kitér:</p>
                <ol type="1">
                    <li>a problémára és annak kontextusára,</li>
                    <li>technikai követelményekre,</li>
                    <li>a feladatok felosztására és a munkamenetre,</li>
                    <li>valamennyi felhasznált technológiára és Tech Stack-re,</li>
                    <li>a kutatómunka eredményeire.</li>
                </ol>
            </div>
            <div>
                <h1 id="k-vetelm-nyek-technol-gi-k-tech-stack">Követelmények, Technológiák, Tech stack</h1>
                <p>Kutatásunk elvégzéséhez első körben szükségünk volt egy felületre, ahol képesek voltunk kollaborálni és megosztani munkáinkat, továbbá tárolni minden fontos dokumentumot a kutatással kapcsolatban. Ugyanakkor kellett egy vagy több csatorna is, ahol tartani tudtuk a kapcsolatot egymással és konzulensünkkel.</p>
                <h3 id="-power-bi-service-https-powerbi-microsoft-com-hu-hu-"><a href="https://powerbi.microsoft.com/hu-hu/">Power BI Service</a></h3>
                <p>Ez a platform volt az egyik jelentős adattárolási szerepet betöltő eszközünk, mivel nem csak interaktív report szerkesztési és bővítési lehetőségek álltak rendelkezésünkre, hanem ide kerültek közzé tételre az egyes reportok, datasettek és kerültek létrehozásra a dataflow-jaink. Azure Active Directory tenant-on keresztül kaptunk hozzáférést, amelyet konzulensünk bocsájtott rendelkezésünkre. Az AutoML feature csak és kizárólag itt elérhető el, továbbá az alternatív megoldások szempontjából is fontos, hiszen a Desktopban feltrainelt reportok közzétételük után itt hozzáférhetőek.</p>
                <h3 id="-github-https-github-com-"><a href="https://github.com/">GitHub</a></h3>
                <p>A GitHub egy hosting platform verziókövetéshez és kollaborációhoz. Mindent, ami a kutatással kapcsolatban szükséges volt (adatok, dokumentáció, reportok, weboldal), az ide került feltöltésre. Ennek elérésére egy repository-ra volt szükségünk, amit az egyetem biztosította számunkra.</p>
                <h3 id="-microsoft-teams-https-www-microsoft-com-hu-hu-microsoft-teams-log-in-"><a href="https://www.microsoft.com/hu-hu/microsoft-teams/log-in">Microsoft Teams</a></h3>
                <p>A Teams a folyamatos kapcsolattartás miatt került be listánkba, mivel a heti meetingjeink konzulensünkkel itt zajlottak, továbbá itt is tartottunk külön meetingeket és hoztunk létre külön csoportot, ahol szintén a témával kapcsolatos információkat osztottunk meg egymással.</p>
                <h3 id="-discord-https-discord-com-"><a href="https://discord.com/">Discord</a></h3>
                <p>A Discord egy ingyenes VoIP alkalmazás, amelynek segítségével szintén képesek voltunk az online térben találkozni és ott is meetingelni. Az egyik nagy előny az volt, hogy egyszerre többen is oszthattunk meg képernyőt.</p>
                <h3 id="-gmail-https-www-google-com-intl-hu-gmail-about-"><a href="https://www.google.com/intl/hu/gmail/about/">Gmail</a></h3>
                <p>A Gmail a Google levelező szolgáltatása, amit mi többnyire meetingjeink ütemezésére használtunk, továbbá konzulensünkkel való kapcsolattartásra.</p>
                <h2 id="kutat-munka-elv-gz-s-hez-haszn-lt-technol-gi-k">Kutatómunka elvégzéséhez használt technológiák</h2>
                <h3 id="-power-bi-desktop-https-powerbi-microsoft-com-en-us-desktop-"><a href="https://powerbi.microsoft.com/en-us/desktop/">Power BI Desktop</a></h3>
                <p>Verziószám: 2.100.1401.0 (64 bit)</p>
                <p>Míg a Service-t inkább az AutoML esetén használtuk a machine learning szempontjából, addig az főként a kollaboráció és megosztás eszköze. A Desktop alkalmazás ezzel szemben az alternatív, scriptes megoldásainknak esetében volt jelentős. Itt tudtunk beilleszteni, futtatni és tesztelni scriptjeink hatását, továbbá itt volt elérhető számunkra az eredmények kiértékelése is különböző vizualizációs lehetőségek formájában.</p>
                <h2 id="-automl-https-docs-microsoft-com-hu-hu-azure-machine-learning-concept-automated-ml-k-vetelm-nyek"><a href="https://docs.microsoft.com/hu-hu/azure/machine-learning/concept-automated-ml">AutoML</a> követelmények</h2>
                <p>Az AutoML-lel való modellezés a Power BI Service egy szolgáltatása, így értelemszerűen csak böngészőből hajtható végre. Ezen szolgáltatás használatához szükséges Prémium licensszel rendelkeznünk, továbbá internetkapcsolattal a Service eléréséhez. A munkakörnyezet kialakítása során Premium Workspacet kell létrehozni a felhőben, ahol csak adatfolyamon belül érhető el az AutoML. Az előre jelzett adatokból való jelentések készítése érdekében Power BI Desktopra van szükség, mivel a Service nem támogatja.</p>
                <h2 id="-r-https-www-r-project-org-k-vetelm-nyek"><a href="https://www.r-project.org/">R</a> követelmények</h2>
                <p>A scriptelési feladat alapvető követelményei közé tartozik a megfelelő IDE és platform kiválasztása. A Power BI Desktop ugyan rendelkezik egy alapvető, beépített script szerkesztőfelülettel, ez azonban semmiféle automatikus formázási lehetőséggel vagy programozást segítő dinamikus megoldással nem rendelkezik. Számos integrált fejlesztőkörnyezet támogatja az R programozási nyelvet, azonban a feladat komplexitásához mérten a legkézenfekvőbb megoldást a Visual Studio Code 1.63.2-es verziója jelentette. Ez a szoftver lehetővé tette, hogy gyorsan és egyszerűen elkezdjünk scriptelni, valamit nagyfokú testreszabhatóságot biztosít számos beépíthető plug-injével.</p>
                <p>Ezek közül a kódírás megkönnyítésére az <a href="https://github.com/REditorSupport/vscode-R">&#39;R Extension for Visual Studio Code&#39;</a> 2.3.6-os verzióját használtuk, mely számos hasznos funkciót magába foglal, többek között szervizalapú kódanalízist, szintaxis kiemelést, package managementet, terminál-kezelést valamint vizuális adatelemzést is. Ennek jó alternatívája lehetett volna az RStudio nevű IDE, amely inkluzívan tartalmaz lehetőségeket R scriptek futtatására, buildelésére, valamint programírásra. Az egyszerűség kedvéért mi a Visual Studio Code-ot alkalmaztuk. A script interpretálásához és futtatáshoz az R standard, hivatalos 4.1.2-es verzióját használtuk.</p>
                <p>Az R beépített függvénykönyvtára számos out-of-box lehetőséget tartalmaz mind adatelőkészítési és -transzformációs feladatokhoz, mind ML algoritmusok készítéséhez. Binary classificationhöz mi a beépített <a href="https://www.rdocumentation.org/packages/stats/versions/3.6.2/topics/glm">glm függvény</a>t használtuk, amely generalizált lineáris modellek alkotására alkalmas. Ez a függvény nagymértékben paraméterezhető, rugalmas, valamint beépített jellege miatt kevésbé okoz kitettséget külső dependenciák felé.
                    Forecastingra a &#39;forecast&#39; nevű R könyvtár 8.15-ös verziója jó megoldásnak bizonyult az egyszerű kezelhetősége miatt. Ennek a könyvtárnak elsősorban a HoltWinters módszer alapú függvényeit és objektumait használtuk ki.</p>
                <h2 id="-python-https-www-python-org-k-vetelm-nyek"><a href="https://www.python.org">Python</a> követelmények</h2>
                <p>Veriószám: 3.9.7</p>
                <p>Ahhoz, hogy el tudjunk kezdeni dolgozni szükségünk lesz egy Python interpreterre is, ehhez célszerű egy aktívan támogatott verziót letöltenünk. Alapvetően több lehetőség áll rendelkezésünkre, hiszen mind a Microsoft <a href="https://www.microsoft.com/hu-hu/store/new/games/pc">Store</a>-jából elérhető számunkra, de természetesen a <a href="https://www.python.org/downloads/">hivatalos oldal</a>ról is letölthetjük.</p>
                <p>Ugyanakkor léteznek még más alternatívák is, például az <a href="https://anaconda.org/">Anaconda Navigator</a>, amely egy Python és R nyelvhez készült disztribúció kifejezetten tudományos számításokhoz, mint például a machine learning. Beépített csomagkezelője segítségével megkönnyíti függőségeink kezelését, továbbá a különböző környezetek létrehozásakor különböző Python verziókkal tudunk dolgozni, ráadásul ingyenes. Ehhez a projekthez mi az Anaconda Navigator-t választottuk, amiben a base(root) környezet 3.9.7 verziójú Python interpreterét használtuk.</p>
                <h3 id="python-k-nyvt-rak">Python könyvtárak</h3>
                <p>A Scikit-Learn and a Statsmodels könyvtárak azért kerültek kiválasztásra, mivel a Power BI-ban használható könyvtárak száma <a href="https://docs.microsoft.com/en-us/power-bi/connect-data/service-python-packages-support">korlátos</a>, ML könyvtárak tekintetében nincs más ezen a két könyvtáron kívül. Éppen ezért a két feladathoz mindkét könyvtárból válaszottunk egy-egy, az adott feladathoz illeszkedő modellt.</p>
                <h4 id="-pandas-https-pandas-pydata-org-"><a href="https://pandas.pydata.org/">Pandas</a></h4>
                <p>Verziószám: 1.3.4</p>
                <p>A Pandas vagy másnéven a Python adatelemző könyvtár adatok kezelésére, tisztítására, ETL folyamatok elvégzésére, továbbá idősor-specifikus igények ellátását biztosító gyűjtemény.
                    Gyors és rugalmas adatstruktúrákat bocsát rendelkezésre, adatelemzésekhez elengethetetlen. A pandas kötelező ahhoz, hogy a Power BI-ban bármilyen jellegű Python scriptet tudjunk használni, hiszen a Power BI-tól az adatokat mindig DataFrame-ek formájában kapjuk meg, ami a könyvtár egyik adatstruktúrája.</p>
                <h4 id="-scikit-learn-https-scikit-learn-org-stable-"><a href="https://scikit-learn.org/stable/">Scikit-Learn</a></h4>
                <p>Verziószám: 0.24.2</p>
                <p>Egy ingyenes és algoritmusokban gazdag Python könyvtár, amely gépi tanuláshoz készült. Kutatásunk során a könyvtárból a logisztikus regressziós algoritmussal dolgoztunk, mivel ez a megoldás alkalmas leginkább egy adott létező osztály valószínűségének modellezésére. A modell a linear_model modul része.</p>
                <h4 id="-statsmodels-https-www-statsmodels-org-stable-index-html-"><a href="https://www.statsmodels.org/stable/index.html">Statsmodels</a></h4>
                <p>Verziószám: 0.12.2</p>
                <p>Speciális felhasználású statisztikai és regressziós függvények gyűjteménye egyetlen Python könyvtárban. Az előrejelzési feladat során használtuk a könyvtár exponenciális simítás modelljét, mivel idősoros adataink voltak szezonálisan és csak egy változóval dolgoztunk. A modell a Holtwinters modul része.</p>
                <h3 id="editor">Editor</h3>
                <ul>
                    <li>Név: <a href="https://code.visualstudio.com/">VS Code</a></li>
                    <li>Verziószám: 1.63.2 (64 bit)</li>
                    <li>Python extension verziószáma: v2021.12.1559732655</li>
                </ul>
                <p>Noha a Power BI Desktop rendelkezik script editorral, ugyanakkor ez nem nyújt több lehetőséget számunkra, mint egy egyszerű Notepad. Éppen emiatt szükségünk volt egy editorra, amit használhatunk Python scriptjeink szerkesztéséhez. Mivel a VS Code lightweight, testreszabható, ingyenes és több munka során használtuk már, így ezt választottuk a scriptek szerkesztéséhez.</p>
                <p>Ahhoz, hogy szerkesztőnk képes legyen a Python-nal hatékonyan dolgozni és megkapjuk hozzá a szükséges támogatást, így telepítenünk kellett a Microsoft Python Extension-jét, ami lehetővé teszi az alábbiakat:</p>
                <ul>
                    <li>Intellisense (Pylance extension, ami a Python extension mellett kerül telepítésre)</li>
                    <li>Linting (statikus kódelemző eszköz programozási hibák megjelölésére)</li>
                    <li>Debug lehetőség</li>
                    <li>Kód navigáció és formázás</li>
                    <li>Refactorálás</li>
                    <li>Variable explorer (Változók állapotának és értékeinek nyomon követesére)</li>
                    <li>Test explorer (Unit testek futtatásához)</li>
                </ul>
                <p>Munkánk jelentős részét az editorban végeztük.</p>
                <h1 id="munkamenet-s-feloszt-s">Munkamenet és -felosztás</h1>
                <p>A munkamenet általánosan heti meetingeken került egyeztetésre külső konzulensünk, Edelényi Márton jelenlétében. Ezen felül a csoporttagok között tartottunk még meetingeket, általában legalább heti egyet, hogy egyeztessük ki hogyan áll és ki milyen problémákba futott bele, észrevételek egyeztetésére, továbbá hogy képesek legyünk olyan dolgokat is észre venni, amelyeket egyedül nem tudnánk. Kutatásunk hétről hétre bővült, folyamatos egyeztetések és ellenőrzések útján. Az első feladatunk az információgyűjtés volt, ami eleinte a Power BI-ra fókuszált.</p>
                <p>Azért, hogy kiismerjük magunkat a Power BI nyújtotta lehetőségek között, szükségünk volt az alábbiak ismeretére:</p>
                <ul>
                    <li>Power BI Desktop működése</li>
                    <li>Power BI Service működése</li>
                    <li>Licensz típusok és azok ismérvei</li>
                    <li>Munkafolyamatok</li>
                </ul>
                <p>Ezt követően elkezdtünk a machine learning, azaz gépi tanulás területével foglalkozni, ehhez az alábbi koncepciókat tanulmányoztuk:</p>
                <ul>
                    <li>Adatelőkészítési ismeretek</li>
                    <li>Forecast (előrejelzés) fogalma és ismerete</li>
                    <li>Classification (osztályozás) fogalma és ismerete</li>
                </ul>
                <p>Ahhoz, hogy ki tudjunk próbálni mindent, amit elsajátítottunk, konzulensünk rendelkezésünkre bocsájtott hozzáféréseket egy Azure Active Directory tenant (bérlő) keretein belül, így képesek voltunk a kapott fiókok segítségével a Power BI-hoz Servicen is kollaborálni és megosztani, továbbá Desktopon készített reportjainkat is közzé tenni a felhőben.
                    A kezdeti, információgyűjtő fázis után közösen meghoztuk a döntést arról, hogy a kutatás milyen irányokba mozduljon el, milyen lehetőségeket vizsgáljunk meg és milyen mélységben.</p>
                <h2 id="ir-ny-kijel-l-se-munka-feloszt-sa">Irány kijelölése, munka felosztása</h2>
                <p>Figyelembe véve, hogy a munka egy egyetemi félév hosszára korlátozódik, a csoport három főből áll, alapvető statisztikai ismeretekkel rendelkezünk és a kutatás területe önmagában rendkívül tág mind horizontálisan mind vertikálisan, így az a döntés született, hogy inkább a horizontális feltérképzésre koncentrálunk:</p>
                <ul>
                    <li>Igyekszünk minél több lehetséges AI megoldást keresni a Power BI-jal való ötvözésre</li>
                    <li>Alapvető machine learning megoldásokat alkalmazunk, amelyek célja a megvalósíthatóság vizsgálata a Power BI-on belül</li>
                    <li>Összehasonlítjuk a különböző lehetőségeket</li>
                    <li>Összefoglaljuk kutatásunk egy demo keretein belül</li>
                    <li>Dokumentáljuk eredményeinket</li>
                </ul>
                <h3 id="a-kutat-s-m-rf-ldk-vei">A kutatás mérföldkövei</h3>
                <ul>
                    <li>Megfelelő adathalmazok keresése a különböző feladatokhoz és demohoz</li>
                    <li>Technológiák kiválasztása és felosztása egymás között</li>
                    <li>Mini projektek megvalósítása személyenként</li>
                    <li>Osztályozási probléma megoldása</li>
                    <li>Előrejelzési probléma megoldása</li>
                    <li>Egyéni összesítés készítése személyenként előre meghatározott szempontok szerint</li>
                    <li>Összesítő táblázat készítése a rendelkezésre álló információkból</li>
                    <li>Demo készítése az összes kutatott technológia segítségével</li>
                    <li>Dokumentáció készítése</li>
                </ul>
                <h3 id="az-id-beoszt-s">Az időbeosztás</h3>
                <ul>
                    <li>Kutatás teljes időtartama: 15 hét</li>
                    <li>Kezdés dátuma: 2021. október 14.</li>
                    <li>Befejezés dátuma: 2022. január 26.</li>
                </ul>
                <p>Heti rendszerességű meetingjeink során mindig egy héttel előre határoztuk meg a feladatokat és hogy ki-mit csináljon, ugyanakkor nagy vonalakban rendelkeztünk egy vázlatos ütemtervvel, hogy körülbelül mikor-mit kell elvégezni és mire mennyi idő áll rendelkezésre.
                    Alapvetően a következő volt az idő felbontása vázlatosan:</p>
                <ul>
                    <li>Technológiák megismerése, tanulási szakasz - 2021. október<ul>
                        <li>Októberben tartottuk első meetingünket és már az első meeting előtt közölt, szükséges Power BI ismeretek tanulmányozása, majd teszt reportok készítése, ML alap koncepcióinak elsajátítása volt a feladat, így erre hónapra nem terveztünk előre. A hónap végén határoztuk meg a haladás irányát és a projekt célját.</li>
                    </ul>
                    </li>
                    <li>Mini projektek és összehasonlító táblázat - 2021. november<ul>
                        <li>november első hete: dataset kiválasztása a problémákhoz, összehasonlítási szempontok lefektetése</li>
                        <li>november második hete: előrejelzési és osztályozási feladat megvalósítása</li>
                        <li>november harmadik hete: egyéni kiértékelés</li>
                        <li>november negyedik hete: csoportos, összesítő táblázat elkészítése</li>
                    </ul>
                    </li>
                    <li>Demo és dokumentáció - 2021. december - 2022. január<ul>
                        <li>A demo készítésre, a projekt lezárására és dokumentálásra jelöltük ki a hátralévő időkeretet.</li>
                    </ul>
                    </li>
                </ul>
                <h3 id="a-munka-feloszt-sa">A munka felosztása</h3>
                <p>A munkák felosztását úgy oldottuk meg, hogy machine learning megoldásonként bontottuk fel csoportunkat, így voltak közös munkáink és önállóak is egyaránt. Az egyéni munkák során felmerülő komplikációkat és észrevételeket megosztottuk egymással a jobb hatékonyság érdekében, továbbá a külön csoport meetingjeinek aktívan segítettünk egymásnak egy-egy adott feladattal kapcsolatos probléma megoldásában.</p>
                <p>Az első szakaszban kimondottan közös munkáról beszélhetünk. Ekkor igyekeztünk csoport szinten utána járni mindennek, ami kapcsolódhat a Power BI-hoz és a machine learning alapjaihoz. Később az adathalmazokat is közösen kerestük, majd együtt kiválasztva a legjobbakat haladtunk tovább az egyéni feladatokra.</p>
                <p>Békési Andor feladata volt a beépített prémium funkció, az AutoML megismerése, alkalmazása és értékelése. Janoschek Balázs és Kakas Ádám pedig a két alternatív megoldásért feleltek, amelyek script alapúak: R és Python machine learning megvalósítása különböző külső könyvtárak alkalmazásának segítségével. Ezt követően mindenki kiértékelte előre egyeztetett szempontok alapján megoldásait, amit pedig végül egy közös táblázatban összegeztünk.</p>
                <p>A munka utolsó szakaszán a demo elkészítése során kiválasztottunk egy olyan adathalmazt, amelyen mindkét (osztályozási és előrejelzési) feladat elvégezhető egyaránt. Külön készítettük el megoldásainkat, majd közösen megbeszéltük és javítottuk azok esetleges problémáit és összesítettük őket a Power BI Serviceben.</p>
                <h2 id="mini-projektek">Mini projektek</h2>
                <p>Mini projektjeink során egyénileg oldottuk meg a machine learning-gel kapcsolatos feladatokat a különböző technológiák segítségével. Miután létrehozásra került a dataflow, egy számunkra megfelelő adatsort kellett keresni, amelyen dolgozni lehet. Többféle adatsort tekintettünk meg, végül kiejtettük azokat, amik különböző okokból nem voltak alkalmasak a megfelelő predikciók elkészítéséhez.</p>
                <h3 id="oszt-lyoz-si-feladat">Osztályozási feladat</h3>
                <p>Bináris osztályozás estében egy adott tulajdonságot (függő változó) prediktálunk a modell segítségével, más, előre kiválasztott tulajdonsághalmaz (független változók) alapján. Az algoritmus betanítása után képes egy, a modellhez használt tulajdonsághalmazzal rendelkező adatsorról predikciót készíteni, aminek eredménye egy pozitív és negatív osztályra bontott sorozat. A kimenetel annak függvényében változik, hogy a függő és független változók kapcsolata mennyire erős. Fontos szempont a független változók száma, mivel itt általában komplexebb összefüggéseket keresünk, ugyanakkor a túl sok szempont kiválasztása során a modell már nem fog összefüggéseket találni.</p>
                <p>Szintén figyelni kell arra, hogy a kiválasztott tulajdonság besorolása négy féleképpen végződhet:</p>
                <ul>
                    <li>True positive (az a kimenetel, ahol a modell jól becsüli meg a pozitív osztályt)</li>
                    <li>False positive (az a kimenetel, ahol a modell rosszul becsüli meg a pozitív osztályt)</li>
                    <li>True negative (az a kimenetel, ahol a modell jól becsüli meg a negatív osztályt)</li>
                    <li>False negative (az a kimenetel, ahol a modell rosszul becsüli meg a negatív osztályt)</li>
                </ul>
                <p>A dataseteket olyan szempontok szerint válogattuk ki, mint például, hogy mennyi adat állt rendelkezésre, észlelhető valamilyen mintázat, periodikusság az adatsorban, megfelelő számú attribútum áll-e rendelkezésre és az attribútumok között észlelhetőek-e kapcsolatok. Így esett a választásunk a <a href="https://github.com/BlueGranite/AI-in-a-Day/tree/master/AutoML">kerékpár eladások</a>at tároló adatforrásra.</p>
                <h3 id="el-rejelz-si-feladat">Előrejelzési feladat</h3>
                <p>Jövőbe mutató predikció készítése során historikus adatok felhasználásával egy adott tulajdonság jövőbeli alakulását becsültettük meg algoritmusaink segítségével, amelyek eredménye egy-egy sorozat. A folyamat úgy zajlik, hogy a kiválasztott tulajdonság alapján becslést készít a modell, amihez megvizsgálja az adatok szezonalitását, trendjét, és a fennmaradó maradék részt majd ezt követően adott időtávra készít becslést.</p>
                <p>Fontos szempont, hogy minél nagyobb időtávot figyelünk annál nagyobb a tévesztés és pontatlanság esélye, így túl nagy időtávokat nem érdemes figyelni. Továbbá adataink periodikusságának függvényében érdemes az időtávot kijelölni.</p>
                <p>Az előrejelzési feladathoz felhasznált forrásunk <a href="https://www.kaggle.com/rakannimer/air-passengers">repülési adatok</a>ból tevődött össze.</p>
                <h2 id="integr-ci-s-lehet-s-gek-s-a-modell-vizsg-lata">Integrációs lehetőségek és a modell vizsgálata</h2>
                <p>Szintén egy nagyon fontos rész az integrációs lehetőségek és a modellek vizsgálata, mivel megoldásaink nem feltétlenül garantálják annak a Power BI teljes rendszerével (Desktop és Service) való teljes integrálhatóságát és hozzáférhetőségét, így ezeket ki kellett vizsgálnunk.</p>
                <p>Az alábbi szempontok szerint értékeltük a megoldásokat:</p>
                <h3 id="l-trehoz-s-el-rhet-s-g-s-menthet-s-g">Létrehozás, elérhetőség és menthetőség</h3>
                <p>Az AutoML használatához mindenképpen Power BI Serviceben kell létrehoznunk modellünket egy adott workspace-en belül, míg ezzel szemben az alternatív megoldásaink csak Desktopon beilleszthetőek. Scriptekkel létrehozott modelljeink mentésére nincs lehetőségünk, Applied Steps formájában kerülnek elmentésre az összes többi módosítással egyetemben, amit az adatokon végeztünk azok átalakításakor (ETL folyamat) a Power Query Editorban. Ennek következtében az adatok frissülésekor újra lefutnak a többi lépés mellett, így noha beszélhetünk egyfajta frissülésről és menthetőségről, ugyanakkor korlátokba ütközünk, hiszen ezt a megoldást nem tudjuk egy másik, külső adathalmazon lefuttatni, amit mondjuk szintén a Service adott workspace-ében tárolunk. Az AutoML esetében a modell a felhőben érhető el és menthető oda továbbra is, továbbá alkalmazható nem csak a forrásfájlon.</p>
                <h3 id="friss-thet-s-g">Frissíthetőség</h3>
                <p>Az ütemezett frissítés lehetősége korlátozottan érhető el scriptek esetében: kizárólag personal data gateway segítségével tudunk ütemezetten frissíteni az adatainkon, amelyek Python vagy R scriptet használnak, mindezt úgy, hogy mind adatainknak, mind a Pythonnak / R-nek &quot;nyilvános&quot; beállításon kell lenniük a hitelesítés során, továbbá állandónak kell lennie a kapcsolatnak az ütemezett frissítésekhez. Ehhez értelemszerűen a personal gateway-jel rendelkező számítógépnek folyamatosan üzemelnie kell és állandó internetkapcsolat is szükséges. Természetesen a manuális megoldás, miszerint letöltjük a reportot és lokálisan módosítunk, majd frissítünk elérhető továbbra is.</p>
                <p>Sajnos nem teljesen egyértelmű ebben az esetben az AutoML működése, mivel a feltrainelt modell nem frissül, ha annak input táblája frissül, ugyanakkor, ha a modell adatfolyamát Power Query Editorral nyitjuk meg és módosítjuk, akkor pedig igen. Szintén fontos megemlíteni, hogy a predikcióink a beépített lehetőség esetén automatikusan nem frissülnek, ha azok adatai igen.</p>
                <h3 id="k-ls-integr-ci-s-lehet-s-gek">Külső integrációs lehetőségek</h3>
                <p>A beépített megoldás rendelkezik kettő Microsoftos integrációval:</p>
                <ul>
                    <li><a href="https://azure.microsoft.com/hu-hu/services/cognitive-services/">Cognitive Services</a></li>
                    <li><a href="https://docs.microsoft.com/en-us/azure/machine-learning/">Azure Machine Learning Integration</a></li>
                </ul>
                <p>A scriptelés oldaláról az alábbi megkötések érvényesek ránk:</p>
                <ul>
                    <li><a href="https://docs.microsoft.com/en-us/power-bi/connect-data/service-python-packages-support">Python</a></li>
                    <li><a href="https://docs.microsoft.com/en-us/power-bi/connect-data/service-r-packages-support">R</a></li>
                </ul>
                <p>Ugyanakkor fontos megjegyezni, hogy az adatok beolvasása történhet egy előzetesen módosított script feldolgozással is, tehát több munkával, de kiterjeszthető az integráció más script könyvtárakra is.</p>
                <h2 id="demo">Demo</h2>
                <p>A kutatás végét szerettük volna egy olyan bemutatóval zárni, ami betekintést enged a különböző alkalmazott technológiák eredményeibe kicsit interaktívabb formában. Ezért a Power BI Serviceben készítettünk egy közös Dashboardot, amin megtekinthetőek az egyes megoldások, továbbá egy beépített forecast lehetőség bemutatása is.</p>

            </div>
        </div>
    )
}

export default Bevezetes;