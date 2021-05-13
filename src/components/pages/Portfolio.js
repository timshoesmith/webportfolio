import React from 'react'
import  PageTitle  from '../../my_components/PageTitle';
import  Footer  from '../pages/Footer';
import OpeningParagraph from '../../my_components/OpeningParagraph';
import Cards from '../Cards';
function Portfolio() {
    return (
        <div>
           <PageTitle title="PORTFOLIO OF WEBSITES AND APPLICATIONS" />
           <OpeningParagraph openingP="I have experience with HTML,CSS, and JavaScript, as well as programming languages and WordPress."  />
            <Cards />
           <Footer /> 
        </div>
    )
}

export default Portfolio
