element = document.getElementById('zatwierdz');
element.addEventListener('click', zatwierdz);

let inputa;
let inputb;
let inputc;
let inputd;

let saveinputa;
let saveinputb;
let saveinputc;
let saveinputd;

function zatwierdz() {
    console.log("gdrfd");
    inputa = document.getElementById("inputa").value;
    console.log("inputa tekst to: " + inputa);
    inputb = document.getElementById("inputb").value;
    console.log("inputb tekst to: " + inputb);
    inputc = document.getElementById("inputc").value;
    console.log("inputc tekst to: " + inputc);
    inputd = document.getElementById("inputd").value;
    console.log("inputd tekst to: " + inputd);

    
    
    var inputsdiv = document.getElementById("inputsdiv");
    inputsdiv.style.display = "none";

    var secondside = document.getElementById("secondside");
    secondside.style.display = "block";
    

    saveinputa = inputa;
    saveinputb = inputb;
    saveinputc = inputc;
    saveinputd = inputd;
}




element2 = document.getElementById('nextquestion');
element2.addEventListener('click', nextquestion);

let question

let questionnumber = 0;
var qestionsArray = ["1", "2", "3", "118", "116", "117"];
// var qestionsArray = [  "1",  "2",  "3",  "4",  "5",  "6",  "7",  "8",  "9",  "10",  "11",  "12",  "13",  "14",  "15",  "16",  "17",  "18",  "19",  "20",  "21",  "22",  "23",  "24",  "25",  "26",  "27",  "28",  "29",  "30",  "31",  "32",  "33",  "34",  "35",  "36",  "37",  "38",  "39",  "40",  "41",  "42",  "43",  "44",  "45",  "46",  "47",  "48",  "49",  "50",  "51",  "52",  "53",  "54",  "55",  "56",  "57",  "58",  "59",  "60",  "61",  "62",  "63",  "64",  "65",  "66",  "67",  "68",  "69",  "70",  "71",  "72",  "73",  "74",  "75",  "76",  "77",  "78",  "79",  "80",  "81",  "82",  "83",  "84",  "85",  "86",  "87",  "88",  "89",  "90",  "91",  "92",  "93",  "94",  "95",  "96",  "97",  "98",  "99",  "100",  "101",  "102",  "103",  "104",  "105",  "106",  "107",  "108",  "109",  "110",  "111",  "112",  "113",  "114", "115"];
let playernmber = 0;

