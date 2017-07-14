/**
 * Created by PC on 2017/7/13.
 */
import React, {Component,PropTypes} from 'react';
import {Grid, Row, Col, Media, Button,Image} from 'react-bootstrap';
import {browserHistory,hashHistory } from 'react-router';
import { Link } from 'react-router-dom'


import "./index.scss";
import "../common.scss";
import briefIntroduction from '../../static/test.json';

export default class TutorBriefIntroduction extends Component {


    constructor(props) {
        super(props);
        this.state = {

        }

    }


    render() {
        let that = this;
        var briefIntro =
            briefIntroduction.map(function (data) {
                return (
                    <Col xs={12} md={6} key={data.name}>
                        <Media>
                            <Media.Left>
                                <Image width={200} height={200} src="/assets/thumbnail.png" circle alt="Image" />
                            </Media.Left>
                            <Media.Body>
                                <Media.Heading >
                                    <Link to={{ pathname: '/teacher', query: { id: data.id } }}>
                                        {data.name}
                                    </Link>
                                </Media.Heading>
                                <h3>{data.subject}</h3>
                                <p>{data.teacherBackground}</p>
                            </Media.Body>
                        </Media>
                    </Col>
                )
            })
        return (
            <div>
                <Grid>
                    <Row className="show-grid">

                        {briefIntro}

                    </Row>
                </Grid>
            </div>
        )
    }
}

