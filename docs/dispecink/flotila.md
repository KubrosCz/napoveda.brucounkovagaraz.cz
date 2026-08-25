---
sidebar_position: 2
title: Flotila
description: Seznam všech vozidel, jejich stav a historie vozidel.
---

#🚗 Flotila
Modul flotila slouží ke kompletní správě vozového parku. Umožňuje přidávání, editaci vozidel, prohlížení detailů o vozidle a protokolů o předání vozidla. Dále pak zprostředkovává přístup k detailním informacím o vozidle, jako jsou technické protokoly, protokoly o předání vozidla, kihy jízd a další.

---

## Celkový přehled
![Přehled](/img/web/02_flotila/flotila_001.png)

## Přidání vozidla
:::info
Systém je schopen si načíst velkou část informací o vozidle automaticky z Registru Silničních Vozidel, dále jen RSV. Stačí zadat VIN kód vozidla a systém si načte většinu informací o vozidle. Tuto funkci není však nutné využít, i když je označená hvězdičkou.. 
:::
### Vyplnění základních údajů
#### Krok 1: RSV Vyhledávání
Pro přidaní vozidla je nutné kliknout na tlačítko <kbd>+ Přidat vozidlo</kbd> v pravém horním rohu obrazovky.  
Je nutné vyplnit všechny povinné pole, které jsou označeny hvězdičkou:
- VIN číslo vozu
- Registrační značku
- Počet najetých kilometrů → **Volitelné**

Pokud nevyužijete vyhledávání pomocí RSV přesto, prosím, vyplňtě toto pole. **V tomto kroku doporučujeme rovnou zadat i počet najetých kilometrů.**
Při využití funkce vyhledávání v RSV vyplňte VIN a klikněte na tlačítko <kbd>Vyhledat v RSV</kbd>. Pokud je vozidlo nalezeno, dostanete informaci, že data byly úspěšné.![Přidání vozidla](/img/web/02_flotila/flotila_002.png)
Můžeme pokračovat stisknutím tlačítka <kbd>Pokračovat →</kbd> 

#### Krok 2: Specifikace
Pokud jste využili vyhledávaní v RSV a vozdilo bylo v databázi nalezeno, vetšina poli v následujícím kroku by měla být předvyplněna.
:::info Proč tyto data potřebujeme?
Aby systém fungoval správně, musíme mít k dispozici tyto data. Využiváme je např. pro generování knih jízd a generovaní reportů pro servisní úkony.   
:::
![Specifikace](/img/web/02_flotila/flotila_003.png)
**Doporučujeme** načtená data přesto zkontrolovat, zdali jsou správné podle **velkého technického průkazu** vozidla.  
Následně doplňte následující pole:
- **Přezdívka vozu** - libovolná přezdívka, není nutností.
- **Vlastnický stav** - Zda je vozidlo ve vlastnictví společnosti, či se jedná o operativní leasing.
- **Počáteční stav vozu** - Standartně se automaticky vybírá *Aktivní ve flotile*, což znamená, že vozidlo bude možné hned po přidaní do systému být využiváno řidiči.  
Jakmile máme vše vyplněné, můžeme pokračovat stisknutím tlačítka <kbd>Pokračovat k termínům →</kbd> 


#### Krok 3: Termíny & Olej
Zde je třeba nastavit termín STK, výměny oleje, platnost dalniční známky, pokud ji auto má.
:::info
Datum STK se načítá automaticky z RSV, pokud jste VIN kód vozidla zadali a systém nalezl vozidlo v databázi.
:::
![Termíny & Olej](/img/web/02_flotila/flotila_004.png)
Pokud chceme, můžeme vyplnit i předpokládané náklady na jednotlivé úkony. U STK také můžeme vybrat STK stanici, kterou běžně využíváme. Jak přdat servisní partnery naleznete **zde**.  
Pokud máme vše vyplněné, můžeme pokračovat stisknutím tlačítka <kbd>Vytvořit a uložit vozidlo</kbd>.
:::warning POZOR
Pokud není stisknuto tlačítko <kbd>Vytvořit a uložit vozidlo</kbd> tak se vozidlo neuloží a opuštění stránky znamená ztrátu veškerého zadaného obsahu!
:::
#### Krok 4: Vozidlo bylo přidáno do flotily!
Nyní je vozidlo úspěšně přidáno do naší flotily a můžeme jej vidět v seznamu všech vozidel.
![Vozidlo přidáno](/img/web/02_flotila/flotila_005.png)
:::tip Nevidíte nové vozidlo?
Pokud se vám nezobrazilo vozidlo v seznamu všech vozidel, obnovte kartu stistknutím tlačítka obnovit a vozidlo se následně objeví v seznamu všech vozidel. ![Obnovit](/img/web/02_flotila/flotila_006.png)
:::

## Editace vozidel
Pro editaci vozidla je nejprve nutné vyhledat dané vozidlo v seznamu všech vozidel v modulu Flotila a otevřít si [kartu vozidla](#karta-vozidla). Pro zobrazení **karty vozidla** stačí kliknouk kdekoliv v na daném řádku.
![Editace vozidel](/img/web/02_flotila/flotila_007.png)  
**V kartě vozidla** se ve vrchní části zobrazují nejduležitější infomrmace, včetně tlačítka <kbd>Upravit vozidlo</kbd>. Po jeho stisknutí se otevře okno, ve kterém můžete upravit základní inforamce o vozidle.
![Editace vozidel](/img/web/02_flotila/flotila_008.png)  
 Pokud chcete uložit změny stačí kliknout na tlačítko <kbd>Uložit změny vozidla</kbd>
 ![Editace vozidel](/img/web/02_flotila/flotila_009.png)  
:::info Kde najdu termíny?
Pokud hledáte termíny pro výměnu oleje, rozvodů atd, naleznete je v sekci [**Termíny**](#terminy)
:::
## Karta vozidla
### Přehled
Karta vozidla je detailí přehled všech inforamcí o vozidle. Od kinhy jízd přes předávácí protokoly až po dokumenty k vozu. Vše je rozděleno podle sekcí, ke kterým přisupujete pomocí menu horizontální menu lišty.
![Karta vozdila - přehled](/img/web/02_flotila/flotila_010.png)  
:::tip
Pokud se u vozidla nachází nějaké problémy nebo události, které potřebují rešit, přímo na menu liště vidíte počet problému u dané katerorie a navíc velké upozornění přímo na přehledu v kartě vozidla.
![Karta vozdila - detail upozornění](/img/web/02_flotila/flotila_011.png)  
:::
#### Průměný denní nájezd
V přehledu máme rychlou informaci, kolik dané vozidlo denně v průměru ujede kilometrů. Systém tento údaj vypočitává dle zápisu v [knize jízd](#kniha-jizd).  
![Karta vozdila - PDN](/img/web/02_flotila/flotila_012.png)  

#### Průměrná spotřeba PMH
Další informací je průměrná spotřeba vozu. Tento údaj se počitá na základně zadaných informací o tankovaní a počtu ujetých kilometrů mezi tankováním. Tento údaj nemusí zcela odpovídat realitě avšak má orientační výpovědní hodnotu.
![Karta vozdila - PS](/img/web/02_flotila/flotila_013.png)  

#### Reporty a dokumenty
Zde můžeme rychle vygenerovat PDF dokument, ve kterém jsou všechny dostupné informace o vozidle a například sdílet se servisem, stanicí technické kontroly popřípadě s úřady.
![Karta vozdila - PDF](/img/web/02_flotila/flotila_014.png)  

#### Náhled knihy jízd

#### Posledních 10 řidičů


### Kniha jízd