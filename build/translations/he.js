(function(d){	const l = d['he'] = d['he'] || {};	l.dictionary=Object.assign(		l.dictionary||{},		{"%0 of %1":"0% מתוך %1","Align center":"יישור באמצע","Align left":"יישור לשמאל","Align right":"יישור לימין","Block quote":"בלוק ציטוט",Bold:"מודגש","Bulleted List":"רשימה מנוקדת",Cancel:"ביטול","Centered image":"תמונה ממרוכזת","Change image text alternative":"שינוי טקסט אלטרנטיבי לתמונה","Characters: %0":"מס' תווים: %0","Choose heading":"בחר סוג כותרת",Code:"קוד",Downloadable:"","Dropdown toolbar":"סרגל כלים נפתח","Edit link":"עריכת קישור","Editor toolbar":"סרגל הכלים","Enter image caption":"הזן כותרת תמונה","Full size image":"תמונה בפריסה מלאה",Heading:"כותרת","Heading 1":"כותרת 1","Heading 2":"כותרת 2","Heading 3":"כותרת 3","Heading 4":"כותרת 4","Heading 5":"כותרת 5","Heading 6":"כותרת 6","Horizontal line":"קו אופקי","image widget":"תמונה",Italic:"נטוי",Justify:"מרכוז גבולות","Left aligned image":"תמונה מיושרת לשמאל",Link:"קישור","Link URL":"קישור כתובת אתר",Next:"הבא","Numbered List":"רשימה ממוספרת","Open in a new tab":"","Open link in new tab":"פתח קישור בכרטיסייה חדשה",Paragraph:"פיסקה",Previous:"הקודם",Redo:"ביצוע מחדש","Rich Text Editor, %0":"עורך טקסט עשיר, %0","Right aligned image":"תמונה מיושרת לימין",Save:"שמירה","Show more items":"הצד פריטים נוספים","Side image":"תמונת צד",Strikethrough:"קו חוצה","Text alignment":"יישור טקסט","Text alignment toolbar":"סרגל כלים יישור טקסט","Text alternative":"טקסט אלטרנטיבי","This link has no URL":"לקישור זה אין כתובת אתר",Underline:"קו תחתון",Undo:"ביטול",Unlink:"ביטול קישור","Words: %0":"מס' מילים: %0"}	);l.getPluralForm=function(n){return (n == 1 && n % 1 == 0) ? 0 : (n == 2 && n % 1 == 0) ? 1: (n % 10 == 0 && n % 1 == 0 && n > 10) ? 2 : 3;;};})(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={}));