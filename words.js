/* =====================================================================
   words.js — your vocabulary bank for Nuklearny Polski
   ---------------------------------------------------------------------
   THIS FILE IS YOURS TO EDIT. The app code lives in index.html and never
   needs to change when you add words here. Just keep both files together
   and upload both when you publish.

   Format:  ["polish", "english", "gender", "emoji", "tag1", "tag2", ..., "note:..."]
            - "polish"/"english": base/dictionary forms, lowercase.
            - Everything after the English is OPTIONAL and recognized by
              what it is, not by position:
                "m" / "f" / "n"  -> noun gender (see GENDER TAGS below)
                an emoji         -> shown on the answer side of the card
                "note:..."       -> a study note, shown in small muted
                                    text on the ANSWER side of the card.
                                    Put it LAST, after the tags. Keeps
                                    its capitalization as written.
                anything else    -> a topic tag (lowercase label like
                                    "weather" that groups words together)
   Example: ["deszcz", "rain", "m", "🌧️", "weather"]
            ["poniedziałek", "Monday", "m", "📅1️⃣", "calendar"]
            ["czas", "time", "m", "⏳", "calendar", "note:Genitive = czasu"]
            ["kot", "cat"]            <- perfectly fine with no extras

   GENDER TAGS (special): "m", "f", "n" mark gender —
       masculine, feminine, neuter. Put the gender tag right after the
       English, before any topic tags:
         ["reaktor jądrowy", "nuclear reactor", "m", "nuclear"]
       On flashcards the POLISH side is then colored:
         baby blue = masculine · pink = feminine · pale green = neuter
       Gender tags never appear as filter chips.

   NOTE: single-word NOUNS now live in nouns.js (with their full case
       tables). This file keeps everything else: verbs are in verbs.js;
       here go adjectives, adverbs, phrases, numbers, greetings, and
       multi-word noun phrases (reaktor jądrowy, lista kontrolna…).
       To add a new noun, add it to nouns.js instead.

   What topic tags unlock (handled automatically by index.html):
     • In the Word list, search a tag name to see every word carrying it,
       and click a tag chip to filter the table.
     • In Flashcards, pick one or more tags to study just those words —
       e.g. select "calendar" + "weather" to drill both at once.

   Sorted A->Z by the Polish word, with // -- X -- letter dividers.
   To add a word: find its letter, drop in a new line in order, save.
   ===================================================================== */

