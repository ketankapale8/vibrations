import {SIZES, COLORS, FONTS, icons, images} from '../constants';

export default [
    {
        question: "Identify the location where spandan will appear for this issue",
        QuestionDesc : "Check the position of the spandan and identify which body part is getting affeted",
        questionTag : "Heart Issue",
        QuestionImg : icons.heartissue,
        level : 1, 
        example : 1,
        category : "Disease",
        Type : "Person",
        options:[
            
            {
                id:"0",
                options:"A",
                answer:"Lung",
                answerDesc : "",
                isSelected : false,
                imgOption : icons.lung
            },
            {
                id:"1",
                options:"B",
                answer:"Stomach",
                isSelected : false,
                imgOption : icons.stomach
            },
            {
                id:"2",
                options:"C",
                answer:"Liver",
                isSelected : false,
                imgOption : icons.liver
            },
            {
                id:"0",
                options:"D",
                answer:"Hand",
                isSelected : false,
                imgOption : icons.lung
            },
        ],
        correctAnswerIndex: 0,
        // correntMultiSelectOption : [0,1,2]
    },
    {
        question: "Identify the disease based on position of the spandan",
        QuestionImg : icons.lowbp,
        QuestionDesc : "Check the position of the spandan and identify which body part is getting affeted",
        questionTag : "Low BP Issue",
        level : 1, 
        example : 2,
        category : "Disease",
        Type : "Person",
        options:[
            {
                id:"0",
                options:"A",
                answer:"top-left",
                answerDesc : "",
                isSelected : false,
                imgOption : icons.lung
            },
            {
                id:"1",
                options:"B",
                answer:"top-middle",
                isSelected : false,
                imgOption : icons.stomach
            },
            {
                id:"2",
                options:"C",
                answer:"middle-left",
                isSelected : false,
                imgOption : icons.liver
            },
            {
                id:"3",
                options:"D",
                answer:"double",
                isSelected : false,
                imgOption : icons.lung
            },
        ],
        correctAnswerIndex: 1,
        // correntMultiSelectOption : [0,2,1]

    },
    {
        question: "Identify the location where spandan will appear for this issue",
        QuestionImg : icons.highbp,
        QuestionDesc : "Check the position of the spandan and identify which body part is getting affeted",
        questionTag : "High BP Issue",
        level : 1, 
        example : 3,
        category : "Disease",
        Type : "Person",
        options:[
            {
                id:"0",
                options:"A",
                answer:"top-left",
                answerDesc : "",
                isSelected : false,
                imgOption : icons.lung
            },
            {
                id:"1",
                options:"B",
                answer:"top-middle",
                isSelected : false,
                imgOption : icons.stomach
            },
            {
                id:"2",
                options:"C",
                answer:"middle-left",
                isSelected : false,
                imgOption : icons.liver
            },
            {
                id:"3",
                options:"D",
                answer:"double",
                isSelected : false,
                imgOption : icons.lung
            },
        ],
        correctAnswerIndex: 1,
        // correntMultiSelectOption : [0,1,2]
    },
   
   
]