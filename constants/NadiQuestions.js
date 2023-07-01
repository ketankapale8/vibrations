import {SIZES, COLORS, FONTS, icons, images} from '../constants';

export default [
    {
        question: "Which nadi was active when the photo was taken ? ",
        QuestionDesc : "Check nadi of the person at the time of clicking the picture",
        questionTag : "Active nadi of the person",
        QuestionImg : icons.person2,
        level : 1, 
        example : 1,
        category : "Nadi",
        Type : "Person",
        options:[
            
            {
                id:"0",
                options:"A",
                answer:"ida",
                answerDesc : "",
                isSelected : false,
                imgOption : icons.ida
            },
            {
                id:"1",
                options:"B",
                answer:"pingala",
                isSelected : false,
                imgOption : icons.pingala
            },
            {
                id:"2",
                options:"C",
                answer:"shushumna",
                isSelected : false,
                imgOption : icons.shushumna
            },
            
        ],
        correntMultiSelectOption : [0,1]
    },
    {
        question: "Identify if this cap belongs to boy or girl",
        QuestionImg : icons.woolencap,
        QuestionDesc : "Check which side of the hand spandan comes",
        questionTag : "Woolen Cap",
        level : 1, 
        example : 2,
        category : "Nadi",
        Type : "Object",
        options:[
            {
                id:"0",
                options:"A",
                answer:"+ve",
                isSelected : false,
                imgOption : icons.ida


            },
            {
                id:"1",
                options:"B",
                answer:"-ve",
                isSelected : false,
                imgOption : icons.pingala


            },
            {
                id:"2",
                options:"C",
                answer:"Affirmative",
                isSelected : false,
                imgOption : icons.shushumna


            },
            
        ],
        correntMultiSelectOption : [0,2,1]

    },
   
]