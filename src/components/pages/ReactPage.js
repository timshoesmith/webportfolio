import React from 'react'
import  PageTitle  from '../../my_components/PageTitle';
import  Footer  from './Footer';
import OpeningParagraph from '../../my_components/OpeningParagraph';
import ReactCards from "../react/ReactCards";
//import Cards from '../Cards';
function ReactPage() {
    return (
        <div>
           <PageTitle title="APPLICATIONS CREATED WITH REACT, EXPRESS AND REDUX" />
           <OpeningParagraph openingP="I have experience with HTML,CSS, and JavaScript, as well as programming languages and WordPress."  />
            <ReactCards />
           <Footer /> 
        </div>
    )
}

export default ReactPage;