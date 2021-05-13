import React from 'react';
import CardItem from '../../components/CardItem';
import '../../components/Cards.css';
import ReactCardItems from './ReactCardItems'
import ReactDom from "react-dom";
import {BrowserRouter as Router, Route } from "react-router-dom";




function ReactCards() {
    return (
      
            <div className='cards'>
                <h1>REACT</h1>
                <div className="cards__container">
                    <div className="cards__wrapper">
                        <ul className="cards__items">
                            <ReactCardItems
                            src='../images/todolist.png'
                            text="Simple functioning To Do List"
                            label="More Info"
                            path="http://todolist.web-d.co.uk"
                            />
                            <CardItem 
                            src='../images/react-app-logo.jpg'
                            text="Websites creating using React and Redux"
                            label="More Info"
                            path='/reactpage'
                            
                            />
                        </ul>
                        <ul className="cards__items">
                            <CardItem 
                            src='../images/python-logo.jpg'
                            text="Applications created using the Python Programming Language"
                            label="More info"
                            path='/services'
                            />
                            <CardItem 
                            src='../images/csharp logo.jpg'
                            text="Applications created using the C# Programming Language"
                            label="More info"
                            path='/products'
                            />
                             <CardItem 
                            src='../images/jquery logo.jpg'
                            text="Enhanced design with jquery"
                            label="sign-in"
                            path='/portfolio'
                            />
                        </ul>
                    </div>
                </div>
            </div>          
    );
}

export default ReactCards

