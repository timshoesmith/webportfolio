import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

import ReactDom from "react-dom";
import {BrowserRouter as Router, Route } from "react-router-dom";




function Cards() {
    return (
      
            <div className='cards'>
                <h1>Portfolio Examples</h1>
                <div className="cards__container">
                    <div className="cards__wrapper">
                        <ul className="cards__items">
                            <CardItem 
                            src='../images/html-css-javascript-logo.jpg'
                            text="Portfolio Websites creating using HTML, CSS and JavaScipt"
                            label="More Info"
                            path='/services'
                            />
                            <CardItem 
                            src='../images/react-app-logo.jpg'
                            text="Websites creating using React and Reduxx"
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

export default Cards

