const Python = () => {
  return (
    <div>
      <h1 id="python-dokument-ci-">Python dokumentáció</h1>
      <p>A dokumentáció ezen részében kitérünk az alábbiakra:</p>
      <ul>
        <li>editorok és szükséges lépések</li>
        <li>Python szükséges lépések</li>
        <li>bináris osztályozás scikit-learn könyvtárral</li>
        <li>előrejelzés statsmodels könyvtárral</li>
      </ul>
      <h2 id="editorok">Editorok</h2>
      <p>
        A kutatás során 3 editorral találkoztunk, amikor Pythonnal dolgoztunk.
      </p>
      <p>
        Ebből a legfontosabb számunkra a{" "}
        <a href="https://code.visualstudio.com/">Visual Studio Code</a> volt,
        amit mi választottunk, hiszen itt volt a legoptimálisabb a munka
        elvégzése. Ahhoz, hogy a Python-t a lehető legjobb keretek között
        szerkeszthessük telepítenünk kell egy{" "}
        <a href="https://marketplace.visualstudio.com/items?itemName=ms-python.python">
          extensiont
        </a>
        , amit az applikációból kényelmesen meg tudunk tenni. Természetesen
        egyéb extension-öket is telepíthetünk, viszont mi az egyszerűség
        kedvéért ezt válaszottuk.
      </p>
      <p align="center">
        <img
          src={require("../../images/python/python_extension_in_vscode.jpg")}
          alt="VS Code Python extension"
          width="800px"
        />
      </p>
      <p>
        Azért, mert a Power BI transformációs script editora egy-az-egyben kéri
        a scriptet, így nem történt kód kiszervezés sem. Minden egyes scriptet
        egy-egy fájlban írtunk meg, majd tartalmukat átmásoltuk. Fontos
        megjegyezni, hogy az itt megírt adat importjainkat (CSV, Excel, stb.),
        amikkel teszteljük mondelljeink helyességét, feltétlenül vegyük ki a
        Power BI Desktop-ba illesztett editorból, mivel az alkalmazás
        rendelkezésünkre bocsájtja az adatokat egy &#39;dataset&#39; nevű Pandas
        DataFrame fromájában.
      </p>
      <p align="center">
        <img
          src={require("../../images/python/PBI_editor.jpg")}
          alt="Python editor Power BI Desktop-ban"
        />
      </p>
      <p>
        A képen jól látható, hogy a beépített Power BI editor nem igazán
        biztosít sok lehetőséget, ugyanakkor ez áll egyedül rendelkezésünkre, de
        ez nem is probléma, hiszen ezért választottunk eleinte egy külön editort
        erre a feladatra. Még egy alternatívánk a vizuális scriptek editora, ami
        már rendelkezik ugyan egy részleges syntax highlight-tal, ugyanakkor
        nincs automatikus kódkiegészítés, lintelés, továbbá munkánk során ezt a
        lehetőséget azért sem használtuk, mert nem itt illesztettük be gépi
        tanulási modelljeink kódját.
      </p>
      <p align="center">
        <img
          src={require("../../images/python/visualisation_script_editor.jpg")}
          alt="Visualization editor Power BI Desktop-ban"
        />
      </p>
      <h2 id="python-sz-ks-ges-l-p-sek">Python szükséges lépések</h2>
      <p>
        Első lépésként aktiváljuk Power BI-ban a script lehetőséget és mutassunk
        rá a Python-t tartalmazó könyvtárra, ez a mi esetünkben az Anaconda
        gyökér könyvtára lesz.
      </p>
      <p align="center">
        <img
          src={require("../../images/python/PBI_script_setting.jpg")}
          alt="Anaconda in Power BI"
        />
      </p>
      <p>
        Ahhoz, hogy a Power BI érzékelje Python-unkat és ne dobjon hibát kód
        futtatásakor, szükséges az alábbi környezeti változókat beállítanunk,
        amennyiben Anaconda disztribúciót használunk.
      </p>
      <p align="center">
        <img
          src={require("../../images/python/python_required_env_settings.jpg")}
          alt="Environment variables"
        />
      </p>
      <p>
        Ez sajnos nem dokumentált lépés és nem is javított probléma, ugyanakkor
        az alábbi{" "}
        <a href="https://community.powerbi.com/t5/Desktop/Microsoft-PowerBI-Scripting-Python-Exceptions/td-p/850714">
          link
        </a>{" "}
        segítségével oldottuk meg mi is a problémát.
      </p>
      <h2 id="bin-ris-oszt-lyoz-s">Bináris osztályozás</h2>
      <p>
        A feladat megvalósításához két tábla adatait használtuk fel, amelyek
        bicikli eladásokat vizsgálnak. Munkánk során arra próbálunk becslést
        tenni, hogy vajon hányan vásárolnak biciklit és milyen a vásárlók és nem
        vásárlók aránya.
      </p>
      <p>Az itt használt tábláink:</p>
      <ul>
        <li>BikeTraining.csv</li>
        <li>ProspectiveBuyer.csv</li>
      </ul>
      <p>
        <a href="https://github.com/BlueGranite/AI-in-a-Day/tree/master/AutoML">
          Link a fájlokhoz
        </a>
      </p>
      <h3 id="power-bi-m-veletek">Power BI műveletek</h3>
      <p>
        Mivel modellünket csak helyben tudtuk alkalmazni, így a train táblát és
        a test táblát konkatenálnunk kellett. (A másik megoldás az lett volna,
        ha egy fájlból húzzuk be az összes adatunkat.)
      </p>
      <p>
        Az adatimport lépése során arra kell odafigyelnünk, hogy minden adat a
        megfelelő adattípusú legyen, ezért muszáj először ezt ellenőriznünk és
        javítanunk, ahol szükséges.
      </p>
      <p align="center">
        <img
          src={require("../../images/python/PBI_data_transform.jpg")}
          alt="Adat átalakítás"
        />
      </p>
      <p>Módosított oszlopok listája a táblákban:</p>
      <ul>
        <li>
          Text -&gt; Egész szám átalakítás
          <ul>
            <li>YearlyIncome</li>
            <li>Age</li>
            <li>NumberChildrenAtHome</li>
            <li>NumberCarsOwned</li>
            <li>TotalChildren</li>
          </ul>
        </li>
      </ul>
      <p>
        Az ide betöltött táblákhoz a típusok ellenőrzése után hozzáadtunk 1-1 új
        oszlopot &#39;Type&#39; névvel, hogy meg tudjuk különböztetni a két
        táblát egymástól az összevonás után is. Míg modelltanításra szánt
        táblánk a &#39;Train&#39; értéket kapta, úgy a teszteléshez szánt pedig
        a &#39;Test&#39; értéket.
      </p>
      <p align="center">
        <img
          src={require("../../images/python/train_column_classification.jpg")}
          alt="Train oszlop"
        />
      </p>
      <p align="center">
        <img
          src={require("../../images/python/test_column_classification.jpg")}
          alt="Teszt oszlop"
        />
      </p>
      <p>
        Ezek után összevontuk tábláinkat, amiken már képesek voltunk a script
        futtatására.
      </p>
      <p align="center">
        <img
          src={require("../../images/python/append.jpg")}
          alt="Táblaösszekötés"
        />
      </p>
      <p>Az így kapott táblával már képesek vagyunk a script futtatására.</p>
      <h3 id="python-m-veletek">Python műveletek</h3>
      <p>
        A bináris osztályozási feladat során a scikit-learn könyvtárral
        dolgoztunk.
      </p>
      <p align="center">
        <img
          src={require("../../images/python/lib_imports_classification.jpg")}
          alt="Könyvtár importok"
        />
      </p>
      <p>
        Ezután érdemes a később használt objektumokat egyben deklarálni, bár ez
        ízlés kérdése, mi inkább a kód elejére tettük őket a becslés során
        használt függő és független tulajdonságokkal egyetemben.
      </p>
      <p align="center">
        <img
          src={require("../../images/python/features_and_object_inits_classification.jpg")}
          alt="ML object inits and features"
        />
      </p>
      <p>
        Ezek után a helyben való tesztelhetőség érdekében célszerű az adatinkat
        beolvasni olyan formában, ahogy a Power BI is szolgáltatná nekünk egy
        nagy dataset formájában, majd szétszedni azt azon oszlop alapján, amit a
        Power BI-ban meghatároztunk az adattranszformációs lépésben. Szintén
        fontos kijelölni előre egy datasetet, amit visszaadunk majd a folyamat
        végén, mivel a modellhez át kell majd alakítanunk a kezdeti
        datasetjeinket. Itt deepcopy-t használtuk a copy modulból, amit nem kell
        külön telepítenünk, mivel a Python Lib könyvtárában megtalálható. Erre
        azért volt szükség, mivel amikor egy dataset részét kivesszük, akkor az
        referenciával rendelkezik az eredeti dataset-re, mi pedig ezt el
        szeretnénk kerülni az átalakítások miatt.
      </p>
      <p align="center">
        <img
          src={require("../../images/python/data_import_classification.jpg")}
          alt="Data import"
        />
      </p>
      <p>
        Ezután áttérünk az átalakításokra, amihez a{" "}
        <a href="https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.LabelEncoder.html">
          LabelEncoder
        </a>{" "}
        osztályt és a{" "}
        <a href="https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.StandardScaler.html">
          StandardScaler
        </a>{" "}
        osztályt használtuk fel. Míg előbbi abban segít nekünk, hogy azon
        oszlopainkat, amelyek nem számformátumúak, számmá konvertálja, addig
        utóbbi a normalizálásban / standardizálásban segít. Az elsőre azért van
        szükség, mert az átalakítások és számítások során számokra van
        szükségünk a munkához, mint például amikor a StandardScaler objektumunk
        normalizálja az értékeket.
      </p>
      <p align="center">
        <img
          src={require("../../images/python/LabelEncoder_es_StandardScaler.jpg")}
          alt="LabelEncoder és StandardScaler"
        />
      </p>
      <p>
        A korábbi szétválogatás miatt viszont szükséges végig mennünk mindkettő
        DataFrame-en, ahhoz, hogy képesek legyünk független változóinkat
        tartalmazó oszlopainkon végigiterálni. Ezt követően már normalizálhatjuk
        is azokat. Figyeljük meg, hogy a függő változónkat tartalmazó oszlophoz
        nem nyúltunk, így azok értékei változatlanul maradnak azokon az
        értékeken, amiken alapvetően voltak.
      </p>
      <p>
        A képen továbbá látszik az is, hogy inicializáltuk{" "}
        <a href="https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.LogisticRegression.html">
          LogisticRegression
        </a>{" "}
        modellünket, amit előbb a train adatokkal betanítunk, majd pedig az
        átalakított test adatokon alkalmazzuk.
      </p>
      <p>
        Eredményünk az a DataFrame objektum (&#39;resultset&#39;), amit feljebb
        inicializáltunk a test adatsor azon oszlopaival, amelyek a predikcióban
        részt vettek, kibővítve azzal a sorozattal, amit a predikció
        szolgáltatott. Fontos megjegyezni, hogy a visszakapott objektum adatait
        ismét át kell alakítanunk, mivel azokra nincs hatással az előzetes típus
        módosítás, amikor scriptként átadásra kerülnek a Power BI-tól.
      </p>
      <p>
        Eredményünk jobbra a becsléssel jött létre, míg balra pedig az eredeti
        adatsorból készített tortadiagram látható.
      </p>
      <p align="center">
        <img
          src={require("../../images/python/prediction_in_PBI_classification.jpg")}
          alt="Classification results"
          width="800px"
        />
      </p>
      <h2 id="el-rejelz-s">Előrejelzés</h2>
      <p>
        Ehhez a feladathoz egy táblát használtunk, amely repülési adatokat
        tartalmaz 11 évről, havi bontásban. A feladat során azt próbáltuk
        megbecsülni, hogy hogyan alakul a repülések aránya az eredeti adatsort
        követő 6 hónapban. Összességében 18 hónapot vetítettünk előre, de
        korábbról indítottuk modellünket egy évvel, hogy annak eredménye a
        valósággal összehasonlítható legyen.
      </p>
      <p>
        Az adatsor táblája{" "}
        <a href="https://www.kaggle.com/rakannimer/air-passengers">itt</a>{" "}
        található meg.
      </p>
      <h3 id="power-bi-m-veletek">Power BI műveletek</h3>
      <p>
        Az adatok importálása után az adattranszformációs részen azt
        tapasztaltuk, hogy a Power BI jól meg tudta becsülni adataink típusát,
        így itt csupán annyit kell átállítanunk (bár ez inkább megszokás
        kérdése), hogy az adott hónap ne első, hanem utolsó napját vegyük minden
        esetben.
      </p>
      <p align="center">
        <img
          src={require("../../images/python/data_transform_forecast.jpg")}
          alt="Adattranszformáció"
        />
      </p>
      <p>
        Ekkor duplikáltuk táblánkat, mivel a valós adatokra még szükségünk lesz,
        majd ezt követően hozzáadtunk a táblánkhoz egy új oszlopot
        &#39;Type&#39; névvel, aminek értékül &#39;Real&#39;-t adtunk. (Itt
        alkalmazhattunk volna tábla referenciát is.)
      </p>
      <p align="center">
        <img
          src={require("../../images/python/table_duplication_forecast.jpg")}
          alt="Duplikáció"
        />
      </p>
      <p align="center">
        <img
          src={require("../../images/python/real_column_forecast.jpg")}
          alt="Real oszlop"
        />
      </p>
      <p>A duplikált táblában pedig a dátumra szűrést alkalmaztunk.</p>
      <p align="center">
        <img
          src={require("../../images/python/date_filter_forecast.jpg")}
          alt="Dátum szűrés"
        />
      </p>
      <p>Scriptjeinket ettől a ponttól futtattuk.</p>
      <h3 id="python-m-veletek">Python műveletek</h3>
      <p>
        A forecast feladat során a statsmodels könyvtár{" "}
        <a href="https://www.statsmodels.org/dev/generated/statsmodels.tsa.holtwinters.ExponentialSmoothing.html">
          Holtwinters&#39; Exponential Smoothing
        </a>{" "}
        modellét alkalmaztuk.
      </p>
      <p align="center">
        <img
          src={require("../../images/python/lib_imports_forecast.jpg")}
          alt="Könyvtár importok"
        />
      </p>
      <p>
        Itt definiáltunk egy függvény annak érdekében, hogy a{" "}
        <a href="https://pandas.pydata.org/docs/reference/api/pandas.date_range.html">
          date_range
        </a>{" "}
        függvény eredményéül kapott DatetimeIndex-et abba a dátumformátumba
        hozzuk, amivel dolgozni szeretnénk a későbbiek folyamán. Ahhoz, hogy
        ugyanazokkal a dátumokkal dolgozzon modellünk, szükséges leszűrnünk
        eredeti datasetünket a kívánt dátumtartományra. Továbbra is érvényes az,
        hogy az itt beolvasott adatok csak a tesztelés lehetősége miatt vannak
        itt, a Power BI-ba való beillesztés pillanatában kivételre kerültek.
      </p>
      <p align="center">
        <img
          src={require("../../images/python/dataset_import_forecast.jpg")}
          alt="Adatok beolvasása teszteléshez, dátumsorozat generálása"
        />
      </p>
      <p>
        Ezt követően létrehoztuk modellünket, amely kiértékeléshez megkapta
        paraméterül:
      </p>
      <ul>
        <li>Az adatsor azon részét, amelyre becslést kívántunk készíteni</li>
        <li>
          Az inicializációs metódust, aminek alapértelmezetten a modell szerint
          becsült érték
        </li>
        <li>
          A trendet, ami leírja adatsorunk két dimenziós térben felvett irányát
        </li>
        <li>A szezonalitást, ami leírja adatsorunk időszakos ingadozásait</li>
        <li>Periódusok számát, amely meghatározza az adatok periodikusságát</li>
        <li>
          Boxcox transzformáció bekapcsolását, amely lehetővé teszi, hogy
          normalizáljuk adatsorunkat
        </li>
      </ul>
      <p align="center">
        <img
          src={require("../../images/python/model_forecast.jpg")}
          alt="Előrejelzési modell"
        />
      </p>
      <p>
        Ezek után modellünk segítségével előre becsüljük az adatsor utolsó
        évének kezdetétől számítva az elkövetkező 18 hónap értékeit, majd a
        visszakapott értékeket kerekítjük.
      </p>
      <p>
        Végül visszaadtuk egy DataFrame keretében a becslésünket és az ahhoz
        tartozó dátum intervallumot.
      </p>
      <h2 id="power-bi-m-veletek-2">Power BI műveletek 2</h2>
      <p>
        A visszakapott tábla oszlopait ellnőriztük, mivel előfordul, hogy nem
        megfelelő a típuskonverzió. Így is történt, így a kapott eredményoszlop
        értékeit egész számmá alakítottuk, majd beszúrtunk egy új oszlopot
        &#39;Type&#39; névvel és &#39;Forecast&#39; értékkel.
      </p>
      <p align="center">
        <img
          src={require("../../images/python/forecast_column_forecast.jpg")}
          alt="Forecast oszlop"
        />
      </p>
      <p>
        Végül pedig konkatenáltuk a két táblát, melynek eredményeképpen már
        képesek voltunk vizualizálni eredményünket és a meglévő adatokat egy
        grafikonon.
      </p>
      <p align="center">
        <img
          src={require("../../images/python/concat_forecast.jpg")}
          alt="Konkatenált táblák"
        />
      </p>
      <p>Az előrejelzés eredménye egy grafikonon:</p>
      <p align="center">
        <img
          src={require("../../images/python/forecast.jpg")}
          alt="Előrejelzés"
          width="800px"
        />
      </p>
    </div>
  );
};

export default Python;
