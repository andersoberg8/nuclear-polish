/* =====================================================================
   pimsleur.js — "Audio units": 30-minute listen-and-repeat lessons
   for Nuklearny Polski.
   ---------------------------------------------------------------------
   THIS FILE IS YOURS TO EDIT. It carries both the lesson scripts (top)
   and the player that runs them (bottom). index.html only needs the one
   line <script src="pimsleur.js"></script> — keep all the app files
   together and upload this one too when you publish.

   HOW A UNIT WORKS
   ----------------
   A unit is an ordered list of steps. The player speaks each step out
   loud with your browser's voices — English for the instructor, Polish
   for the model speaker — and leaves silence where you are meant to
   talk. Nothing is shown on screen unless you turn on "Show text".

   STEP TYPES
   ----------
     {t:"n", say:"..."}
         The instructor, in English. Explanations and instructions.

     {t:"l", pl:"...", en:"...", pr:"..."}
         Listen only. Polish is spoken; no pause after it.

     {t:"r", pl:"...", en:"...", pr:"...", x:2}
         Listen and repeat. Polish is spoken, then you get a silence
         about as long as the phrase to say it back. x:2 does that
         twice (default 1).

     {t:"q", ask:"How do you say ...?", pl:"...", en:"...", pr:"..."}
         Anticipation drill — the heart of the method. The instructor
         asks in English, you get silence to answer from memory, then
         the model speaker gives the answer and you repeat it.

     {t:"c", who:"A", pl:"...", en:"..."}
         A line of the opening/closing conversation. Listen only.

     {t:"s", sec:2}
         Silence, in seconds.

   FIELDS
     pl  Polish, exactly as it should be spoken.
     en  Its English meaning. Shown in the text panel; never spoken.
     pr  Rough English respelling for the text panel. CAPS = stressed
         syllable. Optional.

   WRITING A GOOD UNIT
     • Introduce a word, drill it, then bring it back after 3 steps,
       then 8, then 20, then 60. That widening gap is what makes it
       stick — it is not padding, so don't collapse it.
     • Build long words backwards from the last syllable.
     • Never ask for something that hasn't been taught in this unit or
       an earlier one.
     • Aim for roughly 200 steps ≈ 30 minutes.
   ===================================================================== */

