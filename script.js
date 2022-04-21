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

let currentQuestion = 0;

function init() {
    document.getElementById('questions-sum').innerHTML = questions.length;

    showQuestion();
}

function showQuestion() {
    let question = questions[currentQuestion];

    document.getElementById('question-txt').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}


function answer(selection) { /* selection = da variabel je nach Klick answer_1... answer_2 etc ankommt */
    let question = questions[currentQuestion];
    console.log('Selected answer is ', selection); // um zu sehen welche answer von hmtl übergeben wurde an JS
    let selectedQuestionNumber = selection.slice(-1); //um die letzte stelle von answer_3 (String zu erhalten) = 3
    console.log('Current question is ', question['right_answer']);
    console.log('selectedQuestionNumber is ', selectedQuestionNumber);

    let idOfRightAnswer = `answer_${question['right_answer']}`; //question['right_answer'] damit er die Zahl bei jeder Frage korrekt vergleichen kann mit dem Zahlenwert

    if (selectedQuestionNumber == question['right_answer']) { //vergleicht die Zahl der SELECTION mit RIGHT ANSWER zahl.
        console.log('richtige Antwort');
        document.getElementById(selection).classList.add('success-bgr'); // wenn korrekt, dann Grün
    }else{
        console.log('falsche Antwort');
        document.getElementById(selection).classList.add('wrong-bgr'); // wenn falsch, rot und korrekte in grün
        document.getElementById(idOfRightAnswer).classList.add('success-bgr');
    } 
}