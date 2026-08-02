/* =====================================================================
   verbs.js — your verb bank for Nuklearny Polski
   ---------------------------------------------------------------------
   THIS FILE IS YOURS TO EDIT, just like words.js.

   Each verb entry:
     en:      the English meaning
     emoji:   OPTIONAL meaning emoji (answer side of the flashcard)
     imp:     the IMPERFECTIVE verb (ongoing/repeated action)
     prf:     the PERFECTIVE partner (single completed action), or null
     tags:    OPTIONAL extra tags, e.g. tags:["work"], and "note:..."
     conj:    the conjugation tables. EVERY ROW IS OPTIONAL — leave any
              out and nothing breaks; that row simply has no flashcard.
              Each row is 6 forms in this fixed person order:
                [ja, ty, on/ona/ono, my, wy, oni/one]
              Where a form changes with gender, write the variants with
              slashes: "robiłem/robiłam" (m/f), "robił/robiła/robiło".

     Recognized row names (shown on flashcards in this order):
       present     — Present · Imperfective   (robię = I do / am doing)
       pastImp     — Past · Imperfective      (robiłem = I was doing)
       pastPrf     — Past · Perfective        (zrobiłem = I did/finished)
       futureImp   — Future · Imperfective    (będę robić = I'll be doing)
       futurePrf   — Future · Perfective      (zrobię = I will do)
       imperative  — Imperative               (rób! = do!; "—" for ja)
       conditional — Conditional              (robiłbym = I would do)

   Notes on the tables below:
     • Perfective verbs have NO present tense — their present-looking
       forms mean the future, which is why they live under futurePrf.
     • conditional is built from the imperfective past stem + by-endings.
       The perfective conditional works the same way on the perfective
       stem (zrobiłbym = I would get it done) — add a row if you want it.
     • imperative uses the natural everyday command form; for one-off
       commands Poles often use the perfective (zrób to! otwórz! zamknij!).

   Flashcards (handled by index.html):
     • Each verb still gets its word-only aspect-pair card.
     • Each individual FORM becomes its own flashcard: the front shows
       the type, infinitive and person ("Past · Imperfective — robić ·
       my"), the answer is that single form (robiliśmy/robiłyśmy).
       "—" forms are skipped automatically.
     • On the Flashcards page, pick which conjugation types to drill.

   Sorted A→Z by the imperfective verb.
   ===================================================================== */

