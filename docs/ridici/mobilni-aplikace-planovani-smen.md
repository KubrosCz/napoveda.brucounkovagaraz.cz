---
sidebar_position: 5
title: Plánovač směn
description: Informace o plánování směn
---

# ⏱️ Plánovaní směn

Plánovaní směn v naší aplikaci je velice jednduché. Pokud si nevíte rady, podívejte te se na tetno návod.

---

## Plánovač směn
Do plánovače směn se dostaneme jednoduše kliknutím v hlavní navigační liště na tlačítko <kbd>Směny</kbd>.
![Plánovač směn - menu](/img/aplikace/05_smeny/smeny_001.png)

Tímto se dostaneme na hlavní okno, kde vidíme :
- ❶ Zobrazení legendy kalendáře
- ❷ Přepinaná kalendáře mezi měsíčním a týdením zobrazením
- ❸ Kalendář
- ❹ Rozbalení kalendáře
- ❺ Filtry zobrazení naplánovaných směn
- ❻ Dostupné směny pro vybraný den
- ❼ Tlačítko pro zapsáni se na zálohu
<div className="image-row"><img src="/img/aplikace/05_smeny/smeny_002.png" alt="Plánovač směn - přehled" width="300px" /></div>

### Legenda kalendáře
V legendě je znározněno, co které tečky v kalendáři znamenají.
<div className="image-row"><img src="/img/aplikace/05_smeny/smeny_003.png" alt="Plánovač směn - legenda" width="300px" /></div>

## Přihlášení na naplánovanou směnu
Aplikace vám umožnuje se přihlásit na jakoukoliv dostupnou směnu. Jakmile dispečink vytvoří směny, všem řidičům přijde do aplikace oznámení o dostupnosti nové směny.
<div className="image-row"><img src="/img/aplikace/05_smeny/smeny_004.png" alt="Plánovač směn - oznámení" width="800px" /></div>
:::info
V aplikaci je možné vytvářet i hromadné směny, tedy například na celý měsíc dopředu. V oznamení je rozlišené a dostane informaci že směny byly vypsáný na obdobá od do.
:::
Pro zobrazení danné směny je třeba jít na obrazovku *Plánovač Směn* a v kalendáři vybrat datum, na které byla směna vypsána.  
<div className="image-row"><img src="/img/aplikace/05_smeny/smeny_005.png" alt="Plánovač směn - výběr směny" width="600px" /></div>
Pokud máme zájem od danou směnu, nyní stačí kliknout na tlačíko <kbd>Přihlásit se na směnu</kbd>. Následně se objeví  okno, ve kterém si vyberete vůz, který je pro danou směnu dostupný.
:::info
Dostupnost vozu záleží na několika faktorech. Jeden znich je i skóre řidiče. 
:::
<div className="image-row"><img src="/img/aplikace/05_smeny/smeny_006.png" alt="Plánovač směn - výběr vozu" width="800px" /></div>
Jakmile máme vybrané vozidlo klikneme na <kbd>Jdu do toho!</kbd> a jste přihlášeni na směnu.
:::warning Pozor!
Může se stát, že něž si stihnete vybrat vůz, směna nebo vozidlo již může být nedostupné. Aplikace neupřednostňuje žádné řidiče, platí zde pravidlo "Kdo dříve příjde, ten dříve jede..."
:::
Pokud se vše povedlo, měla by se ve spodní části obrazovky objevit informace *Uspěšně jsi se přihlásil na směnu!* a vybraná směna by měla mít zelený rámeček. Pokud se tak **nestane**, zkuste nejřívé aktualizovat stránku pomocí gesta potahnutí dolů. Tím se ujistíte, že směna je stále dostupná. Pokud tomu tak je, opakujte proces přihlášení na směnu.
<div className="image-row"><img src="/img/aplikace/05_smeny/smeny_007.png" alt="Plánovač směn - kalendář - potvrzení směny" width="300px" /></div>

### Detail směny
Detail směny si můžete zobrazit kliknutím na přihlášeou směnu v *Plánovači směn*. Objeví se vám malé vyskakovací okno s informacema o změně.
<div className="image-row"><img src="/img/aplikace/05_smeny/smeny_008.png" alt="Plánovač směn - kalendář - detail směny" width="300px" /></div>
Další místo, kde si můžete zobrazit detail a histii směn je na *Domovské obrazovce* pod tlačítkem <kbd>Moje směny!</kbd>.

### Vrácení směny
Jak si můžete všimno na snímku obrazovky víše, v detailu směny se nácházi i tlačítko <kbd>Vrátit směnu</kbd>. Díky tomuto tlačítku můžete směnu vrátit a tím ji nabídnou ostatním řidičům k dispozici. Postup je následující:
- Klikneme na <kbd>Vrátit směnu</kbd>
- Otevře se nám nové dialogové okno, do kterého napíšeme důvod
- Klikneme na červené <kbd>Vrátit směnu</kbd>
- Objeví se nám potvrzení **Směna byla úspěšně vrácena a uvolněna.** 
<div className="image-row"><img src="/img/aplikace/05_smeny/smeny_009.png" alt="Plánovač směn - vrácení směny" width="800px" /></div>
Směna v plánovači již nebude označena zeleným rámečkem a také nám zmizí z Historie směn.
:::danger Pozor!
Vrácení směn bude v budoucí verzi aplikace časově omezeno!
:::

## Zobrazení naplánované směny
Na *Přehledu* neboli *Domovské obrazovce* se vám vždy zobrazuje následující naplánovaná směna. Pokud si chcete zobrazit všechny směny, jak budoucí tak minulé, na *Přehledu* klikněte na <kbd>Moje směny</kbd>.
<div className="image-row"><img src="/img/aplikace/05_smeny/smeny_010.png" alt="Plánovač směn - směny" width="600px" /></div>