/**
 * Created by PC on 2017/7/13.
 */

import React,{Component} from 'react';
import {Media,Image,Grid,Row,Col,Button} from 'react-bootstrap';

import "./index.scss";
import "../common.scss"

import Header from "../headers/index";
import Footer from "../footer/index";

export default class TutorTeachersDetails extends Component{

    constructor(props){
        super(props);
        this.state={
            id:'',
        }
    }

    componentDidMount(){
        const params=this.props.location;
        // console.log(params);
        this.setState({
            id: params.query.id,
        })
    }

    _buttonClickToOrderTutor(){
        console.log('我要预约你知道吗');
    }

    _buttonClickToCancelOrderedTutor(){
        console.log('我要取消取悦');
    }
    render(){
        return(
            <div>
                {/*头部导航开始*/}
                <Header />
                {/*头部导航结束*/}
                <Grid>
                    <Row className="show-grid">
                        <Col xs={12} md={10}>
                            <Media>
                                <Media.Left>
                                    <Image width={200} height={200} src="/assets/thumbnail.png" circle  alt="Image"/>
                                </Media.Left>
                                <Media.Body>
                                    <Media.Heading>{this.state.id}王嘉豪</Media.Heading>
                                    <p>教育背景：Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                                    <p>授课时常：600小时</p>
                                    <p>教育理念：用最牛逼的办法，交出最牛逼的人，我们都是i牛逼的人</p>
                                    <Button onClick={this._buttonClickToOrderTutor}>预约</Button>
                                    <Button onClick={this._buttonClickToCancelOrderedTutor}>取消预约</Button>
                                </Media.Body>
                            </Media>
                        </Col>

                    </Row>
                </Grid>

            </div>
        )
    }
}