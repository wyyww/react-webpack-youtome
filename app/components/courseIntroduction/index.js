/**
 * Created by PC on 2017/7/17.
 */
import React ,{Component} from 'react'
import {Media,Image,Grid,Row,Col} from 'react-bootstrap';

import "./index.scss";
import "../common.scss"

import Header from "../headers/index";
import Footer from "../footer/index";

export default class ourseIntroduction extends Component{

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
                                    <Media.Heading>{this.state.id}C语文</Media.Heading>
                                    <p>课程介绍：买不了吃亏，买不了上当</p>
                                    <p>课程价格：600一学期</p>
                                </Media.Body>
                            </Media>
                        </Col>

                    </Row>
                </Grid>

            </div>
        )
    }
}