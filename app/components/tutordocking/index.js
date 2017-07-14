/**
 * Created by PC on 2017/7/7.
 */


import React, {Component} from 'react';
import {Grid, Row, Col, Thumbnail, Button, Well} from "react-bootstrap";

import "./index.scss";
import "../common.scss"

import Header from "../headers/index";
import Footer from "../footer/index";
import ContentSearch from '../searchBar/index';
import TutorBriefIntroduction from "../tutorbriefintroduction/index";
export default class TutorAbutment extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                {/*头部导航开始*/}
                <Header/>
                {/*头部导航结束*/}
                {/*搜索框开始*/}
                <ContentSearch />
                {/*搜索框结束*/}
                {/*学科内容导航开始*/}
                <Grid>
                    <Row>
                        <Col xs={6} md={3}>
                            <Thumbnail src="/assets/thumbnaildiv.png" alt="242x200">
                                <h3>语文</h3>
                                <p>Description</p>
                                <p>
                                    <Button bsStyle="primary">Button</Button>&nbsp;
                                    <Button bsStyle="default">Button</Button>
                                </p>
                            </Thumbnail>
                        </Col>
                        <Col xs={6} md={3}>
                            <Thumbnail src="/assets/thumbnaildiv.png" alt="242x200">
                                <h3>数学</h3>
                                <p>Description</p>
                                <p>
                                    <Button bsStyle="primary">Button</Button>&nbsp;
                                    <Button bsStyle="default">Button</Button>
                                </p>
                            </Thumbnail>
                        </Col>
                        <Col xs={6} md={3}>
                            <Thumbnail src="/assets/thumbnaildiv.png" alt="242x200">
                                <h3>英语</h3>
                                <p>Description</p>
                                <p>
                                    <Button bsStyle="primary">Button</Button>&nbsp;
                                    <Button bsStyle="default">Button</Button>
                                </p>
                            </Thumbnail>
                        </Col>
                        <Col xs={6} md={3}>
                            <Thumbnail src="/assets/thumbnaildiv.png" alt="242x200">
                                <h3>物理</h3>
                                <p>Description</p>
                                <p>
                                    <Button bsStyle="primary">Button</Button>&nbsp;
                                    <Button bsStyle="default">Button</Button>
                                </p>
                            </Thumbnail>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6} md={3}>
                            <Thumbnail src="/assets/thumbnaildiv.png" alt="242x200">
                                <h3>化学</h3>
                                <p>Description</p>
                                <p>
                                    <Button bsStyle="primary">Button</Button>&nbsp;
                                    <Button bsStyle="default">Button</Button>
                                </p>
                            </Thumbnail>
                        </Col>
                        <Col xs={6} md={3}>
                            <Thumbnail src="/assets/thumbnaildiv.png" alt="242x200">
                                <h3>生物</h3>
                                <p>Description</p>
                                <p>
                                    <Button bsStyle="primary">Button</Button>&nbsp;
                                    <Button bsStyle="default">Button</Button>
                                </p>
                            </Thumbnail>
                        </Col>
                        <Col xs={6} md={3}>
                            <Thumbnail src="/assets/thumbnaildiv.png" alt="242x200">
                                <h3>历史</h3>
                                <p>Description</p>
                                <p>
                                    <Button bsStyle="primary">Button</Button>&nbsp;
                                    <Button bsStyle="default">Button</Button>
                                </p>
                            </Thumbnail>
                        </Col>
                        <Col xs={6} md={3}>
                            <Thumbnail src="/assets/thumbnaildiv.png" alt="242x200">
                                <h3>政治</h3>
                                <p>Description</p>
                                <p>
                                    <Button bsStyle="primary">Button</Button>&nbsp;
                                    <Button bsStyle="default">Button</Button>
                                </p>
                            </Thumbnail>
                        </Col>
                        <Col xs={6} md={3}>
                            <Thumbnail src="/assets/thumbnaildiv.png" alt="242x200">
                                <h3>地理</h3>
                                <p>Description</p>
                                <p>
                                    <Button bsStyle="primary">Button</Button>&nbsp;
                                    <Button bsStyle="default">Button</Button>
                                </p>
                            </Thumbnail>
                        </Col>
                    </Row>
                </Grid>
                {/*学科内容导航结束*/}
                {/*辅导老师简要介绍*/}
                <Grid>
                    <Row>
                        <Col xs={12} md={12}>
                          <div className="container-top-bottom-padding ">
                             <div className="block-introduction">
                                 <Col xs={6} md={6}>家教老师介绍</Col>
                                 <Col xs={1} md={1}  className="sub-index-button">
                                     <div>语文</div>
                                 </Col>
                                 <Col xs={1} xsOffset={1} md={1} mdOffset={1} className="sub-index-button">
                                     数学
                                 </Col>
                                 <Col xs={1} xsOffset={1} md={1} mdOffset={1} className="sub-index-button">
                                     英语
                                 </Col>
                             </div>
                          </div>
                        </Col>
                    </Row>
                </Grid>
                <TutorBriefIntroduction/>
                {/*辅导老师简要介绍结束*/}
            </div>
        )
    }
}