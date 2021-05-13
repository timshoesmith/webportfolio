import React from 'react'
import  PageTitle  from '../../my_components/PageTitle';
import  Footer  from '../pages/Footer';
import OpeningParagraph from '../../my_components/OpeningParagraph';
import Cards from '../Cards';
function Contact() {
    return (
        <div>
           <PageTitle title="CONTACT TIM" />
           <OpeningParagraph openingP="I can be contated by email. or by filling out the form authenticated by php"  />
           
           <Footer /> 
        </div>
    )
}

export default Contact
