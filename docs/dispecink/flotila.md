---
sidebar_position: 2
title: Flotila
description: Seznam všech vozidel, jejich stav a historie.
---

# 🚗 Flotila
Modul flotila slouží ke kompletní správě vozového parku. Umožňuje přidávání, editaci vozidel, prohlížení detailů o vozidle a protokolů o předání vozidla. Dále pak zprostředkovává přístup k detailním informacím o vozidle, jako jsou technické protokoly, protokoly o předání vozidla, kihy jízd a další.

---
## Celkový přehled
Přehledová obrazovka flotily
![Přehled](/img/web/02_flotila/flotila_001.png)

## Přidání vozidla
:::info
Systém je schopen si načíst velkou část informací o vozidle automaticky z Registru silničních vozidel (dále jen RSV). Stačí zadat VIN kód vozidla a systém si většinu údajů stáhne sám. Tuto funkci však není nutné využít, i když je v rozhraní označená hvězdičkou. 
:::

### Vyplnění základních údajů
#### Krok 1: RSV vyhledávání
Pro přidání vozidla je nutné kliknout na tlačítko <kbd>+ Přidat vozidlo</kbd> v pravém horním rohu obrazovky.  
Je potřeba vyplnit všechna povinná pole, která jsou označena hvězdičkou:
- VIN číslo vozu
- Registrační značku
- Počet najetých kilometrů → **Volitelné**

Pokud nevyužijete vyhledávání pomocí RSV, prosím, vyplňte toto pole ručně. **V tomto kroku doporučujeme rovnou zadat i aktuální počet najetých kilometrů.**

Při využití funkce vyhledávání v RSV vyplňte VIN a klikněte na tlačítko <kbd>Vyhledat v RSV</kbd>. Pokud je vozidlo nalezeno, zobrazí se hlášení o úspěšném stažení dat. ![Přidání vozidla](/img/web/02_flotila/flotila_002.png)

Můžeme pokračovat stisknutím tlačítka <kbd>Pokračovat →</kbd> 

#### Krok 2: Specifikace
Pokud jste využili vyhledávání v RSV a vozidlo bylo v databázi nalezeno, většina polí v následujícím kroku by měla být předvyplněna.

:::info Proč tato data potřebujeme?
Aby systém fungoval správně, musíme mít k dispozici tyto údaje. Využíváme je např. pro generování knih jízd a reportů pro servisní úkony.   
:::

![Specifikace](/img/web/02_flotila/flotila_003.png)

**Doporučujeme** načtená data přesto zkontrolovat a porovnat je s **velkým technickým průkazem** vozidla.  
Následně doplňte následující pole:
- **Přezdívka vozu** – libovolný název, není povinný.
- **Vlastnický stav** – zda je vozidlo ve vlastnictví společnosti, či se jedná o operativní leasing.
- **Počáteční stav vozu** – standardně se automaticky vybírá *Aktivní ve flotile*, což znamená, že vozidlo bude možné hned po přidání do systému využívat řidiči.  

Jakmile máme vše vyplněno, pokračujeme stisknutím tlačítka <kbd>Pokračovat k termínům →</kbd> 

#### Krok 3: Termíny & Olej
Zde je třeba nastavit termín STK, výměny oleje a platnost dálniční známky, pokud ji auto má.

:::info
Datum STK se načítá automaticky z RSV, pokud jste zadali VIN kód a systém vozidlo v databázi nalezl.
:::

![Termíny & Olej](/img/web/02_flotila/flotila_004.png)

Pokud chceme, můžeme vyplnit i předpokládané náklady na jednotlivé úkony. U STK lze také vybrat stanici technické kontroly, kterou běžně využíváte. Návod, jak přidat servisní partnery, naleznete **zde**.  

Pokud máme vše vyplněno, pokračujeme stisknutím tlačítka <kbd>Vytvořit a uložit vozidlo</kbd>.

