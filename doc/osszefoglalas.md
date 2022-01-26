# Összegzés, kiértékelés

A kutatás során felgyülemlett eredmények rendszerezése és kiértékelése komoly feladatnak bizonyult. Az egyik kihívás, amivel szembesültünk a vizsgálódásaink során, hogy összpontosítani kellett a figyelmünket egy nagyon tág és szerteágazó problémakör egy kisebb halmazára. Az eredmények összegzése során emiatt számos olyan tényezőt nem vettünk számításba, amelyekről a jövőben érdemes lehet további kutatásokat folytatni. A következő fejezetben szót fogunk ejteni ezekről a tényezőkről és a munkánk potenciális továbbfejlesztési lehetőségeiről is.
A másik nagyobb kihívás az volt, hogy a három különböző technológiai megoldást valamilyen módon egységesítenünk kellett ahhoz, hogy az eredmények összehasonlíthatóvá váljanak. Az egységesítés során kiderült, hogy a Pythont és az R scriptet alkalmazó megoldások között a kutatás célja (a Power BI-on belüli integrációs lehetőségek) szempontjából kevés különbség észlelhető. Emiatt az összefoglalás során a két megoldást a legtöbb esetben együtt tekintjük.
A fent vázolt problémák kiküszöbölésére kidolgoztunk egy szempontrendszert, amellyel átfogóan és szemléletesen tudjuk felvázolni a kutatás során tapasztaltakat, valamint be tudjuk mutatni a különböző technológiákban rejlő potenciált. Emiatt törekedtünk arra, hogy az objektív szempontok mellett a személyes észrevételeink is megjelenjenek. A következő pontban röviden összegezzük a tapasztalatainkat a különböző nézőpontok szerint.

## Vizualizációs lehetőségek

A Power BI egyik legnagyobb előnye az adatvizualizációs lehetőségek, valamint a reporting flexibilitásában rejlik, emiatt fontosnak tartottuk megvizsgálni, hogy a fenti módszerekkel milyen megjelenítési lehetőségeink és esetleges korlátaink vannak.

### R & Python