const AUDIO_UNITS = [
{
  id: "au1",
  num: 1,
  title: "Do you speak English?",
  cat: "every",
  desc: "Your first day on site. Greet a colleague, admit you don't speak much Polish, and get the conversation going anyway.",
  goals: [
    "Greet someone and say goodbye",
    "Ask whether someone speaks English",
    "Say you speak and understand a little Polish",
    "Say you don't understand, and ask for it again",
    "Say what you do for a living"
  ],
  steps: [

  /* ---------- OPENING CONVERSATION ---------- */
  {t:"n", say:"Welcome to Nuclear Polish, Unit One. This is a listening and speaking lesson, so there is nothing to read. Put headphones on if you can, and sit somewhere you can talk out loud. Speaking out loud is not optional here — it is the whole exercise."},
  {t:"n", say:"Listen to this conversation. An American engineer has just arrived at a Polish power plant and stops a colleague in the corridor. Don't try to understand every word. Just listen."},
  {t:"s", sec:1},
  {t:"c", who:"A", pl:"Przepraszam, czy pani mówi po angielsku?", en:"Excuse me, do you speak English?"},
  {t:"c", who:"B", pl:"Nie, nie mówię po angielsku.", en:"No, I don't speak English."},
  {t:"c", who:"A", pl:"Rozumiem trochę po polsku.", en:"I understand a little Polish."},
  {t:"c", who:"B", pl:"Pan mówi po polsku? Bardzo dobrze!", en:"You speak Polish? Very good!"},
  {t:"c", who:"A", pl:"Tak, trochę. Dziękuję.", en:"Yes, a little. Thank you."},
  {t:"s", sec:1},
  {t:"n", say:"In about thirty minutes you'll be able to say everything you just heard, and recognise it when a Polish colleague says it to you. Let's begin."},

  /* ---------- 1. DZIEŃ DOBRY ---------- */
  {t:"n", say:"Listen to the Polish for 'good day'. This is what you say walking into an office, into the control room, or up to the security desk. Just listen."},
  {t:"l", pl:"Dzień dobry.", en:"Good day. / Hello.", pr:"jyen DOH-brih"},
  {t:"n", say:"Now say it after the speaker. You'll hear the phrase, and then you'll have a silence about as long as the phrase to say it back."},
  {t:"r", pl:"Dzień dobry.", en:"Good day. / Hello.", pr:"jyen DOH-brih", x:2},
  {t:"n", say:"Let's take that apart. The first word means 'day'."},
  {t:"r", pl:"Dzień", en:"day", pr:"jyen", x:2},
  {t:"n", say:"Notice the d-z at the front. That's a single sound in Polish, like the j in 'jeans'. Not d, then z. Say the word again."},
  {t:"r", pl:"Dzień", en:"day", pr:"jyen"},
  {t:"n", say:"And the second word means 'good'."},
  {t:"r", pl:"dobry", en:"good", pr:"DOH-brih", x:2},
  {t:"n", say:"The stress in Polish is almost always on the second-to-last syllable. DO-bry. That rule will hold for nearly every word in this course."},
  {t:"r", pl:"dobry", en:"good", pr:"DOH-brih"},
  {t:"n", say:"Now put the two together."},
  {t:"r", pl:"Dzień dobry.", en:"Good day.", pr:"jyen DOH-brih"},
  {t:"q", ask:"How do you say 'good day'?", pl:"Dzień dobry.", en:"Good day.", pr:"jyen DOH-brih"},

  /* ---------- 1b. GREETINGS BY TIME AND RANK ---------- */
  {t:"n", say:"Dzień dobry works all day, right up until evening. After dark you switch. Listen."},
  {t:"l", pl:"Dobry wieczór.", en:"Good evening.", pr:"DOH-brih VYEH-choor"},
  {t:"r", pl:"Dobry wieczór.", en:"Good evening.", pr:"DOH-brih VYEH-choor", x:2},
  {t:"n", say:"Same word 'dobry' you already know, with 'evening' after it. If you're coming in for a night shift handover, that's your greeting."},
  {t:"q", ask:"You arrive at nine in the evening. Greet the shift.", pl:"Dobry wieczór.", en:"Good evening.", pr:"DOH-brih VYEH-choor"},
  {t:"n", say:"There's also a casual one, the equivalent of 'hi'. Listen."},
  {t:"l", pl:"Cześć", en:"Hi. / Bye.", pr:"cheshch"},
  {t:"r", pl:"Cześć", en:"Hi.", pr:"cheshch", x:2},
  {t:"n", say:"Be careful with that one. Cześć is for friends and for people who have invited you to be informal. Use it on a plant manager you met yesterday and it lands wrong. When in doubt at work, use dzień dobry — nobody has ever been offended by being treated too politely."},
  {t:"q", ask:"You're walking into a meeting with people you've just met. Greet them.", pl:"Dzień dobry.", en:"Good day.", pr:"jyen DOH-brih"},

  /* ---------- 2. PRZEPRASZAM ---------- */
  {t:"n", say:"Now, the word for 'excuse me'. It's a long one, so we'll build it from the end. Listen."},
  {t:"l", pl:"Przepraszam", en:"Excuse me. / I'm sorry.", pr:"psheh-PRAH-shahm"},
  {t:"n", say:"Repeat just the last part after the speaker."},
  {t:"r", pl:"szam", en:"(final syllable)", pr:"shahm", x:2},
  {t:"n", say:"Now the last two parts."},
  {t:"r", pl:"praszam", en:"(last two syllables)", pr:"PRAH-shahm", x:2},
  {t:"n", say:"And now the whole word."},
  {t:"r", pl:"Przepraszam", en:"Excuse me.", pr:"psheh-PRAH-shahm", x:2},
  {t:"n", say:"That p-r-z at the start is just a 'psh' sound. Don't try to say each letter. Once more."},
  {t:"r", pl:"Przepraszam", en:"Excuse me.", pr:"psheh-PRAH-shahm"},
  {t:"n", say:"This one word covers a lot of ground — excuse me, sorry, pardon me, and 'may I get past you'. You'll use it constantly."},
  {t:"q", ask:"How would you get a colleague's attention politely?", pl:"Przepraszam", en:"Excuse me.", pr:"psheh-PRAH-shahm"},
  {t:"q", ask:"And how do you say 'good day'?", pl:"Dzień dobry.", en:"Good day.", pr:"jyen DOH-brih"},

  /* ---------- 3. PO ANGIELSKU ---------- */
  {t:"n", say:"Now, the word 'English' — as in, speaking English. In Polish it comes out as something more like 'in the English way'. Listen."},
  {t:"l", pl:"po angielsku", en:"in English", pr:"poh ahn-GYEL-skoo"},
  {t:"n", say:"Repeat the second word first."},
  {t:"r", pl:"angielsku", en:"English (in this form)", pr:"ahn-GYEL-skoo", x:2},
  {t:"n", say:"Now with the little word in front."},
  {t:"r", pl:"po angielsku", en:"in English", pr:"poh ahn-GYEL-skoo", x:2},
  {t:"n", say:"Now the same shape for Polish. Listen."},
  {t:"l", pl:"po polsku", en:"in Polish", pr:"poh POL-skoo"},
  {t:"r", pl:"po polsku", en:"in Polish", pr:"poh POL-skoo", x:2},
  {t:"q", ask:"How do you say 'in English'?", pl:"po angielsku", en:"in English", pr:"poh ahn-GYEL-skoo"},
  {t:"q", ask:"And 'in Polish'?", pl:"po polsku", en:"in Polish", pr:"poh POL-skoo"},

  /* ---------- 4. PAN / PANI ---------- */
  {t:"n", say:"Here's something Polish does that English doesn't. To a stranger, or to anyone at work you're not close to, you do not say 'you'. Saying 'you' to a colleague you've just met sounds blunt, almost rude."},
  {t:"n", say:"Instead you use a word meaning roughly 'sir'. Listen."},
  {t:"l", pl:"pan", en:"you (to a man) / sir", pr:"pahn"},
  {t:"r", pl:"pan", en:"you (to a man)", pr:"pahn", x:2},
  {t:"n", say:"And to a woman."},
  {t:"l", pl:"pani", en:"you (to a woman) / madam", pr:"PAH-nee"},
  {t:"r", pl:"pani", en:"you (to a woman)", pr:"PAH-nee", x:2},
  {t:"n", say:"Pan to a man. Pani to a woman. Get this wrong and you'll be understood, but you'll sound like you've just landed. Which would you use speaking to a woman?"},
  {t:"q", ask:"Speaking to a woman — which word?", pl:"pani", en:"you (to a woman)", pr:"PAH-nee"},
  {t:"q", ask:"And speaking to a man?", pl:"pan", en:"you (to a man)", pr:"pahn"},

  /* ---------- 5. MÓWI ---------- */
  {t:"n", say:"Now the verb 'to speak'. Here it is in the form you use with pan and pani. Listen."},
  {t:"l", pl:"mówi", en:"speaks / you speak (formal)", pr:"MOO-vee"},
  {t:"r", pl:"mówi", en:"speaks", pr:"MOO-vee", x:2},
  {t:"n", say:"The o with the accent over it is just an 'oo' sound. Moo-vee. Now put it with 'pan' — literally 'sir speaks'."},
  {t:"r", pl:"pan mówi", en:"you speak (to a man)", pr:"pahn MOO-vee", x:2},
  {t:"n", say:"And with 'pani'."},
  {t:"r", pl:"pani mówi", en:"you speak (to a woman)", pr:"PAH-nee MOO-vee", x:2},
  {t:"n", say:"Now try 'you speak Polish' — to a man."},
  {t:"q", ask:"Say 'you speak Polish' — to a man.", pl:"Pan mówi po polsku.", en:"You speak Polish.", pr:"pahn MOO-vee poh POL-skoo"},
  {t:"n", say:"And to a woman, 'you speak English'."},
  {t:"q", ask:"Say 'you speak English' — to a woman.", pl:"Pani mówi po angielsku.", en:"You speak English.", pr:"PAH-nee MOO-vee poh ahn-GYEL-skoo"},

  /* ---------- 6. CZY — QUESTIONS ---------- */
  {t:"n", say:"To turn that into a question, Polish puts one little word at the front. It has no English translation — think of it as a spoken question mark. Listen."},
  {t:"l", pl:"czy", en:"(question marker)", pr:"chih"},
  {t:"r", pl:"czy", en:"(question marker)", pr:"chih", x:2},
  {t:"n", say:"Now: do you speak English? To a woman."},
  {t:"l", pl:"Czy pani mówi po angielsku?", en:"Do you speak English?", pr:"chih PAH-nee MOO-vee poh ahn-GYEL-skoo"},
  {t:"r", pl:"Czy pani mówi po angielsku?", en:"Do you speak English?", pr:"chih PAH-nee MOO-vee poh ahn-GYEL-skoo", x:2},
  {t:"q", ask:"Ask a man whether he speaks English.", pl:"Czy pan mówi po angielsku?", en:"Do you speak English?", pr:"chih pahn MOO-vee poh ahn-GYEL-skoo"},
  {t:"n", say:"Now put the whole opening together — excuse me, do you speak English, to a woman."},
  {t:"q", ask:"Excuse me, do you speak English? To a woman.", pl:"Przepraszam, czy pani mówi po angielsku?", en:"Excuse me, do you speak English?", pr:"psheh-PRAH-shahm, chih PAH-nee MOO-vee poh ahn-GYEL-skoo"},
  {t:"n", say:"That's the first line of the conversation you heard. Say it once more."},
  {t:"r", pl:"Przepraszam, czy pani mówi po angielsku?", en:"Excuse me, do you speak English?", pr:"psheh-PRAH-shahm, chih PAH-nee MOO-vee poh ahn-GYEL-skoo"},

  /* ---------- 7. TAK / NIE ---------- */
  {t:"n", say:"Yes."},
  {t:"r", pl:"Tak", en:"yes", pr:"tahk", x:2},
  {t:"n", say:"And no."},
  {t:"r", pl:"Nie", en:"no / not", pr:"nyeh", x:2},
  {t:"n", say:"That word does double duty — it's 'no', and it's also the 'not' you put in front of a verb. Remember it."},
  {t:"q", ask:"How do you say 'yes'?", pl:"Tak", en:"yes", pr:"tahk"},
  {t:"q", ask:"And 'no'?", pl:"Nie", en:"no", pr:"nyeh"},

  /* ---------- 8. MÓWIĘ ---------- */
  {t:"n", say:"Now, 'I speak'. The verb changes its ending — this is the single most important thing about Polish verbs. Listen."},
  {t:"l", pl:"mówię", en:"I speak", pr:"MOO-vyeh"},
  {t:"r", pl:"mówię", en:"I speak", pr:"MOO-vyeh", x:2},
  {t:"n", say:"Compare the two. Mówi — he speaks, you speak. Mówię — I speak. The ending carries the person, so Polish usually drops the word for 'I' altogether."},
  {t:"r", pl:"mówię po polsku", en:"I speak Polish", pr:"MOO-vyeh poh POL-skoo", x:2},
  {t:"n", say:"Now make that negative — put 'nie' in front."},
  {t:"q", ask:"Say 'I don't speak Polish'.", pl:"Nie mówię po polsku.", en:"I don't speak Polish.", pr:"nyeh MOO-vyeh poh POL-skoo"},
  {t:"q", ask:"Say 'I don't speak English'.", pl:"Nie mówię po angielsku.", en:"I don't speak English.", pr:"nyeh MOO-vyeh poh ahn-GYEL-skoo"},
  {t:"n", say:"And the full answer from the conversation — no, I don't speak English."},
  {t:"q", ask:"Say 'No, I don't speak English'.", pl:"Nie, nie mówię po angielsku.", en:"No, I don't speak English.", pr:"nyeh, nyeh MOO-vyeh poh ahn-GYEL-skoo"},
  {t:"q", ask:"Now ask a man whether he speaks Polish.", pl:"Czy pan mówi po polsku?", en:"Do you speak Polish?", pr:"chih pahn MOO-vee poh POL-skoo"},
  {t:"n", say:"One more word to slot in there — 'only'."},
  {t:"l", pl:"tylko", en:"only", pr:"TIL-koh"},
  {t:"r", pl:"tylko", en:"only", pr:"TIL-koh", x:2},
  {t:"n", say:"Now: I only speak English."},
  {t:"r", pl:"Mówię tylko po angielsku.", en:"I only speak English.", pr:"MOO-vyeh TIL-koh poh ahn-GYEL-skoo", x:2},
  {t:"q", ask:"Say 'I only speak English'.", pl:"Mówię tylko po angielsku.", en:"I only speak English.", pr:"MOO-vyeh TIL-koh poh ahn-GYEL-skoo"},
  {t:"q", ask:"And how do you say 'excuse me'?", pl:"Przepraszam", en:"Excuse me.", pr:"psheh-PRAH-shahm"},

  /* ---------- 9. TROCHĘ ---------- */
  {t:"n", say:"'I don't speak Polish' shuts the conversation down. Here's the phrase that keeps it open. First, 'a little'."},
  {t:"l", pl:"trochę", en:"a little", pr:"TROH-heh"},
  {t:"r", pl:"trochę", en:"a little", pr:"TROH-heh", x:2},
  {t:"n", say:"The c-h in the middle is a raspy h, like the ch in the Scottish 'loch'. And that hook under the final e — in ordinary speech at the end of a word it barely sounds. TROH-heh. Again."},
  {t:"r", pl:"trochę", en:"a little", pr:"TROH-heh"},
  {t:"n", say:"Now: I speak a little Polish."},
  {t:"r", pl:"Mówię trochę po polsku.", en:"I speak a little Polish.", pr:"MOO-vyeh TROH-heh poh POL-skoo", x:2},
  {t:"q", ask:"Say 'I speak a little Polish'.", pl:"Mówię trochę po polsku.", en:"I speak a little Polish.", pr:"MOO-vyeh TROH-heh poh POL-skoo"},
  {t:"q", ask:"How do you say 'excuse me'?", pl:"Przepraszam", en:"Excuse me.", pr:"psheh-PRAH-shahm"},
  {t:"q", ask:"Say 'yes, a little'.", pl:"Tak, trochę.", en:"Yes, a little.", pr:"tahk, TROH-heh"},

  /* ---------- 10. ROZUMIEM ---------- */
  {t:"n", say:"Now a word you will use every single day on this project — 'I understand'. Listen."},
  {t:"l", pl:"rozumiem", en:"I understand", pr:"roh-ZOO-myem"},
  {t:"r", pl:"rozumiem", en:"I understand", pr:"roh-ZOO-myem", x:2},
  {t:"n", say:"Same ending as mówię — that final m tells you it's 'I'. Now say 'I understand a little Polish'."},
  {t:"q", ask:"Say 'I understand a little Polish'.", pl:"Rozumiem trochę po polsku.", en:"I understand a little Polish.", pr:"roh-ZOO-myem TROH-heh poh POL-skoo"},
  {t:"n", say:"That was the engineer's second line. Now the negative — and this one matters more than anything else in this unit. 'I don't understand.'"},
  {t:"l", pl:"Nie rozumiem.", en:"I don't understand.", pr:"nyeh roh-ZOO-myem"},
  {t:"r", pl:"Nie rozumiem.", en:"I don't understand.", pr:"nyeh roh-ZOO-myem", x:2},
  {t:"n", say:"Learn to say that one instantly and without embarrassment. In a control room, guessing at what someone meant is far worse than admitting you missed it."},
  {t:"q", ask:"Say 'I don't understand'.", pl:"Nie rozumiem.", en:"I don't understand.", pr:"nyeh roh-ZOO-myem"},
  {t:"q", ask:"Ask a woman whether she understands English.", pl:"Czy pani rozumie po angielsku?", en:"Do you understand English?", pr:"chih PAH-nee roh-ZOO-myeh poh ahn-GYEL-skoo"},
  {t:"n", say:"Notice the ending changed again — rozumiem for me, rozumie for pan or pani. Say that once more."},
  {t:"r", pl:"Czy pani rozumie po angielsku?", en:"Do you understand English?", pr:"chih PAH-nee roh-ZOO-myeh poh ahn-GYEL-skoo"},
  {t:"q", ask:"And how do you say 'good day'?", pl:"Dzień dobry.", en:"Good day.", pr:"jyen DOH-brih"},

  /* ---------- 11. DZIĘKUJĘ ---------- */
  {t:"n", say:"Thank you."},
  {t:"l", pl:"Dziękuję", en:"Thank you.", pr:"jen-KOO-yeh"},
  {t:"r", pl:"Dziękuję", en:"Thank you.", pr:"jen-KOO-yeh", x:2},
  {t:"n", say:"Same d-z as in dzień — a j sound. Jen-KOO-yeh. Again."},
  {t:"r", pl:"Dziękuję", en:"Thank you.", pr:"jen-KOO-yeh"},
  {t:"n", say:"And the reply — 'please', which also serves as 'you're welcome' and 'here you go'."},
  {t:"r", pl:"Proszę", en:"Please. / You're welcome.", pr:"PROH-sheh", x:2},
  {t:"q", ask:"Say 'thank you'.", pl:"Dziękuję", en:"Thank you.", pr:"jen-KOO-yeh"},
  {t:"q", ask:"Say 'yes, a little — thank you'.", pl:"Tak, trochę. Dziękuję.", en:"Yes, a little. Thank you.", pr:"tahk, TROH-heh. jen-KOO-yeh"},

  /* ---------- 12. JESZCZE RAZ ---------- */
  {t:"n", say:"Here's the phrase that follows 'I don't understand'. It means 'once more'."},
  {t:"l", pl:"jeszcze raz", en:"once more / again", pr:"YESH-cheh rahs"},
  {t:"r", pl:"jeszcze raz", en:"once more", pr:"YESH-cheh rahs", x:2},
  {t:"n", say:"Now add 'please' to make it polite."},
  {t:"r", pl:"Jeszcze raz, proszę.", en:"Once more, please.", pr:"YESH-cheh rahs, PROH-sheh", x:2},
  {t:"n", say:"Those two sentences together will get you through your first month on site. Try them."},
  {t:"q", ask:"Say 'I don't understand. Once more, please.'", pl:"Nie rozumiem. Jeszcze raz, proszę.", en:"I don't understand. Once more, please.", pr:"nyeh roh-ZOO-myem. YESH-cheh rahs, PROH-sheh"},

  /* ---------- 13. BARDZO DOBRZE ---------- */
  {t:"n", say:"When your Polish colleague is impressed, this is what you'll hear. 'Very good.'"},
  {t:"l", pl:"Bardzo dobrze!", en:"Very good!", pr:"BAR-dzoh DOB-zheh"},
  {t:"r", pl:"Bardzo dobrze!", en:"Very good!", pr:"BAR-dzoh DOB-zheh", x:2},
  {t:"n", say:"You already know dobry — good. Dobrze is the same idea used as 'well' or 'fine'. On its own it also means 'okay, agreed'."},
  {t:"r", pl:"Dobrze.", en:"Okay. / Fine.", pr:"DOB-zheh"},
  {t:"q", ask:"How do you say 'very good'?", pl:"Bardzo dobrze!", en:"Very good!", pr:"BAR-dzoh DOB-zheh"},
  {t:"q", ask:"How do you say 'I don't understand'?", pl:"Nie rozumiem.", en:"I don't understand.", pr:"nyeh roh-ZOO-myem"},
  {t:"q", ask:"Ask a man whether he speaks English.", pl:"Czy pan mówi po angielsku?", en:"Do you speak English?", pr:"chih pahn MOO-vee poh ahn-GYEL-skoo"},

  /* ---------- 14. JESTEM INŻYNIEREM ---------- */
  {t:"n", say:"Now let's say what you do. First, 'I am'."},
  {t:"l", pl:"jestem", en:"I am", pr:"YES-tem"},
  {t:"r", pl:"jestem", en:"I am", pr:"YES-tem", x:2},
  {t:"n", say:"There's that -m ending for 'I' again. Now, 'engineer'. Build it from the end."},
  {t:"r", pl:"nierem", en:"(final syllables)", pr:"NYEH-rem", x:2},
  {t:"r", pl:"żynierem", en:"(last three syllables)", pr:"zhih-NYEH-rem", x:2},
  {t:"r", pl:"inżynierem", en:"engineer", pr:"een-zhih-NYEH-rem", x:2},
  {t:"n", say:"Now put it together — I am an engineer."},
  {t:"r", pl:"Jestem inżynierem.", en:"I am an engineer.", pr:"YES-tem een-zhih-NYEH-rem", x:2},
  {t:"n", say:"You may notice the word doesn't look like a plain dictionary word. After 'jestem', Polish nouns take a special ending — you'll meet it properly later. For now, learn the phrase whole."},
  {t:"q", ask:"Say 'I am an engineer'.", pl:"Jestem inżynierem.", en:"I am an engineer.", pr:"YES-tem een-zhih-NYEH-rem"},
  {t:"n", say:"And where you're from."},
  {t:"r", pl:"Jestem z Ameryki.", en:"I'm from America.", pr:"YES-tem z ah-MEH-rih-kee", x:2},
  {t:"q", ask:"Say 'I'm from America. I am an engineer.'", pl:"Jestem z Ameryki. Jestem inżynierem.", en:"I'm from America. I am an engineer.", pr:"YES-tem z ah-MEH-rih-kee. YES-tem een-zhih-NYEH-rem"},

  /* ---------- 14b. NAMES ---------- */
  {t:"n", say:"Now introduce yourself properly. Polish doesn't say 'my name is'. It says something closer to 'I am called'. Listen."},
  {t:"l", pl:"Nazywam się", en:"My name is / I am called", pr:"nah-ZIH-vahm sheh"},
  {t:"r", pl:"nazywam", en:"I call", pr:"nah-ZIH-vahm", x:2},
  {t:"r", pl:"Nazywam się", en:"My name is", pr:"nah-ZIH-vahm sheh", x:2},
  {t:"n", say:"There's that -m ending for 'I' a third time. Now put your own name on the end. The speaker will use Anders — you use yours."},
  {t:"r", pl:"Nazywam się Anders.", en:"My name is Anders.", pr:"nah-ZIH-vahm sheh AHN-ders", x:2},
  {t:"n", say:"And ask the other person. To a man."},
  {t:"l", pl:"Jak się pan nazywa?", en:"What's your name?", pr:"yahk sheh pahn nah-ZIH-vah"},
  {t:"r", pl:"Jak się pan nazywa?", en:"What's your name?", pr:"yahk sheh pahn nah-ZIH-vah", x:2},
  {t:"q", ask:"Ask a woman what her name is.", pl:"Jak się pani nazywa?", en:"What's your name?", pr:"yahk sheh PAH-nee nah-ZIH-vah"},
  {t:"n", say:"And when they tell you, this is what you say back. It means roughly 'pleased to meet you'."},
  {t:"l", pl:"Miło mi.", en:"Pleased to meet you.", pr:"MEE-woh mee"},
  {t:"r", pl:"Miło mi.", en:"Pleased to meet you.", pr:"MEE-woh mee", x:2},
  {t:"n", say:"That crossed l is a w sound — MEE-woh, not MEE-loh. It shows up everywhere in Polish, so get used to it now."},
  {t:"r", pl:"Miło mi.", en:"Pleased to meet you.", pr:"MEE-woh mee"},
  {t:"q", ask:"Say 'My name is Anders. Pleased to meet you.'", pl:"Nazywam się Anders. Miło mi.", en:"My name is Anders. Pleased to meet you.", pr:"nah-ZIH-vahm sheh AHN-ders. MEE-woh mee"},
  {t:"q", ask:"Say 'Good day. My name is Anders. I am an engineer.'", pl:"Dzień dobry. Nazywam się Anders. Jestem inżynierem.", en:"Good day. My name is Anders. I am an engineer.", pr:"jyen DOH-brih. nah-ZIH-vahm sheh AHN-ders. YES-tem een-zhih-NYEH-rem"},
  {t:"n", say:"That's a complete self-introduction. Learn it cold — you will give it dozens of times."},

  /* ---------- 15. DO WIDZENIA ---------- */
  {t:"n", say:"One more before we put it all together — goodbye."},
  {t:"l", pl:"Do widzenia.", en:"Goodbye.", pr:"doh vee-DZEH-nyah"},
  {t:"r", pl:"Do widzenia.", en:"Goodbye.", pr:"doh vee-DZEH-nyah", x:2},
  {t:"n", say:"That's the formal one, and formal is what you want at work. Say it once more."},
  {t:"r", pl:"Do widzenia.", en:"Goodbye.", pr:"doh vee-DZEH-nyah"},
  {t:"q", ask:"How do you say 'goodbye'?", pl:"Do widzenia.", en:"Goodbye.", pr:"doh vee-DZEH-nyah"},

  /* ---------- 16. MIXED REVIEW ---------- */
  {t:"n", say:"Now a review. These come quickly and out of order. Answer out loud before the speaker does — even if you're not sure. Guessing and being corrected is how this works."},
  {t:"q", ask:"Excuse me.", pl:"Przepraszam", en:"Excuse me.", pr:"psheh-PRAH-shahm"},
  {t:"q", ask:"Thank you.", pl:"Dziękuję", en:"Thank you.", pr:"jen-KOO-yeh"},
  {t:"q", ask:"I don't understand.", pl:"Nie rozumiem.", en:"I don't understand.", pr:"nyeh roh-ZOO-myem"},
  {t:"q", ask:"I speak a little Polish.", pl:"Mówię trochę po polsku.", en:"I speak a little Polish.", pr:"MOO-vyeh TROH-heh poh POL-skoo"},
  {t:"q", ask:"Good day.", pl:"Dzień dobry.", en:"Good day.", pr:"jyen DOH-brih"},
  {t:"q", ask:"Do you speak English? — to a woman.", pl:"Czy pani mówi po angielsku?", en:"Do you speak English?", pr:"chih PAH-nee MOO-vee poh ahn-GYEL-skoo"},
  {t:"q", ask:"I am an engineer.", pl:"Jestem inżynierem.", en:"I am an engineer.", pr:"YES-tem een-zhih-NYEH-rem"},
  {t:"q", ask:"No, I don't speak English.", pl:"Nie, nie mówię po angielsku.", en:"No, I don't speak English.", pr:"nyeh, nyeh MOO-vyeh poh ahn-GYEL-skoo"},
  {t:"q", ask:"Once more, please.", pl:"Jeszcze raz, proszę.", en:"Once more, please.", pr:"YESH-cheh rahs, PROH-sheh"},
  {t:"q", ask:"I understand a little Polish.", pl:"Rozumiem trochę po polsku.", en:"I understand a little Polish.", pr:"roh-ZOO-myem TROH-heh poh POL-skoo"},
  {t:"q", ask:"Goodbye.", pl:"Do widzenia.", en:"Goodbye.", pr:"doh vee-DZEH-nyah"},
  {t:"q", ask:"Very good!", pl:"Bardzo dobrze!", en:"Very good!", pr:"BAR-dzoh DOB-zheh"},
  {t:"q", ask:"Pleased to meet you.", pl:"Miło mi.", en:"Pleased to meet you.", pr:"MEE-woh mee"},
  {t:"q", ask:"Good evening.", pl:"Dobry wieczór.", en:"Good evening.", pr:"DOH-brih VYEH-choor"},
  {t:"q", ask:"My name is Anders.", pl:"Nazywam się Anders.", en:"My name is Anders.", pr:"nah-ZIH-vahm sheh AHN-ders"},
  {t:"q", ask:"I only speak English.", pl:"Mówię tylko po angielsku.", en:"I only speak English.", pr:"MOO-vyeh TIL-koh poh ahn-GYEL-skoo"},
  {t:"q", ask:"Ask a man what his name is.", pl:"Jak się pan nazywa?", en:"What's your name?", pr:"yahk sheh pahn nah-ZIH-vah"},
  {t:"q", ask:"Please. / You're welcome.", pl:"Proszę", en:"Please.", pr:"PROH-sheh"},
  {t:"q", ask:"Do you understand Polish? — to a woman.", pl:"Czy pani rozumie po polsku?", en:"Do you understand Polish?", pr:"chih PAH-nee roh-ZOO-myeh poh POL-skoo"},
  {t:"q", ask:"I'm from America.", pl:"Jestem z Ameryki.", en:"I'm from America.", pr:"YES-tem z ah-MEH-rih-kee"},

  /* ---------- 17. YOU TAKE A ROLE ---------- */
  {t:"n", say:"Now you're going to have the conversation yourself. You are the engineer. You'll hear the English of what you want to say, then say it in Polish. The Polish colleague will answer."},
  {t:"s", sec:1},
  {t:"n", say:"You're in the corridor. A woman is walking towards you. Stop her politely and ask if she speaks English."},
  {t:"q", ask:"Excuse me, do you speak English?", pl:"Przepraszam, czy pani mówi po angielsku?", en:"Excuse me, do you speak English?", pr:"psheh-PRAH-shahm, chih PAH-nee MOO-vee poh ahn-GYEL-skoo"},
  {t:"n", say:"She answers."},
  {t:"c", who:"B", pl:"Nie, nie mówię po angielsku.", en:"No, I don't speak English."},
  {t:"n", say:"Tell her you understand a little Polish."},
  {t:"q", ask:"I understand a little Polish.", pl:"Rozumiem trochę po polsku.", en:"I understand a little Polish.", pr:"roh-ZOO-myem TROH-heh poh POL-skoo"},
  {t:"n", say:"She's surprised."},
  {t:"c", who:"B", pl:"Pan mówi po polsku? Bardzo dobrze!", en:"You speak Polish? Very good!"},
  {t:"n", say:"Agree — yes, a little — and thank her."},
  {t:"q", ask:"Yes, a little. Thank you.", pl:"Tak, trochę. Dziękuję.", en:"Yes, a little. Thank you.", pr:"tahk, TROH-heh. jen-KOO-yeh"},
  {t:"n", say:"Now tell her what you do."},
  {t:"q", ask:"I am an engineer.", pl:"Jestem inżynierem.", en:"I am an engineer.", pr:"YES-tem een-zhih-NYEH-rem"},
  {t:"n", say:"She's needed elsewhere."},
  {t:"c", who:"B", pl:"Przepraszam. Do widzenia!", en:"Excuse me. Goodbye!"},
  {t:"n", say:"Say goodbye."},
  {t:"q", ask:"Goodbye.", pl:"Do widzenia.", en:"Goodbye.", pr:"doh vee-DZEH-nyah"},

  /* ---------- 17b. SECOND SCENE — A PROPER INTRODUCTION ---------- */
  {t:"s", sec:1},
  {t:"n", say:"One more scene. It's the following morning, and you're being introduced to a man from the operations team. Greet him."},
  {t:"q", ask:"Good day.", pl:"Dzień dobry.", en:"Good day.", pr:"jyen DOH-brih"},
  {t:"c", who:"B", pl:"Dzień dobry.", en:"Good day."},
  {t:"n", say:"Introduce yourself and say what you do."},
  {t:"q", ask:"My name is Anders. I am an engineer.", pl:"Nazywam się Anders. Jestem inżynierem.", en:"My name is Anders. I am an engineer.", pr:"nah-ZIH-vahm sheh AHN-ders. YES-tem een-zhih-NYEH-rem"},
  {t:"n", say:"Now ask him his name."},
  {t:"q", ask:"What's your name?", pl:"Jak się pan nazywa?", en:"What's your name?", pr:"yahk sheh pahn nah-ZIH-vah"},
  {t:"c", who:"B", pl:"Nazywam się Marek Kowalski.", en:"My name is Marek Kowalski."},
  {t:"n", say:"Tell him you're pleased to meet him."},
  {t:"q", ask:"Pleased to meet you.", pl:"Miło mi.", en:"Pleased to meet you.", pr:"MEE-woh mee"},
  {t:"n", say:"He says something quickly and you catch none of it."},
  {t:"c", who:"B", pl:"Bardzo mi miło. Czy pan jest tutaj pierwszy raz?", en:"Very pleased. Is this your first time here?"},
  {t:"n", say:"Don't guess. Tell him you don't understand, and ask for it again."},
  {t:"q", ask:"I don't understand. Once more, please.", pl:"Nie rozumiem. Jeszcze raz, proszę.", en:"I don't understand. Once more, please.", pr:"nyeh roh-ZOO-myem. YESH-cheh rahs, PROH-sheh"},
  {t:"n", say:"He slows down."},
  {t:"c", who:"B", pl:"Czy pan mówi po polsku?", en:"Do you speak Polish?"},
  {t:"n", say:"Tell him you speak a little Polish, and thank him."},
  {t:"q", ask:"I speak a little Polish. Thank you.", pl:"Mówię trochę po polsku. Dziękuję.", en:"I speak a little Polish. Thank you.", pr:"MOO-vyeh TROH-heh poh POL-skoo. jen-KOO-yeh"},
  {t:"c", who:"B", pl:"Bardzo dobrze! Do widzenia.", en:"Very good! Goodbye."},
  {t:"n", say:"And close it out."},
  {t:"q", ask:"Goodbye.", pl:"Do widzenia.", en:"Goodbye.", pr:"doh vee-DZEH-nyah"},

  /* ---------- 18. FINAL PASS ---------- */
  {t:"n", say:"Listen to the whole conversation once more, at normal speed. This time you should follow all of it."},
  {t:"s", sec:1},
  {t:"c", who:"A", pl:"Przepraszam, czy pani mówi po angielsku?", en:"Excuse me, do you speak English?"},
  {t:"c", who:"B", pl:"Nie, nie mówię po angielsku.", en:"No, I don't speak English."},
  {t:"c", who:"A", pl:"Rozumiem trochę po polsku.", en:"I understand a little Polish."},
  {t:"c", who:"B", pl:"Pan mówi po polsku? Bardzo dobrze!", en:"You speak Polish? Very good!"},
  {t:"c", who:"A", pl:"Tak, trochę. Dziękuję.", en:"Yes, a little. Thank you."},
  {t:"s", sec:1},
  {t:"n", say:"A few last ones, quickly."},
  {t:"q", ask:"Do you understand English? — to a man.", pl:"Czy pan rozumie po angielsku?", en:"Do you understand English?", pr:"chih pahn roh-ZOO-myeh poh ahn-GYEL-skoo"},
  {t:"q", ask:"I don't understand. Once more, please.", pl:"Nie rozumiem. Jeszcze raz, proszę.", en:"I don't understand. Once more, please.", pr:"nyeh roh-ZOO-myem. YESH-cheh rahs, PROH-sheh"},
  {t:"q", ask:"Good day. I'm from America.", pl:"Dzień dobry. Jestem z Ameryki.", en:"Good day. I'm from America.", pr:"jyen DOH-brih. YES-tem z ah-MEH-rih-kee"},
  {t:"q", ask:"Excuse me, do you speak English? — to a woman.", pl:"Przepraszam, czy pani mówi po angielsku?", en:"Excuse me, do you speak English?", pr:"psheh-PRAH-shahm, chih PAH-nee MOO-vee poh ahn-GYEL-skoo"},
  {t:"q", ask:"My name is Anders. Pleased to meet you.", pl:"Nazywam się Anders. Miło mi.", en:"My name is Anders. Pleased to meet you.", pr:"nah-ZIH-vahm sheh AHN-ders. MEE-woh mee"},
  {t:"q", ask:"Thank you. Goodbye.", pl:"Dziękuję. Do widzenia.", en:"Thank you. Goodbye.", pr:"jen-KOO-yeh. doh vee-DZEH-nyah"},
  {t:"q", ask:"And one last time — I speak a little Polish.", pl:"Mówię trochę po polsku.", en:"I speak a little Polish.", pr:"MOO-vyeh TROH-heh poh POL-skoo"},
  {t:"s", sec:1},
  {t:"n", say:"That's the end of Unit One. You now have enough Polish to open a conversation, admit you're lost, and ask for it again — which is genuinely most of what a first month on site requires."},
  {t:"n", say:"Do this unit again tomorrow before moving on. The second pass is where it sticks. Do widzenia!"}
  ]
}
];

