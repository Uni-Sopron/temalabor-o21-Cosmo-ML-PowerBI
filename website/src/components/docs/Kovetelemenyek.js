const Bevezetes = () => {
  return (
    <div>
      <h1 id="k-vetelm-nyek-technol-gi-k-tech-stack" align="center">
        Követelmények, Technológiák, Tech stack
      </h1>
      <p>
        Kutatásunk elvégzéséhez első körben szükségünk volt egy felületre, ahol
        képesek voltunk kollaborálni és megosztani munkáinkat, továbbá tárolni
        minden fontos dokumentumot a kutatással kapcsolatban. Ugyanakkor kellett
        egy vagy több csatorna is, ahol tartani tudtuk a kapcsolatot egymással
        és konzulensünkkel.
      </p>
      <h3 id="-power-bi-service-https-powerbi-microsoft-com-hu-hu-">
        <a href="https://powerbi.microsoft.com/hu-hu/">Power BI Service</a>
      </h3>
      <p>
        Ez a platform volt az egyik jelentős adattárolási szerepet betöltő
        eszközünk, mivel nem csak interaktív report szerkesztési és bővítési
        lehetőségek álltak rendelkezésünkre, hanem ide kerültek közzé tételre az
        egyes reportok, datasettek és kerültek létrehozásra a dataflow-jaink.
        Azure Active Directory tenant-on keresztül kaptunk hozzáférést, amelyet
        konzulensünk bocsájtott rendelkezésünkre. Az AutoML feature csak és
        kizárólag itt elérhető el, továbbá az alternatív megoldások
        szempontjából is fontos, hiszen a Desktopban feltrainelt reportok
        közzétételük után itt hozzáférhetőek.
      </p>
      <h3 id="-github-https-github-com-">
        <a href="https://github.com/">GitHub</a>
      </h3>
      <p>
        A GitHub egy hosting platform verziókövetéshez és kollaborációhoz.
        Mindent, ami a kutatással kapcsolatban szükséges volt (adatok,
        dokumentáció, reportok, weboldal), az ide került feltöltésre. Ennek
        elérésére egy repository-ra volt szükségünk, amit az egyetem
        biztosította számunkra.
      </p>
      <h3 id="-microsoft-teams-https-www-microsoft-com-hu-hu-microsoft-teams-log-in-">
        <a href="https://www.microsoft.com/hu-hu/microsoft-teams/log-in">
          Microsoft Teams
        </a>
      </h3>
      <p>
        A Teams a folyamatos kapcsolattartás miatt került be listánkba, mivel a
        heti meetingjeink konzulensünkkel itt zajlottak, továbbá itt is
        tartottunk külön meetingeket és hoztunk létre külön csoportot, ahol
        szintén a témával kapcsolatos információkat osztottunk meg egymással.
      </p>
      <h3 id="-discord-https-discord-com-">
        <a href="https://discord.com/">Discord</a>
      </h3>
      <p>
        A Discord egy ingyenes VoIP alkalmazás, amelynek segítségével szintén
        képesek voltunk az online térben találkozni és ott is meetingelni. Az
        egyik nagy előny az volt, hogy egyszerre többen is oszthattunk meg
        képernyőt.
      </p>
      <h3 id="-gmail-https-www-google-com-intl-hu-gmail-about-">
        <a href="https://www.google.com/intl/hu/gmail/about/">Gmail</a>
      </h3>
      <p>
        A Gmail a Google levelező szolgáltatása, amit mi többnyire meetingjeink
        ütemezésére használtunk, továbbá konzulensünkkel való kapcsolattartásra.
      </p>
      <h2 id="kutat-munka-elv-gz-s-hez-haszn-lt-technol-gi-k">
        Kutatómunka elvégzéséhez használt technológiák
      </h2>
      <h3 id="-power-bi-desktop-https-powerbi-microsoft-com-hu-hu-desktop-">
        <a href="https://powerbi.microsoft.com/hu-hu/desktop/">
          Power BI Desktop
        </a>
      </h3>
      <p>Verziószám: 2.100.1401.0 (64 bit)</p>
      <p>
        Míg a Service-t inkább az AutoML esetén használtuk a machine learning
        szempontjából, addig az főként a kollaboráció és megosztás eszköze. A
        Desktop alkalmazás ezzel szemben az alternatív, scriptes megoldásainknak
        esetében volt jelentős. Itt tudtunk beilleszteni, futtatni és tesztelni
        scriptjeink hatását, továbbá itt volt elérhető számunkra az eredmények
        kiértékelése is különböző vizualizációs lehetőségek formájában.
      </p>
      <h2 id="-automl-https-docs-microsoft-com-hu-hu-azure-machine-learning-concept-automated-ml-k-vetelm-nyek">
        <a href="https://docs.microsoft.com/en-us/azure/machine-learning/concept-automated-ml">
          AutoML
        </a>{" "}
        követelmények
      </h2>
      <p>
        Az AutoML-lel való modellezés a Power BI Service egy szolgáltatása, így
        értelemszerűen csak böngészőből hajtható végre. Ezen szolgáltatás
        használatához szükséges Prémium licensszel rendelkeznünk, továbbá
        internetkapcsolattal a Service eléréséhez. A munkakörnyezet kialakítása
        során Premium Workspacet kell létrehozni a felhőben, ahol csak
        adatfolyamon belül érhető el az AutoML. Az előre jelzett adatokból való
        jelentések készítése érdekében Power BI Desktopra van szükség, mivel a
        Service nem támogatja.
      </p>
      <h2 id="-r-https-www-r-project-org-k-vetelm-nyek">
        <a href="https://www.r-project.org/">R</a> követelmények
      </h2>
      <p>
        A scriptelési feladat alapvető követelményei közé tartozik a megfelelő
        IDE és platform kiválasztása. A Power BI Desktop ugyan rendelkezik egy
        alapvető, beépített script szerkesztőfelülettel, ez azonban semmiféle
        automatikus formázási lehetőséggel vagy programozást segítő dinamikus
        megoldással nem rendelkezik. Számos integrált fejlesztőkörnyezet
        támogatja az R programozási nyelvet, azonban a feladat komplexitásához
        mérten a legkézenfekvőbb megoldást a Visual Studio Code 1.63.2-es
        verziója jelentette. Ez a szoftver lehetővé tette, hogy gyorsan és
        egyszerűen elkezdjünk scriptelni, valamit nagyfokú testreszabhatóságot
        biztosít számos beépíthető plug-injével.
      </p>
      <p>
        Ezek közül a kódírás megkönnyítésére az{" "}
        <a href="https://github.com/REditorSupport/vscode-R">
          &#39;R Extension for Visual Studio Code&#39;
        </a>{" "}
        2.3.6-os verzióját használtuk, mely számos hasznos funkciót magába
        foglal, többek között szervizalapú kódanalízist, szintaxis kiemelést,
        package managementet, terminál-kezelést valamint vizuális adatelemzést
        is. Ennek jó alternatívája lehetett volna az RStudio nevű IDE, amely
        inkluzívan tartalmaz lehetőségeket R scriptek futtatására, buildelésére,
        valamint programírásra. Az egyszerűség kedvéért mi a Visual Studio
        Code-ot alkalmaztuk. A script interpretálásához és futtatáshoz az R
        standard, hivatalos 4.1.2-es verzióját használtuk.
      </p>
      <p>
        Az R beépített függvénykönyvtára számos out-of-box lehetőséget tartalmaz
        mind adatelőkészítési és -transzformációs feladatokhoz, mind ML
        algoritmusok készítéséhez. Binary classificationhöz mi a beépített{" "}
        <a href="https://www.rdocumentation.org/packages/stats/versions/3.6.2/topics/glm">
          glm függvényt
        </a>{" "}
        használtuk, amely generalizált lineáris modellek alkotására alkalmas. Ez
        a függvény nagymértékben paraméterezhető, rugalmas, valamint beépített
        jellege miatt kevésbé okoz kitettséget külső dependenciák felé.
        Forecastingra a &#39;forecast&#39; nevű R könyvtár 8.15-ös verziója jó
        megoldásnak bizonyult az egyszerű kezelhetősége miatt. Ennek a
        könyvtárnak elsősorban a HoltWinters módszer alapú függvényeit és
        objektumait használtuk ki.
      </p>
      <h2 id="-python-https-www-python-org-k-vetelm-nyek">
        <a href="https://www.python.org">Python</a> követelmények
      </h2>
      <p>Veriószám: 3.9.7</p>
      <p>
        Ahhoz, hogy el tudjunk kezdeni dolgozni szükségünk lesz egy Python
        interpreterre is, ehhez célszerű egy aktívan támogatott verziót
        letöltenünk. Alapvetően több lehetőség áll rendelkezésünkre, hiszen mind
        a Microsoft{" "}
        <a href="https://www.microsoft.com/hu-hu/store/new/games/pc">Store</a>
        -jából elérhető számunkra, de természetesen a{" "}
        <a href="https://www.python.org/downloads/">hivatalos oldalról</a> is
        letölthetjük.
      </p>
      <p>
        Ugyanakkor léteznek még más alternatívák is, például az{" "}
        <a href="https://anaconda.org/">Anaconda Navigator</a>, amely egy Python
        és R nyelvhez készült disztribúció kifejezetten tudományos
        számításokhoz, mint például a machine learning. Beépített csomagkezelője
        segítségével megkönnyíti függőségeink kezelését, továbbá a különböző
        környezetek létrehozásakor különböző Python verziókkal tudunk dolgozni,
        ráadásul ingyenes. Ehhez a projekthez mi az Anaconda Navigator-t
        választottuk, amiben a base(root) környezet 3.9.7 verziójú Python
        interpreterét használtuk.
      </p>
      <h3 id="python-k-nyvt-rak">Python könyvtárak</h3>
      <p>
        A Scikit-Learn and a Statsmodels könyvtárak azért kerültek
        kiválasztásra, mivel a Power BI-ban használható könyvtárak száma{" "}
        <a href="https://docs.microsoft.com/hu-hu/power-bi/connect-data/service-python-packages-support">
          korlátos
        </a>
        , ML könyvtárak tekintetében nincs más ezen a két könyvtáron kívül.
        Éppen ezért a két feladathoz mindkét könyvtárból válaszottunk egy-egy,
        az adott feladathoz illeszkedő modellt.
      </p>
      <h4 id="-pandas-https-pandas-pydata-org-">
        <a href="https://pandas.pydata.org/">Pandas</a>
      </h4>
      <p>Verziószám: 1.3.4</p>
      <p>
        A Pandas vagy másnéven a Python adatelemző könyvtár adatok kezelésére,
        tisztítására, ETL folyamatok elvégzésére, továbbá idősor-specifikus
        igények ellátását biztosító gyűjtemény. Gyors és rugalmas
        adatstruktúrákat bocsát rendelkezésre, adatelemzésekhez elengethetetlen.
        A pandas kötelező ahhoz, hogy a Power BI-ban bármilyen jellegű Python
        scriptet tudjunk használni, hiszen a Power BI-tól az adatokat mindig
        DataFrame-ek formájában kapjuk meg, ami a könyvtár egyik
        adatstruktúrája.
      </p>
      <h4 id="-scikit-learn-https-scikit-learn-org-stable-">
        <a href="https://scikit-learn.org/stable/">Scikit-Learn</a>
      </h4>
      <p>Verziószám: 0.24.2</p>
      <p>
        Egy ingyenes és algoritmusokban gazdag Python könyvtár, amely gépi
        tanuláshoz készült. Kutatásunk során a könyvtárból a logisztikus
        regressziós algoritmussal dolgoztunk, mivel ez a megoldás alkalmas
        leginkább egy adott létező osztály valószínűségének modellezésére. A
        modell a linear_model modul része.
      </p>
      <h4 id="-statsmodels-https-www-statsmodels-org-stable-index-html-">
        <a href="https://www.statsmodels.org/stable/index.html">Statsmodels</a>
      </h4>
      <p>Verziószám: 0.12.2</p>
      <p>
        Speciális felhasználású statisztikai és regressziós függvények
        gyűjteménye egyetlen Python könyvtárban. Az előrejelzési feladat során
        használtuk a könyvtár exponenciális simítás modelljét, mivel idősoros
        adataink voltak szezonálisan és csak egy változóval dolgoztunk. A modell
        a Holtwinters modul része.
      </p>
      <h4 id="-matplotlib-https-matplotlib-org-">
        <a href="https://matplotlib.org/">Matplotlib</a>
      </h4>
      <p>Verziószám: 3.4.3</p>
      <p>
        Python nyelvhez készített ábrázoló könyvtár, amely segítségével képesek
        vagyunk Power BI-ban más, a könyvtárban elérhető megoldásokkal
        adatvizualizációk létrehozására és használatára 1-1 reporton belül. A
        munka során kifejezetten nem használtuk, ugyanakkor a tanulási
        időszakban teszteltük annak lehetőségét, hogy a Machine Learning
        scriptek futtathatóak-e vizualizácós script-ben is. Amennyiben
        szeretnénk ilyen vizualizációt is létrehozni, akkor telepítenünk kell
        ezt a csomagot is a Pandas mellett.
      </p>
      <h3 id="editor">Editor</h3>
      <ul>
        <li>
          Név: <a href="https://code.visualstudio.com/">VS Code</a>
        </li>
        <li>Verziószám: 1.63.2 (64 bit)</li>
        <li>Python extension verziószáma: v2021.12.1559732655</li>
      </ul>
      <p>
        Noha a Power BI Desktop rendelkezik script editorral, ugyanakkor ez nem
        nyújt több lehetőséget számunkra, mint egy egyszerű Notepad. Éppen
        emiatt szükségünk volt egy editorra, amit használhatunk Python
        scriptjeink szerkesztéséhez. Mivel a VS Code lightweight,
        testreszabható, ingyenes és több munka során használtuk már, így ezt
        választottuk a scriptek szerkesztéséhez.
      </p>
      <p>
        Ahhoz, hogy szerkesztőnk képes legyen a Python-nal hatékonyan dolgozni
        és megkapjuk hozzá a szükséges támogatást, így telepítenünk kellett a
        Microsoft Python Extension-jét, ami lehetővé teszi az alábbiakat:
      </p>
      <ul>
        <li>
          Intellisense (Pylance extension, ami a Python extension mellett kerül
          telepítésre)
        </li>
        <li>
          Linting (statikus kódelemző eszköz programozási hibák megjelölésére)
        </li>
        <li>Debug lehetőség</li>
        <li>Kód navigáció és formázás</li>
        <li>Refactorálás</li>
        <li>
          Variable explorer (Változók állapotának és értékeinek nyomon
          követesére)
        </li>
        <li>Test explorer (Unit testek futtatásához)</li>
      </ul>
      <p>Munkánk jelentős részét az editorban végeztük.</p>
    </div>
  );
};

export default Bevezetes;
