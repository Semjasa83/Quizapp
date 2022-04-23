let questions = [
    {
        'question' : 'Wofür ist das Modul am Compound Primär zuständig?',
        'answer_1' : 'Geschwindigkeit',
        'answer_2' : 'Abschussgeräusch dämpfen',
        'answer_3' : 'Auszugslänge',
        'answer_4' : 'indiviuelles Styling',
        'right_answer' : 3,
    },
    {
        'question' : 'Welcher ist kein historischer Bogen?',
        'answer_1' : 'Langbogen',
        'answer_2' : 'Recurve',
        'answer_3' : 'Reiterbogen',
        'answer_4' : 'Compound',
        'right_answer' : 4,
    },
    {
        'question' : 'Wer hält den aktuellen Rekord im Recurve auf 70m mit 702/720?',
        'answer_1' : 'Brady Ellison',
        'answer_2' : 'Mete Gazoz',
        'answer_3' : 'Mauro Nespoli',
        'answer_4' : 'Kim Woojin',
        'right_answer' : 1,
    },
    {
        'question' : 'Wer hält die meisten Rekorde im Recurve aktuell?',
        'answer_1' : 'Brady Ellison',
        'answer_2' : 'Mete Gazoz',
        'answer_3' : 'Mauro Nespoli',
        'answer_4' : 'Kim Woojin',
        'right_answer' : 4,
    },
    {
        'question' : 'Welcher Schütze tritt nicht mit dem Compound an?',
        'answer_1' : 'Mike Schlosser',
        'answer_2' : 'Florian Unruh',
        'answer_3' : 'Braden Gellenthien',
        'answer_4' : 'James Lutz',
        'right_answer' : 2,
    },
    {
        'question' : 'Wie lang darf der Frontstabilisator laut IFAA in der BowHunter Unlimited Klasse sein?',
        'answer_1' : '6Inch',
        'answer_2' : '9Inch',
        'answer_3' : '12Inch',
        'answer_4' : '15Inch',
        'right_answer' : 3,
    },
    {
        'question' : 'Welches Pfeilgewicht sollte im Regelfall nicht unterschritten werden?',
        'answer_1' : '4,5 gpi',
        'answer_2' : '5,0 gpi',
        'answer_3' : '6,5 gpi',
        'answer_4' : '7,0 gpi',
        'right_answer' : 2,
    },
    {
        'question' : 'welchem physikalischen Prinzip folgt der Compoundbogen?',
        'answer_1' : 'Flaschenzug',
        'answer_2' : 'Beschleunigung',
        'answer_3' : 'Rotationsmasse',
        'answer_4' : 'Schwerkraftsausgleich',
        'right_answer' : 1,
    },
    {
        'question' : 'In welchem Land ist der Bogensport nicht so Populär?',
        'answer_1' : 'Mexico',
        'answer_2' : 'Holland',
        'answer_3' : 'USA',
        'answer_4' : 'Deutschland',
        'right_answer' : 4,
    },
    {
        'question' : 'Welche Schützin verhalf die letzten Jahre Bowtech wieder zu mehr Bekanntheit?',
        'answer_1' : 'Toja Ellison',
        'answer_2' : 'Paige Pearce',
        'answer_3' : 'Sara Lopez',
        'answer_4' : 'Tanja Gellenthien',
        'right_answer' : 2,
    },
]

let rightQuestions = 0;
let currentQuestion = 0; //damit die aktuelle Fragen bei 0 beginnen
let AUDIO_SUCCESS = new Audio('audio/success.mp3');
let AUDIO_FAIL = new Audio('audio/wrong.wav');


function init() {
    document.getElementById('questions-sum').innerHTML = questions.length;
    showQuestion();
}


function showQuestion() {
    if(gameIsOver()) {
        showEndScreen();
    } else {
        updateProgressBar();
        updateToNextQuestion();
    }        
}


function gameIsOver() {
    return currentQuestion >= questions.length;
}