const VERB_BANK = [
  { en:"to take", emoji:"🤲",
    imp:"brać", prf:"wziąć",
    conj:{
      present:    ["biorę","bierzesz","bierze","bierzemy","bierzecie","biorą"],
      pastImp:    ["brałem/brałam","brałeś/brałaś","brał/brała/brało","braliśmy/brałyśmy","braliście/brałyście","brali/brały"],
      pastPrf:    ["wziąłem/wzięłam","wziąłeś/wzięłaś","wziął/wzięła/wzięło","wzięliśmy/wzięłyśmy","wzięliście/wzięłyście","wzięli/wzięły"],
      futureImp:  ["będę brać","będziesz brać","będzie brać","będziemy brać","będziecie brać","będą brać"],
      futurePrf:  ["wezmę","weźmiesz","weźmie","weźmiemy","weźmiecie","wezmą"],
      imperative: ["—","bierz!","niech bierze","bierzmy!","bierzcie!","niech biorą"],
      conditional:["brałbym/brałabym","brałbyś/brałabyś","brałby/brałaby/brałoby","bralibyśmy/brałybyśmy","bralibyście/brałybyście","braliby/brałyby"],
    } },

  { en:"to be", emoji:"🧍✨",
    imp:"być", prf:null,
    conj:{
      present:    ["jestem","jesteś","jest","jesteśmy","jesteście","są"],
      pastImp:    ["byłem/byłam","byłeś/byłaś","był/była/było","byliśmy/byłyśmy","byliście/byłyście","byli/były"],
      futureImp:  ["będę","będziesz","będzie","będziemy","będziecie","będą"],
      imperative: ["—","bądź!","niech będzie","bądźmy!","bądźcie!","niech będą"],
      conditional:["byłbym/byłabym","byłbyś/byłabyś","byłby/byłaby/byłoby","bylibyśmy/byłybyśmy","bylibyście/byłybyście","byliby/byłyby"],
    } },

  { en:"to want", emoji:"🙏",
    imp:"chcieć", prf:null,
    conj:{
      present:    ["chcę","chcesz","chce","chcemy","chcecie","chcą"],
      pastImp:    ["chciałem/chciałam","chciałeś/chciałaś","chciał/chciała/chciało","chcieliśmy/chciałyśmy","chcieliście/chciałyście","chcieli/chciały"],
      futureImp:  ["będę chcieć","będziesz chcieć","będzie chcieć","będziemy chcieć","będziecie chcieć","będą chcieć"],
      conditional:["chciałbym/chciałabym","chciałbyś/chciałabyś","chciałby/chciałaby/chciałoby","chcielibyśmy/chciałybyśmy","chcielibyście/chciałybyście","chcieliby/chciałyby"],
    },
    tags:["note:chciałbym… = I would like… — the polite way to ask for anything"] },

  { en:"to wait", emoji:"⏳",
    imp:"czekać", prf:"poczekać",
    conj:{
      present:    ["czekam","czekasz","czeka","czekamy","czekacie","czekają"],
      pastImp:    ["czekałem/czekałam","czekałeś/czekałaś","czekał/czekała/czekało","czekaliśmy/czekałyśmy","czekaliście/czekałyście","czekali/czekały"],
      pastPrf:    ["poczekałem/poczekałam","poczekałeś/poczekałaś","poczekał/poczekała/poczekało","poczekaliśmy/poczekałyśmy","poczekaliście/poczekałyście","poczekali/poczekały"],
      futureImp:  ["będę czekać","będziesz czekać","będzie czekać","będziemy czekać","będziecie czekać","będą czekać"],
      futurePrf:  ["poczekam","poczekasz","poczeka","poczekamy","poczekacie","poczekają"],
      imperative: ["—","czekaj!","niech czeka","czekajmy!","czekajcie!","niech czekają"],
      conditional:["czekałbym/czekałabym","czekałbyś/czekałabyś","czekałby/czekałaby/czekałoby","czekalibyśmy/czekałybyśmy","czekalibyście/czekałybyście","czekaliby/czekałyby"],
    } },

  { en:"to read", emoji:"📖",
    imp:"czytać", prf:"przeczytać",
    conj:{
      present:    ["czytam","czytasz","czyta","czytamy","czytacie","czytają"],
      pastImp:    ["czytałem/czytałam","czytałeś/czytałaś","czytał/czytała/czytało","czytaliśmy/czytałyśmy","czytaliście/czytałyście","czytali/czytały"],
      pastPrf:    ["przeczytałem/przeczytałam","przeczytałeś/przeczytałaś","przeczytał/przeczytała/przeczytało","przeczytaliśmy/przeczytałyśmy","przeczytaliście/przeczytałyście","przeczytali/przeczytały"],
      futureImp:  ["będę czytać","będziesz czytać","będzie czytać","będziemy czytać","będziecie czytać","będą czytać"],
      futurePrf:  ["przeczytam","przeczytasz","przeczyta","przeczytamy","przeczytacie","przeczytają"],
      imperative: ["—","czytaj!","niech czyta","czytajmy!","czytajcie!","niech czytają"],
      conditional:["czytałbym/czytałabym","czytałbyś/czytałabyś","czytałby/czytałaby/czytałoby","czytalibyśmy/czytałybyśmy","czytalibyście/czytałybyście","czytaliby/czytałyby"],
    } },

  { en:"to give", emoji:"🤲🎁",
    imp:"dawać", prf:"dać",
    conj:{
      present:    ["daję","dajesz","daje","dajemy","dajecie","dają"],
      pastImp:    ["dawałem/dawałam","dawałeś/dawałaś","dawał/dawała/dawało","dawaliśmy/dawałyśmy","dawaliście/dawałyście","dawali/dawały"],
      pastPrf:    ["dałem/dałam","dałeś/dałaś","dał/dała/dało","daliśmy/dałyśmy","daliście/dałyście","dali/dały"],
      futureImp:  ["będę dawać","będziesz dawać","będzie dawać","będziemy dawać","będziecie dawać","będą dawać"],
      futurePrf:  ["dam","dasz","da","damy","dacie","dadzą"],
      imperative: ["—","dawaj!","niech daje","dawajmy!","dawajcie!","niech dają"],
      conditional:["dawałbym/dawałabym","dawałbyś/dawałabyś","dawałby/dawałaby/dawałoby","dawalibyśmy/dawałybyśmy","dawalibyście/dawałybyście","dawaliby/dawałyby"],
    } },

  { en:"to go (by vehicle)", emoji:"🚗",
    imp:"jechać", prf:"pojechać",
    conj:{
      present:    ["jadę","jedziesz","jedzie","jedziemy","jedziecie","jadą"],
      pastImp:    ["jechałem/jechałam","jechałeś/jechałaś","jechał/jechała/jechało","jechaliśmy/jechałyśmy","jechaliście/jechałyście","jechali/jechały"],
      pastPrf:    ["pojechałem/pojechałam","pojechałeś/pojechałaś","pojechał/pojechała/pojechało","pojechaliśmy/pojechałyśmy","pojechaliście/pojechałyście","pojechali/pojechały"],
      futureImp:  ["będę jechać","będziesz jechać","będzie jechać","będziemy jechać","będziecie jechać","będą jechać"],
      futurePrf:  ["pojadę","pojedziesz","pojedzie","pojedziemy","pojedziecie","pojadą"],
      imperative: ["—","jedź!","niech jedzie","jedźmy!","jedźcie!","niech jadą"],
      conditional:["jechałbym/jechałabym","jechałbyś/jechałabyś","jechałby/jechałaby/jechałoby","jechalibyśmy/jechałybyśmy","jechalibyście/jechałybyście","jechaliby/jechałyby"],
    } },

  { en:"to eat", emoji:"🍴😋",
    imp:"jeść", prf:"zjeść",
    conj:{
      present:    ["jem","jesz","je","jemy","jecie","jedzą"],
      pastImp:    ["jadłem/jadłam","jadłeś/jadłaś","jadł/jadła/jadło","jedliśmy/jadłyśmy","jedliście/jadłyście","jedli/jadły"],
      pastPrf:    ["zjadłem/zjadłam","zjadłeś/zjadłaś","zjadł/zjadła/zjadło","zjedliśmy/zjadłyśmy","zjedliście/zjadłyście","zjedli/zjadły"],
      futureImp:  ["będę jeść","będziesz jeść","będzie jeść","będziemy jeść","będziecie jeść","będą jeść"],
      futurePrf:  ["zjem","zjesz","zje","zjemy","zjecie","zjedzą"],
      imperative: ["—","jedz!","niech je","jedzmy!","jedzcie!","niech jedzą"],
      conditional:["jadłbym/jadłabym","jadłbyś/jadłabyś","jadłby/jadłaby/jadłoby","jedlibyśmy/jadłybyśmy","jedlibyście/jadłybyście","jedliby/jadłyby"],
    } },

  { en:"to go (on foot)", emoji:"🚶",
    imp:"iść", prf:"pójść",
    conj:{
      present:    ["idę","idziesz","idzie","idziemy","idziecie","idą"],
      pastImp:    ["szedłem/szłam","szedłeś/szłaś","szedł/szła/szło","szliśmy/szłyśmy","szliście/szłyście","szli/szły"],
      pastPrf:    ["poszedłem/poszłam","poszedłeś/poszłaś","poszedł/poszła/poszło","poszliśmy/poszłyśmy","poszliście/poszłyście","poszli/poszły"],
      futureImp:  ["będę iść","będziesz iść","będzie iść","będziemy iść","będziecie iść","będą iść"],
      futurePrf:  ["pójdę","pójdziesz","pójdzie","pójdziemy","pójdziecie","pójdą"],
      imperative: ["—","idź!","niech idzie","idźmy!","idźcie!","niech idą"],
      conditional:["szedłbym/szłabym","szedłbyś/szłabyś","szedłby/szłaby/szłoby","szlibyśmy/szłybyśmy","szlibyście/szłybyście","szliby/szłyby"],
    },
    tags:["note:the past stem changes with gender: szedł- (m) vs szł- (f/n)"] },

  { en:"to love", emoji:"❤️",
    imp:"kochać", prf:null,
    conj:{
      present:    ["kocham","kochasz","kocha","kochamy","kochacie","kochają"],
      pastImp:    ["kochałem/kochałam","kochałeś/kochałaś","kochał/kochała/kochało","kochaliśmy/kochałyśmy","kochaliście/kochałyście","kochali/kochały"],
      futureImp:  ["będę kochać","będziesz kochać","będzie kochać","będziemy kochać","będziecie kochać","będą kochać"],
      imperative: ["—","kochaj!","niech kocha","kochajmy!","kochajcie!","niech kochają"],
      conditional:["kochałbym/kochałabym","kochałbyś/kochałabyś","kochałby/kochałaby/kochałoby","kochalibyśmy/kochałybyśmy","kochalibyście/kochałybyście","kochaliby/kochałyby"],
    } },

  { en:"to finish", emoji:"🏁",
    imp:"kończyć", prf:"skończyć",
    conj:{
      present:    ["kończę","kończysz","kończy","kończymy","kończycie","kończą"],
      pastImp:    ["kończyłem/kończyłam","kończyłeś/kończyłaś","kończył/kończyła/kończyło","kończyliśmy/kończyłyśmy","kończyliście/kończyłyście","kończyli/kończyły"],
      pastPrf:    ["skończyłem/skończyłam","skończyłeś/skończyłaś","skończył/skończyła/skończyło","skończyliśmy/skończyłyśmy","skończyliście/skończyłyście","skończyli/skończyły"],
      futureImp:  ["będę kończyć","będziesz kończyć","będzie kończyć","będziemy kończyć","będziecie kończyć","będą kończyć"],
      futurePrf:  ["skończę","skończysz","skończy","skończymy","skończycie","skończą"],
      imperative: ["—","kończ!","niech kończy","kończmy!","kończcie!","niech kończą"],
      conditional:["kończyłbym/kończyłabym","kończyłbyś/kończyłabyś","kończyłby/kończyłaby/kończyłoby","kończylibyśmy/kończyłybyśmy","kończylibyście/kończyłybyście","kończyliby/kończyłyby"],
    } },

  { en:"to buy", emoji:"🛒",
    imp:"kupować", prf:"kupić",
    conj:{
      present:    ["kupuję","kupujesz","kupuje","kupujemy","kupujecie","kupują"],
      pastImp:    ["kupowałem/kupowałam","kupowałeś/kupowałaś","kupował/kupowała/kupowało","kupowaliśmy/kupowałyśmy","kupowaliście/kupowałyście","kupowali/kupowały"],
      pastPrf:    ["kupiłem/kupiłam","kupiłeś/kupiłaś","kupił/kupiła/kupiło","kupiliśmy/kupiłyśmy","kupiliście/kupiłyście","kupili/kupiły"],
      futureImp:  ["będę kupować","będziesz kupować","będzie kupować","będziemy kupować","będziecie kupować","będą kupować"],
      futurePrf:  ["kupię","kupisz","kupi","kupimy","kupicie","kupią"],
      imperative: ["—","kupuj!","niech kupuje","kupujmy!","kupujcie!","niech kupują"],
      conditional:["kupowałbym/kupowałabym","kupowałbyś/kupowałabyś","kupowałby/kupowałaby/kupowałoby","kupowalibyśmy/kupowałybyśmy","kupowalibyście/kupowałybyście","kupowaliby/kupowałyby"],
    } },

  { en:"to like", emoji:"👍",
    imp:"lubić", prf:null,
    conj:{
      present:    ["lubię","lubisz","lubi","lubimy","lubicie","lubią"],
      pastImp:    ["lubiłem/lubiłam","lubiłeś/lubiłaś","lubił/lubiła/lubiło","lubiliśmy/lubiłyśmy","lubiliście/lubiłyście","lubili/lubiły"],
      futureImp:  ["będę lubić","będziesz lubić","będzie lubić","będziemy lubić","będziecie lubić","będą lubić"],
      conditional:["lubiłbym/lubiłabym","lubiłbyś/lubiłabyś","lubiłby/lubiłaby/lubiłoby","lubilibyśmy/lubiłybyśmy","lubilibyście/lubiłybyście","lubiliby/lubiłyby"],
    } },

  { en:"to have", emoji:"🤲📦",
    imp:"mieć", prf:null,
    conj:{
      present:    ["mam","masz","ma","mamy","macie","mają"],
      pastImp:    ["miałem/miałam","miałeś/miałaś","miał/miała/miało","mieliśmy/miałyśmy","mieliście/miałyście","mieli/miały"],
      futureImp:  ["będę mieć","będziesz mieć","będzie mieć","będziemy mieć","będziecie mieć","będą mieć"],
      imperative: ["—","miej!","niech ma","miejmy!","miejcie!","niech mają"],
      conditional:["miałbym/miałabym","miałbyś/miałabyś","miałby/miałaby/miałoby","mielibyśmy/miałybyśmy","mielibyście/miałybyście","mieliby/miałyby"],
    } },

  { en:"to live / reside", emoji:"🏠",
    imp:"mieszkać", prf:null,
    conj:{
      present:    ["mieszkam","mieszkasz","mieszka","mieszkamy","mieszkacie","mieszkają"],
      pastImp:    ["mieszkałem/mieszkałam","mieszkałeś/mieszkałaś","mieszkał/mieszkała/mieszkało","mieszkaliśmy/mieszkałyśmy","mieszkaliście/mieszkałyście","mieszkali/mieszkały"],
      futureImp:  ["będę mieszkać","będziesz mieszkać","będzie mieszkać","będziemy mieszkać","będziecie mieszkać","będą mieszkać"],
      imperative: ["—","mieszkaj!","niech mieszka","mieszkajmy!","mieszkajcie!","niech mieszkają"],
      conditional:["mieszkałbym/mieszkałabym","mieszkałbyś/mieszkałabyś","mieszkałby/mieszkałaby/mieszkałoby","mieszkalibyśmy/mieszkałybyśmy","mieszkalibyście/mieszkałybyście","mieszkaliby/mieszkałyby"],
    } },

  { en:"can / to be able", emoji:"✅💪",
    imp:"móc", prf:null,
    conj:{
      present:    ["mogę","możesz","może","możemy","możecie","mogą"],
      pastImp:    ["mogłem/mogłam","mogłeś/mogłaś","mógł/mogła/mogło","mogliśmy/mogłyśmy","mogliście/mogłyście","mogli/mogły"],
      futureImp:  ["będę mógł/mogła","będziesz mógł/mogła","będzie mógł/mogła/mogło","będziemy mogli/mogły","będziecie mogli/mogły","będą mogli/mogły"],
      conditional:["mógłbym/mogłabym","mógłbyś/mogłabyś","mógłby/mogłaby/mogłoby","moglibyśmy/mogłybyśmy","moglibyście/mogłybyście","mogliby/mogłyby"],
    },
    tags:["note:no imperative; future uses the past form: będę mógł = I will be able"] },

  { en:"to speak / say", emoji:"🗣️",
    imp:"mówić", prf:"powiedzieć",
    conj:{
      present:    ["mówię","mówisz","mówi","mówimy","mówicie","mówią"],
      pastImp:    ["mówiłem/mówiłam","mówiłeś/mówiłaś","mówił/mówiła/mówiło","mówiliśmy/mówiłyśmy","mówiliście/mówiłyście","mówili/mówiły"],
      pastPrf:    ["powiedziałem/powiedziałam","powiedziałeś/powiedziałaś","powiedział/powiedziała/powiedziało","powiedzieliśmy/powiedziałyśmy","powiedzieliście/powiedziałyście","powiedzieli/powiedziały"],
      futureImp:  ["będę mówić","będziesz mówić","będzie mówić","będziemy mówić","będziecie mówić","będą mówić"],
      futurePrf:  ["powiem","powiesz","powie","powiemy","powiecie","powiedzą"],
      imperative: ["—","mów!","niech mówi","mówmy!","mówcie!","niech mówią"],
      conditional:["mówiłbym/mówiłabym","mówiłbyś/mówiłabyś","mówiłby/mówiłaby/mówiłoby","mówilibyśmy/mówiłybyśmy","mówilibyście/mówiłybyście","mówiliby/mówiłyby"],
    } },

  { en:"must / to have to", emoji:"❗",
    imp:"musieć", prf:null,
    conj:{
      present:    ["muszę","musisz","musi","musimy","musicie","muszą"],
      pastImp:    ["musiałem/musiałam","musiałeś/musiałaś","musiał/musiała/musiało","musieliśmy/musiałyśmy","musieliście/musiałyście","musieli/musiały"],
      futureImp:  ["będę musiał/musiała","będziesz musiał/musiała","będzie musiał/musiała/musiało","będziemy musieli/musiały","będziecie musieli/musiały","będą musieli/musiały"],
      conditional:["musiałbym/musiałabym","musiałbyś/musiałabyś","musiałby/musiałaby/musiałoby","musielibyśmy/musiałybyśmy","musielibyście/musiałybyście","musieliby/musiałyby"],
    },
    tags:["note:no imperative; future uses the past form: będę musiał = I will have to"] },

  { en:"to open", emoji:"🔓",
    imp:"otwierać", prf:"otworzyć",
    conj:{
      present:    ["otwieram","otwierasz","otwiera","otwieramy","otwieracie","otwierają"],
      pastImp:    ["otwierałem/otwierałam","otwierałeś/otwierałaś","otwierał/otwierała/otwierało","otwieraliśmy/otwierałyśmy","otwieraliście/otwierałyście","otwierali/otwierały"],
      pastPrf:    ["otworzyłem/otworzyłam","otworzyłeś/otworzyłaś","otworzył/otworzyła/otworzyło","otworzyliśmy/otworzyłyśmy","otworzyliście/otworzyłyście","otworzyli/otworzyły"],
      futureImp:  ["będę otwierać","będziesz otwierać","będzie otwierać","będziemy otwierać","będziecie otwierać","będą otwierać"],
      futurePrf:  ["otworzę","otworzysz","otworzy","otworzymy","otworzycie","otworzą"],
      imperative: ["—","otwieraj!","niech otwiera","otwierajmy!","otwierajcie!","niech otwierają"],
      conditional:["otwierałbym/otwierałabym","otwierałbyś/otwierałabyś","otwierałby/otwierałaby/otwierałoby","otwieralibyśmy/otwierałybyśmy","otwieralibyście/otwierałybyście","otwieraliby/otwierałyby"],
    },
    tags:["note:one-off command: otwórz! (perfective)"] },

  { en:"to drink", emoji:"🥤",
    imp:"pić", prf:"wypić",
    conj:{
      present:    ["piję","pijesz","pije","pijemy","pijecie","piją"],
      pastImp:    ["piłem/piłam","piłeś/piłaś","pił/piła/piło","piliśmy/piłyśmy","piliście/piłyście","pili/piły"],
      pastPrf:    ["wypiłem/wypiłam","wypiłeś/wypiłaś","wypił/wypiła/wypiło","wypiliśmy/wypiłyśmy","wypiliście/wypiłyście","wypili/wypiły"],
      futureImp:  ["będę pić","będziesz pić","będzie pić","będziemy pić","będziecie pić","będą pić"],
      futurePrf:  ["wypiję","wypijesz","wypije","wypijemy","wypijecie","wypiją"],
      imperative: ["—","pij!","niech pije","pijmy!","pijcie!","niech piją"],
      conditional:["piłbym/piłabym","piłbyś/piłabyś","piłby/piłaby/piłoby","pilibyśmy/piłybyśmy","pilibyście/piłybyście","piliby/piłyby"],
    } },

  { en:"to write", emoji:"✍️",
    imp:"pisać", prf:"napisać",
    conj:{
      present:    ["piszę","piszesz","pisze","piszemy","piszecie","piszą"],
      pastImp:    ["pisałem/pisałam","pisałeś/pisałaś","pisał/pisała/pisało","pisaliśmy/pisałyśmy","pisaliście/pisałyście","pisali/pisały"],
      pastPrf:    ["napisałem/napisałam","napisałeś/napisałaś","napisał/napisała/napisało","napisaliśmy/napisałyśmy","napisaliście/napisałyście","napisali/napisały"],
      futureImp:  ["będę pisać","będziesz pisać","będzie pisać","będziemy pisać","będziecie pisać","będą pisać"],
      futurePrf:  ["napiszę","napiszesz","napisze","napiszemy","napiszecie","napiszą"],
      imperative: ["—","pisz!","niech pisze","piszmy!","piszcie!","niech piszą"],
      conditional:["pisałbym/pisałabym","pisałbyś/pisałabyś","pisałby/pisałaby/pisałoby","pisalibyśmy/pisałybyśmy","pisalibyście/pisałybyście","pisaliby/pisałyby"],
    } },

  { en:"to pay", emoji:"💳",
    imp:"płacić", prf:"zapłacić",
    conj:{
      present:    ["płacę","płacisz","płaci","płacimy","płacicie","płacą"],
      pastImp:    ["płaciłem/płaciłam","płaciłeś/płaciłaś","płacił/płaciła/płaciło","płaciliśmy/płaciłyśmy","płaciliście/płaciłyście","płacili/płaciły"],
      pastPrf:    ["zapłaciłem/zapłaciłam","zapłaciłeś/zapłaciłaś","zapłacił/zapłaciła/zapłaciło","zapłaciliśmy/zapłaciłyśmy","zapłaciliście/zapłaciłyście","zapłacili/zapłaciły"],
      futureImp:  ["będę płacić","będziesz płacić","będzie płacić","będziemy płacić","będziecie płacić","będą płacić"],
      futurePrf:  ["zapłacę","zapłacisz","zapłaci","zapłacimy","zapłacicie","zapłacą"],
      imperative: ["—","płać!","niech płaci","płaćmy!","płaćcie!","niech płacą"],
      conditional:["płaciłbym/płaciłabym","płaciłbyś/płaciłabyś","płaciłby/płaciłaby/płaciłoby","płacilibyśmy/płaciłybyśmy","płacilibyście/płaciłybyście","płaciliby/płaciłyby"],
    } },

  { en:"to help", emoji:"🤝",
    imp:"pomagać", prf:"pomóc",
    conj:{
      present:    ["pomagam","pomagasz","pomaga","pomagamy","pomagacie","pomagają"],
      pastImp:    ["pomagałem/pomagałam","pomagałeś/pomagałaś","pomagał/pomagała/pomagało","pomagaliśmy/pomagałyśmy","pomagaliście/pomagałyście","pomagali/pomagały"],
      pastPrf:    ["pomogłem/pomogłam","pomogłeś/pomogłaś","pomógł/pomogła/pomogło","pomogliśmy/pomogłyśmy","pomogliście/pomogłyście","pomogli/pomogły"],
      futureImp:  ["będę pomagać","będziesz pomagać","będzie pomagać","będziemy pomagać","będziecie pomagać","będą pomagać"],
      futurePrf:  ["pomogę","pomożesz","pomoże","pomożemy","pomożecie","pomogą"],
      imperative: ["—","pomagaj!","niech pomaga","pomagajmy!","pomagajcie!","niech pomagają"],
      conditional:["pomagałbym/pomagałabym","pomagałbyś/pomagałabyś","pomagałby/pomagałaby/pomagałoby","pomagalibyśmy/pomagałybyśmy","pomagalibyście/pomagałybyście","pomagaliby/pomagałyby"],
    },
    tags:["note:one-off command: pomóż! (perfective)"] },

  { en:"to work", emoji:"👷",
    imp:"pracować", prf:null,
    conj:{
      present:    ["pracuję","pracujesz","pracuje","pracujemy","pracujecie","pracują"],
      pastImp:    ["pracowałem/pracowałam","pracowałeś/pracowałaś","pracował/pracowała/pracowało","pracowaliśmy/pracowałyśmy","pracowaliście/pracowałyście","pracowali/pracowały"],
      futureImp:  ["będę pracować","będziesz pracować","będzie pracować","będziemy pracować","będziecie pracować","będą pracować"],
      imperative: ["—","pracuj!","niech pracuje","pracujmy!","pracujcie!","niech pracują"],
      conditional:["pracowałbym/pracowałabym","pracowałbyś/pracowałabyś","pracowałby/pracowałaby/pracowałoby","pracowalibyśmy/pracowałybyśmy","pracowalibyście/pracowałybyście","pracowaliby/pracowałyby"],
    } },

  { en:"to ask (request)", emoji:"🙏",
    imp:"prosić", prf:"poprosić",
    conj:{
      present:    ["proszę","prosisz","prosi","prosimy","prosicie","proszą"],
      pastImp:    ["prosiłem/prosiłam","prosiłeś/prosiłaś","prosił/prosiła/prosiło","prosiliśmy/prosiłyśmy","prosiliście/prosiłyście","prosili/prosiły"],
      pastPrf:    ["poprosiłem/poprosiłam","poprosiłeś/poprosiłaś","poprosił/poprosiła/poprosiło","poprosiliśmy/poprosiłyśmy","poprosiliście/poprosiłyście","poprosili/poprosiły"],
      futureImp:  ["będę prosić","będziesz prosić","będzie prosić","będziemy prosić","będziecie prosić","będą prosić"],
      futurePrf:  ["poproszę","poprosisz","poprosi","poprosimy","poprosicie","poproszą"],
      imperative: ["—","proś!","niech prosi","prośmy!","proście!","niech proszą"],
      conditional:["prosiłbym/prosiłabym","prosiłbyś/prosiłabyś","prosiłby/prosiłaby/prosiłoby","prosilibyśmy/prosiłybyśmy","prosilibyście/prosiłybyście","prosiliby/prosiłyby"],
    } },

  { en:"to ask (a question)", emoji:"❓",
    imp:"pytać", prf:"zapytać",
    conj:{
      present:    ["pytam","pytasz","pyta","pytamy","pytacie","pytają"],
      pastImp:    ["pytałem/pytałam","pytałeś/pytałaś","pytał/pytała/pytało","pytaliśmy/pytałyśmy","pytaliście/pytałyście","pytali/pytały"],
      pastPrf:    ["zapytałem/zapytałam","zapytałeś/zapytałaś","zapytał/zapytała/zapytało","zapytaliśmy/zapytałyśmy","zapytaliście/zapytałyście","zapytali/zapytały"],
      futureImp:  ["będę pytać","będziesz pytać","będzie pytać","będziemy pytać","będziecie pytać","będą pytać"],
      futurePrf:  ["zapytam","zapytasz","zapyta","zapytamy","zapytacie","zapytają"],
      imperative: ["—","pytaj!","niech pyta","pytajmy!","pytajcie!","niech pytają"],
      conditional:["pytałbym/pytałabym","pytałbyś/pytałabyś","pytałby/pytałaby/pytałoby","pytalibyśmy/pytałybyśmy","pytalibyście/pytałybyście","pytaliby/pytałyby"],
    } },

  { en:"to do / make", emoji:"🔨",
    imp:"robić", prf:"zrobić",
    conj:{
      present:    ["robię","robisz","robi","robimy","robicie","robią"],
      pastImp:    ["robiłem/robiłam","robiłeś/robiłaś","robił/robiła/robiło","robiliśmy/robiłyśmy","robiliście/robiłyście","robili/robiły"],
      pastPrf:    ["zrobiłem/zrobiłam","zrobiłeś/zrobiłaś","zrobił/zrobiła/zrobiło","zrobiliśmy/zrobiłyśmy","zrobiliście/zrobiłyście","zrobili/zrobiły"],
      futureImp:  ["będę robić","będziesz robić","będzie robić","będziemy robić","będziecie robić","będą robić"],
      futurePrf:  ["zrobię","zrobisz","zrobi","zrobimy","zrobicie","zrobią"],
      imperative: ["—","rób!","niech robi","róbmy!","róbcie!","niech robią"],
      conditional:["robiłbym/robiłabym","robiłbyś/robiłabyś","robiłby/robiłaby/robiłoby","robilibyśmy/robiłybyśmy","robilibyście/robiłybyście","robiliby/robiłyby"],
    },
    tags:["note:one-off command: zrób! (perfective)"] },

  { en:"to understand", emoji:"💡",
    imp:"rozumieć", prf:"zrozumieć",
    conj:{
      present:    ["rozumiem","rozumiesz","rozumie","rozumiemy","rozumiecie","rozumieją"],
      pastImp:    ["rozumiałem/rozumiałam","rozumiałeś/rozumiałaś","rozumiał/rozumiała/rozumiało","rozumieliśmy/rozumiałyśmy","rozumieliście/rozumiałyście","rozumieli/rozumiały"],
      pastPrf:    ["zrozumiałem/zrozumiałam","zrozumiałeś/zrozumiałaś","zrozumiał/zrozumiała/zrozumiało","zrozumieliśmy/zrozumiałyśmy","zrozumieliście/zrozumiałyście","zrozumieli/zrozumiały"],
      futureImp:  ["będę rozumieć","będziesz rozumieć","będzie rozumieć","będziemy rozumieć","będziecie rozumieć","będą rozumieć"],
      futurePrf:  ["zrozumiem","zrozumiesz","zrozumie","zrozumiemy","zrozumiecie","zrozumieją"],
      conditional:["rozumiałbym/rozumiałabym","rozumiałbyś/rozumiałabyś","rozumiałby/rozumiałaby/rozumiałoby","rozumielibyśmy/rozumiałybyśmy","rozumielibyście/rozumiałybyście","rozumieliby/rozumiałyby"],
    },
    tags:["note:command: zrozum! (perfective)"] },

  { en:"to check / verify", emoji:"🔍",
    imp:"sprawdzać", prf:"sprawdzić",
    conj:{
      present:    ["sprawdzam","sprawdzasz","sprawdza","sprawdzamy","sprawdzacie","sprawdzają"],
      pastImp:    ["sprawdzałem/sprawdzałam","sprawdzałeś/sprawdzałaś","sprawdzał/sprawdzała/sprawdzało","sprawdzaliśmy/sprawdzałyśmy","sprawdzaliście/sprawdzałyście","sprawdzali/sprawdzały"],
      pastPrf:    ["sprawdziłem/sprawdziłam","sprawdziłeś/sprawdziłaś","sprawdził/sprawdziła/sprawdziło","sprawdziliśmy/sprawdziłyśmy","sprawdziliście/sprawdziłyście","sprawdzili/sprawdziły"],
      futureImp:  ["będę sprawdzać","będziesz sprawdzać","będzie sprawdzać","będziemy sprawdzać","będziecie sprawdzać","będą sprawdzać"],
      futurePrf:  ["sprawdzę","sprawdzisz","sprawdzi","sprawdzimy","sprawdzicie","sprawdzą"],
      imperative: ["—","sprawdzaj!","niech sprawdza","sprawdzajmy!","sprawdzajcie!","niech sprawdzają"],
      conditional:["sprawdzałbym/sprawdzałabym","sprawdzałbyś/sprawdzałabyś","sprawdzałby/sprawdzałaby/sprawdzałoby","sprawdzalibyśmy/sprawdzałybyśmy","sprawdzalibyście/sprawdzałybyście","sprawdzaliby/sprawdzałyby"],
    },
    tags:["work","note:one-off command: sprawdź! (perfective)"] },

  { en:"to listen", emoji:"🎧",
    imp:"słuchać", prf:"posłuchać",
    conj:{
      present:    ["słucham","słuchasz","słucha","słuchamy","słuchacie","słuchają"],
      pastImp:    ["słuchałem/słuchałam","słuchałeś/słuchałaś","słuchał/słuchała/słuchało","słuchaliśmy/słuchałyśmy","słuchaliście/słuchałyście","słuchali/słuchały"],
      pastPrf:    ["posłuchałem/posłuchałam","posłuchałeś/posłuchałaś","posłuchał/posłuchała/posłuchało","posłuchaliśmy/posłuchałyśmy","posłuchaliście/posłuchałyście","posłuchali/posłuchały"],
      futureImp:  ["będę słuchać","będziesz słuchać","będzie słuchać","będziemy słuchać","będziecie słuchać","będą słuchać"],
      futurePrf:  ["posłucham","posłuchasz","posłucha","posłuchamy","posłuchacie","posłuchają"],
      imperative: ["—","słuchaj!","niech słucha","słuchajmy!","słuchajcie!","niech słuchają"],
      conditional:["słuchałbym/słuchałabym","słuchałbyś/słuchałabyś","słuchałby/słuchałaby/słuchałoby","słuchalibyśmy/słuchałybyśmy","słuchalibyście/słuchałybyście","słuchaliby/słuchałyby"],
    } },

  { en:"to hear", emoji:"👂",
    imp:"słyszeć", prf:"usłyszeć",
    conj:{
      present:    ["słyszę","słyszysz","słyszy","słyszymy","słyszycie","słyszą"],
      pastImp:    ["słyszałem/słyszałam","słyszałeś/słyszałaś","słyszał/słyszała/słyszało","słyszeliśmy/słyszałyśmy","słyszeliście/słyszałyście","słyszeli/słyszały"],
      pastPrf:    ["usłyszałem/usłyszałam","usłyszałeś/usłyszałaś","usłyszał/usłyszała/usłyszało","usłyszeliśmy/usłyszałyśmy","usłyszeliście/usłyszałyście","usłyszeli/usłyszały"],
      futureImp:  ["będę słyszeć","będziesz słyszeć","będzie słyszeć","będziemy słyszeć","będziecie słyszeć","będą słyszeć"],
      futurePrf:  ["usłyszę","usłyszysz","usłyszy","usłyszymy","usłyszycie","usłyszą"],
      conditional:["słyszałbym/słyszałabym","słyszałbyś/słyszałabyś","słyszałby/słyszałaby/słyszałoby","słyszelibyśmy/słyszałybyśmy","słyszelibyście/słyszałybyście","słyszeliby/słyszałyby"],
    } },

  { en:"to use", emoji:"🛠️",
    imp:"używać", prf:"użyć",
    conj:{
      present:    ["używam","używasz","używa","używamy","używacie","używają"],
      pastImp:    ["używałem/używałam","używałeś/używałaś","używał/używała/używało","używaliśmy/używałyśmy","używaliście/używałyście","używali/używały"],
      pastPrf:    ["użyłem/użyłam","użyłeś/użyłaś","użył/użyła/użyło","użyliśmy/użyłyśmy","użyliście/użyłyście","użyli/użyły"],
      futureImp:  ["będę używać","będziesz używać","będzie używać","będziemy używać","będziecie używać","będą używać"],
      futurePrf:  ["użyję","użyjesz","użyje","użyjemy","użyjecie","użyją"],
      imperative: ["—","używaj!","niech używa","używajmy!","używajcie!","niech używają"],
      conditional:["używałbym/używałabym","używałbyś/używałabyś","używałby/używałaby/używałoby","używalibyśmy/używałybyśmy","używalibyście/używałybyście","używaliby/używałyby"],
    } },

  { en:"to see", emoji:"👁️",
    imp:"widzieć", prf:"zobaczyć",
    conj:{
      present:    ["widzę","widzisz","widzi","widzimy","widzicie","widzą"],
      pastImp:    ["widziałem/widziałam","widziałeś/widziałaś","widział/widziała/widziało","widzieliśmy/widziałyśmy","widzieliście/widziałyście","widzieli/widziały"],
      pastPrf:    ["zobaczyłem/zobaczyłam","zobaczyłeś/zobaczyłaś","zobaczył/zobaczyła/zobaczyło","zobaczyliśmy/zobaczyłyśmy","zobaczyliście/zobaczyłyście","zobaczyli/zobaczyły"],
      futureImp:  ["będę widzieć","będziesz widzieć","będzie widzieć","będziemy widzieć","będziecie widzieć","będą widzieć"],
      futurePrf:  ["zobaczę","zobaczysz","zobaczy","zobaczymy","zobaczycie","zobaczą"],
      conditional:["widziałbym/widziałabym","widziałbyś/widziałabyś","widziałby/widziałaby/widziałoby","widzielibyśmy/widziałybyśmy","widzielibyście/widziałybyście","widzieliby/widziałyby"],
    },
    tags:["note:command: zobacz! (perfective) = look! / see!"] },

  { en:"to know (facts)", emoji:"🧠",
    imp:"wiedzieć", prf:null,
    conj:{
      present:    ["wiem","wiesz","wie","wiemy","wiecie","wiedzą"],
      pastImp:    ["wiedziałem/wiedziałam","wiedziałeś/wiedziałaś","wiedział/wiedziała/wiedziało","wiedzieliśmy/wiedziałyśmy","wiedzieliście/wiedziałyście","wiedzieli/wiedziały"],
      futureImp:  ["będę wiedzieć","będziesz wiedzieć","będzie wiedzieć","będziemy wiedzieć","będziecie wiedzieć","będą wiedzieć"],
      imperative: ["—","wiedz!","niech wie","wiedzmy!","wiedzcie!","niech wiedzą"],
      conditional:["wiedziałbym/wiedziałabym","wiedziałbyś/wiedziałabyś","wiedziałby/wiedziałaby/wiedziałoby","wiedzielibyśmy/wiedziałybyśmy","wiedzielibyście/wiedziałybyście","wiedzieliby/wiedziałyby"],
    } },

  { en:"to switch on / turn on", emoji:"💡✅",
    imp:"włączać", prf:"włączyć",
    conj:{
      present:    ["włączam","włączasz","włącza","włączamy","włączacie","włączają"],
      pastImp:    ["włączałem/włączałam","włączałeś/włączałaś","włączał/włączała/włączało","włączaliśmy/włączałyśmy","włączaliście/włączałyście","włączali/włączały"],
      pastPrf:    ["włączyłem/włączyłam","włączyłeś/włączyłaś","włączył/włączyła/włączyło","włączyliśmy/włączyłyśmy","włączyliście/włączyłyście","włączyli/włączyły"],
      futureImp:  ["będę włączać","będziesz włączać","będzie włączać","będziemy włączać","będziecie włączać","będą włączać"],
      futurePrf:  ["włączę","włączysz","włączy","włączymy","włączycie","włączą"],
      imperative: ["—","włączaj!","niech włącza","włączajmy!","włączajcie!","niech włączają"],
      conditional:["włączałbym/włączałabym","włączałbyś/włączałabyś","włączałby/włączałaby/włączałoby","włączalibyśmy/włączałybyśmy","włączalibyście/włączałybyście","włączaliby/włączałyby"],
    },
    tags:["work","note:one-off command: włącz! (perfective)"] },

  { en:"to switch off / turn off", emoji:"💡🚫",
    imp:"wyłączać", prf:"wyłączyć",
    conj:{
      present:    ["wyłączam","wyłączasz","wyłącza","wyłączamy","wyłączacie","wyłączają"],
      pastImp:    ["wyłączałem/wyłączałam","wyłączałeś/wyłączałaś","wyłączał/wyłączała/wyłączało","wyłączaliśmy/wyłączałyśmy","wyłączaliście/wyłączałyście","wyłączali/wyłączały"],
      pastPrf:    ["wyłączyłem/wyłączyłam","wyłączyłeś/wyłączyłaś","wyłączył/wyłączyła/wyłączyło","wyłączyliśmy/wyłączyłyśmy","wyłączyliście/wyłączyłyście","wyłączyli/wyłączyły"],
      futureImp:  ["będę wyłączać","będziesz wyłączać","będzie wyłączać","będziemy wyłączać","będziecie wyłączać","będą wyłączać"],
      futurePrf:  ["wyłączę","wyłączysz","wyłączy","wyłączymy","wyłączycie","wyłączą"],
      imperative: ["—","wyłączaj!","niech wyłącza","wyłączajmy!","wyłączajcie!","niech wyłączają"],
      conditional:["wyłączałbym/wyłączałabym","wyłączałbyś/wyłączałabyś","wyłączałby/wyłączałaby/wyłączałoby","wyłączalibyśmy/wyłączałybyśmy","wyłączalibyście/wyłączałybyście","wyłączaliby/wyłączałyby"],
    },
    tags:["work","note:one-off command: wyłącz! (perfective)"] },

  { en:"to begin / start", emoji:"▶️",
    imp:"zaczynać", prf:"zacząć",
    conj:{
      present:    ["zaczynam","zaczynasz","zaczyna","zaczynamy","zaczynacie","zaczynają"],
      pastImp:    ["zaczynałem/zaczynałam","zaczynałeś/zaczynałaś","zaczynał/zaczynała/zaczynało","zaczynaliśmy/zaczynałyśmy","zaczynaliście/zaczynałyście","zaczynali/zaczynały"],
      pastPrf:    ["zacząłem/zaczęłam","zacząłeś/zaczęłaś","zaczął/zaczęła/zaczęło","zaczęliśmy/zaczęłyśmy","zaczęliście/zaczęłyście","zaczęli/zaczęły"],
      futureImp:  ["będę zaczynać","będziesz zaczynać","będzie zaczynać","będziemy zaczynać","będziecie zaczynać","będą zaczynać"],
      futurePrf:  ["zacznę","zaczniesz","zacznie","zaczniemy","zaczniecie","zaczną"],
      imperative: ["—","zaczynaj!","niech zaczyna","zaczynajmy!","zaczynajcie!","niech zaczynają"],
      conditional:["zaczynałbym/zaczynałabym","zaczynałbyś/zaczynałabyś","zaczynałby/zaczynałaby/zaczynałoby","zaczynalibyśmy/zaczynałybyśmy","zaczynalibyście/zaczynałybyście","zaczynaliby/zaczynałyby"],
    } },

  { en:"to close", emoji:"🔒",
    imp:"zamykać", prf:"zamknąć",
    conj:{
      present:    ["zamykam","zamykasz","zamyka","zamykamy","zamykacie","zamykają"],
      pastImp:    ["zamykałem/zamykałam","zamykałeś/zamykałaś","zamykał/zamykała/zamykało","zamykaliśmy/zamykałyśmy","zamykaliście/zamykałyście","zamykali/zamykały"],
      pastPrf:    ["zamknąłem/zamknęłam","zamknąłeś/zamknęłaś","zamknął/zamknęła/zamknęło","zamknęliśmy/zamknęłyśmy","zamknęliście/zamknęłyście","zamknęli/zamknęły"],
      futureImp:  ["będę zamykać","będziesz zamykać","będzie zamykać","będziemy zamykać","będziecie zamykać","będą zamykać"],
      futurePrf:  ["zamknę","zamkniesz","zamknie","zamkniemy","zamkniecie","zamkną"],
      imperative: ["—","zamykaj!","niech zamyka","zamykajmy!","zamykajcie!","niech zamykają"],
      conditional:["zamykałbym/zamykałabym","zamykałbyś/zamykałabyś","zamykałby/zamykałaby/zamykałoby","zamykalibyśmy/zamykałybyśmy","zamykalibyście/zamykałybyście","zamykaliby/zamykałyby"],
    },
    tags:["note:one-off command: zamknij! (perfective)"] },

  { en:"to report (an issue)", emoji:"🚨📝",
    imp:"zgłaszać", prf:"zgłosić",
    conj:{
      present:    ["zgłaszam","zgłaszasz","zgłasza","zgłaszamy","zgłaszacie","zgłaszają"],
      pastImp:    ["zgłaszałem/zgłaszałam","zgłaszałeś/zgłaszałaś","zgłaszał/zgłaszała/zgłaszało","zgłaszaliśmy/zgłaszałyśmy","zgłaszaliście/zgłaszałyście","zgłaszali/zgłaszały"],
      pastPrf:    ["zgłosiłem/zgłosiłam","zgłosiłeś/zgłosiłaś","zgłosił/zgłosiła/zgłosiło","zgłosiliśmy/zgłosiłyśmy","zgłosiliście/zgłosiłyście","zgłosili/zgłosiły"],
      futureImp:  ["będę zgłaszać","będziesz zgłaszać","będzie zgłaszać","będziemy zgłaszać","będziecie zgłaszać","będą zgłaszać"],
      futurePrf:  ["zgłoszę","zgłosisz","zgłosi","zgłosimy","zgłosicie","zgłoszą"],
      imperative: ["—","zgłaszaj!","niech zgłasza","zgłaszajmy!","zgłaszajcie!","niech zgłaszają"],
      conditional:["zgłaszałbym/zgłaszałabym","zgłaszałbyś/zgłaszałabyś","zgłaszałby/zgłaszałaby/zgłaszałoby","zgłaszalibyśmy/zgłaszałybyśmy","zgłaszalibyście/zgłaszałybyście","zgłaszaliby/zgłaszałyby"],
    },
    tags:["work","note:one-off command: zgłoś! (perfective)"] },

  { en:"to know (people / places)", emoji:"🧠🤝",
    imp:"znać", prf:null,
    conj:{
      present:    ["znam","znasz","zna","znamy","znacie","znają"],
      pastImp:    ["znałem/znałam","znałeś/znałaś","znał/znała/znało","znaliśmy/znałyśmy","znaliście/znałyście","znali/znały"],
      futureImp:  ["będę znać","będziesz znać","będzie znać","będziemy znać","będziecie znać","będą znać"],
      conditional:["znałbym/znałabym","znałbyś/znałabyś","znałby/znałaby/znałoby","znalibyśmy/znałybyśmy","znalibyście/znałybyście","znaliby/znałyby"],
    } },

  { en:"to visit", emoji:"🏝️",
    imp:"odwiedzać", prf:"odwiedzić",
    conj:{
      present:    ["odwiedzam","odwiedzasz","odwiedza","odwiedzamy","odwiedzacie","odwiedzają"],
      pastImp:    ["odwiedzałem/odwiedzałam","odwiedzałeś/odwiedzałaś","odwiedzał/odwiedzała/odwiedzało","odwiedzaliśmy/odwiedzałyśmy","odwiedzaliście/odwiedzałyście","odwiedzali/odwiedzały"],
      pastPrf:    ["odwiedziłem/odwiedziłam","odwiedziłeś/odwiedziłaś","odwiedził/odwiedziła/odwiedziło","odwiedziliśmy/odwiedziłyśmy","odwiedziliście/odwiedziłyście","odwiedzili/odwiedziły"],
      futureImp:  ["będę odwiedzać","będziesz odwiedzać","będzie odwiedzać","będziemy odwiedzać","będziecie odwiedzać","będą odwiedzać"],
      futurePrf:  ["odwiedzę","odwiedzisz","odwiedzi","odwiedzimy","odwiedzicie","odwiedzą"],
      imperative: ["—","odwiedzaj!","niech odwiedza","odwiedzajmy!","odwiedzajcie!","niech odwiedzają"],
      conditional:["odwiedzałbym/odwiedzałabym","odwiedzałbyś/odwiedzałabyś","odwiedzałby/odwiedzałaby/odwiedzałoby","odwiedzalibyśmy/odwiedzałybyśmy","odwiedzalibyście/odwiedzałybyście","odwiedzaliby/odwiedzałyby"],
    } },

  { en:"to stay", emoji:"🏝️",
    imp:"zostawać", prf:"zostać",
    conj:{
      present:    ["zostaję","zostajesz","zostaje","zostajemy","zostajecie","zostają"],
      pastImp:    ["zostawałem/zostawałam","zostawałeś/zostawałaś","zostawał/zostawała/zostawało","zostawaliśmy/zostawałyśmy","zostawaliście/zostawałyście","zostawali/zostawały"],
      pastPrf:    ["zostałem/zostałam","zostałeś/zostałaś","został/została/zostało","zostaliśmy/zostałyśmy","zostaliście/zostałyście","zostali/zostały"],
      futureImp:  ["będę zostawać","będziesz zostawać","będzie zostawać","będziemy zostawać","będziecie zostawać","będą zostawać"],
      futurePrf:  ["zostanę","zostaniesz","zostanie","zostaniemy","zostaniecie","zostaną"],
      imperative: ["—","zostań!","niech zostanie","zostańmy!","zostańcie!","niech zostaną"],
      conditional:["zostawałbym/zostawałabym","zostawałbyś/zostawałabyś","zostawałby/zostawałaby/zostawałoby","zostawalibyśmy/zostawałybyśmy","zostawalibyście/zostawałybyście","zostawaliby/zostawałyby"],
    },
    tags:["note:the command uses the perfective: zostań! = stay!"] },

];
