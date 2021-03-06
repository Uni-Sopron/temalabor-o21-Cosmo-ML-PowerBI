const R = () => {
  return (
    <div>
      <h1 id="r" align="center">
        R dokumentáció
      </h1>
      <p>
        A kutatási folyamat első lépése a szóbajövő lehetőségek áttanulmányozása
        volt. A Power BI lehetővé teszi, hogy R scripteket ágyazzunk bele a
        Power Query lépéseinkbe, így kézenfekvő lehetőség volt annak vizsgálata,
        hogy egy ilyen scriptbe miképpen tudnánk ML algoritmust beágyazni, és
        ezzel az algoritmussal hogyan tudunk a Power BI-on belül interakcióba
        lépni.
      </p>
      <h2 id="inform-ci-gy-jt-si-szakasz">Információgyűjtési szakasz</h2>
      <p>
        Az első feladat tehát az volt, hogy felfedezzük az{" "}
        <a href="https://cran.r-project.org/doc/manuals/r-release/R-lang.html">
          R nyelvet
        </a>{" "}
        és megtekintsük, milyen alapfunkciókkal és beépített könyvtárakkal
        rendelkezik, amelyek az ML fejlesztést támogatják.{" "}
        <a href="https://cran.r-project.org/doc/manuals/r-release/R-intro.html">
          Az R alapvetően egy statisztikai számításokra és ezen számítások
          grafikai megjelenítésére létrehozott rendszer.
        </a>{" "}
        Az R részét képezi maga az R programnyelv, az R környezet, valamint az
        ahhoz tartozó beépített és ajánlott függvénykönyvtárak. Az R nyelv egy
        speciális célú programnyelv, amely az alapkönyvtárában tartalmaz
        különböző adatkezelési, statisztikai és kirajzoló függvényeket. Az
        alapkönyvtár lehetővé teszi a számunkra, hogy különböző összetett
        adattípusokkal dolgozzunk, amiket egymás között konvertálni tudunk. Az R
        nyelv rendelkezik az objektumorientált programozás lehetőségével,
        ezáltal képesek vagyunk benne absztrakt módon elrejteni olyan
        implementációs részleteket, amik a scriptünk felhasználói szempontjából
        nem lényegesek. Az egyik legfontosabb objektum ebből a szempontból a
        data frame, amibe különböző adatforrásból származó adatokat egységesen
        be tudunk tölteni. A dolgozatnak nem célja az R nyelv teljeskörű
        ismertetése, ahogyan a kutatásnak sem volt célja minden funkciójának a
        kiaknázása. Néhány, jelen dolgozat szempontjából fontos technikai
        részletet azonban megosztunk vele kapcsolatban a későbbiekben is.
      </p>
      <h3 id="scriptel-s-a-power-bi-desktop-editorj-ban">
        Scriptelés a Power BI Desktop editorjában
      </h3>
      <p>
        Miután megismerkedtünk az R nyelv alapvető sajátosságaival, az ML
        elméleti alapjaival, valamint a Power BI Desktoppal, elkezdtük
        vizsgálni, hogy miképpen tudjuk az R scriptet integrálni a Power BI-ba.
        Alapvető kérdés volt, hogy pontosan hova tudnánk, illetve hova lenne
        célszerű ezeket a scripteket beilleszteni. Erre megoldást kínál{" "}
        <a href="https://docs.microsoft.com/hu-hu/power-bi/connect-data/desktop-r-scripts">
          Desktop Power Query editorja,
        </a>{" "}
        valamint a{" "}
        <a href="https://docs.microsoft.com/hu-hu/power-bi/create-reports/desktop-r-visuals">
          reporting felület is, ahol létre tudunk hozni vizualizációkat
          scriptből is.
        </a>{" "}
        Az a kutatás kezdeti szakaszán kiderült, hogy a vizualizációs script
        kevéssé alkalmas ML modellek betanítására. Ennek okai a következők:
      </p>
      <ul>
        <li>
          Kevés flexibilitás abban, hogy a script mikor fusson le és hol
          tároljuk az outputokat
        </li>
        <li>
          Nincs közvetlen lehetőségünk a modell mentésére vagy kiértékelésére
        </li>
        <li>
          A beépített vizualizációk használata nem lehetséges, kénytelenek
          vagyunk a scriptbe építeni a megjelenítést is, ami később problémát
          jelenthet a külső dependenciák miatt
        </li>
        <li>
          Egyéb, technikai jellegű (pl. adatsorok száma, max futási idő)
          korlátozások
        </li>
      </ul>
      <p>
        Mindezen okokból kifolyólag a vizualizációs scripteket a továbbiakban
        nem is kutattuk. Úgy ítéltük, a Power Query Editor adattranszformációs
        funkciója sokkal alkalmasabb arra, hogy a scripteket futtassuk rajta,
        mivel itt lehetőségünk támad a részeredmények Datasetekbe való
        exportálására, valamint több R script egymáshoz láncolására. A scriptek
        editálására a Power BI Desktopon keresztül van lehetőségünk, amely
        rendelkezik egy saját, beépített editorral. A script futtatásának
        egyetlen feltétele, hogy rendelkezzünk egy R interpreterrel, aminek az
        elérési útvonalát a Power BI számára megadhatjuk. Ettől kezdve
        kihasználhatjuk a programnyelv minden adatmanipulációs és
        transzformációs lehetőségét, valamint a telepített könyvtárakat is.
      </p>
      <div align="center">
        <img
          src={require("../../images/r/r_image_7.png")}
          title="workspace"
          width="70%"
          alt=""
        />
      </div>
      <p>
        A kommunikáció a scriptünk és a Power BI között alapvetően data framek
        és Datasetek formájában történik. Fontos megjegyezni, hogy minden
        transzformációs script egy adott Datasetet használ fel inputjaként, az
        outputja pedig egy vagy több R data frame lehet, melyeket tetszőlegesen
        tudunk kombinálni a Datasetünkben. Egyetlen R script egy transzformációs
        lépést reprezentál a Power BI-ban.
      </p>
      <div align="center">
        <img
          src={require("../../images/r/r_image_1.png")}
          title="workspace"
          width="70%"
          alt=""
        />
      </div>
      <p>
        Hamar kiderült az is, hogy a beépített szövegszerkesztő nem elégséges az
        ML algoritmusok írására. Ennek érdekében külső IDE-t, a Microsoft Visual
        Studio Code egy aktuális verzióját használtuk a kódszerkesztésre,
        valamint a futások tesztelésére. A program számos olyan plug-innal
        rendelkezik, amely elősegíti a debugolást és lehetővé teszi a hatékony
        és kényelmes scriptelést. Ez azonban egy körülményes megoldásnak
        bizonyult, hiszen script fájlok nem importálhatóak be a Power BI-ba,
        ezeket minden esetben kézzel kell beilleszteni a megfelelő helyre. A
        scriptek verziókezelése emiatt elkerülhetetlenül összeforrt maguknak a
        pbix fájloknak a verziókezelésével. Azt is érdemes megjegyezni, hogy
        abban az esetben, ha szeretnénk egy robosztusabb ML rendszert építeni,
        ahhoz praktikus okokból szükségünk lesz egy{" "}
        <a href="https://cran.r-project.org/doc/manuals/r-release/R-exts.html">
          R csomag
        </a>{" "}
        létrehozására, ami bizonyos esetekben nagyon körülményes folyamat.
        Amennyiben ezt nem tesszük meg, kénytelenek leszünk az egész scriptet
        egyetlen szövegfájlba összetömöríteni, ami a gyakorlatban nem könnyen
        karbantartható és fenntartható megoldás. Összességében megállapítottuk,
        hogy ez a megoldás csak egyszerű, kisméretű scriptek írására alkalmas,
        az alapvető célja a transzformációs scriptnek, hogy apró
        adatátalakításokat végezzünk el a Dataseten, például abban az esetben,
        ha szeretnénk kihasználni az R nyelv adottságait és nem szeretnénk a
        beépített M scriptelési nyelvre hagyatkozni ehhez. Ennek ellenére az is
        kijelenthető, hogy kisebb predikciók és modellek készítésére ez a
        módszer is alkalmas, kiváltképpen mivel a Power BI Desktop egyszerű
        elérhetősége miatt ez egy igen költséghatékony megoldásnak bizonyul az
        AutoML-lel szemben.
      </p>
      <h2 id="ml-projektek">ML projektek</h2>
      <p>
        Miután megvizsgáltuk annak lehetőségét, hogy hogyan tudjuk bevinni a
        scripteket a Power BI ökoszisztémájába, elkezdtünk azzal a kérdéssel
        foglalkozni, hogy a rendelkezésre állok ML könyvtárak mennyire
        alkalmasak és kompatibilisek az általunk vizsgált környezetben.
        Feltettük azt a kérdést, hogy vajon ezek a scriptek pontosan mikor
        futnak le, képesek vagyunk-e ezeket megosztani a Servicebe, valamint
        automatizálni az ezzel kapcsolatos folyamatainkat. A kezdeti vizsgálatok
        után arra jutottunk, a legegyszerűbben úgy tudjuk kipróbálni a
        koncepcióink gyakorlati használhatóságát, ha konkrét use case-ekre
        fókuszálva kisebb projektekre bontjuk a feladatot. A megoldásainkat két
        konkrét probléma megoldásával, egy összefoglaló demo készítésével,
        valamint az ebből született eredmények összehasonlításával kíséreltük
        meg értékelni. Mindegyik kisebb projekt esetében egy-egy konkrét
        adatforrást választottunk ki, amikre jól ráilleszthetőek voltak az adott
        feladatok.
      </p>
      <h3 id="k-vetelm-nyek">Követelmények</h3>
      <p>
        A scriptek futtatása nem igényel semmilyen különleges erőforrást. Minden
        megvalósítási mód, amit a továbbiakban tárgyalunk, vagy elérhető eleve a
        Power BI Desktop ingyenes licenszén keresztül, vagy az R beépített ill.
        open-source függvénykönyvtárai által kínált funkciókat használja fel,
        vagy pedig a Serviceből elérhető felhőalapú szolgáltatások igénybevétele
        esetén Pro licenszt igényel. A{" "}
        <a href="https://docs.microsoft.com/hu-hu/power-bi/fundamentals/desktop-get-the-desktop">
          rendszerkövetelmények
        </a>{" "}
        nem haladják meg magának a Power BI Desktopnak, illetve a Service
        esetében egy böngészőszoftvernek az általános rendszerkövetelményeit. Az
        általános követelmények nagy részére a bevezető szakaszban már
        kitértünk.
      </p>
      <h3 id="forecasting-projekt">Forecasting projekt</h3>
      <p>
        Azt már korábban ismertettük, hogy milyen adathalmazokat, milyen
        szempontok szerint választottunk ki. Ez a lépés mind Python, mind az R
        és mind az AutoML esetében megegyezett. Mindezek után a következő lépés
        az adatsorok transzformációja volt, amire az R megoldás keretében kettő
        lehetőség is kínálkozott.
      </p>
      <h4 id="adatel-k-sz-t-s">Adatelőkészítés</h4>
      <p>
        Az ETL folyamat egyik megvalósítási módja a Serviceből elérhető{" "}
        <a href="https://docs.microsoft.com/en-us/power-bi/transform-model/dataflows/dataflows-create">
          Dataflow-k
        </a>{" "}
        Power Query Editorjának használata. Ennél a megoldásnál azonban
        mindenképpen figyelembe kell venni a SaaS szolgáltatás technikai
        limitációit, valamint azt, hogy a Dataflow-k létrehozásához legalább Pro
        licenszre van szükség. Számunkra az ehhez szükséges licenszt a COSMO
        Consult Kft. tette elérhetővé. A Dataflow-ba egyszerűen tudunk
        importálni adatokat különböző adatforrásokból, az átalakítások
        végeztével pedig fel tudjuk használni ezeket Datasetek létrehozására,
        amikbe a scriptjeinket beágyazhatjuk. Ebben az esetben a Dataflow-t
        adatforrásként kell felhasználnunk a Power BI Desktopban.
      </p>
      <div align="center">
        <img
          src={require("../../images/r/r_image_0.png")}
          title="workspace"
          width="70%"
          alt=""
        />
      </div>
      <p>
        A másik lehetőségünk az, hogy az eredeti külső adatforrásunkat egyenesen
        a Desktopba importáljuk, és itt végezzük el a szükséges
        transzformációkat. Ezt ingyenes licensszel is képesek vagyunk megtenni,
        emellett pedig a számítási és tárhelylimitációk is csak annak a
        rendszernek a limitációitől függenek, amin a Desktopot futtatjuk. Az
        adatelőkészítés során modellkészítéshez és prediktáláshoz felhasznált
        Datasetünket először is ketté kellett választanunk training és test
        adatokra, eztán az adatokat letisztítottuk és megbizonyosodtunk róla,
        hogy az idősoros adatok eloszlása az időben egyenletes, végül pedig
        létrehoztunk egy olyan táblát, amibe a predikcióink kerülhetnek.
      </p>
      <h4 id="modellezk-sz-t-s-ki-rt-kel-s">Modellezkészítés, kiértékelés</h4>
      <p>
        A modellkészítéshez és prediktáláshoz az R script esetében a{" "}
        <a href="https://www.rdocumentation.org/packages/forecast/versions/8.14/topics/forecast.HoltWinters">
          forecast csomagból elérhető HoltWinters objektumot
        </a>{" "}
        használtuk fel. Ez a megoldás lehetővé tette számunkra, hogy néhány
        trend-, szezonalitás- és frekvencia paraméter megadásával egyszerű
        regressziós modellt építsünk. A vizsgálat végén megbizonyosodtunk
        egyrészt arról, hogy az általunk használt könyvtár, valamint az ebből
        származó modell felhasználható predikciók készítésére és ezeknek az
        átadására a Power BI felé. A kísérlet sikeres volt, azonban meg kell
        jegyeznünk azt, hogy a scriptek karbantartása hosszútávon körülményes
        lehet a külső dependenciák kezelése miatt. Mindemellett belefutottunk
        néhány adatkompatibilitási problémába is a Power BI Dataset és az R data
        frame között, amit azzal orvosoltunk, hogy a dátum mezőket szöveggé
        alakítottuk, a lokalizációt pedig nemzetközi formátumra állítottuk. A
        modellünk kiértékelésében az R beépített{" "}
        <a href="https://www.rdocumentation.org/packages/base/versions/3.6.2/topics/summary">
          summary
        </a>{" "}
        függvénye segített, mely a modellel kapcsolatos fontosabb statisztikai
        jellemzőket jeleníti meg.
      </p>
      <div align="center">
        <img
          src={require("../../images/r/r_image_2.png")}
          title="workspace"
          width="70%"
          alt=""
        />
      </div>
      <div align="center">
        <img
          src={require("../../images/r/r_image_3.png")}
          title="workspace"
          width="70%"
          alt=""
        />
      </div>
      <h4 id="vizualiz-ci-megoszt-s">Vizualizáció, megosztás</h4>
      <p>
        Az így elkészült predikciónk egyszerűen megjeleníthetővé váltak a Power
        BI beépített reportálási lehetőségeinek a segítségével. A munka végén az
        így készült reportot megosztottuk a Serviceben, ahol ki tudtuk próbálni,
        hogy a forrásadatok megváltoztatásával, valamint egy{" "}
        <a href="https://docs.microsoft.com/hu-hu/power-bi/connect-data/refresh-scheduled-refresh">
          ütemezett frissítés
        </a>{" "}
        beállításával újraértékelődnek-e a modelljeink és frissülnek-e a
        predikciók. Úgy találtuk, hogy ezek a Serviceben megtörténnek, tehát
        automatizálható a modellezés és a dinamikus predikció folyamata.
      </p>
      <div align="center">
        <img
          src={require("../../images/r/r_image_4.png")}
          title="workspace"
          width="70%"
          alt=""
        />
      </div>
      <h3 id="bin-ris-klasszifik-ci-s-projekt">
        Bináris klasszifikációs projekt
      </h3>
      <h4 id="adatel-k-sz-t-s">Adatelőkészítés</h4>
      <p>
        A bináris klasszifikációs problémához egy olyan adatforrást készítettünk
        elő, amely alapvetően ennek a problémának a megoldására lett preparálva.
        Az adatok beimportálása és az adatátalakítások ebben az esetben is a
        Forecasting projekt szekcióban taglaltaknak megfelelően működnek.
        Ezekből az okokból kifolyólag a train és a predicted Datasetekhez néhány
        adattípus változtatáson kívül nem kellett más transzformációs műveletet
        elvégeznünk.
      </p>
      <h4 id="modellk-sz-t-s-ki-rt-kel-s">Modellkészítés, kiértékelés</h4>
      <p>
        A modellkészítésre és a predikció készítésére két Dataset állt a
        rendelkezésünkre. Az egyik Dataset néhány vevő vásárlási adatait
        tartalmazta, ezt használtuk a modellünk betanítására és tesztelésére. A
        másik Datasetet a végleges predikció készítésére használtuk fel. Az
        egyetlen akadály abban merült ki ennél a lépésnél, hogy a
        transzformációs script minden esetben egy adott Datasethez tartozik,
        azaz a két különböző forrás Datasetet össze kellett kombinálnunk egy
        nagyobb Datasetbe, amihez hozzácsatoltunk egy további attribútumot, ami
        leírja, hogy az adott sor éppen a training adatokat vagy a predikcióhoz
        használatos adatokat tartalmazza-e. Az R scriptben mindezek után
        könnyedén kettéválaszthattuk és kiszűrhettük a számunkra éppen szükséges
        adatokat. A modellkészítéshez ebben az esetben rendelkezésünkre állt a{" "}
        <a href="https://www.rdocumentation.org/packages/stats/versions/3.6.2/topics/glm">
          glm
        </a>{" "}
        nevű standard beépített függvény. Ezt a függvényt két okból
        választottuk:
      </p>
      <ul>
        <li>
          egyrészt könnyen használható volt az adott problémához, kevés
          paraméter megadása mellett voltunk képesek modellek létrehozására
        </li>
        <li>
          másrészt el tudtuk kerülni ezzel, hogy további külső dependenciákat
          vigyünk a rendszerbe
        </li>
      </ul>
      <p>
        A modellezés során a legnagyobb kihívást az jelentette, hogy
        meghatározzuk a különböző változók és a kimenetel közötti korrelációkat,
        és azoknak az erősségét. A tesztelés során figyeltük, hogy mely változók
        beiktatása esetén lesz a legpontosabb a modellünk, azonban az AutoML
        beépített megoldásához képest ez körülményes volt, és mélyebb
        statisztikai ismereteket igényelt, ha a korrelációk erősségét vizsgálni.
        A dolgozatunknak nem volt célja a predikciók pontosságának a
        maximalizálása, inkább arra koncentráltunk, hogy milyen módon építhetjük
        be a felhasznált megoldásokat a Power BI-ba.
      </p>
      <div align="center">
        <img
          src={require("../../images/r/r_image_5.png")}
          title="workspace"
          width="70%"
          alt=""
        />
      </div>
      <h4 id="vizualiz-ci-megoszt-s">Vizualizáció, megosztás</h4>
      <p>
        A vizualizáció és a megosztás a Forecasting projekt részben leírtakhoz
        hasonlóan ment végbe. Az adatok frissítése is a fentiekhez hasonlóan
        sikeresnek bizonyult.
      </p>
      <div align="center">
        <img
          src={require("../../images/r/r_image_6.png")}
          title="workspace"
          width="70%"
          alt=""
        />
      </div>
    </div>
  );
};

export default R;
