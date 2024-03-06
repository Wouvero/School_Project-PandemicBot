# [Školský projekt] PandemicBot
### Základy cloudových technológií (Zadanie č.2), 2021

## Meranie úrovne vzdelávania počas pandémie pomocou chat bota


### Úvod

Projekt poskytuje možnosť komunikácie s chatovacím botom, ktorý umožňuje spracovávanie dát o úrovni vzdelávania počas pandémie. Výsledky sú kompletne anonymné a na základe krátkych odpovedí systém vyhodnotí momentálnu obraznú úroveň vzdelávania.

Bot je poskytovaný od cloudového providera od spoločnosti Amazon (_Amazon Web Services_, neskôr iba AWS). Figuruje pod názvom _Amazon Lex_
## Obsah

  

*  [Základné technológie](#zakladne-technologie)

*  [Frontend](#frontend)

*  [Backend](#backend)

*  [Databáza](#databaza)

*  [Cloudové služby](#cloudove_sluzby)



## Základné technológie

- ReactJS - JavaScript framework pre tvorbu frontend-u
- NodeJS - je modul pre JavaScript runtime
- Express - back-endový webový aplikačný rámec pre Node.js
- Amazon Lex - interaktívny bot od providera AWS
- AWS Amplify - súbor nástrojov a služieb, ktoré možno použiť spoločne alebo samostatne na tvorbu webových stránok
- Heroku Platform - PaaS poskytujúca nasadenoe webovej aplikácie 
- Heroku ClearDB MySQL - MySQL databáza hostovaná na cloudovej platforme Heroku
- Netlify - cloud computing platforma, ponúka hostingové a serverové backendové služby pre webové aplikácie



## Frontend

Frontend využíva React framework, ktorý používa ako skriptovací jazyk JavaScript.
Na prepojenie so serverom využíva knižnicu Axions, ktorá zabezpečuje komunikáciu medzi frontendom a backendom.
Grafy sa na frontende vykresľujú pomocou knižnice Chart.js.

## Backend
Na tvorbu backend-u bol použitý Express.js s integráciou viacerých modulov ako napríklad CORS (_Cross-Origin Resource Sharing_). Pomocou requestov z Express.js vieme vytvoriť komunikáciu medzi databázou (hostovaná na platforme _Heroku_) a serverom, ktorá nám poskytuje údaje o všetkých respondentoch. Následne sa jednotlivé dáta parsujú a posielajú na spracovanie do grafov.

## Databáza
Je použitá MySQL databáza. Ako cloudového providera sme si zvolili Heroku, hlavne z dôvodu, že ako jediný poskytoval free tier hosting. Na tvorenie databázy a následne nasadie sme využili MySQL Workbench 8.0.

## Cloudové služby
### Amazon Lex
Predstavuje hlavnú funkcionalitu tohto zadania, ktorou je chatovací bot. Táto služba poskytuje user-friendly user interface, pomocou ktorého vieme priamo nastaviť spôsob komunikácie, akou sa bude viesť konverzácia s užívateľom. Dokáže ušetriť hodiny práce strávené developmentom podobnej služby a taktiež je schopná využívať AI pre rozpoznávanie emócií užívateľa.  Integrácia tejto služby súvisí priamo s AWS Amplify.

### AWS Amplify
AWS Amplify je sada nástrojov a služieb, ktoré možno použiť spoločne alebo samostatne, aby pomohli vývojárom webových alebo mobilných zariadení. Priamo komunikuje s aplikačnou časťou pomocou API, kde dokáže vytvárať komunikáciu medzi aplikáciou a službami od AWS.

### Heroku Platform
Jedná sa o PaaS platformu, ktorá podporuje viacero programovacích jazykov. Prevádzkuje aplikácie zákazníka vo virtuálnych kontajneroch, ktoré sa spúšťajú v spoľahlivom prostredí. Poskytuje hosting aplikácií.

### Netlify
Jedná sa o cloud computing platformu, ktorá ponúka hostingové a serverové backendové služby pre webové aplikácie.