const COMMON_WORDS = [
  // — A —
  ["a",                                    "and / but"],
  ["a potem",                              "and then"],
  ["aby",                                  "in order to / so that"],
  ["albo",                                 "or (common)"],
  ["ale",                                  "but"],
  ["ani",                                  "nor"],
  ["aż",                                   "until / up to / as many as"],

  // — B —
  ["bać się",                              "to be afraid",                               "😨"],
  ["bardzo",                               "very"],
  ["bez",                                  "without"],
  ["biały",                                "white",                                      "⚪"],
  ["biedny",                               "poor",                                       "💸"],
  ["blisko",                               "near",                                       "📍🤏"],
  ["błąd ludzki",                          "human error",                           "m", "👤❌",   "nuclear"],
  ["bo",                                   "because"], 
  ["bogaty",                               "rich",                                       "🤑"],
  ["brak",                                 "lack"],
  ["brązowy",                              "brown",                                      "🟤"],
  ["brudny",                               "dirty",                                      "🦠"],
  ["brzydki",                              "ugly",                                       "🙈"],
  ["buty",                                 "shoes",                                      "👟"],

  // — C —
  ["cały",                                 "whole"],
  ["chłodny",                              "cool",                                       "🌬️"],
  ["chociaż",                              "although"],
  ["choć",                                 "although"],
  ["chory",                                "sick",                                       "🤒"],
  ["ci",                                   "these (masc.)",                         "m"],
  ["cichy",                                "quiet",                                      "🤫"],
  ["ciekawy",                              "interesting",                                "🤔✨"],
  ["ciemny",                               "dark",                                       "🌑"],
  ["cienki",                               "thin"],
  ["ciepły",                               "warm",                                       "♨️",     "weather"],
  ["cieszyć się",                          "to be glad",                                 "😄"],
  ["ciężki",                               "heavy / hard",                               "🏋️"],
  ["co",                                   "what",                                       "❓"],
  ["co to znaczy?",                        "what does it mean?"],
  ["coś",                                  "something"],
  ["czarny",                               "black",                                      "⚫"],
  ["czas podróży",                         "travel time"],
  ["czasem",                               "sometimes"],
  ["czasu",                                "time (genitive)"],
  ["czemu",                                "why / what for"],
  ["czerwony",                             "red",                                        "🔴"],
  ["Cześć",                                "Hi / Bye (informal)",                        "👋",     "greetings"],
  ["często",                               "often"],
  ["czterdzieści",                         "40",                                         "4️⃣0️⃣",   "numbers"],
  ["czternaście",                          "14",                                         "1️⃣4️⃣",   "numbers"],
  ["cztery",                               "4",                                          "4️⃣",     "numbers"],
  ["czterysta",                            "400",                                        "4️⃣0️⃣0️⃣", "numbers"], 
  ["czy",                                  "or (question)"],
  ["Czy mówi pan po angielsku?",           "Do you speak English?",                 "m", "🇬🇧❓",   "phrase"],
  ["czyj",                                 "whose"],
  ["czynnik ludzki",                       "human factor",                          "m", "👤⚙️",   "nuclear"],
  ["czysty",                               "clean",                                      "✨🧼"],

  // — D —
  ["daleko",                               "far",                                        "📍🔭"],
  ["dla",                                  "for"],
  ["dlaczego",                             "why",                                        "🤷❓"],
  ["długi",                                "long",                                       "📏"],
  ["dłuższy",                              "longer"],
  ["dnia",                                 "on"],
  ["do",                                   "to / into"],
  ["do ustalenia",                         "to be determined",                                      "sports"],
  ["Do widzenia",                          "Goodbye",                                    "👋🚪",   "phrase"],
  ["dobry",                                "good",                                       "👍"],
  ["Dobry wieczór",                        "Good evening",                               "🌆👋",   "phrase"],
  ["dokąd",                                "where to"],
  ["dolny",                                "lower",                                      "⬇️"],
  ["dość",                                 "enough / quite"],
  ["drogi",                                "expensive / dear",                           "💎💰"],
  ["drugi",                                "2nd",                                        "🥈"],
  ["drzwi",                                "door",                                       "🚪"],
  ["duży",                                 "big",                                        "🐘"],
  ["dwa",                                  "2",                                          "2️⃣",     "numbers"],
  ["dwadzieścia",                          "20",                                         "2️⃣0️⃣",   "numbers"],
  ["dwanaście",                            "12",                                         "1️⃣2️⃣",   "numbers"],
  ["dwieście",                             "200",                                        "2️⃣0️⃣0️⃣", "numbers"],
  ["dzieci",                               "children",                                   "👧👦"],
  ["Dzień dobry",                          "Good morning / Good day",                    "🌅👋",   "phrase"],
  ["dziesięć",                             "10",                                         "🔟",     "numbers"],
  ["dziewięć",                             "9",                                          "9️⃣",     "numbers"],
  ["dziewięćdziesiąt",                     "90",                                         "9️⃣0️⃣",   "numbers"],
  ["dziewięćset",                          "900",                                        "9️⃣0️⃣0️⃣", "numbers"],
  ["dziewiętnaście",                       "19",                                         "1️⃣9️⃣",   "numbers"],
  ["Dziękuję",                             "Thank you",                                  "😊🙏"],
  ["dziki / dzika / dzikie",               "wild"],
  ["dzika karta",                          "wild card"],
  ["dzisiaj / dziś",                       "today",                                      "📅",     "calendar"],

  // — E — 
  ["edytuj",                               "edit"],
  ["elektrownia jądrowa",                  "nuclear power plant",                   "f", "⚛️🏭",   "nuclear"],

  // — F —
  ["fioletowy",                            "purple",                                     "🟣"],

  // — G —
  ["gdy",                                  "when"],
  ["gdzie",                                "where",                                      "📍❓"],
  ["Gdzie jest wyjście?",                  "Where is the exit?",                         "🚪❓",   "phrase"],
  ["Gdzie jest…?",                         "Where is…?",                                 "📍❓",   "phrase"],
  ["głośny",                               "loud",                                       "🔊"],
  ["główny",                               "main",                                       "🎯"],
  ["godzinowa",                            "hourly",                                               "calendar"],
  ["gorący",                               "hot",                                        "🥵🔥",   "weather"],
  ["gorzki",                               "bitter",                                     "😖☕"],
  ["gotowy",                               "ready",                                      "🏁"],
  ["górny",                                "upper",                                      "⬆️"],
  ["gruby",                                "thick / fat"],

  // — H —

  // — I —
  ["i",                                    "and"],
  ["ich",                                  "their"],
  ["ile",                                  "how much / how many",                        "🔢❓"],
  ["Ile to kosztuje?",                     "How much is it?",                            "💲❓",   "phrase"],
  ["inny",                                 "other"],
  ["interfejs człowiek–maszyna",           "human–machine interface",               "m", "👤🤖",   "nuclear"],

  // — J —
  ["ja",                                   "I",                                          "🙋"],
  ["jak",                                  "how"],
  ["jak długo?",                           "how long?"],
  ["jaki",                                 "what kind of"],
  ["jako",                                 "as"],
  ["jasny",                                "bright / light",                             "💡"],
  ["jądrowy",                              "nuclear",                                    "⚛️",     "nuclear"],
  ["jeden",                                "1",                                          "1️⃣",     "numbers"],
  ["jedenaście",                           "11",                                         "1️⃣1️⃣",   "numbers"],
  ["jego",                                 "his"],
  ["jej",                                  "her"],
  ["jeszcze",                              "still / yet"],
  ["jeszcze nie",                          "not yet"],
  ["jeśli",                                "if"],
  ["jest pierwsza",                        "it's 1 o'clock",                        "f", "1️⃣🕐",   "calendar"],
  ["jest druga",                           "it's 2 o'clock",                        "f", "2️⃣🕐",   "calendar"],
  ["jest trzecia",                         "it's 3 o'clock",                        "f", "3️⃣🕐",   "calendar"],
  ["jest czwarta",                         "it's 4 o'clock",                        "f", "4️⃣🕐",   "calendar"],
  ["jest piąta",                           "it's 5 o'clock",                        "f", "5️⃣🕐",   "calendar"],
  ["jest szósta",                          "it's 6 o'clock",                        "f", "6️⃣🕐",   "calendar"],
  ["jest siódma",                          "it's 7 o'clock",                        "f", "7️⃣🕐",   "calendar"],
  ["jest ósma",                            "it's 8 o'clock",                        "f", "8️⃣🕐",   "calendar"],
  ["jest dziewiąta",                       "it's 9 o'clock",                        "f", "9️⃣🕐",   "calendar"],
  ["jest dziesiąta",                       "it's 10 o'clock",                       "f", "1️⃣0️⃣🕐", "calendar"],
  ["jest jedenasta",                       "it's 11 o'clock",                       "f", "1️⃣1️⃣🕐", "calendar"],
  ["jest dwunasta",                        "it's 12 o'clock",                       "f", "1️⃣2️⃣🕐", "calendar"],
  ["jeżeli",                               "if"],
  ["jutro",                                "tomorrow",                                   "📅▶️",   "calendar"],
  ["już",                                  "already"],

  // — K —
  ["każdy",                                "each / every"],
  ["kiedy",                                "when",                                       "🕐❓"],
  ["krótki",                               "short",                                      "🤏"],
  ["kto",                                  "who",                                        "👤❓"],
  ["ktoś",                                 "someone"],
  ["Która godzina?",                       "What time is it?",                           "🕐❓",   "phrase"],
  ["który",                                "which"],
  ["kwaśny",                               "sour",                                       "🍋"],

  // — L —
  ["lekki",                                "light",                                      "🪶"],
  ["lewo",                                 "left",                                       "⬅️"],
  ["lewy",                                 "left (side) / fake/illegal",                 "👈"],
  ["lista kontrolna",                      "checklist",                             "f", "☑️📋",   "nuclear"],
  ["lub",                                  "or (formal)"],
  ["ludzie",                               "people",                                     "👥"],

  // — Ł —
  ["ładny",                                "pretty",                                     "✨"],
  ["łatwy",                                "easy",                                       "🍰"],
  
  // — M —
  ["mały",                                 "small",                                      "🐜"],
  ["między",                               "between"],
  ["miękki",                               "soft",                                       "🧸"],
  ["miły",                                 "nice / kind",                                "😊"],
  ["mimo",                                 "despite"],
  ["mistrzostwa",                          "championships",                              "🏆🥇",   "sports"],
  ["młody",                                "young",                                      "👶"],
  ["mocny",                                "strong",                                     "💪"],
  ["mokry",                                "wet",                                        "💦"],
  ["może",                                 "maybe"],
  ["możliwy",                              "possible"],
  ["mój",                                  "my"],
  ["my",                                   "we"],
  ["myślę, że",                            "I think"],
  ["myślę, że nie",                        "I don't think so"],
  ["myślę, że tak",                        "I think so"],
  
  // — N —
  ["na",                                   "on"],
  ["nad",                                  "above / over"],
  ["nadchodzące",                          "upcoming",                                             "sports"],
  ["najlepiej",                            "best"],
  ["najpierw",                             "first / at first"],
  ["następny",                             "next",                                       "⏭️"],
  ["nasz / nasza / nasze",                 "our"],
  ["naturalny",                            "natural",                                    "🌿"],
  ["nawet",                                "even"],
  ["Nazywam się…",                         "My name is…",                                "👤🏷️",   "phrase"],
  ["nic",                                  "nothing"],
  ["Nie",                                  "No",                                         "👎"],
  ["Nie rozumiem",                         "I don't understand",                         "😕❓",   "phrase"],
  ["niebieski",                            "blue",                                       "🔵"],
  ["niezbyt dobrze",                       "not too well",                                         "phrase"],
  ["nigdy",                                "never"],
  ["nikt",                                 "nobody"],
  ["niski",                                "low / short",                                "⬇️",     "weather"],
  ["niż",                                  "than"],
  ["nowy",                                 "new",                                        "✨"],
  ["nudny",                                "boring",                                     "🥱"],

  // — O —
  ["o",                                    "about"],
  ["obciążenie pracą",                     "workload",                              "n", "💼⚖️",   "nuclear"],
  ["obok",                                 "beside"],
  ["od",                                   "from"],
  ["odczuwalna",                           "perceptible/perceived",                                "weather"],
  ["ojciec",                               "father",                                     "👨‍👦"],
  ["około",                                "around / about"],
  ["on / ona",                             "he / she"], 
  ["on jest Polakiem",                     "he is Polish",                          "m", "🇵🇱👦🏻"],
  ["on jest Amerykaninem",                 "he is American",                        "m", "🇺🇸👦🏻"],
  ["ona jest Polką",                       "she is Polish",                         "f", "🇵🇱👧"],
  ["ona jest Amerykanką",                  "she is American",                       "m", "🇺🇸👦🏻",   "note: Testing to see what this looks like on a flash card"],
  ["one",                                  "they (non-male)"],
  ["oni",                                  "they (men/mixed)"],
  ["ono",                                  "it"],
  ["opady",                                "precipitation",                              "🌧️❄️",   "weather"],
  ["opcje",                                "options"],
  ["oprócz",                               "besides / except"],
  ["oraz",                                 "as well as"],
  ["osiem",                                "8",                                          "8️⃣",     "numbers"],
  ["osiemdziesiąt",                        "80",                                         "8️⃣0️⃣",   "numbers"],
  ["osiemnaście",                          "18",                                         "1️⃣8️⃣",   "numbers"],
  ["osiemset",                             "800",                                        "8️⃣0️⃣0️⃣", "numbers"],
  ["osobno",                               "separately"],
  ["ostatni",                              "last",                                       "🔚"],
  ["ostry",                                "sharp",                                      "🔪"],
  ["otwarty",                              "open",                                       "🔓"],

  // — P —
  ["pełnia księżyca",                      "full moon",                             "f", "🌕",     "weather"],
  ["pełny",                                "full",                                       "🔋"],
  ["pewny",                                "sure / certain",                             "✔️"],
  ["pieniądze",                            "money",                                      "💰"],
  ["pierwszy",                             "1st",                                        "🥇"],
  ["pięć",                                 "5",                                          "5️⃣",     "numbers"],
  ["pięćset",                              "500",                                      "5️⃣0️⃣0️⃣", "numbers"],          
  ["pięćdziesiąt",                         "50",                                         "5️⃣0️⃣",   "numbers"],
  ["piękny",                               "beautiful",                                  "😍"],
  ["piętnaście",                           "15",                                         "1️⃣5️⃣",   "numbers"],
  ["plecy",                                "back"],
  ["po",                                   "after"],
  ["pochmurnie",                           "cloudy",                                     "☁️☁️",   "weather"],
  ["pod",                                  "under"],
  ["podczas",                              "during"],
  ["podobny",                              "similar",                                    "👯"],
  ["pokazuj jako",                         "show as"],
  ["pomarańczowy",                         "orange",                                     "🟠"],
  ["Pomocy!",                              "Help!",                                      "🆘",     "phrase"],
  ["ponieważ",                             "because"],
  ["poprzedni",                            "previous",                                   "⏮️"],
  ["porywy",                               "gusts",                                      "💨💨",   "weather"],
  ["potem",                                "then / afterwards"],
  ["Potwierdzam",                          "I confirm / Confirmed",                      "👍✅",   "nuclear"],
  ["późno",                                "late"],
  ["prawdziwy",                            "real / true",                                "✅"],
  ["prawy",                                "right (side)",                               "👉"],
  ["pręty sterujące",                      "control rods",                               "⚛️🎚️",   "nuclear"],
  ["prosto",                               "straight ahead",                             "⬆️"],
  ["prosty",                               "simple / straight",                          "➡️"],
  ["Proszę",                               "Please / You're welcome / Here you go",      "🙏"],
  ["prywatny",                             "private",                                    "🤫"],
  ["przed",                                "before / in front of"],
  ["przekazanie zmiany",                   "shift handover",                        "n", "🤝🔄",   "nuclear"],
  ["Przepraszam",                          "Excuse me / Sorry",                          "🙇"],
  ["przez",                                "through / by"],
  ["przy",                                 "next to"],
  ["publiczny",                            "public",                                     "🏛️👥"],
  ["pulpit sterowniczy",                   "control desk / panel",                  "m", "🎛️🔘",   "nuclear"],
  ["pusty",                                "empty",                                      "🪫"],

  // — R —
  ["rano",                                 "morning",                                    "🌅"],
  ["raz",                                  "once / one time",                            "1️⃣"],
  ["razem",                                "together"],
  ["reaktor jądrowy",                      "nuclear reactor",                       "m", "⚛️",     "nuclear"],
  ["równy",                                "equal",                                      "⚖️"],
  ["różny",                                "different",                                  "🔀"],
  ["różowy",                               "pink",                                       "🌸"],
  ["rzadko",                               "rarely"],
  ["rzeczywista",                          "actual"],

  // — S —
  ["sam",                                  "alone / oneself"],
  ["siebie",                               "oneself"],
  ["siedem",                               "7",                                          "7️⃣",     "numbers"],
  ["siedemset",                            "700",                                        "7️⃣0️⃣0️⃣", "numbers"],
  ["siedemdziesiąt",                       "70",                                         "7️⃣0️⃣",   "numbers"],
  ["siedemnaście",                         "17",                                         "1️⃣7️⃣",   "numbers"],
  ["skąd",                                 "where from"],
  ["słaby",                                "weak",                                       "🥀"],
  ["słodki",                               "sweet",                                      "🍭"],
  ["słonecznie",                           "sunny",                                      "☀️",     "weather"],
  ["słony",                                "salty",                                      "🧂"],
  ["smutny",                               "sad",                                        "😢"],
  ["spodnie",                              "trousers",                                   "👖"],
  ["srebrny",                              "silver",                                     "🥈"],
  ["stary",                                "old",                                        "👴"],
  ["sto",                                  "100",                                        "💯",     "numbers"],
  ["Stop!",                                "Stop!",                                      "🛑",     "nuclear"],
  ["stopnie",                              "degrees",                                    "🌡️",     "weather"],
  ["suchy",                                "dry",                                        "🏜️",     "weather"],
  ["swój",                                 "one's own"],
  ["szary",                                "gray",                                       "🩶"],
  ["szeroki",                              "wide",                                       "↔️"],
  ["szesnaście",                           "16",                                         "1️⃣6️⃣",   "numbers"],
  ["sześć",                                "6",                                          "6️⃣",     "numbers"],
  ["sześćset",                             "600",                                        "6️⃣0️⃣0️⃣", "numbers"],
  ["sześćdziesiąt",                        "60",                                         "6️⃣0️⃣",   "numbers"],
  ["sztuczny",                             "artificial",                                 "🤖"],
  ["szybki",                               "fast",                                       "🚀"],

  // — Ś —
  ["słońca",                               "sun",                                        "☀️",     "weather"],
  ["średnie",                              "medium",                                               "weather"],
  ["świeży",                               "fresh",                                      "🥬"],

  // — T —
  ["ta",                                   "this (fem.)",                           "f"],
  ["Tak",                                  "Yes",                                        "👍"],
  ["taki",                                 "such"],
  ["także",                                "also"],
  ["tam",                                  "there",                                      "👉📍"],
  ["tamci",                                "those (masc.)",                         "m"],
  ["tamta",                                "that (fem.)",                           "f"],
  ["tamte",                                "those (non-masc.)"],
  ["tamten",                               "that (masc.)",                          "m"],
  ["tamto",                                "that (neut.)",                          "n"],
  ["tani",                                 "cheap",                                      "🏷️"],
  ["te",                                   "these (non-masc.)"],       
  ["ten",                                  "this (masc.)",                          "m"],         
  ["tędy",                                 "this way"],
  ["teraz",                                "now",                                        "⏰",     "calendar"],
  ["też",                                  "also / too"],
  ["to",                                   "this (neut.) / it",                     "n"],
  ["toaleta / ubikacja",                   "toilet / restroom",                     "f", "🚻"],
  ["trudny",                               "difficult",                                  "🧗"],
  ["trzeci",                               "3rd",                                      "🥉"],
  ["trzy",                                 "3",                                          "3️⃣",     "numbers"],
  ["trzydzieści",                          "30",                                         "3️⃣0️⃣",   "numbers"],
  ["trzynaście",                           "13",                                         "1️⃣3️⃣",   "numbers"],
  ["trzysta",                              "300",                                        "3️⃣0️⃣0️⃣", "numbers"],
  ["tu / tutaj",                           "here",                                       "📍"],
  ["twardy",                               "hard",                                       "🪨"],
  ["twój",                                 "your"],
  ["ty",                                   "you (singular)",                             "👉"],
  ["tygodnie (2,3,4) / tygodni",           "weeks"],
  ["tylko",                                "only"],

  // — U —
  ["umiarkowana",                          "moderate",                                              "weather"],
  ["usta",                                 "mouth",                                      "👄"],
  ["Uwaga!",                               "Caution! / Attention!",                      "📢⚠️",   "nuclear"],

  // — W —
  ["w",                                    "in"],
  ["w chwili widarzenie",                  "at the time of the event"],
  ["warunki",                              "conditions",                                           "weather"],
  ["wasz",                                 "your (plural)"],
  ["ważny",                                "important",                                  "❗"],
  ["wąski",                                "narrow"],
  ["wcześniej",                            "early"],
  ["wczoraj",                              "yesterday",                                 "◀️📅",   "calendar"],
  ["według",                               "according to"],
  ["wesoły",                               "cheerful",                                  "😄"],
  ["wewnętrzny",                           "internal"],
  ["wielki",                               "great / huge",                              "🏔️"],
  ["więc",                                 "so / therefore"],
  ["własny",                               "own"],
  ["włosy",                                "hair",                                      "💇"],
  ["wolny",                                "slow / free",                               "🐢"],
  ["wreszcie",                             "finally"],
  ["wschód księżyca",                      "moonrise",                             "m", "🌙⬆️",   "weather"],
  ["wschód słońca",                        "sunrise",                              "m", "🌅",     "weather"],
  ["wszędzie",                             "everywhere",                                "🌍📍"],
  ["wszyscy",                              "everyone"],
  ["wszystko",                             "everything"],
  ["wśród",                                "among"],
  ["wtedy",                                "then / at that time"],
  ["wy",                                   "you (plural)"],
  ["wyjście awaryjne",                     "emergency exit",                       "n", "🚨🚪",   "nuclear"],
  ["wyłączenie awaryjne",                  "emergency shutdown (scram)",           "n", "🛑⚛️",   "nuclear"],
  ["wysoki",                               "tall / high",                               "🦒"],

  // — Z —
  ["z",                                    "with / from"],
  ["za",                                   "behind / for"],
  ["zachód słońca",                        "sunset",                               "m", "🌇",     "weather"],
  ["zajęty",                               "busy",                                      "⌛"],
  ["zamknięty",                            "closed",                                    "🔒"],
  ["zawsze",                               "always"],
  ["zbyt",                                 "too (excessively)"],
  ["zdrowy",                               "healthy",                                   "💪🍎"],
  ["zero",                                 "0",                                         "0️⃣",     "numbers"],
  ["zewnętrzny",                           "external"],
  ["zielony",                              "green",                                     "🟢"],
  ["zimny",                                "cold",                                      "🥶"],
  ["złoty",                                "gold",                                      "🥇"],
  ["zły",                                  "bad / angry",                               "👎😠"],
  ["znowu",                                "again"],
  ["Zrozumiałem",                          "Understood (said by a man)",                "🫡"],

  // — Ż —
  ["żaden",                                "none"],
  ["że",                                   "that (conjunction)"],
  ["żeby",                                 "so that / in order to"],
  ["żółty",                                "yellow",                                    "🟡"],
];
(function dedupeCommonWords(){
  const seen=new Set(), keep=[];
  for(const w of COMMON_WORDS){ const k=String(w[0]).toLowerCase(); if(seen.has(k)) continue; seen.add(k); keep.push(w); }
  COMMON_WORDS.length=0; COMMON_WORDS.push(...keep);
})();