function showEndScreen() {
    document.getElementById('end-screen').style = ''; // style = '' um das Display None zu entfernen
    document.getElementById('question-body').style = 'display: none';
    
    document.getElementById('amount-of-questions').innerHTML = questions.length; // Endscreen gesamte Menge der Fragen
    document.getElementById('amount-of-right-questions').innerHTML = rightQuestions; // Menge der korrekten Antworten am Endscreen
    document.getElementById('header-image').src = 'img/winner.jpg'
}


function updateProgressBar() {
    let percent =  (currentQuestion + 1) /questions.length; //+1 damit die Leiste korrekt startet und endet.
    percent = Math.round(percent * 100); //math.round(...)rundet die Zahlen
    document.getElementById('progress-bar').innerHTML = `${percent}%`; // ${}immer bei Strings
    document.getElementById('progress-bar').style = `width: ${percent}%;`; //style = `width ` -> statt style.width, geht sonst nicht
    // console.log(`Fortschritt:`, percent);
}


function updateToNextQuestion() {
    let question = questions[currentQuestion];
    document.getElementById('question-txt').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
    document.getElementById('next-question-button').disabled = true; // button zu Beginn deaktivieren
    document.getElementById('question-atm').innerHTML = currentQuestion +1;
}


function answer(selection) {        // selection = da variabel je nach Klick answer_1... answer_2 etc ankommt 
    let question = questions[currentQuestion]; // console.log('Selected answer is ', selection); // um zu sehen welche answer von hmtl übergeben wurde an JS                             
    let selectedQuestionNumber = selection.slice(-1); //um die letzte stelle von answer_3 (String zu erhalten) = 3
                                    // console.log('Current question is ', question['right_answer']);
                                    // console.log('selectedQuestionNumber is ', selectedQuestionNumber);
    let idOfRightAnswer = `answer_${question['right_answer']}`; //question['right_answer'] damit er die Zahl bei jeder Frage korrekt vergleichen kann mit dem Zahlenwert
    
    if (rightAnswerSelected(selectedQuestionNumber)) {   //vergleicht die Zahl der SELECTION mit RIGHT ANSWER zahl.
                                                                // console.log('richtige Antwort');
        document.getElementById(selection).classList.add('success-bgr'); // wenn korrekt, dann Grün
        AUDIO_SUCCESS.play();
        rightQuestions++;
    }else{
                                                                // console.log('falsche Antwort');
        document.getElementById(selection).classList.add('wrong-bgr'); // wenn falsch, rot und korrekte in grün
        document.getElementById(idOfRightAnswer).classList.add('success-bgr');
        AUDIO_FAIL.play();
    } 
    document.getElementById('next-question-button').disabled = false; //Button nach Antwort wieder aktivieren
}

function rightAnswerSelected(selectedQuestionNumber) { // wird in ZEILE 158 und hier benötigt, damit es hier übergeben wird und ausgeführt werden kann!!!!!!
   return selectedQuestionNumber == question['right_answer']; //selectedQuestionNumber kann hier auch in der Function anderst benannt werden... ist dennoch mit oben verknüpft
}


function nextQuestion() {
    currentQuestion++;              //z.B. von 0 auf 1 in Questions springen
    resetAnswerButtons();           //sollte vor showQuestions ausgeführt werden
    showQuestion();

}


function resetAnswerButtons() {
    document.getElementById('answer_1').classList.remove('success-bgr');
    document.getElementById('answer_1').classList.remove('wrong-bgr');
    document.getElementById('answer_2').classList.remove('success-bgr');
    document.getElementById('answer_2').classList.remove('wrong-bgr');
    document.getElementById('answer_3').classList.remove('success-bgr');
    document.getElementById('answer_3').classList.remove('wrong-bgr');
    document.getElementById('answer_4').classList.remove('success-bgr');
    document.getElementById('answer_4').classList.remove('wrong-bgr');
}


function restartGame() {
    document.getElementById('header-image').src = 'img/background2.jpg'; // Bild zurückwechseln
    document.getElementById('end-screen').style = 'display: none'; // Endscreen wieder ausblenden
    document.getElementById('question-body').style = ''; // Questions wieder anzeigen

    rightQuestions = 0;
    currentQuestion = 0;
    init();
}