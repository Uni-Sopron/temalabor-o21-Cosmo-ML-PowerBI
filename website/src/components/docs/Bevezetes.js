const Bevezetes = () => {
    return (
        <div>
            <h1 id="bevezetés">Bevezetés</h1>
            <p>A vállalati adatvizualizáció és -elemzés területének egyik kimagasló megoldása a <a href="https://powerbi.microsoft.com/hu-hu">Microsoft Power BI</a>, ami a 2021-es évben is nagy népszerűségnek örvendett.</p>
            <figure align="center">
                <img src={require("../../images/bevezetes/Power_BI_2021.png")} title="Power Bi 2021-ben az adatvizualizációs szoftverek körében" width="80%" alt="" />
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
    )
}

export default Bevezetes;