:::warning POZOR
Pokud nestisknete tlačítko <kbd>Vytvořit a uložit vozidlo</kbd>, vozidlo se neuloží a opuštění stránky znamená ztrátu veškerého zadaného obsahu!
:::

#### Krok 4: Vozidlo bylo přidáno do flotily!
Nyní je vozidlo úspěšně přidáno do naší flotily a zobrazuje se v seznamu všech vozidel.

![Vozidlo přidáno](/img/web/02_flotila/flotila_005.png)

:::tip Nevidíte nové vozidlo?
Pokud se vám nové vozidlo v seznamu ihned nezobrazilo, obnovte stránku stisknutím tlačítka pro obnovení a vozidlo se v seznamu objeví. ![Obnovit](/img/web/02_flotila/flotila_006.png)
:::

## Editace vozidel
Pro editaci vozidla je nejprve nutné vyhledat dané vozidlo v seznamu v modulu Flotila a otevřít si [kartu vozidla](#karta-vozidla). Pro zobrazení **karty vozidla** stačí kliknout kdekoliv na daný řádek.

![Editace vozidel](/img/web/02_flotila/flotila_007.png)  

**V kartě vozidla** se ve vrchní části zobrazují nejdůležitější informace včetně tlačítka <kbd>Upravit vozidlo</kbd>. Po jeho stisknutí se otevře okno, ve kterém můžete upravit základní informace o vozidle.

![Editace vozidel](/img/web/02_flotila/flotila_008.png)  

Pokud chcete uložit změny, stačí kliknout na tlačítko <kbd>Uložit změny vozidla</kbd>.

![Editace vozidel](/img/web/02_flotila/flotila_009.png)  

:::info Kde najdu termíny?
Pokud hledáte termíny pro výměnu oleje, rozvodů atd., naleznete je v sekci [**Termíny**](#terminy).
:::

## Karta vozidla
### Přehled
Karta vozidla představuje detailní přehled všech informací o voze, od knihy jízd přes předávací protokoly až po dokumenty. Vše je přehledně rozděleno do sekcí, ke kterým přistupujete pomocí horizontální menu lišty.

![Karta vozidla - přehled](/img/web/02_flotila/flotila_010.png)  

:::tip
Pokud se u vozidla vyskytnou nějaké problémy nebo události, které vyžadují řešení, uvidíte přímo na menu liště počet problémů u dané kategorie a také velké upozornění na přehledové kartě vozidla.
![Karta vozidla - detail upozornění](/img/web/02_flotila/flotila_011.png)  
:::

#### Průměrný denní nájezd
V přehledu máme rychlou informaci o tom, kolik kilometrů dané vozidlo denně v průměru ujede. Systém tento údaj vypočítává ze záznamů v [knize jízd](#kniha-jízd).  

![Karta vozidla - PDN](/img/web/02_flotila/flotila_012.png)  

#### Průměrná spotřeba PMH
Další užitečnou informací je průměrná spotřeba vozu. Tento údaj se počítá na základě zadaných informací o tankování a počtu ujetých kilometrů mezi jednotlivými tankováními. Údaj má orientační výpovědní hodnotu a nemusí zcela odpovídat realitě na litr přesně.

![Karta vozidla - PS](/img/web/02_flotila/flotila_013.png)  

#### Reporty a dokumenty
Zde můžeme rychle vygenerovat PDF dokument, který obsahuje veškeré dostupné informace o vozidlu. Můžete jej sdílet se servisem, stanicí technické kontroly, případně s úřady.

![Karta vozidla - PDF](/img/web/02_flotila/flotila_014.png)  

#### Náhled knihy jízd
Na stránce s přehledem najdeme také posledních 10 záznamů z knihy jízd vozidla.  
Vidíme zde:
- **Datum jízdy**
- **Řidiče**
- **Čas od – do**
- **Stav jízdy**  

![Karta vozidla - náhled knihy jízd](/img/web/02_flotila/flotila_015.png)

#### Posledních 10 řidičů
Jako poslední sekce zde figuruje náhled **posledních 10 řidičů**, kteří s vozidlem jeli.

![Karta vozidla - náhled knihy jízd](/img/web/02_flotila/flotila_016.png)

### Kniha jízd
Kniha jízd je povinnou součástí agendy pro každé firemní vozidlo. V naší aplikaci se však o ruční vypisování starat nemusíte. Systém provádí zápisy zcela automaticky.

![Karta vozidla - náhled knihy jízd](/img/web/02_flotila/flotila_017.png)

#### Jak probíhá automatický zápis?
Záznamy do knihy jízd se generují na základě tří hlavních údajů:
- Informací z předávacího protokolu **před** směnou.
- Informací z předávacího protokolu **po** směně.
- Celkové délky směny.

#### Ověření a elektronický podpis
Jakmile řidič po ukončení směny odešle závěrečný předávací protokol, je nutné jej v aplikaci potvrdit. K potvrzení lze využít:
- **PIN kód**
- **Biometrické ověření** (např. otisk prstu nebo rozpoznání obličeje)

Po úspěšném potvrzení systém okamžitě provede záznam do knihy jízd. Zvolený způsob autorizace se propíše do sekce **Ověření řidiče** a slouží jako plnohodnotný **elektronický podpis**.

#### Jak otevřít knihu jízd?
Knihu jízd si zobrazíme tak, že na kartě daného vozu klikneme na položku <kbd>Kniha jízd</kbd> ❶ a následně vybereme požadovaný měsíc ❷.

![Karta vozidla - kniha jízd](/img/web/02_flotila/flotila_018.png)  

Otevře se nám detail zvoleného měsíce, který obsahuje dvě tabulky: 
1. Záznamy jízd
2. Tankování

![Karta vozidla - kniha jízd](/img/web/02_flotila/flotila_019.png)  

:::info
Záznamy v knize jízd **nelze** dodatečně upravovat. Jsou bezpečně zapsané v databázi a chráněné proti změnám. Je tedy důležité, aby řidiči vyplňovali veškeré informace pravdivě.
:::

#### Tankování
V tabulce tankování se zaznamenávají veškeré doplňkove pohonných hmot (PMH) do vozidla, které řidič vyplňuje přes mobilní aplikaci. Jakmile řidič doplnění zaznamená, propíše se okamžitě do knihy jízd. 

Součástí záznamu je i účtenka z tankování. Řidič ji v mobilní aplikaci jednoduše vyfotí a systém pomocí OCR (*Optical Character Recognition – optické rozpoznávání znaků*) účtenku přečte a předvyplní požadované údaje za něj.

:::warning POZOR!
OCR není nikdy stoprocentně přesné, a proto je velmi důležité, aby řidiči všechna předvyplněná data zkontrolovali a předešli tak nesrovnalostem.
:::

Pro zobrazení účtenky stačí kliknout na tlačítko <kbd>Účtenka</kbd>.

![Karta vozidla - kniha jízd - PMH](/img/web/02_flotila/flotila_020.png)  

Následně se otevře nové okno s PDF dokumentem účtenky, který si můžete buď stáhnout, nebo otevřít v novém okně.  

<div className="image-row"><img src="/img/web/02_flotila/flotila_021.png" alt="Karta vozidla - kniha jízd - PMH - účtenka" width="600px" /></div>

:::info
Záznamy o tankování se používají jak pro výpočet průměrné spotřeby vozidla, tak pro výpočet skóre řidiče.
:::

#### Export Kinhy jízd
Knihu jízd můžeme také exportovat do PDF dokumentu a následně vytisknout. To se hodí například při kontrole z úřadu. Postup je velice jednoduchý. Stačí v *Kniha jízd* vybrat daný měsíc, ze kterého cheme udělat export a následně kliknout na tlačítko <kbd>Expord PDF</kbd>. 
![Karta vozidla - kniha jízd - Export PDF](/img/web/02_flotila/flotila_022.png)  
Systém následně vygeneruje knihu jízd ve formátu PDF pro danný měsíc.
:::info
Délka generovaní PDF dokumentu může trvat i více jak 10 vteřin.
:::
![Karta vozidla - kniha jízd - PDF](/img/web/02_flotila/flotila_023.png) 

### Předávací protokoly
Na tomto místě nalezneme všechny předávaci protokoly k vozidlu. Můžeme zde: 
- protokoly vyhledávat (1)
- filtrovat podle typu protokolu (2)
- zobrazit si detail protkolu (3)
- exportovat do PDF (4)
![Karta vozidla - předávací protokoly](/img/web/02_flotila/flotila_024.png) 
Zárověň na přehledu vidíme nejdůležitejší informace:
- Typ protokolu → převzetí nebo vrácení vozu (1)
- Řidiče, který protokol vyplňoval (2)
- Datum a čas, kdy byl protokol potvrzen PINem nebo Biometrikou (3)
- Stav tachometru (4)
- Stav nádrže (5)
- A stav schálení dokumetu (6)  
![Karta vozidla - předávací protokoly - UI](/img/web/02_flotila/flotila_025.png) 

#### Detail & fotky
Daný protokol si můžeme otevřít pomocí tlačítka <kbd>Detail & Fotky </kbd>.
![Karta vozidla - předávací protokoly - detail a fotky](/img/web/02_flotila/flotila_026.png)
Otevře se nám nová karta, ve které vidíme všechny detaily předávacího protokolu.
![Karta vozidla - předávací protokoly - detail a fotky](/img/web/02_flotila/flotila_027.png)
:::info
Pokud bylo součásti protokolu hlášení závady nebo poškození, vidíme je ve vrchní části zobrazení detailu.
:::
Každkou fotografii s můžeme zvětšit jednuše kliknutím. Máme zde také možnosti si fotku přiblížit a nebo natočit (1)
![Karta vozidla - předávací protokoly - detail fotky](/img/web/02_flotila/flotila_028.png)
Každá fotografie má v sobě **vypálený vodoznak** s následujícími údaji:
- Registrační značku vozu (RZ)
- Datum a čas pořízení
- GPS souřadnice, kde byla fotografie pořízená
- Jméno řidiče, který fotografii pořídil
![Karta vozidla - předávací protokoly - detail fotky - vodoznak](/img/web/02_flotila/flotila_029.png)

:::info
Vodoznak se považuje jako nezvratný důkaz v případě prokazování odpovědnosti za stav vozidla, řešení případných škod.
:::

#### Export do PDF
Každý protokol můžeme vyexportovat do PDF na dvou místech. A to jak v detailu, kde nalezneme talčíkto <kbd>Stáhout protokol (PDF)</kbd>
![Karta vozidla - předávací protokoly - detail fotky - export](/img/web/02_flotila/flotila_030.png)
nebo v záložce *Předávací protokoly* v *kartě vozu*, kde u každého záznamu je tlačítko <kbd>PDF</kbd>.
![Karta vozidla - předávací protokoly - export](/img/web/02_flotila/flotila_031.png)

Po kliknutí na <kbd>Stáhout protokol (PDF)</kbd> nebo <kbd>PDF</kbd> začně generovaní vybraného protokolu. Jamile je protokol vygenerován automaticky se otevře dialogové okno pro uložení souboru do počítače.
![Karta vozidla - předávací protokoly - export](/img/web/02_flotila/flotila_032.png)
![Karta vozidla - předávací protokoly - export](/img/web/02_flotila/flotila_033.png)
<div className="image-row"><img src="/img/web/02_flotila/flotila_034.png" alt="Karta vozidla - předávací protokoly - export PDF2" width="400px" /><img src="/img/web/02_flotila/flotila_035.png" alt="Karta vozidla - předávací protokoly - export PDF2" width="400px" /></div>
:::warning Pozor
Generovaní protokolu do PDF dokumentu může trvat i několik desítek vteřin, ve vzácných případech i minutu. Systém musí zkomprimovat všechny fotografie a následně je vložit do dokumentu a to je závislé na vytženosti serveru.
:::

### Poškození a závady
V této sekci najdeme všechna nahlášená poškození a závady pro zvolený automobil. Zde také řešíme jak se bude dále s poškozením nebo závadou dít. Pokud se mezi závadami a poškozeními nachízí nějaké nové / neřešené záznamy, je velde sekce v horizontálním menu uveden počet záznamů ❶.

#### Základní rozhraní
Na teto obrazovce se nacházejí tyto ovládací prvky:
- Tlačítko pro rychlé obnovení ❷
- Vytvoření protokolu se závadamy pro servis ❸
- Rychlý přehled o počtu závad a v jakém stavu jsou ❹
- Filtrovaní a vyhledáváaní v závadách ❺
- Zapsaná závada ❻
- Vážnost závady nebo poškození ❼
- Stav závady / kdy se bude řešit nebo jestli již byla vyřešna ❽
- Místo pro psaní komentářů ❾
- Popis nebo komentář od řidiče ❿
- Fotodokumentace ⓫ - kliknutím si fotku zvětšíme

![Karta vozidla - Poškození a závady](/img/web/02_flotila/flotila_036.png)

#### Řešení nového hlášení
Pokud máme nově nahlášene poškození, zobrazí se vždy na několika místech:
1. Na domovské stránce **Přehled**, jak ve vrchní části ❶ tak i v kartě **Nové závady** ❷
![Karta vozidla - Poškození a závady - nové závady](/img/web/02_flotila/flotila_037.png)
2. V protokolu na stránce **Kontrola protokolů**
![Karta vozidla - Poškození a závady - nové závady](/img/web/02_flotila/flotila_038.png)
3. Také samozřejmě v **Kartě vozidla** v sekci **Poškození a závady**
![Karta vozidla - Poškození a závady - nové závady](/img/web/02_flotila/flotila_039.png)  

Po zobrazení nového hlášení, přečtení si popsaného problému a případné prohlédnutí fotodokumentace si můžeme napsat poznámku kliknutím na tlačítko <kbd>Přidat poznámku</kbd>. Následně se pole změní na editační a můžeme si zde zapsat cokiliv nás napadne.
![Karta vozidla - Poškození a závady - nové závady](/img/web/02_flotila/flotila_040.png)  
Jakmile máme poznámku napsanou, klikneme na tlačítko <kbd>Uložit</kbd>. Pokud poznámku ukládat nechceme, jednoduše klineme na tlačítko <kbd>Zrušit</kbd>.  
Následně změníme **stav** nahlášeného poškození/závady. Máme na výběr tyto možnosti:
1. **K řešení / Nová** → Základní stav nově nahlášené závady.
2. **V řešení** → Vozidlo je například již objednáno do servisu nebo se aktivně pracuje na nápravě.
3. **Při servisu** → Pokud se jedná o drobnost, která nevyžaduje okamžitý zásah, můžeme využít tento stav. **Systém nám připomene při plánovaní servisního termínu, že je třeba vyřešit tuto událost**
4. **Vyřešeno / Opraveno** → Pokud je závada opravana nebo jinak vyřešená.

![Karta vozidla - Poškození a závady - nové závady](/img/web/02_flotila/flotila_041.png)

#### Vytvoření protokolu pro servis
:::tip Jak usnadnit komunikaci se servisem?
Pokud se na autě nachází více závad, nebo chceme jen servisu vše usnadnit a urychlit, můžeme si v systému vygenerovat PDF protokol, kde jsou uvedeny všechny důležité infomace.
:::
V **Kartě vozu** stačí přejít opět na záložku **Poškození a závady** a kliknout na <kbd>Exportovat pro servis (PDF)</kbd>
![Karta vozidla - Poškození a závady - report pro servis](/img/web/02_flotila/flotila_042.png)
a otevře se nám nové okno, ve kterém vybereme závady, které chceme mít v protokolu ❶ . Následně můžeme vybrat servisního partnera ❷ u kterého bude oprava probíhat. Zde máme možnost i ručně zadat jméno servisu, pokud jej nemáme uložený mezi našimi servisními partnery. A jako poslední, můžeme přidat vzkaz/poznámku ❸, která se objeví na protokolu.
![Karta vozidla - Poškození a závady - report pro servis](/img/web/02_flotila/flotila_043.png)  
Následně stačí kliknout na <kbd>Stáhnout servisní PDF</kbd> a během několika sekund se vygeneruje protokol pro servis a objeví se okno pro jeho uložení do počítače.
![Karta vozidla - Poškození a závady - report pro servis](/img/web/02_flotila/flotila_044.png)
<div className="image-row"><img src="/img/web/02_flotila/flotila_045.png" alt="Karta vozidla - Poškození a závady - report pro servis - export PDF" width="400px" /><img src="/img/web/02_flotila/flotila_046.png" alt="Karta vozidla - Poškození a závady - report pro servis PDF2" width="400px" /></div>

:::tip
Protokol můžene následně vytisknout nebo poslat pomocí emalu přímo do servisu.
:::

### Specifikace
V této sekci najdeme základní technické informace o vozidle ❶ stejně jako Stav a status ❷, kde můžeme určovat do jaké kategorie vozidlo patří. Kategorii změníme jenduše kliknutím na rozbalovací menu ❸, kde najdeme tyto kategorie:
1. Standart
2. Premium
3. Exclusive
Po vybrání kategorie se automaticky uloží.  
Tlačítko <kbd>Upravit specifikace</kbd> má stejnou funkci a otevírá stejné dialogové okno jako tlačítko <kbd>Upravit vozidlo.</kbd>  
![Karta vozidla - Specifikace](/img/web/02_flotila/flotila_047.png)  

:::info Jak přidat nebo změnit fotografii vozu?
Pokud chcete přidat nebo změnit fotografii k vozu, stačí klinout na logo / existující obrázek vozu a vybrat nový.
![Karta vozidla - Profilový obrázek vozidla](/img/web/02_flotila/flotila_048.png)  
![Karta vozidla - Profilový obrázek vozidla](/img/web/02_flotila/flotila_049.png)
![Karta vozidla - Profilový obrázek vozidla](/img/web/02_flotila/flotila_050.png)    
:::
### Termíny
Sekce termíny slouží k hlidaní termínu, jako je například výměna oleje, platnost technické kontroly, platnost dálniční známky. Dále se v této sekci plánují návšetěvy servisu.
#### Přehled
Na této záložce najdeme následující infomrace:
1. Typ termínu:
- Výměna oleje
- STK
- Povinné ručení
- Havarijní pojistka
- Dálniční známka
- Emisní kontorla
- Výměna rozvodů
- Servisní prohlídka
- Vlastní termín
2. Platnost:
- Datum
- Kilometry
3. Servis / Partner
4. Předpokládané náhlady
5. Tlačítka pro upravu, smazáni  
![Karta vozidla - Terminy - preled](/img/web/02_flotila/flotila_051.png) 
#### Přidání nového termínu / servisu
Nový termín nebo návštěvu servisu přidáme kliknutím na talčítko <kbd>+ Nový termín</kbd>. V novém oknně následně vybereme typ. 
![Karta vozidla - Terminy - preled](/img/web/02_flotila/flotila_052.png) 
:::info
Termíny, které jsou dostupné v RSV, systém automaticky vyplní při přidávaní nového vozidla.
:::