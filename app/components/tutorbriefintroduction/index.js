/**
 * Created by PC on 2017/7/13.
 */
import React, {Component} from 'react';
import {Grid, Row, Col, Media, Button} from 'react-bootstrap';

import "./index.scss";
import "../common.scss";
import json from '../../static/test.json';

export default class TutorBriefIntroduction extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }



    render() {
        return (
            <div>
                <Grid>
                    <Row className="show-grid">

                        {
                            json.map(function (data) {
                                return (
                                    <Col xs={12} md={6} key={data.id}>
                                        <Media>
                                            <Media.Left>
                                                <img width={200} height={200} src="/assets/thumbnail.png" alt="Image"/>
                                            </Media.Left>
                                            <Media.Body>
                                                <Media.Heading>{data.name}</Media.Heading>
                                                <p>{data.subject}</p>
                                                <p>{data.teacherBackground}</p>
                                            </Media.Body>
                                        </Media>
                                    </Col>
                                )
                            })
                        }

                    </Row>
                </Grid>
            </div>
        )
    }
}

