/**
 * Created by PC on 2017/7/13.
 */
import React, {Component} from 'react';

import {Grid, Row, Col, Media, Button} from 'react-bootstrap';

import "./index.scss";
import "../common.scss";
// import Button from "../button/index";

export default class TutorBriefIntroduction extends Component {

    constructor(props) {
        super(props);
        this.state = {}
        this.handleGetTeacherIntroduction = this.handleGetTeacherIntroduction.bind(this);
    }

    handleGetTeacherIntroduction() {

        fetch('http://wenguolong.tk/test.json',
            {
                method: 'POST',
                mode: "no-cors",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
            })
            .then(function(res){
                return res.json();
            })
            .then(function(response){
                console.log(response);
            })
            .catch(function(err){
                console.log(err)
            })
            // .then(res => res.json())
            // .then(res => console.log(res))
            //     .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <Button onClick={this.handleGetTeacherIntroduction}>点击查看老师信息</Button>
                <Grid>
                    <Row className="show-grid">
                        <Col xs={12} md={10}>
                            <Media>
                                <Media.Left>
                                    <img width={200} height={200} src="/assets/thumbnail.png" alt="Image"/>
                                </Media.Left>
                                <Media.Body>
                                    <Media.Heading>Media Heading</Media.Heading>
                                    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
                                        sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus
                                        viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec
                                        lacinia congue felis in faucibus.</p>
                                </Media.Body>
                            </Media>
                            <Media>
                                <Media.Left>
                                    <img width={200} height={200} src="/assets/thumbnail.png" alt="Image"/>
                                </Media.Left>
                                <Media.Body>
                                    <Media.Heading>Media Heading</Media.Heading>
                                    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
                                        sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus
                                        viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec
                                        lacinia congue felis in faucibus.</p>
                                </Media.Body>
                            </Media>
                        </Col>
                    </Row>

                </Grid>
            </div>
        )
    }
}

