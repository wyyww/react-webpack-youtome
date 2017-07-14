/**
 * Created by PC on 2017/7/13.
 */

import React,{Component} from 'react';
import {Media,Image} from 'react-bootstrap';

import "./index.scss";
import "../common.scss"

import Header from "../headers/index";
import Footer from "../footer/index";

export default class TutorTeachersDetails extends Component{

    constructor(props){
        super(props);
        this.state={

        }
    }

    componentDidMount(){
        console.log(this.props.location)
    }

    render(){
        return(
            <div>
                {/*头部导航开始*/}
                <Header />
                {/*头部导航结束*/}
                <Media>
                    <Media.Left>
                        <Image width={64} height={64} src="/assets/thumbnail.png" circle  alt="Image"/>
                    </Media.Left>
                    <Media.Body>
                        <Media.Heading>Media Heading</Media.Heading>
                        <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                    </Media.Body>
                </Media>
            </div>
        )
    }
}