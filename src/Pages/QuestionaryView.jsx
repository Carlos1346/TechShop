import React from 'react';
import Example from '../Components/Example'

import Footer from '../Components/Footer';

import Questionary from '../Components/Questionary';





function QuestionaryView() {
  return (
    <div>
      <div >
        <Example /> 
        <Questionary/>
        <Footer/>

        
      </div>
    </div>
  );
}

export default QuestionaryView;