/* =====================================================================
   THE PLAYER.  Nothing below here needs editing to add a unit.
   ===================================================================== */
(function(){
"use strict";

/* ---------------- state ---------------- */
var SKEY = "np_audio_v1";
var st = load();
function load(){
  try { return JSON.parse(localStorage.getItem(SKEY)) || {}; }
  catch(e){ return {}; }
}
function persist(){
  try { localStorage.setItem(SKEY, JSON.stringify(st)); } catch(e){}
}
function unitState(id){
  if(!st[id]) st[id] = { idx:0, done:false, plays:0 };
  return st[id];
}

/* user settings live alongside */
if(!st._opt) st._opt = { rate:0.92, pause:1.35, text:false };
var OPT = st._opt;

/* ---------------- voices ---------------- */
var vPL = null, vEN = null, voicesReady = false;
function pickVoices(){
  var vs = (window.speechSynthesis && speechSynthesis.getVoices()) || [];
  if(!vs.length) return;
  voicesReady = true;
  vPL = vs.filter(function(v){ return /^pl/i.test(v.lang||""); })[0] || null;
  var en = vs.filter(function(v){ return /^en/i.test(v.lang||""); });
  vEN = en.filter(function(v){ return /^en[-_]?US/i.test(v.lang); })[0] || en[0] || null;
  var w = document.getElementById("auVoiceWarn");
  if(w) w.innerHTML = vPL
    ? ""
    : "<strong>No Polish voice found on this device.</strong> The player will still run, but the Polish will be read by an English voice and will sound wrong. On Windows add a Polish voice under Settings → Time &amp; language → Speech; on a Mac under System Settings → Accessibility → Spoken Content → System Voice → Manage Voices; on iOS and Android install the Polish language pack. Chrome and Edge usually have one built in.";
}
if(window.speechSynthesis){
  pickVoices();
  speechSynthesis.onvoiceschanged = pickVoices;
}

/* ---------------- speaking ---------------- */
var live = null;          // current utterance
var gen = 0;              // generation token — bumped to abort everything
var timer = null;
var keepAlive = null;

function stopAll(){
  gen++;
  if(timer){ clearTimeout(timer); timer = null; }
  if(keepAlive){ clearInterval(keepAlive); keepAlive = null; }
  live = null;
  try { if(window.speechSynthesis) speechSynthesis.cancel(); } catch(e){}
}

function say(text, lang){
  return new Promise(function(res){
    if(!window.speechSynthesis || !text){ timer = setTimeout(res, 300); return; }
    var u = new SpeechSynthesisUtterance(String(text));
    if(lang === "pl"){ u.lang = "pl-PL"; if(vPL) u.voice = vPL; u.rate = OPT.rate; }
    else            { u.lang = "en-US"; if(vEN) u.voice = vEN; u.rate = 1.0; }
    u.pitch = 1;
    var done = false, guard;
    function fin(){ if(done) return; done = true; clearTimeout(guard); live = null; res(); }
    u.onend = fin; u.onerror = fin;
    // Some browsers silently drop onend. Never hang the lesson on it.
    guard = setTimeout(fin, 3000 + String(text).length * 190);
    live = u;
    try { speechSynthesis.cancel(); speechSynthesis.speak(u); }
    catch(e){ fin(); }
  });
}
function sayTimed(text, lang){
  var t0 = Date.now();
  return say(text, lang).then(function(){ return Date.now() - t0; });
}
function wait(ms){
  return new Promise(function(res){ timer = setTimeout(res, Math.max(0, ms)); });
}

/* ---------------- duration estimates (for the progress bar) ---------------- */
function estSpeak(s, lang){
  if(!s) return 0;
  var n = String(s).length;
  var base = lang === "pl" ? 68 : 58;          // ms per character, roughly
  return 350 + n * base / (lang === "pl" ? OPT.rate : 1);
}
function estStep(s){
  var P = OPT.pause;
  switch(s.t){
    case "n": return estSpeak(s.say, "en") + 350;
    case "l": return estSpeak(s.pl, "pl") + 500;
    case "r": return (estSpeak(s.pl, "pl") * (1 + P) + 500) * (s.x || 1);
    case "q": return estSpeak(s.ask, "en") + 300
                   + estSpeak(s.pl, "pl") * (P + 0.35) + 400
                   + estSpeak(s.pl, "pl") * (1 + P) + 400;
    case "c": return estSpeak(s.pl, "pl") + 650;
    case "s": return (s.sec || 1) * 1000;
  }
  return 500;
}
function unitTimeline(u){
  var acc = [], sum = 0;
  for(var i = 0; i < u.steps.length; i++){ acc.push(sum); sum += estStep(u.steps[i]); }
  return { at: acc, total: sum };
}
function mmss(ms){
  var s = Math.max(0, Math.round(ms / 1000));
  return Math.floor(s / 60) + ":" + ("0" + (s % 60)).slice(-2);
}

/* ---------------- markup ---------------- */
var CSS = ''
+ '#auVoiceWarn:empty{display:none}'
+ '.au-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:16px}'
+ '.au-card{background:var(--panel);border:1px solid var(--line);border-radius:var(--radius);padding:18px;'
+ 'cursor:pointer;transition:transform .15s,border-color .15s,box-shadow .15s;box-shadow:var(--shadow)}'
+ '.au-card:hover{transform:translateY(-2px);border-color:var(--accent);box-shadow:var(--lift)}'
+ '.au-card h3{margin:.45em 0 .2em;font-size:1.12rem}'
+ '.au-num{font-size:.7rem;letter-spacing:.12em;text-transform:uppercase;color:var(--muted);font-weight:700}'
+ '.au-card .sub{color:var(--muted);font-size:.86rem;line-height:1.45}'
+ '.au-goals{margin:12px 0 0;padding-left:18px;color:var(--muted);font-size:.82rem;line-height:1.6}'
+ '.au-meta{display:flex;gap:14px;align-items:center;margin-top:14px;font-size:.78rem;color:var(--muted)}'
+ '.au-meta .done{color:var(--accent);font-weight:700}'
+ '.au-soon{opacity:.45;cursor:default}'
+ '.au-soon:hover{transform:none;border-color:var(--line);box-shadow:var(--shadow)}'
/* stage */
+ '.au-stage{background:var(--panel);border:1px solid var(--line);border-radius:var(--radius);'
+ 'padding:26px 22px 22px;box-shadow:var(--shadow);text-align:center;margin-top:8px}'
+ '.au-phase{font-size:.72rem;letter-spacing:.16em;text-transform:uppercase;font-weight:800;color:var(--muted);min-height:1em}'
+ '.au-orb{width:132px;height:132px;border-radius:50%;margin:20px auto 14px;display:flex;align-items:center;'
+ 'justify-content:center;font-size:2.4rem;border:2px solid var(--line);background:var(--panel2);'
+ 'transition:border-color .25s,background .25s,box-shadow .25s}'
+ '.au-orb.narr{border-color:var(--accent2);box-shadow:0 0 0 6px rgba(111,208,220,.10)}'
+ '.au-orb.listen{border-color:var(--accent);box-shadow:0 0 0 6px rgba(25,191,174,.12)}'
+ '.au-orb.turn{border-color:var(--warn);background:rgba(240,151,92,.09);animation:au-pulse 1.5s ease-in-out infinite}'
+ '@keyframes au-pulse{0%,100%{box-shadow:0 0 0 0 rgba(240,151,92,.34)}50%{box-shadow:0 0 0 16px rgba(240,151,92,0)}}'
+ '.au-cue{font-size:1.05rem;color:var(--text);min-height:2.6em;max-width:34em;margin:0 auto;line-height:1.5}'
+ '.au-cue em{color:var(--muted);font-style:normal}'
+ '.au-text{margin:14px auto 0;max-width:34em;background:var(--panel2);border:1px dashed var(--line);'
+ 'border-radius:12px;padding:12px 14px;text-align:left}'
+ '.au-text .p{font-size:1.24rem;font-weight:700;color:var(--accent2);line-height:1.35}'
+ '.au-text .e{color:var(--muted);font-size:.9rem;margin-top:3px}'
+ '.au-text .r{color:var(--gold);font-size:.82rem;margin-top:5px;font-family:ui-monospace,Menlo,Consolas,monospace}'
/* transport */
+ '.au-bar{height:6px;background:var(--panel2);border-radius:99px;overflow:hidden;margin:20px 0 7px}'
+ '.au-bar i{display:block;height:100%;background:linear-gradient(90deg,var(--accent),var(--accent2));'
+ 'width:0;transition:width .35s linear}'
+ '.au-times{display:flex;justify-content:space-between;font-size:.74rem;color:var(--muted);font-variant-numeric:tabular-nums}'
+ '.au-transport{display:flex;align-items:center;justify-content:center;gap:14px;margin-top:16px;flex-wrap:wrap}'
+ '.au-tbtn{width:48px;height:48px;border-radius:50%;border:1px solid var(--line);background:var(--panel2);'
+ 'color:var(--text);font-size:1.05rem;cursor:pointer;display:flex;align-items:center;justify-content:center}'
+ '.au-tbtn:hover{border-color:var(--accent);color:var(--accent)}'
+ '.au-play{width:70px;height:70px;font-size:1.6rem;border:none;color:var(--on-accent);'
+ 'background:linear-gradient(180deg,#23cfbc,#0f9e90);box-shadow:var(--lift)}'
+ '.au-play:hover{color:var(--on-accent)}'
+ '.au-opts{display:flex;gap:18px;justify-content:center;flex-wrap:wrap;align-items:center;'
+ 'margin-top:20px;padding-top:16px;border-top:1px solid var(--line);font-size:.82rem;color:var(--muted)}'
+ '.au-opts label{display:flex;align-items:center;gap:7px}'
+ '.au-opts select{background:var(--panel2);color:var(--text);border:1px solid var(--line);'
+ 'border-radius:8px;padding:4px 8px;font:inherit;font-size:.82rem}'
+ '.au-done{background:var(--panel2);border:1px solid var(--accent);border-radius:var(--radius);'
+ 'padding:22px;text-align:center;margin-top:16px}'
+ '.au-done h3{margin:.2em 0 .4em;color:var(--accent)}'
+ '@media(max-width:520px){.au-orb{width:104px;height:104px;font-size:2rem}.au-play{width:62px;height:62px}}';

var LIST_HTML = ''
+ '<h2 class="title">Audio units</h2>'
+ '<p class="lead">Thirty-minute spoken lessons, in the style of Pimsleur. You listen, you answer out loud, '
+ 'the speaker corrects you. Nothing is written down unless you ask for it — the point is to build the reflex '
+ 'of producing Polish under time pressure, which is what an actual corridor conversation demands. '
+ 'Headphones and somewhere you can talk.</p>'
+ '<div class="note" id="auVoiceWarn" style="margin-top:0;margin-bottom:18px"></div>'
+ '<div class="au-grid" id="auGrid"></div>';

var STAGE_HTML = ''
+ '<div class="crumb" id="auBack">← All audio units</div>'
+ '<h2 class="title" id="auTitle"></h2>'
+ '<p class="lead" id="auDesc"></p>'
+ '<div class="au-stage">'
+ '  <div class="au-phase" id="auPhase">Ready</div>'
+ '  <div class="au-orb" id="auOrb">🎧</div>'
+ '  <div class="au-cue" id="auCue">Press play. Say every answer out loud — under your breath doesn\'t count.</div>'
+ '  <div class="au-text hidden" id="auText"></div>'
+ '  <div class="au-bar"><i id="auFill"></i></div>'
+ '  <div class="au-times"><span id="auElapsed">0:00</span><span id="auStepNo"></span><span id="auTotal">0:00</span></div>'
+ '  <div class="au-transport">'
+ '    <button class="au-tbtn" id="auPrev" title="Previous step">⏮</button>'
+ '    <button class="au-tbtn" id="auRep" title="Repeat this step">↻</button>'
+ '    <button class="au-tbtn au-play" id="auPlay" title="Play / pause">▶</button>'
+ '    <button class="au-tbtn" id="auNext" title="Next step">⏭</button>'
+ '    <button class="au-tbtn" id="auRestart" title="Start the unit over">⟲</button>'
+ '  </div>'
+ '  <div class="au-opts">'
+ '    <label>Polish speed'
+ '      <select id="auRate"><option value="0.78">slow</option><option value="0.92">normal</option>'
+ '      <option value="1">full</option></select></label>'
+ '    <label>Time to answer'
+ '      <select id="auPause"><option value="1.05">short</option><option value="1.35">normal</option>'
+ '      <option value="1.9">long</option></select></label>'
+ '    <label><input type="checkbox" id="auShowText"> Show text</label>'
+ '  </div>'
+ '</div>'
+ '<div class="au-done hidden" id="auDone"></div>'
+ '<div class="note" style="margin-top:18px">Keep this tab in front while it plays — browsers stop speech in '
+ 'background tabs, so the lesson will pause itself if you switch away. Progress is saved after every step, '
+ 'so you can stop anywhere and pick it up later.</div>';

/* ---------------- boot ---------------- */
function boot(){
  var nav = document.querySelector("nav.tabs");
  var main = document.querySelector("main");
  if(!nav || !main) return;

  var style = document.createElement("style");
  style.textContent = CSS;
  document.head.appendChild(style);

  var s1 = document.createElement("section");
  s1.id = "view-audio"; s1.className = "hidden"; s1.innerHTML = LIST_HTML;
  var s2 = document.createElement("section");
  s2.id = "view-audiostage"; s2.className = "hidden"; s2.innerHTML = STAGE_HTML;
  main.appendChild(s1); main.appendChild(s2);

  // tab button, dropped in next to Speaking
  var btn = document.createElement("button");
  btn.setAttribute("data-tab", "audio");
  btn.textContent = "Audio units";
  var lb = nav.querySelector('button[data-tab="leaderboard"]');
  if(lb) nav.insertBefore(btn, lb); else nav.appendChild(btn);

  // mirror into the mobile dropdown, in the same position
  var sel = document.getElementById("tabSelect");
  if(sel){
    var o = document.createElement("option");
    o.value = "audio"; o.textContent = "Audio units";
    var lbo = sel.querySelector('option[value="leaderboard"]');
    if(lbo) sel.insertBefore(o, lbo); else sel.appendChild(o);
  }

  // Other tabs use the app's show(); make it hide ours too.
  var origShow = (typeof window.show === "function") ? window.show : null;
  window.show = function(v){
    s1.classList.add("hidden"); s2.classList.add("hidden");
    if(origShow) origShow.apply(this, arguments);
  };
  function goto(which){
    if(origShow) origShow("__audio__");           // hides every built-in view
    else Array.prototype.forEach.call(main.children, function(c){ c.classList.add("hidden"); });
    s1.classList.toggle("hidden", which !== "list");
    s2.classList.toggle("hidden", which !== "stage");
    window.scrollTo(0, 0);
  }

  btn.onclick = function(){
    Array.prototype.forEach.call(nav.querySelectorAll("button"), function(x){ x.classList.remove("active"); });
    btn.classList.add("active");
    if(sel) sel.value = "audio";
    stop();
    renderList();
    goto("list");
  };

  /* ---------- list ---------- */
  function renderList(){
    pickVoices();
    var g = document.getElementById("auGrid");
    g.innerHTML = "";
    AUDIO_UNITS.forEach(function(u){
      var us = unitState(u.id);
      var tl = unitTimeline(u);
      var pct = Math.round(us.idx / u.steps.length * 100);
      var card = document.createElement("div");
      card.className = "au-card";
      card.innerHTML = '<div class="au-num">Unit ' + u.num + ' · ' + Math.round(tl.total / 60000) + ' min</div>'
        + '<h3>' + u.title + '</h3>'
        + '<div class="sub">' + u.desc + '</div>'
        + '<ul class="au-goals">' + u.goals.map(function(x){ return "<li>" + x + "</li>"; }).join("") + '</ul>'
        + '<div class="mini-bar" style="margin-top:14px"><i style="width:' + pct + '%"></i></div>'
        + '<div class="au-meta">' + (us.done
            ? '<span class="done">✓ Completed' + (us.plays > 1 ? " ×" + us.plays : "") + '</span>'
            : (us.idx > 0 ? '<span>Resume at ' + pct + '%</span>' : '<span>Not started</span>')) + '</div>';
      card.onclick = function(){ open(u); };
      g.appendChild(card);
    });
    var soon = document.createElement("div");
    soon.className = "au-card au-soon";
    soon.innerHTML = '<div class="au-num">Unit 2</div><h3>At the gate</h3>'
      + '<div class="sub">Badges, security, saying who you are here to see, and asking where something is.</div>'
      + '<div class="au-meta"><span>Not built yet — finish Unit 1 and tell me what to change.</span></div>';
    g.appendChild(soon);
  }

  /* ---------- player ---------- */
  var U = null, TL = null, idx = 0, playing = false, wakeLock = null;

  var el = {};
  ["auPhase","auOrb","auCue","auText","auFill","auElapsed","auTotal","auStepNo",
   "auPlay","auPrev","auNext","auRep","auRestart","auRate","auPause","auShowText",
   "auTitle","auDesc","auDone","auBack"].forEach(function(id){ el[id] = document.getElementById(id); });

  el.auRate.value = String(OPT.rate);
  el.auPause.value = String(OPT.pause);
  el.auShowText.checked = !!OPT.text;

  function open(u){
    U = u; TL = unitTimeline(u);
    var us = unitState(u.id);
    idx = (us.done && us.idx >= u.steps.length) ? 0 : (us.idx || 0);
    el.auTitle.textContent = "Unit " + u.num + " · " + u.title;
    el.auDesc.textContent = u.desc;
    el.auDone.classList.add("hidden");
    el.auTotal.textContent = mmss(TL.total);
    setPhase("", "Ready");
    el.auCue.innerHTML = idx > 0
      ? "Picking up where you left off, at " + mmss(TL.at[idx]) + ". Press play."
      : "Press play. Say every answer out loud — under your breath doesn't count.";
    el.auText.classList.add("hidden");
    paint();
    goto("stage");
  }

  function setPhase(cls, label){
    el.auOrb.className = "au-orb" + (cls ? " " + cls : "");
    el.auOrb.textContent = cls === "turn" ? "🗣" : (cls === "narr" ? "🎧" : (cls === "listen" ? "🔊" : "🎧"));
    el.auPhase.textContent = label;
  }

  function paint(){
    var here = TL.at[Math.min(idx, TL.at.length - 1)] || 0;
    if(idx >= U.steps.length) here = TL.total;
    el.auFill.style.width = (here / TL.total * 100).toFixed(1) + "%";
    el.auElapsed.textContent = mmss(here);
    el.auStepNo.textContent = "step " + Math.min(idx + 1, U.steps.length) + " of " + U.steps.length;
    el.auPlay.textContent = playing ? "❚❚" : "▶";
  }

  function showText(s){
    if(!OPT.text || !s || !s.pl){ el.auText.classList.add("hidden"); return; }
    el.auText.innerHTML = '<div class="p">' + s.pl + "</div>"
      + (s.en ? '<div class="e">' + s.en + "</div>" : "")
      + (s.pr ? '<div class="r">' + s.pr + "</div>" : "");
    el.auText.classList.remove("hidden");
  }

  function cue(html){ el.auCue.innerHTML = html; }

  /* run one step; resolves when finished. `my` guards against aborts. */
  function doStep(s, my){
    var alive = function(){ return my === gen && playing; };
    var P = OPT.pause;

    if(s.t === "n"){
      setPhase("narr", "Instructor");
      cue("<em>" + s.say + "</em>");
      showText(null);
      return say(s.say, "en").then(function(){ return alive() ? wait(350) : null; });
    }
    if(s.t === "c"){
      setPhase("listen", s.who === "A" ? "Conversation · the engineer" : "Conversation · the colleague");
      cue(s.who === "A" ? "The engineer speaks…" : "The colleague answers…");
      showText(s);
      return say(s.pl, "pl").then(function(){ return alive() ? wait(650) : null; });
    }
    if(s.t === "s"){
      setPhase("", "…");
      cue("");
      showText(null);
      return wait((s.sec || 1) * 1000);
    }
    if(s.t === "l"){
      setPhase("listen", "Listen");
      cue("Listen.");
      showText(s);
      return say(s.pl, "pl").then(function(){ return alive() ? wait(500) : null; });
    }
    if(s.t === "r"){
      var times = s.x || 1, n = 0;
      showText(s);
      var once = function(){
        if(!alive()) return null;
        setPhase("listen", "Listen");
        cue("Listen" + (times > 1 ? " (" + (n + 1) + " of " + times + ")" : "") + ".");
        return sayTimed(s.pl, "pl").then(function(d){
          if(!alive()) return null;
          setPhase("turn", "Your turn");
          cue("Say it out loud.");
          return wait(d * P + 500);
        }).then(function(){
          n++;
          return (n < times && alive()) ? once() : null;
        });
      };
      return once();
    }
    if(s.t === "q"){
      setPhase("narr", "Instructor");
      cue("<em>" + s.ask + "</em>");
      showText(null);
      return say(s.ask, "en").then(function(){
        if(!alive()) return null;
        setPhase("turn", "Your turn");
        cue("<em>" + s.ask + "</em>");
        return wait(estSpeak(s.pl, "pl") * (P + 0.35) + 400);
      }).then(function(){
        if(!alive()) return null;
        setPhase("listen", "The answer");
        showText(s);
        return sayTimed(s.pl, "pl");
      }).then(function(d){
        if(!alive()) return null;
        setPhase("turn", "Repeat it");
        cue("Now say it again after the speaker.");
        return wait(d * P + 400);
      });
    }
    return wait(200);
  }

  function runLoop(){
    var my = gen;
    (function next(){
      if(my !== gen || !playing) return;
      if(idx >= U.steps.length){ finish(); return; }
      paint();
      Promise.resolve(doStep(U.steps[idx], my)).then(function(){
        if(my !== gen || !playing) return;
        idx++;
        var us = unitState(U.id);
        us.idx = idx; persist();
        next();
      });
    })();
  }

  function start(){
    if(!U) return;
    if(idx >= U.steps.length) idx = 0;
    stopAll();
    playing = true;
    el.auDone.classList.add("hidden");
    keepAlive = setInterval(function(){
      // Chrome quietly suspends long-running synthesis; nudge it.
      try { if(playing && speechSynthesis.speaking && !speechSynthesis.paused) speechSynthesis.resume(); } catch(e){}
    }, 5000);
    requestWake();
    paint();
    runLoop();
  }
  function stop(){
    playing = false;
    stopAll();
    releaseWake();
    if(U){ setPhase("", "Paused"); paint(); }
  }
  function finish(){
    playing = false;
    stopAll(); releaseWake();
    var us = unitState(U.id);
    us.done = true; us.plays = (us.plays || 0) + 1; us.idx = U.steps.length;
    persist();
    idx = U.steps.length;
    setPhase("", "Finished");
    cue("");
    el.auText.classList.add("hidden");
    el.auDone.innerHTML = "<h3>Unit " + U.num + " complete</h3>"
      + "<p class=\"sub\">You've been through it " + us.plays + (us.plays === 1 ? " time" : " times") + ". "
      + "The second pass is worth more than the first — run it again tomorrow before anything new.</p>";
    el.auDone.classList.remove("hidden");
    paint();
  }
  function jump(d){
    var wasPlaying = playing;
    stop();
    idx = Math.max(0, Math.min(U.steps.length - 1, idx + d));
    unitState(U.id).idx = idx; persist();
    el.auDone.classList.add("hidden");
    paint();
    if(wasPlaying) start(); else { showText(U.steps[idx]); cue("Ready at step " + (idx + 1) + "."); }
  }

  /* ---------- wake lock ---------- */
  function requestWake(){
    try {
      if(navigator.wakeLock && !wakeLock)
        navigator.wakeLock.request("screen").then(function(w){ wakeLock = w; }, function(){});
    } catch(e){}
  }
  function releaseWake(){
    try { if(wakeLock){ wakeLock.release(); wakeLock = null; } } catch(e){}
  }

  /* ---------- wiring ---------- */
  el.auPlay.onclick = function(){ playing ? stop() : start(); };
  el.auPrev.onclick = function(){ jump(-1); };
  el.auNext.onclick = function(){ jump(1); };
  el.auRep.onclick  = function(){ jump(0); };
  el.auRestart.onclick = function(){
    stop(); idx = 0;
    var us = unitState(U.id); us.idx = 0; persist();
    el.auDone.classList.add("hidden");
    cue("Back to the beginning. Press play.");
    paint();
  };
  el.auBack.onclick = function(){ stop(); renderList(); goto("list"); };
  el.auRate.onchange = function(){
    OPT.rate = parseFloat(el.auRate.value); persist();
    if(U){ TL = unitTimeline(U); el.auTotal.textContent = mmss(TL.total); paint(); }
  };
  el.auPause.onchange = function(){
    OPT.pause = parseFloat(el.auPause.value); persist();
    if(U){ TL = unitTimeline(U); el.auTotal.textContent = mmss(TL.total); paint(); }
  };
  el.auShowText.onchange = function(){
    OPT.text = el.auShowText.checked; persist();
    if(U && !OPT.text) el.auText.classList.add("hidden");
    else if(U) showText(U.steps[Math.min(idx, U.steps.length - 1)]);
  };

  // Browsers cut speech in background tabs — pause rather than lose the thread.
  document.addEventListener("visibilitychange", function(){
    if(document.hidden && playing){
      stop();
      cue("Paused — this tab went to the background. Press play to carry on.");
    }
  });

  // Keyboard, only while the stage is showing and you're not typing in a field.
  document.addEventListener("keydown", function(e){
    if(s2.classList.contains("hidden")) return;
    var tag = (e.target && e.target.tagName) || "";
    if(/INPUT|TEXTAREA|SELECT/.test(tag)) return;
    if(e.code === "Space"){ e.preventDefault(); playing ? stop() : start(); }
    else if(e.code === "ArrowLeft"){ e.preventDefault(); jump(-1); }
    else if(e.code === "ArrowRight"){ e.preventDefault(); jump(1); }
  });

  window.addEventListener("beforeunload", function(){ stopAll(); });
}

if(document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
else boot();
})();