function nextquestion() {

    console.log("savea " + saveinputa);
    // Wygenerowanie losowego indeksu
    var randomIndex = Math.floor(Math.random() * qestionsArray.length);

    // Pobranie losowej wartości z tablicy
    var randomValue = qestionsArray[randomIndex];
    var removedValue = qestionsArray.splice(randomIndex, 1)[0];

    let arrarylenght = qestionsArray.length;
    document.getElementById("pytanie").innerHTML = "pozostało " + arrarylenght;

    console.log("numer z tablicy " + randomValue); // Wyświetlenie losowej wartości na konsoli
    console.log("jaki numer tablicy został usunięty " + removedValue);
    console.log(qestionsArray)


    if (playernmber < 4) {
        playernmber++;
    }else {
        playernmber = 1;
    }
        
    function fnctionplayer(playernmber) {
        switch(playernmber) {
            case 1:
                console.log("gracz1");
                const player1 = inputa;
                return player1;
                // break;
            case 2:
                console.log("gracz2");
                const player2 = inputb;
                return player2;
            case 3:
                console.log("gracz3");
                const player3 = inputc;
                return player3;
            case 4:
                console.log("gracz4");
                const player4 = inputd;
                return player4;
            default:
                console.log("coś z graczami nie tak");
                const question69 = "casedefault";
                return question69;
        }
    }
    
    let player = fnctionplayer(playernmber);
    console.log(player);


    questionnumber = randomValue * 1;
    function functionq(questionnumber) {

        function swapfunction() {
            //zamiana miejscem z osobą na przeciwko 
            console.log("case2");
            console.log("zamiana miejscem z osobą na przeciwko");
            let player = fnctionplayer(playernmber);
            console.log("to jet gracz wylosowany " + player);
            console.log("jego numer " + playernmber);
            const saveplayernmber = playernmber
            const liczba = playernmber + 2;
            let reszta = liczba % 4;
            if ( reszta == 0) {
                reszta = 4;
            }
            console.log("to pownien być numer gracza z którym się zamienia " + reszta); 
            playernmber = reszta;
            let player2 = fnctionplayer(playernmber);
            console.log("to powninna być nazwa gracza z którym się zamienia " + player2);
            if (saveplayernmber == 1 || saveplayernmber == 3) {
                inputa = saveinputc;
                inputc = saveinputa;
            } else {
                inputb = saveinputd;
                inputd = saveinputb;
            }

            saveinputa = inputa;
            saveinputb = inputb;
            saveinputc = inputc;
            saveinputd = inputd;

            inputa = saveinputa;
            inputb = saveinputb;
            inputc = saveinputc;
            inputd = saveinputd;
            const question2 = "Zamień się miejscem z " + player2;
            playernmber = saveplayernmber;
            return question2;
        }

        function swapfunctions() {
            //zamiana z osobą po prawej
            console.log("case3");
            console.log("zamiana z osobą po prawej");
            let player4 = fnctionplayer(playernmber);
            console.log("to jet gracz wylosowany " + player4);
            console.log("jego numer " + playernmber);
            const saveplayernmber2 = playernmber
            const liczba2 = playernmber + 3;
            let reszta2 = liczba2 % 4;
            if ( reszta2 == 0) {
                reszta2 = 4;
            }
            console.log("to pownien być numer gracza z którym się zamienia " + reszta2); 
            playernmber = reszta2;
            let player3 = fnctionplayer(playernmber);
            console.log("to powninna być nazwa gracza z którym się zamienia " + player3);
            if (saveplayernmber2 == 1) {
                inputa = saveinputd;
                inputd = saveinputa;
            } else if (saveplayernmber2 == 2) {
                inputb = saveinputa;
                inputa = saveinputb;
            } else if (saveplayernmber2 == 3) {
                inputc = saveinputb;
                inputb = saveinputc;
            } else  {
                inputd = saveinputc;
                inputc = saveinputd;
            }

            saveinputa = inputa;
            saveinputb = inputb;
            saveinputc = inputc;
            saveinputd = inputd;

            inputa = saveinputa;
            inputb = saveinputb;
            inputc = saveinputc;
            inputd = saveinputd;
            const question3 = "Zamień się miejscem z " + player3;
            playernmber = saveplayernmber2;
            return question3;
        }

        function swapfunctiont() {
            //zamiana z osobą po lewej
            console.log("case1");
            console.log("zamiana z osobą po lewej");
            let player5 = fnctionplayer(playernmber);
            console.log("to jet gracz wylosowany " + player5);
            console.log("jego numer " + playernmber);
            const saveplayernmber3 = playernmber
            const liczba3 = playernmber + 5;
            let reszta3 = liczba3 % 4;
            if ( reszta3 == 0) {
                reszta3 = 4;
            }
            console.log("to pownien być numer gracza z którym się zamienia " + reszta3); 
            playernmber = reszta3;
            let player6 = fnctionplayer(playernmber);
            console.log("to powninna być nazwa gracza z którym się zamienia " + player6);
            if (saveplayernmber3 == 1) {
                inputa = saveinputb;
                inputb = saveinputa;
            } else if (saveplayernmber3 == 2) {
                inputb = saveinputc;
                inputc = saveinputb;
            } else if (saveplayernmber3 == 3) {
                inputc = saveinputd;
                inputd = saveinputc;
            } else  {
                inputd = saveinputa;
                inputa = saveinputd;
            }

            saveinputa = inputa;
            saveinputb = inputb;
            saveinputc = inputc;
            saveinputd = inputd;

            inputa = saveinputa;
            inputb = saveinputb;
            inputc = saveinputc;
            inputd = saveinputd;
            const question1 = "Zamień się miejscem z " + player6;
            playernmber = saveplayernmber3;
            return question1;
        }
        switch(questionnumber) {
            case 1:
                //zamiana z osobą po lewej
                return swapfunctiont();
            case 2:
                //zamiana z osobą na przecisko
                return swapfunction();
            case 3:
                //zamiana z osobą po prawej 
                return swapfunctions();
            case 4:
                console.log("case4");
                const question4 = "nigdy przenigdy";
                return question4;
            case 5:
                console.log("case5");
                const question5 = "suck & blow";
                return question5;
            case 6:
                console.log("case6");
                const question6 = "Pije osoba po twojej prawej.";
                return question6;
            case 7:
                console.log("case7");
                const question7 = "Nigdy nie chciałem uprawiać seksu z kimś, kto gra teraz w tę grę. jeśli tak-pijesz";
                return question7;
            case 8:
                console.log("case8");
                const question8 = "Piją wszyscy.";
                return question8;   
            case 9:
                console.log("case9");
                const question9 = "Pijesz sam.";
                return question9;   
            case 10:
                console.log("case10");
                const question10 = "Dostajesz paskiem.";
                return question10;   
            case 11:
                console.log("case11");
                const question11 = "twerk or shot";
                return question11;
            case 12:
                console.log("case12");
                const question12 = "Nigdy, przenigdy nie miałem myśli erotycznych o kimś w tym pokoju. *jeśli tak - pijesz* ";
                return question12;
            case 13:
                console.log("case13");
                const question13 = "Nigdy, przenigdy nie całowałem się z kimś z tego pokoju. *jeśli tak - pijesz*";
                return question13;
            case 14:
                console.log("case14");
                const question14 = "Robisz dirty dance osobie po lewej.";
                return question14;
            case 15:
                console.log("case 15");
                const question15 = "Kogo w tym pokoju mógłbyś pocałować?";
                return question15;
            case 16:
                console.log("case 16");
                const question16 = "Piją osoby, które kiedyś coś ze sobą łączyło/łączy.";
                return question16;
            case 17:
                console.log("case 17");
                const question17 = "Na co z wyglądu najbardziej zwracasz uwagę poznając ludzi?";
                return question17;
            case 18:
                console.log("case 18");
                const question18 = "Co chciałbyś zrobić z osoba po lewej jeśli mógłbyś wymazać jej/jemu potem pamięć?";
                return question18;
            case 19:
                console.log("case 19");
                const question19 = "Jaka jest twoja najciemniejsza fantazja?";
                return question19;
            case 20:
                console.log("case 20");
                const question20 = "Jaka jest najprzyjemniejsza rzecz, jakiej kiedykolwiek doświadczyłeś z inną osobą?";
                return question20;
            case 21:
                console.log("case 21");
                const question21 = "Jaka jest najdziwniejsza rzecz o którą poproszono Cię w łóżku";
                return question21;
            case 22:
                console.log("case 22");
                const question22 = "Kogo z obecnych tutaj osób chciałbyś zobaczyć nago?";
                return question22;
            case 23:
                console.log("case 23");
                const question23 = "Skomplementuj każdego.";
                return question23;
            case 24:
                console.log("case 24");
                const question24 = "Z iloma partnerami seksualnymi do tej pory spałeś?";
                return question24;
            case 25:
                console.log("case 25");
                const question25 = "Czy miałeś kiedyś erotyczny sen, w którym pojawił się ktoś z tej gry?";
                return question25;
            case 26:
                console.log("case 26");
                const question26 = "Czy kiedykolwiek miałeś trójkąt?";
                return question26;
            case 27:
                console.log("case 27");
                const question27 = "Czy kiedykolwiek uprawiałeś seks z dobrym przyjacielem?";
                return question27;
            case 28:
                console.log("case 28");
                const question28 = "Czy kiedykolwiek uprawiałeś seks z którąś osoba z tej grupy - oprócz swojego partnera/ki?";
                return question28;
            case 29:
                console.log("case 29");
                const question29 = "Każdy musi podać słowo rymujące się ze słowem gracza, który wyciągnął tę kartę.";
                return question29;
            case 30:
                console.log("case 30");
                const question30 = "Wybierasz osobę, która ma wypić.";
                return question30;    
            case 31:
                console.log("case 31");
                const question31 = "Wypij shota bez rąk.";
                return question31;
            case 32:
                console.log("case 32");
                const question32 = "33. Zdejmujesz jedną część ubioru. *nie liczą się skarpetki i biżuteria*";
                return question32;
            case 33:
                console.log("case 33");
                const question33 = "Zamień się koszulką z osoba po prawej.";
                return question33;
            case 34:
                console.log("case 34");
                const question34 = "Pocałuj osobę, którą wybierze ci reszta z graczy.";
                return question34;
            case 35:
                console.log("case 35");
                const question35 = "Daj napisać osobie po prawej z twojego telefonu dowolną wiadomość do kogoś.";
                return question35;
            case 36:
                console.log("case 36");
                const question36 = "Daj osobie po prawej przejrzeć twoją galerię.";
                return question36;
            case 37:
                console.log("case 37");
                const question37 = "Klepnij w tyłek osobę po prawej.";
                return question37;
            case 38:
                console.log("case 38");
                const question38 = "Patrz przez minutę osobie po prawej w oczy - jak się zaśmiejesz dostajesz liścia.";
                return question38;
            case 39:
                console.log("case 39");
                const question39 = "Pokaż ostatniego swojego screena.";
                return question39;
            case 40:
                console.log("case 40");
                const question40 = "Nigdy, przenigdy nie wysłałem nudesa. *jeśli tak - pijesz*";
                return question40;
            case 41:
                console.log("case 41");
                const question41 = "Gracz, które ma najbliżej urodziny daje każdemu złotówkę.";
                return question41;
            case 42:
                console.log("case 42");
                const question42 = "Poliż policzek osoby po prawej.";
                return question42;
            case 43:
                console.log("case 43");
                const question43 = "Wyjdź do osobnego pokoju z wybraną przez graczy osobą na określony czas.";
                return question43;
            case 44:
                console.log("case 44");
                const question44 = "Nagrywasz tiktoka z osobą po prawej.";
                return question44;
            case 45:
                console.log("case 45");
                const question45 = "fuck marry kill";
                return question45;
            case 46:
                console.log("case 46");
                const question46 = "Czy kiedykolwiek coś ukradłeś?";
                return question46;
            case 47:
                console.log("case 47");
                const question47 = "Siłuj się na rękę z osobą po prawej.";
                return question47;
            case 48:
                console.log("case 48");
                const question48 = "Napij się z brzucha 2 osoby po lewej.";
                return question48;
            case 49:
                console.log("case 49");
                const question49 = "Pokaż swoją historię przeglądania reszcie graczy.";
                return question49;
            case 50:
                console.log("case 50");
                const question50 = "Piją osoby ze zrobionymi paznokciami.";
                return question50;
            case 51:
                console.log("case 51");
                const question51 = "Osoba z największymi ustami pije.";
                return question51;
            case 52:
                console.log("case 52");
                const question52 = "Kto z obecnych wróciłby do ex?";
                return question52;
            case 53:
                console.log("case 53");
                const question53 = "Zrób wspólna fotkę.";
                return question53;
            case 54:
                console.log("case 54");
                const question54 = "Co sobie pomyślałeś gdy po raz pierwszy zobaczyłeś osobę po swojej lewej i po prawej?";
                return question54;
            case 55:
                console.log("case 55");
                const question55 = "Czy preferujesz kino akcji czy komediowe?";
                return question55;
            case 56:
                console.log("case 56");
                const question56 = "Piją osoby urodzone w dni parzyste.";
                return question56;
            case 57:
                console.log("case 57");
                const question57 = "Piją wszyscy opórcz ciebie. ";
                return question57;
            case 58:
                console.log("case 58");
                const question58 = "Siedź kolejkę na kolanach 3 osoby po twojej prawej.";
                return question58;
            case 59:
                console.log("case 59");
                const question59 = "Osoba po prawej decyduje gdzie całujesz osobę naprzeciwko.";
                return question59;
            case 60:
                console.log("case 60");
                const question60 = "Jeśli jest sezon na twój znak zodiaku - pijesz.";
                return question60;
            case 61:
                console.log("case 61");
                const question61 = "Piją osoby, które mają na sobie coś niebieskiego.";
                return question61;
            case 62:
                console.log("case 62");
                const question62 = "Najbardziej pijana osoba wymyśla Ci wyzwanie.";
                return question62;
            case 63:
                console.log("case 63");
                const question63 = "Pocałuj osobę po lewej.";
                return question63;
            case 64:
                console.log("case 64");
                const question64 = "Pocałuj osobę po prawej.";
                return question64;
            case 65:
                console.log("case 65");
                const question65 = "Pokaż ostatnio wysłaną wiadomość.";
                return question65;
            case 66:
                console.log("case 66");
                const question66 = "Pokaż ostatnio napisaną wiadomość.";
                return question66;
            case 67:
                console.log("case 67");
                const question67 = "Wymień 3 imiona rodziców. Kara: 2 shoty";
                return question67;
            case 68:
                console.log("case 68");
                const question68 = "Piją osoby, którym zdarzyło się spać z osoba której nie pamiętają imienia.";
                return question68;
            case 69:
                console.log("case 69");
                const question69 = "Pokaż wszystkim ostatnie 3 zdjęcia/filmy z galerii. Nie możesz spojrzeć czy się opłaca.";
                return question69;
            case 70:
                console.log("case 70");
                const question70 = "Napij się jeśli masz na sobie koronkowe stringi.";
                return question70;
            case 71:
                console.log("case 71");
                const question71 = "Zrób spicy zdjęcie i wyślij je jednemu z graczy.";
                return question71;
            case 72:
                console.log("case 72");
                const question72 = "Piją wszyscy, którzy otrzymali propozycję seksu za pieniądze.";
                return question72;
            case 73:
                console.log("case 73");
                const question73 = "Zrób striptiz. Pijesz tyle razy, ile zostawisz na sobie sztuk ubrań.";
                return question73;
            case 74:
                console.log("case 74");
                const question74 = "Pocałuj drugą osobę po lewej w 3 dowolnych miejscach. *oprócz ust*";
                return question74;
            case 75:
                console.log("case 75");
                const question75 = "Twerkuj trzymając ręce na ziemi, a nogi na ścianie przez 10 sekund.";
                return question75;
            case 76:
                console.log("case 76");
                const question76 = "Przytul się do osoby po lewej stronie.";
                return question76;
            case 77:
                console.log("case 77");
                const question77 = "Napisz jakąkolwiek wiadomość do ex lub pijesz.";
                return question77;
            case 78:
                console.log("case 78");
                const question78 = "Jeśli miałeś więcej niż 5 partnerów seksualnych - pijesz!";
                return question78;
            case 79:
                console.log("case 79");
                const question79 = "Wymień się dowolnym ubraniem z osobą po twojej lewej do końca rundy. *oprócz bluzy*";
                return question79;
            case 80:
                console.log("case 80");
                const question80 = "Seks z pierwszą osobą (płci przeciwnej) wyświetlającej Ci się na pasku aktywności na mess czy zerwanie znajomości z tą osobą?";
                return question80;
            case 81:
                console.log("case 81");
                const question81 = "Wszyscy single piją!";
                return question81;
            case 82:
                console.log("case 82");
                const question82 = "Wszystkie pary piją";
                return question82;
            case 83:
                console.log("case 83");
                const question83 = "Rzucasz monetą, jeśli wypadnie orzeł - pijesz, a jeśli reszka - rozdajesz shota.";
                return question83;
            case 84:
                console.log("case 84");
                const question84 = "Wszyscy posiadający tatuaż piją.";
                return question84;
            case 85:
                console.log("case 85");
                const question85 = "Grasz w papier, kamień, nożyce z osobą naprzeciwko Ciebie. Przegrany pije!";
                return question85;
            case 86:
                console.log("case 86");
                const question86 = "87. Nucisz znaną polską piosenkę, jeśli nikt nie zgadnie w 20 sekund, każdy pije shota. *łącznie z tobą*";
                return question86;
            case 87:
                console.log("case 87");
                const question87 = "Po kolei wymieniacie nazwy pozycji seksualnych, kto pierwszy się pomyli pije!";
                return question87;
            case 88:
                console.log("case 88");
                const question88 = "89. Zrób mostek. Jeśli jest w miarę git - unikasz picia.";
                return question88;
            case 89:
                console.log("case 89");
                const question89 = "Wybierz osobę do pojedynku wzrokowego. Kto pierwszy mrugnie pije!";
                return question89;
            case 90:
                console.log("case 90");
                const question90 = "Zdejmij koszulkę do końca gry.";
                return question90;
            case 91:
                console.log("case 91");
                const question91 = "Rozdaj shota dla dowolnej osoby z melanżu.";
                return question91;
            case 92:
                console.log("case 92");
                const question92 = "Chłopcy piją.";
                return question92;
            case 93:
                console.log("case 93");
                const question93 = "Dziewczyny piją";
                return question93;
            case 94:
                console.log("case 94");
                const question94 = "Masz 15 sekund żeby wymienić 5 kategorii porno. Kara: 1 kieliszek";
                return question94;
            case 95:
                console.log("case 95");
                const question95 = "Ściągasz spodnie do końca rundy lub pijesz.";
                return question95;
            case 96:
                console.log("case 96");
                const question96 = "Zatańcz 30 sekundowy taniec z osobą po Twojej lewej.";
                return question96;
            case 97:
                console.log("case 97");
                const question97 = "Opowiedz żart, który rozśmieszy każdego na imprezie.";
                return question97;
            case 98:
                console.log("case 98");
                const question98 = "Znajdź 3 rzeczy, które łączą wszystkich na imprezie.";
                return question98;
            case 99:
                console.log("case 99");
                const question99 = "Wypij shota za każdym razem, gdy ktoś powie nazwę twojego ulubionego alkoholu.";
                return question99;
            case 100:
                console.log("case 100");
                const question100 = "Ułóż wierszyk o alkoholu.";
                return question100;
            case 101:
                console.log("case 101");
                const question101 = "Kto ma przy sobie prezerwatywy pije!";
                return question101;
            case 102:
                console.log("case 102");
                const question102 = "Kogo z obecnych tutaj wybrałbyś do trójkąta?";
                return question102;
            case 103:
                console.log("case 103");
                const question103 = "Najwyższa osoba pije.";
                return question103;
            case 104:
                console.log("case 104");
                const question104 = "Piją osoby, które kiedykolwiek używały erotycznych zabawek.";
                return question104;
            case 105:
                console.log("case 105");
                const question105 = "Jaką fantazję seksualną udało Ci się spełnić?";
                return question105;
            case 106:
                console.log("case 106");
                const question106 = "Z kim miałeś najlepszy pocałunek w tym roku?";
                return question106;
            case 107:
                console.log("case 107");
                const question107 = "Jakie jest najdziwniejsze miejsce, w którym uprawiałeś seks?";
                return question107;
            case 108:
                console.log("case 108");
                const question108 = "Napij się z osobą, z którą spędziłeś najwięcej czasu w tym roku.";
                return question108;
            case 109:
                console.log("case 109");
                const question109 = "Z iloma osobami w tym roku miałeś one nigdy stand?";
                return question109;
            case 110:
                console.log("case 110");
                const question110 = "Piją osoby, które udawały jakąś postać podczas seksu.";
                return question110;
            case 111:
                console.log("case 111");
                const question111 = "Wskaż osobę z najlepszymi tutaj pośladkami.";
                return question111;
            case 112:
                console.log("case 112");
                const question112 = "Kiedy ostatni raz byłeś aktywny seksualnie?";
                return question112;
            case 113:
                console.log("case 113");
                const question113 = "Wybierz osobę, która będzie siedziała Ci na kolanach całą rundę.";
                return question113;
            case 114:
                console.log("case 114");
                const question114 = "Fuck marry kill - Osoba po prawej wybiera dla Ciebie osoby.";
                return question114;
            case 115:
                console.log("case 115");
                const question115 = "Kiss or slap - osoba po lewej.";
                return question115;
            case 116:
                //zamiana z osobą po lewej
                return swapfunctiont();
            case 117:
                //zamiana z osobą po lewej
                return swapfunction();
            case 118:
                //zamiana z osobą po lewej
                return swapfunctions();
            default:
                console.log("koniec pytań albo cos nie tak");
                const question200 = "koniec pytań";
                return question200;
        }
    }

    let question = functionq(questionnumber);
    console.log(question);



    console.log("inputa tekst to: " + inputa);
    console.log("inputb tekst to: " + inputb);
    console.log("inputc tekst to: " + inputc);
    console.log("inputd tekst to: " + inputd);
    
    console.log("saveinputa tekst to: " + saveinputa);
    console.log("saveinputb tekst to: " + saveinputb);
    console.log("saveinputc tekst to: " + saveinputc);
    console.log("saveinputd tekst to: " + saveinputd);
    
    document.getElementById("cart").innerHTML = question;
    document.getElementById("name").innerHTML = player;
    console.log("nextdziala");
    // console.log(inputa);

    let myAnimation = document.getElementById("content");
    myAnimation.style.animation = "animation 1s linear";
    // myAnimation.style.transform = "rotate(90deg)";
}
