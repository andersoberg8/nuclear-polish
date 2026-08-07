/* =====================================================================
   nouns.js — your noun declension bank for Nuklearny Polski
   ---------------------------------------------------------------------
   THIS FILE IS YOURS TO EDIT, just like words.js and verbs.js.

   Each noun entry:
     en:      the English meaning
     emoji:   OPTIONAL meaning emoji (answer side of the flashcard)
     nom:     the noun in the NOMINATIVE singular (dictionary form)
     gender:  "m" / "f" / "n" — colors the Polish side of the card
     tags:    OPTIONAL extra tags, e.g. tags:["nuclear"], and "note:..."
     decl:    the case tables. EVERY ROW IS OPTIONAL — leave any out and
              nothing breaks. Each row is [singular, plural]; write "—"
              for a form that doesn't exist (it's skipped automatically).

     Recognized row names (shown on flashcards in this order):
       nom — Nominative  (the subject:        reaktor działa)
       gen — Genitive    (of / there's no:    nie ma reaktora)
       dat — Dative      (to / for:           przyglądam się reaktorowi)
       acc — Accusative  (the direct object:  widzę reaktor)
       ins — Instrumental(with / by means of: steruję reaktorem)
       loc — Locative    (in / on / about:    w reaktorze)
       voc — Vocative    (direct address — optional, add if you want)

   Quick sanity rules while filling tables in:
     • Masculine PERSONS (inżynier, operator…): accusative = genitive,
       in both singular and plural.
     • Masculine THINGS (reaktor, raport…): accusative sg = nominative sg.
     • Neuter: nominative = accusative, always.
     • The locative is never used without a preposition (w, na, o, przy).

   Flashcards (handled by index.html):
     • Each noun gets a word-only card (nominative + English), like verbs.
     • Each individual FORM becomes its own flashcard: the front shows
       the case, number and English ("Genitive · Singular — reactor"),
       the answer is that single form (reaktora).
     • On the Flashcards page, use the "Noun cards" toggle and the
       "Cases" chips to pick what to drill.

   Sorted A→Z by the nominative.
   ===================================================================== */

