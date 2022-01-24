const Demo = () => {
    return (
        <div>
            <h1 id="demo">Demo</h1>
            <p>Csapatunk különböző kutatásainak “összeillesztése” érdekében, egy Demo projektet hoztunk létre, amely különböző módszereket, technológiákat vegyít, és mutatja meg a Power BI integrációját a Machine Learning-gel. A COSMO CONSULT által nyújtott tenanthoz kaptunk különböző e-mail címeket, így mindenki tudott külön-külön dolgozni, nem befolyásolva egymás munkáját.</p>
            <p>Milyen témákat kerülnek majd elő:</p>
            <ul>
                <li>Felhasznált technológiák
                    <ul>
                        <li>Modellezéshez</li>
                        <li>Környezet kialakításához</li>
                        <li>Adatimportációhoz</li>
                    </ul></li>
                <li>Adatsorral kapcsolatos teendők
                    <ul>
                        <li>Adatsor kiválasztása</li>
                        <li>Betanulási adatsor előkészítése</li>
                        <li>Teszt adatsor előkészítése</li>
                    </ul></li>
                <li>Munkamenet
                    <ul>
                        <li>Modellezési technológiák felosztása</li>
                        <li>Az osztályozási modell alkalmazása</li>
                        <li>Az idősoros előrejelzési modell alkalmazása</li>
                    </ul></li>
            </ul>
            <p>Felhasznált technológiák</p>
            <p>Az bemutatott Demoban Forecast, illetve Classification problémákat oldunk meg az általunk kiválasztott adatsoron, amely a későbbiekben Dataset-ként lesz említve. Ebben a projektben az alábbi három technológiát használtuk fel a modellezéshez:</p>
            <ul>
                <li>AutoML</li>
                <li>Python</li>
                <li>R</li>
            </ul>
            <p>Míg az AutoML-nek szüksége van, hogy Service-t, Dataflow-t használjon Premium licensszel, addig a Python+R scriptek megfelelően működnek Desktopon, és az ott létrehozott Dataset-eken (nem az adatsor), Free szolgáltatással is.</p>
            <p>Az általunk használt Dataset tárolása a OneDrive for Business oldalán történt, ahol akár a későbbiekben módosítás is végezhető rajta, ezáltal pedig frissülnek fognak az adatok.</p>

            <div align="center">
                <img src={require("../../images/demo/onedrive_dataset.png")} width="80%" alt="" />
            </div>

            <p>Adatsorral kapcsolatos teendők</p>
            <ul>
                <li>Adatsor kiválasztása</li>
                <li>Betanulási adatsor előkészítése</li>
                <li>Teszt adatsor előkészítése</li>
            </ul>
            <p>Ahhoz, hogy a kutatásunk menetének eredményét meg is tudjuk mutatni, egy megfelelő Dataset-re volt szükség, amivel a modellt megfelelően tudtuk tanítani, és többféle kimutatást pedig interaktívan megjeleníteni. Ezt a Dataset-et azért választottuk, mivel teljesít minden olyan feltételt, amely szükséges a Machine Learning algoritmusok bemutatásához. Ugyanakkor mivel ez speciálisan az IBM Watson-hoz készült, amely egy Machine Learning mesterséges intelligencia, ez tartalmaz pluszban egy go_1k táblát, viszont nekünk erre nincsen szükségünk, ezért ezt kivettük és a kapcsolatokat újrarendeztük.</p>
            <p>MIT TARTALMAZ A TÁBLA?</p>

            <div align="center">
                <img src={require("../../images/demo/connections.png")} width="80%" alt="" />
            </div>

            <p>A Classification modell betanításához szükséges Dataset-en még további változtatások voltak szükségesek. Egy Custom oszlop beszúrása lehetővé tette a Prediction Outcome kiválasztását, amely a modell kimenetét határozta meg. Továbbá azokat a táblákat, amelyeknél valamilyen értéket módosítani kellett, azokra Reference táblákkal hivatkoztunk, ezáltal pedig az eredeti tábla továbbra is felhasználható lett.</p>

            <div align="center">
                <img src={require("../../images/demo/custom_column.png")} width="80%" alt="" />
            </div>

            <p>Szintén a Classification modell alkalmazásához egy olyan Test Dataset-re volt szükség, amelyet manuálisan kellett előállítani Java kóddal, mivel nem volt birtokunkban további Dataset, melyre alkalmazhattuk volna.</p>
            <p>BALÁZS KÓD CLASSIFICATION TEST LEGYÁRTÁSÁHOZ</p>
            <p>A Forecasting modell alkalmazása során viszont semmilyen plusz Dataset-re nem volt szükség, hiszen a dátumokat tartozó táblához csak további értékeket pakol hozzá, amely az előrejelzést szolgálja.</p>
            <p>KÉP TÁBLÁKRÓL</p>
            <p>Munkamenet</p>
            <ul>
                <li>Modellezési technológiák felosztása</li>
                <li>Az osztályozási modell alkalmazása</li>
                <li>Az idősoros előrejelzési modell alkalmazása</li>
            </ul>
            <p>Mindenképpen különböző problémák megoldására szerettük volna alkalmazni a különböző technológiákat. Ez okból AutoML-lel készült a Classification modell, Python+R scripttel pedig a Forecasting. Ugyanis Python+R-nél a Forecasting jobban paraméterezhető, míg AutoML-nél egy Regressziós modellt tudunk létrehozni, amelyből kissé nehézkesen lehet Forecast-et képezni. Ezzel szemben pedig az AutoML Classification modellje jobb teljesítményt nyújtott a jelentések alapján, mint a Python+R scriptek amiket készítettünk.</p>
            <p>PERFORMANCE KÉP?</p>
            <p>A Classification esetében azt a helyzetet/problémát vizsgáltuk, hogy a kedvenc kiskereskedők közül, melyeknél várhatóak olyan eladások, ahol azok mértékei meghaladják az átlag értéket.A potenciális eladások közül meg kellett figyelni a termékjellemzőket, a rendelési módot, valamint az eladási árat, hogy melyik, milyen mértékben befolyásolta a Prediction kimenetelét.</p>

            <div align="center">
                <img src={require("../../images/demo/model_training.png")} width="80%" alt="" />
            </div>

            <p>KÉP A REPORTROL?</p>
            <p>A Forecast probléma megoldásánál egy olyan idősoros adatsort kellett előkészíteni, amelynél minden hónapra az összeladásokat tartalmazza, valamint a rendelési módszereket és a termékcsaládokat. Mivel a Forecast esetében két modellezési technológia volt felhasználva, így tehát amíg az egyik a rendelési módjának előrejelzését/összefüggését vizsgálta, addig a másik pedig a termékcsaládokét.</p>

            <div align="center">
                <img src={require("../../images/demo/training_datasource.png")} width="80%" alt="" />
            </div>

            <p>Megosztás</p>
            <p>Miután sikeresen elkészültünk külön-külön a feladatokkal, a megosztással kapcsolatos kérdésekre kerestük a válaszokat. A létrejött Reportok-nál, akár külön is, lehetőség van exportálni az egész jelentést úgy, hogy megtartsák az interaktív képességüket. Ez tűnt számunkra a legvalószínűbbnek, hiszen az IFRAME segítségével be lehet ágyazni html kódokba, emellett bárki megtekintheti azt. Míg más lehetőségeket vizsgálva, azok azért nem lettek volna megfelelőnek, hiszen mindenképpen rendelkeznie kell fióknak, annak aki meg szeretné a jelentést tekinteni. Hogy a megosztás maga megvalósuljon, elsősorban a tenant admin felhasználóval kellett engedélyezni a beágyazott kód létrehozását, továbbá a jelentésben létrehozott térkép vizuális megjelenítését</p>

            <div align="center">
                <img src={require("../../images/demo/export_report.png")} width="80%" alt="" />
            </div>

            <p>miről csináltunk classificationt, forecastet hogyan használtuk fel a technológiákat szükséges képek?</p>

            <p align="center">
                <iframe title="demo_BA - Page 1" width="1024" height="612" src="https://app.powerbi.com/view?r=eyJrIjoiZGYxYzZkNjgtZjc3Zi00Yjc2LWFiOWQtNmYwYWIxZWZiYWY5IiwidCI6ImFlOTMwODk5LTAyMTEtNDQ2Yi04NmZkLTI5MDI3ZDE1NGViMCIsImMiOjl9" frameborder="0" allowFullScreen="true"></iframe>
            </p>
            <p>Adatforrás: <a href="https://relational.fit.cvut.cz/dataset/GOSales">Dataset</a></p>
            <p>Tudásanyag források:</p>

        </div>
    )
}

export default Demo;