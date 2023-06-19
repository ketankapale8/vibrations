import {SIZES, COLORS, FONTS, icons, images} from '../constants';

export default [
    {
        question: "Check the vibrations of Tulsi Plant",
        QuestionDesc : "Check if the spandan of tulsi plant is positive or negative",
        questionTag : "Tulsi",
        QuestionImg : icons.Tulsi,
        options:[
            {
                id:"0",
                options:"A",
                answer:"+ve",
                answerDesc : "",
                isSelected : false,
            },
            {
                id:"1",
                options:"B",
                answer:"-ve",
                isSelected : false,
            },
            {
                id:"2",
                options:"C",
                answer:"Affirmative",
                isSelected : false,
            },
            {
                id:"0",
                options:"D",
                answer:"Not an option",
                isSelected : false
            },
        ],
        correctAnswerIndex: 0,
        correntMultiSelectOption : [0,1,2]
    },
    {
        question: "Should you purchase this idol?",
        QuestionImg : icons.Lemon,
        QuestionDesc : "Check if the spandan of tulsi plant is positive or negative",
        questionTag : "Godess Idol",
        options:[
            {
                id:"0",
                options:"A",
                answer:"+ve",
                isSelected : false,

            },
            {
                id:"1",
                options:"B",
                answer:"-ve",
                isSelected : false,

            },
            {
                id:"2",
                options:"C",
                answer:"Affirmative",
                isSelected : false,

            },
            {
                id:"0",
                options:"D",
                answer:"Not an option",
                isSelected : false,

            },
        ],
        correctAnswerIndex: 1,
        correntMultiSelectOption : [0,2,1]

    },
    {
        question: "Is this house positive ? ",
        QuestionImg : icons.Tamarind,
        QuestionDesc : "Mr X is facing problems. Check the spandan of the house and confirm if the issues are because of house",
        questionTag : "House of Mr. X",
        options:[
            {
                id:"0",
                options:"A",
                answer:"+ve",
                isSelected : false,

            },
            {
                id:"1",
                options:"B",
                answer:"-ve",
                isSelected : false,

            },
            {
                id:"2",
                options:"C",
                answer:"Affirmative",
                isSelected : false,

            },
            {
                id:"0",
                options:"D",
                answer:"Not an option",
                isSelected : false,

            },
        ],
        correctAnswerIndex: 1,
        correntMultiSelectOption : [0,1,2]
    },
    {
        question: "Should Mr X invite this friend  to the party ? ",
        QuestionImg : icons.Tulsi,
        questionTag : "Party invite for a friend",
        QuestionDesc : "Mr. X is in a dilemma if he needs to invite his friend to a party or not. Check the spandan on the person and advice Mr. X if he should invite his friend or not?",

        options:[
            {
                id:"0",
                options:"A",
                answer:"+ve",
                isSelected : false,

            },
            {
                id:"1",
                options:"B",
                answer:"-ve",
                isSelected : false,

            },
            {
                id:"2",
                options:"C",
                answer:"Affirmative",
                isSelected : false,

            },
            {
                id:"0",
                options:"D",
                answer:"Not an option",
                isSelected : false,

            },
        ],
        correctAnswerIndex: 0,
        correntMultiSelectOption : [1,0,3]
    },
    {
        question: "Should your brother buy this car? ",
        questionTag : "Buying a car",
        QuestionImg : icons.Tamarind,
        QuestionDesc : "Help your brother to decide if he should buy this car or not",
        options:[
            {
                id:"0",
                options:"A",
                answer:"+ve",
                isSelected : false,

            },
            {
                id:"1",
                options:"B",
                answer:"-ve",
                isSelected : false,

            },
            {
                id:"2",
                options:"C",
                answer:"Affirmative",
                isSelected : false,

            },
            {
                id:"0",
                options:"D",
                answer:"Not an option",
                isSelected : false,

            },
        ],
        correctAnswerIndex: 0,
        correntMultiSelectOption : [0,2,1]
    }
]