const NOUN_BANK = [
  { en:"pharmacy", emoji:"💊", nom:"apteka", gender:"f",
    decl:{
      nom:["apteka","apteki"],
      gen:["apteki","aptek"],
      dat:["aptece","aptekom"],
      acc:["aptekę","apteki"],
      ins:["apteką","aptekami"],
      loc:["aptece","aptekach"],
    } },

  { en:"car (informal)", emoji:"🚗", nom:"auto", gender:"n",
    decl:{
      nom:["auto","auta"],
      gen:["auta","aut"],
      dat:["autu","autom"],
      acc:["auto","auta"],
      ins:["autem","autami"],
      loc:["aucie","autach"],
    },
    tags:["note:informal word for car"] },

  { en:"bus", emoji:"🚌", nom:"autobus", gender:"m",
    decl:{
      nom:["autobus","autobusy"],
      gen:["autobusu","autobusów"],
      dat:["autobusowi","autobusom"],
      acc:["autobus","autobusy"],
      ins:["autobusem","autobusami"],
      loc:["autobusie","autobusach"],
    } },

  { en:"malfunction / breakdown", emoji:"🛠️⚠️", nom:"awaria", gender:"f",
    decl:{
      nom:["awaria","awarie"],
      gen:["awarii","awarii"],
      dat:["awarii","awariom"],
      acc:["awarię","awarie"],
      ins:["awarią","awariami"],
      loc:["awarii","awariach"],
    },
    tags:["nuclear"] },

  { en:"grandmother", emoji:"👵", nom:"babcia", gender:"f",
    decl:{
      nom:["babcia","babcie"],
      gen:["babci","babć"],
      dat:["babci","babciom"],
      acc:["babcię","babcie"],
      ins:["babcią","babciami"],
      loc:["babci","babciach"],
    },
    tags:["family"] },

  { en:"bank", emoji:"🏦", nom:"bank", gender:"m",
    decl:{
      nom:["bank","banki"],
      gen:["banku","banków"],
      dat:["bankowi","bankom"],
      acc:["bank","banki"],
      ins:["bankiem","bankami"],
      loc:["banku","bankach"],
    } },

  { en:"gasoline", emoji:"⛽️", nom:"benzyna", gender:"f",
    decl:{
      nom:["benzyna","—"],
      gen:["benzyny","—"],
      dat:["benzynie","—"],
      acc:["benzynę","—"],
      ins:["benzyną","—"],
      loc:["benzynie","—"],
    } },

  { en:"safety / security", emoji:"🛡️", nom:"bezpieczeństwo", gender:"n",
    decl:{
      nom:["bezpieczeństwo","—"],
      gen:["bezpieczeństwa","—"],
      dat:["bezpieczeństwu","—"],
      acc:["bezpieczeństwo","—"],
      ins:["bezpieczeństwem","—"],
      loc:["bezpieczeństwie","—"],
    },
    tags:["nuclear","note:practically singular-only"] },

  { en:"library", emoji:"📚", nom:"biblioteka", gender:"f",
    decl:{
      nom:["biblioteka","biblioteki"],
      gen:["biblioteki","bibliotek"],
      dat:["bibliotece","bibliotekom"],
      acc:["bibliotekę","biblioteki"],
      ins:["biblioteką","bibliotekami"],
      loc:["bibliotece","bibliotekach"],
    } },

  { en:"ticket", emoji:"🎫", nom:"bilet", gender:"m",
    decl:{
      nom:["bilet","bilety"],
      gen:["biletu","biletów"],
      dat:["biletowi","biletom"],
      acc:["bilet","bilety"],
      ins:["biletem","biletami"],
      loc:["bilecie","biletach"],
    } },

  { en:"office", emoji:"🏢💼", nom:"biuro", gender:"n",
    decl:{
      nom:["biuro","biura"],
      gen:["biura","biur"],
      dat:["biuru","biurom"],
      acc:["biuro","biura"],
      ins:["biurem","biurami"],
      loc:["biurze","biurach"],
    },
    tags:["nuclear"] },

  { en:"pain", emoji:"🤕", nom:"ból", gender:"m",
    decl:{
      nom:["ból","bóle"],
      gen:["bólu","bólów"],
      dat:["bólowi","bólom"],
      acc:["ból","bóle"],
      ins:["bólem","bólami"],
      loc:["bólu","bólach"],
    } },

  { en:"brother", nom:"brat", gender:"m",
    decl:{
      nom:["brat","bracia"],
      gen:["brata","braci"],
      dat:["bratu","braciom"],
      acc:["brata","braci"],
      ins:["bratem","braćmi"],
      loc:["bracie","braciach"],
    } },

  { en:"stomach / belly", nom:"brzuch", gender:"m",
    decl:{
      nom:["brzuch","brzuchy"],
      gen:["brzucha","brzuchów"],
      dat:["brzuchowi","brzuchom"],
      acc:["brzuch","brzuchy"],
      ins:["brzuchem","brzuchami"],
      loc:["brzuchu","brzuchach"],
    } },

  { en:"storm", emoji:"⛈️", nom:"burza", gender:"f",
    decl:{
      nom:["burza","burze"],
      gen:["burzy","burz"],
      dat:["burzy","burzom"],
      acc:["burzę","burze"],
      ins:["burzą","burzami"],
      loc:["burzy","burzach"],
    },
    tags:["weather"] },

  { en:"error / mistake", emoji:"❌", nom:"błąd", gender:"m",
    decl:{
      nom:["błąd","błędy"],
      gen:["błędu","błędów"],
      dat:["błędowi","błędom"],
      acc:["błąd","błędy"],
      ins:["błędem","błędami"],
      loc:["błędzie","błędach"],
    },
    tags:["nuclear","note:the vowel shifts: błąd → błędu (ą → ę)"] },

  { en:"goal / aim", emoji:"🎯", nom:"cel", gender:"m",
    decl:{
      nom:["cel","cele"],
      gen:["celu","celów"],
      dat:["celowi","celom"],
      acc:["cel","cele"],
      ins:["celem","celami"],
      loc:["celu","celach"],
    } },

  { en:"price", emoji:"💲", nom:"cena", gender:"f",
    decl:{
      nom:["cena","ceny"],
      gen:["ceny","cen"],
      dat:["cenie","cenom"],
      acc:["cenę","ceny"],
      ins:["ceną","cenami"],
      loc:["cenie","cenach"],
    } },

  { en:"bread", emoji:"🍞", nom:"chleb", gender:"m",
    decl:{
      nom:["chleb","chleby"],
      gen:["chleba","chlebów"],
      dat:["chlebowi","chlebom"],
      acc:["chleb","chleby"],
      ins:["chlebem","chlebami"],
      loc:["chlebie","chlebach"],
    } },

  { en:"cloud", emoji:"☁️", nom:"chmura", gender:"f",
    decl:{
      nom:["chmura","chmury"],
      gen:["chmury","chmur"],
      dat:["chmurze","chmurom"],
      acc:["chmurę","chmury"],
      ins:["chmurą","chmurami"],
      loc:["chmurze","chmurach"],
    },
    tags:["weather"] },

  { en:"illness", emoji:"🦠", nom:"choroba", gender:"f",
    decl:{
      nom:["choroba","choroby"],
      gen:["choroby","chorób"],
      dat:["chorobie","chorobom"],
      acc:["chorobę","choroby"],
      ins:["chorobą","chorobami"],
      loc:["chorobie","chorobach"],
    } },

  { en:"moment", emoji:"⏳", nom:"chwila", gender:"f",
    decl:{
      nom:["chwila","chwile"],
      gen:["chwili","chwil"],
      dat:["chwili","chwilom"],
      acc:["chwilę","chwile"],
      ins:["chwilą","chwilami"],
      loc:["chwili","chwilach"],
    } },

  { en:"coolant", emoji:"❄️💧", nom:"chłodziwo", gender:"n",
    decl:{
      nom:["chłodziwo","—"],
      gen:["chłodziwa","—"],
      dat:["chłodziwu","—"],
      acc:["chłodziwo","—"],
      ins:["chłodziwem","—"],
      loc:["chłodziwie","—"],
    },
    tags:["nuclear"] },

  { en:"boy", emoji:"👦", nom:"chłopiec", gender:"m",
    decl:{
      nom:["chłopiec","chłopcy"],
      gen:["chłopca","chłopców"],
      dat:["chłopcowi","chłopcom"],
      acc:["chłopca","chłopców"],
      ins:["chłopcem","chłopcami"],
      loc:["chłopcu","chłopcach"],
    } },

  { en:"body", emoji:"🧍", nom:"ciało", gender:"n",
    decl:{
      nom:["ciało","ciała"],
      gen:["ciała","ciał"],
      dat:["ciału","ciałom"],
      acc:["ciało","ciała"],
      ins:["ciałem","ciałami"],
      loc:["ciele","ciałach"],
    } },

  { en:"aunt", nom:"ciocia", gender:"f",
    decl:{
      nom:["ciocia","ciocie"],
      gen:["cioci","cioć"],
      dat:["cioci","ciociom"],
      acc:["ciocię","ciocie"],
      ins:["ciocią","ciociami"],
      loc:["cioci","ciociach"],
    },
    tags:["family"] },

  { en:"pressure", emoji:"⏲️💨", nom:"ciśnienie", gender:"n",
    decl:{
      nom:["ciśnienie","ciśnienia"],
      gen:["ciśnienia","ciśnień"],
      dat:["ciśnieniu","ciśnieniom"],
      acc:["ciśnienie","ciśnienia"],
      ins:["ciśnieniem","ciśnieniami"],
      loc:["ciśnieniu","ciśnieniach"],
    },
    tags:["nuclear"] },

  { en:"daughter", emoji:"👧", nom:"córka", gender:"f",
    decl:{
      nom:["córka","córki"],
      gen:["córki","córek"],
      dat:["córce","córkom"],
      acc:["córkę","córki"],
      ins:["córką","córkami"],
      loc:["córce","córkach"],
    },
    tags:["family"] },

  { en:"sugar", emoji:"🍬", nom:"cukier", gender:"m",
    decl:{
      nom:["cukier","—"],
      gen:["cukru","—"],
      dat:["cukrowi","—"],
      acc:["cukier","—"],
      ins:["cukrem","—"],
      loc:["cukrze","—"],
    } },

  { en:"quarterfinal", emoji:"🏆", nom:"ćwierćfinał", gender:"m",
    decl:{
      nom:["ćwierćfinał","ćwierćfinały"],
      gen:["ćwierćfinału","ćwierćfinałów"],
      dat:["ćwierćfinałowi","ćwierćfinałom"],
      acc:["ćwierćfinał","ćwierćfinały"],
      ins:["ćwierćfinałem","ćwierćfinałami"],
      loc:["ćwierćfinale","ćwierćfinałach"],
    },
    tags:["sports"] },

  { en:"cap", emoji:"🧢", nom:"czapka", gender:"f",
    decl:{
      nom:["czapka","czapki"],
      gen:["czapki","czapek"],
      dat:["czapce","czapkom"],
      acc:["czapkę","czapki"],
      ins:["czapką","czapkami"],
      loc:["czapce","czapkach"],
    } },

  { en:"time (nominative)", emoji:"⏳", nom:"czas", gender:"m",
    decl:{
      nom:["czas","czasy"],
      gen:["czasu","czasów"],
      dat:["czasowi","czasom"],
      acc:["czas","czasy"],
      ins:["czasem","czasami"],
      loc:["czasie","czasach"],
    } },

  { en:"June", emoji:"☀️🗓️", nom:"czerwiec", gender:"m",
    decl:{
      nom:["czerwiec","czerwce"],
      gen:["czerwca","czerwców"],
      dat:["czerwcowi","czerwcom"],
      acc:["czerwiec","czerwce"],
      ins:["czerwcem","czerwcami"],
      loc:["czerwcu","czerwcach"],
    },
    tags:["calendar"] },

  { en:"part", nom:"część", gender:"f",
    decl:{
      nom:["część","części"],
      gen:["części","części"],
      dat:["części","częściom"],
      acc:["część","części"],
      ins:["częścią","częściami"],
      loc:["części","częściach"],
    } },

  { en:"sensor", emoji:"📡", nom:"czujnik", gender:"m",
    decl:{
      nom:["czujnik","czujniki"],
      gen:["czujnika","czujników"],
      dat:["czujnikowi","czujnikom"],
      acc:["czujnik","czujniki"],
      ins:["czujnikiem","czujnikami"],
      loc:["czujniku","czujnikach"],
    },
    tags:["nuclear"] },

  { en:"vigilance / alertness", emoji:"👀", nom:"czujność", gender:"f",
    decl:{
      nom:["czujność","—"],
      gen:["czujności","—"],
      dat:["czujności","—"],
      acc:["czujność","—"],
      ins:["czujnością","—"],
      loc:["czujności","—"],
    },
    tags:["nuclear"] },

  { en:"Thursday", emoji:"📅4️⃣", nom:"czwartek", gender:"m",
    decl:{
      nom:["czwartek","czwartki"],
      gen:["czwartku","czwartków"],
      dat:["czwartkowi","czwartkom"],
      acc:["czwartek","czwartki"],
      ins:["czwartkiem","czwartkami"],
      loc:["czwartku","czwartkach"],
    },
    tags:["calendar"] },

  { en:"person / human", emoji:"🧍", nom:"człowiek", gender:"m",
    decl:{
      nom:["człowiek","ludzie"],
      gen:["człowieka","ludzi"],
      dat:["człowiekowi","ludziom"],
      acc:["człowieka","ludzi"],
      ins:["człowiekiem","ludźmi"],
      loc:["człowieku","ludziach"],
    },
    tags:["note:the plural comes from a different word: ludzie"] },

  { en:"date", emoji:"📅", nom:"data", gender:"f",
    decl:{
      nom:["data","daty"],
      gen:["daty","dat"],
      dat:["dacie","datom"],
      acc:["datę","daty"],
      ins:["datą","datami"],
      loc:["dacie","datach"],
    },
    tags:["calendar"] },

  { en:"rain", emoji:"🌧️", nom:"deszcz", gender:"m",
    decl:{
      nom:["deszcz","deszcze"],
      gen:["deszczu","deszczów"],
      dat:["deszczowi","deszczom"],
      acc:["deszcz","deszcze"],
      ins:["deszczem","deszczami"],
      loc:["deszczu","deszczach"],
    },
    tags:["weather"] },

  { en:"document", emoji:"📄", nom:"dokument", gender:"m",
    decl:{
      nom:["dokument","dokumenty"],
      gen:["dokumentu","dokumentów"],
      dat:["dokumentowi","dokumentom"],
      acc:["dokument","dokumenty"],
      ins:["dokumentem","dokumentami"],
      loc:["dokumencie","dokumentach"],
    },
    tags:["work"] },

  { en:"house / home", emoji:"🏠", nom:"dom", gender:"m",
    decl:{
      nom:["dom","domy"],
      gen:["domu","domów"],
      dat:["domowi","domom"],
      acc:["dom","domy"],
      ins:["domem","domami"],
      loc:["domu","domach"],
    } },

  { en:"dosimeter", emoji:"📟☢️", nom:"dozymetr", gender:"m",
    decl:{
      nom:["dozymetr","dozymetry"],
      gen:["dozymetru","dozymetrów"],
      dat:["dozymetrowi","dozymetrom"],
      acc:["dozymetr","dozymetry"],
      ins:["dozymetrem","dozymetrami"],
      loc:["dozymetrze","dozymetrach"],
    },
    tags:["nuclear"] },

  { en:"wood", emoji:"🪵", nom:"drewno", gender:"n",
    decl:{
      nom:["drewno","—"],
      gen:["drewna","—"],
      dat:["drewnu","—"],
      acc:["drewno","—"],
      ins:["drewnem","—"],
      loc:["drewnie","—"],
    } },

  { en:"road / way", emoji:"🛣️", nom:"droga", gender:"f",
    decl:{
      nom:["droga","drogi"],
      gen:["drogi","dróg"],
      dat:["drodze","drogom"],
      acc:["drogę","drogi"],
      ins:["drogą","drogami"],
      loc:["drodze","drogach"],
    } },

  { en:"tree", emoji:"🌳", nom:"drzewo", gender:"n",
    decl:{
      nom:["drzewo","drzewa"],
      gen:["drzewa","drzew"],
      dat:["drzewu","drzewom"],
      acc:["drzewo","drzewa"],
      ins:["drzewem","drzewami"],
      loc:["drzewie","drzewach"],
    } },

  { en:"station (rail/bus)", emoji:"🚉", nom:"dworzec", gender:"m",
    decl:{
      nom:["dworzec","dworce"],
      gen:["dworca","dworców"],
      dat:["dworcowi","dworcom"],
      acc:["dworzec","dworce"],
      ins:["dworcem","dworcami"],
      loc:["dworcu","dworcach"],
    } },

  { en:"director", nom:"dyrektor", gender:"m",
    decl:{
      nom:["dyrektor","dyrektorzy"],
      gen:["dyrektora","dyrektorów"],
      dat:["dyrektorowi","dyrektorom"],
      acc:["dyrektora","dyrektorów"],
      ins:["dyrektorem","dyrektorami"],
      loc:["dyrektorze","dyrektorach"],
    },
    tags:["nuclear"] },

  { en:"grandfather", emoji:"👴", nom:"dziadek", gender:"m",
    decl:{
      nom:["dziadek","dziadkowie"],
      gen:["dziadka","dziadków"],
      dat:["dziadkowi","dziadkom"],
      acc:["dziadka","dziadków"],
      ins:["dziadkiem","dziadkami"],
      loc:["dziadku","dziadkach"],
    } },

  { en:"child", emoji:"🧒", nom:"dziecko", gender:"n",
    decl:{
      nom:["dziecko","dzieci"],
      gen:["dziecka","dzieci"],
      dat:["dziecku","dzieciom"],
      acc:["dziecko","dzieci"],
      ins:["dzieckiem","dziećmi"],
      loc:["dziecku","dzieciach"],
    } },

  { en:"day", emoji:"☀️📅", nom:"dzień", gender:"m",
    decl:{
      nom:["dzień","dni"],
      gen:["dnia","dni"],
      dat:["dniowi","dniom"],
      acc:["dzień","dni"],
      ins:["dniem","dniami"],
      loc:["dniu","dniach"],
    },
    tags:["calendar"] },

  { en:"girl", emoji:"👧", nom:"dziewczyna", gender:"f",
    decl:{
      nom:["dziewczyna","dziewczyny"],
      gen:["dziewczyny","dziewczyn"],
      dat:["dziewczynie","dziewczynom"],
      acc:["dziewczynę","dziewczyny"],
      ins:["dziewczyną","dziewczynami"],
      loc:["dziewczynie","dziewczynach"],
    } },

  { en:"pen", emoji:"🖊️", nom:"długopis", gender:"m",
    decl:{
      nom:["długopis","długopisy"],
      gen:["długopisu","długopisów"],
      dat:["długopisowi","długopisom"],
      acc:["długopis","długopisy"],
      ins:["długopisem","długopisami"],
      loc:["długopisie","długopisach"],
    } },

  { en:"length", emoji:"📏", nom:"długość", gender:"f",
    decl:{
      nom:["długość","długości"],
      gen:["długości","długości"],
      dat:["długości","długościom"],
      acc:["długość","długości"],
      ins:["długością","długościami"],
      loc:["długości","długościach"],
    } },

  { en:"education", emoji:"📚🎓", nom:"edukacja", gender:"f",
    decl:{
      nom:["edukacja","—"],
      gen:["edukacji","—"],
      dat:["edukacji","—"],
      acc:["edukację","—"],
      ins:["edukacją","—"],
      loc:["edukacji","—"],
    } },

  { en:"expert", emoji:"🧠", nom:"ekspert", gender:"m",
    decl:{
      nom:["ekspert","eksperci"],
      gen:["eksperta","ekspertów"],
      dat:["ekspertowi","ekspertom"],
      acc:["eksperta","ekspertów"],
      ins:["ekspertem","ekspertami"],
      loc:["ekspercie","ekspertach"],
    } },

  { en:"power plant", emoji:"🏭⚡", nom:"elektrownia", gender:"f",
    decl:{
      nom:["elektrownia","elektrownie"],
      gen:["elektrowni","elektrowni"],
      dat:["elektrowni","elektrowniom"],
      acc:["elektrownię","elektrownie"],
      ins:["elektrownią","elektrowniami"],
      loc:["elektrowni","elektrowniach"],
    },
    tags:["nuclear"] },

  { en:"energy", emoji:"⚡", nom:"energia", gender:"f",
    decl:{
      nom:["energia","energie"],
      gen:["energii","energii"],
      dat:["energii","energiom"],
      acc:["energię","energie"],
      ins:["energią","energiami"],
      loc:["energii","energiach"],
    },
    tags:["nuclear"] },

  { en:"evacuation", emoji:"🏃🚪", nom:"ewakuacja", gender:"f",
    decl:{
      nom:["ewakuacja","ewakuacje"],
      gen:["ewakuacji","ewakuacji"],
      dat:["ewakuacji","ewakuacjom"],
      acc:["ewakuację","ewakuacje"],
      ins:["ewakuacją","ewakuacjami"],
      loc:["ewakuacji","ewakuacjach"],
    } },

  { en:"cup", emoji:"☕", nom:"filiżanka", gender:"f",
    decl:{
      nom:["filiżanka","filiżanki"],
      gen:["filiżanki","filiżanek"],
      dat:["filiżance","filiżankom"],
      acc:["filiżankę","filiżanki"],
      ins:["filiżanką","filiżankami"],
      loc:["filiżance","filiżankach"],
    } },

  { en:"film", emoji:"🎬", nom:"film", gender:"m",
    decl:{
      nom:["film","filmy"],
      gen:["filmu","filmów"],
      dat:["filmowi","filmom"],
      acc:["film","filmy"],
      ins:["filmem","filmami"],
      loc:["filmie","filmach"],
    } },

  { en:"company", emoji:"🏢", nom:"firma", gender:"f",
    decl:{
      nom:["firma","firmy"],
      gen:["firmy","firm"],
      dat:["firmie","firmom"],
      acc:["firmę","firmy"],
      ins:["firmą","firmami"],
      loc:["firmie","firmach"],
    },
    tags:["nuclear"] },

  { en:"fire extinguisher", emoji:"🧯", nom:"gaśnica", gender:"f",
    decl:{
      nom:["gaśnica","gaśnice"],
      gen:["gaśnicy","gaśnic"],
      dat:["gaśnicy","gaśnicom"],
      acc:["gaśnicę","gaśnice"],
      ins:["gaśnicą","gaśnicami"],
      loc:["gaśnicy","gaśnicach"],
    } },

  { en:"newspaper", emoji:"📰", nom:"gazeta", gender:"f",
    decl:{
      nom:["gazeta","gazety"],
      gen:["gazety","gazet"],
      dat:["gazecie","gazetom"],
      acc:["gazetę","gazety"],
      ins:["gazetą","gazetami"],
      loc:["gazecie","gazetach"],
    } },

  { en:"hour", emoji:"🕐", nom:"godzina", gender:"f",
    decl:{
      nom:["godzina","godziny"],
      gen:["godziny","godzin"],
      dat:["godzinie","godzinom"],
      acc:["godzinę","godziny"],
      ins:["godziną","godzinami"],
      loc:["godzinie","godzinach"],
    },
    tags:["calendar"] },

  { en:"mountain", emoji:"⛰️", nom:"góra", gender:"f",
    decl:{
      nom:["góra","góry"],
      gen:["góry","gór"],
      dat:["górze","górom"],
      acc:["górę","góry"],
      ins:["górą","górami"],
      loc:["górze","górach"],
    } },

  { en:"guest", nom:"gość", gender:"m",
    decl:{
      nom:["gość","goście"],
      gen:["gościa","gości"],
      dat:["gościowi","gościom"],
      acc:["gościa","gości"],
      ins:["gościem","gośćmi"],
      loc:["gościu","gościach"],
    } },

  { en:"economy", emoji:"📈", nom:"gospodarka", gender:"f",
    decl:{
      nom:["gospodarka","gospodarki"],
      gen:["gospodarki","gospodarek"],
      dat:["gospodarce","gospodarkom"],
      acc:["gospodarkę","gospodarki"],
      ins:["gospodarką","gospodarkami"],
      loc:["gospodarce","gospodarkach"],
    } },

  { en:"border", emoji:"🛂", nom:"granica", gender:"f",
    decl:{
      nom:["granica","granice"],
      gen:["granicy","granic"],
      dat:["granicy","granicom"],
      acc:["granicę","granice"],
      ins:["granicą","granicami"],
      loc:["granicy","granicach"],
    } },

  { en:"December", emoji:"🎄🗓️", nom:"grudzień", gender:"m",
    decl:{
      nom:["grudzień","grudnie"],
      gen:["grudnia","grudni"],
      dat:["grudniowi","grudniom"],
      acc:["grudzień","grudnie"],
      ins:["grudniem","grudniami"],
      loc:["grudniu","grudniach"],
    },
    tags:["calendar"] },

  { en:"star", emoji:"⭐", nom:"gwiazda", gender:"f",
    decl:{
      nom:["gwiazda","gwiazdy"],
      gen:["gwiazdy","gwiazd"],
      dat:["gwieździe","gwiazdom"],
      acc:["gwiazdę","gwiazdy"],
      ins:["gwiazdą","gwiazdami"],
      loc:["gwieździe","gwiazdach"],
    } },

  { en:"head", emoji:"👤", nom:"głowa", gender:"f",
    decl:{
      nom:["głowa","głowy"],
      gen:["głowy","głów"],
      dat:["głowie","głowom"],
      acc:["głowę","głowy"],
      ins:["głową","głowami"],
      loc:["głowie","głowach"],
    } },

  { en:"tea", emoji:"🍵", nom:"herbata", gender:"f",
    decl:{
      nom:["herbata","herbaty"],
      gen:["herbaty","herbat"],
      dat:["herbacie","herbatom"],
      acc:["herbatę","herbaty"],
      ins:["herbatą","herbatami"],
      loc:["herbacie","herbatach"],
    } },

  { en:"history / story", emoji:"📜", nom:"historia", gender:"f",
    decl:{
      nom:["historia","historie"],
      gen:["historii","historii"],
      dat:["historii","historiom"],
      acc:["historię","historie"],
      ins:["historią","historiami"],
      loc:["historii","historiach"],
    } },

  { en:"hotel", emoji:"🏨", nom:"hotel", gender:"m",
    decl:{
      nom:["hotel","hotele"],
      gen:["hotelu","hoteli"],
      dat:["hotelowi","hotelom"],
      acc:["hotel","hotele"],
      ins:["hotelem","hotelami"],
      loc:["hotelu","hotelach"],
    } },

  { en:"quantity", nom:"ilość", gender:"f",
    decl:{
      nom:["ilość","ilości"],
      gen:["ilości","ilości"],
      dat:["ilości","ilościom"],
      acc:["ilość","ilości"],
      ins:["ilością","ilościami"],
      loc:["ilości","ilościach"],
    } },

  { en:"engineer", emoji:"👷", nom:"inżynier", gender:"m",
    decl:{
      nom:["inżynier","inżynierowie"],
      gen:["inżyniera","inżynierów"],
      dat:["inżynierowi","inżynierom"],
      acc:["inżyniera","inżynierów"],
      ins:["inżynierem","inżynierami"],
      loc:["inżynierze","inżynierach"],
    },
    tags:["nuclear","note:masculine person: accusative = genitive"] },

  { en:"apple", emoji:"🍎", nom:"jabłko", gender:"n",
    decl:{
      nom:["jabłko","jabłka"],
      gen:["jabłka","jabłek"],
      dat:["jabłku","jabłkom"],
      acc:["jabłko","jabłka"],
      ins:["jabłkiem","jabłkami"],
      loc:["jabłku","jabłkach"],
    } },

  { en:"egg", emoji:"🥚", nom:"jajko", gender:"n",
    decl:{
      nom:["jajko","jajka"],
      gen:["jajka","jajek"],
      dat:["jajku","jajkom"],
      acc:["jajko","jajka"],
      ins:["jajkiem","jajkami"],
      loc:["jajku","jajkach"],
    } },

  { en:"quality", emoji:"⭐", nom:"jakość", gender:"f",
    decl:{
      nom:["jakość","—"],
      gen:["jakości","—"],
      dat:["jakości","—"],
      acc:["jakość","—"],
      ins:["jakością","—"],
      loc:["jakości","—"],
    },
    tags:["weather"] },

  { en:"food", emoji:"🍽️🍲", nom:"jedzenie", gender:"n",
    decl:{
      nom:["jedzenie","—"],
      gen:["jedzenia","—"],
      dat:["jedzeniu","—"],
      acc:["jedzenie","—"],
      ins:["jedzeniem","—"],
      loc:["jedzeniu","—"],
    } },

  { en:"autumn", emoji:"🍂", nom:"jesień", gender:"f",
    decl:{
      nom:["jesień","jesienie"],
      gen:["jesieni","jesieni"],
      dat:["jesieni","jesieniom"],
      acc:["jesień","jesienie"],
      ins:["jesienią","jesieniami"],
      loc:["jesieni","jesieniach"],
    },
    tags:["calendar"] },

  { en:"lake", emoji:"🏞️", nom:"jezioro", gender:"n",
    decl:{
      nom:["jezioro","jeziora"],
      gen:["jeziora","jezior"],
      dat:["jezioru","jeziorom"],
      acc:["jezioro","jeziora"],
      ins:["jeziorem","jeziorami"],
      loc:["jeziorze","jeziorach"],
    } },

  { en:"language / tongue", emoji:"👅💬", nom:"język", gender:"m",
    decl:{
      nom:["język","języki"],
      gen:["języka","języków"],
      dat:["językowi","językom"],
      acc:["język","języki"],
      ins:["językiem","językami"],
      loc:["języku","językach"],
    } },

  { en:"calendar", emoji:"🗓️", nom:"kalendarz", gender:"m",
    decl:{
      nom:["kalendarz","kalendarze"],
      gen:["kalendarza","kalendarzy"],
      dat:["kalendarzowi","kalendarzom"],
      acc:["kalendarz","kalendarze"],
      ins:["kalendarzem","kalendarzami"],
      loc:["kalendarzu","kalendarzach"],
    },
    tags:["calendar"] },

  { en:"stone", emoji:"🪨", nom:"kamień", gender:"m",
    decl:{
      nom:["kamień","kamienie"],
      gen:["kamienia","kamieni"],
      dat:["kamieniowi","kamieniom"],
      acc:["kamień","kamienie"],
      ins:["kamieniem","kamieniami"],
      loc:["kamieniu","kamieniach"],
    } },

  { en:"card", emoji:"💳", nom:"karta", gender:"f",
    decl:{
      nom:["karta","karty"],
      gen:["karty","kart"],
      dat:["karcie","kartom"],
      acc:["kartę","karty"],
      ins:["kartą","kartami"],
      loc:["karcie","kartach"],
    } },

  { en:"hard hat / helmet", emoji:"⛑️", nom:"kask", gender:"m",
    decl:{
      nom:["kask","kaski"],
      gen:["kasku","kasków"],
      dat:["kaskowi","kaskom"],
      acc:["kask","kaski"],
      ins:["kaskiem","kaskami"],
      loc:["kasku","kaskach"],
    },
    tags:["nuclear"] },

  { en:"coffee", emoji:"☕", nom:"kawa", gender:"f",
    decl:{
      nom:["kawa","kawy"],
      gen:["kawy","kaw"],
      dat:["kawie","kawom"],
      acc:["kawę","kawy"],
      ins:["kawą","kawami"],
      loc:["kawie","kawach"],
    } },

  { en:"café", emoji:"☕", nom:"kawiarnia", gender:"f",
    decl:{
      nom:["kawiarnia","kawiarnie"],
      gen:["kawiarni","kawiarni"],
      dat:["kawiarni","kawiarniom"],
      acc:["kawiarnię","kawiarnie"],
      ins:["kawiarnią","kawiarniami"],
      loc:["kawiarni","kawiarniach"],
    } },

  { en:"driver", emoji:"🚗🧑", nom:"kierowca", gender:"m",
    decl:{
      nom:["kierowca","kierowcy"],
      gen:["kierowcy","kierowców"],
      dat:["kierowcy","kierowcom"],
      acc:["kierowcę","kierowców"],
      ins:["kierowcą","kierowcami"],
      loc:["kierowcy","kierowcach"],
    } },

  { en:"manager", emoji:"🧑‍💼", nom:"kierownik", gender:"m",
    decl:{
      nom:["kierownik","kierownicy"],
      gen:["kierownika","kierowników"],
      dat:["kierownikowi","kierownikom"],
      acc:["kierownika","kierowników"],
      ins:["kierownikiem","kierownikami"],
      loc:["kierowniku","kierownikach"],
    },
    tags:["nuclear","note:masculine person: accusative = genitive"] },

  { en:"direction", nom:"kierunek", gender:"m",
    decl:{
      nom:["kierunek","kierunki"],
      gen:["kierunku","kierunków"],
      dat:["kierunkowi","kierunkom"],
      acc:["kierunek","kierunki"],
      ins:["kierunkiem","kierunkami"],
      loc:["kierunku","kierunkach"],
    },
    tags:["weather"] },

  { en:"cinema", emoji:"🎬", nom:"kino", gender:"n",
    decl:{
      nom:["kino","kina"],
      gen:["kina","kin"],
      dat:["kinu","kinom"],
      acc:["kino","kina"],
      ins:["kinem","kinami"],
      loc:["kinie","kinach"],
    } },

  { en:"customer", emoji:"🛍️", nom:"klient", gender:"m",
    decl:{
      nom:["klient","klienci"],
      gen:["klienta","klientów"],
      dat:["klientowi","klientom"],
      acc:["klienta","klientów"],
      ins:["klientem","klientami"],
      loc:["kliencie","klientach"],
    } },

  { en:"key", emoji:"🔑", nom:"klucz", gender:"m",
    decl:{
      nom:["klucz","klucze"],
      gen:["klucza","kluczy"],
      dat:["kluczowi","kluczom"],
      acc:["klucz","klucze"],
      ins:["kluczem","kluczami"],
      loc:["kluczu","kluczach"],
    } },

  { en:"woman", emoji:"👩", nom:"kobieta", gender:"f",
    decl:{
      nom:["kobieta","kobiety"],
      gen:["kobiety","kobiet"],
      dat:["kobiecie","kobietom"],
      acc:["kobietę","kobiety"],
      ins:["kobietą","kobietami"],
      loc:["kobiecie","kobietach"],
    } },

  { en:"dinner", emoji:"🌙🍽️", nom:"kolacja", gender:"f",
    decl:{
      nom:["kolacja","kolacje"],
      gen:["kolacji","kolacji"],
      dat:["kolacji","kolacjom"],
      acc:["kolację","kolacje"],
      ins:["kolacją","kolacjami"],
      loc:["kolacji","kolacjach"],
    } },

  { en:"casual friend (m)", nom:"kolega", gender:"m",
    decl:{
      nom:["kolega","koledzy"],
      gen:["kolegi","kolegów"],
      dat:["koledze","kolegom"],
      acc:["kolegę","kolegów"],
      ins:["kolegą","kolegami"],
      loc:["koledze","kolegach"],
    } },

  { en:"casual friend (f)", nom:"koleżanka", gender:"f",
    decl:{
      nom:["koleżanka","koleżanki"],
      gen:["koleżanki","koleżanek"],
      dat:["koleżance","koleżankom"],
      acc:["koleżankę","koleżanki"],
      ins:["koleżanką","koleżankami"],
      loc:["koleżance","koleżankach"],
    } },

  { en:"color", emoji:"🎨", nom:"kolor", gender:"m",
    decl:{
      nom:["kolor","kolory"],
      gen:["koloru","kolorów"],
      dat:["kolorowi","kolorom"],
      acc:["kolor","kolory"],
      ins:["kolorem","kolorami"],
      loc:["kolorze","kolorach"],
    } },

  { en:"computer", emoji:"💻", nom:"komputer", gender:"m",
    decl:{
      nom:["komputer","komputery"],
      gen:["komputera","komputerów"],
      dat:["komputerowi","komputerom"],
      acc:["komputer","komputery"],
      ins:["komputerem","komputerami"],
      loc:["komputerze","komputerach"],
    },
    tags:["nuclear"] },

  { en:"horse", emoji:"🐴", nom:"koń", gender:"m",
    decl:{
      nom:["koń","konie"],
      gen:["konia","koni"],
      dat:["koniowi","koniom"],
      acc:["konia","konie"],
      ins:["koniem","końmi"],
      loc:["koniu","koniach"],
    } },

  { en:"end", emoji:"🔚", nom:"koniec", gender:"m",
    decl:{
      nom:["koniec","końce"],
      gen:["końca","końców"],
      dat:["końcowi","końcom"],
      acc:["koniec","końce"],
      ins:["końcem","końcami"],
      loc:["końcu","końcach"],
    } },

  { en:"maintenance", emoji:"🔧", nom:"konserwacja", gender:"f",
    decl:{
      nom:["konserwacja","konserwacje"],
      gen:["konserwacji","konserwacji"],
      dat:["konserwacji","konserwacjom"],
      acc:["konserwację","konserwacje"],
      ins:["konserwacją","konserwacjami"],
      loc:["konserwacji","konserwacjach"],
    },
    tags:["nuclear"] },

  { en:"bone", emoji:"🦴", nom:"kość", gender:"f",
    decl:{
      nom:["kość","kości"],
      gen:["kości","kości"],
      dat:["kości","kościom"],
      acc:["kość","kości"],
      ins:["kością","kośćmi"],
      loc:["kości","kościach"],
    } },

  { en:"church", emoji:"⛪", nom:"kościół", gender:"m",
    decl:{
      nom:["kościół","kościoły"],
      gen:["kościoła","kościołów"],
      dat:["kościołowi","kościołom"],
      acc:["kościół","kościoły"],
      ins:["kościołem","kościołami"],
      loc:["kościele","kościołach"],
    } },

  { en:"cost", emoji:"🧾", nom:"koszt", gender:"m",
    decl:{
      nom:["koszt","koszty"],
      gen:["kosztu","kosztów"],
      dat:["kosztowi","kosztom"],
      acc:["koszt","koszty"],
      ins:["kosztem","kosztami"],
      loc:["koszcie","kosztach"],
    } },

  { en:"shirt", emoji:"👔", nom:"koszula", gender:"f",
    decl:{
      nom:["koszula","koszule"],
      gen:["koszuli","koszul"],
      dat:["koszuli","koszulom"],
      acc:["koszulę","koszule"],
      ins:["koszulą","koszulami"],
      loc:["koszuli","koszulach"],
    } },

  { en:"cat", emoji:"🐈", nom:"kot", gender:"m",
    decl:{
      nom:["kot","koty"],
      gen:["kota","kotów"],
      dat:["kotu","kotom"],
      acc:["kota","koty"],
      ins:["kotem","kotami"],
      loc:["kocie","kotach"],
    } },

  { en:"country", emoji:"🗺️🚩", nom:"kraj", gender:"m",
    decl:{
      nom:["kraj","kraje"],
      gen:["kraju","krajów"],
      dat:["krajowi","krajom"],
      acc:["kraj","kraje"],
      ins:["krajem","krajami"],
      loc:["kraju","krajach"],
    } },

  { en:"blood", emoji:"🩸", nom:"krew", gender:"f",
    decl:{
      nom:["krew","—"],
      gen:["krwi","—"],
      dat:["krwi","—"],
      acc:["krew","—"],
      ins:["krwią","—"],
      loc:["krwi","—"],
    } },

  { en:"king", emoji:"👑", nom:"król", gender:"m",
    decl:{
      nom:["król","królowie"],
      gen:["króla","królów"],
      dat:["królowi","królom"],
      acc:["króla","królów"],
      ins:["królem","królami"],
      loc:["królu","królach"],
    } },

  { en:"cow", emoji:"🐄", nom:"krowa", gender:"f",
    decl:{
      nom:["krowa","krowy"],
      gen:["krowy","krów"],
      dat:["krowie","krowom"],
      acc:["krowę","krowy"],
      ins:["krową","krowami"],
      loc:["krowie","krowach"],
    } },

  { en:"chair", emoji:"🪑", nom:"krzesło", gender:"n",
    decl:{
      nom:["krzesło","krzesła"],
      gen:["krzesła","krzeseł"],
      dat:["krzesłu","krzesłom"],
      acc:["krzesło","krzesła"],
      ins:["krzesłem","krzesłami"],
      loc:["krześle","krzesłach"],
    } },

  { en:"book", emoji:"📖", nom:"książka", gender:"f",
    decl:{
      nom:["książka","książki"],
      gen:["książki","książek"],
      dat:["książce","książkom"],
      acc:["książkę","książki"],
      ins:["książką","książkami"],
      loc:["książce","książkach"],
    } },

  { en:"moon", emoji:"🌙", nom:"księżyc", gender:"m",
    decl:{
      nom:["księżyc","księżyce"],
      gen:["księżyca","księżyców"],
      dat:["księżycowi","księżycom"],
      acc:["księżyc","księżyce"],
      ins:["księżycem","księżycami"],
      loc:["księżycu","księżycach"],
    } },

  { en:"kitchen", emoji:"🍳", nom:"kuchnia", gender:"f",
    decl:{
      nom:["kuchnia","kuchnie"],
      gen:["kuchni","kuchni"],
      dat:["kuchni","kuchniom"],
      acc:["kuchnię","kuchnie"],
      ins:["kuchnią","kuchniami"],
      loc:["kuchni","kuchniach"],
    } },

  { en:"culture", emoji:"🎭", nom:"kultura", gender:"f",
    decl:{
      nom:["kultura","kultury"],
      gen:["kultury","kultur"],
      dat:["kulturze","kulturom"],
      acc:["kulturę","kultury"],
      ins:["kulturą","kulturami"],
      loc:["kulturze","kulturach"],
    } },

  { en:"jacket", emoji:"🧥", nom:"kurtka", gender:"f",
    decl:{
      nom:["kurtka","kurtki"],
      gen:["kurtki","kurtek"],
      dat:["kurtce","kurtkom"],
      acc:["kurtkę","kurtki"],
      ins:["kurtką","kurtkami"],
      loc:["kurtce","kurtkach"],
    } },

  { en:"flower", emoji:"🌸", nom:"kwiat", gender:"m",
    decl:{
      nom:["kwiat","kwiaty"],
      gen:["kwiatu","kwiatów"],
      dat:["kwiatowi","kwiatom"],
      acc:["kwiat","kwiaty"],
      ins:["kwiatem","kwiatami"],
      loc:["kwiecie","kwiatach"],
    } },

  { en:"April", emoji:"🌷🗓️", nom:"kwiecień", gender:"m",
    decl:{
      nom:["kwiecień","kwietnie"],
      gen:["kwietnia","kwietni"],
      dat:["kwietniowi","kwietniom"],
      acc:["kwiecień","kwietnie"],
      ins:["kwietniem","kwietniami"],
      loc:["kwietniu","kwietniach"],
    },
    tags:["calendar"] },

  { en:"lie", emoji:"🤥", nom:"kłamstwo", gender:"n",
    decl:{
      nom:["kłamstwo","kłamstwa"],
      gen:["kłamstwa","kłamstw"],
      dat:["kłamstwu","kłamstwom"],
      acc:["kłamstwo","kłamstwa"],
      ins:["kłamstwem","kłamstwami"],
      loc:["kłamstwie","kłamstwach"],
    } },

  { en:"lamp", emoji:"💡", nom:"lampa", gender:"f",
    decl:{
      nom:["lampa","lampy"],
      gen:["lampy","lamp"],
      dat:["lampie","lampom"],
      acc:["lampę","lampy"],
      ins:["lampą","lampami"],
      loc:["lampie","lampach"],
    } },

  { en:"forest", emoji:"🌲🌲", nom:"las", gender:"m",
    decl:{
      nom:["las","lasy"],
      gen:["lasu","lasów"],
      dat:["lasowi","lasom"],
      acc:["las","lasy"],
      ins:["lasem","lasami"],
      loc:["lesie","lasach"],
    } },

  { en:"summer", emoji:"☀️", nom:"lato", gender:"n",
    decl:{
      nom:["lato","lata"],
      gen:["lata","lat"],
      dat:["latu","latom"],
      acc:["lato","lata"],
      ins:["latem","latami"],
      loc:["lecie","latach"],
    },
    tags:["calendar"] },

  { en:"doctor", emoji:"🧑‍⚕️", nom:"lekarz", gender:"m",
    decl:{
      nom:["lekarz","lekarze"],
      gen:["lekarza","lekarzy"],
      dat:["lekarzowi","lekarzom"],
      acc:["lekarza","lekarzy"],
      ins:["lekarzem","lekarzami"],
      loc:["lekarzu","lekarzach"],
    } },

  { en:"lion", emoji:"🦁", nom:"lew", gender:"m",
    decl:{
      nom:["lew","lwy"],
      gen:["lwa","lwów"],
      dat:["lwu","lwom"],
      acc:["lwa","lwy"],
      ins:["lwem","lwami"],
      loc:["lwie","lwach"],
    } },

  { en:"number", emoji:"🔢", nom:"liczba", gender:"f",
    decl:{
      nom:["liczba","liczby"],
      gen:["liczby","liczb"],
      dat:["liczbie","liczbom"],
      acc:["liczbę","liczby"],
      ins:["liczbą","liczbami"],
      loc:["liczbie","liczbach"],
    } },

  { en:"July", emoji:"☀️🗓️", nom:"lipiec", gender:"m",
    decl:{
      nom:["lipiec","lipce"],
      gen:["lipca","lipców"],
      dat:["lipcowi","lipcom"],
      acc:["lipiec","lipce"],
      ins:["lipcem","lipcami"],
      loc:["lipcu","lipcach"],
    },
    tags:["calendar"] },

  { en:"leaf", emoji:"🍃", nom:"liść", gender:"m",
    decl:{
      nom:["liść","liście"],
      gen:["liścia","liści"],
      dat:["liściowi","liściom"],
      acc:["liść","liście"],
      ins:["liściem","liśćmi"],
      loc:["liściu","liściach"],
    } },

  { en:"letter", emoji:"✉️", nom:"list", gender:"m",
    decl:{
      nom:["list","listy"],
      gen:["listu","listów"],
      dat:["listowi","listom"],
      acc:["list","listy"],
      ins:["listem","listami"],
      loc:["liście","listach"],
    } },

  { en:"November", emoji:"🌧️🗓️", nom:"listopad", gender:"m",
    decl:{
      nom:["listopad","listopady"],
      gen:["listopada","listopadów"],
      dat:["listopadowi","listopadom"],
      acc:["listopad","listopady"],
      ins:["listopadem","listopadami"],
      loc:["listopadzie","listopadach"],
    },
    tags:["calendar"] },

  { en:"letter (character)", emoji:"🔤", nom:"litera", gender:"f",
    decl:{
      nom:["litera","litery"],
      gen:["litery","liter"],
      dat:["literze","literom"],
      acc:["literę","litery"],
      ins:["literą","literami"],
      loc:["literze","literach"],
    } },

  { en:"ice", emoji:"🧊", nom:"lód", gender:"m",
    decl:{
      nom:["lód","lody"],
      gen:["lodu","lodów"],
      dat:["lodowi","lodom"],
      acc:["lód","lody"],
      ins:["lodem","lodami"],
      loc:["lodzie","lodach"],
    },
    tags:["nuclear"] },

  { en:"airport", emoji:"✈️", nom:"lotnisko", gender:"n",
    decl:{
      nom:["lotnisko","lotniska"],
      gen:["lotniska","lotnisk"],
      dat:["lotnisku","lotniskom"],
      acc:["lotnisko","lotniska"],
      ins:["lotniskiem","lotniskami"],
      loc:["lotnisku","lotniskach"],
    } },

  { en:"February", emoji:"❄️🗓️", nom:"luty", gender:"m",
    decl:{
      nom:["luty","—"],
      gen:["lutego","—"],
      dat:["lutemu","—"],
      acc:["luty","—"],
      ins:["lutym","—"],
      loc:["lutym","—"],
    },
    tags:["calendar"] },

  { en:"May", emoji:"🌸🗓️", nom:"maj", gender:"m",
    decl:{
      nom:["maj","maje"],
      gen:["maja","majów"],
      dat:["majowi","majom"],
      acc:["maj","maje"],
      ins:["majem","majami"],
      loc:["maju","majach"],
    },
    tags:["calendar"] },

  { en:"mom", emoji:"👩", nom:"mama", gender:"f",
    decl:{
      nom:["mama","mamy"],
      gen:["mamy","mam"],
      dat:["mamie","mamom"],
      acc:["mamę","mamy"],
      ins:["mamą","mamami"],
      loc:["mamie","mamach"],
    } },

  { en:"March", emoji:"🌱🗓️", nom:"marzec", gender:"m",
    decl:{
      nom:["marzec","marce"],
      gen:["marca","marców"],
      dat:["marcowi","marcom"],
      acc:["marzec","marce"],
      ins:["marcem","marcami"],
      loc:["marcu","marcach"],
    },
    tags:["calendar"] },

  { en:"mother", emoji:"👩‍👧", nom:"matka", gender:"f",
    decl:{
      nom:["matka","matki"],
      gen:["matki","matek"],
      dat:["matce","matkom"],
      acc:["matkę","matki"],
      ins:["matką","matkami"],
      loc:["matce","matkach"],
    },
    tags:["family"] },

  { en:"husband", emoji:"🤵", nom:"mąż", gender:"m",
    decl:{
      nom:["mąż","mężowie"],
      gen:["męża","mężów"],
      dat:["mężowi","mężom"],
      acc:["męża","mężów"],
      ins:["mężem","mężami"],
      loc:["mężu","mężach"],
    },
    tags:["family"] },

  { en:"metal", emoji:"⚙️", nom:"metal", gender:"m",
    decl:{
      nom:["metal","metale"],
      gen:["metalu","metali"],
      dat:["metalowi","metalom"],
      acc:["metal","metale"],
      ins:["metalem","metalami"],
      loc:["metalu","metalach"],
    } },

  { en:"man", emoji:"👨", nom:"mężczyzna", gender:"m",
    decl:{
      nom:["mężczyzna","mężczyźni"],
      gen:["mężczyzny","mężczyzn"],
      dat:["mężczyźnie","mężczyznom"],
      acc:["mężczyznę","mężczyzn"],
      ins:["mężczyzną","mężczyznami"],
      loc:["mężczyźnie","mężczyznach"],
    } },

  { en:"fog", emoji:"🌫️", nom:"mgła", gender:"f",
    decl:{
      nom:["mgła","mgły"],
      gen:["mgły","mgieł"],
      dat:["mgle","mgłom"],
      acc:["mgłę","mgły"],
      ins:["mgłą","mgłami"],
      loc:["mgle","mgłach"],
    },
    tags:["weather"] },

  { en:"city / town", emoji:"🏙️", nom:"miasto", gender:"n",
    decl:{
      nom:["miasto","miasta"],
      gen:["miasta","miast"],
      dat:["miastu","miastom"],
      acc:["miasto","miasta"],
      ins:["miastem","miastami"],
      loc:["mieście","miastach"],
    },
    tags:["note:locative changes the stem: w mieście"] },

  { en:"place", emoji:"📍", nom:"miejsce", gender:"n",
    decl:{
      nom:["miejsce","miejsca"],
      gen:["miejsca","miejsc"],
      dat:["miejscu","miejscom"],
      acc:["miejsce","miejsca"],
      ins:["miejscem","miejscami"],
      loc:["miejscu","miejscach"],
    } },

  { en:"month", emoji:"🗓️", nom:"miesiąc", gender:"m",
    decl:{
      nom:["miesiąc","miesiące"],
      gen:["miesiąca","miesięcy"],
      dat:["miesiącowi","miesiącom"],
      acc:["miesiąc","miesiące"],
      ins:["miesiącem","miesiącami"],
      loc:["miesiącu","miesiącach"],
    },
    tags:["calendar"] },

  { en:"meat", emoji:"🥩", nom:"mięso", gender:"n",
    decl:{
      nom:["mięso","—"],
      gen:["mięsa","—"],
      dat:["mięsu","—"],
      acc:["mięso","—"],
      ins:["mięsem","—"],
      loc:["mięsie","—"],
    } },

  { en:"apartment", emoji:"🏢", nom:"mieszkanie", gender:"n",
    decl:{
      nom:["mieszkanie","mieszkania"],
      gen:["mieszkania","mieszkań"],
      dat:["mieszkaniu","mieszkaniom"],
      acc:["mieszkanie","mieszkania"],
      ins:["mieszkaniem","mieszkaniami"],
      loc:["mieszkaniu","mieszkaniach"],
    } },

  { en:"million", emoji:"💰💰💰", nom:"milion", gender:"m",
    decl:{
      nom:["milion","miliony"],
      gen:["miliona","milionów"],
      dat:["milionowi","milionom"],
      acc:["milion","miliony"],
      ins:["milionem","milionami"],
      loc:["milionie","milionach"],
    } },

  { en:"minute", emoji:"⏱️", nom:"minuta", gender:"f",
    decl:{
      nom:["minuta","minuty"],
      gen:["minuty","minut"],
      dat:["minucie","minutom"],
      acc:["minutę","minuty"],
      ins:["minutą","minutami"],
      loc:["minucie","minutach"],
    },
    tags:["calendar"] },

  { en:"love", emoji:"💕", nom:"miłość", gender:"f",
    decl:{
      nom:["miłość","miłości"],
      gen:["miłości","miłości"],
      dat:["miłości","miłościom"],
      acc:["miłość","miłości"],
      ins:["miłością","miłościami"],
      loc:["miłości","miłościach"],
    } },

  { en:"milk", emoji:"🥛", nom:"mleko", gender:"n",
    decl:{
      nom:["mleko","—"],
      gen:["mleka","—"],
      dat:["mleku","—"],
      acc:["mleko","—"],
      ins:["mlekiem","—"],
      loc:["mleku","—"],
    } },

  { en:"power (output)", emoji:"⚡💪", nom:"moc", gender:"f",
    decl:{
      nom:["moc","moce"],
      gen:["mocy","mocy"],
      dat:["mocy","mocom"],
      acc:["moc","moce"],
      ins:["mocą","mocami"],
      loc:["mocy","mocach"],
    },
    tags:["nuclear"] },

  { en:"sea", emoji:"🌊🚢", nom:"morze", gender:"n",
    decl:{
      nom:["morze","morza"],
      gen:["morza","mórz"],
      dat:["morzu","morzom"],
      acc:["morze","morza"],
      ins:["morzem","morzami"],
      loc:["morzu","morzach"],
    } },

  { en:"bridge", emoji:"🌉", nom:"most", gender:"m",
    decl:{
      nom:["most","mosty"],
      gen:["mostu","mostów"],
      dat:["mostowi","mostom"],
      acc:["most","mosty"],
      ins:["mostem","mostami"],
      loc:["moście","mostach"],
    } },

  { en:"brain", emoji:"🧠", nom:"mózg", gender:"m",
    decl:{
      nom:["mózg","mózgi"],
      gen:["mózgu","mózgów"],
      dat:["mózgowi","mózgom"],
      acc:["mózg","mózgi"],
      ins:["mózgiem","mózgami"],
      loc:["mózgu","mózgach"],
    } },

  { en:"museum", emoji:"🏛️", nom:"muzeum", gender:"n",
    decl:{
      nom:["muzeum","muzea"],
      gen:["muzeum","muzeów"],
      dat:["muzeum","muzeom"],
      acc:["muzeum","muzea"],
      ins:["muzeum","muzeami"],
      loc:["muzeum","muzeach"],
    } },

  { en:"music", emoji:"🎵", nom:"muzyka", gender:"f",
    decl:{
      nom:["muzyka","—"],
      gen:["muzyki","—"],
      dat:["muzyce","—"],
      acc:["muzykę","—"],
      ins:["muzyką","—"],
      loc:["muzyce","—"],
    } },

  { en:"thought", emoji:"💭", nom:"myśl", gender:"f",
    decl:{
      nom:["myśl","myśli"],
      gen:["myśli","myśli"],
      dat:["myśli","myślom"],
      acc:["myśl","myśli"],
      ins:["myślą","myślami"],
      loc:["myśli","myślach"],
    } },

  { en:"mouse", emoji:"🐭", nom:"mysz", gender:"f",
    decl:{
      nom:["mysz","myszy"],
      gen:["myszy","myszy"],
      dat:["myszy","myszom"],
      acc:["mysz","myszy"],
      ins:["myszą","myszami"],
      loc:["myszy","myszach"],
    } },

  { en:"hope", emoji:"🕊️", nom:"nadzieja", gender:"f",
    decl:{
      nom:["nadzieja","nadzieje"],
      gen:["nadziei","nadziei"],
      dat:["nadziei","nadziejom"],
      acc:["nadzieję","nadzieje"],
      ins:["nadzieją","nadziejami"],
      loc:["nadziei","nadziejach"],
    } },

  { en:"control room", emoji:"🎛️", nom:"nastawnia", gender:"f",
    decl:{
      nom:["nastawnia","nastawnie"],
      gen:["nastawni","nastawni"],
      dat:["nastawni","nastawniom"],
      acc:["nastawnię","nastawnie"],
      ins:["nastawnią","nastawniami"],
      loc:["nastawni","nastawniach"],
    },
    tags:["nuclear"] },

  { en:"teacher", emoji:"🧑‍🏫", nom:"nauczyciel", gender:"m",
    decl:{
      nom:["nauczyciel","nauczyciele"],
      gen:["nauczyciela","nauczycieli"],
      dat:["nauczycielowi","nauczycielom"],
      acc:["nauczyciela","nauczycieli"],
      ins:["nauczycielem","nauczycielami"],
      loc:["nauczycielu","nauczycielach"],
    } },

  { en:"science / learning", emoji:"🔬", nom:"nauka", gender:"f",
    decl:{
      nom:["nauka","nauki"],
      gen:["nauki","nauk"],
      dat:["nauce","naukom"],
      acc:["naukę","nauki"],
      ins:["nauką","naukami"],
      loc:["nauce","naukach"],
    } },

  { en:"scientist", emoji:"🧑‍🔬", nom:"naukowiec", gender:"m",
    decl:{
      nom:["naukowiec","naukowcy"],
      gen:["naukowca","naukowców"],
      dat:["naukowcowi","naukowcom"],
      acc:["naukowca","naukowców"],
      ins:["naukowcem","naukowcami"],
      loc:["naukowcu","naukowcach"],
    } },

  { en:"danger", emoji:"⚠️", nom:"niebezpieczeństwo", gender:"n",
    decl:{
      nom:["niebezpieczeństwo","niebezpieczeństwa"],
      gen:["niebezpieczeństwa","niebezpieczeństw"],
      dat:["niebezpieczeństwu","niebezpieczeństwom"],
      acc:["niebezpieczeństwo","niebezpieczeństwa"],
      ins:["niebezpieczeństwem","niebezpieczeństwami"],
      loc:["niebezpieczeństwie","niebezpieczeństwach"],
    },
    tags:["nuclear"] },

  { en:"sky / heaven", emoji:"🌌", nom:"niebo", gender:"n",
    decl:{
      nom:["niebo","—"],
      gen:["nieba","—"],
      dat:["niebu","—"],
      acc:["niebo","—"],
      ins:["niebem","—"],
      loc:["niebie","—"],
    },
    tags:["weather"] },

  { en:"Sunday", emoji:"📅7️⃣", nom:"niedziela", gender:"f",
    decl:{
      nom:["niedziela","niedziele"],
      gen:["niedzieli","niedziel"],
      dat:["niedzieli","niedzielom"],
      acc:["niedzielę","niedziele"],
      ins:["niedzielą","niedzielami"],
      loc:["niedzieli","niedzielach"],
    },
    tags:["calendar"] },

  { en:"bear", emoji:"🐻", nom:"niedźwiedź", gender:"m",
    decl:{
      nom:["niedźwiedź","niedźwiedzie"],
      gen:["niedźwiedzia","niedźwiedzi"],
      dat:["niedźwiedziowi","niedźwiedziom"],
      acc:["niedźwiedzia","niedźwiedzie"],
      ins:["niedźwiedziem","niedźwiedziami"],
      loc:["niedźwiedziu","niedźwiedziach"],
    } },

  { en:"night", emoji:"🌃", nom:"noc", gender:"f",
    decl:{
      nom:["noc","noce"],
      gen:["nocy","nocy"],
      dat:["nocy","nocom"],
      acc:["noc","noce"],
      ins:["nocą","nocami"],
      loc:["nocy","nocach"],
    } },

  { en:"leg / foot", emoji:"🦵", nom:"noga", gender:"f",
    decl:{
      nom:["noga","nogi"],
      gen:["nogi","nóg"],
      dat:["nodze","nogom"],
      acc:["nogę","nogi"],
      ins:["nogą","nogami"],
      loc:["nodze","nogach"],
    } },

  { en:"nose", emoji:"👃", nom:"nos", gender:"m",
    decl:{
      nom:["nos","nosy"],
      gen:["nosa","nosów"],
      dat:["nosowi","nosom"],
      acc:["nos","nosy"],
      ins:["nosem","nosami"],
      loc:["nosie","nosach"],
    } },

  { en:"knife", emoji:"🔪", nom:"nóż", gender:"m",
    decl:{
      nom:["nóż","noże"],
      gen:["noża","noży"],
      dat:["nożowi","nożom"],
      acc:["nóż","noże"],
      ins:["nożem","nożami"],
      loc:["nożu","nożach"],
    } },

  { en:"number (id)", emoji:"#️⃣", nom:"numer", gender:"m",
    decl:{
      nom:["numer","numery"],
      gen:["numeru","numerów"],
      dat:["numerowi","numerom"],
      acc:["numer","numery"],
      ins:["numerem","numerami"],
      loc:["numerze","numerach"],
    } },

  { en:"lunch", emoji:"🍽️", nom:"obiad", gender:"m",
    decl:{
      nom:["obiad","obiady"],
      gen:["obiadu","obiadów"],
      dat:["obiadowi","obiadom"],
      acc:["obiad","obiady"],
      ins:["obiadem","obiadami"],
      loc:["obiedzie","obiadach"],
    } },

  { en:"picture / painting", emoji:"🖼️", nom:"obraz", gender:"m",
    decl:{
      nom:["obraz","obrazy"],
      gen:["obrazu","obrazów"],
      dat:["obrazowi","obrazom"],
      acc:["obraz","obrazy"],
      ins:["obrazem","obrazami"],
      loc:["obrazie","obrazach"],
    } },

  { en:"answer", emoji:"✅💬", nom:"odpowiedź", gender:"f",
    decl:{
      nom:["odpowiedź","odpowiedzi"],
      gen:["odpowiedzi","odpowiedzi"],
      dat:["odpowiedzi","odpowiedziom"],
      acc:["odpowiedź","odpowiedzi"],
      ins:["odpowiedzią","odpowiedziami"],
      loc:["odpowiedzi","odpowiedziach"],
    } },

  { en:"fire", emoji:"🔥", nom:"ogień", gender:"m",
    decl:{
      nom:["ogień","ognie"],
      gen:["ognia","ogni"],
      dat:["ogniowi","ogniom"],
      acc:["ogień","ognie"],
      ins:["ogniem","ogniami"],
      loc:["ogniu","ogniach"],
    } },

  { en:"garden", emoji:"🌷🌳", nom:"ogród", gender:"m",
    decl:{
      nom:["ogród","ogrody"],
      gen:["ogrodu","ogrodów"],
      dat:["ogrodowi","ogrodom"],
      acc:["ogród","ogrody"],
      ins:["ogrodem","ogrodami"],
      loc:["ogrodzie","ogrodach"],
    } },

  { en:"window", emoji:"🪟", nom:"okno", gender:"n",
    decl:{
      nom:["okno","okna"],
      gen:["okna","okien"],
      dat:["oknu","oknom"],
      acc:["okno","okna"],
      ins:["oknem","oknami"],
      loc:["oknie","oknach"],
    } },

  { en:"eye", emoji:"👁️", nom:"oko", gender:"n",
    decl:{
      nom:["oko","oczy"],
      gen:["oka","oczu"],
      dat:["oku","oczom"],
      acc:["oko","oczy"],
      ins:["okiem","oczami"],
      loc:["oku","oczach"],
    } },

  { en:"area / surroundings", nom:"okolica", gender:"f",
    decl:{
      nom:["okolica","okolice"],
      gen:["okolicy","okolic"],
      dat:["okolicy","okolicom"],
      acc:["okolicę","okolice"],
      ins:["okolicą","okolicami"],
      loc:["okolicy","okolicach"],
    } },

  { en:"operator", emoji:"🧑‍💻", nom:"operator", gender:"m",
    decl:{
      nom:["operator","operatorzy"],
      gen:["operatora","operatorów"],
      dat:["operatorowi","operatorom"],
      acc:["operatora","operatorów"],
      ins:["operatorem","operatorami"],
      loc:["operatorze","operatorach"],
    },
    tags:["nuclear","note:masculine person: accusative = genitive"] },

  { en:"warning", emoji:"⚠️", nom:"ostrzeżenie", gender:"n",
    decl:{
      nom:["ostrzeżenie","ostrzeżenia"],
      gen:["ostrzeżenia","ostrzeżeń"],
      dat:["ostrzeżeniu","ostrzeżeniom"],
      acc:["ostrzeżenie","ostrzeżenia"],
      ins:["ostrzeżeniem","ostrzeżeniami"],
      loc:["ostrzeżeniu","ostrzeżeniach"],
    },
    tags:["nuclear"] },

  { en:"lightning", emoji:"⚡", nom:"oświetlenie", gender:"n",
    decl:{
      nom:["oświetlenie","—"],
      gen:["oświetlenia","—"],
      dat:["oświetleniu","—"],
      acc:["oświetlenie","—"],
      ins:["oświetleniem","—"],
      loc:["oświetleniu","—"],
    },
    tags:["weather"] },

  { en:"sheep", emoji:"🐑", nom:"owca", gender:"f",
    decl:{
      nom:["owca","owce"],
      gen:["owcy","owiec"],
      dat:["owcy","owcom"],
      acc:["owcę","owce"],
      ins:["owcą","owcami"],
      loc:["owcy","owcach"],
    } },

  { en:"fruit", emoji:"🍎🍌", nom:"owoc", gender:"m",
    decl:{
      nom:["owoc","owoce"],
      gen:["owocu","owoców"],
      dat:["owocowi","owocom"],
      acc:["owoc","owoce"],
      ins:["owocem","owocami"],
      loc:["owocu","owocach"],
    } },

  { en:"pencil", emoji:"✏️", nom:"ołówek", gender:"m",
    decl:{
      nom:["ołówek","ołówki"],
      gen:["ołówka","ołówków"],
      dat:["ołówkowi","ołówkom"],
      acc:["ołówek","ołówki"],
      ins:["ołówkiem","ołówkami"],
      loc:["ołówku","ołówkach"],
    } },

  { en:"finger", emoji:"☝️", nom:"palec", gender:"m",
    decl:{
      nom:["palec","palce"],
      gen:["palca","palców"],
      dat:["palcowi","palcom"],
      acc:["palec","palce"],
      ins:["palcem","palcami"],
      loc:["palcu","palcach"],
    } },

  { en:"state / country", emoji:"🏛️🗺️", nom:"państwo", gender:"n",
    decl:{
      nom:["państwo","państwa"],
      gen:["państwa","państw"],
      dat:["państwu","państwom"],
      acc:["państwo","państwa"],
      ins:["państwem","państwami"],
      loc:["państwie","państwach"],
    } },

  { en:"paper", emoji:"📄", nom:"papier", gender:"m",
    decl:{
      nom:["papier","papiery"],
      gen:["papieru","papierów"],
      dat:["papierowi","papierom"],
      acc:["papier","papiery"],
      ins:["papierem","papierami"],
      loc:["papierze","papierach"],
    } },

  { en:"pair", emoji:"✌️", nom:"para", gender:"f",
    decl:{
      nom:["para","pary"],
      gen:["pary","par"],
      dat:["parze","parom"],
      acc:["parę","pary"],
      ins:["parą","parami"],
      loc:["parze","parach"],
    } },

  { en:"park", emoji:"🌳", nom:"park", gender:"m",
    decl:{
      nom:["park","parki"],
      gen:["parku","parków"],
      dat:["parkowi","parkom"],
      acc:["park","parki"],
      ins:["parkiem","parkami"],
      loc:["parku","parkach"],
    } },

  { en:"October", emoji:"🍁🗓️", nom:"październik", gender:"m",
    decl:{
      nom:["październik","październiki"],
      gen:["października","październików"],
      dat:["październikowi","październikom"],
      acc:["październik","październiki"],
      ins:["październikiem","październikami"],
      loc:["październiku","październikach"],
    },
    tags:["calendar"] },

  { en:"Friday", emoji:"📅5️⃣", nom:"piątek", gender:"m",
    decl:{
      nom:["piątek","piątki"],
      gen:["piątku","piątków"],
      dat:["piątkowi","piątkom"],
      acc:["piątek","piątki"],
      ins:["piątkiem","piątkami"],
      loc:["piątku","piątkach"],
    },
    tags:["calendar"] },

  { en:"nurse", emoji:"👩‍⚕️", nom:"pielęgniarka", gender:"f",
    decl:{
      nom:["pielęgniarka","pielęgniarki"],
      gen:["pielęgniarki","pielęgniarek"],
      dat:["pielęgniarce","pielęgniarkom"],
      acc:["pielęgniarkę","pielęgniarki"],
      ins:["pielęgniarką","pielęgniarkami"],
      loc:["pielęgniarce","pielęgniarkach"],
    } },

  { en:"dog", emoji:"🐕", nom:"pies", gender:"m",
    decl:{
      nom:["pies","psy"],
      gen:["psa","psów"],
      dat:["psu","psom"],
      acc:["psa","psy"],
      ins:["psem","psami"],
      loc:["psie","psach"],
    } },

  { en:"song", emoji:"🎤🎵", nom:"piosenka", gender:"f",
    decl:{
      nom:["piosenka","piosenki"],
      gen:["piosenki","piosenek"],
      dat:["piosence","piosenkom"],
      acc:["piosenkę","piosenki"],
      ins:["piosenką","piosenkami"],
      loc:["piosence","piosenkach"],
    } },

  { en:"beer", emoji:"🍺", nom:"piwo", gender:"n",
    decl:{
      nom:["piwo","piwa"],
      gen:["piwa","piw"],
      dat:["piwu","piwom"],
      acc:["piwo","piwa"],
      ins:["piwem","piwami"],
      loc:["piwie","piwach"],
    } },

  { en:"square", nom:"plac", gender:"m",
    decl:{
      nom:["plac","place"],
      gen:["placu","placów"],
      dat:["placowi","placom"],
      acc:["plac","place"],
      ins:["placem","placami"],
      loc:["placu","placach"],
    } },

  { en:"train", emoji:"🚆", nom:"pociąg", gender:"m",
    decl:{
      nom:["pociąg","pociągi"],
      gen:["pociągu","pociągów"],
      dat:["pociągowi","pociągom"],
      acc:["pociąg","pociągi"],
      ins:["pociągiem","pociągami"],
      loc:["pociągu","pociągach"],
    } },

  { en:"beginning", emoji:"▶️", nom:"początek", gender:"m",
    decl:{
      nom:["początek","początki"],
      gen:["początku","początków"],
      dat:["początkowi","początkom"],
      acc:["początek","początki"],
      ins:["początkiem","początkami"],
      loc:["początku","początkach"],
    } },

  { en:"post office", emoji:"📮", nom:"poczta", gender:"f",
    decl:{
      nom:["poczta","poczty"],
      gen:["poczty","poczt"],
      dat:["poczcie","pocztom"],
      acc:["pocztę","poczty"],
      ins:["pocztą","pocztami"],
      loc:["poczcie","pocztach"],
    } },

  { en:"summary", emoji:"📋", nom:"podsumowanie", gender:"n",
    decl:{
      nom:["podsumowanie","podsumowania"],
      gen:["podsumowania","podsumowań"],
      dat:["podsumowaniu","podsumowaniom"],
      acc:["podsumowanie","podsumowania"],
      ins:["podsumowaniem","podsumowaniami"],
      loc:["podsumowaniu","podsumowaniach"],
    } },

  { en:"weather", emoji:"🌤️", nom:"pogoda", gender:"f",
    decl:{
      nom:["pogoda","—"],
      gen:["pogody","—"],
      dat:["pogodzie","—"],
      acc:["pogodę","—"],
      ins:["pogodą","—"],
      loc:["pogodzie","—"],
    },
    tags:["weather"] },

  { en:"room / peace", emoji:"🚪🛋️", nom:"pokój", gender:"m",
    decl:{
      nom:["pokój","pokoje"],
      gen:["pokoju","pokoi"],
      dat:["pokojowi","pokojom"],
      acc:["pokój","pokoje"],
      ins:["pokojem","pokojami"],
      loc:["pokoju","pokojach"],
    } },

  { en:"field", emoji:"🌾", nom:"pole", gender:"n",
    decl:{
      nom:["pole","pola"],
      gen:["pola","pól"],
      dat:["polu","polom"],
      acc:["pole","pola"],
      ins:["polem","polami"],
      loc:["polu","polach"],
    } },

  { en:"police officer", emoji:"👮", nom:"policjant", gender:"m",
    decl:{
      nom:["policjant","policjanci"],
      gen:["policjanta","policjantów"],
      dat:["policjantowi","policjantom"],
      acc:["policjanta","policjantów"],
      ins:["policjantem","policjantami"],
      loc:["policjancie","policjantach"],
    } },

  { en:"politics", emoji:"🗳️", nom:"polityka", gender:"f",
    decl:{
      nom:["polityka","—"],
      gen:["polityki","—"],
      dat:["polityce","—"],
      acc:["politykę","—"],
      ins:["polityką","—"],
      loc:["polityce","—"],
    } },

  { en:"pump", emoji:"💧🔄", nom:"pompa", gender:"f",
    decl:{
      nom:["pompa","pompy"],
      gen:["pompy","pomp"],
      dat:["pompie","pompom"],
      acc:["pompę","pompy"],
      ins:["pompą","pompami"],
      loc:["pompie","pompach"],
    },
    tags:["nuclear"] },

  { en:"idea", emoji:"💡", nom:"pomysł", gender:"m",
    decl:{
      nom:["pomysł","pomysły"],
      gen:["pomysłu","pomysłów"],
      dat:["pomysłowi","pomysłom"],
      acc:["pomysł","pomysły"],
      ins:["pomysłem","pomysłami"],
      loc:["pomyśle","pomysłach"],
    } },

  { en:"Monday", emoji:"📅1️⃣", nom:"poniedziałek", gender:"m",
    decl:{
      nom:["poniedziałek","poniedziałki"],
      gen:["poniedziałku","poniedziałków"],
      dat:["poniedziałkowi","poniedziałkom"],
      acc:["poniedziałek","poniedziałki"],
      ins:["poniedziałkiem","poniedziałkami"],
      loc:["poniedziałku","poniedziałkach"],
    },
    tags:["calendar"] },

  { en:"afternoon", emoji:"🕒", nom:"popołudnie", gender:"n",
    decl:{
      nom:["popołudnie","popołudnia"],
      gen:["popołudnia","popołudni"],
      dat:["popołudniu","popołudniom"],
      acc:["popołudnie","popołudnia"],
      ins:["popołudniem","popołudniami"],
      loc:["popołudniu","popołudniach"],
    } },

  { en:"air", emoji:"💨", nom:"powietrze", gender:"n",
    decl:{
      nom:["powietrze","—"],
      gen:["powietrza","—"],
      dat:["powietrzu","—"],
      acc:["powietrze","—"],
      ins:["powietrzem","—"],
      loc:["powietrzu","—"],
    },
    tags:["weather"] },

  { en:"reason", nom:"powód", gender:"m",
    decl:{
      nom:["powód","powody"],
      gen:["powodu","powodów"],
      dat:["powodowi","powodom"],
      acc:["powód","powody"],
      ins:["powodem","powodami"],
      loc:["powodzie","powodach"],
    } },

  { en:"fire", emoji:"🔥", nom:"pożar", gender:"m",
    decl:{
      nom:["pożar","pożary"],
      gen:["pożaru","pożarów"],
      dat:["pożarowi","pożarom"],
      acc:["pożar","pożary"],
      ins:["pożarem","pożarami"],
      loc:["pożarze","pożarach"],
    },
    tags:["nuclear"] },

  { en:"level", emoji:"📊", nom:"poziom", gender:"m",
    decl:{
      nom:["poziom","poziomy"],
      gen:["poziomu","poziomów"],
      dat:["poziomowi","poziomom"],
      acc:["poziom","poziomy"],
      ins:["poziomem","poziomami"],
      loc:["poziomie","poziomach"],
    },
    tags:["nuclear"] },

  { en:"half", emoji:"🌓", nom:"połowa", gender:"f",
    decl:{
      nom:["połowa","połowy"],
      gen:["połowy","połów"],
      dat:["połowie","połowom"],
      acc:["połowę","połowy"],
      ins:["połową","połowami"],
      loc:["połowie","połowach"],
    } },

  { en:"noon / south", emoji:"🕛", nom:"południe", gender:"n",
    decl:{
      nom:["południe","—"],
      gen:["południa","—"],
      dat:["południu","—"],
      acc:["południe","—"],
      ins:["południem","—"],
      loc:["południu","—"],
    } },

  { en:"work / job", emoji:"💼", nom:"praca", gender:"f",
    decl:{
      nom:["praca","prace"],
      gen:["pracy","prac"],
      dat:["pracy","pracom"],
      acc:["pracę","prace"],
      ins:["pracą","pracami"],
      loc:["pracy","pracach"],
    },
    tags:["work"] },

  { en:"worker / employee", emoji:"🧑‍💼", nom:"pracownik", gender:"m",
    decl:{
      nom:["pracownik","pracownicy"],
      gen:["pracownika","pracowników"],
      dat:["pracownikowi","pracownikom"],
      acc:["pracownika","pracowników"],
      ins:["pracownikiem","pracownikami"],
      loc:["pracowniku","pracownikach"],
    } },

  { en:"truth", emoji:"✅", nom:"prawda", gender:"f",
    decl:{
      nom:["prawda","prawdy"],
      gen:["prawdy","prawd"],
      dat:["prawdzie","prawdom"],
      acc:["prawdę","prawdy"],
      ins:["prawdą","prawdami"],
      loc:["prawdzie","prawdach"],
    } },

  { en:"law / right", nom:"prawo", gender:"n",
    decl:{
      nom:["prawo","prawa"],
      gen:["prawa","praw"],
      dat:["prawu","prawom"],
      acc:["prawo","prawa"],
      ins:["prawem","prawami"],
      loc:["prawie","prawach"],
    } },

  { en:"gift", emoji:"🎁", nom:"prezent", gender:"m",
    decl:{
      nom:["prezent","prezenty"],
      gen:["prezentu","prezentów"],
      dat:["prezentowi","prezentom"],
      acc:["prezent","prezenty"],
      ins:["prezentem","prezentami"],
      loc:["prezencie","prezentach"],
    } },

  { en:"president", emoji:"🏛️", nom:"prezydent", gender:"m",
    decl:{
      nom:["prezydent","prezydenci"],
      gen:["prezydenta","prezydentów"],
      dat:["prezydentowi","prezydentom"],
      acc:["prezydenta","prezydentów"],
      ins:["prezydentem","prezydentami"],
      loc:["prezydencie","prezydentach"],
    } },

  { en:"problem", emoji:"⚠️", nom:"problem", gender:"m",
    decl:{
      nom:["problem","problemy"],
      gen:["problemu","problemów"],
      dat:["problemowi","problemom"],
      acc:["problem","problemy"],
      ins:["problemem","problemami"],
      loc:["problemie","problemach"],
    } },

  { en:"procedure", emoji:"📋", nom:"procedura", gender:"f",
    decl:{
      nom:["procedura","procedury"],
      gen:["procedury","procedur"],
      dat:["procedurze","procedurom"],
      acc:["procedurę","procedury"],
      ins:["procedurą","procedurami"],
      loc:["procedurze","procedurach"],
    },
    tags:["nuclear"] },

  { en:"radiation", emoji:"☢️", nom:"promieniowanie", gender:"n",
    decl:{
      nom:["promieniowanie","—"],
      gen:["promieniowania","—"],
      dat:["promieniowaniu","—"],
      acc:["promieniowanie","—"],
      ins:["promieniowaniem","—"],
      loc:["promieniowaniu","—"],
    },
    tags:["nuclear"] },

  { en:"industry", emoji:"🏭", nom:"przemysł", gender:"m",
    decl:{
      nom:["przemysł","przemysły"],
      gen:["przemysłu","przemysłów"],
      dat:["przemysłowi","przemysłom"],
      acc:["przemysł","przemysły"],
      ins:["przemysłem","przemysłami"],
      loc:["przemyśle","przemysłach"],
    } },

  { en:"flow", emoji:"➡️💧", nom:"przepływ", gender:"m",
    decl:{
      nom:["przepływ","przepływy"],
      gen:["przepływu","przepływów"],
      dat:["przepływowi","przepływom"],
      acc:["przepływ","przepływy"],
      ins:["przepływem","przepływami"],
      loc:["przepływie","przepływach"],
    },
    tags:["nuclear"] },

  { en:"switch", emoji:"🎚️", nom:"przełącznik", gender:"m",
    decl:{
      nom:["przełącznik","przełączniki"],
      gen:["przełącznika","przełączników"],
      dat:["przełącznikowi","przełącznikom"],
      acc:["przełącznik","przełączniki"],
      ins:["przełącznikiem","przełącznikami"],
      loc:["przełączniku","przełącznikach"],
    },
    tags:["nuclear"] },

  { en:"button", emoji:"🔘", nom:"przycisk", gender:"m",
    decl:{
      nom:["przycisk","przyciski"],
      gen:["przycisku","przycisków"],
      dat:["przyciskowi","przyciskom"],
      acc:["przycisk","przyciski"],
      ins:["przyciskiem","przyciskami"],
      loc:["przycisku","przyciskach"],
    },
    tags:["nuclear"] },

  { en:"close friend (m)", emoji:"🤝", nom:"przyjaciel", gender:"m",
    decl:{
      nom:["przyjaciel","przyjaciele"],
      gen:["przyjaciela","przyjaciół"],
      dat:["przyjacielowi","przyjaciołom"],
      acc:["przyjaciela","przyjaciół"],
      ins:["przyjacielem","przyjaciółmi"],
      loc:["przyjacielu","przyjaciołach"],
    } },

  { en:"close friend (f)", emoji:"🤝", nom:"przyjaciółka", gender:"f",
    decl:{
      nom:["przyjaciółka","przyjaciółki"],
      gen:["przyjaciółki","przyjaciółek"],
      dat:["przyjaciółce","przyjaciółkom"],
      acc:["przyjaciółkę","przyjaciółki"],
      ins:["przyjaciółką","przyjaciółkami"],
      loc:["przyjaciółce","przyjaciółkach"],
    } },

  { en:"friendship", emoji:"🤝💛", nom:"przyjaźń", gender:"f",
    decl:{
      nom:["przyjaźń","przyjaźnie"],
      gen:["przyjaźni","przyjaźni"],
      dat:["przyjaźni","przyjaźniom"],
      acc:["przyjaźń","przyjaźnie"],
      ins:["przyjaźnią","przyjaźniami"],
      loc:["przyjaźni","przyjaźniach"],
    } },

  { en:"example", nom:"przykład", gender:"m",
    decl:{
      nom:["przykład","przykłady"],
      gen:["przykładu","przykładów"],
      dat:["przykładowi","przykładom"],
      acc:["przykład","przykłady"],
      ins:["przykładem","przykładami"],
      loc:["przykładzie","przykładach"],
    } },

  { en:"(bus/tram) stop", emoji:"🚏", nom:"przystanek", gender:"m",
    decl:{
      nom:["przystanek","przystanki"],
      gen:["przystanku","przystanków"],
      dat:["przystankowi","przystankom"],
      acc:["przystanek","przystanki"],
      ins:["przystankiem","przystankami"],
      loc:["przystanku","przystankach"],
    } },

  { en:"bird", emoji:"🐦", nom:"ptak", gender:"m",
    decl:{
      nom:["ptak","ptaki"],
      gen:["ptaka","ptaków"],
      dat:["ptakowi","ptakom"],
      acc:["ptaka","ptaki"],
      ins:["ptakiem","ptakami"],
      loc:["ptaku","ptakach"],
    } },

  { en:"question", emoji:"❓", nom:"pytanie", gender:"n",
    decl:{
      nom:["pytanie","pytania"],
      gen:["pytania","pytań"],
      dat:["pytaniu","pytaniom"],
      acc:["pytanie","pytania"],
      ins:["pytaniem","pytaniami"],
      loc:["pytaniu","pytaniach"],
    } },

  { en:"coat", emoji:"🧥🧣", nom:"płaszcz", gender:"m",
    decl:{
      nom:["płaszcz","płaszcze"],
      gen:["płaszcza","płaszczy"],
      dat:["płaszczowi","płaszczom"],
      acc:["płaszcz","płaszcze"],
      ins:["płaszczem","płaszczami"],
      loc:["płaszczu","płaszczach"],
    } },

  { en:"report", emoji:"📊", nom:"raport", gender:"m",
    decl:{
      nom:["raport","raporty"],
      gen:["raportu","raportów"],
      dat:["raportowi","raportom"],
      acc:["raport","raporty"],
      ins:["raportem","raportami"],
      loc:["raporcie","raportach"],
    },
    tags:["work"] },

  { en:"reactor", emoji:"⚛️", nom:"reaktor", gender:"m",
    decl:{
      nom:["reaktor","reaktory"],
      gen:["reaktora","reaktorów"],
      dat:["reaktorowi","reaktorom"],
      acc:["reaktor","reaktory"],
      ins:["reaktorem","reaktorami"],
      loc:["reaktorze","reaktorach"],
    },
    tags:["nuclear"] },

  { en:"region", emoji:"🗺️", nom:"region", gender:"m",
    decl:{
      nom:["region","regiony"],
      gen:["regionu","regionów"],
      dat:["regionowi","regionom"],
      acc:["region","regiony"],
      ins:["regionem","regionami"],
      loc:["regionie","regionach"],
    } },

  { en:"hand / arm", emoji:"✋", nom:"ręka", gender:"f",
    decl:{
      nom:["ręka","ręce"],
      gen:["ręki","rąk"],
      dat:["ręce","rękom"],
      acc:["rękę","ręce"],
      ins:["ręką","rękami"],
      loc:["ręce","rękach"],
    },
    tags:["note:irregular — one of the few old dual-number nouns"] },

  { en:"religion", emoji:"🙏⛪", nom:"religia", gender:"f",
    decl:{
      nom:["religia","religie"],
      gen:["religii","religii"],
      dat:["religii","religiom"],
      acc:["religię","religie"],
      ins:["religią","religiami"],
      loc:["religii","religiach"],
    } },

  { en:"restaurant", emoji:"🍽️", nom:"restauracja", gender:"f",
    decl:{
      nom:["restauracja","restauracje"],
      gen:["restauracji","restauracji"],
      dat:["restauracji","restauracjom"],
      acc:["restaurację","restauracje"],
      ins:["restauracją","restauracjami"],
      loc:["restauracji","restauracjach"],
    } },

  { en:"family", emoji:"👨‍👩‍👧‍👦", nom:"rodzina", gender:"f",
    decl:{
      nom:["rodzina","rodziny"],
      gen:["rodziny","rodzin"],
      dat:["rodzinie","rodzinom"],
      acc:["rodzinę","rodziny"],
      ins:["rodziną","rodzinami"],
      loc:["rodzinie","rodzinach"],
    },
    tags:["family"] },

  { en:"year", emoji:"📅", nom:"rok", gender:"m",
    decl:{
      nom:["rok","lata"],
      gen:["roku","lat"],
      dat:["rokowi","latom"],
      acc:["rok","lata"],
      ins:["rokiem","latami"],
      loc:["roku","latach"],
    },
    tags:["calendar"] },

  { en:"plant", emoji:"🪴", nom:"roślina", gender:"f",
    decl:{
      nom:["roślina","rośliny"],
      gen:["rośliny","roślin"],
      dat:["roślinie","roślinom"],
      acc:["roślinę","rośliny"],
      ins:["rośliną","roślinami"],
      loc:["roślinie","roślinach"],
    } },

  { en:"bicycle", emoji:"🚲", nom:"rower", gender:"m",
    decl:{
      nom:["rower","rowery"],
      gen:["roweru","rowerów"],
      dat:["rowerowi","rowerom"],
      acc:["rower","rowery"],
      ins:["rowerem","rowerami"],
      loc:["rowerze","rowerach"],
    } },

  { en:"fish", emoji:"🐟", nom:"ryba", gender:"f",
    decl:{
      nom:["ryba","ryby"],
      gen:["ryby","ryb"],
      dat:["rybie","rybom"],
      acc:["rybę","ryby"],
      ins:["rybą","rybami"],
      loc:["rybie","rybach"],
    } },

  { en:"market square", emoji:"🛍️", nom:"rynek", gender:"m",
    decl:{
      nom:["rynek","rynki"],
      gen:["rynku","rynków"],
      dat:["rynkowi","rynkom"],
      acc:["rynek","rynki"],
      ins:["rynkiem","rynkami"],
      loc:["rynku","rynkach"],
    } },

  { en:"government", emoji:"🏛️", nom:"rząd", gender:"m",
    decl:{
      nom:["rząd","rządy"],
      gen:["rządu","rządów"],
      dat:["rządowi","rządom"],
      acc:["rząd","rządy"],
      ins:["rządem","rządami"],
      loc:["rządzie","rządach"],
    } },

  { en:"thing", emoji:"📦", nom:"rzecz", gender:"f",
    decl:{
      nom:["rzecz","rzeczy"],
      gen:["rzeczy","rzeczy"],
      dat:["rzeczy","rzeczom"],
      acc:["rzecz","rzeczy"],
      ins:["rzeczą","rzeczami"],
      loc:["rzeczy","rzeczach"],
    } },

  { en:"river", emoji:"🌊", nom:"rzeka", gender:"f",
    decl:{
      nom:["rzeka","rzeki"],
      gen:["rzeki","rzek"],
      dat:["rzece","rzekom"],
      acc:["rzekę","rzeki"],
      ins:["rzeką","rzekami"],
      loc:["rzece","rzekach"],
    } },

  { en:"car (formal)", emoji:"🚗", nom:"samochód", gender:"m",
    decl:{
      nom:["samochód","samochody"],
      gen:["samochodu","samochodów"],
      dat:["samochodowi","samochodom"],
      acc:["samochód","samochody"],
      ins:["samochodem","samochodami"],
      loc:["samochodzie","samochodach"],
    } },

  { en:"airplane", emoji:"✈️", nom:"samolot", gender:"m",
    decl:{
      nom:["samolot","samoloty"],
      gen:["samolotu","samolotów"],
      dat:["samolotowi","samolotom"],
      acc:["samolot","samoloty"],
      ins:["samolotem","samolotami"],
      loc:["samolocie","samolotach"],
    } },

  { en:"neighbor", emoji:"🏘️", nom:"sąsiad", gender:"m",
    decl:{
      nom:["sąsiad","sąsiedzi"],
      gen:["sąsiada","sąsiadów"],
      dat:["sąsiadowi","sąsiadom"],
      acc:["sąsiada","sąsiadów"],
      ins:["sąsiadem","sąsiadami"],
      loc:["sąsiedzie","sąsiadach"],
    } },

  { en:"second", emoji:"⚡⏱️", nom:"sekunda", gender:"f",
    decl:{
      nom:["sekunda","sekundy"],
      gen:["sekundy","sekund"],
      dat:["sekundzie","sekundom"],
      acc:["sekundę","sekundy"],
      ins:["sekundą","sekundami"],
      loc:["sekundzie","sekundach"],
    } },

  { en:"cheese", emoji:"🧀", nom:"ser", gender:"m",
    decl:{
      nom:["ser","sery"],
      gen:["sera","serów"],
      dat:["serowi","serom"],
      acc:["ser","sery"],
      ins:["serem","serami"],
      loc:["serze","serach"],
    } },

  { en:"heart", emoji:"❤️", nom:"serce", gender:"n",
    decl:{
      nom:["serce","serca"],
      gen:["serca","serc"],
      dat:["sercu","sercom"],
      acc:["serce","serca"],
      ins:["sercem","sercami"],
      loc:["sercu","sercach"],
    } },

  { en:"August", emoji:"🌻🗓️", nom:"sierpień", gender:"m",
    decl:{
      nom:["sierpień","sierpnie"],
      gen:["sierpnia","sierpni"],
      dat:["sierpniowi","sierpniom"],
      acc:["sierpień","sierpnie"],
      ins:["sierpniem","sierpniami"],
      loc:["sierpniu","sierpniach"],
    },
    tags:["calendar"] },

  { en:"sister", nom:"siostra", gender:"f",
    decl:{
      nom:["siostra","siostry"],
      gen:["siostry","sióstr"],
      dat:["siostrze","siostrom"],
      acc:["siostrę","siostry"],
      ins:["siostrą","siostrami"],
      loc:["siostrze","siostrach"],
    } },

  { en:"strength / force", emoji:"💪", nom:"siła", gender:"f",
    decl:{
      nom:["siła","siły"],
      gen:["siły","sił"],
      dat:["sile","siłom"],
      acc:["siłę","siły"],
      ins:["siłą","siłami"],
      loc:["sile","siłach"],
    } },

  { en:"shop / store", emoji:"🏪", nom:"sklep", gender:"m",
    decl:{
      nom:["sklep","sklepy"],
      gen:["sklepu","sklepów"],
      dat:["sklepowi","sklepom"],
      acc:["sklep","sklepy"],
      ins:["sklepem","sklepami"],
      loc:["sklepie","sklepach"],
    } },

  { en:"skin", nom:"skóra", gender:"f",
    decl:{
      nom:["skóra","skóry"],
      gen:["skóry","skór"],
      dat:["skórze","skórom"],
      acc:["skórę","skóry"],
      ins:["skórą","skórami"],
      loc:["skórze","skórach"],
    } },

  { en:"death", emoji:"💀", nom:"śmierć", gender:"f",
    decl:{
      nom:["śmierć","—"],
      gen:["śmierci","—"],
      dat:["śmierci","—"],
      acc:["śmierć","—"],
      ins:["śmiercią","—"],
      loc:["śmierci","—"],
    } },

  { en:"breakfast", emoji:"🍳", nom:"śniadanie", gender:"n",
    decl:{
      nom:["śniadanie","śniadania"],
      gen:["śniadania","śniadań"],
      dat:["śniadaniu","śniadaniom"],
      acc:["śniadanie","śniadania"],
      ins:["śniadaniem","śniadaniami"],
      loc:["śniadaniu","śniadaniach"],
    } },

  { en:"snow", emoji:"❄️", nom:"śnieg", gender:"m",
    decl:{
      nom:["śnieg","śniegi"],
      gen:["śniegu","śniegów"],
      dat:["śniegowi","śniegom"],
      acc:["śnieg","śniegi"],
      ins:["śniegiem","śniegami"],
      loc:["śniegu","śniegach"],
    },
    tags:["weather"] },

  { en:"Saturday", emoji:"📅6️⃣", nom:"sobota", gender:"f",
    decl:{
      nom:["sobota","soboty"],
      gen:["soboty","sobót"],
      dat:["sobocie","sobotom"],
      acc:["sobotę","soboty"],
      ins:["sobotą","sobotami"],
      loc:["sobocie","sobotach"],
    },
    tags:["calendar"] },

  { en:"juice", emoji:"🧃", nom:"sok", gender:"m",
    decl:{
      nom:["sok","soki"],
      gen:["soku","soków"],
      dat:["sokowi","sokom"],
      acc:["sok","soki"],
      ins:["sokiem","sokami"],
      loc:["soku","sokach"],
    } },

  { en:"salt", emoji:"🧂", nom:"sól", gender:"f",
    decl:{
      nom:["sól","sole"],
      gen:["soli","soli"],
      dat:["soli","solom"],
      acc:["sól","sole"],
      ins:["solą","solami"],
      loc:["soli","solach"],
    } },

  { en:"specialist", nom:"specjalista", gender:"m",
    decl:{
      nom:["specjalista","specjaliści"],
      gen:["specjalisty","specjalistów"],
      dat:["specjaliście","specjalistom"],
      acc:["specjalistę","specjalistów"],
      ins:["specjalistą","specjalistami"],
      loc:["specjaliście","specjalistach"],
    } },

  { en:"way / manner", nom:"sposób", gender:"m",
    decl:{
      nom:["sposób","sposoby"],
      gen:["sposobu","sposobów"],
      dat:["sposobowi","sposobom"],
      acc:["sposób","sposoby"],
      ins:["sposobem","sposobami"],
      loc:["sposobie","sposobach"],
    } },

  { en:"matter / affair", nom:"sprawa", gender:"f",
    decl:{
      nom:["sprawa","sprawy"],
      gen:["sprawy","spraw"],
      dat:["sprawie","sprawom"],
      acc:["sprawę","sprawy"],
      ins:["sprawą","sprawami"],
      loc:["sprawie","sprawach"],
    } },

  { en:"justice", emoji:"⚖️", nom:"sprawiedliwość", gender:"f",
    decl:{
      nom:["sprawiedliwość","—"],
      gen:["sprawiedliwości","—"],
      dat:["sprawiedliwości","—"],
      acc:["sprawiedliwość","—"],
      ins:["sprawiedliwością","—"],
      loc:["sprawiedliwości","—"],
    } },

  { en:"salesperson", emoji:"🛒", nom:"sprzedawca", gender:"m",
    decl:{
      nom:["sprzedawca","sprzedawcy"],
      gen:["sprzedawcy","sprzedawców"],
      dat:["sprzedawcy","sprzedawcom"],
      acc:["sprzedawcę","sprzedawców"],
      ins:["sprzedawcą","sprzedawcami"],
      loc:["sprzedawcy","sprzedawcach"],
    } },

  { en:"Wednesday", emoji:"📅3️⃣", nom:"środa", gender:"f",
    decl:{
      nom:["środa","środy"],
      gen:["środy","śród"],
      dat:["środzie","środom"],
      acc:["środę","środy"],
      ins:["środą","środami"],
      loc:["środzie","środach"],
    },
    tags:["calendar"] },

  { en:"middle", nom:"środek", gender:"m",
    decl:{
      nom:["środek","środki"],
      gen:["środka","środków"],
      dat:["środkowi","środkom"],
      acc:["środek","środki"],
      ins:["środkiem","środkami"],
      loc:["środku","środkach"],
    } },

  { en:"station", emoji:"🚉", nom:"stacja", gender:"f",
    decl:{
      nom:["stacja","stacje"],
      gen:["stacji","stacji"],
      dat:["stacji","stacjom"],
      acc:["stację","stacje"],
      ins:["stacją","stacjami"],
      loc:["stacji","stacjach"],
    } },

  { en:"ship", emoji:"🚢", nom:"statek", gender:"m",
    decl:{
      nom:["statek","statki"],
      gen:["statku","statków"],
      dat:["statkowi","statkom"],
      acc:["statek","statki"],
      ins:["statkiem","statkami"],
      loc:["statku","statkach"],
    } },

  { en:"control room", emoji:"🎛️", nom:"sterownia", gender:"f",
    decl:{
      nom:["sterownia","sterownie"],
      gen:["sterowni","sterowni"],
      dat:["sterowni","sterowniom"],
      acc:["sterownię","sterownie"],
      ins:["sterownią","sterowniami"],
      loc:["sterowni","sterowniach"],
    },
    tags:["nuclear"] },

  { en:"foot", emoji:"🦶", nom:"stopa", gender:"f",
    decl:{
      nom:["stopa","stopy"],
      gen:["stopy","stóp"],
      dat:["stopie","stopom"],
      acc:["stopę","stopy"],
      ins:["stopą","stopami"],
      loc:["stopie","stopach"],
    } },

  { en:"table", nom:"stół", gender:"m",
    decl:{
      nom:["stół","stoły"],
      gen:["stołu","stołów"],
      dat:["stołowi","stołom"],
      acc:["stół","stoły"],
      ins:["stołem","stołami"],
      loc:["stole","stołach"],
    } },

  { en:"fear", emoji:"😱", nom:"strach", gender:"m",
    decl:{
      nom:["strach","strachy"],
      gen:["strachu","strachów"],
      dat:["strachowi","strachom"],
      acc:["strach","strachy"],
      ins:["strachem","strachami"],
      loc:["strachu","strachach"],
    } },

  { en:"side / page", emoji:"📄", nom:"strona", gender:"f",
    decl:{
      nom:["strona","strony"],
      gen:["strony","stron"],
      dat:["stronie","stronom"],
      acc:["stronę","strony"],
      ins:["stroną","stronami"],
      loc:["stronie","stronach"],
    } },

  { en:"student", emoji:"🎓", nom:"student", gender:"m",
    decl:{
      nom:["student","studenci"],
      gen:["studenta","studentów"],
      dat:["studentowi","studentom"],
      acc:["studenta","studentów"],
      ins:["studentem","studentami"],
      loc:["studencie","studentach"],
    } },

  { en:"January", emoji:"❄️🗓️", nom:"styczeń", gender:"m",
    decl:{
      nom:["styczeń","stycznie"],
      gen:["stycznia","styczni"],
      dat:["styczniowi","styczniom"],
      acc:["styczeń","stycznie"],
      ins:["styczniem","styczniami"],
      loc:["styczniu","styczniach"],
    },
    tags:["calendar"] },

  { en:"dress", emoji:"👗", nom:"sukienka", gender:"f",
    decl:{
      nom:["sukienka","sukienki"],
      gen:["sukienki","sukienek"],
      dat:["sukience","sukienkom"],
      acc:["sukienkę","sukienki"],
      ins:["sukienką","sukienkami"],
      loc:["sukience","sukienkach"],
    } },

  { en:"sum", emoji:"➕", nom:"suma", gender:"f",
    decl:{
      nom:["suma","sumy"],
      gen:["sumy","sum"],
      dat:["sumie","sumom"],
      acc:["sumę","sumy"],
      ins:["sumą","sumami"],
      loc:["sumie","sumach"],
    } },

  { en:"world", emoji:"🌍", nom:"świat", gender:"m",
    decl:{
      nom:["świat","światy"],
      gen:["świata","światów"],
      dat:["światu","światom"],
      acc:["świat","światy"],
      ins:["światem","światami"],
      loc:["świecie","światach"],
    },
    tags:["sports"] },

  { en:"pig", emoji:"🐷", nom:"świnia", gender:"f",
    decl:{
      nom:["świnia","świnie"],
      gen:["świni","świń"],
      dat:["świni","świniom"],
      acc:["świnię","świnie"],
      ins:["świnią","świniami"],
      loc:["świni","świniach"],
    } },

  { en:"son", emoji:"👦", nom:"syn", gender:"m",
    decl:{
      nom:["syn","synowie"],
      gen:["syna","synów"],
      dat:["synowi","synom"],
      acc:["syna","synów"],
      ins:["synem","synami"],
      loc:["synu","synach"],
    },
    tags:["family"] },

  { en:"bedroom", emoji:"🛏️", nom:"sypialnia", gender:"f",
    decl:{
      nom:["sypialnia","sypialnie"],
      gen:["sypialni","sypialni"],
      dat:["sypialni","sypialniom"],
      acc:["sypialnię","sypialnie"],
      ins:["sypialnią","sypialniami"],
      loc:["sypialni","sypialniach"],
    } },

  { en:"system", emoji:"🖥️⚙️", nom:"system", gender:"m",
    decl:{
      nom:["system","systemy"],
      gen:["systemu","systemów"],
      dat:["systemowi","systemom"],
      acc:["system","systemy"],
      ins:["systemem","systemami"],
      loc:["systemie","systemach"],
    },
    tags:["nuclear"] },

  { en:"happiness / luck", emoji:"🍀", nom:"szczęście", gender:"n",
    decl:{
      nom:["szczęście","—"],
      gen:["szczęścia","—"],
      dat:["szczęściu","—"],
      acc:["szczęście","—"],
      ins:["szczęściem","—"],
      loc:["szczęściu","—"],
    } },

  { en:"boss", emoji:"👔", nom:"szef", gender:"m",
    decl:{
      nom:["szef","szefowie"],
      gen:["szefa","szefów"],
      dat:["szefowi","szefom"],
      acc:["szefa","szefów"],
      ins:["szefem","szefami"],
      loc:["szefie","szefach"],
    },
    tags:["nuclear"] },

  { en:"width", emoji:"↔️", nom:"szerokość", gender:"f",
    decl:{
      nom:["szerokość","szerokości"],
      gen:["szerokości","szerokości"],
      dat:["szerokości","szerokościom"],
      acc:["szerokość","szerokości"],
      ins:["szerokością","szerokościami"],
      loc:["szerokości","szerokościach"],
    } },

  { en:"drinking glass", emoji:"🥤", nom:"szklanka", gender:"f",
    decl:{
      nom:["szklanka","szklanki"],
      gen:["szklanki","szklanek"],
      dat:["szklance","szklankom"],
      acc:["szklankę","szklanki"],
      ins:["szklanką","szklankami"],
      loc:["szklance","szklankach"],
    } },

  { en:"school", emoji:"🏫", nom:"szkoła", gender:"f",
    decl:{
      nom:["szkoła","szkoły"],
      gen:["szkoły","szkół"],
      dat:["szkole","szkołom"],
      acc:["szkołę","szkoły"],
      ins:["szkołą","szkołami"],
      loc:["szkole","szkołach"],
    } },

  { en:"glass", emoji:"🥂", nom:"szkło", gender:"n",
    decl:{
      nom:["szkło","—"],
      gen:["szkła","—"],
      dat:["szkłu","—"],
      acc:["szkło","—"],
      ins:["szkłem","—"],
      loc:["szkle","—"],
    } },

  { en:"hospital", emoji:"🏥", nom:"szpital", gender:"m",
    decl:{
      nom:["szpital","szpitale"],
      gen:["szpitala","szpitali"],
      dat:["szpitalowi","szpitalom"],
      acc:["szpital","szpitale"],
      ins:["szpitalem","szpitalami"],
      loc:["szpitalu","szpitalach"],
    } },

  { en:"art", emoji:"🎨", nom:"sztuka", gender:"f",
    decl:{
      nom:["sztuka","sztuki"],
      gen:["sztuki","sztuk"],
      dat:["sztuce","sztukom"],
      acc:["sztukę","sztuki"],
      ins:["sztuką","sztukami"],
      loc:["sztuce","sztukach"],
    } },

  { en:"neck", nom:"szyja", gender:"f",
    decl:{
      nom:["szyja","szyje"],
      gen:["szyi","szyj"],
      dat:["szyi","szyjom"],
      acc:["szyję","szyje"],
      ins:["szyją","szyjami"],
      loc:["szyi","szyjach"],
    } },

  { en:"elephant", emoji:"🐘", nom:"słoń", gender:"m",
    decl:{
      nom:["słoń","słonie"],
      gen:["słonia","słoni"],
      dat:["słoniowi","słoniom"],
      acc:["słonia","słonie"],
      ins:["słoniem","słoniami"],
      loc:["słoniu","słoniach"],
    } },

  { en:"sun", emoji:"☀️", nom:"słońce", gender:"n",
    decl:{
      nom:["słońce","słońca"],
      gen:["słońca","słońc"],
      dat:["słońcu","słońcom"],
      acc:["słońce","słońca"],
      ins:["słońcem","słońcami"],
      loc:["słońcu","słońcach"],
    },
    tags:["weather"] },

  { en:"word", emoji:"💬", nom:"słowo", gender:"n",
    decl:{
      nom:["słowo","słowa"],
      gen:["słowa","słów"],
      dat:["słowu","słowom"],
      acc:["słowo","słowa"],
      ins:["słowem","słowami"],
      loc:["słowie","słowach"],
    } },

  { en:"plate", emoji:"🍽️", nom:"talerz", gender:"m",
    decl:{
      nom:["talerz","talerze"],
      gen:["talerza","talerzy"],
      dat:["talerzowi","talerzom"],
      acc:["talerz","talerze"],
      ins:["talerzem","talerzami"],
      loc:["talerzu","talerzach"],
    } },

  { en:"dad", emoji:"👨", nom:"tata", gender:"m",
    decl:{
      nom:["tata","tatowie"],
      gen:["taty","tatów"],
      dat:["tacie","tatom"],
      acc:["tatę","tatów"],
      ins:["tatą","tatami"],
      loc:["tacie","tatach"],
    },
    tags:["family"] },

  { en:"theater", emoji:"🎭", nom:"teatr", gender:"m",
    decl:{
      nom:["teatr","teatry"],
      gen:["teatru","teatrów"],
      dat:["teatrowi","teatrom"],
      acc:["teatr","teatry"],
      ins:["teatrem","teatrami"],
      loc:["teatrze","teatrach"],
    } },

  { en:"phone", emoji:"📱", nom:"telefon", gender:"m",
    decl:{
      nom:["telefon","telefony"],
      gen:["telefonu","telefonów"],
      dat:["telefonowi","telefonom"],
      acc:["telefon","telefony"],
      ins:["telefonem","telefonami"],
      loc:["telefonie","telefonach"],
    } },

  { en:"television", emoji:"📺", nom:"telewizor", gender:"m",
    decl:{
      nom:["telewizor","telewizory"],
      gen:["telewizora","telewizorów"],
      dat:["telewizorowi","telewizorom"],
      acc:["telewizor","telewizory"],
      ins:["telewizorem","telewizorami"],
      loc:["telewizorze","telewizorach"],
    } },

  { en:"temperature", emoji:"🌡️", nom:"temperatura", gender:"f",
    decl:{
      nom:["temperatura","temperatury"],
      gen:["temperatury","temperatur"],
      dat:["temperaturze","temperaturom"],
      acc:["temperaturę","temperatury"],
      ins:["temperaturą","temperaturami"],
      loc:["temperaturze","temperaturach"],
    },
    tags:["nuclear"] },

  { en:"bag", emoji:"👜", nom:"torba", gender:"f",
    decl:{
      nom:["torba","torby"],
      gen:["torby","toreb"],
      dat:["torbie","torbom"],
      acc:["torbę","torby"],
      ins:["torbą","torbami"],
      loc:["torbie","torbach"],
    } },

  { en:"grass", emoji:"🌱", nom:"trawa", gender:"f",
    decl:{
      nom:["trawa","trawy"],
      gen:["trawy","traw"],
      dat:["trawie","trawom"],
      acc:["trawę","trawy"],
      ins:["trawą","trawami"],
      loc:["trawie","trawach"],
    } },

  { en:"face", emoji:"🙂", nom:"twarz", gender:"f",
    decl:{
      nom:["twarz","twarze"],
      gen:["twarzy","twarzy"],
      dat:["twarzy","twarzom"],
      acc:["twarz","twarze"],
      ins:["twarzą","twarzami"],
      loc:["twarzy","twarzach"],
    } },

  { en:"week", emoji:"📅7️⃣", nom:"tydzień", gender:"m",
    decl:{
      nom:["tydzień","tygodnie"],
      gen:["tygodnia","tygodni"],
      dat:["tygodniowi","tygodniom"],
      acc:["tydzień","tygodnie"],
      ins:["tygodniem","tygodniami"],
      loc:["tygodniu","tygodniach"],
    },
    tags:["calendar","note:the stem grows: tydzień → tygodnia"] },

  { en:"1000", emoji:"💯0️⃣", nom:"tysiąc", gender:"m",
    decl:{
      nom:["tysiąc","tysiące"],
      gen:["tysiąca","tysięcy"],
      dat:["tysiącowi","tysiącom"],
      acc:["tysiąc","tysiące"],
      ins:["tysiącem","tysiącami"],
      loc:["tysiącu","tysiącach"],
    },
    tags:["numbers","note:use tysiący for 2, 3, 4, etc. thousand"] },

  { en:"clothing", emoji:"👕", nom:"ubranie", gender:"n",
    decl:{
      nom:["ubranie","ubrania"],
      gen:["ubrania","ubrań"],
      dat:["ubraniu","ubraniom"],
      acc:["ubranie","ubrania"],
      ins:["ubraniem","ubraniami"],
      loc:["ubraniu","ubraniach"],
    } },

  { en:"ear", emoji:"👂", nom:"ucho", gender:"n",
    decl:{
      nom:["ucho","uszy"],
      gen:["ucha","uszu"],
      dat:["uchu","uszom"],
      acc:["ucho","uszy"],
      ins:["uchem","uszami"],
      loc:["uchu","uszach"],
    } },

  { en:"pupil", emoji:"🧑‍🎓", nom:"uczeń", gender:"m",
    decl:{
      nom:["uczeń","uczniowie"],
      gen:["ucznia","uczniów"],
      dat:["uczniowi","uczniom"],
      acc:["ucznia","uczniów"],
      ins:["uczniem","uczniami"],
      loc:["uczniu","uczniach"],
    } },

  { en:"street", emoji:"🚦", nom:"ulica", gender:"f",
    decl:{
      nom:["ulica","ulice"],
      gen:["ulicy","ulic"],
      dat:["ulicy","ulicom"],
      acc:["ulicę","ulice"],
      ins:["ulicą","ulicami"],
      loc:["ulicy","ulicach"],
    } },

  { en:"university", emoji:"🎓🏛️", nom:"uniwersytet", gender:"m",
    decl:{
      nom:["uniwersytet","uniwersytety"],
      gen:["uniwersytetu","uniwersytetów"],
      dat:["uniwersytetowi","uniwersytetom"],
      acc:["uniwersytet","uniwersytety"],
      ins:["uniwersytetem","uniwersytetami"],
      loc:["uniwersytecie","uniwersytetach"],
    } },

  { en:"fault / defect", emoji:"⚙️❌", nom:"usterka", gender:"f",
    decl:{
      nom:["usterka","usterki"],
      gen:["usterki","usterek"],
      dat:["usterce","usterkom"],
      acc:["usterkę","usterki"],
      ins:["usterką","usterkami"],
      loc:["usterce","usterkach"],
    },
    tags:["nuclear"] },

  { en:"weight / scale", emoji:"⚖️", nom:"waga", gender:"f",
    decl:{
      nom:["waga","wagi"],
      gen:["wagi","wag"],
      dat:["wadze","wagom"],
      acc:["wagę","wagi"],
      ins:["wagą","wagami"],
      loc:["wadze","wagach"],
    } },

  { en:"value", emoji:"💎", nom:"wartość", gender:"f",
    decl:{
      nom:["wartość","wartości"],
      gen:["wartości","wartości"],
      dat:["wartości","wartościom"],
      acc:["wartość","wartości"],
      ins:["wartością","wartościami"],
      loc:["wartości","wartościach"],
    } },

  { en:"vegetable", emoji:"🥕", nom:"warzywo", gender:"n",
    decl:{
      nom:["warzywo","warzywa"],
      gen:["warzywa","warzyw"],
      dat:["warzywu","warzywom"],
      acc:["warzywo","warzywa"],
      ins:["warzywem","warzywami"],
      loc:["warzywie","warzywach"],
    } },

  { en:"faith", emoji:"🙏", nom:"wiara", gender:"f",
    decl:{
      nom:["wiara","—"],
      gen:["wiary","—"],
      dat:["wierze","—"],
      acc:["wiarę","—"],
      ins:["wiarą","—"],
      loc:["wierze","—"],
    } },

  { en:"wind", emoji:"💨", nom:"wiatr", gender:"m",
    decl:{
      nom:["wiatr","wiatry"],
      gen:["wiatru","wiatrów"],
      dat:["wiatrowi","wiatrom"],
      acc:["wiatr","wiatry"],
      ins:["wiatrem","wiatrami"],
      loc:["wietrze","wiatrach"],
    },
    tags:["weather"] },

  { en:"fork", emoji:"🍴", nom:"widelec", gender:"m",
    decl:{
      nom:["widelec","widelce"],
      gen:["widelca","widelców"],
      dat:["widelcowi","widelcom"],
      acc:["widelec","widelce"],
      ins:["widelcem","widelcami"],
      loc:["widelcu","widelcach"],
    } },

  { en:"visibility", emoji:"👁️🌫️", nom:"widoczność", gender:"f",
    decl:{
      nom:["widoczność","—"],
      gen:["widoczności","—"],
      dat:["widoczności","—"],
      acc:["widoczność","—"],
      ins:["widocznością","—"],
      loc:["widoczności","—"],
    },
    tags:["weather"] },

  { en:"evening", emoji:"🌆", nom:"wieczór", gender:"m",
    decl:{
      nom:["wieczór","wieczory"],
      gen:["wieczoru","wieczorów"],
      dat:["wieczorowi","wieczorom"],
      acc:["wieczór","wieczory"],
      ins:["wieczorem","wieczorami"],
      loc:["wieczorze","wieczorach"],
    } },

  { en:"knowledge", emoji:"🧠📚", nom:"wiedza", gender:"f",
    decl:{
      nom:["wiedza","—"],
      gen:["wiedzy","—"],
      dat:["wiedzy","—"],
      acc:["wiedzę","—"],
      ins:["wiedzą","—"],
      loc:["wiedzy","—"],
    } },

  { en:"century / age", emoji:"⏳", nom:"wiek", gender:"m",
    decl:{
      nom:["wiek","wieki"],
      gen:["wieku","wieków"],
      dat:["wiekowi","wiekom"],
      acc:["wiek","wieki"],
      ins:["wiekiem","wiekami"],
      loc:["wieku","wiekach"],
    } },

  { en:"size", nom:"wielkość", gender:"f",
    decl:{
      nom:["wielkość","wielkości"],
      gen:["wielkości","wielkości"],
      dat:["wielkości","wielkościom"],
      acc:["wielkość","wielkości"],
      ins:["wielkością","wielkościami"],
      loc:["wielkości","wielkościach"],
    } },

  { en:"village / countryside", emoji:"🏡🌾", nom:"wieś", gender:"f",
    decl:{
      nom:["wieś","wsie"],
      gen:["wsi","wsi"],
      dat:["wsi","wsiom"],
      acc:["wieś","wsie"],
      ins:["wsią","wsiami"],
      loc:["wsi","wsiach"],
    } },

  { en:"humidity", emoji:"💦", nom:"wilgotność", gender:"f",
    decl:{
      nom:["wilgotność","—"],
      gen:["wilgotności","—"],
      dat:["wilgotności","—"],
      acc:["wilgotność","—"],
      ins:["wilgotnością","—"],
      loc:["wilgotności","—"],
    },
    tags:["weather"] },

  { en:"wolf", emoji:"🐺", nom:"wilk", gender:"m",
    decl:{
      nom:["wilk","wilki"],
      gen:["wilka","wilków"],
      dat:["wilkowi","wilkom"],
      acc:["wilka","wilki"],
      ins:["wilkiem","wilkami"],
      loc:["wilku","wilkach"],
    } },

  { en:"wine", emoji:"🍷", nom:"wino", gender:"n",
    decl:{
      nom:["wino","wina"],
      gen:["wina","win"],
      dat:["winu","winom"],
      acc:["wino","wina"],
      ins:["winem","winami"],
      loc:["winie","winach"],
    } },

  { en:"spring", emoji:"🌷", nom:"wiosna", gender:"f",
    decl:{
      nom:["wiosna","wiosny"],
      gen:["wiosny","wiosen"],
      dat:["wiośnie","wiosnom"],
      acc:["wiosnę","wiosny"],
      ins:["wiosną","wiosnami"],
      loc:["wiośnie","wiosnach"],
    },
    tags:["calendar"] },

  { en:"water", emoji:"💧", nom:"woda", gender:"f",
    decl:{
      nom:["woda","wody"],
      gen:["wody","wód"],
      dat:["wodzie","wodom"],
      acc:["wodę","wody"],
      ins:["wodą","wodami"],
      loc:["wodzie","wodach"],
    },
    tags:["nuclear"] },

  { en:"war", emoji:"⚔️", nom:"wojna", gender:"f",
    decl:{
      nom:["wojna","wojny"],
      gen:["wojny","wojen"],
      dat:["wojnie","wojnom"],
      acc:["wojnę","wojny"],
      ins:["wojną","wojnami"],
      loc:["wojnie","wojnach"],
    } },

  { en:"freedom", emoji:"🗽", nom:"wolność", gender:"f",
    decl:{
      nom:["wolność","—"],
      gen:["wolności","—"],
      dat:["wolności","—"],
      acc:["wolność","—"],
      ins:["wolnością","—"],
      loc:["wolności","—"],
    } },

  { en:"September", emoji:"🍂🗓️", nom:"wrzesień", gender:"m",
    decl:{
      nom:["wrzesień","wrześnie"],
      gen:["września","wrześni"],
      dat:["wrześniowi","wrześniom"],
      acc:["wrzesień","wrześnie"],
      ins:["wrześniem","wrześniami"],
      loc:["wrześniu","wrześniach"],
    },
    tags:["calendar"] },

  { en:"east", emoji:"🧭➡️", nom:"wschód", gender:"m",
    decl:{
      nom:["wschód","wschody"],
      gen:["wschodu","wschodów"],
      dat:["wschodowi","wschodom"],
      acc:["wschód","wschody"],
      ins:["wschodem","wschodami"],
      loc:["wschodzie","wschodach"],
    } },

  { en:"indicator / gauge", emoji:"📟", nom:"wskaźnik", gender:"m",
    decl:{
      nom:["wskaźnik","wskaźniki"],
      gen:["wskaźnika","wskaźników"],
      dat:["wskaźnikowi","wskaźnikom"],
      acc:["wskaźnik","wskaźniki"],
      ins:["wskaźnikiem","wskaźnikami"],
      loc:["wskaźniku","wskaźnikach"],
    },
    tags:["nuclear"] },

  { en:"Tuesday", emoji:"📅2️⃣", nom:"wtorek", gender:"m",
    decl:{
      nom:["wtorek","wtorki"],
      gen:["wtorku","wtorków"],
      dat:["wtorkowi","wtorkom"],
      acc:["wtorek","wtorki"],
      ins:["wtorkiem","wtorkami"],
      loc:["wtorku","wtorkach"],
    },
    tags:["calendar"] },

  { en:"uncle", nom:"wujek", gender:"m",
    decl:{
      nom:["wujek","wujkowie"],
      gen:["wujka","wujków"],
      dat:["wujkowi","wujkom"],
      acc:["wujka","wujków"],
      ins:["wujkiem","wujkami"],
      loc:["wujku","wujkach"],
    } },

  { en:"accident", emoji:"💥🚑", nom:"wypadek", gender:"m",
    decl:{
      nom:["wypadek","wypadki"],
      gen:["wypadku","wypadków"],
      dat:["wypadkowi","wypadkom"],
      acc:["wypadek","wypadki"],
      ins:["wypadkiem","wypadkami"],
      loc:["wypadku","wypadkach"],
    },
    tags:["nuclear"] },

  { en:"height", emoji:"⬆️📏", nom:"wysokość", gender:"f",
    decl:{
      nom:["wysokość","wysokości"],
      gen:["wysokości","wysokości"],
      dat:["wysokości","wysokościom"],
      acc:["wysokość","wysokości"],
      ins:["wysokością","wysokościami"],
      loc:["wysokości","wysokościach"],
    } },

  { en:"power / authority", emoji:"🏛️👑", nom:"władza", gender:"f",
    decl:{
      nom:["władza","władze"],
      gen:["władzy","władz"],
      dat:["władzy","władzom"],
      acc:["władzę","władze"],
      ins:["władzą","władzami"],
      loc:["władzy","władzach"],
    } },

  { en:"tooth", emoji:"🦷", nom:"ząb", gender:"m",
    decl:{
      nom:["ząb","zęby"],
      gen:["zęba","zębów"],
      dat:["zębowi","zębom"],
      acc:["ząb","zęby"],
      ins:["zębem","zębami"],
      loc:["zębie","zębach"],
    } },

  { en:"west", emoji:"🧭⬅️", nom:"zachód", gender:"m",
    decl:{
      nom:["zachód","zachody"],
      gen:["zachodu","zachodów"],
      dat:["zachodowi","zachodom"],
      acc:["zachód","zachody"],
      ins:["zachodem","zachodami"],
      loc:["zachodzie","zachodach"],
    } },

  { en:"profession", nom:"zawód", gender:"m",
    decl:{
      nom:["zawód","zawody"],
      gen:["zawodu","zawodów"],
      dat:["zawodowi","zawodom"],
      acc:["zawód","zawody"],
      ins:["zawodem","zawodami"],
      loc:["zawodzie","zawodach"],
    },
    tags:["nuclear"] },

  { en:"valve", emoji:"🚰", nom:"zawór", gender:"m",
    decl:{
      nom:["zawór","zawory"],
      gen:["zaworu","zaworów"],
      dat:["zaworowi","zaworom"],
      acc:["zawór","zawory"],
      ins:["zaworem","zaworami"],
      loc:["zaworze","zaworach"],
    },
    tags:["nuclear","note:the vowel shifts: zawór → zaworu (ó → o)"] },

  { en:"photo", emoji:"📷", nom:"zdjęcie", gender:"n",
    decl:{
      nom:["zdjęcie","zdjęcia"],
      gen:["zdjęcia","zdjęć"],
      dat:["zdjęciu","zdjęciom"],
      acc:["zdjęcie","zdjęcia"],
      ins:["zdjęciem","zdjęciami"],
      loc:["zdjęciu","zdjęciach"],
    } },

  { en:"health", emoji:"🍎💪", nom:"zdrowie", gender:"n",
    decl:{
      nom:["zdrowie","—"],
      gen:["zdrowia","—"],
      dat:["zdrowiu","—"],
      acc:["zdrowie","—"],
      ins:["zdrowiem","—"],
      loc:["zdrowiu","—"],
    } },

  { en:"clock", emoji:"🕰️", nom:"zegar", gender:"m",
    decl:{
      nom:["zegar","zegary"],
      gen:["zegara","zegarów"],
      dat:["zegarowi","zegarom"],
      acc:["zegar","zegary"],
      ins:["zegarem","zegarami"],
      loc:["zegarze","zegarach"],
    } },

  { en:"watch", emoji:"⌚", nom:"zegarek", gender:"m",
    decl:{
      nom:["zegarek","zegarki"],
      gen:["zegarka","zegarków"],
      dat:["zegarkowi","zegarkom"],
      acc:["zegarek","zegarki"],
      ins:["zegarkiem","zegarkami"],
      loc:["zegarku","zegarkach"],
    } },

  { en:"team", emoji:"👥", nom:"zespół", gender:"m",
    decl:{
      nom:["zespół","zespoły"],
      gen:["zespołu","zespołów"],
      dat:["zespołowi","zespołom"],
      acc:["zespół","zespoły"],
      ins:["zespołem","zespołami"],
      loc:["zespole","zespołach"],
    },
    tags:["sports"] },

  { en:"winter", emoji:"❄️", nom:"zima", gender:"f",
    decl:{
      nom:["zima","zimy"],
      gen:["zimy","zim"],
      dat:["zimie","zimom"],
      acc:["zimę","zimy"],
      ins:["zimą","zimami"],
      loc:["zimie","zimach"],
    },
    tags:["calendar"] },

  { en:"fatigue", emoji:"😴", nom:"zmęczenie", gender:"n",
    decl:{
      nom:["zmęczenie","—"],
      gen:["zmęczenia","—"],
      dat:["zmęczeniu","—"],
      acc:["zmęczenie","—"],
      ins:["zmęczeniem","—"],
      loc:["zmęczeniu","—"],
    },
    tags:["nuclear"] },

  { en:"shift (work)", emoji:"🔄", nom:"zmiana", gender:"f",
    decl:{
      nom:["zmiana","zmiany"],
      gen:["zmiany","zmian"],
      dat:["zmianie","zmianom"],
      acc:["zmianę","zmiany"],
      ins:["zmianą","zmianami"],
      loc:["zmianie","zmianach"],
    },
    tags:["nuclear"] },

  { en:"wife", emoji:"👰", nom:"żona", gender:"f",
    decl:{
      nom:["żona","żony"],
      gen:["żony","żon"],
      dat:["żonie","żonom"],
      acc:["żonę","żony"],
      ins:["żoną","żonami"],
      loc:["żonie","żonach"],
    },
    tags:["family"] },

  { en:"soldier", emoji:"💂", nom:"żołnierz", gender:"m",
    decl:{
      nom:["żołnierz","żołnierze"],
      gen:["żołnierza","żołnierzy"],
      dat:["żołnierzowi","żołnierzom"],
      acc:["żołnierza","żołnierzy"],
      ins:["żołnierzem","żołnierzami"],
      loc:["żołnierzu","żołnierzach"],
    } },

  { en:"soup", emoji:"🍲", nom:"zupa", gender:"f",
    decl:{
      nom:["zupa","zupy"],
      gen:["zupy","zup"],
      dat:["zupie","zupom"],
      acc:["zupę","zupy"],
      ins:["zupą","zupami"],
      loc:["zupie","zupach"],
    } },

  { en:"animal", emoji:"🐾", nom:"zwierzę", gender:"n",
    decl:{
      nom:["zwierzę","zwierzęta"],
      gen:["zwierzęcia","zwierząt"],
      dat:["zwierzęciu","zwierzętom"],
      acc:["zwierzę","zwierzęta"],
      ins:["zwierzęciem","zwierzętami"],
      loc:["zwierzęciu","zwierzętach"],
    } },

  { en:"life", emoji:"🌱", nom:"życie", gender:"n",
    decl:{
      nom:["życie","—"],
      gen:["życia","—"],
      dat:["życiu","—"],
      acc:["życie","—"],
      ins:["życiem","—"],
      loc:["życiu","—"],
    } },

  { en:"bathroom", emoji:"🛁", nom:"łazienka", gender:"f",
    decl:{
      nom:["łazienka","łazienki"],
      gen:["łazienki","łazienek"],
      dat:["łazience","łazienkom"],
      acc:["łazienkę","łazienki"],
      ins:["łazienką","łazienkami"],
      loc:["łazience","łazienkach"],
    } },

  { en:"bed", emoji:"🛏️", nom:"łóżko", gender:"n",
    decl:{
      nom:["łóżko","łóżka"],
      gen:["łóżka","łóżek"],
      dat:["łóżku","łóżkom"],
      acc:["łóżko","łóżka"],
      ins:["łóżkiem","łóżkami"],
      loc:["łóżku","łóżkach"],
    } },

  { en:"spoon", emoji:"🥄", nom:"łyżka", gender:"f",
    decl:{
      nom:["łyżka","łyżki"],
      gen:["łyżki","łyżek"],
      dat:["łyżce","łyżkom"],
      acc:["łyżkę","łyżki"],
      ins:["łyżką","łyżkami"],
      loc:["łyżce","łyżkach"],
    } },

];
