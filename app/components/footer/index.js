/**
 * Created by PC on 2017/7/7.
 */

import React ,{Component} from 'react';
import {Row,Col} from 'react-bootstrap';

import '../common.scss'
import './index.scss'
export default class Footer extends Component{

    render(){
        return(
            <div className="container-top-bottom-padding footer-container ">
                    <Col md={8} mdPush={1}>公司名称：西安彼端科技有限责任公司</Col>
                    <Col md={8} mdPush={1}>公司地址：西安市高新区高新一中对面</Col>
                    <Col md={8} mdPush={1}>公司联系电话：029-7839204</Col>
                     <Col md={8} mdPush={1}>公司邮箱：1487382773@163.com</Col>
                     <Col md={12} mdPush={1}>©2017 youtome 使用youtome前必读 意见反馈</Col>
            </div>
        )
    }
}