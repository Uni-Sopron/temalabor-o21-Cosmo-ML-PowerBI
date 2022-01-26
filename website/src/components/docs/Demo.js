import React, { useState } from 'react';

const Demo = () => {
    const [isJavaCodeButtonSelected, setIsJavaCodeButtonSelected] = useState(false)

    const handleJavaCodeButton = () => {
        if (isJavaCodeButtonSelected === true) {
            setIsJavaCodeButtonSelected(false)
        }
        else {
            setIsJavaCodeButtonSelected(true)
        }
    }

    return (
        <div>
            <h1 id="demo" align="center">Demo</h1>
            <h3>Bemutatás</h3>
            <p>Csapatunk különböző kutatásainak “összeillesztése” érdekében egy demo projektet hoztunk létre, amely különböző módszereket, technológiákat vegyít és mutatja meg a Power BI integrációját a Machine Learninggel. A COSMO CONSULT által nyújtott tenanthoz kaptunk különböző e-mail címeket, így mindenki tudott külön-külön dolgozni, nem befolyásolva egymás munkáját.</p>
            <p>Milyen témák kerülnek majd elő:</p>
            <ul>
                <li>Felhasznált technológiák
                    <ul>
                        <li>Modellezés</li>
                        <li>Környezet kialakítása</li>
                        <li>Adatimportáció</li>
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
                <li>Megosztás</li>
            </ul>
            <h4>Felhasznált technológiák</h4>
            <p>A bemutatott demoban forecast, illetve classification problémákat oldunk meg az általunk kiválasztott adatsoron, amely a későbbiekben Datasetként lesz említve.</p>
            <p>Az általunk használt Dataset tárolása a OneDrive for Business oldalán történt, ahol akár a későbbiekben módosítás is végezhető rajta.</p>

            <div align="center">
                <img src={require("../../images/demo/onedrive_dataset.png")} width="50%" alt="" />
            </div>

            <h4>Adatsorral kapcsolatos teendők</h4>
            <ul>
                <li>Adatsor kiválasztása</li>
                <li>Betanulási adatsor előkészítése</li>
                <li>Teszt adatsor előkészítése</li>
            </ul>
            <p>Ahhoz, hogy a kutatásunk menetének eredményét meg is tudjuk mutatni, egy megfelelő Datasetre volt szükség, amivel a modellt be tudtuk tanítani és különféle kimutatásokat interaktívan megjeleníteni. Ezt a Datasetet azért választottuk, mivel teljesít minden olyan feltételt, amely szükséges a Machine Learning algoritmusok bemutatásához.</p>

            <div align="center">
                <img src={require("../../images/demo/connections.png")} width="60%" alt="" />
            </div>
            <p>A Dataset része egy IBM Watson-hoz írt példa adatsornak, amely tartalmaz pluszban egy go_1k táblát, viszont nekünk erre nem volt szükségünk, ezért ezt kivettük és a kapcsolatokat újrarendeztük.</p>
            <p>A Classification modell betanításához szükséges Dataseten még további változtatások voltak szükségesek. Egy Custom oszlop beszúrása lehetővé tette a Prediction Outcome kiválasztását, amely a modell kimenetét határozta meg. Továbbá azokra a táblákra, amelyeknél valamilyen értéket módosítani kellett a modellezéshez, Reference táblákkal hivatkoztunk, ezáltal pedig az eredeti tábla továbbra is felhasználható maradt.</p>

            <div align="center">
                <img src={require("../../images/demo/custom_column.png")} width="60%" alt="" />
            </div>

            <p>Szintén a Classification modell alkalmazásához egy olyan példa Dataset létrehozása mellett döntöttünk, amely különböző attribútumokat kombinálva jellemző rendelés típusokat tartalmaz. Ezt a Datasetet manuálisan állítottuk elő Java kóddal a demonstráció kedvéért.</p>
            <button onClick={() => handleJavaCodeButton()}>Java kód</button>
            {isJavaCodeButtonSelected ? (
                <div>
                    <iframe src={require("./JavaCode.txt")} width="70%" height="700px" title="Classification Java Code">
                    </iframe>
                </div>
            ) : (<div></div>)
            }
            <p>A Forecasting modell alkalmazása során semmilyen további Datasetre nem volt szükség, hiszen a dátumokat tároló idősoros adatokat tartalmazó táblához könnyedén és kézenfekvő módon hozzá tudtuk adni az előrejelzés értékeit is.</p>

            <h4>Munkamenet</h4>
            <ul>
                <li>Modellezési technológiák felosztása</li>
                <li>Az osztályozási modell alkalmazása</li>
                <li>Az idősoros előrejelzési modell alkalmazása</li>
            </ul>
            <p>Mindenképpen különböző problémák megoldására szerettük volna alkalmazni a különböző technológiákat. Ezen okból AutoMLlel készült a Classification modell, Python+R scripttel, valamint a desktopon beépített lehetőségekkel pedig különböző Forecastokat készítettünk ugyanis Python+R-nél a Forecasting jobban paraméterezhető, míg AutoML-nél egy Regressziós modellt tudunk létrehozni, amelyből kissé nehézkesen (AutoML dokumentációban a táblák összekapcsolása) lehet dinamikus Forecastot képezni. Ezzel szemben pedig az AutoML Classification modellje jobb teljesítményt nyújtott a jelentések alapján (az AutoML dokumentációban bemutatva), mint a Python+R scriptek, amiket készítettünk.</p>

            <p>A Classification esetében azt a helyzetet/problémát vizsgáltuk, hogy a kedvenc kiskereskedők közül, adott jellemző rendelés típusoknál, melyeknél várhatóak olyan eladások, ahol az eladott mennyiség mértékei meghaladják az hisztorikus átlag értékét. A potenciális eladások közül meg kellett figyelni a termékjellemzőket, a rendelési módot, valamint az eladási árat, hogy melyik, milyen mértékben befolyásolta a Prediction kimenetelét.</p>

            <div align="center">
                <img src={require("../../images/demo/model_training.png")} width="65%" alt="" />
            </div>

            <p>A Forecast probléma megoldásánál egy olyan idősoros adatsort kellett előkészíteni, amely minden hónapra az összeladásokat tartalmazza, valamint a rendelési módszereket és a termékcsaládokat. Mivel a Forecast esetében két modellezési technológia volt felhasználva, így amíg az egyik a rendelési módjának előrejelzését/összefüggését vizsgálta, addig a másik a termékcsaládokét.</p>

            <div align="center">
                <img src={require("../../images/demo/training_datasource.png")} width="65%" alt="" />
            </div>

            <h4>Megosztás</h4>
            <p>Miután sikeresen elkészültünk külön-külön a feladatokkal, a megosztással kapcsolatos kérdésekre kerestük a válaszokat. A létrejött Reportoknál, akár külön is lehetőség van exportálni az egész jelentést úgy, hogy megtartsák az interaktív képességüket. Ez tűnt számunkra a legvalószínűbbnek, hiszen IFRAME segítségével be lehet ágyazni html kódba, emellett bárki megtekintheti azt. Míg más lehetőségeket vizsgálva, azok azért nem lettek volna megfelelőek, hiszen mindenképpen rendelkeznie kell egy fiókkal annak, aki meg szeretné a jelentést tekinteni. Hogy a megosztás maga megvalósuljon, elsősorban a tenant admin felhasználóval kellett engedélyezni a beágyazott kód létrehozását, továbbá a jelentésben létrehozott térkép vizuális megjelenítését.</p>

            <div align="center">
                <img src={require("../../images/demo/export_report.png")} width="70%" alt="" />
            </div>

            <h3>Elkészült jelentések különböző Machine Learning technológiákkal</h3>

            <div align="center">
                <iframe title="demo_BA - Page 1" width="1024" height="612" src="https://app.powerbi.com/view?r=eyJrIjoiZGYxYzZkNjgtZjc3Zi00Yjc2LWFiOWQtNmYwYWIxZWZiYWY5IiwidCI6ImFlOTMwODk5LTAyMTEtNDQ2Yi04NmZkLTI5MDI3ZDE1NGViMCIsImMiOjl9" frameborder="0" allowFullScreen="true"></iframe>
                <p>
                    Classification AutoML technológiával
                </p>
                <iframe title="demo_BJ" width="1024" height="612" src="https://app.powerbi.com/view?r=eyJrIjoiZmFjNjZhMTAtYTFkZS00ZDA3LTllODEtNjM1ZWZmM2JlNzUwIiwidCI6ImFlOTMwODk5LTAyMTEtNDQ2Yi04NmZkLTI5MDI3ZDE1NGViMCIsImMiOjl9&pageName=ReportSection" frameborder="0" allowFullScreen="true"></iframe>
                <p>
                    Forecasting Desktop modullal (1. oldal)
                    és R technológiával (2. oldal)
                </p>
                <iframe title="demo_KA - Sales report" width="1024" height="612" src="https://app.powerbi.com/view?r=eyJrIjoiMTcwNTQ4ODgtNDQxZC00NDI2LWJmMGItOTliMmU2YjgzM2EzIiwidCI6ImFlOTMwODk5LTAyMTEtNDQ2Yi04NmZkLTI5MDI3ZDE1NGViMCIsImMiOjl9" frameborder="0" allowFullScreen="true"></iframe>
                <p>
                    Forecasting Python technológiával
                </p>
            </div>

            <p>Felhasznált források: </p>
            <li><a href="https://relational.fit.cvut.cz/dataset/GOSales">Dataset</a></li>
            <li><a href="https://medium.com/ibm-data-ai/unlocking-your-datas-potential-with-ibm-watson-studio-s-autoai-feature-engineering-on-relational-71a5dcac7b0d">Watson + Go sales</a></li>
            <li><a href="https://docs.microsoft.com/en-us/power-bi/collaborate-share/service-publish-to-web">Publish to web</a></li>

        </div >
    )
}

export default Demo;