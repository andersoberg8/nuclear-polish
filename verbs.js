/* =====================================================================
   verbs.js — your verb bank for Nuklearny Polski
   ---------------------------------------------------------------------
   THIS FILE IS YOURS TO EDIT, just like words.js. Every verb here
   automatically becomes a flashcard tagged "verb" — pick that tag on the
   Flashcards page (or the "Verbs" deck) to study them.

   Each entry has:
     en:      the English meaning
     imp:     the IMPERFECTIVE verb (ongoing/repeated action)
     present: its present-tense forms, in this fixed order:
              [ja, ty, on/ona/ono, my, wy, oni/one]
     prf:     the PERFECTIVE partner (single completed action),
              or null if the verb has no everyday perfective
     future:  the perfective's future forms (same person order),
              or null when prf is null
     tags:    OPTIONAL extra tags, e.g. tags:["work"]

   Remember: perfective verbs have no present tense — their
   present-looking forms mean the future ("zrobię" = I will do).

   Sorted A→Z by the imperfective verb.
   ===================================================================== */

const VERB_BANK = [
  { en:"to take",
    imp:"brać",      present:["biorę","bierzesz","bierze","bierzemy","bierzecie","biorą"],
    prf:"wziąć",     future:["wezmę","weźmiesz","weźmie","weźmiemy","weźmiecie","wezmą"] },

  { en:"to be",
    imp:"być",       present:["jestem","jesteś","jest","jesteśmy","jesteście","są"],
    prf:null,        future:null },

  { en:"to want",
    imp:"chcieć",    present:["chcę","chcesz","chce","chcemy","chcecie","chcą"],
    prf:null,        future:null },

  { en:"to wait",
    imp:"czekać",    present:["czekam","czekasz","czeka","czekamy","czekacie","czekają"],
    prf:"poczekać",  future:["poczekam","poczekasz","poczeka","poczekamy","poczekacie","poczekają"] },

  { en:"to read",
    imp:"czytać",    present:["czytam","czytasz","czyta","czytamy","czytacie","czytają"],
    prf:"przeczytać",future:["przeczytam","przeczytasz","przeczyta","przeczytamy","przeczytacie","przeczytają"] },

  { en:"to give",
    imp:"dawać",     present:["daję","dajesz","daje","dajemy","dajecie","dają"],
    prf:"dać",       future:["dam","dasz","da","damy","dacie","dadzą"] },

  { en:"to go (by vehicle)",
    imp:"jechać",    present:["jadę","jedziesz","jedzie","jedziemy","jedziecie","jadą"],
    prf:"pojechać",  future:["pojadę","pojedziesz","pojedzie","pojedziemy","pojedziecie","pojadą"] },

  { en:"to eat",
    imp:"jeść",      present:["jem","jesz","je","jemy","jecie","jedzą"],
    prf:"zjeść",     future:["zjem","zjesz","zje","zjemy","zjecie","zjedzą"] },

  { en:"to go (on foot)",
    imp:"iść",       present:["idę","idziesz","idzie","idziemy","idziecie","idą"],
    prf:"pójść",     future:["pójdę","pójdziesz","pójdzie","pójdziemy","pójdziecie","pójdą"] },

  { en:"to love",
    imp:"kochać",    present:["kocham","kochasz","kocha","kochamy","kochacie","kochają"],
    prf:null,        future:null },

  { en:"to finish",
    imp:"kończyć",   present:["kończę","kończysz","kończy","kończymy","kończycie","kończą"],
    prf:"skończyć",  future:["skończę","skończysz","skończy","skończymy","skończycie","skończą"] },

  { en:"to buy",
    imp:"kupować",   present:["kupuję","kupujesz","kupuje","kupujemy","kupujecie","kupują"],
    prf:"kupić",     future:["kupię","kupisz","kupi","kupimy","kupicie","kupią"] },

  { en:"to like",
    imp:"lubić",     present:["lubię","lubisz","lubi","lubimy","lubicie","lubią"],
    prf:null,        future:null },

  { en:"to have",
    imp:"mieć",      present:["mam","masz","ma","mamy","macie","mają"],
    prf:null,        future:null },

  { en:"to live / reside",
    imp:"mieszkać",  present:["mieszkam","mieszkasz","mieszka","mieszkamy","mieszkacie","mieszkają"],
    prf:null,        future:null },

  { en:"can / to be able",
    imp:"móc",       present:["mogę","możesz","może","możemy","możecie","mogą"],
    prf:null,        future:null },

  { en:"to speak / say",
    imp:"mówić",     present:["mówię","mówisz","mówi","mówimy","mówicie","mówią"],
    prf:"powiedzieć",future:["powiem","powiesz","powie","powiemy","powiecie","powiedzą"] },

  { en:"must / to have to",
    imp:"musieć",    present:["muszę","musisz","musi","musimy","musicie","muszą"],
    prf:null,        future:null },

  { en:"to open",
    imp:"otwierać",  present:["otwieram","otwierasz","otwiera","otwieramy","otwieracie","otwierają"],
    prf:"otworzyć",  future:["otworzę","otworzysz","otworzy","otworzymy","otworzycie","otworzą"] },

  { en:"to drink",
    imp:"pić",       present:["piję","pijesz","pije","pijemy","pijecie","piją"],
    prf:"wypić",     future:["wypiję","wypijesz","wypije","wypijemy","wypijecie","wypiją"] },

  { en:"to write",
    imp:"pisać",     present:["piszę","piszesz","pisze","piszemy","piszecie","piszą"],
    prf:"napisać",   future:["napiszę","napiszesz","napisze","napiszemy","napiszecie","napiszą"] },

  { en:"to pay",
    imp:"płacić",    present:["płacę","płacisz","płaci","płacimy","płacicie","płacą"],
    prf:"zapłacić",  future:["zapłacę","zapłacisz","zapłaci","zapłacimy","zapłacicie","zapłacą"] },

  { en:"to help",
    imp:"pomagać",   present:["pomagam","pomagasz","pomaga","pomagamy","pomagacie","pomagają"],
    prf:"pomóc",     future:["pomogę","pomożesz","pomoże","pomożemy","pomożecie","pomogą"] },

  { en:"to work",
    imp:"pracować",  present:["pracuję","pracujesz","pracuje","pracujemy","pracujecie","pracują"],
    prf:null,        future:null },

  { en:"to ask (request)",
    imp:"prosić",    present:["proszę","prosisz","prosi","prosimy","prosicie","proszą"],
    prf:"poprosić",  future:["poproszę","poprosisz","poprosi","poprosimy","poprosicie","poproszą"] },

  { en:"to ask (a question)",
    imp:"pytać",     present:["pytam","pytasz","pyta","pytamy","pytacie","pytają"],
    prf:"zapytać",   future:["zapytam","zapytasz","zapyta","zapytamy","zapytacie","zapytają"] },

  { en:"to do / make",
    imp:"robić",     present:["robię","robisz","robi","robimy","robicie","robią"],
    prf:"zrobić",    future:["zrobię","zrobisz","zrobi","zrobimy","zrobicie","zrobią"] },

  { en:"to understand",
    imp:"rozumieć",  present:["rozumiem","rozumiesz","rozumie","rozumiemy","rozumiecie","rozumieją"],
    prf:"zrozumieć", future:["zrozumiem","zrozumiesz","zrozumie","zrozumiemy","zrozumiecie","zrozumieją"] },

  { en:"to check / verify",
    imp:"sprawdzać", present:["sprawdzam","sprawdzasz","sprawdza","sprawdzamy","sprawdzacie","sprawdzają"],
    prf:"sprawdzić", future:["sprawdzę","sprawdzisz","sprawdzi","sprawdzimy","sprawdzicie","sprawdzą"],
    tags:["work"] },

  { en:"to listen",
    imp:"słuchać",   present:["słucham","słuchasz","słucha","słuchamy","słuchacie","słuchają"],
    prf:"posłuchać", future:["posłucham","posłuchasz","posłucha","posłuchamy","posłuchacie","posłuchają"] },

  { en:"to hear",
    imp:"słyszeć",   present:["słyszę","słyszysz","słyszy","słyszymy","słyszycie","słyszą"],
    prf:"usłyszeć",  future:["usłyszę","usłyszysz","usłyszy","usłyszymy","usłyszycie","usłyszą"] },

  { en:"to use",
    imp:"używać",    present:["używam","używasz","używa","używamy","używacie","używają"],
    prf:"użyć",      future:["użyję","użyjesz","użyje","użyjemy","użyjecie","użyją"] },

  { en:"to see",
    imp:"widzieć",   present:["widzę","widzisz","widzi","widzimy","widzicie","widzą"],
    prf:"zobaczyć",  future:["zobaczę","zobaczysz","zobaczy","zobaczymy","zobaczycie","zobaczą"] },

  { en:"to know (facts)",
    imp:"wiedzieć",  present:["wiem","wiesz","wie","wiemy","wiecie","wiedzą"],
    prf:null,        future:null },

  { en:"to switch on / turn on",
    imp:"włączać",   present:["włączam","włączasz","włącza","włączamy","włączacie","włączają"],
    prf:"włączyć",   future:["włączę","włączysz","włączy","włączymy","włączycie","włączą"],
    tags:["work"] },

  { en:"to switch off / turn off",
    imp:"wyłączać",  present:["wyłączam","wyłączasz","wyłącza","wyłączamy","wyłączacie","wyłączają"],
    prf:"wyłączyć",  future:["wyłączę","wyłączysz","wyłączy","wyłączymy","wyłączycie","wyłączą"],
    tags:["work"] },

  { en:"to begin / start",
    imp:"zaczynać",  present:["zaczynam","zaczynasz","zaczyna","zaczynamy","zaczynacie","zaczynają"],
    prf:"zacząć",    future:["zacznę","zaczniesz","zacznie","zaczniemy","zaczniecie","zaczną"] },

  { en:"to close",
    imp:"zamykać",   present:["zamykam","zamykasz","zamyka","zamykamy","zamykacie","zamykają"],
    prf:"zamknąć",   future:["zamknę","zamkniesz","zamknie","zamkniemy","zamkniecie","zamkną"] },

  { en:"to report (an issue)",
    imp:"zgłaszać",  present:["zgłaszam","zgłaszasz","zgłasza","zgłaszamy","zgłaszacie","zgłaszają"],
    prf:"zgłosić",   future:["zgłoszę","zgłosisz","zgłosi","zgłosimy","zgłosicie","zgłoszą"],
    tags:["work"] },

  { en:"to know (people / places)",
    imp:"znać",      present:["znam","znasz","zna","znamy","znacie","znają"],
    prf:null,        future:null },
];
