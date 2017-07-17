/**
 * Created by PC on 2017/7/7.
 */


import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Grid, Row, Col, Thumbnail, Button, Well} from "react-bootstrap";

import "./index.scss";
import "../common.scss"

import Header from "../headers/index";
import Footer from "../footer/index";
import ContentSearch from '../searchBar/index';
import TutorBriefIntroduction from "../tutorbriefintroduction/index";

import subjectDescription from '../../static/subjectAndDescription.json';

export default class TutorAbutment extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        let that=this;
        var newArray=
            subjectDescription.map(function (data) {
            return (
                <Col xs={6} md={3} key={data.subjectName}>
                    <Thumbnail src="/assets/thumbnaildiv.png" alt="242x200">
                        <h3>{data.subjectName}</h3>
                        <p>{data.description}</p>
                        {/*<p onClick={that._buttonClickToGetSubjectDetails.bind(this,data.key)}>*/}
                            {/*<Button type="button" bsStyle="default" >点击查看</Button>*/}
                        {/*</p>*/}
                        <Link to={{ pathname: '/courseIntroduction', query: { subject_id: data.key } }} className="link_hover">
                            <Button type="button" bsStyle="default" >点击查看</Button>
                        </Link>
                    </Thumbnail>
                </Col>
            )
        });
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
                        {newArray}
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
                                    <Col xs={1} md={1} className="sub-index-button">
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