(function(d){	const l = d['cs'] = d['cs'] || {};	l.dictionary=Object.assign(		l.dictionary||{},		{"%0 of %1":"%0 z %1","Align center":"Zarovnat na střed","Align left":"Zarovnat vlevo","Align right":"Zarovnat vpravo","Block quote":"Citace",Bold:"Tučné","Bulleted List":"Odrážky",Cancel:"Zrušit","Centered image":"Obrázek zarovnaný na střed","Change image text alternative":"Změnit alternativní text obrázku","Characters: %0":"Počet znaků: %0","Choose heading":"Zvolte nadpis",Code:"Kódový blok","Decrease indent":"Zmenšit odsazení",Downloadable:"Ke stažení","Dropdown toolbar":"Rozbalovací panel nástrojů","Edit link":"Upravit odkaz","Editor toolbar":"Panel nástrojů editoru","Enter image caption":"Zadejte popis obrázku","Full size image":"Obrázek v plné velikosti",Heading:"Nadpis","Heading 1":"Nadpis 1","Heading 2":"Nadpis 2","Heading 3":"Nadpis 3","Heading 4":"Nadpis 4","Heading 5":"Nadpis 5","Heading 6":"Nadpis 6","Horizontal line":"Vodorovná čára","image widget":"ovládací prvek obrázku","Increase indent":"Zvětšit odsazení","Insert code block":"Vložit blok zdrojového kódu",Italic:"Kurzíva",Justify:"Zarovnat do bloku","Left aligned image":"Obrázek zarovnaný vlevo",Link:"Odkaz","Link URL":"URL odkazu",Next:"Další","Numbered List":"Číslování","Open in a new tab":"Otevřít v nové kartě","Open link in new tab":"Otevřít odkaz v nové kartě",Paragraph:"Odstavec","Plain text":"Prostý text",Previous:"Předchozí",Redo:"Znovu","Remove Format":"Odstranit formátování","Rich Text Editor, %0":"Textový editor, %0","Right aligned image":"Obrázek zarovnaný vpravo",Save:"Uložit","Show more items":"Zobrazit další položky","Side image":"Postranní obrázek",Strikethrough:"Přeškrtnuté","Text alignment":"Zarovnání textu","Text alignment toolbar":"Panel nástrojů zarovnání textu","Text alternative":"Alternativní text","This link has no URL":"Tento odkaz nemá žádnou URL",Underline:"Podtržené",Undo:"Zpět",Unlink:"Odstranit odkaz","Words: %0":"Počet slov: %0"}	);l.getPluralForm=function(n){return (n == 1 && n % 1 == 0) ? 0 : (n >= 2 && n <= 4 && n % 1 == 0) ? 1: (n % 1 != 0 ) ? 2 : 3;;};})(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={}));