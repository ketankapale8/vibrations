import * as React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';
//components
import InfoCard from './InfoCard'

const QuestionsWrapper = ({allQuestions, filter}) => {
  
  let filterQuestions = false;
  let empty = false;

  let filterArray = []

  filterQuestions = allQuestions

if (filterQuestions != undefined && typeof filterQuestions === 'object'){
    filterQuestions.map((question) => {
    // I have two things, the filter and the fruits genus (in the array) so if I filter I only want to show the ones that match the genus
    if (filter.questionTag != '' && !question.questionTag.includes(filter.questionTag)) {
      return
    }

    filterArray.push(question)

  })
        if (filterArray.length > 0) {
            filterQuestions = filterArray;
      }
} else {
    filterQuestions = false
  empty= true
}



  return(
    <ScrollView>
          {filterQuestions?.map((result) => (
<InfoCard result={result}/>
      ))}
      {empty && <Text>No questions wore fetched</Text>}
    </ScrollView>
  )
}

export default QuestionsWrapper