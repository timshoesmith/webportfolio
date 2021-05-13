import React from 'react'
import  PageTitle  from '../../my_components/PageTitle';
import  Footer  from '../pages/Footer';
import OpeningParagraph from '../../my_components/OpeningParagraph';
import Cards from '../Cards';
function Contact() {
    return (
        <div>
           <PageTitle title="ABOUT PAGE" />
           <OpeningParagraph openingP="This is about me."  />
           
           <Footer /> 
        </div>
    )
}

export default Contact
