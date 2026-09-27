/* =====================================================================
   possessives.js — your possessive bank for Nuklearny Polski
   ---------------------------------------------------------------------
   THIS FILE IS YOURS TO EDIT, just like words.js, verbs.js and nouns.js.
   Possessives (my, your, his, her, our, their…) live here instead of in
   words.js because most of them change form to match their noun.

   Each possessive entry:
     en:      the English meaning
     emoji:   OPTIONAL meaning emoji (answer side of the flashcard)
     nom:     the dictionary form (masculine nominative singular)
     tags:    OPTIONAL extra tags, e.g. tags:["formal"], and "note:..."
     decl:    OPTIONAL case tables. Leave decl out entirely for a word
              that never changes (jego, jej, ich, Pana…) — it gets just
              a word card. EVERY ROW IS OPTIONAL. Each row has FIVE
              columns, matching the noun it describes:

                [ masculine, feminine, neuter, men pl., other pl. ]

              "men pl." = a group with at least one man (moi, nasi)
              "other pl." = things, women, animals (moje, nasze)
              Write "—" for a form that doesn't exist (it's skipped).
              Masculine accusative: things use the nominative form,
              people/animals the genitive, so it's written "mój / mojego".

     Recognized row names (shown on flashcards in this order):
       nom — Nominative  (subject:         mój raport jest gotowy)
       gen — Genitive    (of / there's no: nie mam twojej procedury)
       dat — Dative      (to / for:        dziękuję naszemu zespołowi)
       acc — Accusative  (direct object:   czytam naszą procedurę)
       ins — Instrumental(with:            z moim kierownikiem)
       loc — Locative    (in / on / about: w naszej elektrowni)

   Flashcards (handled by index.html):
     • Every entry gets a word card: "my" → mój.
     • Each individual FORM also becomes its own flashcard: the front shows
       the case, column and English ("Genitive · Feminine — my"), the
       answer is that single form (mojej). The card is colored by gender.
     • Choose "Word only" or "All forms" under "Possessive cards" on the
       Flashcards page.

   Grammar reminders:
     • mój, twój, swój share one pattern (…im, …ich); nasz, wasz another
       (…ym, …ych).
     • jego, jej, ich never change, and never turn into niego / niej / nich
       after a preposition: z jego kierownikiem.
     • swój = "one's own", used when the owner is the sentence's subject:
       On czyta swój raport (his own) vs. On czyta jego raport (someone
       else's). swój is never part of the subject, so it has no nom row.
   ===================================================================== */

const POSSESSIVE_BANK = [
  // — Change form to match the noun —

  { en:"my", nom:"mój",
    decl:{ //  masculine          feminine    neuter      men pl.     other pl.
      nom:["mój",             "moja",     "moje",     "moi",      "moje"],
      gen:["mojego",          "mojej",    "mojego",   "moich",    "moich"],
      dat:["mojemu",          "mojej",    "mojemu",   "moim",     "moim"],
      acc:["mój / mojego",    "moją",     "moje",     "moich",    "moje"],
      ins:["moim",            "moją",     "moim",     "moimi",    "moimi"],
      loc:["moim",            "mojej",    "moim",     "moich",    "moich"],
    } },

  { en:"your (one person, informal)", nom:"twój",
    decl:{ //  masculine          feminine    neuter      men pl.     other pl.
      nom:["twój",            "twoja",    "twoje",    "twoi",     "twoje"],
      gen:["twojego",         "twojej",   "twojego",  "twoich",   "twoich"],
      dat:["twojemu",         "twojej",   "twojemu",  "twoim",    "twoim"],
      acc:["twój / twojego",  "twoją",    "twoje",    "twoich",   "twoje"],
      ins:["twoim",           "twoją",    "twoim",    "twoimi",   "twoimi"],
      loc:["twoim",           "twojej",   "twoim",    "twoich",   "twoich"],
    } },

  { en:"one's own", nom:"swój", tags:["note:Used when the owner is the subject: Sprawdzam swój raport."],
    decl:{ //  masculine          feminine    neuter      men pl.     other pl.
      gen:["swojego",         "swojej",   "swojego",  "swoich",   "swoich"],
      dat:["swojemu",         "swojej",   "swojemu",  "swoim",    "swoim"],
      acc:["swój / swojego",  "swoją",    "swoje",    "swoich",   "swoje"],
      ins:["swoim",           "swoją",    "swoim",    "swoimi",   "swoimi"],
      loc:["swoim",           "swojej",   "swoim",    "swoich",   "swoich"],
    } },

  { en:"our", nom:"nasz",
    decl:{ //  masculine          feminine    neuter      men pl.     other pl.
      nom:["nasz",            "nasza",    "nasze",    "nasi",     "nasze"],
      gen:["naszego",         "naszej",   "naszego",  "naszych",  "naszych"],
      dat:["naszemu",         "naszej",   "naszemu",  "naszym",   "naszym"],
      acc:["nasz / naszego",  "naszą",    "nasze",    "naszych",  "nasze"],
      ins:["naszym",          "naszą",    "naszym",   "naszymi",  "naszymi"],
      loc:["naszym",          "naszej",   "naszym",   "naszych",  "naszych"],
    } },

  { en:"your (plural, informal)", nom:"wasz",
    decl:{ //  masculine          feminine    neuter      men pl.     other pl.
      nom:["wasz",            "wasza",    "wasze",    "wasi",     "wasze"],
      gen:["waszego",         "waszej",   "waszego",  "waszych",  "waszych"],
      dat:["waszemu",         "waszej",   "waszemu",  "waszym",   "waszym"],
      acc:["wasz / waszego",  "waszą",    "wasze",    "waszych",  "wasze"],
      ins:["waszym",          "waszą",    "waszym",   "waszymi",  "waszymi"],
      loc:["waszym",          "waszej",   "waszym",   "waszych",  "waszych"],
    } },

  // — Never change —

  { en:"his / its", nom:"jego", tags:["note:Never changes: jego raport, jego procedura. After a preposition still jego (z jego kierownikiem)."] },

  { en:"her", nom:"jej", tags:["note:Never changes: jej raport, jej procedura, w jej biurze."] },

  { en:"their", nom:"ich", tags:["note:Never changes: ich raport, ich procedury."] },

  { en:"your (formal, to a man)", nom:"Pana", tags:["formal", "note:Czy to Pana raport? Goes before the noun and never changes."] },

  { en:"your (formal, to a woman)", nom:"Pani", tags:["formal", "note:Czy to Pani raport? Goes before the noun and never changes."] },

  { en:"your (formal, to a group)", nom:"Państwa", tags:["formal", "note:Czy to Państwa raport? Goes before the noun and never changes."] },

];