Fontos megemlíteni, hogy a Power BI Desktop (továbbiakban csak Desktop) lehetőséget ad arra, hogy az említett script nyelvek beépített lehetőségeit és könyvtárait felhasználva hozzunk létre adatvizualizációkat. Elméletben lehetséges volna, hogy a vizualizációs scriptbe modellező és predikciós algoritmusokat is írjunk, azonban ez a lehetőség számos esetben bekorlátozza a Desktop saját beépített lehetőségeinek kiaknázását. Nincs lehetőségünk például kontrollálni, hogy mikor fusson le a modellező script, ez minden egyes report frissítése alatt újra ki fog értékelődni. Mindemellett megszűnik az adattranszformációk és a vizualizáció logikai szétválasztásának a lehetősége is, valamint a Power BI alkalmazásba beépített keresztszűrési lehetőségekkel sem tudunk élni sem [Python scriptek](https://docs.microsoft.com/hu-hu/power-bi/connect-data/desktop-python-visuals), sem [R scriptek](https://docs.microsoft.com/hu-hu/power-bi/create-reports/desktop-r-visuals) esetében. A fenti okokból kifolyólag a script vizualizációk lehetőségét a továbbiakban nem tárgyaljuk. Amennyiben a scriptünket nem kifejezetten a vizualizációs lehetőségekbe építjük be, hanem valamelyik előkészítési fázisba, annyiban semmiféle hasonló korlátozásba nem ütközünk az adatok megjelenítése szempontjából.

### AutoML

Az AutoML modellezési folyamata során automatikusan készít nekünk egy jelentést, amit módosíthatunk vagy meg is oszthatunk másokkal. Ez a lehetőség a modellkészítés, -tesztelés és -korrekció folyamatát nagyban leegyszerűsíti, valamint jelentősen csökkenti a training során észrevétlenül maradt hibalehetőségek számát.
A predikciókból készült táblák feldolgozása azonban körülményes lehet és átalakítást igényel. A predikció kimenete egy Dataflow részét képezi, azonban ahhoz, hogy ebből jelentéseket tudjunk készíteni, először Datasetbe kell tölteni az adattáblákat, amihez [mindenképpen szükséges](https://docs.microsoft.com/hu-hu/power-bi/transform-model/dataflows/dataflows-configure-consume) a Desktop használata.

## Developer experience

A fejlesztési munkálatok hatékonysága és a különböző megoldásaink használhatósága miatt úgy véltük, hogy a fejlesztői élmény szempontjai mellett nem mehetünk el. A következőkben az ezzel kapcsolatos tapasztalatainkat foglaljuk össze.

### R & Python

A Desktop rendelkezik saját beépített szövegszerkesztővel, amibe a scriptjeinket be tudjuk vinni. Ez a lehetőség azonban teljességgel alkalmatlan a modern és hatékony scriptelésre. A szövegszerkesztő maga semmiféle testreszabási lehetőséggel nem rendelkezik, nincs lehetőség plug-inok készítésére, ami lehetővé tenné, hogy robosztus ML rendszert fejlesszünk benne. Ezen felül nem rendelkezik semmiféle szintaktikai segédlettel, szövegkiemeléssel, vagy bármiféle script olvasást segítő lehetőséggel. A script editor elsődleges célja az, hogy apró adattranszformációs scripteket írjunk vele.
Külső IDE használata esetén az adattranszformációs scripteknél nincs lehetőségünk az (esetlegesen több megelőző adatelőkészítési lépésen átesett) Datasetek beimportálására. A Power BI-on belül a scriptünk dataframe-ek formájában éri el a Dataseteinket, ezeket azonban nincs módunk exportálni. A Desktop a scriptben deklarált dataframeket képes elérni és táblaként megjeleníteni az alkalmazásban. Ekkor azonban adatkonverziós hibák léphetnek fel, többek között dátumkonverziós problémák a Power BI felől a script felé, valamint lebegőpontos számok pontosságának csökkenése tapasztalható a script felől a Power BI felé történő adatáramlás során. Ezek a korlátok a Microsoft részéről a dolgozatunk készítésének pillanatában nincsenek dokumentálva.
A fenti okokból kifolyólag elmondható, hogy egy Power BI Desktopban készített ML script a gyakorlatban nehezen karbantartható és bővíthető.

### AutoML

Az AutoML-ben készített modellekhez nem szükséges semmilyen technikai háttértudás, maga a fejlesztési folyamat jól dokumentált, egyszerű és átlátható. Ez a módszer kódírást nem igényel, minden lépése egy SaaS alapú webes felületen keresztül elérhető. A [Desktopos forecasting lehetőség](https://docs.microsoft.com/hu-hu/power-bi/transform-model/desktop-analytics-pane) igényel néhány előkészületet az adatbevitel szempontjából, azonban összességében ez is jól használható a gyakorlatban.
Elmondható azonban, hogy a lehetőségek száma és testreszabhatóság mértéke a különböző script alapú megoldásokkal és könyvtárakkal szemben igen [korlátozott](https://docs.microsoft.com/hu-hu/power-bi/transform-model/dataflows/dataflows-machine-learning-integration).

## Modellezés

A vizsgálódásaink során a legnagyobb különbségeket a modellezési lehetőségek összehasonlítása során észleltük. Ebben a pontban kénytelenek voltunk leszűkíteni az összegzést néhány kitüntetett területre. Ezen dolgozatnak nem célja ismertetni az összes modellezési lehetőséget és hatékonyság, pontosság, illetve egyéb statisztikai jellegű mérőszámok szempontjából értékelni. Az összehasonlítás során igyekeztünk megmaradni a Power BI integrációk kontextusában.

### R & Python

A scripting lehetőségek mind testreszabhatóság, mind a hatékony modellkészítéshez szükséges háttértudás szempontjából felülmúlják az AutoML-t. A munkánk során azt tapasztaltuk, hogy a Power BI Desktop lehetővé tesz külső könyvtárak felhasználását. A modellezés szempontjából csupán két jelentősebb korlátozást érzékeltünk: ha a modellezési algoritmusunkat transzformációs scriptbe ágyazzuk, a modellünk semmilyen módon nem menthető, valamint több fájlból álló, nagyméretű scriptet nem tudunk beágyazni a programba. A modellezési script emiatt minden egyes alkalommal lefut, amikor a training adatsorunk frissül, és magát a modellt is csak egyetlen forrás Dataseten tudjuk betanítani és alkalmazni is. Ahhoz, hogy egy ilyen rendszer működjön, kénytelenek vagyunk a training- és tesztadatainkat, valamint a prediktálni kívánt adatokról rendelkezésünkre álló információkat egy Datasetbe ágyazni. Ezzel természetesen együtt jár az is, hogy mind [Python](https://docs.microsoft.com/hu-hu/power-bi/connect-data/desktop-python-in-query-editor), mind [R](https://docs.microsoft.com/hu-hu/power-bi/connect-data/desktop-r-in-query-editor) modelljeink értékelése és tesztelése nehézkes, kizárólag helyben, a transzformációs scriptben lehetséges. Ez a megoldás a fenti okokból kifolyólag robosztus ML rendszerek fejlesztésére nem túl hatékony.

### AutoML

A scripting lehetőségekkel szemben itt a legkisebb a mozgásterünk, ami a modellezésre alkalmazott módszerek testreszabhatóságát illeti. Az AutoML alapvetően csak három opciót kínál fel: bináris előrejelzési modellt, besorolási modellt, valamint regressziós modellt. Mi ebből a háromból a dolgozatunk céljából és korlátaiból kifolyólag az első kettőt vizsgáltuk meg. A scripting megoldásokkal szemben azonban itt lehetőségünk volt a [modell mentésére és egyszerű kiértékelésére](https://docs.microsoft.com/hu-hu/power-bi/transform-model/dataflows/dataflows-machine-learning-integration), ami nagyban megkönnyítette számunkra a trainelési és tesztelési folyamatokat.

## Adatelőkészítés

A két megoldást adatelőkészítési szükségletek és lehetőségek szempontjából is megvizsgáltuk. Úgy találtuk, hogy ebben a tekintetben leginkább a Power BI alapvető funkciói határolják körbe a mozgásterünket, így az ezzel kapcsolatos eredményeinket egyetlen pontban foglaljuk össze.
Ahogyan már a 'Developer experience' szekcióban is érintettük, néhány esetben adatkonverziós hibák léphetnek fel, pl. dátum mezők alkalmazása esetén (pl. idősoros adathalmazokra épülő regressziós modelleknél) lokalizációs problémák merülhetnek fel az adatforrástól függően.
Ezek a problémák önmagukban viszonylagosan könnyen orvosolhatóak, azonban összetettebb adatmodellek esetén egyre nagyobb kihívást jelenthetnek. Adattisztításra a Power BI ezekben az esetekben kiváló beépített lehetőségeket nyújt, azonban annyit meg kell említeni, hogy a script megoldásoknál kihasználhatjuk mind a Desktop, mind pedig az adott programnyelv lehetőségeit is, míg az AutoML-nél meg kell elégednünk azokkal az [opciókkal](https://docs.microsoft.com/hu-hu/power-bi/transform-model/dataflows/dataflows-machine-learning-integration), amik Dataflow-k kialakításához érhetőek el a Serviceben. A training adatok átalakítására a Power BI-on belül más lehetőség az AutoML részéről nincs.

## Service - Desktop kompatibilitás

A dolgozatunk egyik fontos alappillére, hogy megvizsgáljuk, a különböző megoldások esetében milyen lehetőségeink vannak a forrásadatok, eredmények, modellek és elkészült reportok megosztására. A Power BI alapvető felépítéséből adódik, hogy a tervezési, adatelőkészítési és modellezési munkálatokkal kapcsolatos feladatokra a Desktop élvez kitüntetett helyzetet, míg a reportolás, megosztás és kollaboráció szempontjából a Service élvez előnyt. Észre kell venni azonban, hogy az általunk felvázolt megoldások különböző módon használják fel a két felület adta [lehetőségeket](https://docs.microsoft.com/hu-hu/power-bi/fundamentals/service-service-vs-desktop).

### R & Python

A scriptek szempontjából tekintve korlátozott lehetőségek állnak rendelkezésre a Serviceben. Mivel ezek a scriptek (a vizualizációs scriptek kivételével) csak a Desktopon szerkeszthetőek a Datasetek transzformációján belül, ezért a munkafolyamat alapvetően a Desktopról indul és a Serviceben ér véget. Fontos megemlíteni, hogy annak ellenére, hogy a Serviceben nem lehet scripteket írni, ettől még a feltöltött Dataseteken és reportokon a Desktophoz hasonlóan minden Dataset frissítéskor lefut a modellező és predikciós script. Ezt kombinálva a Datasetek [ütemezett frissítésével](https://docs.microsoft.com/hu-hu/power-bi/connect-data/refresh-scheduled-refresh) lehetővé válik, hogy dinamikus predikciókat hozzunk létre.

### AutoML

AutoML-ben a munkafolyamat iránya az [eddigiekkel szemben fordított](https://docs.microsoft.com/hu-hu/power-bi/transform-model/dataflows/dataflows-machine-learning-integration), míg a Dataflowkat és a modelljeinket kénytelenek vagyunk Serviceben létrehozni, addig a Dataflow limitációi miatt a reportoláshoz szükséges, hogy a modellezés, illetve a predikció eredményeit kiexportáljuk Desktopba. Mivel ezesetben a reportokat és a hozzájuk tartozó Dataseteket újfent fel kell töltenünk a Servicebe annak érdekében, hogy meg tudjuk osztani őket, ezért ez a megoldás egy kissé időigényesebb és az összetettebb folyamat miatt több hibalehetőségre ad okot.

## Licenszek

Végezetül egy szempont maradt, amit érdemes lehet fontolóra venni a kétfajta megoldás összehasonlításakor. Fontos kérdés lehet, hogy milyen erőforrásokra van szükségünk a különböző megvalósításoknál, hiszen a gyakorlatban ezek döntik el, hogy mennyire kifizetődő belevágni egy új projektbe. Azt bemutattuk korábban, hogy az általunk vázolt lehetőségeknek milyen technikai korlátai vannak, amelyek befolyásolhatják egy ML-Power BI integrációs projekt megtérülését. Mindezeken felül viszont fontos kiemelni, hogy az általunk használt szolgáltatások különböző anyagi vonzattal rendelkeznek és különböző felhasználói csomagok részét képezik. Ennek a pontnak a vizsgálata a kutatómunkánk egyik alapvető kérdése volt. A következőkben tehát a különböző [licenszfajták](https://docs.microsoft.com/hu-hu/power-bi/fundamentals/service-features-license-type) nyújtotta lehetőségeket vetjük össze az ML megvalósítások szempontjából.

### Ingyenes licensz

Az ingyenes licensz elérhetővé teszi számunkra az R és Python scriptek használatát, azonban a másokkal való megosztásra és a különböző Service funkciók elérésére már nem. Az AutoML ezzel a licensszel semmilyen formában nem elérhető.

### Pro licensz

Ez a licensz lehetővé teszi számunkra a Service és a dataflow-k használatát, valamint rendelkezésünkre bocsátja az ehhez kapcsolódó erőforrásokat. Ezzel a licensszel lehetőségünk nyílik más felhasználókkal megosztani a jelentéseinket. Az AutoML ebben a csomagban sem érhető el.

### Premium licensz

Scripting szempontjából semmilyen kitüntetett előnnyel nem jár ez a licensz, azonban az AutoML ennek a csomagnak a részét képezi.

## Összegző táblázat

A fenti információkat a könnyebb átláthatóság érdekében egy táblázatban összegeztük:
tablazat_1.png
tablazat_2.png
tablazat_3.png

## Konklúzió

A kutatás alapvető célja annak feltárása volt, hogy milyen lehetőségek állnak rendelkezésre ML alapú predikciók készítésére a Power BI-on belül, és ezek a lehetőségek hogyan építhetőek be egy-egy tipikus use case-be. Különböző gyakorlati példák előkészítésén és kivitelezésén keresztül nyertünk betekintést a megvalósításuk részleteibe, és a fentiek értelmében arra a következtetésre jutottunk, hogy az AutoML, valamint a különböző scripting megoldások kisebb előrejelzések, regressziós és bináris klasszifikációs feladatok teljesítésére alkalmasak. Nagyobb projektek, robusztusabb ML alkalmazások kivitelezésére azonban az általunk tesztelt megoldások nem igazán alkalmasak.
Az AutoML elsősorban akkor alkalmazható hatékonyan, ha nincs a birtokunkban az ML algoritmusok építéséhez szükséges szoftverfejlesztői és statisztikai háttértudás, vagy a fejlesztési idő a szűk keresztmetszetünk. Emellett a beépített modell reportálási funkciója lehetővé teszi számunkra, hogy egyszerűen és gyorsan megbizonyosodjunk egy adatsor különböző statisztikai tulajdonságairól, modellezhetőségéről.
A scriptelési lehetőségek nagyfokú flexibilitást tesznek lehetővé számunkra, ugyanakkor több előkészületet igényelnek ezek a megoldások. Nagy előny továbbá, hogy már az ingyenes csomagban is elérhető ez a lehetőség.
Felmerült bennünk a kérdés, hogy a fent említett korlátok tükrében milyen alternatívák állhatnak rendelkezésünkre, ha mégis valamilyen úton robosztus, fenntartható és hatékony ML-alapú megoldásokat szeretnénk integrálni a Power BI-ba. Úgy tűnik, két lehetséges irány is van, azonban mindkettő valamilyen külső erőforrást igényel.
Az egyik lehetőség, hogy létrehozunk egy olyan ML rendszert, aminek a kimeneti adatai egy, a [Power BI által támogatott adatformátumba](https://docs.microsoft.com/hu-hu/power-bi/connect-data/power-bi-data-sources) kerülnek eltárolásra. Erre példa lehet egy hálózatról elérhető Microsoft SQL adatbázis, egy on-premise gateway-ről elérhető fájlrendszer, egy felhőalapú tárhelyszolgáltatás (pl. OneDrive), vagy akár egy publikusan elérhető REST API is.
Egy másik opció az [Azure Machine Learning](https://docs.microsoft.com/hu-hu/power-bi/transform-model/dataflows/dataflows-machine-learning-integration) felhőszolgáltatás használata lehet, amihez szükségünk van egy megfelelő Azure előfizetésre is, azonban az AutoML-hez képest jóval nagyobb mozgásteret tesz lehetővé.
Ezeknek a külső megoldások vizsgálata nem képezi szerves részét a dolgozatunknak, azonban a későbbiekben további kutatásoknak adhatnak teret.
