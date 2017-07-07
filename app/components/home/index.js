/**
 * Created by PC on 2017/7/6.
 */
import React, {Component} from 'react';

import {Carousel} from 'react-bootstrap';

import  './index.scss';
import Header from '../headers/index';
import Footer from '../footer/index'
export default class Home extends Component{

    render(){
        return(
            <div >
                <Header />
                <Carousel>
                    <Carousel.Item>
                        <img className="carousel-img-style" alt="1300x500" src={require('../../assets/screen01.jpg')}/>
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="carousel-img-style" alt="1300x500" src={require("../../assets/screen02.jpg")}/>
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="carousel-img-style" alt="1300x500" src={require("../../assets/screen03.jpg")}/>
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <Footer />
            </div>
        )
    }
}