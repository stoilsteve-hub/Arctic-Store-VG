# Arctic Store (VG-Nivå)

## Om Projektet
Detta är min individuella inlämning för VG-nivån i kursen Frontend (JAVA25). 

Projektet bygger vidare på den webbutik (G-Nivå) som jag ursprungligen utvecklade och designade tillsammans med min projektgrupp (jag, Lukas och Camilla). I vårt gemensamma repositorium ansvarade jag bland annat för single-product vyn och all API-integrering.

I denna enskilda VG-uppgift har jag klonat vårt gemensamma repo och byggt ut plattformen med en komplett, dynamisk varukorg (Shopping Cart).

## VG-Funktionalitet (Varukorg)
- Kunden kan lägga till produkter i varukorgen från både startsidan och enskilda produktsidor.
- Varukorgen är byggd som en responsiv, urdragbar "Offcanvas" sidomeny.
- Knappar **(+)** och **(-)** finns på varje radval för att smidigt öka eller minska antalet av en specifik produkt i korgen.
- En **(X)**-knapp finns för att omedelbart radera en enskild rader från korgen.
- En **"Clear Cart"**-knapp för att snabbt nollställa hela beställningen.
- Koden beräknar dynamiskt priset (sub-summa) per produktmängd och renderar varukorgens grand total i realtid.
- **Persistens (LocalStorage):** Varukorgens logik (`cart.js`) är fullt integrerad med webbläsarens `localStorage`. Det innebär att kunden har kvar hela sin beställning och all matematik även om webbläsaren laddas om.

*(Viktig notis angående API-drift: Under utvecklingen kraschade externa FakeStore API till en Error 523. För säkerhets skull byggde jag en lokal fallback-resurs genom `fakestore.json`.)*
