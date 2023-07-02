import {SIZES, COLORS, FONTS, icons, images} from '../constants';

export default [
    {
        question: "Check the vibrations of Tulsi Plant?",
        QuestionDesc : "Check if the spandan of tulsi plant is positive or negative",
        questionTag : "Tulsi",
        QuestionImg : icons.Tulsi,
        level : 1, 
        example : 1,
        category : "Positive Negative",
        Type : "Plants",
        options:[
            
            {
                id:"0",
                options:"A",
                answer:"+ve",
                answerDesc : "",
                isSelected : false,
                imgOption : icons.positive
            },
            {
                id:"1",
                options:"B",
                answer:"-ve",
                isSelected : false,
                imgOption : icons.negative
            },
            // {
            //     id:"2",
            //     options:"C",
            //     answer:"Affirmative",
            //     isSelected : false,
            //     // imgOption : icons.positive
            // },
            // {
            //     id:"0",
            //     options:"D",
            //     answer:"Not an option",
            //     isSelected : false,
            //     // imgOption : icons.positive
            // },
        ],
        correctAnswerIndex: 0,
        // correntMultiSelectOption : [0,1,2]
    },
    {
        question: "Should you purchase this idol?",
        QuestionImg : icons.goddess,
        QuestionDesc : "Check if the spandan of tulsi plant is positive or negative",
        questionTag : "Godess Idol",
        level : 1, 
        example : 2,
        category : "Positive Negative",
        Type : "Object",
        options:[
            {
                id:"0",
                options:"A",
                answer:"+ve",
                isSelected : false,
                imgOption : icons.positive


            },
            {
                id:"1",
                options:"B",
                answer:"-ve",
                isSelected : false,
                imgOption : icons.negative


            },
         
        ],
        correctAnswerIndex: 1,

    },
    {
        question: "Is this house positive ? ",
        QuestionImg : icons.house,
        QuestionDesc : "Mr X is facing problems. Check the spandan of the house and confirm if the issues are because of house",
        questionTag : "House of Mr. X",
        level : 1, 
        example : 3,
        category : "Positive Negative",
        Type : "Place",
        options:[
            {
                id:"0",
                options:"A",
                answer:"+ve",
                isSelected : false,
                imgOption : icons.positive

                

            },
            {
                id:"1",
                options:"B",
                answer:"-ve",
                isSelected : false,
                imgOption : icons.negative


            },
          
        ],
        correctAnswerIndex: 1,
        // correntMultiSelectOption : [0,1,2]
    },
    {
        question: "Should Mr X invite this friend  to the party ? ",
        QuestionImg : icons.apartment,
        questionTag : "Party invite for a friend",
        QuestionDesc : "Mr. X is in a dilemma if he needs to invite his friend to a party or not. Check the spandan on the person and advice Mr. X if he should invite his friend or not?",
        level : 1, 
        example : 4,
        category : "Positive Negative",
        Type : "Person",
        options:[
            {
                id:"0",
                options:"A",
                answer:"+ve",
                isSelected : false,
                imgOption : icons.positive
                

            },
            {
                id:"1",
                options:"B",
                answer:"-ve",
                isSelected : false,
                imgOption : icons.negative

            },
          
        ],
        correctAnswerIndex: 0,
    },
    {
        question: "Should your brother buy this car? ",
        questionTag : "Buying a car",
        QuestionImg : icons.car,
        QuestionDesc : "Help your brother to decide if he should buy this car or not",
        level : 1, 
        example : 5,
        category : "Positive Negative",
        Type : "Person",
        options:[
            {
                id:"0",
                options:"A",
                answer:"+ve",
                isSelected : false,
                imgOption : icons.positive

            },
            {
                id:"1",
                options:"B",
                answer:"-ve",
                isSelected : false,
                imgOption : icons.negative

            },
          
        ],
        correctAnswerIndex: 0,
    }
]