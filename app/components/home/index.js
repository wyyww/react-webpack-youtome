/**
 * Created by PC on 2017/7/6.
 */
import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {Carousel,Grid,Row,Col} from 'react-bootstrap';

import  './index.scss';
import '../common.scss'
import Header from '../headers/index';
import Footer from '../footer/index';

const dummySentences = ['Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', 'Donec hendrerit tempor tellus.', 'Donec pretium posuere tellus.', 'Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus.', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 'Nulla posuere.', 'Donec vitae dolor.', 'Nullam tristique diam non turpis.', 'Cras placerat accumsan nulla.', 'Nullam rutrum.', 'Nam vestibulum accumsan nisl.'];
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
                <div className="container-top-bottom-padding section-header">
                    <h1>YOUTOME</h1>
                    <p>教育是事业，其意义在于献身；教育是科学，其价值在于求真；教育是艺术，其生命在于创新</p>
                    <p>教师是学生发展的促进者</p>
                </div>
                <Grid className="container-top-bottom-padding general-background-color section-chunk" >
                    <Row className="show-grid">
                        <Col sm={6} md={6} mdPush={1}><img className="section-avater" alt="报考对接" src={require('../../assets/timg.jpg')}/></Col>
                        <Col sm={4} md={6} ><div className="section-content">{dummySentences.slice(0, 3).join(' ')}</div></Col>
                    </Row>
                </Grid>
                <Grid className="container-top-bottom-padding section-chunk">
                    <Row className="show-grid">
                        <Col sm={4} md={6} mdPush={1}><Link to="/tutor" className="section-content">家教对接（点击查看详情）</Link></Col>
                        <Col sm={4} md={6} ><img className="section-avater" alt="报考对接" src={require('../../assets/9b.jpg')}/></Col>
                    </Row>
                </Grid>
                <Grid className="container-top-bottom-padding general-background-color section-chunk"  >
                    <Row className="show-grid">
                        <Col sm={6} md={6} mdPush={1}><img className="section-avater" alt="报考对接" src={require('../../assets/edu.jpg')}/></Col>
                        <Col sm={4} md={6} ><h2 className="section-content">报考对接</h2></Col>
                    </Row>
                </Grid>
                <Footer />
            </div>
        )
    }
}